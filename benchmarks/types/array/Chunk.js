const {Benchmark} = require('benchmark');
const _ = require('lodash');
require('../../../src/ts-tooling');

(new Benchmark.Suite).add('ts-tooling Chunk', () => {
    [1,2,3,4,5].Chunk(2);
}).add('native loop', () => {
    let chunkCount = Math.ceil([1,2,3,4,5].length / 2);
    let chunks = new Array(chunkCount);
    for(let i = 0, j = 0, k = 2; i < chunkCount; ++i) {
        chunks[i] = [1,2,3,4,5].slice(j, k);
        j = k;
        k += 2;
    }
}).add('lodash chunk', () => {
    _.chunk([1,2,3,4,5], 2);
}).on('cycle', function(event) {
    console.info(String(event.target));
}).on('complete', function() {
    console.info(`${this.filter('fastest').map('name')} is the fastest`);
}).run({async: true});
