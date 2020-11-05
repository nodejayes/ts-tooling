const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 1.0,
    () => [1,2,3,4,5].Exists(e => e === 5),
    () => [1,2,3,4,5].indexOf(5),
    () => _.indexOf([1,2,3,4,5], 5));
