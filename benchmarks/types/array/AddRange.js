const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling AddRange', () => {
    [5,4,3,2,1,0].AddRange([1,4,5]);
}).add('native spread operator', () => {
    [5,4,3,2,1,0,...[1,4,5]];
}).add('lodash union', () => {
    _.union([5,4,3,2,1,0], [1,4,5]);
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
