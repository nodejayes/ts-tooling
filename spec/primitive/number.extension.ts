import '../../src/ts-tooling';
import {assert} from 'chai';
import 'mocha';

describe('Number Extension Test', () => {
    it('number IsInRange', () => {
        const n = 5;
        assert.isTrue(n.IsInRange(n-1, 10));
        assert.isTrue(n.IsInRange(n, 10));
        assert.isFalse(n.IsInRange(n+1, 10));
    });
});