/**
 * executes the given Function multiple times when it fails to execute it
 * ATTENTION catched errors in the Function are not detected!
 *
 * @memberof module:pattern
 *
 * @param options {object} execution options for the function
 * @param fn {function} the function to execute
 * @param args {any} the function arguments
 *
 * @example
 * // this executes the function 5 times and returns the function value
 * // 4 Errors are fired with the error message fake Error
 * let errCount = 0;
 * Retry({
 *     timeout: 5,
 *     maxExecutions: 10,
 *     onError: e => {
 *         errCount++;
 *         assert.equal(e.message, 'fake Error');
 *     },
 *     onMaxExecutions: () => {
 *         assert.fail('should not reach max Executions!');
 *     },
 *     onFinish: res => {
 *         assert.equal(res, 1);
 *     },
 * }, (v) => {
 *     v++;
 *     if (errCount > 4) {
 *         throw new Error('fake Error');
 *     }
 *     return v;
 * }, 0);
 */
const Retry = function (options, fn, ...args) {
    const timer = options.timeout || 500;
    options.executions = options.executions || 0;
    let maxExecutions = options.maxExecutions || 10;
    if (options.executions >= maxExecutions) {
        if (typeof options.onMaxExecutions === 'function') {
            options.onMaxExecutions();
        }
        return;
    }
    try {
        if (typeof fn === 'function') {
            const res = fn(...args);
            if (typeof options.onFinish === 'function') {
                options.onFinish(res);
            }
            return;
        }
        throw new Error('function can`t execute');
    } catch (e) {
        options.onError(e);
        options.executions++;
        setTimeout(() => Retry(options, fn, ...args), timer);
    }
};

module.exports = {Retry};
