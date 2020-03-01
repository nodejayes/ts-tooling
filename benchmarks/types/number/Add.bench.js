const {Benchmark} = require('collatio');
const {add} = require('lodash');
require('../../../src/types/number/extension/extension');

const b = new Benchmark('types/number.Number#Add');

b.run('ts-tooling', () => {
    if ((1).Add(5) !== 6) {
        throw Error('invalid Result');
    }
});

b.run('native', () => {
    if ((1+5) !== 6) {
        throw Error('invalid Result');
    }
});

b.run('lodash', () => {
    if (add(1, 5) !== 6) {
        throw Error('invalid Result');
    }
});

module.exports = {
    name: b.name,
    stats: b.stats,
};
