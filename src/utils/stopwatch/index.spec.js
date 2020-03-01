const {assert} = require('chai');
const {describe, it} = require('mocha');
const {StopWatch} = require('./index');

describe('Type Stopwatch Export Tests', () => {
    it('StopWatch', () => {
        assert.isDefined(StopWatch);
    });
});
