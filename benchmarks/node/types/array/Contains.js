const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 1.0,
    () => [1,2,3,4,5].Contains(2),
    () => [1,2,3,4,5].indexOf(2),
    () => _.indexOf([1,2,3,4,5], 2));
