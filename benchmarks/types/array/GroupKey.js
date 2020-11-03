const {Benchmark} = require('benchmark');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling GroupKey', () => {
    [1,2,3,4,5,6,7,8,9,10,5,6,7,8,9,10].GroupKey(e => e);
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
