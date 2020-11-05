const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 1.0,
    () => [1,2,3,4,5,6,7,8,9,10].Insert(5, 18),
    () => {
        const tmp = [1,2,3,4,5,6,7,8,9,10];
        tmp.splice(5, 0, 18);
        return tmp;
    },
    () => {
        const tmp = [1,2,3,4,5,6,7,8,9,10];
        const tmp2 = _.take(tmp, 5);
        tmp2.push(18);
        tmp2.push(_.takeRight(tmp, 5));
        return tmp2;
    });
