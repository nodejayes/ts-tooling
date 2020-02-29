const {assert} = require('chai');
const {StopWatch} = require('./index');

describe('Type Stopwatch Export Tests', () => {
    it('StopWatch', () => {
        assert.isDefined(StopWatch);
    });
});
