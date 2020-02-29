const {Subject} = require('rxjs');
require('../../../types/string/extension/extension');

class BackgroundWorker {
    get IsJavaScript() {
        return this.WorkPath.EndsWith('.js');
    }

    constructor(path) {
        this._worker = null;
        this.WorkPath = null;
        this.OnFinish = new Subject();
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
