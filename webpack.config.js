const path = require('path');
const CleanLibFolderPlugin = require('./scripts/clean.lib.folder.plugin');
const BundlePlugin = require('./scripts/bundle.plugin');
const TypeDocPlugin = require('./scripts/typedoc.plugin');

const PROJECT_DIR = path.join(__dirname, 'src');
const LIB_DIR = path.join(__dirname, 'lib');

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
        'compression': './src/utils/compression/index.ts',
        'generator': './src/utils/generator/index.ts',
        'stopwatch': './src/utils/stopwatch/index.ts',
        'validation': './src/utils/validation/index.ts',
        'web-worker': './src/pattern/background.worker/web-worker/index.ts',
        'node-worker': './src/pattern/background.worker/node-worker/index.ts',
        'reactive-store': './src/pattern/reactive-store/index.ts',
        'event-handler': './src/pattern/event-handler/index.ts',
        'pattern': './src/pattern/index.ts',
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
    plugins: [
        new CleanLibFolderPlugin(LIB_DIR),
        new BundlePlugin(PROJECT_DIR, LIB_DIR),
        new TypeDocPlugin(),
    ],
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
