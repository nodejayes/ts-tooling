import {assert} from 'chai';
import 'mocha';
import {Byte, DateTime, ObjectFactory} from "../../../src/ts-tooling";

describe('Object Extension Tests', () => {
    it('detect Circular References', () => {
        const obj1 = {hello:'world'};
        const obj2 = {test:'me'};
        const combined = {t1:obj1,t2:obj2,t3:null};
        const obj3 = combined;
        combined.t3 = obj3;
        assert.isTrue(ObjectFactory.IsCircular(combined));
        assert.isFalse(ObjectFactory.IsCircular(obj1));
    });
    it('show Circular References Info', () => {
        const obj1 = {hello:'world',c:null};
        const obj2 = {test:'me',c:obj1};
        obj1.c = obj2;
        const combined = {t1:obj1,t2:obj2,t3:null};
        const obj3 = combined;
        combined.t3 = obj3;
        assert.deepEqual(ObjectFactory.GetCircular(combined), ['c', 'c', 't1']);
    });
    describe('[Method]: Copy', () => {
        it('create a new Instance', () => {
            const tmp = {Hello: 'World!'};
            assert.notEqual(tmp, ObjectFactory.Copy(tmp));
        });
    });
    describe('[Method]: SizeOf', () => {
        it('check {Hello: \'World!\'}', () => {
            const tmp = {Hello: 'World!'};
            assert.equal(ObjectFactory.SizeOf(tmp), 22);
        });
    });
    describe('[Method]: Merge', () => {
        it('merge simple object', () => {
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
            assert.deepEqual(ObjectFactory.Merge(obj1, obj2), {
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
