// Commodities, Forex, and Cryptocurrencies Data
export default [

    // Commodities Data
    { version: 'v3', name: 'availableCommodities', path: () => `symbol/available-commodities` },
    { version: 'v3', name: 'commodityQuotes', path: () => `quotes/commodity` },
    { version: 'v3', name: 'commodityQuote', path: (symbol) => `quote/${symbol}` },
    { version: 'v3', name: 'commodityHistoricalPrice', path: (symbol) => `historical-price-full/${symbol}` },

    // Forex Data
    { version: 'v3', name: 'availableForexPairs', path: () => `symbol/available-forex-currency-pairs` },
    { version: 'v3', name: 'forexQuotes', path: () => `quotes/forex` },
    { version: 'v3', name: 'forexQuote', path: (symbol) => `quote/${symbol}` },
    { version: 'v3', name: 'forexHistoricalPrice', path: (symbol) => `historical-price-full/${symbol}` },

    // Cryptocurrencies Data
    { version: 'v3', name: 'availableCryptocurrencies', path: () => `symbol/available-cryptocurrencies` },
    { version: 'v3', name: 'cryptoQuotes', path: () => `quotes/crypto` },
    { version: 'v3', name: 'cryptoQuote', path: (symbol) => `quote/${symbol}` },
    { version: 'v3', name: 'cryptoHistoricalPrice', path: (symbol) => `historical-price-full/${symbol}` },

    // Index Constituents
    { version: 'v3', name: 'sp500Constituents', path: () => `sp500_constituent` },
    { version: 'v3', name: 'historicalSP500Constituents', path: () => `historical/sp500_constituent` },
    { version: 'v3', name: 'nasdaqConstituents', path: () => `nasdaq_constituent` },
    { version: 'v3', name: 'historicalNasdaqConstituents', path: () => `historical/nasdaq_constituent` },
];