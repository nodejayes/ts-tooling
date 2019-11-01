import {Subject} from 'rxjs';
import {Worker, parentPort, workerData} from 'worker_threads';

export class BackgroundWorker {
    private _tryCancel = false;
    private _isBusy = false;
    private _worker: Worker = null;
    private _work: (workerData: any) => void = null;

    get TryCancel(): boolean {
        return this._tryCancel;
    }

    get IsBusy(): boolean {
        return this._isBusy;
    }

    OnFinish = new Subject();
    OnError = new Subject();
    OnCancel = new Subject();

    Work<K>(cb: (workerData: K) => void) {
        this._work = cb;
    }

    Run() {
        // this._worker = new Worker(this._work);
    }

    Cancel() {}
}