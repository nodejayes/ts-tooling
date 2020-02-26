const path = require('path');

module.exports = {
    entry: {
        'ts-tooling': './src/ts-tooling.ts',
        'pattern/background.worker/node-worker/index': './src/pattern/background.worker/node-worker/index.ts',
        'pattern/background.worker/web-worker/index': './src/pattern/background.worker/web-worker/index.ts',
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
