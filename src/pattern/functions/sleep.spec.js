const {describe, it} = require('mocha');
const {assert} = require('chai');
const {StopWatch} = require('../../utils/stopwatch');
const {Sleep} = require('./sleep');

describe('Sleep Tests', () => {
    it('sleep for 500ms', async () => {
        const sw = new StopWatch();
        const before = sw.ElapsedMs();
        await Sleep(500);
        const running = sw.ElapsedMs() - before;
        console.info('running ', running);
        assert.isAbove(running, 499.9);
        assert.isBelow(running, 520);
    });
});