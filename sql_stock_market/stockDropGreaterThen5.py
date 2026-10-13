
import yfinance as yf
import pandas as pd
import pyodbc
import os
import requests
from datetime import datetime, timedelta
from pathlib import Path
from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
load_dotenv()

# --------------------------------------------------
# FLASK APP SETUP
# --------------------------------------------------

app = Flask(__name__)
CORS(app)

# --------------------------------------------------
# SQL SERVER CONNECTION
# --------------------------------------------------

connection_string = (
    'Driver={ODBC Driver 18 for SQL Server};'
    'Server=localhost;'
    'Database=StockMarketDB;'
    'Trusted_Connection=yes;'
    'TrustServerCertificate=yes;'
)

# --------------------------------------------------
# LOGGING SETUP
# --------------------------------------------------

script_folder = Path(__file__).resolve().parent
log_folder = script_folder / "logs"
log_folder.mkdir(exist_ok=True)

log_file = log_folder / "apple_stock_drops.log"


def log(message):
    """Print messages and save them to a log file."""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    formatted_message = f"{timestamp} - {message}"

    print(formatted_message)

    with open(log_file, "a", encoding="utf-8") as file:
        file.write(formatted_message + "\n")

# --------------------------------------------------
# Use External API for Chatbot Responses (OpenAI GPT)
# --------------------------------------------------
@app.route("/api/chat", methods=["POST"])
def chat():
    body = request.get_json(silent=True) or {}
    question = (body.get("question") or "").strip()
    context = body.get("context") or ""

    if not question:
        return jsonify({"error": "No question provided"}), 400

    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        return jsonify({"error": "OPENAI_API_KEY is not set on the server"}), 500

    system_prompt = (
        "You are a stock-data assistant for an AAPL dashboard. "
        "Use the data summary provided to answer. If the data doesn't "
        "contain the answer, say so, then answer from general knowledge. "
        "Do not give personalized financial advice or predictions. "
        "Keep answers under 150 words."
    )

    try:
        r = requests.post(
            "https://api.openai.com/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
            },
            json={
                "model": "gpt-4o-mini",  # swap for whichever model you want
                "messages": [
                    {"role": "system", "content": system_prompt},
                    {"role": "user",
                     "content": f"AAPL data summary:\n{context}\n\nQuestion: {question}"},
                ],
                "max_tokens": 400,
            },
            timeout=30,
        )
        r.raise_for_status()
        answer = r.json()["choices"][0]["message"]["content"]
        return jsonify({"answer": answer})
    except requests.RequestException as e:
        return jsonify({"error": f"OpenAI request failed: {e}"}), 502
    
# --------------------------------------------------
# UPDATE SQL SERVER WITH MISSING AAPL DATA
# --------------------------------------------------

def update_aapl_data():
    """
    Download missing AAPL daily records from Yahoo Finance
    and append them to DailySTOCKDATA without duplicating
    existing AAPL trading dates.
    """

    log("Checking SQL Server for the latest AAPL record...")

    connect = pyodbc.connect(connection_string)

    try:
        cursor = connect.cursor()

        cursor.execute("""
            SELECT MAX(TradeDate)
            FROM DailySTOCKDATA
            WHERE Ticker = 'AAPL'
        """)

        latest_date = cursor.fetchone()[0]

        if latest_date is None:
            # Preserve the existing table and backfill from
            # the beginning of May 2022.
            start_date = datetime(2022, 5, 1).date()
        else:
            # Download from the last stored date, inclusive,
            # so a missing record on that date can be repaired.
            start_date = latest_date - timedelta(days=7)

        log(f"Downloading AAPL data from {start_date}...")

        data = yf.download(
            "AAPL",
            start=start_date.isoformat(),
            interval="1d",
            auto_adjust=False,
            progress=False,
            threads=False,
            multi_level_index=False
        )

        if data is None or data.empty:
            log("Yahoo Finance returned no AAPL records.")
            return

        # Handle yfinance versions with MultiIndex columns.
        if isinstance(data.columns, pd.MultiIndex):
            data.columns = data.columns.get_level_values(0)

        data = data.dropna(subset=["Close"]).copy()

        inserted = 0

        for date, row in data.iterrows():
            trade_date = pd.Timestamp(date).date()

            close_price = float(row["Close"])
            high_price = (
                float(row["High"])
                if pd.notna(row["High"]) else None
            )
            low_price = (
                float(row["Low"])
                if pd.notna(row["Low"]) else None
            )
            volume = (
                int(row["Volume"])
                if pd.notna(row["Volume"]) else None
            )

            # Insert only dates that are not already present.
            cursor.execute("""
                IF NOT EXISTS (
                    SELECT 1
                    FROM DailySTOCKDATA
                    WHERE Ticker = 'AAPL'
                      AND TradeDate >= ?
                      AND TradeDate < DATEADD(day, 1, ?)
                )
                BEGIN
                    INSERT INTO DailySTOCKDATA (
                        TradeDate,
                        Ticker,
                        ClosePrice,
                        HighPrice,
                        LowPrice,
                        Volume
                    )
                    VALUES (?, 'AAPL', ?, ?, ?, ?)
                END
            """,
                trade_date,
                trade_date,
                trade_date,
                close_price,
                high_price,
                low_price,
                volume
            )

            # Check the existence of the date afterward rather
            # than relying on driver-specific rowcount behavior.
            cursor.execute("""
                SELECT COUNT(*)
                FROM DailySTOCKDATA
                WHERE Ticker = 'AAPL'
                  AND TradeDate >= ?
                  AND TradeDate < DATEADD(day, 1, ?)
            """, trade_date, trade_date)

            if cursor.fetchone()[0] == 1:
                inserted += 1

        connect.commit()
        log(f"AAPL update completed. Checked {len(data)} days.")

    except Exception:
        connect.rollback()
        log("ERROR updating AAPL data.")
        raise

    finally:
        connect.close()


