import pandas as pd
import yfinance as yf
import pyodbc

# Connect to the SQL Server database and add stock market data for Apple (AAPL) from 2020-01-01 to 2023-01-01 to the DailySTOCKDATA table. Then, query the database for any days where the stock price dropped by 5% or more compared to the previous day.
connect = pyodbc.connect(
    'Driver={ODBC Driver 18 for SQL Server};'
    'Server=localhost;'
    'Database=StockMarketDB;'
    'Trusted_Connection=yes;'
    'TrustServerCertificate=yes;'
)

cursor = connect.cursor()

connect.commit()

data = yf.download("AAPL", start="2020-01-01", end="2023-01-01")

data.to_csv("AAPL_stock_data.csv")

print("Data downloaded and saved to AAPL_stock_data.csv")

for index, row in data.iterrows():
    cursor.execute("""INSERT INTO DailySTOCKDATA (TradeDate, Ticker, OpenPrice, HighPrice, LowPrice, ClosePrice, Volume)
    VALUES (?, ?, ?, ?, ?, ?, ?)""",
    index.date(),
    "AAPL",
    float(row['Open']),
    float(row['High']),
    float(row['Low']),
    float(row['Close']),
    int(row['Volume']))

connect.commit()

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

results = pd.read_sql(query, connect)

print(results)

connect.close()