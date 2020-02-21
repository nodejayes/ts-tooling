import '../../../src/types/number';
import {assert} from 'chai';
import 'mocha';

describe('Number Extension Tests', () => {
    describe('[Method]: Add', () => {
        it('add 5 and 1 is 6', () => {
            assert.equal((5).Add(1), 6);
        });
        it('chainable Result', () => {
            assert.equal((5).Add(1).Add(1), 7);
        });
    });

    describe('[Method]: Ceil', () => {
        it('ceil to a Integer when no precision is pass', () => {
            assert.equal(4.006.Ceil(), 5);
        });
        it('ceil to exact precision when the precision is pass', () => {
            assert.equal(6.004.Ceil(2), 6.01);
        });
        it('ceil negative precision', () => {
            assert.equal((6040).Ceil(-2), 6100);
        });
    });

    describe('[Method]: Clamp', () => {
        it('clamp to upper Limit when bigger than upper Limit', () => {
            assert.equal(5.1.Clamp(1.0, 2.0), 2.0);
        });
        it('clamp to lower Limit when lower than lower Limit', () => {
            assert.equal(0.5.Clamp(1.0, 2.0), 1.0);
        });
        it('returns the same value when between the upper and lower limit', () => {
            assert.equal(1.5.Clamp(1.0, 2.0), 1.5);
        });
        it('if value is a lower or upper border the value was returned', () => {
            assert.equal(1.0.Clamp(1.0, 2.0), 1.0);
            assert.equal(2.0.Clamp(1.0, 2.0), 2.0);
        });
    });

    describe('[Method]: Decrement', () => {
        it('decrement by 1 on default', () => {
            assert.equal((2).Decrement(), 1);
        });
        it('decrement by custom number', () => {
            assert.equal((5).Decrement(2), 3);
        });
    });

    describe('[Method]: Divide', () => {
        it('divide 10 by 2', () => {
            assert.equal((10).Divide(2), 5);
        });
        it('chainable Result', () => {
            assert.equal((20).Divide(2).Divide(2), 5);
        });
        it('catch divide by Zero', () => {
            assert.throw(() => (10).Divide(0), 'Division by Zero 10 / 0');
        });
    });

    describe('[Method]: Equals', () => {
        it('same number returns true', () => {
            assert.isTrue((1).Equals(1));
        });
        it('not same number returns false', () => {
            assert.isFalse((2).Equals(5.1));
        });
        it('undefined returns false', () => {
            assert.isFalse((2).Equals(undefined));
        });
        it('null returns false', () => {
            assert.isFalse((2).Equals(null));
        });
    });

    describe('[Method]: Floor', () => {
        it('floor to a Integer when no precision is pass', () => {
            assert.equal(4.006.Floor(), 4);
        });
        it('floor to exact precision when the precision is pass', () => {
            assert.equal(0.046.Floor(2), 0.04);
        });
        it('floor negative precision', () => {
            assert.equal((4060).Floor(-2), 4000);
        });
    });

    describe('[Method]: Increment', () => {
        it('increment by 1 on default', () => {
            assert.equal((2).Increment(), 3);
        });
        it('increment by custom number', () => {
            assert.equal((2).Increment(5), 7);
        });
    });

    describe('[Method]: IsAbove', () => {
        it('lower returns false', () => {
            assert.isFalse(0.5.IsAbove(1.0));
        });
        it('equal returns false', () => {
            assert.isFalse(1.0.IsAbove(1.0));
        });
        it('upper returns true', () => {
            assert.isTrue(1.2.IsAbove(1.0));
        });
    });

    describe('[Method]: IsBelow', () => {
        it('lower returns true', () => {
            assert.isTrue(0.9.IsBelow(1.0));
        });
        it('equal returns false', () => {
            assert.isFalse(1.0.IsBelow(1.0));
        });
        it('upper returns false', () => {
            assert.isFalse(1.2.IsBelow(1.0));
        });
    });

    describe('[Method]: IsInRange', () => {
        it('value between returns true', () => {
            assert.isTrue(1.2.IsInRange(1.0, 2.0));
        });
        it('border values returns true', () => {
            assert.isTrue(1.0.IsInRange(1.0, 2.0));
            assert.isTrue(2.0.IsInRange(1.0, 2.0));
        });
        it('value outside returns false', () => {
            assert.isFalse(5.2.IsInRange(1.0, 2.0));
        });
    });

    describe('[Method]: Multiply', () => {
        it('multiply 5 and 2', () => {
            assert.equal((5).Multiply(2), 10);
        });
        it('chainable Result', () => {
            assert.equal((5).Multiply(2).Multiply(2), 20);
        });
    });

    describe('[Method]: Round', () => {
        it('round to a Integer when no precision is pass', () => {
            assert.equal(4.006.Round(), 4);
        });
        it('round to exact precision when the precision is pass', () => {
            assert.equal(4.006.Round(2), 4.01);
        });
        it('round negative precision', () => {
            assert.equal((4060).Round(-2), 4100);
        });
    });

    describe('[Method]: Subtract', () => {
        it('subtract 1 from 5', () => {
            assert.equal((5).Subtract(1), 4);
        });
        it('chainable Result', () => {
            assert.equal((5).Subtract(1).Subtract(1), 3);
        });
    });

    describe('[Method]: Numerals', () => {
        it('Integer 1000 has 4', () => {
            assert.equal((1000).Numerals(), 4);
        });
        it('Float 10.456789 has 2', () => {
            assert.equal(10.456789.Numerals(), 2);
        });
    });

    describe('[Method]: DecimalPlaces', () => {
        it('Integer 1000 has 0', () => {
            assert.equal((1000).DecimalPlaces(), 0);
        });
        it('Float 10.456789 has 6', () => {
            assert.equal(10.456789.DecimalPlaces(), 6);
        });
    });
});
