const {Benchmark} = require('benchmark');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling ElementAt', () => {
    [1,2,3,4,5].ElementAt(4);
}).add('native accessor', () => {
    [1,2,3,4,5][4];
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
