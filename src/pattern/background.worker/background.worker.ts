import {IBackgroundWorker} from "./worker.interface";
import {Subject} from "rxjs";

function isBrowser(): boolean {
    try {
        return !!(Worker);
    } catch(e) {
        return false;
    }
}

let BG = null;
if (isBrowser()) {
    BG = require('./web');
} else {
    BG = require('./node');
}

export class BackgroundWorker<T, K> extends BG.BackgroundWorker implements IBackgroundWorker<T, K> {
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
