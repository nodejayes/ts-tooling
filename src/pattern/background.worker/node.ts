import {Worker} from 'worker_threads';
import {Subject} from 'rxjs';
import {StringFactory} from '../../utils/string.factory';
import {IBackgroundWorker, IWorkerInput} from './worker.interface';

export class BackgroundWorker<T, K> implements IBackgroundWorker<T, K>{
    WorkPath: string;

    OnFinish = new Subject<K>();
    OnError = new Subject<Error>();

    constructor(path: string) {
        this.WorkPath = path;
    }

    Run(args?: T) {
        if (StringFactory.IsNullOrEmpty(this.WorkPath)) {
            throw new Error(`missing DoWork Path`);
        }
        const p = <IWorkerInput<T>>{
            data: args || null,
            scriptPath: this.WorkPath,
        };
        const worker = new Worker('./src/pattern/background.worker/worker.js', {
            workerData: p,
        });
        worker.on('message', (result) => {
            this.OnFinish.next(result);
        });
        worker.on('error', (err) => {
            this.OnError.next(err);
        });
    }
}
