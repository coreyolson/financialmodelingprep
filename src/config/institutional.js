// ESG and Institutional Holdings
export default [

    // ESG Data
    { version: 'v4', name: 'esgData', path: (symbol) => `esg-environmental-social-governance-data?symbol=${symbol}` },
    { version: 'v4', name: 'esgRatings', path: (symbol) => `esg-environmental-social-governance-data-ratings?symbol=${symbol}` },
    { version: 'v4', name: 'esgSectorBenchmark', path: (year) => `esg-environmental-social-governance-sector-benchmark?year=${year}` },

    // Institutional Holdings and Insider Trading
    { version: 'v4', name: 'senateTrading', path: (symbol) => `senate-trading?symbol=${symbol}` },
    { version: 'v4', name: 'senateTradingRssFeed', path: (page = 0) => `senate-trading-rss-feed?page=${page}` },
    { version: 'v4', name: 'senateDisclosure', path: (symbol) => `senate-disclosure?symbol=${symbol}` },
    { version: 'v4', name: 'senateDisclosureRssFeed', path: (page = 0) => `senate-disclosure-rss-feed?page=${page}` },
    { version: 'v4', name: 'insiderTradingRssFeed', path: (page = 0) => `insider-trading-rss-feed?page=${page}` },
    { version: 'v4', name: 'insiderTradingBySymbol', path: (symbol, page = 0) => `insider-trading?symbol=${symbol}&page=${page}` },
    { version: 'v4', name: 'insiderTrading', path: (page = 0) => `insider-trading?page=${page}` },
];