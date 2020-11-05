const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 1.0,
    () => [1,2,3,4,5].ElementAt(4),
    () => [1,2,3,4,5][4],
    () => {});
