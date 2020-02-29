const fs = require('fs');
const path = require('path');
const parser = require('lcov-parse');

function getColor(value) {
    if (value >= 90) {
        return 'brightgreen';
    }
    if (value >= 80) {
        return 'yellow';
    }
    if (value >= 70) {
        return 'orange';
    }
    return 'red';
}

function getMarkdownTable(stats) {
    return `# Reports

| Build             | Coverage                                                                                                                                                                         |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Build State       | ![Node.js CI](https://github.com/nodejayes/ts-tooling/workflows/Node.js%20CI/badge.svg)                                                                                          |
| Line Coverage     | ![Line Coverage](https://img.shields.io/badge/${stats.hit.line}%2F${stats.total.line}%20-${stats.percentage.line.toFixed(2)}%25-${getColor(stats.percentage.line)})                         |
| Function Coverage | ![Function Coverage](https://img.shields.io/badge/${stats.hit.functions}%2F${stats.total.functions}%20-${stats.percentage.functions.toFixed(2)}%25-${getColor(stats.percentage.functions)}) |
| Branch Coverage   | ![Branch Coverage](https://img.shields.io/badge/${stats.hit.branch}%2F${stats.total.branch}%20-${stats.percentage.branch.toFixed(2)}%25-${getColor(stats.percentage.branch)})               |
| Version           | [![npm version](https://badge.fury.io/js/ts-tooling.svg)](https://badge.fury.io/js/ts-tooling)                                                                                   |
| Dependencies      | [![devDependency Status](https://david-dm.org/nodejayes/ts-tooling/dev-status.svg)](https://david-dm.org/nodejayes/ts-tooling#info=devDependencies)                              |
| Licence           | ![npm](https://img.shields.io/npm/l/ts-tooling.svg)                                                                                                                              |
| Downloads         | ![npm](https://img.shields.io/npm/dt/ts-tooling.svg)                                                                                                                             |
|                   | ![npm](https://img.shields.io/npm/dw/ts-tooling.svg)                                                                                                                             |
|                   | ![npm](https://img.shields.io/npm/dm/ts-tooling.svg)                                                                                                                             |
|                   | ![npm](https://img.shields.io/npm/dy/ts-tooling.svg)                                                                                                                             |
    `
}

parser(path.join(__dirname, '..', 'coverage', 'lcov.info'), (err, data) => {
    if (err) {
        throw Error(err);
    }
    let sums = [[0,0,0], [0,0,0]];
    for (const info of data) {
        sums[0][0] += info.lines.found;
        sums[0][1] += info.functions.found;
        sums[0][2] += info.branches.found;
        sums[1][0] += info.lines.hit;
        sums[1][1] += info.functions.hit;
        sums[1][2] += info.branches.hit;
    }
    const stats = {
        percentage: {line: sums[1][0] * 100 / sums[0][0], functions: sums[1][1] * 100 / sums[0][1], branch: sums[1][2] * 100 / sums[0][2]},
        total: {line: sums[0][0], functions: sums[0][1], branch: sums[0][2]},
        hit: {line: sums[1][0], functions: sums[1][1], branch: sums[1][2]},
        image: {line: '', functions: '', branch: ''},
    };
    const template = getMarkdownTable(stats);
    const readmePath = path.join(__dirname, '..', 'README.md');
    const readme = fs.readFileSync(readmePath).toString('utf-8');
    const newContent = `${readme.split('# Report')[0]}${template}`;
    fs.writeFileSync(readmePath, newContent, {encoding: 'utf-8'});
});
