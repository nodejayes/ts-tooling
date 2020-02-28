const path = require('path');

module.exports = {
    entry: {
        'ts-tooling': './src/ts-tooling.js',
    },
    mode: 'production',
    resolve: {
        extensions: ['.js']
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
