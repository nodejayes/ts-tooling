/**
 * use a Instance and Dispose it after Execution
 *
 * @memberof module:pattern
 *
 * @param item {any} a instance of a Class to Dispose after running the using section
 * @param cb {function} what is to do in this using?
 *
 * @example
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
 */
function Using(item, cb) {
    const tmp = new item();
    cb(tmp);
    tmp.Dispose();
}

module.exports = {Using};
