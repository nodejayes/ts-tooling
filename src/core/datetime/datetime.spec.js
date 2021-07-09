const {assert} = require('chai');
const {describe, it} = require('mocha');
const {ParseString, GetHoursForMonth} = require('./datetime');

describe('Core DateTime Tests', () => {
    describe('[Method]: ParseString', () => {
        it('parse ISO Date String', () => {
            assert.deepEqual(ParseString('1.01:01:01 001'), {
                days: 1,
                hours: 1,
                minutes: 1,
                seconds: 1,
                milliseconds: 1,
            });
        });
        it('calculate Month Days', () => {
            assert.equal(GetHoursForMonth(1, 2020), 744);
            assert.equal(GetHoursForMonth(2, 2020), 696);
            assert.equal(GetHoursForMonth(2, 2021), 672);
            assert.equal(GetHoursForMonth(3, 2020), 744);
            assert.equal(GetHoursForMonth(4, 2020), 720);
            assert.equal(GetHoursForMonth(5, 2020), 744);
            assert.equal(GetHoursForMonth(6, 2020), 720);
            assert.equal(GetHoursForMonth(7, 2020), 744);
            assert.equal(GetHoursForMonth(8, 2020), 744);
            assert.equal(GetHoursForMonth(9, 2020), 720);
            assert.equal(GetHoursForMonth(10, 2020), 744);
            assert.equal(GetHoursForMonth(11, 2020), 720);
            assert.equal(GetHoursForMonth(12, 2020), 744);
        });
    });
});
