// Companies
export default [

    // Company Profile and Executive Information
    { version: 'v3', name: 'companyProfile', path: (symbol) => `profile/${symbol}` },
    { version: 'v4', name: 'executiveCompensation', path: (symbol) => `governance/executive_compensation?symbol=${symbol}` },
    { version: 'v4', name: 'executiveCompensationBenchmark', path: (year) => `executive-compensation-benchmark?year=${year}` },
    { version: 'v3', name: 'keyExecutives', path: (symbol) => `key-executives/${symbol}` },
    { version: 'v4', name: 'companyCoreInformation', path: (symbol) => `company-core-information?symbol=${symbol}` },
    { version: 'v4', name: 'companyNotes', path: (symbol) => `company-notes?symbol=${symbol}` },
    { version: 'v4', name: 'companyOutlook', path: (symbol) => `company-outlook?symbol=${symbol}` },

    // Financial Data and Market Capitalization
    { version: 'v3', name: 'marketCapitalization', path: (symbol) => `market-capitalization/${symbol}` },
    { version: 'v3', name: 'historicalMarketCapitalization', path: (symbol) => `historical-market-capitalization/${symbol}` },
    { version: 'v3', name: 'stockScreener', path: () => `stock-screener` },
    { version: 'v3', name: 'grade', path: (symbol) => `grade/${symbol}` },
    { version: 'v3', name: 'analystEstimates', path: (symbol) => `analyst-estimates/${symbol}` },
    { version: 'v3', name: 'analystStockRecommendations', path: (symbol) => `analyst-stock-recommendations/${symbol}` },
    { version: 'v4', name: 'stockPeers', path: (symbol) => `stock_peers?symbol=${symbol}` },

    // Employee and Share Data
    { version: 'v4', name: 'historicalEmployeeCount', path: (symbol) => `historical/employee_count?symbol=${symbol}` },
    { version: 'v4', name: 'employeeCount', path: (symbol) => `employee_count?symbol=${symbol}` },
    { version: 'v4', name: 'sharesFloat', path: (symbol) => `shares_float?symbol=${symbol}` },
    { version: 'v4', name: 'historicalSharesFloat', path: (symbol) => `historical/shares_float?symbol=${symbol}` },
    { version: 'v4', name: 'sharesFloatAll', path: () => `shares_float/all` },

    // Market and Industry Information
    { version: 'v3', name: 'isMarketOpen', path: (exchange) => `is-the-market-open?exchange=${exchange}` },
    { version: 'v3', name: 'isMarketOpenAll', path: () => `is-the-market-open-all` },
    { version: 'v3', name: 'delistedCompanies', path: () => `delisted-companies` },
    { version: 'v3', name: 'allCountries', path: () => `get-all-countries` },
    { version: 'v3', name: 'sectorsList', path: () => `sectors-list` },
    { version: 'v3', name: 'industriesList', path: () => `industries-list` }
];