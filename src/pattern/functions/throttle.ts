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
export const throttle = (function () {
    let locked = false;
    return function (options: IThrottleOptions, fn: (...args) => any, ...args: any) {
        if (!locked) {
            options.Timeout = options.Timeout || 500;
            options.Leading = options.Leading === true;
            if (options.Leading === true) {
                fn.call(fn, ...args);
            }
            setTimeout(() => {
                if (!options.Leading) {
                    fn.call(fn, ...args);
                }
                locked = false;
            }, options.Timeout);
        }
    }
})();
