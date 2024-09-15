// Dividends, Splits, IPOs, Mergers
export default [

    // Dividend and Split Calendars
    { version: 'v3', name: 'stockDividendCalendar', path: (from, to) => `stock_dividend_calendar?from=${from}&to=${to}` },
    { version: 'v3', name: 'historicalStockDividend', path: (symbol) => `historical-price-full/stock_dividend/${symbol}` },
    { version: 'v3', name: 'stockSplitCalendar', path: (from, to) => `stock_split_calendar?from=${from}&to=${to}` },
    { version: 'v3', name: 'historicalStockSplit', path: (symbol) => `historical-price-full/stock_split/${symbol}` },

    // IPO Calendars
    { version: 'v4', name: 'ipoCalendarConfirmed', path: (from, to) => `ipo-calendar-confirmed?from=${from}&to=${to}` },
    { version: 'v4', name: 'ipoCalendarProspectus', path: () => `ipo-calendar-prospectus` },
    { version: 'v3', name: 'ipoCalendar', path: () => `ipo_calendar` },

    // Mergers and Acquisitions
    { version: 'v4', name: 'mergersAcquisitionsRSSFeed', path: (page = 0) => `mergers-acquisitions-rss-feed?page=${page}` },
    { version: 'v4', name: 'mergersAcquisitionsSearch', path: (name) => `mergers-acquisitions/search?name=${name}` },

    // Fundraising
    { version: 'v4', name: 'fundraisingRSSFeed', path: (page = 0) => `fundraising-rss-feed?page=${page}` },
    { version: 'v4', name: 'fundraisingSearch', path: (name) => `fundraising/search?name=${name}` },
    { version: 'v4', name: 'fundraisingByCIK', path: (cik) => `fundraising?cik=${cik}` },
];