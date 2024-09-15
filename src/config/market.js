// Market
export default [

    // Quote-related endpoints
    { version: 'v3', name: 'quote', path: (symbol) => `quote/${symbol}` },
    { version: 'v3', name: 'quoteOrder', path: (symbol) => `quote-order/${symbol}` },
    { version: 'v3', name: 'quoteShort', path: (symbol) => `quote-short/${symbol}` },
    { version: 'v3', name: 'otcRealTimePrice', path: (symbol) => `otc/real-time-price/${symbol}` },

    // Market and exchange-related endpoints
    { version: 'v3', name: 'quotes', path: (exchange) => `quotes/${exchange}` },
    { version: 'v3', name: 'stockPriceChange', path: (symbol) => `stock-price-change/${symbol}` },
    { version: 'v4', name: 'prePostMarketTrade', path: (symbol) => `pre-post-market-trade/${symbol}` },
    { version: 'v4', name: 'prePostMarket', path: (symbol) => `pre-post-market/${symbol}` },
    { version: 'v4', name: 'batchPrePostMarket', path: (symbol) => `batch-pre-post-market/${symbol}` },
    { version: 'v4', name: 'batchPrePostMarketTrade', path: (symbol) => `batch-pre-post-market-trade/${symbol}` },

    // Forex and crypto-related endpoints
    { version: 'v4', name: 'forexLast', path: (pair) => `forex/last/${pair}` },
    { version: 'v4', name: 'cryptoLast', path: (pair) => `crypto/last/${pair}` },
    { version: 'v3', name: 'stockFullRealTimePrice', path: (symbol) => `stock/full/real-time-price/${symbol}` },
    { version: 'v3', name: 'stockFullRealTimePriceAll', path: () => `stock/full/real-time-price` },
    { version: 'v3', name: 'forex', path: (pair) => `fx/${pair}` },
    { version: 'v3', name: 'forexAll', path: () => `fx` },

    // Index and stock market data endpoints
    { version: 'v3', name: 'quotesIndex', path: () => `quotes/index` },
    { version: 'v3', name: 'stockMarketGainers', path: () => `stock_market/gainers` },
];