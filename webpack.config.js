const path = require('path');

module.exports = {
    entry: {
        'ts-tooling': './src/ts-tooling.ts',
        'number': './src/types/number/index.ts',
        'string': './src/types/string/index.ts',
        'array': './src/types/array/index.ts',
        'web-worker': './src/web-worker.ts',
        'node-worker': './src/node-worker.ts',
    },
    mode: 'production',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader?configFile=tsconfig.json',
                exclude: [/node_modules/]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].js',
        library: 'tst',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    externals: {
        fs: {
            commonjs: 'fs',
            commonjs2: 'fs',
        },
        worker_threads: {
            commonjs: 'worker_threads',
            commonjs2: 'worker_threads',
        },
    },
};
