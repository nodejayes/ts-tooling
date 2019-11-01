import {assert} from 'chai';
import {Bool} from '../../src/ts-tooling';
import 'mocha';

describe('Bool Tests', () => {
    it('can create Boolean Value', () => {
        assert.isTrue(new Bool(true).Value);
        assert.isFalse(new Bool(false).Value);
    });
    it('can check Boolean Value', () => {
        assert.isTrue(new Bool(true).IsTrue());
        assert.isFalse(new Bool(false).IsTrue());
        assert.isTrue(new Bool(false).IsFalse());
        assert.isFalse(new Bool(true).IsFalse());
    });
    it('can switch Boolean Value', () => {
        assert.isTrue(new Bool(false).Switch().Value);
        assert.isFalse(new Bool(true).Switch().Value);
    });
});