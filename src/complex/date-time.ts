import {DateTime as LuxonDateTime} from 'luxon';
import {cloneDeep} from 'lodash';
import {TimeSpan} from "./time-span";
import {Integer} from "../primitive/integer";
import {Chars} from '../primitive/chars';

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
    get Year(): Integer {
        return new Integer(this._date.year);
    }

    /**
     * Month of the Date
     * @constructor
     */
    get Month(): Integer {
        return new Integer(this._date.month);
    }

    /**
     * Day of the Date in Month
     * @constructor
     */
    get Day(): Integer {
        return new Integer(this._date.day);
    }

    /**
     * Hour of the Day
     * @constructor
     */
    get Hour(): Integer {
        return new Integer(this._date.hour);
    }

    /**
     * Minute of the Day
     * @constructor
     */
    get Minute(): Integer {
        return new Integer(this._date.minute);
    }

    /**
     * Second of the Day
     * @constructor
     */
    get Second(): Integer {
        return new Integer(this._date.second);
    }

    /**
     * Millisecond of the Day
     * @constructor
     */
    get Millisecond(): Integer {
        return new Integer(this._date.millisecond);
    }

    /**
     * get the DateTime as UTC
     * @constructor
     */
    get UTC(): DateTime {
        const tmp = cloneDeep(this._date).toUTC();
        return new DateTime(
            new Chars('UTC'),
            new Integer(tmp.year),
            new Integer(tmp.month),
            new Integer(tmp.day),
            new Integer(tmp.hour),
            new Integer(tmp.minute),
            new Integer(tmp.second),
            new Integer(tmp.millisecond));
    }

    /**
     * the offset to UTC Timezone in Minutes
     * @constructor
     */
    get UTCOffsetMinutes(): Integer {
        return new Integer(this._date.offset);
    }

    /**
     * the current Timezone Name
     * @constructor
     */
    get Zone(): Chars {
        return new Chars(this._date.zoneName);
    }

    /**
     * the Weekday of the DateTime
     * @constructor
     */
    get DayOfWeek(): Integer {
        return new Integer(this._date.weekday);
    }

    /**
     * the Day in the Year of the DateTime
     * @constructor
     */
    get DayOfYear(): Integer {
        return new Integer(this._date.ordinal);
    }

    /**
     * the Number of the Days in the DateTime Year
     * @constructor
     */
    get DaysInYear(): Integer {
        return new Integer(this._date.daysInYear);
    }

    /**
     * the Number of Days in the Month of the DateTime
     * @constructor
     */
    get DaysInMonth(): Integer {
        return new Integer(this._date.daysInMonth);
    }

    /**
     * the Quarter of the Year of the DateTime
     * @constructor
     */
    get YearQuarter(): Integer {
        return new Integer(this._date.quarter);
    }

    /**
     * the Week Number of the Year of DateTime
     * @constructor
     */
    get YearWeekNumber(): Integer {
        return new Integer(this._date.weekNumber);
    }

    /**
     * the Date without the Time
     * @constructor
     */
    get Date(): DateTime {
        return new DateTime(this.Zone, this.Year, this.Month, this.Day, new Integer(0), new Integer(0), new Integer(0), new Integer(0));
    }

    /**
     * the Time of the Day
     * @constructor
     */
    get TimeOfDay(): TimeSpan {
        return new TimeSpan(this.Hour, this.Minute, this.Second, this.Millisecond, new Integer(0));
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
    constructor(zone?: Chars, year?: Integer, month?: Integer, day?: Integer, hour?: Integer, minute?: Integer, second?: Integer, millisecond?: Integer) {
        if (!zone || zone.IsEmpty()) {
            zone = new Chars('UTC');
        }
        this._date = LuxonDateTime.utc(
            year ? year.Value : undefined,
            month ? month.Value : undefined,
            day ? day.Value : undefined,
            hour ? hour.Value : undefined,
            minute ? minute.Value : undefined,
            second ? second.Value : undefined,
            millisecond ? millisecond.Value : undefined)
            .setZone(zone.Value);
        checkLuxonTimeZone(zone.Value, this._date);
    }

    /**
     * create DateTime from a Luxon Date Object
     * uses the Timezone from the Luxon Object
     * @param luxonDate
     */
    static FromLuxon(luxonDate: LuxonDateTime): DateTime {
        return new DateTime(
            new Chars(luxonDate.zoneName),
            new Integer(luxonDate.year),
            new Integer(luxonDate.month),
            new Integer(luxonDate.day),
            new Integer(luxonDate.hour),
            new Integer(luxonDate.minute),
            new Integer(luxonDate.second),
            new Integer(luxonDate.millisecond));
    }

    /**
     * create a DateTime Type from a Javascript Date Object
     * you have to specify the Timezone or UTC was taken!
     * @param date
     * @param zone
     */
    static FromJavascriptDate(date: Date, zone?: Chars): DateTime {
        if (!zone || zone.IsEmpty()) {
            zone = new Chars('UTC');
        }
        const tmp = LuxonDateTime.fromJSDate(date, {
            zone: zone.Value,
        });
        checkLuxonTimeZone(zone.Value, tmp);
        return this.FromLuxon(tmp);
    }

    /**
     * create DateTime from ISO Chars
     * you have to specify the Timezone or UTC was taken!
     * @param isoStr
     * @param zone
     */
    static FromISOString(isoStr: Chars, zone?: Chars): DateTime {
        if (!zone || zone.IsEmpty()) {
            zone = new Chars('UTC');
        }
        const tmp = LuxonDateTime.fromISO(isoStr.Value, {
            zone: zone.Value,
        });
        checkLuxonTimeZone(zone.Value, tmp);
        return this.FromLuxon(tmp);
    }

    /**
     * create DateTime from Milliseconds
     * @param milliseconds
     * @param zone
     * @constructor
     */
    static FromMilliseconds(milliseconds: Integer, zone?: Chars): DateTime {
        if (!zone || zone.IsEmpty()) {
            zone = new Chars('UTC');
        }
        const tmp = LuxonDateTime.fromMillis(milliseconds.Value, {
            zone: zone.Value,
        });
        checkLuxonTimeZone(zone.Value, tmp);
        return this.FromLuxon(tmp);
    }

    /**
     * get the DateTime in a specific Timezone
     * @param zone
     */
    ToZone(zone: Chars): DateTime {
        const tmp = cloneDeep(this._date).setZone(zone.Value);
        return new DateTime(
            zone,
            new Integer(tmp.year),
            new Integer(tmp.month),
            new Integer(tmp.day),
            new Integer(tmp.hour),
            new Integer(tmp.minute),
            new Integer(tmp.second),
            new Integer(tmp.millisecond));
    }

    /**
     * add a DateTime to this DateTime
     * @param dt
     * @constructor
     */
    Add(dt: DateTime): DateTime {
        this._date = this._date.plus({
            year: dt.Year.Value,
            month: dt.Month.Value,
            day: dt.Day.Value,
            hour: dt.Hour.Value,
            minute: dt.Minute.Value,
            second: dt.Second.Value,
            millisecond: dt.Millisecond.Value,
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
            year: dt.Year.Value,
            month: dt.Month.Value,
            day: dt.Day.Value,
            hour: dt.Hour.Value,
            minute: dt.Minute.Value,
            second: dt.Second.Value,
            millisecond: dt.Millisecond.Value,
        });
        return this;
    }

    /**
     * add a number of Years to this DateTime
     * @param years
     * @constructor
     */
    AddYears(years: Integer): DateTime {
        this._date = this._date.plus({years: years.Value});
        return this;
    }

    /**
     * add a number of Months to this DateTime
     * @param months
     * @constructor
     */
    AddMonths(months: Integer): DateTime {
        this._date = this._date.plus({months: months.Value});
        return this;
    }

    /**
     * add a number of Days to this DateTime
     * @param days
     * @constructor
     */
    AddDays(days: Integer): DateTime {
        this._date = this._date.plus({days: days.Value});
        return this;
    }

    /**
     * add a number of Hours to this DateTime
     * @param hours
     * @constructor
     */
    AddHours(hours: Integer): DateTime {
        this._date = this._date.plus({hours: hours.Value});
        return this;
    }

    /**
     * add a number of Minutes to this DateTime
     * @param minutes
     * @constructor
     */
    AddMinutes(minutes: Integer): DateTime {
        this._date = this._date.plus({minutes: minutes.Value});
        return this;
    }

    /**
     * add a number of Seconds to this DateTime
     * @param seconds
     * @constructor
     */
    AddSeconds(seconds: Integer): DateTime {
        this._date = this._date.plus({seconds: seconds.Value});
        return this;
    }

    /**
     * add a number of Milliseconds to this DateTime
     * @param milliseconds
     * @constructor
     */
    AddMilliseconds(milliseconds: Integer): DateTime {
        this._date = this._date.plus({milliseconds: milliseconds.Value});
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
    ToString(fmt?: Chars): Chars {
        return new Chars(this._date.toFormat(fmt ? fmt.Value : 'yyyy-MM-dd HH:mm:ss'));
    }
}
