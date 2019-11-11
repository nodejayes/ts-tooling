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

    it('can check IsInRange', () => {
        assert.isTrue(1.2.IsInRange(1.0, 2.0));
        assert.isTrue(1.0.IsInRange(1.0, 2.0));
        assert.isTrue(2.0.IsInRange(1.0, 2.0));
        assert.isFalse(5.2.IsInRange(1.0, 2.0));
    });

    it('can check IsAbove', () => {
        assert.isTrue(1.2.IsAbove(1.0));
        assert.isFalse(1.0.IsAbove(1.0));
    });

    it('can check IsBelow', () => {
        assert.isFalse(1.2.IsBelow(1.0));
        assert.isFalse(1.0.IsBelow(1.0));
        assert.isTrue(0.9.IsBelow(1.0));
    });

    it('can check Equals', () => {
        assert.isTrue((1).Equals(1));
        assert.isFalse((2).Equals(5.1));
    });

    it('can clamp', () => {
        assert.equal(5.1.Clamp(1.0, 2.0), 2.0);
        assert.equal(0.9.Clamp(1.0, 2.0), 1.0);
    });

    it('can do basic calculation', () => {
        assert.equal(
            (5).Add(1)
                .Add(1), 7);
        assert.equal(
            (5).Subtract(1)
                .Subtract(1), 3);
        assert.equal(
            (5).Multiply(2), 10);
        assert.equal(
            (5).Divide(2), 2.5);
        assert.throws(() => {
            (2).Divide(0);
        }, 'Division by Zero 2 / 0');
    });

    it('can ceil Double', () => {
        assert.equal(4.006.Ceil(), 5);
        assert.equal(6.004.Ceil(2), 6.01);
        assert.equal((6040).Ceil(-2), 6100);
    });

    it('can floor Double', () => {
        assert.equal(4.006.Floor(), 4);
        assert.equal(0.046.Floor(2), 0.04);
        assert.equal((4060).Floor(-2), 4000);
    });

    it('can round Double', () => {
        assert.equal(4.006.Round(), 4);
        assert.equal(4.006.Round(2), 4.01);
        assert.equal((4060).Round(-2), 4100);
    });

    it('can Increment', () => {
        const test = 1.0;
        assert.equal(test.Increment(), 2.0);
        assert.equal(test.Increment(0.5), 2.5);
    });

    it('can Decrement', () => {
        const test = 3.0;
        assert.equal(test.Decrement(), 2.0);
        assert.equal(test.Decrement(0.5), 1.5);
    });
});
