import {IDisposable} from "./disposable";

/**
 * use a Instance and Dispose it after Execution
 * @param item
 * @param cb
 */
export function using<T extends IDisposable>(item: new () => T, cb: (d: T) => void): void {
    const tmp = new item();
    cb(tmp);
    tmp.Dispose();
}
