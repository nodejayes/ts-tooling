const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling FirstOrDefault', () => {
    [1,2,3,4,5].FirstOrDefault();
}).add('native for', () => {
    let first = null;
    for (e of [1,2,3,4,5]) {
        first = e;
        break;
    }
}).add('lodash lastIndexOf', () => {
    _.first([1,2,3,4,5]);
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
