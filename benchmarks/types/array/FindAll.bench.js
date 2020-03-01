const {filter} = require('lodash');
const { PerformanceObserver, performance } = require('perf_hooks');
const {EventHandler} = require('../../../src/ts-tooling');

const emitter = new EventHandler();
const data = {};
let counter = 0;

const obs = new PerformanceObserver((items) => {
    counter++;
    const entries = items.getEntries();
    data[entries[0].name] = entries[0].duration;
    if (counter === 4) {
        emitter.Invoke(data);
    }
});
obs.observe({ entryTypes: ['function'] });

const LIST = [];
for (let i = 0; i < 1000000; i++) {
    LIST.push(i);
}

function run() {
    function native() {
        const RESULT = [];
        for (let i = 0; i < LIST.length; i++) {
            if (LIST[i] > 3) {
                RESULT.push(LIST[i]);
            }
        }
        if (RESULT.length < 999996) {
            throw new Error('invalid result');
        }
    }

    function nativeArray() {
        const RESULT = LIST.filter(e => e > 3);
        if (RESULT.length < 999996) {
            throw new Error('invalid result');
        }
    }

    function lodash() {
        const RESULT = filter(LIST, e => e > 3);
        if (RESULT.length < 999996) {
            throw new Error('invalid result');
        }
    }

    function tsTooling() {
        const RESULT = LIST.FindAll(e => e > 3);
        if (RESULT.length < 999996) {
            throw new Error('invalid result');
        }
    }

    performance.timerify(native)();
    performance.timerify(nativeArray)();
    performance.timerify(lodash)();
    performance.timerify(tsTooling)();
}

module.exports = {emitter, run};
