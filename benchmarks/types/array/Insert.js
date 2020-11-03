const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling Insert', () => {
    [1,2,3,4,5,6,7,8,9,10].Insert(5, 18);
}).add('native loop', () => {
    const tmp = [1,2,3,4,5,6,7,8,9,10];
    tmp.splice(5, 0, 18);
}).add('lodash take and takeRight', () => {
    const tmp = [1,2,3,4,5,6,7,8,9,10];
    const tmp2 = _.take(tmp, 5);
    tmp2.push(18);
    tmp2.push(_.takeRight(tmp, 5));
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
