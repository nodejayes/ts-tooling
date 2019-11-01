import {assert} from 'chai';
import {Duration as LuxonDuration} from 'luxon';
import {TimeSpan, Chars, Integer} from '../../src/ts-tooling';
import 'mocha';

describe('TimeSpan Tests', () => {
    it('can create empty TimeSpan', () => {
        assert.equal(new TimeSpan().Day.Value, 0);
        assert.equal(new TimeSpan().Hour.Value, 0);
        assert.equal(new TimeSpan().Minute.Value, 0);
        assert.equal(new TimeSpan().Second.Value, 0);
        assert.equal(new TimeSpan().Millisecond.Value, 0);
    });

    it('can create predefined TimeSpan', () => {
        assert.equal(new TimeSpan(new Integer(12), new Integer(23), new Integer(5), new Integer(200), new Integer(1)).Day.Value, 1);
        assert.equal(new TimeSpan(new Integer(12), new Integer(23), new Integer(5), new Integer(200), new Integer(1)).Hour.Value, 12);
        assert.equal(new TimeSpan(new Integer(12), new Integer(23), new Integer(5), new Integer(200), new Integer(1)).Minute.Value, 23);
        assert.equal(new TimeSpan(new Integer(12), new Integer(23), new Integer(5), new Integer(200), new Integer(1)).Second.Value, 5);
        assert.equal(new TimeSpan(new Integer(12), new Integer(23), new Integer(5), new Integer(200), new Integer(1)).Millisecond.Value, 200);
    });

    it('can get the Total Days', () => {
        assert.equal(new TimeSpan(new Integer(12), new Integer(23), new Integer(5), new Integer(200), new Integer(1)).TotalDays.Value, 1.5160324074074074);
    });

    it('can get the Total Hours', () => {
        assert.equal(new TimeSpan(new Integer(12), new Integer(23), new Integer(5), new Integer(200), new Integer(0)).TotalHours.Value, 12.384777777777776);
    });

    it('can get the Total Minutes', () => {
        assert.equal(new TimeSpan(new Integer(0), new Integer(23), new Integer(5), new Integer(200), new Integer(0)).TotalMinutes.Value, 23.086666666666666);
    });

    it('can get the Total Seconds', () => {
        assert.equal(new TimeSpan(new Integer(0), new Integer(0), new Integer(5), new Integer(200), new Integer(0)).TotalSeconds.Value, 5.2);
    });

    it('can get the Total Milliseconds', () => {
        assert.equal(new TimeSpan(new Integer(0), new Integer(0), new Integer(5), new Integer(200), new Integer(0)).TotalMilliseconds.Value, 5200);
    });

    it('can add a TimeSpan', () => {
        assert.equal(new TimeSpan().Add(new TimeSpan(new Integer(0), new Integer(0), new Integer(5), new Integer(0), new Integer(0))).Second.Value, 5);
        assert.equal(new TimeSpan().Add(new TimeSpan(new Integer(0), new Integer(0), new Integer(5), new Integer(0), new Integer(0))).Day.Value, 0);
        assert.equal(new TimeSpan().Add(new TimeSpan(new Integer(0), new Integer(0), new Integer(5), new Integer(0), new Integer(0))).Hour.Value, 0);
        assert.equal(new TimeSpan().Add(new TimeSpan(new Integer(0), new Integer(0), new Integer(5), new Integer(0), new Integer(0))).Minute.Value, 0);
        assert.equal(new TimeSpan().Add(new TimeSpan(new Integer(0), new Integer(0), new Integer(5), new Integer(0), new Integer(0))).Millisecond.Value, 0);
    });

    it('can check Equality', () => {
        assert.isTrue(new TimeSpan().Equals(new TimeSpan()));
        assert.isFalse(new TimeSpan(new Integer(5)).Equals(new TimeSpan()));
    });

    it('can negate the TimeSpan', () => {
        assert.equal(new TimeSpan(new Integer(5)).Negate().Hour.Value, -5);
        assert.equal(new TimeSpan(new Integer(5)).Negate().Day.Value, 0);
        assert.equal(new TimeSpan(new Integer(5)).Negate().Minute.Value, 0);
        assert.equal(new TimeSpan(new Integer(5)).Negate().Second.Value, 0);
        assert.equal(new TimeSpan(new Integer(5)).Negate().Millisecond.Value, 0);
    });

    it('can Subtract TimeSpan from this TimeSpan', () => {
        assert.equal(new TimeSpan(new Integer(5)).Subtract(new TimeSpan(new Integer(1))).Hour.Value, 4);
        assert.equal(new TimeSpan(new Integer(5)).Subtract(new TimeSpan(new Integer(1))).Day.Value, 0);
        assert.equal(new TimeSpan(new Integer(5)).Subtract(new TimeSpan(new Integer(1))).Minute.Value, 0);
        assert.equal(new TimeSpan(new Integer(5)).Subtract(new TimeSpan(new Integer(1))).Second.Value, 0);
        assert.equal(new TimeSpan(new Integer(5)).Subtract(new TimeSpan(new Integer(1))).Millisecond.Value, 0);
    });

    it('can check TimeSpan is before', () => {
        assert.isTrue(new TimeSpan(new Integer(5)).IsBefore(new TimeSpan(new Integer(6))));
        assert.isFalse(new TimeSpan(new Integer(5)).IsBefore(new TimeSpan(new Integer(2))));
    });

    it('can check TimeSpan is after', () => {
        assert.isTrue(new TimeSpan(new Integer(5)).IsAfter(new TimeSpan(new Integer(2))));
        assert.isFalse(new TimeSpan(new Integer(5)).IsAfter(new TimeSpan(new Integer(6))))
    });

    it('can format TimeSpan to Chars default', () => {
        assert.equal(new TimeSpan(new Integer(5), new Integer(3), new Integer(4)).ToString().Value, '05:03:04');
    });

    it('can format TimeSpan to Chars custom', () => {
        assert.equal(new TimeSpan(
            new Integer(5),
            new Integer(3),
            new Integer(4),
            new Integer(200),
            new Integer(1))
            .ToString(new Chars('d.hh:mm:ss SSS')).Value, '1.05:03:04 200');
    });

    it('can create TimeSpan from Luxon', () => {
        assert.equal(TimeSpan.FromLuxon(LuxonDuration.fromObject({hour: 5, minute: 22, second: 12})).Day.Value, 0);
        assert.equal(TimeSpan.FromLuxon(LuxonDuration.fromObject({hour: 5, minute: 22, second: 12})).Hour.Value, 5);
        assert.equal(TimeSpan.FromLuxon(LuxonDuration.fromObject({hour: 5, minute: 22, second: 12})).Minute.Value, 22);
        assert.equal(TimeSpan.FromLuxon(LuxonDuration.fromObject({hour: 5, minute: 22, second: 12})).Second.Value, 12);
        assert.equal(TimeSpan.FromLuxon(LuxonDuration.fromObject({hour: 5, minute: 22, second: 12})).Millisecond.Value, 0);
    });

    it('can create TimeSpan from ISO Chars', () => {
        assert.equal(TimeSpan.FromISOString(new Chars('05:22:12')).Day.Value, 0);
        assert.equal(TimeSpan.FromISOString(new Chars('05:22:12')).Hour.Value, 5);
        assert.equal(TimeSpan.FromISOString(new Chars('05:22:12')).Minute.Value, 22);
        assert.equal(TimeSpan.FromISOString(new Chars('05:22:12')).Second.Value, 12);
        assert.equal(TimeSpan.FromISOString(new Chars('05:22:12')).Millisecond.Value, 0);
    });

    it('can create TimeSpan from Milliseconds', () => {
        assert.equal(TimeSpan.FromMilliseconds(new Integer(2500)).Day.Value, 0);
        assert.equal(TimeSpan.FromMilliseconds(new Integer(2500)).Hour.Value, 0);
        assert.equal(TimeSpan.FromMilliseconds(new Integer(2500)).Minute.Value, 0);
        assert.equal(TimeSpan.FromMilliseconds(new Integer(2500)).Second.Value, 0);
        assert.equal(TimeSpan.FromMilliseconds(new Integer(2500)).Millisecond.Value, 2500);
    });

    it('check if Valid', () => {
        assert.isTrue(TimeSpan.FromMilliseconds(new Integer(2500)).Valid);
    });
});
