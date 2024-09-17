// Search 
export default [

    // Basic search endpoints
    { version: 'v3', name: 'search', path: (query) => `search?query=${query}` },
    { version: 'v3', name: 'searchTicker', path: (query, limit = 10, exchange = 'NASDAQ') => `search-ticker?query=${query}&limit=${limit}&exchange=${exchange}` },
    { version: 'v3', name: 'searchName', path: (query, limit = 10, exchange = 'NASDAQ') => `search-name?query=${query}&limit=${limit}&exchange=${exchange}` },

    // CIK and ISIN search endpoints
    { version: 'v3', name: 'cikSearch', path: (query) => `cik-search/${query}` },
    { version: 'v3', name: 'cikInfo', path: (cik) => `cik/${cik}` },
    { version: 'v3', name: 'cusipInfo', path: (cusip) => `cusip/${cusip}` },
    { version: 'v4', name: 'searchIsin', path: (isin) => `search/isin?isin=${isin}` },

    // Symbol lists
    { version: 'v3', name: 'stockList', path: () => `stock/list` },
    { version: 'v3', name: 'etfList', path: () => `etf/list` },
    { version: 'v3', name: 'financialStatementSymbolList', path: () => `financial-statement-symbol-lists` },
    { version: 'v3', name: 'availableTradedList', path: () => `available-traded/list` },
    { version: 'v4', name: 'commitmentOfTradersReportList', path: () => `commitment_of_traders_report/list` },
    { version: 'v3', name: 'cikList', path: () => `cik_list` },
    { version: 'v3', name: 'availableSymbolsEuronext', path: () => `symbol/available-euronext` },
    { version: 'v4', name: 'symbolChange', path: () => `symbol_change` },

    // Symbol exchange-related endpoints
    { version: 'v3', name: 'symbolByExchange', path: (exchange = 'NASDAQ') => `symbol/${exchange}` }
];