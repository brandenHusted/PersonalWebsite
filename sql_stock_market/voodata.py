from flask import Flask, jsonify
from flask_cors import CORS
import pyodbc
import pandas as pd

app = Flask(__name__)
CORS(app)

voo_connection_string = (
    'Driver={ODBC Driver 18 for SQL Server};'
    'Server=localhost;'
    'Database=VOOStockAnalysis;'
    'Trusted_Connection=yes;'
    'TrustServerCertificate=yes;'
)

@app.route("/api/voo")
def get_voo():

    try:

        connect = pyodbc.connect(
            voo_connection_string
        )

        cursor = connect.cursor()

        cursor.execute("""
            SELECT
                [Date],
                [Close]
            FROM dbo.VOO_Stock_Data
            WHERE [Date] IS NOT NULL
              AND [Close] IS NOT NULL
            ORDER BY [Date];
        """)

        rows = cursor.fetchall()

        data = [
            {
                "date": row[0].strftime("%Y-%m-%d"),
                "close": float(row[1])
            }
            for row in rows
        ]

        cursor.close()
        connect.close()

        return jsonify(data)

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 500


@app.route("/")
def home():
    return "VOO API is running. Go to /api/voo"


if __name__ == "__main__":
    app.run(debug=True)

