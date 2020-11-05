const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 1.0,
    () => [1,2,3,4,5].FindIndex(e => e === 5),
    () => {
        const tmp = [1,2,3,4,5];
        for (let i = 0; i < [1,2,3,4,5].length; i++) {
            if (tmp[i] === 5) {
                return i;
            }
        }
        return -1;
    },
    () => _.indexOf([1,2,3,4,5], e => e === 5));
