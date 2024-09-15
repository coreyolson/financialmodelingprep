# Historical Endpoints

**Disclaimer:** This document is auto-generated and provides usage examples for all available endpoints in the FinancialModelingPrep Node.js client.

## historicalChart

Example usage for `historicalChart`:

```javascript
fmpClient.historicalChart({ interval: '1min', symbol: 'TICKER', from: '2024-09-13', to: '2024-09-13' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## historicalPriceFull

Example usage for `historicalPriceFull`:

```javascript
fmpClient.historicalPriceFull({ symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## technicalIndicator

Example usage for `technicalIndicator`:

```javascript
fmpClient.technicalIndicator({ interval: '1min', symbol: 'TICKER', type: 'VALUE', period: 'annual' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

[Back to Overview](./README.md)
