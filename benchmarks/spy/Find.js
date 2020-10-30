const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../src/ts-tooling');

const SOURCE = [];
(function () {
    for (let i = 0; i < 10000; i++) {
        SOURCE.push(i);
    }
})();

(new Benchmark.Suite).add('ts-tooling Find', () => {
    SOURCE.Find(e => e === 500000);
}).add('native find', () => {
    SOURCE.find(e => e === 500000);
}).add('lodash find', () => {
    _.find(SOURCE, e => e === 500000);
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
