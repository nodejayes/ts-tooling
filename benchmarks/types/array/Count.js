const {Benchmark} = require('benchmark');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling Count', () => {
    [1,2,3,4,5].Count();
}).add('native length', () => {
    [1,2,3,4,5].length;
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
