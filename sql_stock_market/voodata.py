from flask import Flask, jsonify
from flask_cors import CORS
import pyodbc

app = Flask(__name__)
CORS(app)

connection_string = (
    'Driver={ODBC Driver 18 for SQL Server};'
    'Server=localhost;'
    'Database=VOOStockAnalysis;'
    'Trusted_Connection=yes;'
    'TrustServerCertificate=yes;'
)


@app.route("/api/voo")
def get_voo():

    connect = pyodbc.connect(connection_string)
    cursor = connect.cursor()

    cursor.execute("""
        SELECT
            [Date],
            [Close]
        FROM VOO_Stock_Data
        WHERE [Date] IS NOT NULL
          AND [Close] IS NOT NULL
        ORDER BY [Date];
    """)

    rows = cursor.fetchall()

    data = []

    for row in rows:
        data.append({
            "date": row[0].strftime("%Y-%m-%d"),
            "close": float(row[1])
        })

    cursor.close()
    connect.close()

    return jsonify(data)


@app.route("/")
def home():
    return "VOO API is running. Go to /api/voo"


if __name__ == "__main__":
    app.run(debug=True)