const fs = require('fs');
const path = require('path');
const generator = require('dts-bundle-generator');
const {parentPort, workerData} = require('worker_threads');

function generate(args) {
    const LIB_DIR = args.libDir;
    const MODULE_FOLDER = args.moduleFolder;
    const NAME = args.name;
    const moduleFolderStats = fs.statSync(MODULE_FOLDER);
    fs.writeFileSync(path.join(LIB_DIR, `${NAME}.d.ts`), generator.generateDtsBundle([
        {
            filePath: moduleFolderStats.isDirectory() ? path.join(MODULE_FOLDER, 'index.ts') : MODULE_FOLDER,
            output: {
                inlineDeclareGlobals: true,
            }
        }
    ]), {encoding:'utf-8'});
}

parentPort.postMessage(generate(workerData));
