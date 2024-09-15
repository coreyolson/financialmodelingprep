// Historical Data and Technicals
export default [

    // Historical Price and Chart Data
    { version: 'v3', name: 'historicalChart', path: (interval, symbol, from, to) => `historical-chart/${interval}/${symbol}?from=${from}&to=${to}` },
    { version: 'v3', name: 'historicalPriceFull', path: (symbol) => `historical-price-full/${symbol}` },

    // Technical Indicators
    { version: 'v3', name: 'technicalIndicator', path: (interval, symbol, type, period) => `technical_indicator/${interval}/${symbol}?type=${type}&period=${period}` },
];