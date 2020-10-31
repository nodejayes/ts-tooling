const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling AddRangeIfNotExists', () => {
    [5,4,3,2,1,0].AddRangeIfNotExists([1,4,5]);
}).add('native loop in loop', () => {
    for (const el of [1,4,5]) {
        let add = true;
        for (const t of [5,4,3,2,1,0]) {
            if (el === t) {
                add = false;
            }
        }
        if (add) {
            [5,4,3,2,1,0].push(el);
        }
    }
}).add('lodash unique', () => {
    _.uniq(_.union([5,4,3,2,1,0], [1,4,5]));
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
