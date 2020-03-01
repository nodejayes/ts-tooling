const fs = require('fs');
const path = require('path');
const {DateTime} = require('../src/types/datetime/datetime/datetime');
const {ListSortOrder} = require('../src/types/array/extension');

const TIME = new DateTime();

let tmp = `# Benchmarks ts-tooling\n`;
tmp += `${TIME.ToString()} (${TIME.Zone})\n`;
function writeStats(dataSet) {
    tmp += '\n#### ' + dataSet.name + '\n';
    tmp += '\n| Operations per Second | Total Time in ms | Library |';
    tmp += '\n|-----------------------|------------------|---------|';
    for (let i = 0; i < dataSet.stats.SortBy(['ops'], [ListSortOrder.DESC]).length; i++) {
        const stat = dataSet.stats[i];
        tmp += '\n| ' + stat.ops.toFixed(2) + ' | ' + stat.duration.toFixed(2) + ' | ' + stat.name + ' |';
    }
    tmp += '\n';
}

tmp += '\n---\n';
writeStats(require('./types/number/Add.bench'));
tmp += '\n---\n';
writeStats(require('./types/number/Subtract.bench'));
tmp += '\n---\n';
writeStats(require('./types/number/Multiply.bench'));
tmp += '\n---\n';
writeStats(require('./types/number/Divide.bench'));
tmp += '\n---';

fs.writeFileSync(path.join(__dirname, '..', 'benchmarks.md'), tmp);
