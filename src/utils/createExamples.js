import fs from 'fs';

// Import all endpoint configurations
import companies from '../config/companies.js';
import search from '../config/search.js';
import market from '../config/market.js';
import financials from '../config/financials.js';
import metrics from '../config/metrics.js';
import targets from '../config/targets.js';
import news from '../config/news.js';
import reports from '../config/reports.js';
import events from '../config/events.js';
import historical from '../config/historical.js';
import funds from '../config/funds.js';
import institutional from '../config/institutional.js';
import indices from '../config/indices.js';
import commitments from '../config/commitments.js';
import treasury from '../config/treasury.js';
import commodities from '../config/commodities.js';
import constituents from '../config/constituents.js';
import bulk from '../config/bulk.js';

// Map categories to their respective imports
const categories = {
    Companies: companies,
    Search: search,
    Market: market,
    Financials: financials,
    Metrics: metrics,
    Targets: targets,
    News: news,
    Reports: reports,
    Events: events,
    Historical: historical,
    Funds: funds,
    Institutional: institutional,
    Indices: indices,
    Commitments: commitments,
    Treasury: treasury,
    Commodities: commodities,
    Constituents: constituents,
    Bulk: bulk,
};

/**
 * Infer default values for common parameters.
 * 
 * @param {string} param - The parameter name to infer the default value for.
 * @returns {string|number} - The inferred default value.
 */
function getParamDefaultValue(param) {

    // Convert parameter name to lowercase for case-insensitive matching
    const lowerParam = param.toLowerCase();

    // Default to 'TICKER' if 'symbol' or 'ticker' is in the parameter name
    if (lowerParam.includes('symbol') || lowerParam.includes('ticker')) return `'TICKER'`;

    // Default to 'Jane Smith' if 'name' is in the parameter name
    if (lowerParam.includes('name')) return `'Jane Smith'`;

    // Default to '2024-09-13' if 'date', 'from', or 'to' is in the parameter name
    if (lowerParam.includes('date') || lowerParam.includes('from') || lowerParam.includes('to')) return `'2024-09-13'`;

    // Default to 'annual' if 'period' is in the parameter name
    if (lowerParam.includes('period')) return `'annual'`;

    // Default to 10 if 'limit' is in the parameter name
    if (lowerParam.includes('limit')) return `10`;

    // Default to 5 if 'page' is in the parameter name
    if (lowerParam.includes('page')) return `5`;

    // Default to 2024 if 'year' is in the parameter name
    if (lowerParam.includes('year')) return `2024`;

    // Default to '1min' if 'interval' is in the parameter name
    if (lowerParam.includes('interval')) return `'1min'`;

    // Default to 'NASDAQ' if 'exchange' is in the parameter name
    if (lowerParam.includes('exchange')) return `'NASDAQ'`;

    // Default to 'VALUE' if no specific match is found
    return `'VALUE'`;
}

/**
 * Extract parameters and their default values from the function.
 * 
 * @param {Function} pathFunction - The function from which to extract parameters.
 * @returns {Array<Object>} - An array of parameter objects with names and default values.
 */
function extractParamsFromConfig(pathFunction) {

    // Convert the function to a string
    const funcString = pathFunction.toString();

    // Match the parameters within the function string
    const paramsMatch = funcString.match(/\(([^)]*)\)/);

    // Return an empty array if no parameters are found
    if (!paramsMatch) return [];

    // Parse Parameters and Default Values
    return paramsMatch[1]
        .split(',')
        .map(param => {
            // Extract the parameter name and infer its default value
            const [paramName] = param.split('=').map(p => p.trim());

            // Get the default value for the parameter
            const paramDefaultValue = getParamDefaultValue(paramName);

            // Return an object with the parameter name and default value
            return { name: paramName, defaultValue: paramDefaultValue };
        });
}

/**
 * Generate the usage example for the "any" method.
 *
 * @returns {string} - The documentation string for the "any" method.
 */
function generateAnyMethodUsage() {

    // Return the usage example content for the 'any' method
    return `Can't find something? The \`any\` method allows you to call any endpoint by specifying the version and path.

\`\`\`javascript
// Example of using the 'any' method to call an endpoint
fmpClient.any('v4', 'treasury', { from: '2024-09-13', to: '2024-09-13' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
\`\`\`
`;
}

/**
 * Generate a disclaimer text for the documentation.
 * 
 * @param {boolean} isLong - Indicates if the long disclaimer is needed.
 * @returns {string} - The generated disclaimer text.
 */
