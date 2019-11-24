const path = require('path');

module.exports = {
    entry: './lib/ts-tooling.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'ts-tooling.bundle.js',
        library: 'tst',
        libraryTarget: 'var',
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
