import {assert} from 'chai';
import {Duration as LuxonDuration} from 'luxon';
import {TimeSpan} from '../../src/ts-tooling';
import 'mocha';

describe('TimeSpan Tests', () => {
    it('can create empty TimeSpan', () => {
        assert.equal(new TimeSpan().Day, 0);
        assert.equal(new TimeSpan().Hour, 0);
        assert.equal(new TimeSpan().Minute, 0);
        assert.equal(new TimeSpan().Second, 0);
        assert.equal(new TimeSpan().Millisecond, 0);
    });

    it('can create predefined TimeSpan', () => {
        assert.equal(new TimeSpan(12, 23, 5, 200, 1).Day, 1);
        assert.equal(new TimeSpan(12, 23, 5, 200, 1).Hour, 12);
        assert.equal(new TimeSpan(12, 23, 5, 200, 1).Minute, 23);
        assert.equal(new TimeSpan(12, 23, 5, 200, 1).Second, 5);
        assert.equal(new TimeSpan(12, 23, 5, 200, 1).Millisecond, 200);
    });

    it('can get the Total Days', () => {
        assert.equal(new TimeSpan(12, 23, 5, 200, 1).TotalDays, 1.5160324074074074);
    });

    it('can get the Total Hours', () => {
        assert.equal(new TimeSpan(12, 23, 5, 200, 0).TotalHours, 12.384777777777776);
    });

    it('can get the Total Minutes', () => {
        assert.equal(new TimeSpan(0, 23, 5, 200, 0).TotalMinutes, 23.086666666666666);
    });

    it('can get the Total Seconds', () => {
        assert.equal(new TimeSpan(0, 0, 5, 200, 0).TotalSeconds, 5.2);
    });

    it('can get the Total Milliseconds', () => {
        assert.equal(new TimeSpan(0, 0, 5, 200, 0).TotalMilliseconds, 5200);
    });

    it('can add a TimeSpan', () => {
        assert.equal(new TimeSpan().Add(new TimeSpan(0, 0, 5, 0, 0)).Second, 5);
        assert.equal(new TimeSpan().Add(new TimeSpan(0, 0, 5, 0, 0)).Day, 0);
        assert.equal(new TimeSpan().Add(new TimeSpan(0, 0, 5, 0, 0)).Hour, 0);
        assert.equal(new TimeSpan().Add(new TimeSpan(0, 0, 5, 0, 0)).Minute, 0);
        assert.equal(new TimeSpan().Add(new TimeSpan(0, 0, 5, 0, 0)).Millisecond, 0);
    });

    it('can check Equality', () => {
        assert.isTrue(new TimeSpan().Equals(new TimeSpan()));
        assert.isFalse(new TimeSpan(5).Equals(new TimeSpan()));
    });

    it('can negate the TimeSpan', () => {
        assert.equal(new TimeSpan(5).Negate().Hour, -5);
        assert.equal(new TimeSpan(5).Negate().Day, 0);
        assert.equal(new TimeSpan(5).Negate().Minute, 0);
        assert.equal(new TimeSpan(5).Negate().Second, 0);
        assert.equal(new TimeSpan(5).Negate().Millisecond, 0);
    });

    it('can Subtract TimeSpan from this TimeSpan', () => {
        assert.equal(new TimeSpan(5).Subtract(new TimeSpan(1)).Hour, 4);
        assert.equal(new TimeSpan(5).Subtract(new TimeSpan(1)).Day, 0);
        assert.equal(new TimeSpan(5).Subtract(new TimeSpan(1)).Minute, 0);
        assert.equal(new TimeSpan(5).Subtract(new TimeSpan(1)).Second, 0);
        assert.equal(new TimeSpan(5).Subtract(new TimeSpan(1)).Millisecond, 0);
    });

    it('can check TimeSpan is before', () => {
        assert.isTrue(new TimeSpan(5).IsBefore(new TimeSpan(6)));
        assert.isFalse(new TimeSpan(5).IsBefore(new TimeSpan(2)));
    });

    it('can check TimeSpan is after', () => {
        assert.isTrue(new TimeSpan(5).IsAfter(new TimeSpan(2)));
        assert.isFalse(new TimeSpan(5).IsAfter(new TimeSpan(6)))
    });

    it('can format TimeSpan to Chars default', () => {
        assert.equal(new TimeSpan(5, 3, 4).ToString(), '05:03:04');
    });

    it('can format TimeSpan to Chars custom', () => {
        assert.equal(new TimeSpan(
            5,
            3,
            4,
            200,
            1)
            .ToString('d.hh:mm:ss SSS'), '1.05:03:04 200');
    });

    it('can create TimeSpan from Luxon', () => {
        assert.equal(TimeSpan.FromLuxon(LuxonDuration.fromObject({hour: 5, minute: 22, second: 12})).Day, 0);
        assert.equal(TimeSpan.FromLuxon(LuxonDuration.fromObject({hour: 5, minute: 22, second: 12})).Hour, 5);
        assert.equal(TimeSpan.FromLuxon(LuxonDuration.fromObject({hour: 5, minute: 22, second: 12})).Minute, 22);
        assert.equal(TimeSpan.FromLuxon(LuxonDuration.fromObject({hour: 5, minute: 22, second: 12})).Second, 12);
        assert.equal(TimeSpan.FromLuxon(LuxonDuration.fromObject({hour: 5, minute: 22, second: 12})).Millisecond, 0);
    });

    it('can create TimeSpan from ISO Chars', () => {
        assert.equal(TimeSpan.FromISOString('05:22:12').Day, 0);
        assert.equal(TimeSpan.FromISOString('05:22:12').Hour, 5);
        assert.equal(TimeSpan.FromISOString('05:22:12').Minute, 22);
        assert.equal(TimeSpan.FromISOString('05:22:12').Second, 12);
        assert.equal(TimeSpan.FromISOString('05:22:12').Millisecond, 0);

        assert.equal(TimeSpan.FromISOString('1.05:22:12').Day, 1);
        assert.equal(TimeSpan.FromISOString('1.05:22:12').Hour, 5);
        assert.equal(TimeSpan.FromISOString('1.05:22:12').Minute, 22);
        assert.equal(TimeSpan.FromISOString('1.05:22:12').Second, 12);
        assert.equal(TimeSpan.FromISOString('1.05:22:12').Millisecond, 0);
    });

    it('can create TimeSpan from Milliseconds', () => {
        assert.equal(TimeSpan.FromMilliseconds(2500).Day, 0);
        assert.equal(TimeSpan.FromMilliseconds(2500).Hour, 0);
        assert.equal(TimeSpan.FromMilliseconds(2500).Minute, 0);
        assert.equal(TimeSpan.FromMilliseconds(2500).Second, 0);
        assert.equal(TimeSpan.FromMilliseconds(2500).Millisecond, 2500);
    });

    it('check if Valid', () => {
        assert.isTrue(TimeSpan.FromMilliseconds(2500).Valid);
    });
});
