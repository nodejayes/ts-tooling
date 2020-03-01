const { PerformanceObserver, performance } = require('perf_hooks');
const {EventHandler} = require('../../../src/ts-tooling');

const emitter = new EventHandler();
const data = {};
let counter = 0;

const obs = new PerformanceObserver((items) => {
    counter++;
    const entries = items.getEntries();
    data[entries[0].name] = entries[0].duration;
    if (counter === 1) {
        emitter.Invoke(data);
    }
});
obs.observe({ entryTypes: ['function'] });

function run() {
    function tsTooling() {
        if ((501.345).Numerals() !== 3) {
            throw new Error('invalid result');
        }
    }

    performance.timerify(tsTooling)();
}

module.exports = {emitter, run};
