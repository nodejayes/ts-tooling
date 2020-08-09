const {assert} = require('chai');
const {ObjectFactory} = require('./object.factory');
const {describe, it} = require('mocha');
const {DateTime} = require('../../datetime');

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
        it('not copy self reference', () => {
            const tmp1 = {hello: 'world'};
            const tmp2 = {hello: 'world'};
            tmp1.self = tmp1;
            tmp1.other = tmp2;
            tmp2.other = tmp1;
            const clone = ObjectFactory.Copy(tmp1);
            assert.deepEqual(clone, tmp1);
            tmp1.hello = '1234';
            tmp2.hello = '1234';
            assert.equal(clone.hello, 'world');
            assert.equal(clone.other.hello, 'world');
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
    describe('[Method]: Get', () => {
        it('not found is null', () => {
            const test = {Hello:'World'};
            assert.isNull(ObjectFactory.Get(test, 'hello'));
        });
        it('get simple key', () => {
            const test = {Hello:'World'};
            assert.equal(ObjectFactory.Get(test, 'Hello'), 'World');
            assert.isNull(ObjectFactory.Get(test, 'hello'));
        });
        it('get sub keys', () => {
            const test = {Hello:{Name:'Paul',World:'World'}};
            assert.equal(ObjectFactory.Get(test, 'Hello.Name'), 'Paul');
        });
    });
    describe('[Method]: Set', () => {
        it('changes nothing when not possible to change', () => {
            const test = {Hello:'World'};
            assert.deepEqual(ObjectFactory.Set(test, 'Hello.key', 'MyWorld'), {Hello:'World'});
        });
        it('not found append key', () => {
            const test = {Hello:'World'};
            assert.deepEqual(ObjectFactory.Set(test, 'hello', 'MyWorld'), {Hello:'World',hello:'MyWorld'});
        });
        it('set simple key', () => {
            const test = {Hello:'World'};
            assert.deepEqual(ObjectFactory.Set(test, 'Hello', 'X'), {Hello:'X'});
        });
        it('set sub key', () => {
            const test = {Hello:{Name:'Paul',World:'World'}}
            assert.deepEqual(ObjectFactory.Set(test, 'Hello.Name', 'Sabrina'), {Hello:{Name:'Sabrina',World:'World'}})
        });
    });
    describe('[Method]: Equal', () => {
        it('should compare number', () => {
            assert.isTrue(ObjectFactory.Equal(1, 1));
            assert.isFalse(ObjectFactory.Equal(1, 2));
        });
        it('should compare bool', () => {
            assert.isTrue(ObjectFactory.Equal(true, true));
            assert.isFalse(ObjectFactory.Equal(true, false));
        });
        it('should compare string', () => {
            assert.isTrue(ObjectFactory.Equal('a', 'a'));
            assert.isFalse(ObjectFactory.Equal('a', 'b'));
        });
        it('should compare Object', () => {
            assert.isTrue(ObjectFactory.Equal({Hello:'World'}, {Hello:'World'}));
            assert.isFalse(ObjectFactory.Equal({Hello:'World'}, {Hello:'World!'}));
        });
        it('should compare Array', () => {
            assert.isTrue(ObjectFactory.Equal([{Hello:'World'}], [{Hello:'World'}]));
            assert.isFalse(ObjectFactory.Equal([{Hello:'World'}], [{Hello:'World!'}]));
        });
        it('should compare Date', () => {
            assert.isTrue(ObjectFactory.Equal(new Date(2018,1,1,0,0,0), new Date(2018,1,1,0,0,0)));
            assert.isFalse(ObjectFactory.Equal(new Date(2018,1,1,0,0,0), new Date(2018,1,2,0,0,0)));
        });
        it('should compare DateTime', () => {
            assert.isTrue(ObjectFactory.Equal(DateTime.FromISOString('2019-01-01T00:00:00'), DateTime.FromISOString('2019-01-01T00:00:00')));
            assert.isFalse(ObjectFactory.Equal(DateTime.FromISOString('2019-01-01T00:00:00'), DateTime.FromISOString('2019-01-02T00:00:00')));
        });
    });
    describe('[Method]: Difference', () => {
        it('returns list1 when list2 has no matches', () => {
            assert.deepEqual(ObjectFactory.Difference([1,2,3], [4,5,6]), [1,2,3]);
        });
        it('returns difference', () => {
            assert.deepEqual(ObjectFactory.Difference([1,2,3], [3,4,5]), [1,2]);
        });
        it('returns empty list when list1 is list2', () => {
            assert.deepEqual(ObjectFactory.Difference([1,2,3], [1,2,3]), []);
        });
        it('test custom compare function no matches', () => {
            const comp = (a, b) => a.hello === b.hello;
            assert.deepEqual(
                ObjectFactory.Difference([{hello:'1'},{hello:'2'},{hello:'3'}], [{hello:'4'},{hello:'5'},{hello:'6'}], comp),
                [{hello:'1'},{hello:'2'},{hello:'3'}]
            );
        });
        it('test custom compare function one overlapping', () => {
            const comp = (a, b) => a.hello === b.hello;
            assert.deepEqual(
                ObjectFactory.Difference([{hello:'1'},{hello:'2'},{hello:'3'}], [{hello:'3'},{hello:'4'},{hello:'5'}], comp),
                [{hello:'1'},{hello:'2'}]
            );
        });
        it('test custom compare function full overlapping', () => {
            const comp = (a, b) => a.hello === b.hello;
            assert.deepEqual(
                ObjectFactory.Difference([{hello:'1'},{hello:'2'},{hello:'3'}], [{hello:'1'},{hello:'2'},{hello:'3'}], comp),
                []
            );
        });
    });
    describe('[Method]: EqualsKey', () => {
        it('objects with same keys', () => {
            assert.isTrue(ObjectFactory.EqualKeys({Hello:'World'}, {Hello:'World!'}));
        });
        it('objects with different keys', () => {
            assert.isFalse(ObjectFactory.EqualKeys({Hello1:'World'}, {Hello:'World!'}));
            assert.isFalse(ObjectFactory.EqualKeys({Hello:'World'}, {Hello:'World!', Test: '1'}));
            assert.isFalse(ObjectFactory.EqualKeys({Hello:'World', Test: '2'}, {Hello:'World!'}));
        });
        it('check lowercase and uppercase', () => {
            assert.isFalse(ObjectFactory.EqualKeys({hello:'World'}, {Hello:'World!'}));
        });
        it('key must have the same position on default', () => {
            assert.isFalse(ObjectFactory.EqualKeys({Hello:'World', Test: '2'}, {Test: '1', Hello:'World!'}));
        });
        it('key can be on other position', () => {
            assert.isTrue(ObjectFactory.EqualKeys({Hello:'World', Test: '2'}, {Test: '1', Hello:'World!'}, true));
        });
    });
    describe('[Method]: Freeze', () => {
        it('freeze object not complete', () => {
            let frozenObject = ObjectFactory.Freeze({hello:'world', sub: {hello: 'world'}, limit: 1});
            frozenObject.hello = 'x';
            frozenObject.limit = 50;
            frozenObject.sub.hello = 'x';
            assert.equal(frozenObject.sub.hello, 'x');
            assert.equal(frozenObject.hello, 'world');
            assert.equal(frozenObject.limit, 1);
        });
        it('freeze object complete', () => {
            let frozenObject = ObjectFactory.Freeze({hello:'world', sub: {hello: 'world'}, limit: 1}, true);
            frozenObject.hello = 'x';
            frozenObject.limit = 50;
            frozenObject.sub.hello = 'x';
            assert.equal(frozenObject.sub.hello, 'world');
            assert.equal(frozenObject.hello, 'world');
            assert.equal(frozenObject.limit, 1);
        });
    });
});
