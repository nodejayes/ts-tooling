import {Subject} from 'rxjs';

export interface IWorkerInput<T> {
    scriptPath: string;
    data: T;
}

export interface IBackgroundWorker<T, K> {
    WorkPath: string;
    OnFinish: Subject<K>;
    OnError: Subject<Error>;
    Run(args?: T);
}
