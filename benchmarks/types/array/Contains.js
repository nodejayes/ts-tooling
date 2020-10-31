const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling Contains', () => {
    [1,2,3,4,5].Contains(2);
}).add('native indexOf', () => {
    [1,2,3,4,5].indexOf(2);
}).add('lodash indexOf', () => {
    _.indexOf([1,2,3,4,5], 2);
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
