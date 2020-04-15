const {WhenReady} = require('./whenReady');
const {assert} = require('chai');

describe('WhenReady Tests', () => {
    it('should call a Function when something is ready', (done) => {
        let start = false;
        let calls = 0;
        WhenReady({
                timeout: 10,
                maxCalls: 50,
            },
            (a, b) => {
                assert.equal(a, 1);
                assert.equal(b, 1);
                return start;
            },
            (a, b) => {
                calls++;
                assert.isTrue(start);
                return a + b;
            }, 1, 1
        ).then(res => {
            assert.equal(calls, 1);
            assert.equal(res, 2);
            done();
        });
        setTimeout(() => {
            start = true;
        }, 100);
    });
    it('exit on max calls', (done) => {
        let start = false;
        let guardCalls = 0;
        let calls = 0;
        WhenReady({
            timeout: 10,
            maxCalls: 5,
        }, () => {
            guardCalls++;
            return false;
        }, (a, b) => {
            calls++;
            return a+b;
        }, 1, 1).then(res => {
            assert.isNull(res);
            assert.equal(guardCalls, 5);
            assert.equal(calls, 0);
            done();
        });
    });
    it('without guard call function immediately', (done) => {
        let start = false;
        let calls = 0;
        WhenReady({
            timeout: 10,
            maxCalls: 5,
        }, null, (a, b) => {
            calls++;
            return a+b;
        }, 1, 1).then(res => {
            assert.equal(res, 2);
            assert.equal(calls, 1);
            done();
        });
    });
    it('default options', (done) => {
        let start = false;
        let calls = 0;
        WhenReady(null, () => start, (a, b) => {
            calls++;
            return a+b;
        }, 1, 1).then(res => {
            assert.equal(res, 2);
            assert.equal(calls, 1);
            done();
        });
        setTimeout(() => start = true, 40);
    });
    it('no negative timeout and maxCalls', (done) => {
        let start = false;
        let calls = 0;
        WhenReady({
            timeout: -1,
            maxCalls: -1,
        }, () => start, (a, b) => {
            calls++;
            return a+b;
        }, 1, 1).then(res => {
            assert.equal(res, 2);
            assert.equal(calls, 1);
            done();
        });
        setTimeout(() => start = true, 40);
    });
    it('accept async functions', (done) => {
        let start = false;
        let calls = 0;
        WhenReady({
            timeout: -1,
            maxCalls: -1,
        }, async () => {
            return await new Promise((resolve) => resolve(start));
        }, async (a, b) => {
            calls++;
            return await new Promise((resolve) => resolve(a+b));
        }, 1, 1).then(res => {
            assert.equal(res, 2);
            assert.equal(calls, 1);
            done();
        });
        setTimeout(() => start = true, 40);
    });
    it('can fire multiple times', (done) => {
        let start = false;
        let calls = 0;
        const todo = async () => {
            return await WhenReady({
                timeout: -1,
                maxCalls: -1,
            }, () => {
                return start;
            }, async (a, b) => {
                calls++;
                return await new Promise((resolve) => resolve(a+b));
            }, 1, 1);
        };
        todo().then(res => {
            assert.equal(res, 2);
            assert.equal(calls, 2);
        });
        setTimeout(() => {
            start = true;
            todo().then(res => {
                assert.equal(res, 2);
                assert.equal(calls, 1);
            });
            setTimeout(() => {
                todo().then(res => {
                    assert.equal(res, 2);
                    assert.equal(calls, 3);
                    done();
                });
            }, 50);
        }, 50);
    });
});
