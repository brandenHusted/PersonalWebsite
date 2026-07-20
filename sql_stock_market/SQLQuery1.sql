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

);

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

SELECT
    DATEFROMPARTS(
        YEAR(TradeDate),
        MONTH(TradeDate),
        1
    ) AS Month,

    Ticker,

    AVG(ClosePrice) AS Average_Close

FROM DailySTOCKDATA

GROUP BY
    YEAR(TradeDate),
    MONTH(TradeDate),
    Ticker

ORDER BY Month;*/
-- wow factor anomaly detection view on apple stock market
CREATE VIEW Stock_Anomaly_Alerts AS

SELECT
    TradeDate,
    Ticker,
    ClosePrice,

    LAG(ClosePrice) OVER(
        PARTITION BY Ticker
        ORDER BY TradeDate
    ) AS Previous_Close,


    ((ClosePrice -
        LAG(ClosePrice) OVER(
            PARTITION BY Ticker
            ORDER BY TradeDate
        ))
    /
        LAG(ClosePrice) OVER(
            PARTITION BY Ticker
            ORDER BY TradeDate
        )) * 100 AS Percent_Change,


    AVG(ClosePrice) OVER(
        PARTITION BY Ticker
        ORDER BY TradeDate
        ROWS BETWEEN 29 PRECEDING AND CURRENT ROW
    ) AS Moving_Average_30_Day


FROM DailySTOCKDATA;
