import 'mocha';
import {assert} from 'chai';
import {Value} from '../../lib/type-checker';

describe('Type Checker Tests', () => {
    it('IsFunction works', () => {
        assert.isTrue(Value.IsFunction(function () {}));
        assert.isTrue(Value.IsFunction(() => {}));
        assert.isFalse(Value.IsFunction(undefined));
        assert.isFalse(Value.IsFunction(null));
        assert.isFalse(Value.IsFunction(0));
        assert.isFalse(Value.IsFunction(1));
        assert.isFalse(Value.IsFunction(''));
        assert.isFalse(Value.IsFunction('a'));
        assert.isFalse(Value.IsFunction({}));
        assert.isFalse(Value.IsFunction(new Date()));
        assert.isFalse(Value.IsFunction([]));
        assert.isFalse(Value.IsFunction([1,2]));
    });
    it('IsArray works', () => {
        assert.isTrue(Value.IsArray([]));
        assert.isTrue(Value.IsArray([1,2]));
        assert.isFalse(Value.IsArray(undefined));
        assert.isFalse(Value.IsArray(null));
        assert.isFalse(Value.IsArray(0));
        assert.isFalse(Value.IsArray(1));
        assert.isFalse(Value.IsArray(''));
        assert.isFalse(Value.IsArray('a'));
        assert.isFalse(Value.IsArray({}));
        assert.isFalse(Value.IsArray(new Date()));
    });
    it('IsObject works', () => {
        assert.isTrue(Value.IsObject({}));
        assert.isTrue(Value.IsObject(new Date()));
        assert.isFalse(Value.IsObject(undefined));
        assert.isFalse(Value.IsObject(null));
        assert.isFalse(Value.IsObject(0));
        assert.isFalse(Value.IsObject(1));
        assert.isFalse(Value.IsObject(''));
        assert.isFalse(Value.IsObject('a'));
        assert.isFalse(Value.IsObject([]));
        assert.isFalse(Value.IsObject([1,2]));
    });
});
