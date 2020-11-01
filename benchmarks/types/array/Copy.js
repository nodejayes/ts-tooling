const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling Copy', () => {
    [1,2,3,4,5].Copy();
}).add('native map', () => {
    [1,2,3,4,5].map(x => x);
}).add('lodash clone', () => {
    _.clone([1,2,3,4,5]);
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
