/**
 * the Settings Object for the throttle Method
 *
 * @category Pattern
 */
export interface IThrottleOptions {
    /**
     * wait for (n) milliseconds to let execute the function again
     */
    Timeout: number;
    /**
     * execute the Function on begin of the timeout or at the end
     */
    Leading: boolean;
}

/**
 * throttle the function execution
 *
 * @category Pattern
 *
 * @param options {IThrottleOptions} the options to control the execution
 * @param fn {function} the Function to throttle
 *
 * @example
 * let result = 0;
 * const add = (a, b) => {result = a+b;};
 * Throttle({Timeout: 500, Leading: true}, add, 1, 1);
 * Throttle({Timeout: 500, Leading: true}, add, 2, 2);
 * // result here is 2 and was not changed from the second call
 * result = 0;
 * Throttle({Timeout: 500, Leading: false}, add, 1, 1);
 * // result here is 0 while Leading property is false
 * setTimeout(() => {
 *     // result here is 2
 * }, 500);
 */
export function Throttle(options: IThrottleOptions, fn: (...args) => any, ...args: any): void;
