const path = require('path');
const generator = require('dts-bundle-generator');
const {Worker} = require('worker_threads');
const {cpus} = require('os');

const TODO_LIST = [];
const WORK_LIST = [];

async function startWorkers() {
    while (TODO_LIST.length > 0) {
        if (WORK_LIST.length >= Math.ceil(cpus().length/2)) {
            await new Promise(resolve => setTimeout(resolve, 2000));
            continue;
        }
        const takenElement = TODO_LIST.splice(0, 1)[0];
        WORK_LIST.push(takenElement);
        const w = new Worker(path.join(__dirname, 'bundle.worker.js'), {
            workerData: {
                libDir: takenElement.libDir,
                moduleFolder: takenElement.moduleFolder,
                name: takenElement.name,
            }
        });
        w.on('exit', () => {
            WORK_LIST.splice(0, 1);
        });
    }
}

function buildDeclarations(generator, moduleInfos, projectDir, libDir) {
    if (!Array.isArray(moduleInfos)) {
        throw new Error(`moduleInfos must be a array: ${JSON.stringify(moduleInfos)}`);
    }
    for (const info of moduleInfos) {
        if (!info ||!info.parents || !info.names) {
            throw new Error(`moduleInfos has a invalid format: ${JSON.stringify(moduleInfos)}`);
        }
        if (info.names === 'ts-tooling') {
            TODO_LIST.push({libDir, moduleFolder: path.join(projectDir, 'ts-tooling.ts'), name: info.names});
            continue;
        }
        if (!Array.isArray(info.names)) {
            throw new Error(`moduleInfos has a invalid format: ${JSON.stringify(moduleInfos)}`);
        }
        for (const name of info.names) {
            const moduleFolder = path.join(projectDir, ...[...info.parents, name]);
            TODO_LIST.push({libDir, moduleFolder, name});
        }
    }
    startWorkers();
}

class BundlePlugin {
    constructor(projectDir, libDir) {
        this.projectDir = projectDir;
        this.libDir = libDir;
    }

    apply(compiler) {
        compiler.hooks.done.tap(
            'DtsBundlePlugin',
            () => {
                buildDeclarations(generator, [
                    {parents: [], names: 'ts-tooling'},
                    {parents: ['types'], names: ['array', 'byte', 'datetime', 'dictionary', 'guid', 'number', 'object', 'string']},
                    {parents: ['utils'], names: ['compression', 'generator', 'stopwatch', 'validation']},
                    {parents: ['pattern'], names: ['reactive-store', 'event-handler']},
                    {parents: ['pattern', 'background.worker'], names: ['node-worker', 'web-worker']},
                    {parents: [], names: ['pattern']},
                ], this.projectDir, this.libDir);
            }
        );
    }
}

module.exports = BundlePlugin;
