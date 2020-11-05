const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 1.0,
    () => [1,2,3,4,5,6,7,8,9,10].InsertRange(5, [10,20,30]),
    () => {
        let res;
        res = [1,2,3,4,5,6,7,8,9,10];
        const toAdd = [10,20,30];
        for (let i = 0; i < toAdd.length; i++) {
            res.splice(5, toAdd[i], 18);
        }
        return res;
    },
    () => {
        let res;
        res = [1,2,3,4,5,6,7,8,9,10];
        let tmp2 = res;
        let start = 5;
        const toAdd = [10,20,30];
        for (let i = 0; i < toAdd.length; i++) {
            _.take(tmp2, start);
            tmp2.push(18);
            tmp2.push(_.takeRight(res, start));
            start++;
        }
        return res;
    });
