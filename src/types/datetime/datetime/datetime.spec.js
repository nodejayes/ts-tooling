const {DateTime} = require('./datetime');
const {describe, it} = require('mocha');
const {assert} = require('chai');
const luxon = require('luxon');

function assertDateValues(date, year, month, day, hour, minute, second, millisecond, zone) {
    assert.equal(date.Year, year);
    assert.equal(date.Month, month);
    assert.equal(date.Day, day);
    assert.equal(date.Hour, hour);
    assert.equal(date.Minute, minute);
    assert.equal(date.Second, second);
    assert.equal(date.Millisecond, millisecond);
    assert.equal(date.Zone, zone);
}

function assertDate(dt, vgl) {
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
        const vgl = luxon.DateTime.utc();
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
        const vgl = luxon.DateTime.utc(2019, 5, 1, 12, 23, 54, 100);
        assertDate(dt, vgl);
    });

    it('can create now in other TimeZone', () => {
        const dt = new DateTime('Europe/Berlin');
        const vgl = luxon.DateTime.utc().setZone('Europe/Berlin');
        assertDate(dt, vgl);
    });

    it('create only date with no time in other timezone', () => {
        const dt = new DateTime('Europe/Berlin', 2019, 1, 1);
        const vgl = luxon.DateTime.utc(2019, 1, 1).setZone('Europe/Berlin');
        assertDate(dt, vgl);
    });

    it('can convert the DateTime in UTC', () => {
        const dt1 = new DateTime('Europe/Berlin');
        const luxonUtc1 = luxon.DateTime.utc();
        const dt2 = new DateTime('Europe/Berlin', 2019, 1, 1, 1, 0, 0, 0);
        const luxonUtc2 = luxon.DateTime.utc(2019, 1, 1, 0, 0, 0, 0);
        assertDate(dt1.UTC, luxonUtc1);
        assertDate(dt2.UTC, luxonUtc2);
    });

    it('can convert the DateTime in Europe/Berlin', () => {
        const dt = new DateTime();
        assert.isTrue(dt.ToZone('Europe/Berlin').UTCOffsetMinutes === 60 || dt.ToZone('Europe/Berlin').UTCOffsetMinutes === 120);
    });

    it('can create DateTime from Luxon Date Object', () => {
        const vgl = luxon.DateTime.utc();
        const dt = DateTime.FromLuxon(vgl);
        assertDate(dt, vgl);
    });

    it('can create DateTime from Luxon Date Object with a specific Timezone', () => {
        const vgl = luxon.DateTime.utc().setZone('Europe/Berlin');
        const dt = DateTime.FromLuxon(vgl);
        assert.isTrue(dt.UTCOffsetMinutes === 60 || dt.UTCOffsetMinutes === 120);
    });

    it('can create DateTime from Javascript Date Object', () => {
        const vgl = luxon.DateTime.utc();
        const dt = DateTime.FromJavascriptDate(vgl.toJSDate());
        assertDate(dt, vgl);
    });

    it('can create DateTime from Javascript Date Object with a specific Timezone', () => {
        const vgl = luxon.DateTime.utc();
        const dt = DateTime.FromJavascriptDate(vgl.toJSDate(), 'Europe/Berlin');
        assert.isTrue(dt.UTCOffsetMinutes === 60 || dt.UTCOffsetMinutes === 120);
    });

    it('can create DateTime from ISO Chars', () => {
        const vgl = luxon.DateTime.utc();
        const dt = DateTime.FromISOString(vgl.toISO());
        assertDate(dt, vgl);
    });

    it('can create DateTime from ISO Chars with a specific Timezone', () => {
        const vgl = luxon.DateTime.utc();
        const dt = DateTime.FromISOString(vgl.toISO(), 'Europe/Berlin');
        assert.isTrue(dt.UTCOffsetMinutes === 60 || dt.UTCOffsetMinutes === 120);
    });

    it('can create DateTime from Milliseconds', () => {
        const vgl = luxon.DateTime.utc();
        const dt = DateTime.FromMilliseconds(vgl.toMillis());
        assertDate(dt, vgl);
    });

    it('can create DateTime from Milliseconds with specific Timezone', () => {
        const vgl = luxon.DateTime.utc();
        const dt = DateTime.FromMilliseconds(vgl.toMillis(), 'Europe/Berlin');
        assert.isTrue(dt.UTCOffsetMinutes === 60 || dt.UTCOffsetMinutes === 120);
    });

    it('can return the Default DateTime Chars', () => {
        const dt = DateTime.FromISOString('2019-01-01T12:23:54');
        assert.equal(dt.ToString(), '2019-01-01 12:23:54');
    });

    it('can return the String with milliseconds', () => {
        const dt = DateTime.FromISOString('2019-01-01T12:23:54.555');
        assert.equal(dt.ToString('yyyy-MM-dd hh:mm:ss.SSS'), '2019-01-01 12:23:54.555');
    });

    it('can get the ISO String of the DateTime', () => {
        const dt = DateTime.FromISOString('2019-01-01T12:23:54.555');
        assert.equal(dt.ToISO(), '2019-01-01T12:23:54.555Z');
    });

    it('can get the ISO String of the DateTime in other Timezone Winter', () => {
        const dt = DateTime.FromISOString('2019-01-01T12:23:54.555', 'Europe/Berlin');
        assert.equal(dt.ToISO(), '2019-01-01T12:23:54.555+01:00');
    });

    it('can get the ISO String of the DateTime in other Timezone Summer', () => {
        const dt = DateTime.FromISOString('2019-06-01T12:23:54.555', 'Europe/Berlin');
        assert.equal(dt.ToISO(), '2019-06-01T12:23:54.555+02:00');
    });

    it('can read from generated ISO Date without Timezone', () => {
        const dt1 = DateTime.FromISOString('2019-06-01T12:23:54.555');
        const dt2 = DateTime.FromISOString(dt1.ToISO());
        assert.equal(dt1.ToISO(), dt2.ToISO());
    });

    it('can read from generated ISO Date with Timezone', () => {
        const dt1 = DateTime.FromISOString('2019-06-01T12:23:54.555', 'Europe/Berlin');
        const dt2 = DateTime.FromISOString(dt1.ToISO(), dt1.Zone);
        assert.equal(dt1.ToISO(), dt2.ToISO());
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
        assert.equal(DateTime.FromISOString('2020-02-01T12:23:54').DaysInMonth, 29);
        assert.equal(DateTime.FromISOString('2016-02-01T12:23:54').DaysInMonth, 29);
        assert.equal(DateTime.FromISOString('2019-04-01T12:23:54').DaysInMonth, 30);
    });

    it('can get Days in the Year', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T12:23:54').DaysInYear, 365);
        assert.equal(DateTime.FromISOString('2020-01-01T12:23:54').DaysInYear, 366);
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

        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddYears(-1).Year, 2018);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddYears(-1).Month, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddYears(-1).Day, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddYears(-1).Hour, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddYears(-1).Minute, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddYears(-1).Second, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddYears(-1).Millisecond, 0);
    });

    it('can Add Months', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(2).Year, 2019);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(2).Month, 3);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(2).Day, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(2).Hour, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(2).Minute, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(2).Second, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(2).Millisecond, 0);

        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(-1).Year, 2018);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(-1).Month, 12);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(-1).Day, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(-1).Hour, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(-1).Minute, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(-1).Second, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(-1).Millisecond, 0);
    });

    it('can Add Days', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(2).Year, 2019);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(2).Month, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(2).Day, 3);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(2).Hour, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(2).Minute, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(2).Second, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(2).Millisecond, 0);

        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(-1).Year, 2018);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(-1).Month, 12);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(-1).Day, 31);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(-1).Hour, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(-1).Minute, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(-1).Second, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddDays(-1).Millisecond, 0);
    });

    it('can Add Hours', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(2).Year, 2019);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(2).Month, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(2).Day, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(2).Hour, 2);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(2).Minute, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(2).Second, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(2).Millisecond, 0);

        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(-1).Year, 2018);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(-1).Month, 12);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(-1).Day, 31);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(-1).Hour, 23);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(-1).Minute, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(-1).Second, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddHours(-1).Millisecond, 0);
    });

    it('can Add Minutes', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(2).Year, 2019);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(2).Month, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(2).Day, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(2).Hour, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(2).Minute, 2);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(2).Second, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(2).Millisecond, 0);

        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(-1).Year, 2018);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(-1).Month, 12);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(-1).Day, 31);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(-1).Hour, 23);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(-1).Minute, 59);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(-1).Second, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(-1).Millisecond, 0);
    });

    it('can Add Seconds', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(2).Year, 2019);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(2).Month, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(2).Day, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(2).Hour, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(2).Minute, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(2).Second, 2);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(2).Millisecond, 0);

        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(-1).Year, 2018);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(-1).Month, 12);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(-1).Day, 31);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(-1).Hour, 23);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(-1).Minute, 59);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(-1).Second, 59);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(-1).Millisecond, 0);
    });

    it('can Add Milliseconds', () => {
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(2).Year, 2019);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(2).Month, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(2).Day, 1);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(2).Hour, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(2).Minute, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(2).Second, 0);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(2).Millisecond, 2);

        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(-1).Year, 2018);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(-1).Month, 12);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(-1).Day, 31);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(-1).Hour, 23);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(-1).Minute, 59);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(-1).Second, 59);
        assert.equal(DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(-1).Millisecond, 999);
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

    it('keep time zone', () => {
        const TARGET_ZONE = 'Europe/Berlin';
        const dateEurope = new DateTime('Europe/Berlin', 2019, 1, 1, 1);
        const dateUtc = new DateTime('UTC', 2019, 1, 1, 1);

        const convertedEurope = dateEurope.ToZone(TARGET_ZONE);
        const convertedEuropeKeep = dateEurope.ToZone(TARGET_ZONE, true);
        const convertedUtc = dateUtc.ToZone(TARGET_ZONE);
        const convertedUtcKeep = dateUtc.ToZone(TARGET_ZONE, true);

        assertDateValues(dateEurope, 2019, 1 , 1, 1, 0, 0, 0, 'Europe/Berlin');
        assertDateValues(dateUtc, 2019, 1 , 1, 1, 0, 0, 0, 'UTC');

        assertDateValues(convertedEurope, 2019, 1 , 1, 1, 0, 0, 0, 'Europe/Berlin');
        assertDateValues(convertedEuropeKeep, 2019, 1 , 1, 1, 0, 0, 0, 'Europe/Berlin');
        assertDateValues(convertedUtc, 2019, 1 , 1, 2, 0, 0, 0, 'Europe/Berlin');
        assertDateValues(convertedUtcKeep, 2019, 1 , 1, 1, 0, 0, 0, 'Europe/Berlin');
    });

    it('[Method]: ToUnixTimestamp', () => {
        const dt = DateTime.FromISOString('2019-06-02T02:30:56', 'Europe/Berlin');
        assert.equal(dt.ToUnixTimestamp(), 1559435456000);
        assert.equal(dt.ToUnixTimestamp(false), 1559435456);
    });

    it('[Method]: ToJavascriptDate', () => {
        const dt = DateTime.FromISOString('2019-06-02T02:30:56');
        const jsDate = dt.ToJavascriptDate();
        assert.equal(jsDate.toISOString(), '2019-06-02T02:30:56.000Z');
        assert.equal(jsDate.getTime(), 1559442656000);
        // Javascript was UTC
        assert.equal(DateTime.FromISOString('2019-06-02T02:30:56', 'Europe/Berlin').ToJavascriptDate().toISOString(), '2019-06-02T00:30:56.000Z');
    });

    it('[Method]: ToJSON', () => {
        assert.equal(DateTime.FromISOString('2019-06-02T02:30:56', 'Europe/Berlin').ToJSON(), '2019-06-02T02:30:56.000+02:00');
        assert.equal(DateTime.FromISOString('2019-06-02T02:30:56').ToJSON(), '2019-06-02T02:30:56.000Z');
    });

    describe('[Method]: IsJavascriptDate', () => {
        it('found Javascript Date', () => {
            assert.isTrue(DateTime.IsJavascriptDate(new Date()));
        });
        it('negative check undefined', () => {
            assert.isFalse(DateTime.IsJavascriptDate(undefined));
        });
        it('negative check null', () => {
            assert.isFalse(DateTime.IsJavascriptDate(null));
        });
        it('negative check number', () => {
            assert.isFalse(DateTime.IsJavascriptDate(0));
        });
        it('negative check string', () => {
            assert.isFalse(DateTime.IsJavascriptDate('test'));
        });
        it('negative check object', () => {
            assert.isFalse(DateTime.IsJavascriptDate({}));
        });
        it('negative check array', () => {
            assert.isFalse(DateTime.IsJavascriptDate([]));
        });
    });
});
