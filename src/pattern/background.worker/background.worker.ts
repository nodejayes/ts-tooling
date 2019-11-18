import {IBackgroundWorker, IWorkerInput} from './worker.interface';
import {Subject} from 'rxjs';

function isBrowser(): boolean {
    try {
        return !!(window);
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

export class BackgroundWorker<T, K> extends BW.BackgroundWorker implements IBackgroundWorker<T, K> {
    OnError: Subject<Error>;
    OnFinish: Subject<K>;
    WorkPath: string;

    constructor(path: string) {
        super(path);
    }

    Run(args?: T) {
        super.Run(args);
    }
}
