import {DateTime as LuxonDateTime} from 'luxon';
import {TimeSpan} from './time.span';
import {StringFactory} from '../utils/string.factory';

/**
 * @ignore
 */
function checkLuxonTimeZone(zone: string, date: LuxonDateTime) {
    if (!date.isValid && date.invalidReason === 'unsupported zone') {
        throw new Error('Timezone ' + zone + ' not supported!');
    }
}

/**
 * @ignore
 */
function cloneLuxonDate(date: LuxonDateTime) {
    return LuxonDateTime.fromObject({
        year: date.year,
        month: date.month,
        day: date.day,
        hour: date.hour,
        minute: date.minute,
        second: date.second,
        millisecond: date.millisecond,
        zone: date.zone,
    });
}

/**
 * represent a DateTime DataType
 */
export class DateTime {
    private _date = LuxonDateTime.utc();

    /**
     * Year of the Date
     */
    get Year(): number {
        return this._date.year;
    }

    /**
     * Month of the Date
     */
    get Month(): number {
        return this._date.month;
    }

    /**
     * Day of the Date in Month
     */
    get Day(): number {
        return this._date.day;
    }

    /**
     * Hour of the Day
     */
    get Hour(): number {
        return this._date.hour;
    }

    /**
     * Minute of the Day
     */
    get Minute(): number {
        return this._date.minute;
    }

    /**
     * Second of the Day
     */
    get Second(): number {
        return this._date.second;
    }

    /**
     * Millisecond of the Day
     */
    get Millisecond(): number {
        return this._date.millisecond;
    }

    /**
     * get the DateTime as UTC
     */
    get UTC(): DateTime {
        const tmp = cloneLuxonDate(this._date).toUTC();
        return new DateTime(
            'UTC',
            tmp.year,
            tmp.month,
            tmp.day,
            tmp.hour,
            tmp.minute,
            tmp.second,
            tmp.millisecond,
            true);
    }

    /**
     * the offset to UTC Timezone in Minutes
     */
    get UTCOffsetMinutes(): number {
        return this._date.offset;
    }

    /**
     * the current Timezone Name
     */
    get Zone(): string {
        return this._date.zoneName;
    }

    /**
     * the Weekday of the DateTime
     */
    get DayOfWeek(): number {
        return this._date.weekday;
    }

    /**
     * the Day in the Year of the DateTime
     */
    get DayOfYear(): number {
        return this._date.ordinal;
    }

    /**
     * the Number of the Days in the DateTime Year
     */
    get DaysInYear(): number {
        return this._date.daysInYear;
    }

    /**
     * the Number of Days in the Month of the DateTime
     */
    get DaysInMonth(): number {
        return this._date.daysInMonth;
    }

    /**
     * the Quarter of the Year of the DateTime
     * @constructor
     */
    get YearQuarter(): number {
        return this._date.quarter;
    }

    /**
     * the Week Number of the Year of DateTime
     */
    get YearWeekNumber(): number {
        return this._date.weekNumber;
    }

    /**
     * the Date without the Time
     */
    get Date(): DateTime {
        return new DateTime(this.Zone, this.Year, this.Month, this.Day, 0, 0, 0, 0);
    }

    /**
     * the Time of the Day
     */
    get TimeOfDay(): TimeSpan {
        return new TimeSpan(this.Hour, this.Minute, this.Second, this.Millisecond, 0);
    }

    /**
     * check if the DateTime is a valid DateTime
     */
    get Valid(): boolean {
        return this._date.isValid;
    }

