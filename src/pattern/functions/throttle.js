/**
 * throttle the function execution
 *
 * @memberof module:pattern
 * @function
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
const Throttle = (function () {
    let locked = false;
    return function (options, fn, ...args) {
        if (options.Timeout <= 0) {
            fn.call(fn, ...args);
            return;
        }
        if (!locked) {
            locked = true;
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
    };
})();

module.exports = {Throttle};
