const {assert} = require('chai');
const {Round, Random} = require('./number');

describe('Core Number Tests', () => {
    describe('[Method]: Round', () => {
        it('floor to a Integer when no precision is pass', () => {
            assert.equal(Round(4.006, 0, 'floor'), 4);
        });
        it('floor to exact precision when the precision is pass', () => {
            assert.equal(Round(0.046,2, 'floor'), 0.04);
        });
        it('floor negative precision', () => {
            assert.equal(Round(4060, -2, 'floor'), 4000);
        });
        it('ceil to a Integer when no precision is pass', () => {
            assert.equal(Round(4.006, 0, 'ceil'), 5);
        });
        it('ceil to exact precision when the precision is pass', () => {
            assert.equal(Round(6.004, 2, 'ceil'), 6.01);
        });
        it('ceil negative precision', () => {
            assert.equal(Round(6040, -2, 'ceil'), 6100);
        });
        it('round to a Integer when no precision is pass', () => {
            assert.equal(Round(4.006, 0), 4);
        });
        it('round to exact precision when the precision is pass', () => {
            assert.equal(Round(4.006, 2), 4.01);
        });
        it('round negative precision', () => {
            assert.equal(Round(4060, -2), 4100);
        });
    });
    describe('[Method]: Random', () => {
        it('generate Integer 1-10', () => {
            for (let i = 0; i < 1000; i++) {
                assert.isAtMost(Random(1, 10, false), 10);
                assert.isAtLeast(Random(1, 10, false), 1);
            }
        });
        it('generate Integer 0-1', () => {
            for (let i = 0; i < 1000; i++) {
                assert.isAtMost(Random(0, 1, true), 1);
                assert.isAtLeast(Random(0, 1, true), 0);
            }
        });
    });
});
