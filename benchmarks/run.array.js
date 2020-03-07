const {map} = require('lodash');
const {StopWatch} = require('../src/ts-tooling');

const SIZE = 100000000;
const DATA = Array(SIZE);

function setup() {
    for (let i = 0; i < SIZE; i++) {
        DATA[i] = i;
    }
}

function native() {
    const sw = new StopWatch();
    const tmp = [];
    for (let i = 0; i < DATA.length; i++) {
        tmp.push(DATA[i] > 3);
    }
    console.info(`native => ${sw.ElapsedMs()} ms`);
}

function lodash() {
    const sw = new StopWatch();
    const tmp = map(DATA, e => e > 3);
    console.info(`lodash => ${sw.ElapsedMs()} ms`);
}

function tstooling() {
    const sw = new StopWatch();
    const tmp = DATA.Convert(e => e > 3);
    console.info(`tstooling => ${sw.ElapsedMs()} ms`);
}

setup();
tstooling();
native();
lodash();
