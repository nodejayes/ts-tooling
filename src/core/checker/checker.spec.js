const {assert} = require('chai');
const {IsFunction, IsObject} = require('./checker');

describe('Core Checker Tests', () => {
    describe('[Method]: IsFunction', () => {
        it('undefined is not a Function', () => {
            assert.isFalse(IsFunction(undefined));
        });
        it('null is not a Function', () => {
            assert.isFalse(IsFunction(null));
        });
        it('boolean is not a Function', () => {
            assert.isFalse(IsFunction(true));
            assert.isFalse(IsFunction(false));
        });
        it('number is not a Function', () => {
            assert.isFalse(IsFunction(0));
            assert.isFalse(IsFunction(25));
        });
        it('string is not a Function', () => {
            assert.isFalse(IsFunction(''));
            assert.isFalse(IsFunction('a'));
        });
        it('object is not a Function', () => {
            assert.isFalse(IsFunction({}));
            assert.isFalse(IsFunction({hello:'world'}));
        });
        it('array is not a Function', () => {
            assert.isFalse(IsFunction([]));
            assert.isFalse(IsFunction([1,2,3]));
            assert.isFalse(IsFunction([{hello:'world'}]));
        });
        it('Lambda is a Function', () => {
            assert.isTrue(IsFunction(() => {}));
        });
        it('Function is a Function', () => {
            assert.isTrue(IsFunction(function () {}));
        });
    });
    describe('[Method]: IsObject', () => {
        it('undefined is not a object', () => {
            assert.isFalse(IsObject(undefined));
        });
        it('null is not a object', () => {
            assert.isFalse(IsObject(null));
        });
        it('bool is not a object', () => {
            assert.isFalse(IsObject(true));
            assert.isFalse(IsObject(false));
        });
        it('number is not a object', () => {
            assert.isFalse(IsObject(0));
            assert.isFalse(IsObject(1));
        });
        it('string is not a object', () => {
            assert.isFalse(IsObject(''));
            assert.isFalse(IsObject('a'));
        });
        it('object is a object', () => {
            assert.isTrue(IsObject({}));
            assert.isTrue(IsObject({hello:'world'}));
        });
        it('Date is a object', () => {
            assert.isTrue(IsObject(new Date()));
        });
        it('array is a object', () => {
            assert.isTrue(IsObject([]));
            assert.isTrue(IsObject([1,2,3]));
            assert.isTrue(IsObject([{hello:'world'}]));
        });
    });
});
