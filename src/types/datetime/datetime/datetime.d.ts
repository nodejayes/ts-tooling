import {DateTime as LuxonDateTime} from 'luxon';
import {TimeSpan} from '../timespan/timespan';

/**
 * represent a DateTime DataType
 *
 * @category Type
 */
export class DateTime {
    /**
     * Year of the Date
     */
    readonly Year: number;

    /**
     * Month of the Date
     */
    readonly Month: number;

    /**
     * Day of the Date in Month
     */
    readonly Day: number;

    /**
     * Hour of the Day
     */
    readonly Hour: number;

    /**
     * Minute of the Day
     */
    readonly Minute: number;

    /**
     * Second of the Day
     */
    readonly Second: number;

    /**
     * Millisecond of the Day
     */
    readonly Millisecond: number;

    /**
     * get the DateTime as UTC
     */
    readonly UTC: DateTime;

    /**
     * the offset to UTC Timezone in Minutes
     */
    readonly UTCOffsetMinutes: number;

    /**
     * the current Timezone Name
     */
    readonly Zone: string;

    /**
     * the Weekday of the DateTime
     */
    readonly DayOfWeek: number;

    /**
     * the Day in the Year of the DateTime
     */
    readonly DayOfYear: number;

    /**
     * the Number of the Days in the DateTime Year
     */
    readonly DaysInYear: number;

    /**
     * the Number of Days in the Month of the DateTime
     */
    readonly DaysInMonth: number;

    /**
     * the Quarter of the Year of the DateTime
     */
    readonly YearQuarter: number;

    /**
     * the Week Number of the Year of DateTime
     */
    readonly YearWeekNumber: number;

    /**
     * the Date without the Time
     */
    readonly Date: DateTime;

    /**
     * the Time of the Day
     */
    readonly TimeOfDay: TimeSpan;

    /**
     * check if the DateTime is a valid DateTime
     */
    readonly Valid: boolean;

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
    constructor(zone?: string, year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number, keepTimeZone?: boolean);

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
    static FromLuxon(luxonDate: LuxonDateTime): DateTime;

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
    static FromJavascriptDate(date: Date, zone?: string): DateTime;

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
    static FromISOString(isoStr: string, zone?: string): DateTime;

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
    static FromMilliseconds(milliseconds: number, zone?: string): DateTime;

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
    ToZone(zone: string, keepTimeZone?: boolean): DateTime;

    /**
     * add a DateTime to this DateTime
     *
     * @param dt the DateTime to add on this DateTime
     *
     * @example
     * // returns 4038-02-03 23:00:00.000
     * DateTime.FromISOString('2019-01-01T00:00:00').Add(DateTime.FromISOString('2019-01-02T23:00:00'));
     */
    Add(dt: DateTime): DateTime;

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
    Equals(dt: DateTime): boolean;

    /**
     * subtract DateTime from this DateTime
     *
     * @param dt the DateTime to subtract on this DateTime
     *
     * @example
     * // returns 2019-01-01 01:00:00.000
     * DateTime.FromISOString('2019-02-02T02:00:00').Subtract(DateTime.FromISOString('0000-01-01T01:00:00'));
     */
    Subtract(dt: DateTime): DateTime;

    /**
     * add a number of Years to this DateTime
     *
     * @param years the number of years to add
     *
     * @example
     * // returns 2021-01-01 00:00:00.000
     * DateTime.FromISOString('2019-01-01T00:00:00').AddYears(2);
     */
    AddYears(years: number): DateTime;

    /**
     * add a number of Months to this DateTime
     *
     * @param months the number of months to add
     *
     * @example
     * // returns 2019-03-01 00:00:00.000
     * DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(2);
     */
    AddMonths(months: number): DateTime;

    /**
     * add a number of Days to this DateTime
     *
     * @param days the number of days to add
     *
     * @example
     * // returns 2019-01-03 00:00:00.000
     * DateTime.FromISOString('2019-01-01T00:00:00').AddDays(2);
     */
    AddDays(days: number): DateTime;

    /**
     * add a number of Hours to this DateTime
     *
     * @param hours the number of hours to add
     *
     * @example
     * // returns 2019-01-01 01:00:00.000
     * DateTime.FromISOString('2019-01-01T00:00:00').AddHours(1);
     */
    AddHours(hours: number): DateTime;

    /**
     * add a number of Minutes to this DateTime
     *
     * @param minutes the number of minutes to add
     *
     * @example
     * // returns 2019-01-01 00:01:00.000
     * DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(1);
     */
    AddMinutes(minutes: number): DateTime;

    /**
     * add a number of Seconds to this DateTime
     *
     * @param seconds the number of seconds to add
     *
     * @example
     * // returns 2019-01-01 00:00:01.000
     * DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(1);
     */
    AddSeconds(seconds: number): DateTime;

    /**
     * add a number of Milliseconds to this DateTime
     *
     * @param milliseconds the number of milliseconds to add
     *
     * @example
     * // returns 2019-01-01 00:00:00.001
     * DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(1);
     */
    AddMilliseconds(milliseconds: number): DateTime;

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
    IsBefore(dt: DateTime): boolean;

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
    IsAfter(dt: DateTime): boolean;

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
    IsDaylightSavingTime(): boolean;

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
    ToString(fmt?: string): string;
}
