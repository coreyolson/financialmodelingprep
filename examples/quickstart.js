/**
 * (Optional) Import and configure dotenv if you have a .env file
 * 
 * This is useful for storing your API key securely in a .env file.
 * Otherwise, you can set the API key directly in the code as shown below.
 * 
 * Install dotenv using `npm install dotenv --save-dev` to use this feature.
 */

// Try using dotenv
try {    
    
    // Import settings from .env file
    const dotenv = await import('dotenv');

    // Configure dotenv
    dotenv.config();

// Not Available
} catch (error) {

    // Log a warning if dotenv is not installed
    console.warn('dotenv is not installed, to use it, run `npm install dotenv --save-dev` and create a .env file');
}

// ----------------------------

// Step 1: Import the FinancialModelingPrepClient class
import FinancialModelingPrepClient from "../src/financialmodelingprep.js";

// Step 2: Set your API key (or use dotenv as shown above)
const FMP_API_KEY = process.env.FMP_API_KEY || 'YOUR_API_KEY_HERE';

// Step 3: Create a new instance of the FinancialModelingPrepClient
const fmp = new FinancialModelingPrepClient(FMP_API_KEY);

// Step 4: Use the client to fetch data from the API
await fmp.treasuryData({ from: '2024-09-13', to: '2024-09-13' })

    // Success!
    .then((data) => {

        // Use the data as needed
        console.log('Treasury Data:', data);
    })

    // Errors!
    .catch((error) => {

        // Handle any errors
        console.error('Error:', error);
    });

// ----------------------------

/**
 * (Optional) Use the `any` method to dynamically call any endpoint
 * 
 * This method allows you to call any endpoint by specifying the version and path.
 * Useful if the developer stops updating the library or new endpoints are added.
 */

// Use the `any` method to dynamically call any endpoint
await fmp.any('v4', 'treasury', { from: '2024-01-05', to: '2024-01-05' })

    // Success!
    .then((data) => {

        // Use the data as needed
        console.log('Treasury Data (via any method):', data);
    })

    // Errors!
    .catch((error) => {

        // Handle any errors
        console.error('Error:', error);
    });

// ----------------------------

// (Good to know) All available endpoints
const endpoints = fmp.getAllEndpoints();

// Alphabetically..
endpoints.sort();

// Log all available endpoints
console.warn('Available Endpoints:', endpoints.slice(0, 10), '... and', endpoints.length - 10, 'more');
