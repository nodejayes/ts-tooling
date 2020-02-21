import {existsSync} from 'fs';
import {Worker} from 'worker_threads';
import {Subject} from 'rxjs';
import {IBackgroundWorker, IWorkerInput} from './worker.interface';
import '../../types/string';

/**
 * the Implementation of BackgroundWorker for the Backend (Node Js)
 */
export class BackgroundWorker<T, K> implements IBackgroundWorker<T, K>{
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
     * detect if the Worker File to execute is a Typescript File
     * Typescript files takes longer to execute while the compiler must compile it
     */
    get IsTypeScript(): boolean {
        return this.WorkPath.EndsWith('.ts');
    }

    /**
     * detect if the Worker File to execute is a Javascript File
     */
    get IsJavaScript(): boolean {
        return this.WorkPath.EndsWith('.js');
    }

    /**
     * create a new Background Worker
     * @param path the Script File of the Worker
     */
    constructor(path: string) {
        this.WorkPath = path;
    }

    /**
     * start a Execution of the Worker
     * @param args arguments passed into the Worker
     */
    Run(args?: T) {
        if (!this.WorkPath || this.WorkPath.length < 1 || !existsSync(this.WorkPath)) {
            throw new Error(`missing DoWork Path/File ${this.WorkPath}`);
        }
        if (!this.IsJavaScript && !this.IsTypeScript) {
            throw new Error(`${this.WorkPath} is not supported Script for BackgroundWorker`);
        }
        const p = <IWorkerInput<T>>{
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
