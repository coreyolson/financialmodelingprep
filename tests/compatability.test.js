import FinancialModelingPrepClient from '../dist/financialmodelingprep.bundle.js';

// Test for Top-Level Import
test('should import FinancialModelingPrepClient from top-level import', () => {
    // Check if the imported value is a function (class)
    expect(typeof FinancialModelingPrepClient).toBe('function');
});

// Test for CommonJS
test('should import FinancialModelingPrepClient using require', () => {
    // Import the module using require
    const FinancialModelingPrepClient = require('../dist/financialmodelingprep.bundle.js');

    // Check if the imported value is a function (class)
    expect(typeof FinancialModelingPrepClient).toBe('function');
});

// Test for ES Modules
test('should import FinancialModelingPrepClient using import', async () => {
    // Dynamic import to simulate ES module import
    const { default: FinancialModelingPrepClient } = await import('../dist/financialmodelingprep.bundle.js');

    // Check if the imported value is a function (class)
    expect(typeof FinancialModelingPrepClient).toBe('function');
});