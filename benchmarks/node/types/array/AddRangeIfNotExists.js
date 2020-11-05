const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 2.0,
    () => [5,4,3,2,1,0].AddRangeIfNotExists([1,4,5]),
    () => {
        const tmp = [5,4,3,2,1,0];
        for (const el of [1,4,5]) {
            let add = true;
            for (const t of tmp) {
                if (el === t) {
                    add = false;
                }
            }
            if (add) {
                tmp.push(el);
            }
        }
        return tmp;
    },
    () => _.uniq(_.union([5,4,3,2,1,0], [1,4,5])));
