const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling Exists', () => {
    [1,2,3,4,5].Exists(e => e === 5);
}).add('native indexOf', () => {
    [1,2,3,4,5].indexOf(5);
}).add('lodash indexOf', () => {
    _.indexOf([1,2,3,4,5], 5);
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
