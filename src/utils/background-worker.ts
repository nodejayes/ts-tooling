import {Subject} from 'rxjs';

export class BackgroundWorker {
    private _tryCancel = false;
    private _isBusy = false;

    get TryCancel(): boolean {
        return this._tryCancel;
    }

    get IsBusy(): boolean {
        return this._isBusy;
    }

    OnFinish = new Subject();
    OnError = new Subject();
    OnCancel = new Subject();

    constructor() {}

    Work<K>(cb: (workerData: K) => void) {}
    Run() {}
    Cancel() {}
}