const {add} = require('lodash');
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
        if ((1+5) !== 6) {
            throw new Error('invalid result');
        }
    }

    function lodash() {
        if (add(1, 5) !== 6) {
            throw new Error('invalid result');
        }
    }

    function tsTooling() {
        if ((1).Add(5) !== 6) {
            throw new Error('invalid result');
        }
    }

    performance.timerify(native)();
    performance.timerify(lodash)();
    performance.timerify(tsTooling)();
}

module.exports = {emitter, run};
