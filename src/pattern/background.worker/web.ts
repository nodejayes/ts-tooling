import {Subject} from 'rxjs';
import {StringFactory} from '../../utils/string.factory';
import {IBackgroundWorker} from './worker.interface';

export class BackgroundWorker<T, K> implements IBackgroundWorker<T, K> {
    private _worker: Worker = null;
    WorkPath: string;

    OnFinish = new Subject<K>();
    OnError = new Subject<Error>();

    get IsJavaScript(): boolean {
        return this.WorkPath.EndsWith('.js');
    }

    constructor(path: string) {
        if (!Worker) {
            throw new Error(`WebWorker not supported`);
        }
        this.WorkPath = path;
        if (StringFactory.IsNullOrEmpty(this.WorkPath)) {
            throw new Error(`missing DoWork Path/File ${this.WorkPath}`);
        }
        if (!this.IsJavaScript) {
            throw new Error(`${this.WorkPath} is not supported Script for BackgroundWorker`);
        }
        this._worker = new Worker(this.WorkPath);
    }

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
