const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 2.0,
    () => [5,4,3,2,1,0].AddRange([1,4,5]),
    () => [5,4,3,2,1,0,...[1,4,5]],
    () => _.union([5,4,3,2,1,0], [1,4,5]));
