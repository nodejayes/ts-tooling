const path = require('path');

module.exports = {
    entry: {
        'ts-tooling': './src/ts-tooling.ts',
        'web-worker': './src/pattern/background.worker/web.ts',
        'node-worker': './src/pattern/background.worker/node.ts',
        'type-checker': './src/primitive/type.checker.ts',
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
