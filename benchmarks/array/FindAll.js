const Benchmark = require('../benchmark');
require('../../lib/ts-tooling');
const {filter} = require('lodash');

const b = new Benchmark('FindAll');

b.setup(() => {
    const data = [];
    for (let i = 0; i < 1000000; i++) {
        data.Add(i);
    }
    return data;
}, {runtime: 1000});

b.run('Array.filter', (d) => {
    d.filter(e => e > 3);
}, {counter: 10});

b.run('ts-tooling FindAll', (d) => {
    d.FindAll(e => e > 3);
}, {counter: 10});

b.run('lodash filter', d => {
    filter(d, e => e > 3);
}, {counter: 10});
b.print();
