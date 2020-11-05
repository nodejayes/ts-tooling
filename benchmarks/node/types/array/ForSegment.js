const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 1.0,
    () => {
        let counter = 0;
        [1,2,3,4,5,6,7,8,9,10].ForSegment(() => {
            counter++;
        });
        return counter;
    },
    () => {
        let counter = 0;
        for (let i = 0; i < [1,2,3,4,5,6,7,8,9,10].length; i++) {
            counter++;
        }
        return counter;
    },
    () => {});
