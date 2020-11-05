module.exports = (executions, offset, tsToolingBenchmark, nativeJsBenchmark, lodashBenchmark) => {
    const n = executions || 1000000;

    function tsTooling() {
        let c = 0;
        while(++c < n) {
            tsToolingBenchmark();
        }
    }

    function nativeJs() {
        let c = 0;
        while(++c < n) {
            nativeJsBenchmark();
        }
    }

    function lodash() {
        let c = 0;
        while(++c < n) {
            lodashBenchmark();
        }
    }

    return {
        nativeJs,
        lodash,
        tsTooling,
        offset,
    };
};
