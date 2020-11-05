const plan = require('../../execution.plan');
const _ = require('lodash');
require('../../../../src/ts-tooling');

module.exports = plan(null, 1.0,
    () => {
        let SOURCE = [1,[2,3,[4,5],6,[7,[8,[9,[10]]]]]];
        return SOURCE.Flat();
    },
    () => {
        let SOURCE = [1,[2,3,[4,5],6,[7,[8,[9,[10]]]]]];
        return SOURCE.flat(10);
    },
    () => {
        let SOURCE = [1,[2,3,[4,5],6,[7,[8,[9,[10]]]]]];
        return _.flattenDepth(SOURCE, 10);
    });
