const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling Any', () => {
    [5,4,3,2,1,0].Any(e => e === 4);
}).add('native loop', () => {
    for (const el of [5,4,3,2,1,0]) {
        if (el === 4) {
            return true;
        }
    }
}).add('lodash find', () => {
    _.find([5,4,3,2,1,0], e => e === 4);
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
