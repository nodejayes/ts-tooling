const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling GroupBy', () => {
    [1,2,3,4,5,6,7,8,9,10,5,6,7,8,9,10].GroupBy(e => e);
}).add('lodash groupBy', () => {
    _.groupBy([1,2,3,4,5,6,7,8,9,10,5,6,7,8,9,10], e => e);
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
