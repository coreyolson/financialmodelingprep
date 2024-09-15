# News Endpoints

**Disclaimer:** This document is auto-generated and provides usage examples for all available endpoints in the FinancialModelingPrep Node.js client.

## fmpArticles

Example usage for `fmpArticles`:

```javascript
fmpClient.fmpArticles({ page: 5, size: 'VALUE' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## generalNews

Example usage for `generalNews`:

```javascript
fmpClient.generalNews({ page: 5 })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## stockNews

Example usage for `stockNews`:

```javascript
fmpClient.stockNews({ tickers: 'TICKER', page: 5, from: '2024-09-13', to: '2024-09-13' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## stockNewsSentimentsRSSFeed

Example usage for `stockNewsSentimentsRSSFeed`:

```javascript
fmpClient.stockNewsSentimentsRSSFeed({ page: 5 })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## forexNews

Example usage for `forexNews`:

```javascript
fmpClient.forexNews({ page: 5 })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## cryptoNews

Example usage for `cryptoNews`:

```javascript
fmpClient.cryptoNews({ page: 5 })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## pressReleases

Example usage for `pressReleases`:

```javascript
fmpClient.pressReleases({ page: 5 })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## pressReleasesBySymbol

Example usage for `pressReleasesBySymbol`:

```javascript
fmpClient.pressReleasesBySymbol({ symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## historicalSocialSentiment

Example usage for `historicalSocialSentiment`:

```javascript
fmpClient.historicalSocialSentiment({ symbol: 'TICKER', page: 5 })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## trendingSocialSentiments

Example usage for `trendingSocialSentiments`:

```javascript
fmpClient.trendingSocialSentiments()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## changeSocialSentiments

Example usage for `changeSocialSentiments`:

```javascript
fmpClient.changeSocialSentiments()
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

## rssFeed

Example usage for `rssFeed`:

```javascript
fmpClient.rssFeed({ limit: 10, type: 'VALUE', from: '2024-09-13', to: '2024-09-13', isDone: 'VALUE' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## rssFeedCSV

Example usage for `rssFeedCSV`:

```javascript
fmpClient.rssFeedCSV({ page: 5, datatype: 'VALUE' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## rssFeedAll

Example usage for `rssFeedAll`:

```javascript
fmpClient.rssFeedAll({ page: 5 })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## rssFeed8K

Example usage for `rssFeed8K`:

```javascript
fmpClient.rssFeed8K()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

[Back to Overview](./README.md)
