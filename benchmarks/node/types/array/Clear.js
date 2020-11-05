const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 1.0,
    () => [1,2,3].Clear(),
    () => {
        const t = [1,2,3];
        t.length = 0;
        return t;
    },
    () => _.unset([1,2,3]));
