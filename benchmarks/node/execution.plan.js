module.exports = (executions, offset, tsToolingBenchmark, nativeJsBenchmark, lodashBenchmark) => {
    const n = executions || 1000000;

    function tsTooling() {
        let c = 1;
        while(++c < n) {
            tsToolingBenchmark();
        }
        return tsToolingBenchmark();
    }

    function nativeJs() {
        let c = 1;
        while(++c < n) {
            nativeJsBenchmark();
        }
        return nativeJsBenchmark();
    }

    function lodash() {
        let c = 1;
        while(++c < n) {
            lodashBenchmark();
        }
        return lodashBenchmark();
    }

    return {
        nativeJs,
        lodash,
        tsTooling,
        offset,
    };
};
