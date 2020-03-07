const {existsSync} = require('fs');
const {Worker} = require('worker_threads');
const {Subject} = require('rxjs');
require('../../../types/string/extension/extension');

/**
 * the Implementation of BackgroundWorker for the Backend (Node Js)
 *
 * @memberof pattern/background/node-worker
 */
class BackgroundWorker{
    /**
     * detect if the Worker File to execute is a Typescript File
     * Typescript files takes longer to execute while the compiler must compile it
     *
     * @readonly
     */
    get IsTypeScript() {
        return this.WorkPath.EndsWith('.ts');
    }

    /**
     * detect if the Worker File to execute is a Javascript File
     *
     * @readonly
     */
    get IsJavaScript() {
        return this.WorkPath.EndsWith('.js');
    }

    /**
     * create a new Background Worker
     *
     * @constructor
     *
     * @param path {string} the Script File of the Worker
     */
    constructor(path) {
        /**
         * the Path of the Worker File
         */
        this.WorkPath = null;
        /**
         * fired when the Worker Task was finish
         */
        this.OnFinish = new Subject();
        /**
         * fired when the Worker Task has a Error
         */
        this.OnError = new Subject();
        this.WorkPath = path;
    }

    /**
     * start a Execution of the Worker
     *
     * @param args {any} arguments passed into the Worker
     */
    Run(args) {
        if (!this.WorkPath || this.WorkPath.length < 1 || !existsSync(this.WorkPath)) {
            throw new Error(`missing DoWork Path/File ${this.WorkPath}`);
        }
        if (!this.IsJavaScript && !this.IsTypeScript) {
            throw new Error(`${this.WorkPath} is not supported Script for BackgroundWorker`);
        }
        const p = {
            data: args || null,
            scriptPath: this.WorkPath,
        };
        let workerScript = './pattern/background.worker/worker.js';
        if (!this.IsTypeScript && this.IsJavaScript) {
            workerScript = this.WorkPath;
        }
        const worker = new Worker(workerScript, {
            workerData: p,
        });
        let workerIsFinish = false;

        worker.on('message', (result) => {
            this.OnFinish.next(result);
            workerIsFinish = true;
        });
        worker.on('error', (err) => {
            this.OnError.next(err);
        });
    }
}

module.exports = {BackgroundWorker};
