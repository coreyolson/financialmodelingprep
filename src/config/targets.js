// Price Targets and Upgrades
export default [

    // Price Targets and Upgrades Endpoints
    { version: 'v4', name: 'priceTargetByAnalystName', path: (name) => `price-target-analyst-name?name=${name}` },
    { version: 'v4', name: 'priceTargetByAnalystCompany', path: (company) => `price-target-analyst-company?company=${company}` },
    { version: 'v4', name: 'priceTargetConsensus', path: (symbol) => `price-target-consensus?symbol=${symbol}` },
    { version: 'v4', name: 'priceTargetRSSFeed', path: (page = 0) => `price-target-rss-feed?page=${page}` },
    { version: 'v4', name: 'upgradesDowngrades', path: (symbol) => `upgrades-downgrades?symbol=${symbol}` },
    { version: 'v4', name: 'upgradesDowngradesRSSFeed', path: (page = 0) => `upgrades-downgrades-rss-feed?page=${page}` },
    { version: 'v4', name: 'upgradesDowngradesConsensus', path: (symbol) => `upgrades-downgrades-consensus?symbol=${symbol}` },
    { version: 'v4', name: 'upgradesDowngradesGradingCompany', path: (company) => `upgrades-downgrades-grading-company?company=${company}` },
    { version: 'v4', name: 'priceTargetSummaryBulk', path: () => `price-target-summary-bulk` },
    { version: 'v4', name: 'upgradesDowngradesConsensusBulk', path: () => `upgrades-downgrades-consensus-bulk` },
    { version: 'v3', name: 'analystEstimates', path: (symbol) => `analyst-estimates/${symbol}` },
    { version: 'v3', name: 'analystStockRecommendations', path: (symbol) => `analyst-stock-recommendations/${symbol}` },
    { version: 'v4', name: 'companyOutlook', path: (symbol) => `company-outlook?symbol=${symbol}` },
    { version: 'v4', name: 'stockPeers', path: (symbol) => `stock_peers?symbol=${symbol}` },
];