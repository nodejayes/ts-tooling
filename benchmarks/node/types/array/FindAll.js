const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

const SOURCE = [];
(function () {
    for (let i = 0; i < 10000; i++) {
        SOURCE.push(i);
    }
})();

module.exports = plan(10, 1.0,
    () => SOURCE.FindAll(e => e > 10),
    () => SOURCE.filter(e => e > 10),
    () => _.filter(SOURCE, e => e > 10));
