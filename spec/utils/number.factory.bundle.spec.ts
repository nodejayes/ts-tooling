import {assert} from 'chai';
import 'mocha';
const tst = require('../../lib/ts-tooling');

describe('Number Generator Bundle Tests', () => {
    it('generates Integer Numbers', () => {
        let counter = 0;
        while (counter < 10000) {
            const n = tst.NumberFactory.RandomInteger(0, 10);
            assert.isTrue(n >= 0 && n <= 10);
            assert.equal(n%1, 0);
            counter++;
        }
    });
    it('generates Double Numbers', () => {
        let counter = 0;
        while (counter < 10000) {
            const n = tst.NumberFactory.RandomDouble(0, 10);
            assert.isTrue(n >= 0 && n <= 10);
            assert.isAbove(n%1, 0);
            counter++;
        }
    });
    it('create Integers', () => {
        assert.equal(tst.NumberFactory.newInteger(1), 1);
        assert.equal(tst.NumberFactory.newInteger(1.5), 1);
        assert.equal(tst.NumberFactory.newInteger(1.4), 1);
        assert.equal(tst.NumberFactory.newInteger(1.6), 1);
        assert.equal(tst.NumberFactory.newInteger('1'), 1);
        assert.equal(tst.NumberFactory.newInteger('1.5'), 1);
    });
    it('create Doubles', () => {
        assert.equal(tst.NumberFactory.newDouble(1), 1);
        assert.equal(tst.NumberFactory.newDouble(1.5), 1.5);
        assert.equal(tst.NumberFactory.newDouble('1'), 1);
        assert.equal(tst.NumberFactory.newDouble('1.5'), 1.5);
    });
    it('default is zero', () => {
        assert.equal(tst.NumberFactory.newInteger('dsjdjhdh'), 0);
        assert.equal(tst.NumberFactory.newDouble('dsjdjhdh'), 0);
    });
});
