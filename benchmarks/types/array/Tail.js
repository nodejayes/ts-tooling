const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling Tail', () => {
    [1,2,3,4,5,6,7,8,9,10].Tail(5);
}).add('native loop', () => {
    const tmp = [1,2,3,4,5,6,7,8,9,10];
    const res = [];
    for (let i = tmp.length; i > 0; i--) {
        res.push(tmp[i]);
    }
}).add('lodash takeRight', () => {
    _.takeRight([1,2,3,4,5,6,7,8,9,10], 5);
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
