import yfinance as yf
import pyodbc
from datetime import datetime

# Your update_voo.py writes new VOO data into dbo.VOO_Stock_Data, and your Flask code reads that same table and serves it through /api/voo.
# set up Windows Task Scheduler to automatically run update_voo.py every day.
print("Starting VOO update...")
print("Time:", datetime.now())


# --------------------------------
# 1. Download VOO data
# --------------------------------

data = yf.download(
    "VOO",
    period="5d",
    interval="1d",
    auto_adjust=False
)

data = data.reset_index()

# Remove the extra yfinance ticker level if present
if hasattr(data.columns, "nlevels") and data.columns.nlevels > 1:
    data.columns = data.columns.get_level_values(0)

# print in terminal the data, columns, and dtypes for debugging
print(data)
print(data.columns)
print(data.dtypes)
# --------------------------------
# 2. Connect to SQL Server
# --------------------------------

connection_string = (
    'Driver={ODBC Driver 18 for SQL Server};'
    'Server=localhost;'
    'Database=VOOStockAnalysis;'
    'Trusted_Connection=yes;'
    'TrustServerCertificate=yes;'
)

# connect to data base and use cursor to execute SQL commands
connect = pyodbc.connect(connection_string)
cursor = connect.cursor()


# --------------------------------
# 3. Process each row
# --------------------------------

for _, row in data.iterrows():

    trade_date = row["Date"].date()

    open_price = float(row["Open"])
    high_price = float(row["High"])
    low_price = float(row["Low"])
    close_price = float(row["Close"])
    volume = int(row["Volume"])


    # --------------------------------
    # 4. Check if date already exists
    # --------------------------------

    cursor.execute(
        """
        SELECT COUNT(*)
        FROM dbo.VOO_Stock_Data
        WHERE [Date] = ?
        """,
        trade_date
    )
    exists = cursor.fetchone()[0]


    # --------------------------------
    # 5. Insert new data
    # --------------------------------

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

        print(f"Inserted {trade_date}")

    else:

        print(f"{trade_date} already exists")


# --------------------------------
# 6. Save changes
# --------------------------------

connect.commit()

cursor.close()
connect.close()


print("VOO update completed.")
print("Finished:", datetime.now())