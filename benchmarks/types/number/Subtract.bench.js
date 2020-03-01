const {Benchmark} = require('collatio');
const {subtract} = require('lodash');
require('../../../src/types/number/extension/extension');

const b = new Benchmark('types/number.Number#Subtract');

b.run('ts-tooling', () => {
    if ((5).Subtract(1) !== 4) {
        throw Error('invalid Result');
    }
});

b.run('native', () => {
    if ((5-1) !== 4) {
        throw Error('invalid Result');
    }
});

b.run('lodash', () => {
    if (subtract(5, 1) !== 4) {
        throw Error('invalid Result');
    }
});

module.exports = {
    name: b.name,
    stats: b.stats,
};
