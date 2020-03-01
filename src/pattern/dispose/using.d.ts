/**
 * implements Methods to make a Class Disposable
 *
 * @category Pattern
 */
export interface IDisposable {
    Dispose(): void;
}

/**
 * use a Instance and Dispose it after Execution
 *
 * @category Pattern
 *
 * @param item a instance of a Class to Dispose after running the using section
 * @param cb what is to do in this using?
 *
 * @example
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
export function Using<T extends IDisposable>(item: new () => T, cb: (d: T) => void): void;
