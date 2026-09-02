import yfinance as yf
import pyodbc
from datetime import datetime
from pathlib import Path

# --------------------------------------------------
# LOGGING SETUP
# --------------------------------------------------

# Creates a "logs" folder next to this Python file
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
# START UPDATE
# --------------------------------------------------

log("=" * 50)
log("Starting VOO update")

try:

    # --------------------------------------------------
    # DOWNLOAD VOO DATA
    # --------------------------------------------------

    log("Downloading VOO stock data...")

    data = yf.download(
        "VOO",
        period="5d",
        interval="1d",
        auto_adjust=False
    )

    data = data.reset_index()

    # Fix newer yfinance MultiIndex columns
    if hasattr(data.columns, "nlevels") and data.columns.nlevels > 1:
        data.columns = data.columns.get_level_values(0)

    log(f"Downloaded {len(data)} rows of data")

    # --------------------------------------------------
    # DATABASE CONNECTION
    # --------------------------------------------------

    connection_string = (
        'Driver={ODBC Driver 18 for SQL Server};'
        'Server=localhost;'
        'Database=VOOStockAnalysis;'
        'Trusted_Connection=yes;'
        'TrustServerCertificate=yes;'
    )

    log("Connecting to SQL Server...")

    connect = pyodbc.connect(connection_string)
    cursor = connect.cursor()

    log("Connected to SQL Server successfully")

    inserted_count = 0
    existing_count = 0

    # --------------------------------------------------
    # PROCESS DATA
    # --------------------------------------------------

    for _, row in data.iterrows():

        trade_date = row["Date"].date()

        open_price = float(row["Open"])
        high_price = float(row["High"])
        low_price = float(row["Low"])
        close_price = float(row["Close"])
        volume = int(row["Volume"])

        cursor.execute(
            """
            SELECT COUNT(*)
            FROM dbo.VOO_Stock_Data
            WHERE [Date] = ?
            """,
            trade_date
        )

        exists = cursor.fetchone()[0]

        if exists == 0:

            cursor.execute(
                """
                INSERT INTO dbo.VOO_Stock_Data
                (
                    [Date],
                    [Open],
                    [High],
                    [Low],
                    [Close],
                    [Volume]
                )
                VALUES (?, ?, ?, ?, ?, ?)
                """,
                trade_date,
                open_price,
                high_price,
                low_price,
                close_price,
                volume
            )

            log(f"Inserted new data for {trade_date}")
            inserted_count += 1

        else:

            log(f"{trade_date} already exists")
            existing_count += 1

    # --------------------------------------------------
    # SAVE DATABASE CHANGES
    # --------------------------------------------------

    connect.commit()

    log("Database changes committed")

    cursor.close()
    connect.close()

    # --------------------------------------------------
    # FINISHED
    # --------------------------------------------------

    log(f"Rows inserted: {inserted_count}")
    log(f"Rows already existing: {existing_count}")
    log("VOO update completed successfully")

except Exception as e:

    log(f"ERROR: {str(e)}")

    try:
        cursor.close()
        connect.close()
    except:
        pass

    log("VOO update failed")

finally:

    log(f"Finished at {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    log("=" * 50)