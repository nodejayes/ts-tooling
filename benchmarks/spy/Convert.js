const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../src/ts-tooling');

const SOURCE = [];
(function () {
    for (let i = 0; i < 10000; i++) {
        SOURCE.push(i);
    }
})();

(new Benchmark.Suite).add('ts-tooling Convert', () => {
    SOURCE.Convert(e => e*2);
}).add('native map', () => {
    SOURCE.map(e => e*2);
}).add('lodash map', () => {
    _.map(SOURCE, e => e*2);
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
