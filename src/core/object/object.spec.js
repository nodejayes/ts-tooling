const {assert} = require('chai');
const {describe, it} = require('mocha');
const {RecursiveDeepCopy, Get, Set, Merge} = require('./object');

describe('Core Object Tests', () => {
    describe('[Method]: RecursiveDeepCopy', () => {
        it('create new instance', () => {
            const obj = {hello:'world'};
            const target = RecursiveDeepCopy(obj);
            assert.isFalse(obj === target);
            target.hello = 'not';
            assert.notEqual(obj.hello, target.hello);
        });
    });
    describe('[Method]: Get', () => {
        it('can get first dimension', () => {
            const obj = {hello:'world'};
            assert.equal(Get(obj, 'hello'), 'world');
        });
        it('can get second dimension', () => {
            const obj = {hello:{my:'world'}};
            assert.equal(Get(obj, 'hello.my'), 'world');
        });
    });
    describe('[Method]: Set', () => {
        it('set first dimension', () => {
            const obj = {hello:'world'};
            assert.equal(Set(obj, 'hello', 'test').hello, 'test');
        });
        it('set second dimension', () => {
            const obj = {hello:{my:'world'}};
            assert.equal(Set(obj, 'hello.my', 'test').hello.my, 'test');
        });
    });
    describe('[Method]: Merge', () => {
        it('can merge objects', () => {
            const obj1 = {
                hello: 'world',
                age: 1,
                subobject: {
                    number: 1,
                    value: 'xxxx',
                    active: true,
                },
            };
            const obj2 = {
                hello: 'world!',
                description: 'some example value',
                subobject: {
                    value: 'change me',
                }
            };
            assert.deepEqual(Merge(obj1, obj2), {
                hello: 'world!',
                age: 1,
                subobject: {
                    number: 1,
                    value: 'change me',
                    active: true,
                },
                description: 'some example value',
            });
        });
    });
});
