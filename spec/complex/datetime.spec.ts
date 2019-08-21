import {assert} from 'chai';
import {DateTime as LuxonDateTime} from 'luxon';
import {DateTime, Chars, Integer} from "../../src/ts-tooling";

function assertDate(dt: DateTime, vgl: LuxonDateTime) {
    assert.equal(dt.Year.Value, vgl.year);
    assert.equal(dt.Month.Value, vgl.month);
    assert.equal(dt.Day.Value, vgl.day);
    assert.equal(dt.Hour.Value, vgl.hour);
    assert.equal(dt.Minute.Value, vgl.minute);
    assert.equal(dt.Second.Value, vgl.second);
    assert.isTrue(vgl.millisecond >= dt.Millisecond.Value && dt.Millisecond.Value <= (vgl.millisecond + 5));
}

describe('DateTime Tests', () => {
    it('can create empty DateTime is in UTC', () => {
        const dt = new DateTime();
        const vgl = LuxonDateTime.utc();
        assertDate(dt, vgl);
    });

    it('can create predefined DateTime in UTC', () => {
        const dt = new DateTime(
            new Chars('UTC'),
            new Integer(2019),
            new Integer(5),
            new Integer(1),
            new Integer(12),
            new Integer(23),
            new Integer(54),
            new Integer(100));
        const vgl = LuxonDateTime.utc(2019, 5, 1, 12, 23, 54, 100);
        assertDate(dt, vgl);
    });

    it('can create now in other TimeZone', () => {
        const dt = new DateTime(new Chars('Europe/Berlin'));
        const vgl = LuxonDateTime.utc().setZone('Europe/Berlin');
        assertDate(dt, vgl);
    });

    it('can convert the DateTime in UTC', () => {
        const dt = new DateTime(new Chars('Europe/Berlin'));
        assert.equal(dt.UTC.UTCOffsetMinutes.Value, 0);
    });

    it('can convert the DateTime in Europe/Berlin', () => {
        const dt = new DateTime();
        assert.isTrue(dt.ToZone(new Chars('Europe/Berlin')).UTCOffsetMinutes.Value === 60 || dt.ToZone(new Chars('Europe/Berlin')).UTCOffsetMinutes.Value === 120);
    });

    it('can create DateTime from Luxon Date Object', () => {
        const vgl = LuxonDateTime.utc();
        const dt = DateTime.FromLuxon(vgl);
        assertDate(dt, vgl);
    });

    it('can create DateTime from Luxon Date Object with a specific Timezone', () => {
        const vgl = LuxonDateTime.utc().setZone('Europe/Berlin');
        const dt = DateTime.FromLuxon(vgl);
        assert.isTrue(dt.UTCOffsetMinutes.Value === 60 || dt.UTCOffsetMinutes.Value === 120);
    });

    it('can create DateTime from Javascript Date Object', () => {
        const vgl = LuxonDateTime.utc();
        const dt = DateTime.FromJavascriptDate(vgl.toJSDate());
        assertDate(dt, vgl);
    });

    it('can create DateTime from Javascript Date Object with a specific Timezone', () => {
        const vgl = LuxonDateTime.utc();
        const dt = DateTime.FromJavascriptDate(vgl.toJSDate(), new Chars('Europe/Berlin'));
        assert.isTrue(dt.UTCOffsetMinutes.Value === 60 || dt.UTCOffsetMinutes.Value === 120);
    });

    it('can create DateTime from ISO Chars', () => {
        const vgl = LuxonDateTime.utc();
        const dt = DateTime.FromISOString(new Chars(vgl.toISO()));
        assertDate(dt, vgl);
    });

    it('can create DateTime from ISO Chars with a specific Timezone', () => {
        const vgl = LuxonDateTime.utc();
        const dt = DateTime.FromISOString(new Chars(vgl.toISO()), new Chars('Europe/Berlin'));
        assert.isTrue(dt.UTCOffsetMinutes.Value === 60 || dt.UTCOffsetMinutes.Value === 120);
    });

    it('can create DateTime from Milliseconds', () => {
        const vgl = LuxonDateTime.utc();
        const dt = DateTime.FromMilliseconds(new Integer(vgl.toMillis()));
        assertDate(dt, vgl);
    });

    it('can create DateTime from Milliseconds with specific Timezone', () => {
        const vgl = LuxonDateTime.utc();
        const dt = DateTime.FromMilliseconds(new Integer(vgl.toMillis()), new Chars('Europe/Berlin'));
        assert.isTrue(dt.UTCOffsetMinutes.Value === 60 || dt.UTCOffsetMinutes.Value === 120);
    });

    it('can return the Default DateTime Chars', () => {
        const dt = DateTime.FromISOString(new Chars('2019-01-01T12:23:54'));
        assert.equal(dt.ToString().Value, '2019-01-01 12:23:54');
    });

    it('can return custom DateTime Chars', () => {
        const dt = DateTime.FromISOString(new Chars('2019-01-01T12:23:54'));
        assert.equal(dt.ToString(new Chars('yyyy')).Value, '2019');
    });

    it('can get the current Timezone Name', () => {
        const dt = DateTime.FromISOString(new Chars('2019-01-01T12:23:54'));
        assert.equal(dt.Zone.Value, 'UTC');
    });

    it('can get the Weekday', () => {
        const dt = DateTime.FromISOString(new Chars('2019-01-01T12:23:54'));
        assert.equal(dt.DayOfWeek.Value, 2);
    });

    it('can get the Day in Year', () => {
        const dt = DateTime.FromISOString(new Chars('2019-12-30T12:23:54'));
        assert.equal(dt.DayOfYear.Value, 364);
    });

    it('can get the Year Quarter', () => {
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T12:23:54')).YearQuarter.Value, 1);
        assert.equal(DateTime.FromISOString(new Chars('2019-04-01T12:23:54')).YearQuarter.Value, 2);
        assert.equal(DateTime.FromISOString(new Chars('2019-07-01T12:23:54')).YearQuarter.Value, 3);
        assert.equal(DateTime.FromISOString(new Chars('2019-10-01T12:23:54')).YearQuarter.Value, 4);
    });

    it('can get Days in Month', () => {
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T12:23:54')).DaysInMonth.Value, 31);
        assert.equal(DateTime.FromISOString(new Chars('2019-02-01T12:23:54')).DaysInMonth.Value, 28);
        assert.equal(DateTime.FromISOString(new Chars('2016-02-01T12:23:54')).DaysInMonth.Value, 29);
        assert.equal(DateTime.FromISOString(new Chars('2019-04-01T12:23:54')).DaysInMonth.Value, 30);
    });

    it('can get Days in the Year', () => {
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T12:23:54')).DaysInYear.Value, 365);
    });

    it('can get Week Number', () => {
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).YearWeekNumber.Value, 1);
    });

    it('throw Error on unsupported Timezone', () => {
        assert.throws(() => {
            DateTime.FromISOString(new Chars('2019-01-01T00:00:00'), new Chars('asasasasasa'));
        }, 'Timezone asasasasasa not supported!');
    });

    it('can get the Time of the Day', () => {
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T22:23:50.200')).TimeOfDay.Day.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T22:23:50.200')).TimeOfDay.Hour.Value, 22);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T22:23:50.200')).TimeOfDay.Minute.Value, 23);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T22:23:50.200')).TimeOfDay.Second.Value, 50);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T22:23:50.200')).TimeOfDay.Millisecond.Value, 200);
    });

    it('can get the Date', () => {
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T22:23:50.200')).Date.Year.Value, 2019);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T22:23:50.200')).Date.Month.Value, 1);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T22:23:50.200')).Date.Day.Value, 1);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T22:23:50.200')).Date.Hour.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T22:23:50.200')).Date.Minute.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T22:23:50.200')).Date.Second.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T22:23:50.200')).Date.Millisecond.Value, 0);
    });

    it('can Add two DateTime', () => {
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).Add(DateTime.FromISOString(new Chars('2019-01-02T23:00:00'))).Year.Value, 4038);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).Add(DateTime.FromISOString(new Chars('2019-01-02T23:00:00'))).Month.Value, 2);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).Add(DateTime.FromISOString(new Chars('2019-01-02T23:00:00'))).Day.Value, 3);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).Add(DateTime.FromISOString(new Chars('2019-01-02T23:00:00'))).Hour.Value, 23);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).Add(DateTime.FromISOString(new Chars('2019-01-02T23:00:00'))).Minute.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).Add(DateTime.FromISOString(new Chars('2019-01-02T23:00:00'))).Second.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).Add(DateTime.FromISOString(new Chars('2019-01-02T23:00:00'))).Millisecond.Value, 0);
    });

    it('can Add Years', () => {
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddYears(new Integer(2)).Year.Value, 2021);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddYears(new Integer(2)).Month.Value, 1);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddYears(new Integer(2)).Day.Value, 1);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddYears(new Integer(2)).Hour.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddYears(new Integer(2)).Minute.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddYears(new Integer(2)).Second.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddYears(new Integer(2)).Millisecond.Value, 0);
    });

    it('can Add Months', () => {
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMonths(new Integer(2)).Year.Value, 2019);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMonths(new Integer(2)).Month.Value, 3);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMonths(new Integer(2)).Day.Value, 1);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMonths(new Integer(2)).Hour.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMonths(new Integer(2)).Minute.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMonths(new Integer(2)).Second.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMonths(new Integer(2)).Millisecond.Value, 0);
    });

    it('can Add Days', () => {
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddDays(new Integer(2)).Year.Value, 2019);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddDays(new Integer(2)).Month.Value, 1);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddDays(new Integer(2)).Day.Value, 3);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddDays(new Integer(2)).Hour.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddDays(new Integer(2)).Minute.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddDays(new Integer(2)).Second.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddDays(new Integer(2)).Millisecond.Value, 0);
    });

    it('can Add Hours', () => {
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddHours(new Integer(2)).Year.Value, 2019);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddHours(new Integer(2)).Month.Value, 1);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddHours(new Integer(2)).Day.Value, 1);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddHours(new Integer(2)).Hour.Value, 2);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddHours(new Integer(2)).Minute.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddHours(new Integer(2)).Second.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddHours(new Integer(2)).Millisecond.Value, 0);
    });

    it('can Add Minutes', () => {
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMinutes(new Integer(2)).Year.Value, 2019);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMinutes(new Integer(2)).Month.Value, 1);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMinutes(new Integer(2)).Day.Value, 1);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMinutes(new Integer(2)).Hour.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMinutes(new Integer(2)).Minute.Value, 2);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMinutes(new Integer(2)).Second.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMinutes(new Integer(2)).Millisecond.Value, 0);
    });

    it('can Add Seconds', () => {
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddSeconds(new Integer(2)).Year.Value, 2019);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddSeconds(new Integer(2)).Month.Value, 1);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddSeconds(new Integer(2)).Day.Value, 1);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddSeconds(new Integer(2)).Hour.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddSeconds(new Integer(2)).Minute.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddSeconds(new Integer(2)).Second.Value, 2);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddSeconds(new Integer(2)).Millisecond.Value, 0);
    });

    it('can Add Milliseconds', () => {
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMilliseconds(new Integer(2)).Year.Value, 2019);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMilliseconds(new Integer(2)).Month.Value, 1);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMilliseconds(new Integer(2)).Day.Value, 1);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMilliseconds(new Integer(2)).Hour.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMilliseconds(new Integer(2)).Minute.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMilliseconds(new Integer(2)).Second.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-01-01T00:00:00')).AddMilliseconds(new Integer(2)).Millisecond.Value, 2);
    });

    it('can Subtract two DateTime', () => {
        assert.equal(DateTime.FromISOString(new Chars('2019-02-02T02:00:00')).Subtract(DateTime.FromISOString(new Chars('0000-01-01T01:00:00'))).Year.Value, 2019);
        assert.equal(DateTime.FromISOString(new Chars('2019-02-02T02:00:00')).Subtract(DateTime.FromISOString(new Chars('0000-01-01T01:00:00'))).Month.Value, 1);
        assert.equal(DateTime.FromISOString(new Chars('2019-02-02T02:00:00')).Subtract(DateTime.FromISOString(new Chars('0000-01-01T01:00:00'))).Day.Value, 1);
        assert.equal(DateTime.FromISOString(new Chars('2019-02-02T02:00:00')).Subtract(DateTime.FromISOString(new Chars('0000-01-01T01:00:00'))).Hour.Value, 1);
        assert.equal(DateTime.FromISOString(new Chars('2019-02-02T02:00:00')).Subtract(DateTime.FromISOString(new Chars('0000-01-01T01:00:00'))).Minute.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-02-02T02:00:00')).Subtract(DateTime.FromISOString(new Chars('0000-01-01T01:00:00'))).Second.Value, 0);
        assert.equal(DateTime.FromISOString(new Chars('2019-02-02T02:00:00')).Subtract(DateTime.FromISOString(new Chars('0000-01-01T01:00:00'))).Millisecond.Value, 0);
    });

    it('can check Equality two DateTimes', () => {
        assert.isTrue(DateTime.FromISOString(new Chars('2019-02-02T02:00:00')).Equals(DateTime.FromISOString(new Chars('2019-02-02T02:00:00'))));
        assert.isFalse(DateTime.FromISOString(new Chars('2019-02-02T02:00:00')).Equals(DateTime.FromISOString(new Chars('2019-02-02T03:00:00'))));
    });

    it('can check before two DateTimes', () => {
        assert.isTrue(DateTime.FromISOString(new Chars('2019-02-02T02:00:00')).IsBefore(DateTime.FromISOString(new Chars('2019-02-03T02:00:00'))));
        assert.isFalse(DateTime.FromISOString(new Chars('2019-02-02T02:00:00')).IsBefore(DateTime.FromISOString(new Chars('2019-02-02T02:00:00'))));
    });

    it('can check after two DateTimes', () => {
        assert.isTrue(DateTime.FromISOString(new Chars('2019-02-02T02:00:00')).IsAfter(DateTime.FromISOString(new Chars('2019-02-01T02:00:00'))));
        assert.isFalse(DateTime.FromISOString(new Chars('2019-02-02T02:00:00')).IsAfter(DateTime.FromISOString(new Chars('2019-02-03T02:00:00'))));
    });

    it('can check if in Daylight Saving Time', () => {
        assert.isTrue(DateTime.FromISOString(new Chars('2019-06-02T02:00:00'), new Chars('Europe/Berlin')).IsDaylightSavingTime());
        assert.isFalse(DateTime.FromISOString(new Chars('2019-11-02T02:00:00'), new Chars('Europe/Berlin')).IsDaylightSavingTime());
        assert.isFalse(DateTime.FromISOString(new Chars('2019-06-02T02:00:00'), new Chars('UTC')).IsDaylightSavingTime());
        assert.isFalse(DateTime.FromISOString(new Chars('2019-11-02T02:00:00'), new Chars('UTC')).IsDaylightSavingTime());
    });

    it('can check for Valid', () => {
        assert.isTrue(DateTime.FromISOString(new Chars('2019-11-02T02:00:00')).Valid);
    });

    it('extends basic Date',  () => {
        assert.equal(new Date(2019,0,1,1,0,0).ToDateTime().Year.Value, 2019);
        assert.equal(new Date(2019,0,1,1,0,0).ToDateTime().Month.Value, 1);
        assert.equal(new Date(2019,0,1,1,0,0).ToDateTime().Day.Value, 1);
        assert.equal(new Date(2019,0,1,1,0,0).ToDateTime().Hour.Value, 0);
        assert.equal(new Date(2019,0,1,1,0,0).ToDateTime().Minute.Value, 0);
        assert.equal(new Date(2019,0,1,1,0,0).ToDateTime().Second.Value, 0);
        assert.equal(new Date(2019,0,1,1,0,0).ToDateTime().Millisecond.Value, 0);
    });
});
