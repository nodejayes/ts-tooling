const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 1.0,
    () => [1,2,3,4,5,6,7,8,9,10,5,6,7,8,9,10].GroupBy(e => e),
    () => undefined,
    () => _.groupBy([1,2,3,4,5,6,7,8,9,10,5,6,7,8,9,10], e => e));
