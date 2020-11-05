const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 1.0,
    () => [1,2,3,4,5].FindLast(e => e === 1),
    () => {
        let last = null;
        for (const e of [1,2,3,4,5]) {
            if (e === 1) {
                last = e;
            }
        }
        return last;
    },
    () => {
        const idx = _.lastIndexOf([1,2,3,4,5], 1);
        return [1,2,3,4,5][idx];
    });
