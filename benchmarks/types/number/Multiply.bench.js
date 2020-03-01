const {Benchmark} = require('collatio');
const {multiply} = require('lodash');
require('../../../src/types/number/extension/extension');

const b = new Benchmark('types/number.Number#Multiply');

b.run('ts-tooling', () => {
    if ((5).Multiply(5) !== 25) {
        throw Error('invalid Result');
    }
});

b.run('native', () => {
    if ((5*5) !== 25) {
        throw Error('invalid Result');
    }
});

b.run('lodash', () => {
    if (multiply(5, 5) !== 25) {
        throw Error('invalid Result');
    }
});

module.exports = {
    name: b.name,
    stats: b.stats,
};
