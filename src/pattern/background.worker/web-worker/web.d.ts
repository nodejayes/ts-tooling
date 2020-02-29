import {Subject} from 'rxjs';
import {IBackgroundWorker} from '../worker.interface';

/**
 * the Implementation of BackgroundWorker for the Web
 *
 * @category Pattern
 */
export class BackgroundWorker<T, K> implements IBackgroundWorker<T, K> {
    /**
     * the Path of the Worker File
     */
    WorkPath: string;

    /**
     * fired when the Worker Task was finish
     */
    OnFinish: Subject<K>;
    /**
     * fired when the Worker Task has a Error
     */
    OnError: Subject<Error>;

    /**
     * detect if the Worker File to execute is a Javascript File
     */
    get IsJavaScript(): boolean;

    /**
     * create a new Background Worker
     * the Constructor also load the File from the Backend
     * so the execution is faster when not have to load the File again for each execution
     * @param path the Script File of the Worker
     */
    constructor(path: string);

    /**
     * start a Execution of the Worker
     * @param args arguments passed into the Worker
     */
    Run(args: T): void;
}
