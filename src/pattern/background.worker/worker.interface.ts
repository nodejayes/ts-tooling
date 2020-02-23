import {Subject} from 'rxjs';

/**
 * the execution Context of a Background Worker
 *
 * @category Pattern
 */
export interface IWorkerInput<T> {
    scriptPath: string;
    data: T;
}

/**
 * the Structure of a Background Worker
 *
 * @category Pattern
 */
export interface IBackgroundWorker<T, K> {
    WorkPath: string;
    OnFinish: Subject<K>;
    OnError: Subject<Error>;
    Run(args?: T);
}
