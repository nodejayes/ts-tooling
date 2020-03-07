const {Subject} = require('rxjs');
require('../../../types/string/extension/extension');

/**
 * the Implementation of BackgroundWorker for the Web
 *
 * @memberof pattern/background/web-worker
 */
class BackgroundWorker {
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
     * the Constructor also load the File from the Backend
     * so the execution is faster when not have to load the File again for each execution
     *
     * @constructor
     *
     * @param path {string} the Script File of the Worker
     */
    constructor(path) {
        this._worker = null;
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
        if (!Worker) {
            throw new Error(`WebWorker not supported`);
        }
        this.WorkPath = path;
        if (!this.WorkPath || this.WorkPath.length < 1) {
            throw new Error(`missing DoWork Path/File ${this.WorkPath}`);
        }
        if (!this.IsJavaScript) {
            throw new Error(`${this.WorkPath} is not supported Script for BackgroundWorker`);
        }
        this._worker = new Worker(this.WorkPath);
    }

    /**
     * start a Execution of the Worker
     *
     * @param args {any} arguments passed into the Worker
     */
    Run(args) {
        this._worker.addEventListener('message', (e) => {
            this.OnFinish.next(e.data);
        });
        this._worker.addEventListener('error', (e) => {
            this.OnError.next(e.error);
        });
        this._worker.postMessage(args || null);
    }
}

module.exports = {BackgroundWorker};