function generateDisclaimer(isLong = false) {

    // Base disclaimer text
    let disclaimer = `**Disclaimer:** This document is auto-generated and provides usage examples for all available endpoints in the FinancialModelingPrep Node.js client.`;

    // Append additional information for the long version
    if (isLong) {
        disclaimer += ` The information presented here is based on the current configuration and may not reflect recent changes to the API or the library. Use this documentation as a reference, but consult the official [FinancialModelingPrep API Documentation](https://site.financialmodelingprep.com/developer/docs) for the most up-to-date and accurate information.`;
    }

    // Add a new line at the end
    return `${disclaimer}\n\n`;
}

// Unlink (delete) all markdown files in the specified directory
function clearExamplesDirectory(directory) {
    // Check if the directory exists
    if (fs.existsSync(directory)) {
        // Loop through and delete each markdown file
        fs.readdirSync(directory).forEach(file => {
            if (file.endsWith('.md')) {
                fs.unlinkSync(`${directory}/${file}`);
            }
        });
    }
}

/**
 * Generate markdown documentation for a single category.
 * 
 * @param {string} category - The category name.
 * @param {Array} endpoints - The list of endpoints for the category.
 * @returns {string} - The generated markdown content for the category.
 */
function generateMarkdownForCategory(category, endpoints) {

    // Start the content for the category with a header and short disclaimer
    let markdownContent = `# ${category} Endpoints\n\n${generateDisclaimer()}`; // Use short disclaimer

    // Loop through each endpoint to create examples
    endpoints.forEach(({ name, path }) => {

        // Extract parameter names and their default values from the path function
        const params = extractParamsFromConfig(path);

        // Method header and usage example
        markdownContent += `## ${name}\n\n`;
        markdownContent += `Example usage for \`${name}\`:\n\n`;

        // Example JavaScript code block
        markdownContent += '```javascript\n';

        // Generate function call with parameters if available
        if (params.length > 0 && !params.every(param => param.defaultValue === `'VALUE'`)) {

            // Include the parameter names and default values in the example usage
            const paramsString = params.map(({ name, defaultValue }) => `${name}: ${defaultValue}`).join(', ');

            // Call the function with the default parameters
            markdownContent += `fmpClient.${name}({ ${paramsString} })\n`;
        
        // No parameters
        } else {

            // No meaningful parameters required
            markdownContent += `fmpClient.${name}()\n`;
        }

        // Complete the example usage
        markdownContent += `    .then(data => console.log(data))\n`;
        markdownContent += `    .catch(error => console.error(error));\n`;
        markdownContent += '```\n\n';
    });

    // Link back to the overview
    markdownContent += `[Back to Overview](./README.md)\n`;

    return markdownContent;
}

/**
 * Generate markdown documentation for all categories.
 * 
 * @returns {void}
 */
function generateMarkdownForEndpoints() {

    // Directory for the markdown examples
    const examplesDir = './../examples';

    // Clear existing markdown files in the directory
    clearExamplesDirectory(examplesDir);

    // Create the examples directory if it doesn't exist
    if (!fs.existsSync(examplesDir)) fs.mkdirSync(examplesDir, { recursive: true });

    // Generate the overview content
    let overviewContent = `# FinancialModelingPrep API Endpoints Usage\n\n`;

    // Add the long disclaimer and 'any' method usage example to the overview
    overviewContent += generateDisclaimer(true);
    overviewContent += generateAnyMethodUsage();

    // Add the categories section
    overviewContent += `## Available Categories\n\n`;
    overviewContent += `Select a category below to view available endpoints and see [Quick Start Code](./__quickstart.js) for more information.\n\n`;

    // Sort categories alphabetically
    const sortedCategories = Object.keys(categories).sort();

    // Iterate over each category and generate its markdown content
    sortedCategories.forEach(category => {

        // Get endpoints for the category and generate markdown content
        const endpoints = categories[category];
        const categoryContent = generateMarkdownForCategory(category, endpoints);

        // Define filename for the category markdown file
        const categoryFilename = `${category.toLowerCase().replace(/ /g, '-')}.md`;

        // Write the category markdown file to the examples directory
        fs.writeFileSync(`${examplesDir}/${categoryFilename}`, categoryContent);

        // Add a link to the category markdown file in the overview
        overviewContent += `- [${category}](./${categoryFilename})\n`;
    });

    // Write the overview content to README.md in the examples directory
    fs.writeFileSync(`${examplesDir}/README.md`, overviewContent);

    // Log success message to the console
    console.log(`Markdown documentation generated successfully in the ${examplesDir} directory.`);
}

// Generate markdown documentation
generateMarkdownForEndpoints();