const {Benchmark} = require('benchmark');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling Tail', () => {
    let counter = 0;
    [1,2,3,4,5,6,7,8,9,10].ForSegment(() => {
        counter++;
    });
}).add('native slice', () => {
    const counter = 0;
    for (let i = 0; i < [1,2,3,4,5,6,7,8,9,10].length; i++) {
        counter++;
    }
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
