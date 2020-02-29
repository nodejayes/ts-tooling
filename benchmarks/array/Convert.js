const {Benchmark} = require('../benchmark');
require('../../src/ts-tooling');
const {map} = require('lodash');

const b = new Benchmark('Convert');
b.setup(() => {
    const data = [];
    for (let i = 0; i < 1000000; i++) {
        data.Add(i);
    }
    return data;
}, {executions: 100});
b.run('ts-tooling Convert', d => {
    d.Convert(e => e+1);
});
b.run('Array.map', d => {
    d.map(e => e+1);
});
b.run('lodash map', d => {
    map(d, e => e+1);
});
b.print();
