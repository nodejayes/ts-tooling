const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 1.0,
    () => [5,4,3,2,1,0].Any(e => e === 4),
    () => {
        for (const el of [5,4,3,2,1,0]) {
            if (el === 4) {
                return true;
            }
        }
        return false;
    },
    () => _.find([5,4,3,2,1,0], e => e === 4));
