const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

const SOURCE = [];
(function () {
    for (let i = 0; i < 10000000; i++) {
        SOURCE.push(i);
    }
})();

module.exports = plan(10, 1.0,
    () => SOURCE.Find(e => e === 5000000),
    () => SOURCE.find(e => e === 5000000),
    () => _.find(SOURCE, e => e === 5000000));
