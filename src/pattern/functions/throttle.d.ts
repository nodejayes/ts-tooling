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
 */
export function Throttle(options: IThrottleOptions, fn: (...args) => any, ...args: any): void;
