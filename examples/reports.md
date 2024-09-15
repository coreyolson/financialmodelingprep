# Reports Endpoints

**Disclaimer:** This document is auto-generated and provides usage examples for all available endpoints in the FinancialModelingPrep Node.js client.

## earningCallTranscript

Example usage for `earningCallTranscript`:

```javascript
fmpClient.earningCallTranscript({ symbol: 'TICKER', year: 2024, quarter: 'VALUE' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## earningCallTranscriptV4

Example usage for `earningCallTranscriptV4`:

```javascript
fmpClient.earningCallTranscriptV4({ symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## batchEarningCallTranscript

Example usage for `batchEarningCallTranscript`:

```javascript
fmpClient.batchEarningCallTranscript({ symbol: 'TICKER', year: 2024 })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## earningCalendar

Example usage for `earningCalendar`:

```javascript
fmpClient.earningCalendar({ from: '2024-09-13', to: '2024-09-13' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## historicalEarningCalendar

Example usage for `historicalEarningCalendar`:

```javascript
fmpClient.historicalEarningCalendar({ symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## earningCalendarConfirmed

Example usage for `earningCalendarConfirmed`:

```javascript
fmpClient.earningCalendarConfirmed({ from: '2024-09-13', to: '2024-09-13' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## earningsSurprises

Example usage for `earningsSurprises`:

```javascript
fmpClient.earningsSurprises({ symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## earningsSurprisesBulk

Example usage for `earningsSurprisesBulk`:

```javascript
fmpClient.earningsSurprisesBulk()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## financialReportsDates

Example usage for `financialReportsDates`:

```javascript
fmpClient.financialReportsDates({ symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## financialReportsJSON

Example usage for `financialReportsJSON`:

```javascript
fmpClient.financialReportsJSON({ symbol: 'TICKER', year: 2024, period: 'annual' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## financialReportsXLSX

Example usage for `financialReportsXLSX`:

```javascript
fmpClient.financialReportsXLSX({ symbol: 'TICKER', year: 2024, period: 'annual' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## stockPeersBulk

Example usage for `stockPeersBulk`:

```javascript
fmpClient.stockPeersBulk()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## ratingBulk

Example usage for `ratingBulk`:

```javascript
fmpClient.ratingBulk()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## dcfBulk

Example usage for `dcfBulk`:

```javascript
fmpClient.dcfBulk()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

[Back to Overview](./README.md)
