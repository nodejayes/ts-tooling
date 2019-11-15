import {IDisposable} from './disposable';

/**
 * use a Instance and Dispose it after Execution
 * @param item a instance of a Class to Dispose after running the using section
 * @param cb what is to do in this using?
 *
 * ```typescript
 * class WithDisposable implements IDisposable {
 *   Name = 'WithoutDisposable';
 *
 *   Dispose(): void {
 *     this.Name = '';
 *   }
 * }
 * using(WithDisposable, (i) => {
 *   // Do whatever you want to do with the new Instance of the Class
 * });
 * ```
 */
export function using<T extends IDisposable>(item: new () => T, cb: (d: T) => void): void {
    const tmp = new item();
    cb(tmp);
    tmp.Dispose();
}
