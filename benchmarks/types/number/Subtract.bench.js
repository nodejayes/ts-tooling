const {subtract} = require('lodash');
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
        if ((5-1) !== 4) {
            throw new Error('invalid result');
        }
    }

    function lodash() {
        if (subtract(5, 1) !== 4) {
            throw new Error('invalid result');
        }
    }

    function tsTooling() {
        if ((5).Subtract(1) !== 4) {
            throw new Error('invalid result');
        }
    }

    performance.timerify(native)();
    performance.timerify(lodash)();
    performance.timerify(tsTooling)();
}

module.exports = {emitter, run};
