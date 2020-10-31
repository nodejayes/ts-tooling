const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling AddIfNotExists', () => {
    [5,4,3,2,1,0].AddIfNotExists(1);
}).add('native push', () => {
    if ([5,4,3,2,1,0].indexOf(1) < 0) {
        [5,4,3,2,1,0].push(1);
    }
}).add('lodash uniq', () => {
    _.uniq(_.union([5,4,3,2,1,0], [1]));
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
