const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 1.0,
    () => [1,2,3,4,5].FindLastIndex(e => e === 1),
    () => {
        let last = null;
        for (let i = 0; i < [1,2,3,4,5].length; i++) {
            if ([1,2,3,4,5][i] === 1) {
                last = i;
            }
        }
        return last;
    },
    () => _.lastIndexOf([1,2,3,4,5], 1));
