# Indices Endpoints

**Disclaimer:** This document is auto-generated and provides usage examples for all available endpoints in the FinancialModelingPrep Node.js client.

## sectorPriceEarningRatio

Example usage for `sectorPriceEarningRatio`:

```javascript
fmpClient.sectorPriceEarningRatio({ date: '2024-09-13', exchange: 'NASDAQ' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## industryPriceEarningRatio

Example usage for `industryPriceEarningRatio`:

```javascript
fmpClient.industryPriceEarningRatio({ date: '2024-09-13', exchange: 'NASDAQ' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## sectorsPerformance

Example usage for `sectorsPerformance`:

```javascript
fmpClient.sectorsPerformance()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## historicalSectorsPerformance

Example usage for `historicalSectorsPerformance`:

```javascript
fmpClient.historicalSectorsPerformance({ from: '2024-09-13', to: '2024-09-13' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## stockMarketGainers

Example usage for `stockMarketGainers`:

```javascript
fmpClient.stockMarketGainers()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## stockMarketLosers

Example usage for `stockMarketLosers`:

```javascript
fmpClient.stockMarketLosers()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## stockMarketActives

Example usage for `stockMarketActives`:

```javascript
fmpClient.stockMarketActives()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## sp500Constituents

Example usage for `sp500Constituents`:

```javascript
fmpClient.sp500Constituents()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

[Back to Overview](./README.md)
