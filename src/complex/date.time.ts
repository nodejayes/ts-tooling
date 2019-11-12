import {DateTime as LuxonDateTime} from 'luxon';
import {cloneDeep} from 'lodash';
import {TimeSpan} from './time.span';
import {StringFactory} from "../utils/string.factory";

/**
 * @ignore
 */
function checkLuxonTimeZone(zone: string, date: LuxonDateTime) {
    if (!date.isValid && date.invalidReason === 'unsupported zone') {
        throw new Error('Timezone ' + zone + ' not supported!');
    }
}

/**
 * represent a DateTime DataType
 */
export class DateTime {
    private _date = LuxonDateTime.utc();

    /**
     * Year of the Date
     * @constructor
     */
    get Year(): number {
        return this._date.year;
    }

    /**
     * Month of the Date
     * @constructor
     */
    get Month(): number {
        return this._date.month;
    }

    /**
     * Day of the Date in Month
     * @constructor
     */
    get Day(): number {
        return this._date.day;
    }

    /**
     * Hour of the Day
     * @constructor
     */
    get Hour(): number {
        return this._date.hour;
    }

    /**
     * Minute of the Day
     * @constructor
     */
    get Minute(): number {
        return this._date.minute;
    }

    /**
     * Second of the Day
     * @constructor
     */
    get Second(): number {
        return this._date.second;
    }

    /**
     * Millisecond of the Day
     * @constructor
     */
    get Millisecond(): number {
        return this._date.millisecond;
    }

    /**
     * get the DateTime as UTC
     * @constructor
     */
    get UTC(): DateTime {
        const tmp = cloneDeep(this._date).toUTC();
        return new DateTime(
            'UTC',
            tmp.year,
            tmp.month,
            tmp.day,
            tmp.hour,
            tmp.minute,
            tmp.second,
            tmp.millisecond);
    }

    /**
     * the offset to UTC Timezone in Minutes
     * @constructor
     */
    get UTCOffsetMinutes(): number {
        return this._date.offset;
    }

    /**
     * the current Timezone Name
     * @constructor
     */
    get Zone(): string {
        return this._date.zoneName;
    }

    /**
     * the Weekday of the DateTime
     * @constructor
     */
    get DayOfWeek(): number {
        return this._date.weekday;
    }

    /**
     * the Day in the Year of the DateTime
     * @constructor
     */
    get DayOfYear(): number {
        return this._date.ordinal;
    }

    /**
     * the Number of the Days in the DateTime Year
     * @constructor
     */
    get DaysInYear(): number {
        return this._date.daysInYear;
    }

    /**
     * the Number of Days in the Month of the DateTime
     * @constructor
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
     * @constructor
     */
    get YearWeekNumber(): number {
        return this._date.weekNumber;
    }

    /**
     * the Date without the Time
     * @constructor
     */
    get Date(): DateTime {
        return new DateTime(this.Zone, this.Year, this.Month, this.Day, 0, 0, 0, 0);
    }

    /**
     * the Time of the Day
     * @constructor
     */
    get TimeOfDay(): TimeSpan {
        return new TimeSpan(this.Hour, this.Minute, this.Second, this.Millisecond, 0);
    }

    /**
     * check if the DateTime is a valid DateTime
     * @constructor
     */
    get Valid(): boolean {
        return this._date.isValid;
    }

    /**
     * create a new DateTime
     * @param zone
     * @param year
     * @param month
     * @param day
     * @param hour
     * @param minute
     * @param second
     * @param millisecond
     */
    constructor(zone?: string, year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number) {
        if (StringFactory.IsNullOrEmpty(zone)) {
            zone = 'UTC';
        }
        this._date = LuxonDateTime.utc(
            year >= 0 ? year : undefined,
            month ? month : undefined,
            day ? day : undefined,
            hour >= 0 ? hour : undefined,
            minute >= 0 ? minute : undefined,
            second >= 0 ? second : undefined,
            millisecond >= 0 ? millisecond : undefined)
            .setZone(zone);
        checkLuxonTimeZone(zone, this._date);
    }

    /**
     * create DateTime from a Luxon Date Object
     * uses the Timezone from the Luxon Object
     * @param luxonDate
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
     * you have to specify the Timezone or UTC was taken!
     * @param date
     * @param zone
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
     * create DateTime from ISO Chars
     * you have to specify the Timezone or UTC was taken!
     * @param isoStr
     * @param zone
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
     * @param milliseconds
     * @param zone
     * @constructor
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
     * @param zone
     */
    ToZone(zone: string): DateTime {
        const tmp = cloneDeep(this._date).setZone(zone);
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
     * @param dt
     * @constructor
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
     * @param dt
     * @constructor
     */
    Equals(dt: DateTime): boolean {
        return this._date.diff(dt._date).milliseconds === 0;
    }

    /**
     * subtract DateTime from this DateTime
     * @param dt
     * @constructor
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
     * @param years
     * @constructor
     */
    AddYears(years: number): DateTime {
        this._date = this._date.plus({years});
        return this;
    }

    /**
     * add a number of Months to this DateTime
     * @param months
     * @constructor
     */
    AddMonths(months: number): DateTime {
        this._date = this._date.plus({months});
        return this;
    }

    /**
     * add a number of Days to this DateTime
     * @param days
     * @constructor
     */
    AddDays(days: number): DateTime {
        this._date = this._date.plus({days});
        return this;
    }

    /**
     * add a number of Hours to this DateTime
     * @param hours
     * @constructor
     */
    AddHours(hours: number): DateTime {
        this._date = this._date.plus({hours});
        return this;
    }

    /**
     * add a number of Minutes to this DateTime
     * @param minutes
     * @constructor
     */
    AddMinutes(minutes: number): DateTime {
        this._date = this._date.plus({minutes});
        return this;
    }

    /**
     * add a number of Seconds to this DateTime
     * @param seconds
     * @constructor
     */
    AddSeconds(seconds: number): DateTime {
        this._date = this._date.plus({seconds});
        return this;
    }

    /**
     * add a number of Milliseconds to this DateTime
     * @param milliseconds
     * @constructor
     */
    AddMilliseconds(milliseconds: number): DateTime {
        this._date = this._date.plus({milliseconds});
        return this;
    }

    /**
     * is this DateTime before
     * @param dt
     * @constructor
     */
    IsBefore(dt: DateTime): boolean {
        return this._date.diff(dt._date).milliseconds < 0;
    }

    /**
     * is this DateTime after
     * @param dt
     * @constructor
     */
    IsAfter(dt: DateTime): boolean {
        return this._date.diff(dt._date).milliseconds > 0;
    }

    /**
     * if the Current DateTime in Daylight Saving Time
     * @constructor
     */
    IsDaylightSavingTime(): boolean {
        return this._date.isInDST;
    }

    /**
     * return the DateTime as a Chars
     * you can define a Format Chars to format the DateTime
     * @param fmt
     * @constructor
     */
    ToString(fmt?: string): string {
        return this._date.toFormat(fmt ? fmt : 'yyyy-MM-dd HH:mm:ss');
    }
}
