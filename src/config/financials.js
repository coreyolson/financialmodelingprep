// Financial Statements
export default [

    // Income Statement Endpoints
    { version: 'v3', name: 'incomeStatement', path: (symbol, period = 'annual') => `income-statement/${symbol}?period=${period}` },
    { version: 'v3', name: 'incomeStatementByCIK', path: (cik, period = 'annual') => `income-statement/${cik}?period=${period}` },

    // Balance Sheet Statement Endpoints
    { version: 'v3', name: 'balanceSheetStatement', path: (symbol, period = 'annual') => `balance-sheet-statement/${symbol}?period=${period}` },
    { version: 'v3', name: 'balanceSheetStatementByCIK', path: (cik, period = 'annual') => `balance-sheet-statement/${cik}?period=${period}` },

    // Cash Flow Statement Endpoints
    { version: 'v3', name: 'cashFlowStatement', path: (symbol, period = 'annual') => `cash-flow-statement/${symbol}?period=${period}` },
    { version: 'v3', name: 'cashFlowStatementByCIK', path: (cik, period = 'annual') => `cash-flow-statement/${cik}?period=${period}` },

    // As Reported Financial Statements
    { version: 'v3', name: 'incomeStatementAsReported', path: (symbol, period = 'annual', limit = 50) => `income-statement-as-reported/${symbol}?period=${period}&limit=${limit}` },
    { version: 'v3', name: 'balanceSheetStatementAsReported', path: (symbol, period = 'annual', limit = 50) => `balance-sheet-statement-as-reported/${symbol}?period=${period}&limit=${limit}` },
    { version: 'v3', name: 'cashFlowStatementAsReported', path: (symbol, period = 'annual', limit = 50) => `cash-flow-statement-as-reported/${symbol}?period=${period}&limit=${limit}` },
    { version: 'v3', name: 'financialStatementFullAsReported', path: (symbol, period = 'annual', limit = 50) => `financial-statement-full-as-reported/${symbol}?period=${period}&limit=${limit}` },

    // Financial Reports
    { version: 'v4', name: 'financialReportsJSON', path: (symbol, year, period) => `financial-reports-json?symbol=${symbol}&year=${year}&period=${period}` },
    { version: 'v4', name: 'financialReportsXLSX', path: (symbol, year, period) => `financial-reports-xlsx?symbol=${symbol}&year=${year}&period=${period}` },
    { version: 'v4', name: 'financialReportsDates', path: (symbol) => `financial-reports-dates?symbol=${symbol}` },
];