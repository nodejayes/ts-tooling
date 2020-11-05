const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 2.0,
    () => [5,4,3,2,1,0].AddIfNotExists(1),
    () => {
        const tmp = [5,4,3,2,1,0];
        if (tmp.indexOf(1) < 0) {
            tmp.push(1);
        }
        return tmp;
    },
    () => _.uniq(_.union([5,4,3,2,1,0], [1])));
