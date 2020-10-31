const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../../src/ts-tooling');

const SOURCE = [1,[2,3,[4,5],6,[7,[8,[9,[10]]]]]];

(new Benchmark.Suite).add('ts-tooling Flat', () => {
    SOURCE.Flat();
}).add('native flat', () => {
    SOURCE.flat(10);
}).add('lodash flattenDepth', () => {
    _.flattenDepth(SOURCE, 10);
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
