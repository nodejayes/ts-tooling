import '../../src/ts-tooling';
import {assert} from 'chai';
import 'mocha';

describe('Object Extension Tests', () => {
    it('get all Object Keys', () => {
        const test = {test1:'bla',test2:'blah'};
        const test_subobjects = {test1:'bla',test2:'blah',test3:{sub1:'s',sub2:''}};
        assert.deepEqual(test.Keys(), ['test1', 'test2']);
        assert.deepEqual({}.Keys(), []);
        assert.deepEqual(test_subobjects.Keys(), ['test1', 'test2', 'test3']);
    });
    it('get all Values', () => {
        const test = {test1:'bla',test2:'blah'};
        const test_subobjects = {test1:'bla',test2:'blah',test3:{sub1:'s',sub2:''}};
        assert.deepEqual(test.Values(), ['bla', 'blah']);
        assert.deepEqual({}.Values(), []);
        assert.deepEqual(test_subobjects.Values(), ['bla', 'blah', {sub1:'s',sub2:''}]);
    });
    it('detect Circular References', () => {
        const obj1 = {hello:'world'};
        const obj2 = {test:'me'};
        const combined = {t1:obj1,t2:obj2,t3:null};
        const obj3 = combined;
        combined.t3 = obj3;
        assert.isTrue(combined.IsCircular());
        assert.isFalse(obj1.IsCircular());
    });
    it('show Circular References Info', () => {
        const obj1 = {hello:'world',c:null};
        const obj2 = {test:'me',c:obj1};
        obj1.c = obj2;
        const combined = {t1:obj1,t2:obj2,t3:null};
        const obj3 = combined;
        combined.t3 = obj3;
        assert.deepEqual(combined.GetCircular(), ['c', 'c', 't1']);
    });
});
