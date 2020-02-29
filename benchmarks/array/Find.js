const {Benchmark} = require('../benchmark');
require('../../src/ts-tooling');
const {find} = require('lodash');

const b = new Benchmark('Find');
b.setup(() => {
    const data = [];
    for (let i = 0; i < 1000000; i++) {
        data.Add(i);
    }
    return data;
}, {executions: 100});
b.run('ts-tooling Find', d => {
    d.Find(e => e > 50000);
});
b.run('Array.find', d => {
    d.find(e => e > 50000);
});
b.run('lodash find', d => {
    find(d, e => e > 50000);
});
b.print();
