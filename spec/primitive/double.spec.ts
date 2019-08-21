import {assert} from 'chai';
import {Double, Integer} from "../../src/ts-tooling";

describe('Double Tests', () => {
    it('can create empty Double', () => {
        assert.equal(new Double().Value, 0.0);
    });

    it('can create number Double', () => {
        assert.equal(new Double(1).Value, 1.0);
        assert.equal(new Double(1.5).Value, 1.5);
    });

    it('can create string Double', () => {
        assert.equal(new Double('1.5').Value, 1.5);
        assert.equal(new Double('1').Value, 1.0);
        assert.equal(new Double('a').Value, 0.0);
    });

    it('can generate Random Double', () => {
        assert.isAbove(Double.Random(new Double(1.2), new Double(2.5)).Value, 1.19);
        assert.isBelow(Double.Random(new Double(1.2), new Double(2.5)).Value, 2.51);
    });

    it('can check IsInRange', () => {
        assert.isTrue(new Double(1.2).IsInRange(new Double(1.0), new Double(2.0)));
        assert.isTrue(new Double(1.0).IsInRange(new Double(1.0), new Double(2.0)));
        assert.isTrue(new Double(2.0).IsInRange(new Double(1.0), new Double(2.0)));
        assert.isFalse(new Double(5.2).IsInRange(new Double(1.0), new Double(2.0)));
    });

    it('can check IsAbove', () => {
        assert.isTrue(new Double(1.2).IsAbove(new Double(1.0)));
        assert.isFalse(new Double(1.0).IsAbove(new Double(1.0)));
    });

    it('can check IsBelow', () => {
        assert.isFalse(new Double(1.2).IsBelow(new Double(1.0)));
        assert.isFalse(new Double(1.0).IsBelow(new Double(1.0)));
        assert.isTrue(new Double(0.9).IsBelow(new Double(1.0)));
    });

    it('can check Equals', () => {
        assert.isTrue(new Double().Equals(new Double()));
        assert.isFalse(new Double().Equals(new Double(5.1)));
    });

    it('can clamp', () => {
        assert.equal(new Double(5.1).Clamp(new Double(1.0), new Double(2.0)).Value, 2.0);
        assert.equal(new Double(0.9).Clamp(new Double(1.0), new Double(2.0)).Value, 1.0);
    });

    it('can do basic calculation', () => {
        assert.equal(
            new Double(5)
                .Add(new Double(1))
                .Add(new Double(1)).Value, 7);
        assert.equal(
            new Double(5)
                .Subtract(new Double(1))
                .Subtract(new Double(1)).Value, 3);
        assert.equal(
            new Double(5)
                .Multiply(new Double(2)).Value, 10);
        assert.equal(
            new Double(5)
                .Divide(new Double(2)).Value, 2.5);
        assert.throws(() => {
            new Double(2).Divide(new Double(0));
        }, 'Division by Zero 2 / 0');
    });

    it('can ceil Double', () => {
        assert.equal(new Double(4.006).Ceil().Value, 5);
        assert.equal(new Double(6.004).Ceil(new Integer(2)).Value, 6.01);
        assert.equal(new Double(6040).Ceil(new Integer(-2)).Value, 6100);
    });

    it('can floor Double', () => {
        assert.equal(new Double(4.006).Floor().Value, 4);
        assert.equal(new Double(0.046).Floor(new Integer(2)).Value, 0.04);
        assert.equal(new Double(4060).Floor(new Integer(-2)).Value, 4000);
    });

    it('can round Double', () => {
        assert.equal(new Double(4.006).Round().Value, 4);
        assert.equal(new Double(4.006).Round(new Integer(2)).Value, 4.01);
        assert.equal(new Double(4060).Round(new Integer(-2)).Value, 4100);
    });

    it('extends basic number', () => {
        assert.equal((1.5).ToDouble().Value, 1.5);
    });
});
