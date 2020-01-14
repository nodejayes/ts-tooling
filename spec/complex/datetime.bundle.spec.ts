import {assert} from 'chai';
import {DateTime as LuxonDateTime} from 'luxon';
const {DateTime} = require('../../lib/ts-tooling');
import '../../lib/ts-tooling';
import 'mocha';

function assertDate(dt: typeof DateTime, vgl: LuxonDateTime) {
    assert.equal(dt.Year, vgl.year);
    assert.equal(dt.Month, vgl.month);
    assert.equal(dt.Day, vgl.day);
    assert.equal(dt.Hour, vgl.hour);
    assert.equal(dt.Minute, vgl.minute);
    assert.equal(dt.Second, vgl.second);
    assert.isTrue(vgl.millisecond >= dt.Millisecond && dt.Millisecond <= (vgl.millisecond + 5));
}

describe('DateTime Tests', () => {
    it('can create empty DateTime is in UTC', () => {
        const dt = new DateTime();
        const vgl = LuxonDateTime.utc();
        assertDate(dt, vgl);
    });

    it('can create predefined DateTime in UTC', () => {
        const dt = new DateTime(
            'UTC',
            2019,
            5,
            1,
            12,
            23,
            54,
            100);
        const vgl = LuxonDateTime.utc(2019, 5, 1, 12, 23, 54, 100);
        assertDate(dt, vgl);
    });

    it('can create now in other TimeZone', () => {
        const dt = new DateTime('Europe/Berlin');
        const vgl = LuxonDateTime.utc().setZone('Europe/Berlin');
        assertDate(dt, vgl);
    });

    it('can convert the DateTime in UTC', () => {
        const dt = new DateTime('Europe/Berlin');
        assert.equal(dt.UTC.UTCOffsetMinutes, 0);
    });

    it('can convert the DateTime in Europe/Berlin', () => {
        const dt = new DateTime();
        assert.isTrue(dt.ToZone('Europe/Berlin').UTCOffsetMinutes === 60 || dt.ToZone('Europe/Berlin').UTCOffsetMinutes === 120);
    });

    it('can create DateTime from Luxon Date Object', () => {
        const vgl = LuxonDateTime.utc();
        const dt = DateTime.FromLuxon(vgl);
        assertDate(dt, vgl);
    });

    it('can create DateTime from Luxon Date Object with a specific Timezone', () => {
        const vgl = LuxonDateTime.utc().setZone('Europe/Berlin');
        const dt = DateTime.FromLuxon(vgl);
        assert.isTrue(dt.UTCOffsetMinutes === 60 || dt.UTCOffsetMinutes === 120);
    });

    it('can create DateTime from Javascript Date Object', () => {
        const vgl = LuxonDateTime.utc();
        const dt = DateTime.FromJavascriptDate(vgl.toJSDate());
        assertDate(dt, vgl);
    });

    it('can create DateTime from Javascript Date Object with a specific Timezone', () => {
        const vgl = LuxonDateTime.utc();
        const dt = DateTime.FromJavascriptDate(vgl.toJSDate(), 'Europe/Berlin');
        assert.isTrue(dt.UTCOffsetMinutes === 60 || dt.UTCOffsetMinutes === 120);
    });

    it('can create DateTime from ISO Chars', () => {
        const vgl = LuxonDateTime.utc();
        const dt = DateTime.FromISOString(vgl.toISO());
        assertDate(dt, vgl);
    });

    it('can create DateTime from ISO Chars with a specific Timezone', () => {
        const vgl = LuxonDateTime.utc();
        const dt = DateTime.FromISOString(vgl.toISO(), 'Europe/Berlin');
        assert.isTrue(dt.UTCOffsetMinutes === 60 || dt.UTCOffsetMinutes === 120);
    });

    it('can create DateTime from Milliseconds', () => {
        const vgl = LuxonDateTime.utc();
        const dt = DateTime.FromMilliseconds(vgl.toMillis());
        assertDate(dt, vgl);
    });

    it('can create DateTime from Milliseconds with specific Timezone', () => {
        const vgl = LuxonDateTime.utc();
        const dt = DateTime.FromMilliseconds(vgl.toMillis(), 'Europe/Berlin');
        assert.isTrue(dt.UTCOffsetMinutes === 60 || dt.UTCOffsetMinutes === 120);
    });

    it('can return the Default DateTime Chars', () => {
        const dt = DateTime.FromISOString('2019-01-01T12:23:54');
        assert.equal(dt.ToString(), '2019-01-01 12:23:54');
    });

    it('can return custom DateTime Chars', () => {
        const dt = DateTime.FromISOString('2019-01-01T12:23:54');
        assert.equal(dt.ToString('yyyy'), '2019');
    });

    it('can get the current Timezone Name', () => {
        const dt = DateTime.FromISOString('2019-01-01T12:23:54');
        assert.equal(dt.Zone, 'UTC');
    });

    it('can get the Weekday', () => {
        const dt = DateTime.FromISOString('2019-01-01T12:23:54');
        assert.equal(dt.DayOfWeek, 2);
    });

    it('can get the Day in Year', () => {
        const dt = DateTime.FromISOString('2019-12-30T12:23:54');
        assert.equal(dt.DayOfYear, 364);
    });

    it('can get the Year Quarter', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T12:23:54').YearQuarter, 1);
        assert.equal(DateTime.FromISOString('2019-04-01T12:23:54').YearQuarter, 2);
        assert.equal(DateTime.FromISOString('2019-07-01T12:23:54').YearQuarter, 3);
        assert.equal(DateTime.FromISOString('2019-10-01T12:23:54').YearQuarter, 4);
    });

    it('can get Days in Month', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T12:23:54').DaysInMonth, 31);
        assert.equal(DateTime.FromISOString('2019-02-01T12:23:54').DaysInMonth, 28);
        assert.equal(DateTime.FromISOString('2016-02-01T12:23:54').DaysInMonth, 29);
        assert.equal(DateTime.FromISOString('2019-04-01T12:23:54').DaysInMonth, 30);
    });

    it('can get Days in the Year', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T12:23:54').DaysInYear, 365);
    });

    it('can get Week Number', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').YearWeekNumber, 1);
    });

    it('throw Error on unsupported Timezone', () => {
        assert.throws(() => {
            DateTime.FromISOString('2019-01-01T00:00:00', 'asasasasasa');
        }, 'Timezone asasasasasa not supported!');
    });

    it('can get the Time of the Day', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T22:23:50.200').TimeOfDay.Day, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T22:23:50.200').TimeOfDay.Hour, 22);
        assert.equal(DateTime.FromISOString('2019-01-01T22:23:50.200').TimeOfDay.Minute, 23);
        assert.equal(DateTime.FromISOString('2019-01-01T22:23:50.200').TimeOfDay.Second, 50);
        assert.equal(DateTime.FromISOString('2019-01-01T22:23:50.200').TimeOfDay.Millisecond, 200);
    });

    it('can get the Date', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T22:23:50.200').Date.Year, 2019);
        assert.equal(DateTime.FromISOString('2019-01-01T22:23:50.200').Date.Month, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T22:23:50.200').Date.Day, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T22:23:50.200').Date.Hour, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T22:23:50.200').Date.Minute, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T22:23:50.200').Date.Second, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T22:23:50.200').Date.Millisecond, 0);
    });

    it('can Add two DateTime', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').Add(DateTime.FromISOString('2019-01-02T23:00:00')).Year, 4038);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').Add(DateTime.FromISOString('2019-01-02T23:00:00')).Month, 2);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').Add(DateTime.FromISOString('2019-01-02T23:00:00')).Day, 3);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').Add(DateTime.FromISOString('2019-01-02T23:00:00')).Hour, 23);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').Add(DateTime.FromISOString('2019-01-02T23:00:00')).Minute, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').Add(DateTime.FromISOString('2019-01-02T23:00:00')).Second, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').Add(DateTime.FromISOString('2019-01-02T23:00:00')).Millisecond, 0);
    });

    it('can Add Years', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddYears(2).Year, 2021);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddYears(2).Month, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddYears(2).Day, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddYears(2).Hour, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddYears(2).Minute, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddYears(2).Second, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddYears(2).Millisecond, 0);
    });

    it('can Add Months', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(2).Year, 2019);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(2).Month, 3);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(2).Day, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(2).Hour, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(2).Minute, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(2).Second, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(2).Millisecond, 0);
    });

    it('can Add Days', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(2).Year, 2019);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(2).Month, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(2).Day, 3);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(2).Hour, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(2).Minute, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(2).Second, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(2).Millisecond, 0);
    });

    it('can Add Hours', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(2).Year, 2019);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(2).Month, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(2).Day, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(2).Hour, 2);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(2).Minute, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(2).Second, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(2).Millisecond, 0);
    });

    it('can Add Minutes', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(2).Year, 2019);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(2).Month, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(2).Day, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(2).Hour, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(2).Minute, 2);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(2).Second, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(2).Millisecond, 0);
    });

    it('can Add Seconds', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(2).Year, 2019);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(2).Month, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(2).Day, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(2).Hour, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(2).Minute, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(2).Second, 2);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(2).Millisecond, 0);
    });

    it('can Add Milliseconds', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(2).Year, 2019);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(2).Month, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(2).Day, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(2).Hour, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(2).Minute, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(2).Second, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(2).Millisecond, 2);
    });

    it('can create zero DateTime', () => {
        const ZERO = new DateTime('UTC', 0, 1, 1, 0, 0, 0, 0);
        assert.equal(ZERO.Year, 0);
        assert.equal(ZERO.Month, 1);
        assert.equal(ZERO.Day, 1);
        assert.equal(ZERO.Hour, 0);
        assert.equal(ZERO.Minute, 0);
        assert.equal(ZERO.Second, 0);
        assert.equal(ZERO.Millisecond, 0);
    });

    it('can Subtract two DateTime', () => {
        assert.equal(DateTime.FromISOString('2019-02-02T02:00:00').Subtract(DateTime.FromISOString('0000-01-01T01:00:00')).Year, 2019);
        assert.equal(DateTime.FromISOString('2019-02-02T02:00:00').Subtract(DateTime.FromISOString('0000-01-01T01:00:00')).Month, 1);
        assert.equal(DateTime.FromISOString('2019-02-02T02:00:00').Subtract(DateTime.FromISOString('0000-01-01T01:00:00')).Day, 1);
        assert.equal(DateTime.FromISOString('2019-02-02T02:00:00').Subtract(DateTime.FromISOString('0000-01-01T01:00:00')).Hour, 1);
        assert.equal(DateTime.FromISOString('2019-02-02T02:00:00').Subtract(DateTime.FromISOString('0000-01-01T01:00:00')).Minute, 0);
        assert.equal(DateTime.FromISOString('2019-02-02T02:00:00').Subtract(DateTime.FromISOString('0000-01-01T01:00:00')).Second, 0);
        assert.equal(DateTime.FromISOString('2019-02-02T02:00:00').Subtract(DateTime.FromISOString('0000-01-01T01:00:00')).Millisecond, 0);
    });

    it('can check Equality two DateTimes', () => {
        assert.isTrue(DateTime.FromISOString('2019-02-02T02:00:00').Equals(DateTime.FromISOString('2019-02-02T02:00:00')));
        assert.isFalse(DateTime.FromISOString('2019-02-02T02:00:00').Equals(DateTime.FromISOString('2019-02-02T03:00:00')));
    });

    it('can check before two DateTimes', () => {
        assert.isTrue(DateTime.FromISOString('2019-02-02T02:00:00').IsBefore(DateTime.FromISOString('2019-02-03T02:00:00')));
        assert.isFalse(DateTime.FromISOString('2019-02-02T02:00:00').IsBefore(DateTime.FromISOString('2019-02-02T02:00:00')));
    });

    it('can check after two DateTimes', () => {
        assert.isTrue(DateTime.FromISOString('2019-02-02T02:00:00').IsAfter(DateTime.FromISOString('2019-02-01T02:00:00')));
        assert.isFalse(DateTime.FromISOString('2019-02-02T02:00:00').IsAfter(DateTime.FromISOString('2019-02-03T02:00:00')));
    });

    it('can check if in Daylight Saving Time', () => {
        assert.isTrue(DateTime.FromISOString('2019-06-02T02:00:00', 'Europe/Berlin').IsDaylightSavingTime());
        assert.isFalse(DateTime.FromISOString('2019-11-02T02:00:00', 'Europe/Berlin').IsDaylightSavingTime());
        assert.isFalse(DateTime.FromISOString('2019-06-02T02:00:00', 'UTC').IsDaylightSavingTime());
        assert.isFalse(DateTime.FromISOString('2019-11-02T02:00:00', 'UTC').IsDaylightSavingTime());
    });

    it('can check for Valid', () => {
        assert.isTrue(DateTime.FromISOString('2019-11-02T02:00:00').Valid);
    });

    it('extends basic Date',  () => {
        assert.equal(DateTime.FromJavascriptDate(new Date(Date.UTC(2019,0,1,1,0,0))).Year, 2019);
        assert.equal(DateTime.FromJavascriptDate(new Date(Date.UTC(2019,0,1,1,0,0))).Month, 1);
        assert.equal(DateTime.FromJavascriptDate(new Date(Date.UTC(2019,0,1,1,0,0))).Day, 1);
        assert.equal(DateTime.FromJavascriptDate(new Date(Date.UTC(2019,0,1,1,0,0))).Hour, 1);
        assert.equal(DateTime.FromJavascriptDate(new Date(Date.UTC(2019,0,1,1,0,0))).Minute, 0);
        assert.equal(DateTime.FromJavascriptDate(new Date(Date.UTC(2019,0,1,1,0,0))).Second, 0);
        assert.equal(DateTime.FromJavascriptDate(new Date(Date.UTC(2019,0,1,1,0,0))).Millisecond, 0);
    });
});
