import {IBackgroundWorker} from './worker.interface';
import {Subject} from 'rxjs';

function isBrowser(): boolean {
    try {
        return !!(window && Worker);
    } catch(e) {
        return false;
    }
}

let BW = null;
if (isBrowser()) {
    BW = require('./web');
} else {
    BW = require('./node');
}

/**
 * a Worker that runs in a Thread in Background
 */
export class BackgroundWorker<T, K> extends BW.BackgroundWorker implements IBackgroundWorker<T, K> {
    /**
     * fires when a Error occurs in the Worker
     */
    OnError: Subject<Error>;
    /**
     * fires when the Worker successfully finish his Work
     */
    OnFinish: Subject<K>;
    /**
     * the path to a script that was running in the Background
     */
    WorkPath: string;

    /**
     * create the Background Worker with a path to a Script
     * @param path
     */
    constructor(path: string) {
        super(path);
    }

    /**
     * start a new Thread Instance of this BackgroundWorker
     * @param args the Workers data argument
     */
    Run(args?: T) {
        super.Run(args);
    }
}
