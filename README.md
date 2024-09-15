# FinancialModelingPrep.com Node.js Wrapper

A Node.js client for interacting with the [FinancialModelingPrep API](https://financialmodelingprep.com/), providing a wide range of financial data, including market, company, and economic data. This library is designed to make it easy to fetch financial information with simple method calls.

#### Disclaimer

This project is an independent initiative and has no affiliation with FinancialModelingPrep or its web API development. It is provided as a convenient way to interact with the API at [financialmodelingprep.com](https://financialmodelingprep.com). The library is provided "as is," without warranty of any kind, express or implied. Use this library at your own risk. The author assumes no responsibility for any issues or damages that may arise from using this library.

## Features

- Access a variety of financial data endpoints (e.g., market data, company profiles, financial statements).
- Flexible configuration for API rate limits.
- Easy-to-use API methods for quick integration.
- Support for environment variables for sensitive data (API keys).
- Comprehensive test coverage for robust functionality.
- Easily extensible to support new API endpoints.
- Quickstart examples for easy integration.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Examples](#examples)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install this package using npm:

```bash
npm install financialmodelingprep-node
```

Or using yarn:

```bash
yarn add financialmodelingprep-node
```

## Configuration

This client uses the FinancialModelingPrep API key for accessing data. You can provide the API key directly or use an environment variable.

### Using Environment Variables

1. Create a `.env` file in the root of your project:

    ```bash
    touch .env
    ```

2. Add your FinancialModelingPrep API key to the `.env` file:

    ```env
    FMP_API_KEY=your_api_key_here
    ```

### Direct Configuration

Alternatively, you can directly set the API key when creating an instance of the client:

```javascript
const FinancialModelingPrepClient = require('financialmodelingprep-node');
const fmpClient = new FinancialModelingPrepClient('your_api_key_here');
```

## Usage

### Importing the Client

```javascript
import FinancialModelingPrepClient from 'financialmodelingprep-node';

// Using environment variables for API key
const fmpClient = new FinancialModelingPrepClient(process.env.FMP_API_KEY);
```

### Example Usage

Fetch the company profile for the given symbol.

```javascript
// Fetch the company profile for a given symbol
fmpClient.companyProfile({ symbol: 'TICKER' })

    // Success!
    .then(data => {

        // Use the data as needed
        console.log(data);
    })

    // Failure!
    .catch(error => {

        // Handle any errors
        console.error(error);
    });
```

### Using the `any` Method for Dynamic Endpoints

The `any` method allows you to call any endpoint by specifying the version and path. This is especially useful if new endpoints are added to the API, or if this library is not updated frequently to include those new endpoints.

```javascript
// Use the `any` method to dynamically call any endpoint
fmpClient.any('v4', 'treasury', { from: '2024-09-13', to: '2024-09-13' })

    // Success!
    .then(data => {

        // Use the data as needed
        console.log('Treasury Data (via any method):', data);
    })

    // Failure!
    .catch(error => {

        // Handle any errors
        console.error('Error:', error);
    });
```

### API Request Timeout

Specify a timeout (in milliseconds) for API requests. By default, the timeout is set to 3000 milliseconds (3 seconds).

```javascript
const fmpClient = new FinancialModelingPrepClient(process.env.FMP_API_KEY, { timeout: 3000 });
```

## API Endpoints

This client supports a wide range of endpoints, categorized as follows:

- **Market Data**: `quote`, `quotes`, `stockMarketGainers`, etc.
- **Company Data**: `companyProfile`, `stockPeers`, `companyOutlook`, etc.
- **Financial Statements**: `incomeStatement`, `balanceSheetStatement`, etc.
- **Economic Data**: `treasury`, `economicCalendar`, etc.
- **News and Press Releases**: `stockNews`, `pressReleases`, etc.
- **Search**: `search`, `searchTicker`, `searchIsin`, etc.

For detailed information on all available endpoints, refer to the official [FinancialModelingPrep API Documentation](https://site.financialmodelingprep.com/developer/docs). 

If a new endpoint is introduced, you can use the flexible `any` method to call it without waiting for an update to this library. Alternatively, you can modify or add to the config files in the [src/config](./src/config) directory to include new endpoints.

**Note**: The methods in this client generally follow the naming style of the FinancialModelingPrep API with camelCase conventions. Check the [examples](./examples/README.md) directory for the full list of available endpoints and their parameters.

### List of All Available Endpoints

To get a complete list of all available methods (i.e., API Endpoints), you can use the `getAllEndpoints` function. 

This function returns an array of all the method names supported by this client:

```javascript

// Get all the API Endpoints
const endpoints = fmpClient.getAllEndpoints();

// Display the list
console.log(endpoints);
```

## Examples

Here are some quick examples of how to use the client. For more examples, [explore the full list](./examples/README.md).

### Get Treasury Data

```javascript
fmpClient.treasury({ from: '2024-01-01', to: '2024-12-31' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

### Search for a Stock

```javascript
fmpClient.search({ query: 'text' })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

### Get Stock Market Gainers

```javascript
fmpClient.stockMarketGainers()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## Testing

This project includes a comprehensive test suite. To run the tests, use:

```bash
npm test
```

## Contributing

Contributions are welcome! Please fork this repository and open a pull request to propose changes.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.