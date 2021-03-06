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
    it('can execute function without arguments', () => {
        resultFn1 = 0;
        Throttle({
            Timeout: 500,
            Leading: true,
        }, exampleFn1);
        assert.equal(resultFn1, 1);
    });
    it('can execute function with arguments', () => {
        resultFn2 = 0;
        Throttle({
            Timeout: 500,
            Leading: true,
        }, exampleFn2, 1, 1);
        assert.equal(resultFn2, 2);
    });
    it('can execute function only once in interval', () => {
        resultFn2 = 0;
        Throttle({
            Timeout: 500,
            Leading: true,
        }, exampleFn2, 1, 1);
        Throttle({
            Timeout: 500,
            Leading: true,
        }, exampleFn2, 1, 1);
        Throttle({
            Timeout: 500,
            Leading: true,
        }, exampleFn2, 1, 1);
        assert.equal(resultFn2, 2);
    });
    it('can execute function after interval', (done) => {
        resultFn2 = 0;
        Throttle({
            Timeout: 500,
            Leading: false,
        }, exampleFn2, 1, 1);
        assert.equal(resultFn2, 0);
        setTimeout(() => {
            assert.equal(resultFn2, 2);
            done();
        }, 500);
    });
});
