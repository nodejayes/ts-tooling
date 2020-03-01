const {Benchmark} = require('collatio');
const {divide} = require('lodash');
require('../../../src/types/number/extension/extension');

const b = new Benchmark('types/number.Number#Divide');

b.run('ts-tooling', () => {
    if ((6).Divide(2) !== 3) {
        throw Error('invalid Result');
    }
});

b.run('native', () => {
    if ((6/2) !== 3) {
        throw Error('invalid Result');
    }
});

b.run('lodash', () => {
    if (divide(6, 2) !== 3) {
        throw Error('invalid Result');
    }
});

module.exports = {
    name: b.name,
    stats: b.stats,
};