    /**
     * create a new DateTime
     *
     * @param zone the dates time zone
     * @param year the year of the date
     * @param month the month of the date
     * @param day the day of the date
     * @param hour the hours of the date
     * @param minute the minutes of the date
     * @param second the seconds of the date
     * @param millisecond the milliseconds of the date
     * @param keepTimeZone not convert the given date to the given time zone
     *
     * @example
     * // create a date in Europe Time Zone 2019-01-01 01:00:00.000
     * new DateTime('Europe/Berlin', 2019, 1, 1, 1, 0, 0, 0);
     * new DateTime('Europe/Berlin', 2019, 1, 1);
     * // create a date in Europe Time Zone 2019-01-01 00:00:00.000
     * new DateTime('Europe/Berlin', 2019, 1, 1, null, null, null, null, true);
     */
    constructor(zone?: string, year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number, keepTimeZone = false) {
        if (StringFactory.IsNullOrEmpty(zone)) {
            zone = 'UTC';
        }
        const isTimeSet = keepTimeZone === true || (hour >= 0 || minute >= 0 || second >= 0 || millisecond >= 0);
        this._date = LuxonDateTime.utc(
            year >= 0 ? year : undefined,
            month ? month : undefined,
            day ? day : undefined,
            hour >= 0 ? hour : undefined,
            minute >= 0 ? minute : undefined,
            second >= 0 ? second : undefined,
            millisecond >= 0 ? millisecond : undefined)
            .setZone(zone, {keepLocalTime: isTimeSet});
        checkLuxonTimeZone(zone, this._date);
    }

    /**
     * create DateTime from a Luxon Date Object
     *
     * uses the Timezone from the Luxon Object
     *
     * @param luxonDate the luxon datetime object instance
     *
     * @example
     * // returns the current time in utc
     * const vgl = LuxonDateTime.utc();
     * DateTime.FromLuxon(vgl);
     */
    static FromLuxon(luxonDate: LuxonDateTime): DateTime {
        return new DateTime(
            luxonDate.zoneName,
            luxonDate.year,
            luxonDate.month,
            luxonDate.day,
            luxonDate.hour,
            luxonDate.minute,
            luxonDate.second,
            luxonDate.millisecond);
    }

    /**
     * create a DateTime Type from a Javascript Date Object
     *
     * you have to specify the Timezone or UTC was taken!
     *
     * @param date the javascript date object
     * @param zone the time zone to use
     *
     * @example
     * // returns DateTime 2019-01-01 01:00:00.000 in UTC Time Zone
     * DateTime.FromJavascriptDate(new Date(Date.UTC(2019,0,1,1,0,0)));
     * // returns DateTime 2019-01-01 01:00:00.000 in Europe/Berlin Time Zone
     * DateTime.FromJavascriptDate(new Date(Date.UTC(2019,0,1,1,0,0), 'Europe/Berlin'));
     */
    static FromJavascriptDate(date: Date, zone?: string): DateTime {
        if (StringFactory.IsNullOrEmpty(zone)) {
            zone = 'UTC';
        }
        const tmp = LuxonDateTime.fromJSDate(date, {
            zone: zone,
        });
        checkLuxonTimeZone(zone, tmp);
        return this.FromLuxon(tmp);
    }

    /**
     * create DateTime from ISO string
     *
     * you have to specify the Timezone or UTC was taken!
     *
     * @param isoStr the iso date time string
     * @param zone the time zone to use
     *
     * @example
     * // returns DateTime 2019-01-01 01:00:00.000 in UTC Time Zone
     * DateTime.FromISOString('2019-01-01T01:00:00.000');
     * // returns DateTime 2019-01-01 01:00:00.000 in Europe/Berlin Time Zone
     * DateTime.FromISOString('2019-01-01T01:00:00.000', 'Europe/Berlin');
     */
    static FromISOString(isoStr: string, zone?: string): DateTime {
        if (StringFactory.IsNullOrEmpty(zone)) {
            zone = 'UTC';
        }
        const tmp = LuxonDateTime.fromISO(isoStr, {
            zone,
        });
        checkLuxonTimeZone(zone, tmp);
        return this.FromLuxon(tmp);
    }

    /**
     * create DateTime from Milliseconds
     *
     * @param milliseconds the total milliseconds since 1970-01-01 00:00:00.000
     * @param zone the time zone to use
     *
     * @example
     * const vgl = LuxonDateTime.utc();
     * // returns the current date time in UTC Time Zone
     * DateTime.FromMilliseconds(vgl.toMillis());
     * // returns the current date time in Europe/Berlin Time Zone
     * DateTime.FromMilliseconds(vgl.toMillis(), 'Europe/Berlin');
     */
    static FromMilliseconds(milliseconds: number, zone?: string): DateTime {
        if (StringFactory.IsNullOrEmpty(zone)) {
            zone = 'UTC';
        }
        const tmp = LuxonDateTime.fromMillis(milliseconds, {
            zone,
        });
        checkLuxonTimeZone(zone, tmp);
        return this.FromLuxon(tmp);
    }

