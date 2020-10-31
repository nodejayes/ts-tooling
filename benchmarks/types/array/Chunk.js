const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling Chunk', () => {
    [1,2,3,4,5].Chunk(2);
}).add('native loop', () => {
    var R = [];
    for (var i = 0; i < this.length; i += 2)
        R.push([1,2,3,4,5].slice(i, i + 2));
}).add('lodash chunk', () => {
    _.chunk([1,2,3,4,5], 2);
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
