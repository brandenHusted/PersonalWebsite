import pandas as pd
import pyodbc
import matplotlib.pyplot as plt
from datetime import datetime
import yfinance as yf

# Connect to SQL Server
connect = pyodbc.connect(
    'Driver={ODBC Driver 18 for SQL Server};'
    'Server=localhost;'
    'Database=StockMarketDB;'
    'Trusted_Connection=yes;'
    'TrustServerCertificate=yes;'
)

data = yf.download(
    "AAPL",
    period="1d",
    interval="1m",
    progress=False,
    auto_adjust=True
)

latest = data.tail(1)

price = latest["Close"].iloc[-1].item()

cursor = connect.cursor()

# Ensure the table exists
cursor.execute("""
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='LiveStockData' AND xtype='U')
CREATE TABLE LiveStockData (
    TradeDateTime DATETIME,
    Ticker NVARCHAR(10),
    ClosePrice FLOAT
)
""")

cursor.execute("""
INSERT INTO DailySTOCKDATA
(TradeDate, Ticker, ClosePrice)
VALUES (?, ?, ?)
""", datetime.now(), "AAPL", price)


# Query 1: Previous Close and Price Change
query1 = """
SELECT
    TradeDate,
    Ticker,
    ClosePrice,
    LAG(ClosePrice) OVER (
        PARTITION BY Ticker
        ORDER BY TradeDate
    ) AS Previous_Close,
    ClosePrice - LAG(ClosePrice) OVER (
        PARTITION BY Ticker
        ORDER BY TradeDate
    ) AS Price_Change
FROM DailySTOCKDATA;
"""

# Query 2: Next Day Close and Next Day Change
query2 = """
SELECT
    TradeDate,
    Ticker,
    ClosePrice,
    LEAD(ClosePrice) OVER (
        PARTITION BY Ticker
        ORDER BY TradeDate
    ) AS Next_Day_Close,
    LEAD(ClosePrice) OVER (
        PARTITION BY Ticker
        ORDER BY TradeDate
    ) - ClosePrice AS Next_Day_Change
FROM DailySTOCKDATA;
"""
# Query 3: 7-Day Moving Average just here to show how to use it the avg goes up till 2026
query3 = """
SELECT
    TradeDate,
    Ticker,
    ClosePrice,
    AVG(ClosePrice) OVER (
        ORDER BY TradeDate
        ROW BETWEEN 6 PRECEDING AND CURRENT ROW) AS Moving_Average
"""
# Execute Query 1 and plot
results1 = pd.read_sql(query1, connect)
plt.figure(figsize=(10, 6))
plt.plot(results1['TradeDate'], results1['ClosePrice'], label='Close Price', color='blue')
plt.plot(results1['TradeDate'], results1['Previous_Close'], label='Previous Close', color='orange')
plt.title('Close Price vs Previous Close for AAPL Stock')
plt.xlabel('Trade Date')
plt.ylabel('Price')
plt.legend()
plt.xticks(rotation=45)
plt.grid()
plt.tight_layout()
plt.show()

# Execute Query 2 and plot
results2 = pd.read_sql(query2, connect)
plt.figure(figsize=(10, 6))
plt.plot(results2['TradeDate'], results2['ClosePrice'], label='Close Price', color='blue')
plt.plot(results2['TradeDate'], results2['Next_Day_Close'], label='Next Day Close', color='green')
plt.title('Close Price vs Next Day Close')
plt.xlabel('Trade Date')
plt.ylabel('Price')
plt.legend()
plt.xticks(rotation=45)
plt.grid()
plt.tight_layout()
plt.show()

# Execute Query 3 and plot
results3 = pd.read_sql(query3, connect)
plt.figure(figsize=(10, 6))
plt.plot(results3['TradeDate'], results3['ClosePrice'], label='Close Price', color='blue')
plt.plot(results3['TradeDate'], results3['Moving_Average'], label='7-Day Moving Average', color='red')
plt.title('Close Price vs 7-Day Moving Average')
plt.xlabel('Trade Date')
plt.ylabel('Price')
plt.legend()
plt.xticks(rotation=45)
plt.grid()
plt.tight_layout()
plt.show()

connect.commit()

cursor.close()
connect.close()

print("Updated:", datetime.now(), price)
