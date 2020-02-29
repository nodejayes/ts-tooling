import {Subject} from 'rxjs';
import {IBackgroundWorker} from '../worker.interface';
import '../../../types/string';

/**
 * the Implementation of BackgroundWorker for the Backend (Node Js)
 *
 * @category Pattern
 */
export class BackgroundWorker<T, K> implements IBackgroundWorker<T, K>{
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
     * detect if the Worker File to execute is a Typescript File
     * Typescript files takes longer to execute while the compiler must compile it
     */
    get IsTypeScript(): boolean;

    /**
     * detect if the Worker File to execute is a Javascript File
     */
    get IsJavaScript(): boolean;

    /**
     * create a new Background Worker
     * @param path the Script File of the Worker
     */
    constructor(path: string);

    /**
     * start a Execution of the Worker
     * @param args arguments passed into the Worker
     */
    Run(args?: T): void;
}
