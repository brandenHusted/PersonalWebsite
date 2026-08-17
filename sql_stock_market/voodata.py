# run this code with 'python voodata.py' in terminal and it will show you VOO stock data.
import pandas as pd
import pyodbc
import matplotlib.pyplot as plt

# Connect to SQL Server
connect = pyodbc.connect(
    'Driver={ODBC Driver 18 for SQL Server};'
    'Server=localhost;'
    'Database=VOOStockAnalysis;'
    'Trusted_Connection=yes;'
    'TrustServerCertificate=yes;'
)

# Get VOO data from SQL Server
query = """
SELECT
    [Date],
    [Close]
FROM VOO_Stock_Data
ORDER BY [Date];
"""

data = pd.read_sql(query, connect)

# Close SQL connection
connect.close()

# Make sure Date is a datetime
data["Date"] = pd.to_datetime(data["Date"])

# Create graph
plt.figure(figsize=(12, 6))

plt.plot(
    data["Date"],
    data["Close"],
    label="VOO Closing Price"
)

plt.title("VOO Stock Price (2016-2024)")
plt.xlabel("Date")
plt.ylabel("Price ($)")
plt.legend()
plt.grid(True)

plt.tight_layout()
plt.show()