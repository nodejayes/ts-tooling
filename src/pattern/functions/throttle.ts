export interface IThrottleOptions {
    Timeout: number;
    Leading: boolean;
}

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
