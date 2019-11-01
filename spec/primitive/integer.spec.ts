import {assert} from 'chai';
import {Integer} from '../../src/ts-tooling';
import 'mocha';

describe('Integer Tests', () => {
    it('can create empty Integer', () => {
        assert.equal(new Integer().Value, 0);
    });

    it('can create number Integer', () => {
        assert.equal(new Integer(1).Value, 1);
        assert.equal(new Integer(1.4).Value, 1);
        assert.equal(new Integer(1.5).Value, 1);
    });

    it('can create string Integer', () => {
        assert.equal(new Integer('1').Value, 1);
        assert.equal(new Integer('1.4').Value, 1);
        assert.equal(new Integer('1.5').Value, 1);
        assert.equal(new Integer('a').Value, 0);
    });

    it('can generate Random Integer', () => {
        assert.isAbove(Integer.Random(new Integer(1), new Integer(10)).Value, 0);
        assert.isBelow(Integer.Random(new Integer(1), new Integer(10)).Value, 11);
    });

    it('can check IsInRange', () => {
        assert.isTrue(new Integer(2).IsInRange(new Integer(1), new Integer(3)));
        assert.isTrue(new Integer(1).IsInRange(new Integer(1), new Integer(3)));
        assert.isTrue(new Integer(3).IsInRange(new Integer(1), new Integer(3)));
        assert.isFalse(new Integer(5).IsInRange(new Integer(1), new Integer(3)));
    });

    it('can check IsAbove', () => {
        assert.isTrue(new Integer(2).IsAbove(new Integer(1)));
        assert.isFalse(new Integer(1).IsAbove(new Integer(1)));
        assert.isFalse(new Integer(0).IsAbove(new Integer(1)));
    });

    it('can check IsBelow', () => {
        assert.isFalse(new Integer(2).IsBelow(new Integer(1)));
        assert.isFalse(new Integer(1).IsBelow(new Integer(1)));
        assert.isTrue(new Integer(0).IsBelow(new Integer(1)));
    });

    it('can check Equals', () => {
        assert.isTrue(new Integer().Equals(new Integer()));
        assert.isFalse(new Integer().Equals(new Integer(5)));
    });

    it('can clamp', () => {
        assert.equal(new Integer(5).Clamp(new Integer(1), new Integer(2)).Value, 2);
        assert.equal(new Integer(0).Clamp(new Integer(1), new Integer(2)).Value, 1);
    });

    it('can do basic calculation', () => {
        assert.equal(
            new Integer(5)
                .Add(new Integer(1))
                .Add(new Integer(1)).Value, 7);
        assert.equal(
            new Integer(5)
                .Subtract(new Integer(1))
                .Subtract(new Integer(1)).Value, 3);
        assert.equal(
            new Integer(5)
                .Multiply(new Integer(2)).Value, 10);
        assert.equal(
            new Integer(5)
                .Divide(new Integer(2)).Value, 2);
        assert.throws(() => {
            new Integer(2).Divide(new Integer(0));
        }, 'Division by Zero 2 / 0');
    });

    it('extends basic number', () => {
        assert.equal((1).ToInteger().Value, 1);
    });

    it('can Increment', () => {
        const test = new Integer(1);
        assert.equal(test.Increment().Value, 2);
    });

    it('can Decrement', () => {
        const test = new Integer(1);
        assert.equal(test.Decrement().Value, 0);
    });
});
