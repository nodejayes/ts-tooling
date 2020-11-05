const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 1.0,
    () => [1,2,3,4,5,6,7,8,9,10].Tail(5),
    () => {
        const tmp = [1,2,3,4,5,6,7,8,9,10];
        tmp.slice(tmp.length-5, 5);
        return tmp;
    },
    () => _.takeRight([1,2,3,4,5,6,7,8,9,10], 5));
