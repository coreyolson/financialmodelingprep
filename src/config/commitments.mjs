// Commitment of Traders Reports
export default [

    // Commitment of Traders Reports
    { version: 'v4', name: 'commitmentOfTradersReportAnalysis', path: (symbol) => `commitment_of_traders_report_analysis/${symbol}` },
    { version: 'v4', name: 'commitmentOfTradersReportAnalysisRange', path: (from, to) => `commitment_of_traders_report_analysis?from=${from}&to=${to}` },
    { version: 'v4', name: 'commitmentOfTradersReport', path: (symbol) => `commitment_of_traders_report/${symbol}` },
    { version: 'v4', name: 'commitmentOfTradersReportRange', path: (from, to) => `commitment_of_traders_report?from=${from}&to=${to}` },
];