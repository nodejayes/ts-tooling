const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../../src/ts-tooling');

const SOURCE = [];
(function () {
    for (let i = 0; i < 10000; i++) {
        SOURCE.push(i);
    }
})();

(new Benchmark.Suite).add('ts-tooling FindAll', () => {
    SOURCE.FindAll(e => e > 10);
}).add('native filter', () => {
    SOURCE.filter(e => e > 10);
}).add('lodash filter', () => {
    _.filter(SOURCE, e => e > 10);
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
