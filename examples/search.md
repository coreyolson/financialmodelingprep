# Search Endpoints

**Disclaimer:** This document is auto-generated and provides usage examples for all available endpoints in the FinancialModelingPrep Node.js client.

## search

Example usage for `search`:

```javascript
fmpClient.search()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## searchTicker

Example usage for `searchTicker`:

```javascript
fmpClient.searchTicker({ query: 'VALUE', limit: 10, exchange: 'NASDAQ' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## searchName

Example usage for `searchName`:

```javascript
fmpClient.searchName({ query: 'VALUE', limit: 10, exchange: 'NASDAQ' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## cikSearch

Example usage for `cikSearch`:

```javascript
fmpClient.cikSearch()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## cikInfo

Example usage for `cikInfo`:

```javascript
fmpClient.cikInfo()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## cusipInfo

Example usage for `cusipInfo`:

```javascript
fmpClient.cusipInfo()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## searchIsin

Example usage for `searchIsin`:

```javascript
fmpClient.searchIsin()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## stockList

Example usage for `stockList`:

```javascript
fmpClient.stockList()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## etfList

Example usage for `etfList`:

```javascript
fmpClient.etfList()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## financialStatementSymbolList

Example usage for `financialStatementSymbolList`:

```javascript
fmpClient.financialStatementSymbolList()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## availableTradedList

Example usage for `availableTradedList`:

```javascript
fmpClient.availableTradedList()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## commitmentOfTradersReportList

Example usage for `commitmentOfTradersReportList`:

```javascript
fmpClient.commitmentOfTradersReportList()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## cikList

Example usage for `cikList`:

```javascript
fmpClient.cikList()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## availableSymbolsEuronext

Example usage for `availableSymbolsEuronext`:

```javascript
fmpClient.availableSymbolsEuronext()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## symbolChange

Example usage for `symbolChange`:

```javascript
fmpClient.symbolChange()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## symbolByExchange

Example usage for `symbolByExchange`:

```javascript
fmpClient.symbolByExchange({ exchange: 'NASDAQ' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

[Back to Overview](./README.md)
