// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/index.mjs',
    output: {
        file: 'dist/financialmodelingprep.bundle.js',
        format: 'umd',
        name: 'FinancialModelingPrepClient',
        exports: 'default',
        esModule: true
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({ babelHelpers: 'bundled' }),
        terser() 
    ]
};