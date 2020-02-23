import {assert} from 'chai';
import 'mocha';
import {NumberFactory} from '../../../src/types/number/number.factory';

describe('Number Generator Tests', () => {
    it('generates Integer Numbers', () => {
        let counter = 0;
        while (counter < 10000) {
            const n = NumberFactory.RandomInteger(0, 10);
            assert.isTrue(n >= 0 && n <= 10);
            assert.equal(n%1, 0);
            counter++;
        }
    });
    it('generates Double Numbers', () => {
        let counter = 0;
        while (counter < 10000) {
            const n = NumberFactory.RandomDouble(0, 10);
            assert.isTrue(n >= 0 && n <= 10);
            assert.isAbove(n%1, 0);
            counter++;
        }
    });
    it('create Integers', () => {
        assert.equal(NumberFactory.NewInteger(1), 1);
        assert.equal(NumberFactory.NewInteger(1.5), 1);
        assert.equal(NumberFactory.NewInteger(1.4), 1);
        assert.equal(NumberFactory.NewInteger(1.6), 1);
        assert.equal(NumberFactory.NewInteger('1'), 1);
        assert.equal(NumberFactory.NewInteger('1.5'), 1);
    });
    it('create Doubles', () => {
        assert.equal(NumberFactory.NewDouble(1), 1);
        assert.equal(NumberFactory.NewDouble(1.5), 1.5);
        assert.equal(NumberFactory.NewDouble('1'), 1);
        assert.equal(NumberFactory.NewDouble('1.5'), 1.5);
    });
    it('default is zero', () => {
        assert.equal(NumberFactory.NewInteger('dsjdjhdh'), 0);
        assert.equal(NumberFactory.NewDouble('dsjdjhdh'), 0);
    });
});
