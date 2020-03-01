const fs = require('fs');
const path = require('path');
const {ListSortOrder} = require('../src/ts-tooling');
const {DateTime} = require('../src/types/datetime/datetime/datetime');

const BENCHMARKS = {
    'types.number.Number.Add': {source: './types/number/Add.bench.js', executions: 1},
    'types.number.Number.Ceil': {source: './types/number/Ceil.bench.js', executions: 1},
    'types.number.Number.Subtract': {source: './types/number/Subtract.bench.js', executions: 1},
    'types.number.Number.Multiply': {source: './types/number/Multiply.bench.js', executions: 1},
    'types.number.Number.Divide': {source: './types/number/Divide.bench.js', executions: 1},
    'types.array.Array.FindAll': {source: './types/array/FindAll.bench.js', executions: 1000000},
    'types.array.Array.Find': {source: './types/array/Find.bench.js', executions: 1000000},
    'types.array.Array.Convert': {source: './types/array/Convert.bench.js', executions: 1000000},
};

const TIME = new DateTime();
let tmp = '';
function saveBenchmark(p, filename) {
    if (!fs.existsSync(p)) {
        fs.mkdirSync(p, {recursive: true});
    }
    fs.writeFileSync(path.join(p, filename), tmp);
}

function functionReport(id, executions, data) {
    tmp += `#### ${id}\n\n`;
    tmp += `| Type | Size       | Time in ms | ops/sec |\n`;
    tmp += `|------|------------|------------|---------|\n`;
    const keys = Object.keys(data);
    const elements = [];
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const d = data[key];
        elements.push({name: key, duration: d});
    }
    for (const element of elements.SortBy(['duration'], [ListSortOrder.ASC])) {
        const ops = 1000 / element.duration;
        tmp += `| ${element.name} | ${executions} | ${element.duration} | ${ops.toFixed(2)} |\n`;
    }
    tmp += `\n`;
    tmp += `[${TIME.ToString()} (${TIME.Zone})]\n`;
}

let finish = 0;
for (const key in BENCHMARKS) {
    const bench = require(BENCHMARKS[key].source);
    bench.emitter.Subscribe('end', d => {
        functionReport(key, BENCHMARKS[key].executions, d);
        console.info(tmp);
        saveBenchmark(path.join(__dirname, '..', 'reports'), 'benchmark_' + key + '.md');
        tmp = '';
        finish++;
        if (finish === Object.keys(BENCHMARKS).length) {
            process.exit(0);
        }
    });
    bench.run();
}
