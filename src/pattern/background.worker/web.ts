import {Subject} from 'rxjs';
import {StringFactory} from '../../utils/string.factory';
import {IBackgroundWorker} from './worker.interface';

export class BackgroundWorker<T, K> implements IBackgroundWorker<T, K> {
    WorkPath: string;

    OnFinish = new Subject<K>();
    OnError = new Subject<Error>();

    get IsJavaScript(): boolean {
        return this.WorkPath.EndsWith('.js');
    }

    constructor(path: string) {
        this.WorkPath = path;
    }

    Run(args: T) {
        if (StringFactory.IsNullOrEmpty(this.WorkPath)) {
            throw new Error(`missing DoWork Path/File ${this.WorkPath}`);
        }
        if (!this.IsJavaScript) {
            throw new Error(`${this.WorkPath} is not supported Script for BackgroundWorker`);
        }
        const worker = new Worker(this.WorkPath);
        worker.addEventListener('message', (e) => {
            this.OnFinish.next(e.data);
        });
        worker.addEventListener('error', (e) => {
            this.OnError.next(e.error);
        });
        worker.postMessage(args || null);
    }
}
