const {existsSync} = require('fs');
const {Worker} = require('worker_threads');
const {Subject} = require('rxjs');
require('../../../types/string/extension/extension');

class BackgroundWorker{
    get IsTypeScript() {
        return this.WorkPath.EndsWith('.ts');
    }

    get IsJavaScript() {
        return this.WorkPath.EndsWith('.js');
    }

    constructor(path) {
        this.WorkPath = null;
        this.OnFinish = new Subject();
        this.OnError = new Subject();
        this.WorkPath = path;
    }

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
        let workerScript = './src/pattern/background.worker/worker.js';
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
        worker.on('exit', () => {
            if (!workerIsFinish) {
                this.OnError.next(new Error('worker exited before Finish'));
            }
        });
    }
}

module.exports = {BackgroundWorker};
