# Financials Endpoints

**Disclaimer:** This document is auto-generated and provides usage examples for all available endpoints in the FinancialModelingPrep Node.js client.

## incomeStatement

Example usage for `incomeStatement`:

```javascript
fmpClient.incomeStatement({ symbol: 'TICKER', period: 'annual' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## incomeStatementByCIK

Example usage for `incomeStatementByCIK`:

```javascript
fmpClient.incomeStatementByCIK({ cik: 'VALUE', period: 'annual' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## balanceSheetStatement

Example usage for `balanceSheetStatement`:

```javascript
fmpClient.balanceSheetStatement({ symbol: 'TICKER', period: 'annual' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## balanceSheetStatementByCIK

Example usage for `balanceSheetStatementByCIK`:

```javascript
fmpClient.balanceSheetStatementByCIK({ cik: 'VALUE', period: 'annual' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## cashFlowStatement

Example usage for `cashFlowStatement`:

```javascript
fmpClient.cashFlowStatement({ symbol: 'TICKER', period: 'annual' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## cashFlowStatementByCIK

Example usage for `cashFlowStatementByCIK`:

```javascript
fmpClient.cashFlowStatementByCIK({ cik: 'VALUE', period: 'annual' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## incomeStatementAsReported

Example usage for `incomeStatementAsReported`:

```javascript
fmpClient.incomeStatementAsReported({ symbol: 'TICKER', period: 'annual', limit: 10 })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## balanceSheetStatementAsReported

Example usage for `balanceSheetStatementAsReported`:

```javascript
fmpClient.balanceSheetStatementAsReported({ symbol: 'TICKER', period: 'annual', limit: 10 })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## cashFlowStatementAsReported

Example usage for `cashFlowStatementAsReported`:

```javascript
fmpClient.cashFlowStatementAsReported({ symbol: 'TICKER', period: 'annual', limit: 10 })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## financialStatementFullAsReported

Example usage for `financialStatementFullAsReported`:

```javascript
fmpClient.financialStatementFullAsReported({ symbol: 'TICKER', period: 'annual', limit: 10 })
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

## financialReportsDates

Example usage for `financialReportsDates`:

```javascript
fmpClient.financialReportsDates({ symbol: 'TICKER' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

[Back to Overview](./README.md)