# --------------------------------------------------
# GET AAPL STOCK DROPS GREATER THAN 5%
# --------------------------------------------------

def fetch_aapl_stock_drops():
    """
    Calculate closing-price declines of 5% or greater
    from the records stored in SQL Server.
    """

    log("Reading AAPL stock-drop records from SQL Server...")

    connect = pyodbc.connect(connection_string)

    try:
        query = """
            WITH StockChanges AS (
                SELECT
                    TradeDate,
                    Ticker,
                    ClosePrice,
                    HighPrice,
                    LowPrice,
                    Volume,
                    (
                        (
                            ClosePrice -
                            LAG(ClosePrice) OVER (
                                PARTITION BY Ticker
                                ORDER BY TradeDate
                            )
                        ) * 100.0
                        /
                        NULLIF(
                            LAG(ClosePrice) OVER (
                                PARTITION BY Ticker
                                ORDER BY TradeDate
                            ),
                            0
                        )
                    ) AS Percent_Change
                FROM DailySTOCKDATA
                WHERE Ticker = 'AAPL'
            )
            SELECT
                TradeDate,
                Ticker,
                ClosePrice,
                HighPrice,
                LowPrice,
                Volume,
                Percent_Change
            FROM StockChanges
            WHERE Percent_Change <= -5
            ORDER BY TradeDate;
        """

        results = pd.read_sql_query(query, connect)

        output = []

        for _, row in results.iterrows():
            output.append({
                "TradeDate": pd.Timestamp(
                    row["TradeDate"]
                ).strftime("%Y-%m-%d"),
                "Ticker": str(row["Ticker"]),
                "ClosePrice": (
                    float(row["ClosePrice"])
                    if pd.notna(row["ClosePrice"]) else None
                ),
                "HighPrice": (
                    float(row["HighPrice"])
                    if pd.notna(row["HighPrice"]) else None
                ),
                "LowPrice": (
                    float(row["LowPrice"])
                    if pd.notna(row["LowPrice"]) else None
                ),
                "Volume": (
                    int(row["Volume"])
                    if pd.notna(row["Volume"]) else None
                ),
                "Percent_Change": (
                    round(float(row["Percent_Change"]), 4)
                    if pd.notna(row["Percent_Change"]) else None
                )
            })

        log(f"Found {len(output)} AAPL drops of 5% or more.")
        return output

    finally:
        connect.close()


# --------------------------------------------------
# API: APPLE STOCK DROPS GREATER THAN 5%
# --------------------------------------------------

@app.route("/api/stock-drops", methods=["GET"])
@app.route("/api/stock-drops/", methods=["GET"])
def get_stock_drops():
    try:
        # Refresh SQL data before returning the graph results.
        update_aapl_data()

        results = fetch_aapl_stock_drops()
        response = jsonify(results)

        response.headers["Cache-Control"] = (
            "no-store, no-cache, must-revalidate, max-age=0"
        )
        response.headers["Pragma"] = "no-cache"
        response.headers["Expires"] = "0"

        return response

    except Exception as e:
        log(f"ERROR retrieving AAPL stock drops: {str(e)}")

        return jsonify({
            "error": str(e)
        }), 500


# --------------------------------------------------
# HOME
# --------------------------------------------------

@app.route("/")
def home():
    return """
    Stock Market API is running.

    Endpoint: /api/stock-drops

    Data source: Yahoo Finance
    Stock: AAPL
    Database: StockMarketDB
    Table: DailySTOCKDATA
    Update method: Check for missing records on API requests
    """


# --------------------------------------------------
# RUN FLASK
# --------------------------------------------------

if __name__ == "__main__":
    log("Starting the AAPL Stock Drops API...")

    app.run(
        host="127.0.0.1",
        port=5000,
        debug=False
    )