const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 1.0,
    () => [1,2,3,4,5].FirstOrDefault(),
    () => {
        let first = null;
        for (let e of [1,2,3,4,5]) {
            first = e;
            break;
        }
        return first;
    },
    () => _.first([1,2,3,4,5]));
