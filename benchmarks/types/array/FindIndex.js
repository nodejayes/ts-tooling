const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling FindIndex', () => {
    [1,2,3,4,5].FindIndex(e => e === 5);
}).add('native for', () => {
    const tmp = [1,2,3,4,5];
    for (let i = 0; i < [1,2,3,4,5].length; i++) {
        if (tmp[i] === 5) {
            return i;
        }
    }
}).add('lodash indexOf', () => {
    _.indexOf([1,2,3,4,5], e => e === 5);
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