    /**
     * get the DateTime in a specific Timezone
     *
     * @param zone the time zone to convert this time
     * @param keepTimeZone not convert the time only set the new time zone
     *
     * @example
     * const TARGET_ZONE = 'Europe/Berlin';
     * const dateEurope = new DateTime('Europe/Berlin', 2019, 1, 1, 1);
     * const dateUtc = new DateTime('UTC', 2019, 1, 1, 1);
     * // returns 2019-01-01 01:00:00.000 in Europe/Berlin Time Zone
     * dateEurope.ToZone(TARGET_ZONE);
     * dateEurope.ToZone(TARGET_ZONE, true);
     * dateUtc.ToZone(TARGET_ZONE, true);
     * // returns 2019-01-01 02:00:00.000 in Europe/Berlin Time Zone
     * dateUtc.ToZone(TARGET_ZONE);
     */
    ToZone(zone: string, keepTimeZone = false): DateTime {
        const tmp = cloneLuxonDate(this._date).setZone(zone, {keepLocalTime: keepTimeZone});
        return new DateTime(
            zone,
            tmp.year,
            tmp.month,
            tmp.day,
            tmp.hour,
            tmp.minute,
            tmp.second,
            tmp.millisecond);
    }

    /**
     * add a DateTime to this DateTime
     *
     * @param dt the DateTime to add on this DateTime
     *
     * @example
     * // returns 4038-02-03 23:00:00.000
     * DateTime.FromISOString('2019-01-01T00:00:00').Add(DateTime.FromISOString('2019-01-02T23:00:00'));
     */
    Add(dt: DateTime): DateTime {
        this._date = this._date.plus({
            year: dt.Year,
            month: dt.Month,
            day: dt.Day,
            hour: dt.Hour,
            minute: dt.Minute,
            second: dt.Second,
            millisecond: dt.Millisecond,
        });
        return this;
    }

    /**
     * check if the DateTime equals this DateTime
     *
     * @param dt the DateTime to compare with this DateTime
     *
     * @example
     * // returns true
     * DateTime.FromISOString('2019-02-02T02:00:00').Equals(DateTime.FromISOString('2019-02-02T02:00:00'));
     * // returns false
     * DateTime.FromISOString('2019-02-02T02:00:00').Equals(DateTime.FromISOString('2019-02-02T03:00:00'));
     */
    Equals(dt: DateTime): boolean {
        return this._date.diff(dt._date).milliseconds === 0;
    }

    /**
     * subtract DateTime from this DateTime
     *
     * @param dt the DateTime to subtract on this DateTime
     *
     * @example
     * // returns 2019-01-01 01:00:00.000
     * DateTime.FromISOString('2019-02-02T02:00:00').Subtract(DateTime.FromISOString('0000-01-01T01:00:00'));
     */
    Subtract(dt: DateTime): DateTime {
        this._date = this._date.minus({
            year: dt.Year,
            month: dt.Month,
            day: dt.Day,
            hour: dt.Hour,
            minute: dt.Minute,
            second: dt.Second,
            millisecond: dt.Millisecond,
        });
        return this;
    }

    /**
     * add a number of Years to this DateTime
     *
     * @param years the number of years to add
     *
     * @example
     * // returns 2021-01-01 00:00:00.000
     * DateTime.FromISOString('2019-01-01T00:00:00').AddYears(2);
     */
    AddYears(years: number): DateTime {
        this._date = this._date.plus({years});
        return this;
    }

    /**
     * add a number of Months to this DateTime
     *
     * @param months the number of months to add
     *
     * @example
     * // returns 2019-03-01 00:00:00.000
     * DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(2);
     */
    AddMonths(months: number): DateTime {
        this._date = this._date.plus({months});
        return this;
    }

