const path = require('path');
const TypeDoc = require('typedoc');

class DtsBundlePlugin {
    apply(compiler) {
        compiler.hooks.done.tap(
            'DtsBundlePlugin',
            () => {
                let dts = require('dts-bundle');

                dts.bundle({
                    name: 'ts-tooling',
                    main: path.join(__dirname, 'lib', 'ts-tooling.d.ts'),
                    out: path.join(__dirname, 'lib', `ts-tooling.d.ts`),
                    removeSource: false,
                    outputAsModuleFolder: true
                });

                dts.bundle({
                    name: 'node-worker',
                    main: path.join(__dirname, 'lib', 'node-worker.d.ts'),
                    out: path.join(__dirname, 'lib', `node-worker.d.ts`),
                    removeSource: false,
                    outputAsModuleFolder: true
                });
                dts.bundle({
                    name: 'web-worker',
                    main: path.join(__dirname, 'lib', 'web-worker.d.ts'),
                    out: path.join(__dirname, 'lib', `web-worker.d.ts`),
                    removeSource: false,
                    outputAsModuleFolder: true
                });

                for (const mod of ['array', 'byte', 'datetime', 'dictionary', 'guid', 'number', 'object', 'string']) {
                    dts.bundle({
                        name: mod,
                        main: path.join(__dirname, 'lib', 'types', mod, 'index.d.ts'),
                        out: path.join(__dirname, 'lib', `${mod}.d.ts`),
                        removeSource: false,
                        outputAsModuleFolder: true
                    });
                }
            }
        );
    }
}

class TypeDocPlugin {
    apply(compiler) {
        compiler.hooks.done.tap(
            'TypeDocPlugin',
            () => {
                const app = new TypeDoc.Application();
                app.options.addReader(new TypeDoc.TSConfigReader());
                app.bootstrap({
                    mode: 'file',
                    logger: 'none',
                    target: 'ES5',
                    module: 'CommonJS',
                    experimentalDecorators: true,
                    categorizeByGroup: true,
                    excludeNotExported: true,
                    excludePrivate: true,
                    exclude: ['node_modules'],
                    theme: 'default',
                    out: 'docs',
                });
                const project = app.convert(app.expandInputFiles(['src']));
                if (project) {
                    const outputDir = 'docs';
                    app.generateDocs(project, outputDir);
                    app.generateJson(project, path.join(outputDir, 'documentation.json'));
                }
            }
        )
    }
}

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
    plugins: [
        new DtsBundlePlugin(),
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
