import resolve from '@rollup/plugin-node-resolve';
import {babel} from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

import {terser} from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';
import json from 'rollup-plugin-json';
import babelrc from 'babelrc-rollup';

export default {
    input: 'entry.js',
    output: {
        file: '../dist/assets/js/service.js',
        format: 'iife',
        sourcemap: true,
    },
    plugins: [resolve(), commonjs(), json(), babel(babelrc({
        addExternalHelpersPlugin: false,
        exclude: '/node_modules/**',
        runtimeHelpers: false
    })), sourcemaps(), terser()]
}