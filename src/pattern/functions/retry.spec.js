const {Retry} = require('./retry');
const {describe, it} = require('mocha');
const {assert} = require('chai');

describe('Retry Tests', () => {
    it('runs the executions', (done) => {
        let errCount = 0;
        Retry({
            timeout: 5,
            maxExecutions: 10,
            onError: e => {
                errCount++;
                assert.equal(e.message, 'fake Error');
            },
            onMaxExecutions: () => {
                assert.fail('should not reach max Executions!');
            },
            onFinish: res => {
                assert.equal(res, 1);
                done();
            },
        }, (v) => {
            v++;
            if (errCount > 4) {
                throw new Error('fake Error');
            }
            return v;
        }, 0);
    });

    it('ends on to many runs', (done) => {
        let errCount = 0;
        Retry({
            timeout: 5,
            maxExecutions: 10,
            onError: e => {
                errCount++;
                assert.equal(e.message, 'fake Error');
            },
            onMaxExecutions: () => {
                assert.equal(errCount, 10);
                done();
            },
            onFinish: () => {
                assert.fail('should not reach finish handler!');
            },
        }, (v) => {
            v++;
            throw new Error('fake Error');
            return v;
        }, 0);
    });
});
