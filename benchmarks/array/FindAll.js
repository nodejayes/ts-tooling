const {Benchmark} = require('collatio');
require('../../src/ts-tooling');
const {filter} = require('lodash');

const b = new Benchmark('FindAll');

b.setup(() => {
    const data = [];
    for (let i = 0; i < 1000000; i++) {
        data.Add(i);
    }
    return data;
}, 10000);

b.run('for i loop ++', d => {
    const filtered = [];
    for (let i = 0; i < d.length; i++) {
        if (d[i] > 3) {
            filtered.push(d[i]);
        }
    }
});

b.run('Array.filter', (d) => {
    d.filter(e => e > 3);
});

b.run('ts-tooling FindAll', (d) => {
    d.FindAll(e => e > 3);
});

b.run('lodash filter', d => {
    filter(d, e => e > 3);
});
b.print(3);
