# Institutional Endpoints

**Disclaimer:** This document is auto-generated and provides usage examples for all available endpoints in the FinancialModelingPrep Node.js client.

## esgData

Example usage for `esgData`:

```javascript
fmpClient.esgData({ symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## esgRatings

Example usage for `esgRatings`:

```javascript
fmpClient.esgRatings({ symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## esgSectorBenchmark

Example usage for `esgSectorBenchmark`:

```javascript
fmpClient.esgSectorBenchmark({ year: 2024 })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## senateTrading

Example usage for `senateTrading`:

```javascript
fmpClient.senateTrading({ symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## senateTradingRssFeed

Example usage for `senateTradingRssFeed`:

```javascript
fmpClient.senateTradingRssFeed({ page: 5 })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## senateDisclosure

Example usage for `senateDisclosure`:

```javascript
fmpClient.senateDisclosure({ symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## senateDisclosureRssFeed

Example usage for `senateDisclosureRssFeed`:

```javascript
fmpClient.senateDisclosureRssFeed({ page: 5 })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## insiderTradingRssFeed

Example usage for `insiderTradingRssFeed`:

```javascript
fmpClient.insiderTradingRssFeed({ page: 5 })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## insiderTradingBySymbol

Example usage for `insiderTradingBySymbol`:

```javascript
fmpClient.insiderTradingBySymbol({ symbol: 'TICKER', page: 5 })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## insiderTrading

Example usage for `insiderTrading`:

```javascript
fmpClient.insiderTrading({ page: 5 })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

[Back to Overview](./README.md)
