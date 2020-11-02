const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling FindLast', () => {
    [1,2,3,4,5].FindLast(e => e === 1);
}).add('native for', () => {
    let last = null;
    for (const e of [1,2,3,4,5]) {
        if (e === 1) {
            last = e;
        }
    }
}).add('lodash lastIndexOf', () => {
    const idx = _.lastIndexOf([1,2,3,4,5], 1);
    [1,2,3,4,5][idx];
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
