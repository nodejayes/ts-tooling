/**
 * throttle the function execution
 *
 * @memberof module:pattern
 * @function
 *
 * @param options {IThrottleOptions} the options to control the execution
 * @param fn {function} the Function to throttle
 */
const Throttle = (function () {
    let locked = false;
    return function (options, fn, ...args) {
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

module.exports = {Throttle};
