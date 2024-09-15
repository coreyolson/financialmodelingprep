// Treasury and Economic Data
export default [

    // Treasury and Economic Data
    { version: 'v4', name: 'treasury', path: (from, to) => `treasury?from=${from}&to=${to}` },
    { version: 'v4', name: 'economic', path: (name) => `economic?name=${name}` },
    { version: 'v3', name: 'economicCalendar', path: (from, to) => `economic_calendar?from=${from}&to=${to}` },
];