# Events Endpoints

**Disclaimer:** This document is auto-generated and provides usage examples for all available endpoints in the FinancialModelingPrep Node.js client.

## stockDividendCalendar

Example usage for `stockDividendCalendar`:

```javascript
fmpClient.stockDividendCalendar({ from: '2024-09-13', to: '2024-09-13' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## historicalStockDividend

Example usage for `historicalStockDividend`:

```javascript
fmpClient.historicalStockDividend({ symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## stockSplitCalendar

Example usage for `stockSplitCalendar`:

```javascript
fmpClient.stockSplitCalendar({ from: '2024-09-13', to: '2024-09-13' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## historicalStockSplit

Example usage for `historicalStockSplit`:

```javascript
fmpClient.historicalStockSplit({ symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## ipoCalendarConfirmed

Example usage for `ipoCalendarConfirmed`:

```javascript
fmpClient.ipoCalendarConfirmed({ from: '2024-09-13', to: '2024-09-13' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## ipoCalendarProspectus

Example usage for `ipoCalendarProspectus`:

```javascript
fmpClient.ipoCalendarProspectus()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## ipoCalendar

Example usage for `ipoCalendar`:

```javascript
fmpClient.ipoCalendar()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## mergersAcquisitionsRSSFeed

Example usage for `mergersAcquisitionsRSSFeed`:

```javascript
fmpClient.mergersAcquisitionsRSSFeed({ page: 5 })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## mergersAcquisitionsSearch

Example usage for `mergersAcquisitionsSearch`:

```javascript
fmpClient.mergersAcquisitionsSearch({ name: 'Jane Smith' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## fundraisingRSSFeed

Example usage for `fundraisingRSSFeed`:

```javascript
fmpClient.fundraisingRSSFeed({ page: 5 })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## fundraisingSearch

Example usage for `fundraisingSearch`:

```javascript
fmpClient.fundraisingSearch({ name: 'Jane Smith' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## fundraisingByCIK

Example usage for `fundraisingByCIK`:

```javascript
fmpClient.fundraisingByCIK()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

[Back to Overview](./README.md)
