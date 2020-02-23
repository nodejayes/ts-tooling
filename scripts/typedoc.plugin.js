const path = require('path');
const TypeDoc = require('typedoc');

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

module.exports = TypeDocPlugin;
