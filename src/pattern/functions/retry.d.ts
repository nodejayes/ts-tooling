/**
 * Retry Function execution Options
 */
export interface IRetryOptions {
    /**
     * the Time in ms to wait before execute the Function again
     */
    timeout?: number;
    /**
     * maximum count of function executions
     */
    maxExecutions?: number;
    /**
     * a function that was called when the maximum executions are reached
     */
    onMaxExecutions?: () => void;
    /**
     * a function that was called when the function was executed successfully
     *
     * @param e the return value of the function
     */
    onFinish?: (e) => void;
    /**
     * a function that was executed when a Error was thrown in the function
     *
     * @param e the Error Object
     */
    onError?: (e: Error) => void;
}

/**
 * executes the given Function multiple times when it fails to execute it
 * ATTENTION catched errors in the Function are not detected!
 *
 * @param options execution options for the function
 * @param fn the function to execute
 * @param args the function arguments
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
export function Retry(options: IRetryOptions, fn: (...args) => any, ...args: any): void;
