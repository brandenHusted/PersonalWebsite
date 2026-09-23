from flask import Flask, jsonify
from flask_cors import CORS
import pyodbc
import pandas as pd

app = Flask(__name__)
# enables cross-origin resource sharing (CORS) for the Flask application, allowing it to handle requests from different origins.
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
# APPLE STOCK DROPS > 5%
# ==============================

@app.route("/api/stock-drops/", methods=["GET"])
def get_stock_drops():
    """Return AAPL trading days where the closing price dropped 5% or more."""

    try:
        connect = pyodbc.connect(connection_string)

        query = """
        SELECT
            TradeDate,
            Ticker,
            ClosePrice,
            HighPrice,
            LowPrice,
            Volume,
            Percent_Change
        FROM
        (
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
                    )
                    /
                    LAG(ClosePrice) OVER (
                        PARTITION BY Ticker
                        ORDER BY TradeDate
                    )
                ) * 100 AS Percent_Change

            FROM DailySTOCKDATA

            WHERE Ticker = 'AAPL'
        ) StockChanges

        WHERE Percent_Change <= -5

        ORDER BY TradeDate;
        """

        results = pd.read_sql_query(
            query,
            connect
        )

        connect.close()

        # Convert dates to strings so Flask can return them as JSON
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
    /api/stock-drops
    """


if __name__ == "__main__":

    app.run(
        debug=True
    )