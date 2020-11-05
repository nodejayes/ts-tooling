const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 10.0,
    () => [].Add(1),
    () => {
        const tmp = [];
        tmp.push(1);
        return tmp;
    },
    () => _.union([], [1]));
