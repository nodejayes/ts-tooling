const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling FindLastIndex', () => {
    [1,2,3,4,5].FindLastIndex(e => e === 1);
}).add('native for', () => {
    let last = null;
    for (let i = 0; i < [1,2,3,4,5].length; i++) {
        if ([1,2,3,4,5][i] === 1) {
            last = i;
        }
    }
}).add('lodash lastIndexOf', () => {
    _.lastIndexOf([1,2,3,4,5], 1);
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