    /**
     * add a number of Days to this DateTime
     *
     * @param days the number of days to add
     *
     * @example
     * // returns 2019-01-03 00:00:00.000
     * DateTime.FromISOString('2019-01-01T00:00:00').AddDays(2);
     */
    AddDays(days: number): DateTime {
        this._date = this._date.plus({days});
        return this;
    }

    /**
     * add a number of Hours to this DateTime
     *
     * @param hours the number of hours to add
     *
     * @example
     * // returns 2019-01-01 01:00:00.000
     * DateTime.FromISOString('2019-01-01T00:00:00').AddHours(1);
     */
    AddHours(hours: number): DateTime {
        this._date = this._date.plus({hours});
        return this;
    }

    /**
     * add a number of Minutes to this DateTime
     *
     * @param minutes the number of minutes to add
     *
     * @example
     * // returns 2019-01-01 00:01:00.000
     * DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(1);
     */
    AddMinutes(minutes: number): DateTime {
        this._date = this._date.plus({minutes});
        return this;
    }

    /**
     * add a number of Seconds to this DateTime
     *
     * @param seconds the number of seconds to add
     *
     * @example
     * // returns 2019-01-01 00:00:01.000
     * DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(1);
     */
    AddSeconds(seconds: number): DateTime {
        this._date = this._date.plus({seconds});
        return this;
    }

    /**
     * add a number of Milliseconds to this DateTime
     *
     * @param milliseconds the number of milliseconds to add
     *
     * @example
     * // returns 2019-01-01 00:00:00.001
     * DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(1);
     */
    AddMilliseconds(milliseconds: number): DateTime {
        this._date = this._date.plus({milliseconds});
        return this;
    }

    /**
     * is this DateTime before
     *
     * @param dt the DateTime to compare with this DateTime
     *
     * @example
     * // returns true
     * DateTime.FromISOString('2019-02-02T02:00:00').IsBefore(DateTime.FromISOString('2019-02-03T02:00:00'));
     * // returns false
     * DateTime.FromISOString('2019-02-02T02:00:00').IsBefore(DateTime.FromISOString('2019-02-02T02:00:00'));
     */
    IsBefore(dt: DateTime): boolean {
        return this._date.diff(dt._date).milliseconds < 0;
    }

    /**
     * is this DateTime after
     *
     * @param dt the DateTime to compare with this DateTime
     *
     * @example
     * // returns true
     * DateTime.FromISOString('2019-02-02T02:00:00').IsAfter(DateTime.FromISOString('2019-02-01T02:00:00'));
     * // returns false
     * DateTime.FromISOString('2019-02-02T02:00:00').IsAfter(DateTime.FromISOString('2019-02-03T02:00:00'));
     */
    IsAfter(dt: DateTime): boolean {
        return this._date.diff(dt._date).milliseconds > 0;
    }

    /**
     * if the Current DateTime in Daylight Saving Time
     *
     * @example
     * // returns true
     * DateTime.FromISOString('2019-06-02T02:00:00', 'Europe/Berlin').IsDaylightSavingTime();
     * // returns false
     * DateTime.FromISOString('2019-11-02T02:00:00', 'Europe/Berlin').IsDaylightSavingTime();
     * DateTime.FromISOString('2019-06-02T02:00:00', 'UTC').IsDaylightSavingTime();
     * DateTime.FromISOString('2019-11-02T02:00:00', 'UTC').IsDaylightSavingTime();
     */
    IsDaylightSavingTime(): boolean {
        return this._date.isInDST;
    }

    /**
     * return the DateTime as a string
     *
     * you can define a Format string to format the DateTime
     *
     * @param fmt the string format
     *
     * @example
     * // returns "2019-01-01 12:23:54"
     * DateTime.FromISOString('2019-01-01T12:23:54').ToString();
     * // returns "2019"
     * DateTime.FromISOString('2019-01-01T12:23:54').ToString('yyyy');
     */
    ToString(fmt?: string): string {
        return this._date.toFormat(fmt ? fmt : 'yyyy-MM-dd HH:mm:ss');
    }
}
