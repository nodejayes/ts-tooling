const {assert} = require('chai');
const Core = require('./index');

describe('Core Module Export Tests', () => {
    it('export Core Namespace', () => {
        assert.isDefined(Core);
    });
    describe('Array Namespace', () => {
        it('export Namespace', () => {
            assert.isDefined(Core.Array)
        });
        it('export functions', () => {
            assert.isFunction(Core.Array.MergeArray);
            assert.isFunction(Core.Array.IndexOf);
            assert.isFunction(Core.Array.OperateArray);
            assert.isFunction(Core.Array.Without);
            assert.isFunction(Core.Array.Reverse);
            assert.isFunction(Core.Array.GroupBy);
            assert.isFunction(Core.Array.GetSortValue);
            assert.isFunction(Core.Array.Find);
            assert.isFunction(Core.Array.FindLast);
            assert.isFunction(Core.Array.Sort);
        });
    });
    describe('Check Namespace', () => {
        it('export Namespace', () => {
            assert.isDefined(Core.Check)
        });
        it('export functions', () => {
            assert.isFunction(Core.Check.IsFunction);
            assert.isFunction(Core.Check.IsObject);
        });
    });
    describe('Number Namespace', () => {
        it('export Namespace', () => {
            assert.isDefined(Core.Number)
        });
        it('export functions', () => {
            assert.isFunction(Core.Number.Round);
        });
    });
    describe('Object Namespace', () => {
        it('export Namespace', () => {
            assert.isDefined(Core.Object)
        });
        it('export functions', () => {
            assert.isFunction(Core.Object.Merge);
            assert.isFunction(Core.Object.Get);
            assert.isFunction(Core.Object.Set);
            assert.isFunction(Core.Object.RecursiveDeepCopy);
        });
    });
    describe('String Namespace', () => {
        it('export Namespace', () => {
            assert.isDefined(Core.String)
        });
        it('export functions', () => {
            assert.isFunction(Core.String.TrimChar);
            assert.isFunction(Core.String.Words);
            assert.isFunction(Core.String.Unescape);
            assert.isFunction(Core.String.Escape);
            assert.isFunction(Core.String.EscapeRegExp);
        });
    });
});
