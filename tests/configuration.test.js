// Import configuration files
import companies from '../src/config/companies.js';
import search from '../src/config/search.js';
import market from '../src/config/market.js';
import financials from '../src/config/financials.js';
import metrics from '../src/config/metrics.js';
import targets from '../src/config/targets.js';
import news from '../src/config/news.js';
import reports from '../src/config/reports.js';
import events from '../src/config/events.js';
import historical from '../src/config/historical.js';
import funds from '../src/config/funds.js';
import instutional from '../src/config/institutional.js';
import indices from '../src/config/indices.js';
import commitments from '../src/config/commitments.js';
import treasury from '../src/config/treasury.js';
import commodities from '../src/config/commodities.js';
import constituents from '../src/config/constituents.js';
import bulk from '../src/config/bulk.js';

// Reusable test function
const validateConfig = (configArray, configName) => {
    describe(`${configName} Config`, () => {
        test('should export an array', () => {
            expect(Array.isArray(configArray)).toBe(true);
        });

        test('should have required properties', () => {
            configArray.forEach(endpoint => {
                expect(endpoint).toHaveProperty('version');
                expect(endpoint).toHaveProperty('name');
                expect(endpoint).toHaveProperty('path');
                expect(typeof endpoint.version).toBe('string');
                expect(typeof endpoint.name).toBe('string');
                expect(typeof endpoint.path).toBe('function');

                // Test the path function
                const path = endpoint.path();
                expect(typeof path).toBe('string');
            });
        });
    });
};

// Run tests for each configuration
validateConfig(companies, 'Companies');
validateConfig(market, 'Market');
validateConfig(search, 'Search');
validateConfig(financials, 'Financials');
validateConfig(metrics, 'Metrics');
validateConfig(targets, 'Targets');
validateConfig(news, 'News');
validateConfig(reports, 'Reports');
validateConfig(events, 'Events');
validateConfig(historical, 'Historical');
validateConfig(funds, 'Funds');
validateConfig(instutional, 'Institutional');
validateConfig(indices, 'Indices');
validateConfig(commitments, 'Commitments');
validateConfig(treasury, 'Treasury');
validateConfig(commodities, 'Commodities');
validateConfig(constituents, 'Constituents');
validateConfig(bulk, 'Bulk');