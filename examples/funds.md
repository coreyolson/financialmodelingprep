# Funds Endpoints

**Disclaimer:** This document is auto-generated and provides usage examples for all available endpoints in the FinancialModelingPrep Node.js client.

## etfHoldingsByDate

Example usage for `etfHoldingsByDate`:

```javascript
fmpClient.etfHoldingsByDate({ symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## etfHoldings

Example usage for `etfHoldings`:

```javascript
fmpClient.etfHoldings({ date: '2024-09-13', symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## etfHolder

Example usage for `etfHolder`:

```javascript
fmpClient.etfHolder({ symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## etfInfo

Example usage for `etfInfo`:

```javascript
fmpClient.etfInfo({ symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## etfSectorWeightings

Example usage for `etfSectorWeightings`:

```javascript
fmpClient.etfSectorWeightings({ symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## etfCountryWeightings

Example usage for `etfCountryWeightings`:

```javascript
fmpClient.etfCountryWeightings({ symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## etfStockExposure

Example usage for `etfStockExposure`:

```javascript
fmpClient.etfStockExposure({ symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## mutualFundHoldingsByDate

Example usage for `mutualFundHoldingsByDate`:

```javascript
fmpClient.mutualFundHoldingsByDate({ symbol: 'TICKER', cik: 'VALUE' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## mutualFundHoldings

Example usage for `mutualFundHoldings`:

```javascript
fmpClient.mutualFundHoldings({ symbol: 'TICKER', date: '2024-09-13' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## mutualFundHoldingsByName

Example usage for `mutualFundHoldingsByName`:

```javascript
fmpClient.mutualFundHoldingsByName({ name: 'Jane Smith' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## mutualFundHolder

Example usage for `mutualFundHolder`:

```javascript
fmpClient.mutualFundHolder({ symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## etfHolderBulk

Example usage for `etfHolderBulk`:

```javascript
fmpClient.etfHolderBulk()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

[Back to Overview](./README.md)
