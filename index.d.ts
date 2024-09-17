declare module 'financialmodelingprep-node' {
    export default class FinancialModelingPrepClient {
        constructor(apiKey: string, userOptions?: { timeout?: number, base?: string });
        fetch(endpoint: string): Promise<any>;
        any(version: string, endpoint: string, params?: object): Promise<any>;
        getAllEndpoints(): Array<string>;
        [key: string]: ((...params: any[]) => Promise<any>) | (() => Array<string>);
    }
}