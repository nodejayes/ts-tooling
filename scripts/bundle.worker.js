const fs = require('fs');
const path = require('path');
const generator = require('dts-bundle-generator');
const {parentPort, workerData} = require('worker_threads');

function generate(args) {
    const LIB_DIR = args.libDir;
    const MODULE_FOLDER = args.moduleFolder;
    const NAME = args.name;
    const moduleFolderStats = fs.statSync(MODULE_FOLDER);
    // /// <reference types="luxon" />
    // import {DateTime as LuxonDateTime} from 'luxon';
    // replace the first line in types
    const content = generator.generateDtsBundle([
        {
            filePath: moduleFolderStats.isDirectory() ? path.join(MODULE_FOLDER, 'index.ts') : MODULE_FOLDER,
            output: {
                inlineDeclareGlobals: true,
            }
        }
    ]);
    fs.writeFileSync(path.join(LIB_DIR, `${NAME}.d.ts`), content
        .map(c => c.replace(
            '/// <reference types="luxon" />',
            'import {DateTime as LuxonDateTime} from \'luxon\';')
        ), {encoding:'utf-8'});
}

parentPort.postMessage(generate(workerData));
