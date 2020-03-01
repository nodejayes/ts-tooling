const {clamp} = require('lodash');
const { PerformanceObserver, performance } = require('perf_hooks');
const {EventHandler} = require('../../../src/ts-tooling');

const emitter = new EventHandler();
const data = {};
let counter = 0;

const obs = new PerformanceObserver((items) => {
    counter++;
    const entries = items.getEntries();
    data[entries[0].name] = entries[0].duration;
    if (counter === 3) {
        emitter.Invoke(data);
    }
});
obs.observe({ entryTypes: ['function'] });

function run() {
    function native() {
        const num = 5;
        let RESULT = num < 1 ? 1 : num > 3 ? 3 : num;
        if (RESULT !== 3) {
            throw new Error('invalid result');
        }
    }

    function lodash() {
        if (clamp(5, 1, 3) !== 3) {
            throw new Error('invalid result');
        }
    }

    function tsTooling() {
        if ((5).Clamp(2, 3) !== 3) {
            throw new Error('invalid result');
        }
    }

    performance.timerify(native)();
    performance.timerify(lodash)();
    performance.timerify(tsTooling)();
}

module.exports = {emitter, run};
