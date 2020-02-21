const path = require('path');

module.exports = {
    entry: {
        'ts-tooling': './src/ts-tooling.ts',
        'array': './src/types/array/index.ts',
        'byte': './src/types/byte/index.ts',
        'datetime': './src/types/datetime/index.ts',
        'dictionary': './src/types/dictionary/index.ts',
        'guid': './src/types/guid/index.ts',
        'number': './src/types/number/index.ts',
        'object': './src/types/object/index.ts',
        'string': './src/types/string/index.ts',
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
