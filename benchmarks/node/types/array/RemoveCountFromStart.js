const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 1.0,
    () => [1,2,3,4,5,6,7,8,9,10].RemoveCountFromStart(4),
    () => [1,2,3,4,5,6,7,8,9,10].splice(10-4,4),
    () => _.drop([1,2,3,4,5,6,7,8,9,10], 4));
