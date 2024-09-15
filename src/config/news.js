// News and Press Releases
export default [

    // General News and Articles
    { version: 'v3', name: 'fmpArticles', path: (page = 0, size = 5) => `fmp/articles?page=${page}&size=${size}` },
    { version: 'v4', name: 'generalNews', path: (page = 0) => `general_news?page=${page}` },
    { version: 'v3', name: 'stockNews', path: (tickers, page = 3, from, to) => `stock_news?tickers=${tickers}&page=${page}&from=${from}&to=${to}` },
    { version: 'v4', name: 'stockNewsSentimentsRSSFeed', path: (page = 0) => `stock-news-sentiments-rss-feed?page=${page}` },
    { version: 'v4', name: 'forexNews', path: (page = 0) => `forex_news?page=${page}` },
    { version: 'v4', name: 'cryptoNews', path: (page = 0) => `crypto_news?page=${page}` },

    // Press Releases
    { version: 'v3', name: 'pressReleases', path: (page = 0) => `press-releases?page=${page}` },
    { version: 'v3', name: 'pressReleasesBySymbol', path: (symbol) => `press-releases/${symbol}` },

    // Social Sentiments
    { version: 'v4', name: 'historicalSocialSentiment', path: (symbol, page = 0) => `historical/social-sentiment?symbol=${symbol}&page=${page}` },
    { version: 'v4', name: 'trendingSocialSentiments', path: (type, source) => `social-sentiments/trending?type=${type}&source=${source}` },
    { version: 'v4', name: 'changeSocialSentiments', path: (type, source) => `social-sentiments/change?type=${type}&source=${source}` },

    // RSS Feeds
    { version: 'v4', name: 'mergersAcquisitionsRSSFeed', path: (page = 0) => `mergers-acquisitions-rss-feed?page=${page}` },
    { version: 'v4', name: 'rssFeed', path: (limit = 100, type = 10, from, to, isDone = true) => `rss_feed?limit=${limit}&type=${type}&from=${from}&to=${to}&isDone=${isDone}` },
    { version: 'v3', name: 'rssFeedCSV', path: (page = 0, datatype = 'csv') => `rss_feed?page=${page}&datatype=${datatype}` },
    { version: 'v4', name: 'rssFeedAll', path: (page = 0) => `rss_feed_all?page=${page}` },
    { version: 'v4', name: 'rssFeed8K', path: () => `rss_feed_8k` },
];