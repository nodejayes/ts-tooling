import {Subject} from 'rxjs';
import {StringFactory} from '../../utils/string.factory';
import {IBackgroundWorker, IWorkerInput} from "./worker.interface";

export class BackgroundWorker<T, K> implements IBackgroundWorker<T, K> {
    WorkPath: string;

    OnFinish = new Subject<K>();
    OnError = new Subject<Error>();

    constructor(path: string) {
        this.WorkPath = path;
    }

    Run(args: IWorkerInput<T>) {
        if (StringFactory.IsNullOrEmpty(this.WorkPath)) {
            throw new Error(`missing DoWork Path`);
        }
        /*
        try {
            const work = await spawn(new Worker(this.WorkPath));
            const result = await work(args);
            await Thread.terminate(work);
            this.OnFinish.next(result);
        } catch (err) {
            this.OnError.next(err);
        }
         */
    }
}
