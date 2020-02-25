const Benchmark = require('../benchmark');
require('../../lib/ts-tooling');
const {reduce} = require('lodash');

const b = new Benchmark('Reduce');
b.setup(() => {
    const data = [];
    for (let i = 0; i < 1000000; i++) {
        data.Add(!!(i%2));
    }
    return data;
}, {executions: 100});
b.run('ts-tooling Reduce', d => {
    d.Reduce((o, e) => {
        e ? o.t.Add(e) : o.f.Add(e);
        return o;
    }, {t: [], f: []});
});
b.run('Array.reduce', d => {
    d.reduce((o, e) => {
        e ? o.t.push(e) : o.f.push(e);
        return o;
    }, {t: [], f: []});
});
b.run('lodash reduce', d => {
    reduce(d, (o, e) => {
        e ? o.t.push(e) : o.f.push(e);
        return o;
    }, {t: [], f: []});
});
b.print();
