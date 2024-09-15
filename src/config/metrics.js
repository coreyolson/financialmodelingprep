// Key Metrics and Ratios
export default [

    // Key Metrics and Ratios Endpoints
    { version: 'v3', name: 'keyMetrics', path: (symbol, period = 'annual') => `key-metrics/${symbol}?period=${period}` },
    { version: 'v3', name: 'keyMetricsTTM', path: (symbol) => `key-metrics-ttm/${symbol}` },
    { version: 'v3', name: 'ratios', path: (symbol, period = 'quarter') => `ratios/${symbol}?period=${period}` },
    { version: 'v3', name: 'ratiosTTM', path: (symbol) => `ratios-ttm/${symbol}` },
    { version: 'v3', name: 'cashFlowStatementGrowth', path: (symbol, period = 'annual') => `cash-flow-statement-growth/${symbol}?period=${period}` },
    { version: 'v3', name: 'incomeStatementGrowth', path: (symbol, period = 'annual') => `income-statement-growth/${symbol}?period=${period}` },
    { version: 'v3', name: 'balanceSheetStatementGrowth', path: (symbol, period = 'annual') => `balance-sheet-statement-growth/${symbol}?period=${period}` },
    { version: 'v3', name: 'financialGrowth', path: (symbol, period = 'annual') => `financial-growth/${symbol}?period=${period}` },
    { version: 'v4', name: 'score', path: (symbol) => `score?symbol=${symbol}` },
    { version: 'v4', name: 'ownerEarnings', path: (symbol) => `owner_earnings?symbol=${symbol}` },
    { version: 'v3', name: 'enterpriseValues', path: (symbol, period = 'quarter') => `enterprise-values/${symbol}/?period=${period}` },
    { version: 'v3', name: 'discountedCashFlow', path: (symbol) => `discounted-cash-flow/${symbol}` },
    { version: 'v4', name: 'advancedDiscountedCashFlow', path: (symbol) => `advanced_discounted_cash_flow?symbol=${symbol}` },
    { version: 'v4', name: 'advancedLeveredDiscountedCashFlow', path: (symbol) => `advanced_levered_discounted_cash_flow?symbol=${symbol}` },
    { version: 'v3', name: 'rating', path: (symbol) => `rating/${symbol}` },
    { version: 'v3', name: 'historicalRating', path: (symbol) => `historical-rating/${symbol}` },
    { version: 'v4', name: 'priceTarget', path: (symbol) => `price-target?symbol=${symbol}` },
    { version: 'v4', name: 'priceTargetSummary', path: (symbol) => `price-target-summary?symbol=${symbol}` },
];