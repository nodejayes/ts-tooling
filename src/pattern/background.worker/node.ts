import {existsSync} from 'fs';
import {Worker} from 'worker_threads';
import {Subject} from 'rxjs';
import {IBackgroundWorker, IWorkerInput} from './worker.interface';

export class BackgroundWorker<T, K> implements IBackgroundWorker<T, K>{
    WorkPath: string;

    OnFinish = new Subject<K>();
    OnError = new Subject<Error>();

    get IsTypeScript(): boolean {
        return this.WorkPath.EndsWith('.ts');
    }

    get IsJavaScript(): boolean {
        return this.WorkPath.EndsWith('.js');
    }

    constructor(path: string) {
        this.WorkPath = path;
    }

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
