const {ceil} = require('lodash');
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
        if ((Math.ceil((2.054224) * 100) / 100) !== 2.06) {
            throw new Error('invalid result');
        }
    }

    function lodash() {
        if (ceil(2.054224, 2) !== 2.06) {
            throw new Error('invalid result');
        }
    }

    function tsTooling() {
        if (2.054224.Ceil(2) !== 2.06) {
            throw new Error('invalid result');
        }
    }

    performance.timerify(native)();
    performance.timerify(lodash)();
    performance.timerify(tsTooling)();
}

module.exports = {emitter, run};
