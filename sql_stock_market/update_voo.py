import yfinance as yf
import pyodbc
from datetime import datetime
from pathlib import Path
# runs daily to update the VOO stock data in the SQL Server database.
# We use yfinance to fetch the latest VOO stock data, pyodbc to connect to the SQL Server database and show everything in terminal when ran. The script also includes logging functionality to keep track of the update process.
# Windows task manager is used to schedule this script to run daily, ensuring that the VOO stock data in the database is always up-to-date.
# --------------------------------------------------
# LOGGING SETUP
# --------------------------------------------------

# Creates a "logs" folder next to this Python file
script_folder = Path(__file__).resolve().parent
log_folder = script_folder / "logs"
log_folder.mkdir(exist_ok=True)

log_file = log_folder / "voo_update.log"
# for graph later
column_width = 8

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

log("=" * 60)
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
    # DISPLAY DOWNLOADED DATA
    # --------------------------------------------------

    print()
    print("=" * 80)
    print("VOO DATA DOWNLOADED FROM YAHOO FINANCE")
    print("=" * 80)

    for _, row in data.iterrows():

        trade_date = row["Date"].date()

        open_price = float(row["Open"])
        high_price = float(row["High"])
        low_price = float(row["Low"])
        close_price = float(row["Close"])
        volume = int(row["Volume"])

        print(
            f"Date: {trade_date} | "
            f"Open: ${open_price:.2f} | "
            f"High: ${high_price:.2f} | "
            f"Low: ${low_price:.2f} | "
            f"Close: ${close_price:.2f} | "
            f"Volume: {volume:,}"
        )

    print("=" * 80)
    print()

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

    print()
    print("=" * 80)
    print("DATABASE UPDATE")
    print("=" * 80)

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

            print(
                f"[INSERTED] {trade_date} | "
                f"Open: ${open_price:.2f} | "
                f"High: ${high_price:.2f} | "
                f"Low: ${low_price:.2f} | "
                f"Close: ${close_price:.2f} | "
                f"Volume: {volume:,}"
            )

            log(f"Inserted new data for {trade_date}")
            inserted_count += 1

        else:

            print(f"[EXISTS]   {trade_date} - Already in database")

            log(f"{trade_date} already exists")
            existing_count += 1

    print("=" * 80)
    print()

    # --------------------------------------------------
    # DISPLAY VOO LINE GRAPH
    # --------------------------------------------------

    print()
    print("=" * 70)
    print("VOO CLOSING PRICE GRAPH")
    print("=" * 70)

    # Store date and closing price
    prices = []

    for _, row in data.iterrows():
        trade_date = row["Date"].date()
        close_price = float(row["Close"])
        prices.append((trade_date, close_price))

    # --------------------------------------------------
    # GRAPH SETTINGS
    # --------------------------------------------------

    graph_height = 15
    column_width = 10

    # Find price range
    min_price = min(price for _, price in prices)
    max_price = max(price for _, price in prices)

    price_range = max_price - min_price

    if price_range == 0:
        price_range = 1

    # Total graph width
    graph_width = len(prices) * column_width

    # Create empty graph
    graph = [
        [" "] * graph_width
        for _ in range(graph_height + 1)
    ]

    # --------------------------------------------------
    # CALCULATE EXACT X/Y POSITION OF EACH DOT
    # --------------------------------------------------

    positions = []

    for i, (trade_date, price) in enumerate(prices):

        # X position = center of that date's column
        x = (i * column_width) + (column_width // 2)

        # Y position based on price
        y = round(
            ((price - min_price) / price_range) * graph_height
        )

        positions.append((x, y))

    # --------------------------------------------------
    # DRAW LINE BETWEEN POINTS
    # --------------------------------------------------

    for i in range(len(positions) - 1):

        x1, y1 = positions[i]
        x2, y2 = positions[i + 1]

        for x in range(x1, x2 + 1):

            if x2 == x1:
                y = y1
            else:
                progress = (x - x1) / (x2 - x1)
                y = round(y1 + (y2 - y1) * progress)

            graph[graph_height - y][x] = "·"

    # --------------------------------------------------
    # DRAW THE ACTUAL DATA POINTS
    # --------------------------------------------------

    for x, y in positions:
        graph[graph_height - y][x] = "●"

    # --------------------------------------------------
    # PRINT GRAPH
    # --------------------------------------------------

    for row in range(graph_height + 1):

        price_level = min_price + (
            price_range *
            (graph_height - row) /
            graph_height
        )

        print(
            f"${price_level:7.2f} | "
            + "".join(graph[row])
        )

    # --------------------------------------------------
    # BOTTOM AXIS
    # --------------------------------------------------

    print("         +" + "-" * graph_width)

    # Dates
    date_line = "         "

    for trade_date, _ in prices:
        date_line += f"{trade_date.strftime('%m/%d'):^{column_width}}"

    print(date_line)

    # Prices
    price_line = "         "

    for _, price in prices:
        price_line += f"${price:^{column_width-1}.2f}"

    print(price_line)

    print("=" * 70)
    print()
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

    print()
    print("=" * 60)
    print("UPDATE SUMMARY")
    print("=" * 60)
    print(f"Rows inserted:        {inserted_count}")
    print(f"Rows already existing: {existing_count}")
    print("Database update successful")
    print("=" * 60)
    print()

    log(f"Rows inserted: {inserted_count}")
    log(f"Rows already existing: {existing_count}")
    log("VOO update completed successfully")

except Exception as e:

    log(f"ERROR: {str(e)}")

    print()
    print("=" * 60)
    print("ERROR")
    print("=" * 60)
    print(str(e))
    print("=" * 60)
    print()

    try:
        cursor.close()
        connect.close()
    except:
        pass

    log("VOO update failed")

finally:

    log(f"Finished at {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    log("=" * 60)
