// Indices and Sectors
export default [

    // Sector and Industry Data
    { version: 'v4', name: 'sectorPriceEarningRatio', path: (date, exchange) => `sector_price_earning_ratio?date=${date}&exchange=${exchange}` },
    { version: 'v4', name: 'industryPriceEarningRatio', path: (date, exchange) => `industry_price_earning_ratio?date=${date}&exchange=${exchange}` },
    { version: 'v3', name: 'sectorsPerformance', path: () => `sectors-performance` },
    { version: 'v3', name: 'historicalSectorsPerformance', path: (from, to) => `historical-sectors-performance?from=${from}&to=${to}` },

    // Stock Market Movers
    { version: 'v3', name: 'stockMarketGainers', path: () => `stock_market/gainers` },
    { version: 'v3', name: 'stockMarketLosers', path: () => `stock_market/losers` },
    { version: 'v3', name: 'stockMarketActives', path: () => `stock_market/actives` },

    // Index Constituents
    { version: 'v3', name: 'sp500Constituents', path: () => `sp500_constituent` },
];