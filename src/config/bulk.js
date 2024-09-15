// Bulk Data Requests
export default [

    // Bulk Data Requests
    { version: 'v4', name: 'batchHistoricalEOD', path: (date) => `batch-historical-eod?date=${date}` },
    { version: 'v4', name: 'incomeStatementBulk', path: (year, period) => `income-statement-bulk?year=${year}&period=${period}` },
    { version: 'v4', name: 'balanceSheetStatementBulk', path: (year, period) => `balance-sheet-statement-bulk?year=${year}&period=${period}` },
    { version: 'v4', name: 'cashFlowStatementBulk', path: (year, period) => `cash-flow-statement-bulk?year=${year}&period=${period}` },
    { version: 'v4', name: 'ratiosBulk', path: (year, period) => `ratios-bulk?year=${year}&period=${period}` },
    { version: 'v4', name: 'keyMetricsBulk', path: (year, period) => `key-metrics-bulk?year=${year}&period=${period}` },
    { version: 'v4', name: 'earningsSurprisesBulk', path: () => `earnings-surprises-bulk` },
    { version: 'v4', name: 'profileBulk', path: () => `profile/all` },
    { version: 'v4', name: 'stockPeersBulk', path: () => `stock_peers_bulk` },
    { version: 'v4', name: 'ratingBulk', path: () => `rating-bulk` },
    { version: 'v4', name: 'dcf', path: () => `dcf-bulk` },
    { version: 'v4', name: 'keyMetricsTTMBulk', path: () => `key-metrics-ttm-bulk` },
    { version: 'v4', name: 'ratiosTTMBulk', path: () => `ratios-ttm-bulk` },
    { version: 'v4', name: 'scoresBulk', path: () => `scores-bulk` },
    { version: 'v4', name: 'financialGrowthBulk', path: (year, period) => `financial-growth-bulk?year=${year}&period=${period}` },
    { version: 'v4', name: 'incomeStatementGrowthBulk', path: (year, period) => `income-statement-growth-bulk?year=${year}&period=${period}` },
    { version: 'v4', name: 'balanceSheetStatementGrowthBulk', path: (year, period) => `balance-sheet-statement-growth-bulk?year=${year}&period=${period}` },
    { version: 'v4', name: 'cashFlowStatementGrowthBulk', path: (year, period) => `cash-flow-statement-growth-bulk?year=${year}&period=${period}` },
    { version: 'v4', name: 'priceTargetSummaryBulk', path: () => `price-target-summary-bulk` },
    { version: 'v4', name: 'upgradesDowngradesConsensusBulk', path: () => `upgrades-downgrades-consensus-bulk` },
    { version: 'v4', name: 'etfHolderBulk', path: () => `etf-holder-bulk` },
];