const path = require('path');

module.exports = {
    entry: {
        'ts-tooling': './src/ts-tooling.ts',
        'pattern/index': './src/pattern/index.ts',
        'pattern/background.worker/node-worker/index': './src/pattern/background.worker/node-worker/index.ts',
        'pattern/background.worker/web-worker/index': './src/pattern/background.worker/web-worker/index.ts',
        'pattern/event-handler/index': './src/pattern/event-handler/index.ts',
        'pattern/reactive-store/index': './src/pattern/reactive-store/index.ts',
        'types/array/index': './src/types/array/index.ts',
        'types/byte/index': './src/types/byte/index.ts',
        'types/datetime/index': './src/types/datetime/index.ts',
        'types/dictionary/index': './src/types/dictionary/index.ts',
        'types/guid/index': './src/types/guid/index.ts',
        'types/number/index': './src/types/number/index.ts',
        'types/object/index': './src/types/object/index.ts',
        'types/string/index': './src/types/string/index.ts',
        'utils/compression/index': './src/utils/compression/index.ts',
        'utils/generator/index': './src/utils/generator/index.ts',
        'utils/stopwatch/index': './src/utils/stopwatch/index.ts',
        'utils/validation/index': './src/utils/validation/index.ts',
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
