const {find} = require('lodash');
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
        let RESULT = null;
        for (let i = 0; i < LIST.length; i++) {
            if (LIST[i] > 500000) {
                RESULT = LIST[i];
                break;
            }
        }
        if (RESULT !== 500001) {
            throw new Error('invalid result');
        }
    }

    function nativeArray() {
        const RESULT = LIST.find(e => e > 500000);
        if (RESULT !== 500001) {
            throw new Error('invalid result');
        }
    }

    function lodash() {
        const RESULT = find(LIST, e => e > 500000);
        if (RESULT !== 500001) {
            throw new Error('invalid result');
        }
    }

    function tsTooling() {
        const RESULT = LIST.Find(e => e > 500000);
        if (RESULT !== 500001) {
            throw new Error('invalid result');
        }
    }

    performance.timerify(native)();
    performance.timerify(nativeArray)();
    performance.timerify(lodash)();
    performance.timerify(tsTooling)();
}

module.exports = {emitter, run};
