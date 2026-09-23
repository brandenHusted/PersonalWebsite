from flask import Flask, jsonify
from flask_cors import CORS
import pyodbc
import pandas as pd

# Ensure Flask app is initialized correctly
app = Flask(__name__)
CORS(app)

# SQL Server connection
connection_string = (
    'Driver={ODBC Driver 18 for SQL Server};'
    'Server=localhost;'
    'Database=StockMarketDB;'
    'Trusted_Connection=yes;'
    'TrustServerCertificate=yes;'
)

# ==============================
# APPLE STOCK Volume, HIGH, LOW
# ==============================

@app.route("/api/volume/", methods=["GET"], strict_slashes=False)
def volume():
    """Return AAPL volume, high price, and low price data."""

    try:
        connect = pyodbc.connect(connection_string)

        volume_high_low_query = """
        SELECT
            TradeDate,
            Ticker,
            Volume,
            HighPrice,
            LowPrice
        FROM DailySTOCKDATA
        WHERE Ticker = 'AAPL'
        ORDER BY TradeDate;
        """

        results = pd.read_sql_query(
            volume_high_low_query,
            connect
        )

        connect.close()

        # Convert TradeDate to a JSON-friendly string
        if "TradeDate" in results.columns:
            results["TradeDate"] = results["TradeDate"].astype(str)

        data = results.to_dict(
            orient="records"
        )

        return jsonify(data)

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 500
    
# ==============================
# HOME
# ==============================

@app.route("/")
def home():

    return """
    Stock Market API is running.

    Available endpoints:
    /api/volume
    """


if __name__ == "__main__":

    app.run(
        debug=True
    )