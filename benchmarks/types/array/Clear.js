const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling Clear', () => {
    [1,2,3].Clear();
}).add('native length zero', () => {
    const t = [1,2,3];
    t.length = 0;
}).add('lodash unset', () => {
    _.unset([1,2,3]);
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
