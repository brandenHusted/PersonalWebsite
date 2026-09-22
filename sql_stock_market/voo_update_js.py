import yfinance as yf
import pyodbc
from datetime import datetime
from pathlib import Path
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
#updated VOO on website and localhost
# Flask app setup
app = Flask(__name__)
CORS(app)

# --------------------------------------------------
# LOGGING SETUP
# --------------------------------------------------

script_folder = Path(__file__).resolve().parent
log_folder = script_folder / "logs"
log_folder.mkdir(exist_ok=True)

log_file = log_folder / "voo_update.log"

def log(message):
    """Print message to console and save it to log file."""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    formatted_message = f"{timestamp} - {message}"
    print(formatted_message)
    with open(log_file, "a", encoding="utf-8") as file:
        file.write(formatted_message + "\n")

# --------------------------------------------------
# DATABASE CONNECTION
# --------------------------------------------------

voo_connection_string = (
    'Driver={ODBC Driver 18 for SQL Server};'
    'Server=localhost;'
    'Database=VOOStockAnalysis;'
    'Trusted_Connection=yes;'
    'TrustServerCertificate=yes;'
)

def get_database_connection():
    """Establish and return a database connection."""
    return pyodbc.connect(voo_connection_string)

def fetch_all_voo_rows():
    """Read every VOO row from the database, oldest first, as lowercase-keyed dicts."""
    connection = get_database_connection()
    cursor = connection.cursor()

    cursor.execute(
        "SELECT [Date], [Open], [High], [Low], [Close], [Volume] "
        "FROM dbo.VOO_Stock_Data ORDER BY [Date] ASC"
    )
    rows = cursor.fetchall()

    cursor.close()
    connection.close()

    return [
        {
            "date": row[0].strftime("%Y-%m-%d"),
            "open": row[1],
            "high": row[2],
            "low": row[3],
            "close": row[4],
            "volume": row[5]
        }
        for row in rows
    ]

# --------------------------------------------------
# FLASK ROUTES
# --------------------------------------------------

@app.route('/')
def index():
    """Serve the website."""
    return send_from_directory('static', 'index.html')

@app.route('/api/voo', methods=['GET'])
def get_voo_data():
    """Fetch and return VOO stock data from the database."""
    try:
        return jsonify(fetch_all_voo_rows())

    except Exception as e:
        log(f"ERROR: {str(e)}")
        return jsonify({"error": "Failed to fetch data"}), 500

@app.route('/api/update-voo', methods=['GET'])
def update_voo_data():
    try:
        log("Downloading latest VOO data...")

        data = yf.download(
            "VOO",
            period="6d",
            interval="1d",
            auto_adjust=False
        )

        data = data.reset_index()

        if hasattr(data.columns, "nlevels") and data.columns.nlevels > 1:
            data.columns = data.columns.get_level_values(0)

        results = []

        for _, row in data.iterrows():
            results.append({
                "date": row["Date"].strftime("%Y-%m-%d"),
                "open": float(row["Open"]),
                "high": float(row["High"]),
                "low": float(row["Low"]),
                "close": float(row["Close"]),
                "volume": int(row["Volume"])
            })

        log(f"Downloaded {len(results)} rows of current VOO data")

        return jsonify(results)

    except Exception as e:
        log(f"ERROR: {str(e)}")
        return jsonify({"error": "Failed to download VOO data"}), 500

# --------------------------------------------------
# MAIN ENTRY POINT
# --------------------------------------------------

if __name__ == '__main__':
    app.run(debug=True)
