const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 1.0,
    () => [1,2,3,4,5].Chunk(2),
    () => {
        let chunkCount = Math.ceil([1,2,3,4,5].length / 2);
        let chunks = new Array(chunkCount);
        for(let i = 0, j = 0, k = 2; i < chunkCount; ++i) {
            chunks[i] = [1,2,3,4,5].slice(j, k);
            j = k;
            k += 2;
        }
        return chunks;
    },
    () => _.chunk([1,2,3,4,5], 2));
