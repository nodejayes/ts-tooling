const {Throttle} = require('./throttle');
const {describe, it} = require('mocha');
const {assert} = require('chai');

const exampleFn1 = () => {
    resultFn1 = 1;
};
const exampleFn2 = (arg1, arg2) => {
    resultFn2 = arg1 + arg2;
};

let resultFn1 = 0;
let resultFn2 = 0;

describe('Throttle Tests', () => {
    it('can execute function without arguments', (done) => {
        resultFn1 = 0;
        Throttle({
            Timeout: 5,
            Leading: true,
        }, exampleFn1);
        assert.equal(resultFn1, 1);
        setTimeout(() => done(), 5);
    });
    it('can execute function with arguments', (done) => {
        resultFn2 = 0;
        Throttle({
            Timeout: 5,
            Leading: true,
        }, exampleFn2, 1, 1);
        assert.equal(resultFn2, 2);
        setTimeout(() => done(), 5);
    });
    it('can execute function only once in interval', (done) => {
        resultFn2 = 0;
        Throttle({
            Timeout: 50,
            Leading: true,
        }, exampleFn2, 1, 1);
        Throttle({
            Timeout: 50,
            Leading: true,
        }, exampleFn2, 2, 2);
        Throttle({
            Timeout: 50,
            Leading: true,
        }, exampleFn2, 3, 3);
        assert.equal(resultFn2, 2);
        setTimeout(() => {
            done();
        }, 50);
    });
    it('can execute function after interval', (done) => {
        resultFn2 = 0;
        Throttle({
            Timeout: 50,
            Leading: false,
        }, exampleFn2, 1, 1);
        assert.equal(resultFn2, 0);
        setTimeout(() => {
            assert.equal(resultFn2, 2);
            done();
        }, 50);
    });
});
