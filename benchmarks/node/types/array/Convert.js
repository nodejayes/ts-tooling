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
    () => SOURCE.Convert(e => e*2),
    () => SOURCE.map(e => e*2),
    () => _.map(SOURCE, e => e*2));
