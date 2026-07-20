/*CREATE TABLE DailySTOCKDATA (
               Id INT IDENTITY(1,1) PRIMARY KEY,
               TradeDate DATE,
               Ticker VARCHAR(10),
               OpenPrice FLOAT,
               HighPrice FLOAT,
               LowPrice FLOAT,
               ClosePrice FLOAT,
               Volume BIGINT
               );

CREATE TABLE PriceAnomalies (
    AnomalyID INT IDENTITY(1,1) PRIMARY KEY,
    Ticker VARCHAR(10),
    TradeDate DATE,
    ClosePrice Decimal(12,2),
    PreviousClose DECIMAL(12,2),
    PercentChange DECIMAL(12,2),
    Volume BIGINT,
    PreviousVolume BIGINT,
    VolumeChangePrecent DECIMAL(12,2),
    AnomalyType VARCHAR(50)

);*/

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
        )) / LAG(ClosePrice) OVER (
            PARTITION BY Ticker 
            ORDER BY TradeDate
        )) * 100 AS Percent_Change
    FROM DailySTOCKDATA
) StockChanges
WHERE Percent_Change <= -5;
