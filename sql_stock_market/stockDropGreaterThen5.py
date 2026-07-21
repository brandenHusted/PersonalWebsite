import pandas as pd
import yfinance as yf
import pyodbc
import matplotlib.pyplot as plt

# Connect to SQL Server
connect = pyodbc.connect(
    'Driver={ODBC Driver 18 for SQL Server};'
    'Server=localhost;'
    'Database=StockMarketDB;'
    'Trusted_Connection=yes;'
    'TrustServerCertificate=yes;'
)

cursor = connect.cursor()

# Download Apple stock data
data = yf.download(
    "AAPL",
    start="2020-01-01",
    end="2023-01-01"
)

# Fix yfinance MultiIndex columns
if isinstance(data.columns, pd.MultiIndex):
    data.columns = data.columns.get_level_values(0)

# Save CSV
data.to_csv("AAPL_stock_data.csv")

print("Data downloaded and saved to AAPL_stock_data.csv")

# Insert stock data into SQL Server
for index, row in data.iterrows():
    cursor.execute("""
        INSERT INTO DailySTOCKDATA 
        (TradeDate, Ticker, OpenPrice, HighPrice, LowPrice, ClosePrice, Volume)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    """,
    (
        index.date(),
        "AAPL",
        float(row["Open"]),
        float(row["High"]),
        float(row["Low"]),
        float(row["Close"]),
        int(row["Volume"])
    ))

connect.commit()

# Find stock drops greater than 5%
query = """
SELECT *
FROM
(
    SELECT
        TradeDate,
        Ticker,
        ClosePrice,
        ((ClosePrice - LAG(ClosePrice) OVER (
            PARTITION BY Ticker 
            ORDER BY TradeDate
        )) 
        /
        LAG(ClosePrice) OVER (
            PARTITION BY Ticker 
            ORDER BY TradeDate
        )) * 100 AS Percent_Change

    FROM DailySTOCKDATA

) StockChanges

WHERE Percent_Change <= -5;
"""

# Read SQL results
results = pd.read_sql_query(query, connect)

# Plot the results
plt.figure(figsize=(10, 6))
plt.plot(results['TradeDate'], results['ClosePrice'], marker='o', linestyle='-', color='red')
plt.title('Stock Drops Greater Than 5%')
plt.xlabel('Trade Date')
plt.ylabel('Close Price')
plt.xticks(rotation=45)
plt.grid()
plt.tight_layout()
plt.show()

connect.close()