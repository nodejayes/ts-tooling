import {Subject} from 'rxjs';
import {IBackgroundWorker} from '../worker.interface';

/**
 * the Implementation of BackgroundWorker for the Web
 *
 * @category Pattern
 */
export class BackgroundWorker<T, K> implements IBackgroundWorker<T, K> {
    private _worker: Worker = null;
    /**
     * the Path of the Worker File
     */
    WorkPath: string;

    /**
     * fired when the Worker Task was finish
     */
    OnFinish = new Subject<K>();
    /**
     * fired when the Worker Task has a Error
     */
    OnError = new Subject<Error>();

    /**
     * detect if the Worker File to execute is a Javascript File
     */
    get IsJavaScript(): boolean {
        return this.WorkPath.EndsWith('.js');
    }

    /**
     * create a new Background Worker
     * the Constructor also load the File from the Backend
     * so the execution is faster when not have to load the File again for each execution
     * @param path the Script File of the Worker
     */
    constructor(path: string) {
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
     * @param args arguments passed into the Worker
     */
    Run(args: T) {
        this._worker.addEventListener('message', (e) => {
            this.OnFinish.next(e.data);
        });
        this._worker.addEventListener('error', (e) => {
            this.OnError.next(e.error);
        });
        this._worker.postMessage(args || null);
    }
}
