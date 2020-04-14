async function run(calls, options, guard, fn, ...args) {
    calls++;
    if (guard && !(await guard.call(guard, ...args))) {
        if (calls >= options.maxCalls) {
            return await new Promise((resolve) => resolve(null));
        }
        return new Promise((resolve) => {
            setTimeout(async () => {
                resolve(await run(calls, options, guard, fn, ...args));
            }, options.timeout);
        });
    }
    return await fn.call(fn, ...args);
}

const WhenReady = (function () {
    let calls = 0;
    const FN = async function (options, guard, fn, ...args) {
        return run(calls, {
            timeout: options && options.timeout > 0 ? options.timeout : 10,
            maxCalls: options && options.maxCalls > 0 ? options.maxCalls : 50,
        }, guard, fn, ...args);
    };
    return FN;
})();

module.exports = {WhenReady};
