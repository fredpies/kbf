import resolve from '@rollup/plugin-node-resolve';
import {babel} from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

import {terser} from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';
import json from '@rollup/plugin-json';
import babelrc from 'babelrc-rollup';
import config from '../config/config';

let env = config.env; // aktualne srodowisko

let plugins = [
    resolve({
        preferBuiltins: true
    }),
    commonjs(),
    json(),
    babel(babelrc({
        addExternalHelpersPlugin: false,
        exclude: '/node_modules/**',
        runtimeHelpers: false
    }))
];

if (env === 'dev') plugins = [ sourcemaps(), ...plugins];
if (env === 'prod' ) plugins = [ terser(), ...plugins];

export default {
    input: 'entry.js',
    output: {
        file: '../../assets/js/dashboard-company.js',
        format: 'es',
        sourcemap: env === 'dev',
    },
    plugins
}