// Earnings and Reports
export default [

    // Earning Call Transcripts
    { version: 'v3', name: 'earningCallTranscript', path: (symbol, year, quarter) => `earning_call_transcript/${symbol}?year=${year}&quarter=${quarter}` },
    { version: 'v4', name: 'earningCallTranscriptV4', path: (symbol) => `earning_call_transcript?symbol=${symbol}` },
    { version: 'v4', name: 'batchEarningCallTranscript', path: (symbol, year) => `batch_earning_call_transcript/${symbol}?year=${year}` },

    // Earning Calendar
    { version: 'v3', name: 'earningCalendar', path: (from, to) => `earning_calendar?from=${from}&to=${to}` },
    { version: 'v3', name: 'historicalEarningCalendar', path: (symbol) => `historical/earning_calendar/${symbol}` },
    { version: 'v4', name: 'earningCalendarConfirmed', path: (from, to) => `earning-calendar-confirmed?from=${from}&to=${to}` },

    // Earnings Surprises
    { version: 'v3', name: 'earningsSurprises', path: (symbol) => `earnings-surprises/${symbol}` },
    { version: 'v4', name: 'earningsSurprisesBulk', path: () => `earnings-surprises-bulk` },

    // Financial Reports
    { version: 'v4', name: 'financialReportsDates', path: (symbol) => `financial-reports-dates?symbol=${symbol}` },
    { version: 'v4', name: 'financialReportsJSON', path: (symbol, year, period) => `financial-reports-json?symbol=${symbol}&year=${year}&period=${period}` },
    { version: 'v4', name: 'financialReportsXLSX', path: (symbol, year, period) => `financial-reports-xlsx?symbol=${symbol}&year=${year}&period=${period}` },

    // Other Reports
    { version: 'v4', name: 'stockPeersBulk', path: () => `stock_peers_bulk` },
    { version: 'v4', name: 'ratingBulk', path: () => `rating-bulk` },
    { version: 'v4', name: 'dcfBulk', path: () => `dcf-bulk` },
];