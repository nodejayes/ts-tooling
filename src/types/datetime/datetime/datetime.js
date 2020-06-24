const {NumberFactory} = require('../../number');
const luxon = require('luxon');
const {TimeSpan} = require('../timespan/timespan');
const {StringFactory} = require('../../string/factory/string.factory');

function checkLuxonTimeZone(zone, date) {
    if (!date.isValid && date.invalidReason === 'unsupported zone') {
        throw new Error('Timezone ' + zone + ' not supported!');
    }
}

function cloneLuxonDate(date) {
    return luxon.DateTime.fromObject({
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
 *
 * @memberof module:types/datetime
 */
class DateTime {
    /**
     * Year of the Date
     *
     * @readonly
     * @return {number}
     */
    get Year() {
        return this._date.year;
    }

    /**
     * Month of the Date
     *
     * @readonly
     * @return {number}
     */
    get Month() {
        return this._date.month;
    }

    /**
     * Day of the Date in Month
     *
     * @readonly
     * @return {number}
     */
    get Day() {
        return this._date.day;
    }

    /**
     * Hour of the Day
     *
     * @readonly
     * @return {number}
     */
    get Hour() {
        return this._date.hour;
    }

    /**
     * Minute of the Day
     *
     * @readonly
     * @return {number}
     */
    get Minute() {
        return this._date.minute;
    }

    /**
     * Second of the Day
     *
     * @readonly
     * @return {number}
     */
    get Second() {
        return this._date.second;
    }

    /**
     * Millisecond of the Day
     *
     * @readonly
     * @return {number}
     */
    get Millisecond() {
        return this._date.millisecond;
    }

    /**
     * get the DateTime as UTC
     *
     * @readonly
     * @return {DateTime}
     */
    get UTC() {
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
     *
     * @readonly
     * @return {number}
     */
    get UTCOffsetMinutes() {
        return this._date.offset;
    }

    /**
     * the current Timezone Name
     *
     * @readonly
     * @return {string}
     */
    get Zone() {
        return this._date.zoneName;
    }

    /**
     * the Weekday of the DateTime
     *
     * @readonly
     * @return {number}
     */
    get DayOfWeek() {
        return this._date.weekday;
    }

    /**
     * the Day in the Year of the DateTime
     *
     * @readonly
     * @return {number}
     */
    get DayOfYear() {
        return this._date.ordinal;
    }

    /**
     * the Number of the Days in the DateTime Year
     *
     * @readonly
     * @return {number}
     */
    get DaysInYear() {
        return this._date.daysInYear;
    }

    /**
     * the Number of Days in the Month of the DateTime
     *
     * @readonly
     * @return {number}
     */
    get DaysInMonth() {
        return this._date.daysInMonth;
    }

    /**
     * the Quarter of the Year of the DateTime
     *
     * @readonly
     * @return {number}
     */
    get YearQuarter() {
        return this._date.quarter;
    }

    /**
     * the Week Number of the Year of DateTime
     *
     * @readonly
     * @return {number}
     */
    get YearWeekNumber() {
        return this._date.weekNumber;
    }

    /**
     * the Date without the Time
     *
     * @readonly
     * @return {DateTime}
     */
    get Date() {
        return new DateTime(this.Zone, this.Year, this.Month, this.Day, 0, 0, 0, 0);
    }

    /**
     * the Time of the Day
     *
     * @readonly
     * @return {TimeSpan}
     */
    get TimeOfDay() {
        return new TimeSpan(this.Hour, this.Minute, this.Second, this.Millisecond, 0);
    }

    /**
     * check if the DateTime is a valid DateTime
     *
     * @readonly
     * @return {boolean}
     */
    get Valid() {
        return this._date.isValid;
    }

    /**
     * create a new DateTime
     *
     * @constructor
     *
     * @param zone {string?} the dates time zone
     * @param year {number?} the year of the date
     * @param month {number?} the month of the date
     * @param day {number?} the day of the date
     * @param hour {number?} the hours of the date
     * @param minute {number?} the minutes of the date
     * @param second {number?} the seconds of the date
     * @param millisecond {number?} the milliseconds of the date
     * @param keepTimeZone {boolean?} not convert the given date to the given time zone
     *
     * @example
     * // create a date in Europe Time Zone 2019-01-01 01:00:00.000
     * new DateTime('Europe/Berlin', 2019, 1, 1, 1, 0, 0, 0);
     * new DateTime('Europe/Berlin', 2019, 1, 1);
     * // create a date in Europe Time Zone 2019-01-01 00:00:00.000
     * new DateTime('Europe/Berlin', 2019, 1, 1, null, null, null, null, true);
     */
    constructor(zone, year, month, day, hour, minute, second, millisecond, keepTimeZone = false) {
        this._date = luxon.DateTime.utc();
        if (StringFactory.IsNullOrEmpty(zone)) {
            zone = 'UTC';
        }
        const isTimeSet = keepTimeZone === true || (hour >= 0 || minute >= 0 || second >= 0 || millisecond >= 0);
        this._date = luxon.DateTime.utc(
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
     * get the DateTime in a specific Timezone
     *
     * @param zone {string} the time zone to convert this time
     * @param keepTimeZone {boolean?} not convert the time only set the new time zone
     * @return {DateTime}
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
    ToZone(zone, keepTimeZone = false) {
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
     * @param dt {DateTime} the DateTime to add on this DateTime
     * @return {DateTime}
     *
     * @example
     * // returns 4038-02-03 23:00:00.000
     * DateTime.FromISOString('2019-01-01T00:00:00').Add(DateTime.FromISOString('2019-01-02T23:00:00'));
     */
    Add(dt) {
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
     * @param dt {DateTime} the DateTime to compare with this DateTime
     * @return {boolean}
     *
     * @example
     * // returns true
     * DateTime.FromISOString('2019-02-02T02:00:00').Equals(DateTime.FromISOString('2019-02-02T02:00:00'));
     * // returns false
     * DateTime.FromISOString('2019-02-02T02:00:00').Equals(DateTime.FromISOString('2019-02-02T03:00:00'));
     */
    Equals(dt) {
        return this._date.diff(dt._date).milliseconds === 0;
    }

    /**
     * subtract DateTime from this DateTime
     *
     * @param dt {DateTime} the DateTime to subtract on this DateTime
     * @return {DateTime}
     *
     * @example
     * // returns 2019-01-01 01:00:00.000
     * DateTime.FromISOString('2019-02-02T02:00:00').Subtract(DateTime.FromISOString('0000-01-01T01:00:00'));
     */
    Subtract(dt) {
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
     * @param years {number} the number of years to add
     * @return {DateTime}
     *
     * @example
     * // returns 2021-01-01 00:00:00.000
     * DateTime.FromISOString('2019-01-01T00:00:00').AddYears(2);
     */
    AddYears(years) {
        this._date = this._date.plus({years});
        return this;
    }

    /**
     * add a number of Months to this DateTime
     *
     * @param months {number} the number of months to add
     * @return {DateTime}
     *
     * @example
     * // returns 2019-03-01 00:00:00.000
     * DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(2);
     */
    AddMonths(months) {
        this._date = this._date.plus({months});
        return this;
    }

    /**
     * add a number of Days to this DateTime
     *
     * @param days {number} the number of days to add
     * @return {DateTime}
     *
     * @example
     * // returns 2019-01-03 00:00:00.000
     * DateTime.FromISOString('2019-01-01T00:00:00').AddDays(2);
     */
    AddDays(days) {
        this._date = this._date.plus({days});
        return this;
    }

    /**
     * add a number of Hours to this DateTime
     *
     * @param hours {number} the number of hours to add
     * @return {DateTime}
     *
     * @example
     * // returns 2019-01-01 01:00:00.000
     * DateTime.FromISOString('2019-01-01T00:00:00').AddHours(1);
     */
    AddHours(hours) {
        this._date = this._date.plus({hours});
        return this;
    }

    /**
     * add a number of Minutes to this DateTime
     *
     * @param minutes {number} the number of minutes to add
     * @return {DateTime}
     *
     * @example
     * // returns 2019-01-01 00:01:00.000
     * DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(1);
     */
    AddMinutes(minutes) {
        this._date = this._date.plus({minutes});
        return this;
    }

    /**
     * add a number of Seconds to this DateTime
     *
     * @param seconds {number} the number of seconds to add
     * @return {DateTime}
     *
     * @example
     * // returns 2019-01-01 00:00:01.000
     * DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(1);
     */
    AddSeconds(seconds) {
        this._date = this._date.plus({seconds});
        return this;
    }

    /**
     * add a number of Milliseconds to this DateTime
     *
     * @param milliseconds {number} the number of milliseconds to add
     * @return {DateTime}
     *
     * @example
     * // returns 2019-01-01 00:00:00.001
     * DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(1);
     */
    AddMilliseconds(milliseconds) {
        this._date = this._date.plus({milliseconds});
        return this;
    }

    /**
     * is this DateTime before
     *
     * @param dt {DateTime} the DateTime to compare with this DateTime
     * @return {boolean}
     *
     * @example
     * // returns true
     * DateTime.FromISOString('2019-02-02T02:00:00').IsBefore(DateTime.FromISOString('2019-02-03T02:00:00'));
     * // returns false
     * DateTime.FromISOString('2019-02-02T02:00:00').IsBefore(DateTime.FromISOString('2019-02-02T02:00:00'));
     */
    IsBefore(dt) {
        return this._date.diff(dt._date).milliseconds < 0;
    }

    /**
     * is this DateTime after
     *
     * @param dt {DateTime} the DateTime to compare with this DateTime
     * @return {boolean}
     *
     * @example
     * // returns true
     * DateTime.FromISOString('2019-02-02T02:00:00').IsAfter(DateTime.FromISOString('2019-02-01T02:00:00'));
     * // returns false
     * DateTime.FromISOString('2019-02-02T02:00:00').IsAfter(DateTime.FromISOString('2019-02-03T02:00:00'));
     */
    IsAfter(dt) {
        return this._date.diff(dt._date).milliseconds > 0;
    }

    /**
     * if the Current DateTime in Daylight Saving Time
     *
     * @return {boolean}
     *
     * @example
     * // returns true
     * DateTime.FromISOString('2019-06-02T02:00:00', 'Europe/Berlin').IsDaylightSavingTime();
     * // returns false
     * DateTime.FromISOString('2019-11-02T02:00:00', 'Europe/Berlin').IsDaylightSavingTime();
     * DateTime.FromISOString('2019-06-02T02:00:00', 'UTC').IsDaylightSavingTime();
     * DateTime.FromISOString('2019-11-02T02:00:00', 'UTC').IsDaylightSavingTime();
     */
    IsDaylightSavingTime() {
        return this._date.isInDST;
    }

    /**
     * return the DateTime as a string
     *
     * you can define a Format string to format the DateTime
     *
     * @param fmt {string?} the string format
     * @return {string}
     *
     * @example
     * // returns "2019-01-01 12:23:54"
     * DateTime.FromISOString('2019-01-01T12:23:54').ToString();
     * // returns "2019"
     * DateTime.FromISOString('2019-01-01T12:23:54').ToString('yyyy');
     */
    ToString(fmt) {
        return this._date.toFormat(fmt ? fmt : 'yyyy-MM-dd HH:mm:ss');
    }

    /**
     * convert the DateTime into a Unix Timestamp in ms
     *
     * @param inMs {boolean} get the Timestamp in ms
     * @return {number} the unix timestamp
     *
     * @example
     * // returns 1559433600000
     * DateTime.FromISOString('2019-06-02T02:00:00', 'Europe/Berlin').ToUnixTimestamp();
     * // returns 1559433600
     * DateTime.FromISOString('2019-06-02T02:00:00', 'Europe/Berlin').ToUnixTimestamp(false);
     */
    ToUnixTimestamp(inMs = true) {
        return inMs ?
            this._date.toMillis() :
            NumberFactory.NewInteger(this._date.toMillis() / 1000);
    }

    /**
     * returns the DateTime as a Javascript Date Object
     *
     * the DateTime was converted to UTC before given as Javascript Date to prevent Javascript to change the Value!!
     *
     * @return {Date} the Javascript Date Instance
     *
     * @example
     * // returns '2019-06-02T02:30:56.000Z'
     * DateTime.FromISOString('2019-06-02T02:30:56').ToJavascriptDate().toISOString();
     * // returns '2019-06-02T00:30:56.000Z'
     * DateTime.FromISOString('2019-06-02T02:30:56', 'Europe/Berlin').ToJavascriptDate().toISOString();
     */
    ToJavascriptDate() {
        return this._date.toJSDate();
    }

    /**
     * returns the DateTime as a JSON String representation
     *
     * @return {string} the JSON String Value
     *
     * @example
     * // returns '2019-06-02T02:30:56.000Z'
     * DateTime.FromISOString('2019-06-02T02:30:56').ToJSON();
     * // returns '2019-06-02T02:30:56.000+02:00'
     * DateTime.FromISOString('2019-06-02T02:30:56', 'Europe/Berlin').ToJSON();
     */
    ToJSON() {
        return this._date.toJSON();
    }
}

/**
 * create DateTime from a Luxon Date Object
 *
 * uses the Timezone from the Luxon Object
 *
 * @memberof module:types/datetime.DateTime
 * @static
 * @param luxonDate {any} the luxon datetime object instance
 *
 * @example
 * // returns the current time in utc
 * const vgl = LuxonDateTime.utc();
 * DateTime.FromLuxon(vgl);
 */
DateTime.FromLuxon = (luxonDate) => {
    return new DateTime(
        luxonDate.zoneName,
        luxonDate.year,
        luxonDate.month,
        luxonDate.day,
        luxonDate.hour,
        luxonDate.minute,
        luxonDate.second,
        luxonDate.millisecond);
};

/**
 * create a DateTime Type from a Javascript Date Object
 *
 * you have to specify the Timezone or UTC was taken!
 *
 * @memberof module:types/datetime.DateTime
 * @static
 * @param date {Date} the javascript date object
 * @param zone {string?} the time zone to use
 *
 * @example
 * // returns DateTime 2019-01-01 01:00:00.000 in UTC Time Zone
 * DateTime.FromJavascriptDate(new Date(Date.UTC(2019,0,1,1,0,0)));
 * // returns DateTime 2019-01-01 01:00:00.000 in Europe/Berlin Time Zone
 * DateTime.FromJavascriptDate(new Date(Date.UTC(2019,0,1,1,0,0), 'Europe/Berlin'));
 */
DateTime.FromJavascriptDate = (date, zone) => {
    if (StringFactory.IsNullOrEmpty(zone)) {
        zone = 'UTC';
    }
    const tmp = luxon.DateTime.fromJSDate(date, {
        zone: zone,
    });
    checkLuxonTimeZone(zone, tmp);
    return DateTime.FromLuxon(tmp);
};

/**
 * create DateTime from ISO string
 *
 * you have to specify the Timezone or UTC was taken!
 *
 * @memberof module:types/datetime.DateTime
 * @static
 * @param isoStr {string} the iso date time string
 * @param zone {string?} the time zone to use
 *
 * @example
 * // returns DateTime 2019-01-01 01:00:00.000 in UTC Time Zone
 * DateTime.FromISOString('2019-01-01T01:00:00.000');
 * // returns DateTime 2019-01-01 01:00:00.000 in Europe/Berlin Time Zone
 * DateTime.FromISOString('2019-01-01T01:00:00.000', 'Europe/Berlin');
 */
DateTime.FromISOString = (isoStr, zone) => {
    if (StringFactory.IsNullOrEmpty(zone)) {
        zone = 'UTC';
    }
    const tmp = luxon.DateTime.fromISO(isoStr, {
        zone,
    });
    checkLuxonTimeZone(zone, tmp);
    return DateTime.FromLuxon(tmp);
};

/**
 * create DateTime from Milliseconds
 *
 * @memberof module:types/datetime.DateTime
 * @static
 * @param milliseconds {number} the total milliseconds since 1970-01-01 00:00:00.000
 * @param zone {string?} the time zone to use
 *
 * @example
 * const vgl = LuxonDateTime.utc();
 * // returns the current date time in UTC Time Zone
 * DateTime.FromMilliseconds(vgl.toMillis());
 * // returns the current date time in Europe/Berlin Time Zone
 * DateTime.FromMilliseconds(vgl.toMillis(), 'Europe/Berlin');
 */
DateTime.FromMilliseconds = (milliseconds, zone) => {
    if (StringFactory.IsNullOrEmpty(zone)) {
        zone = 'UTC';
    }
    const tmp = luxon.DateTime.fromMillis(milliseconds, {
        zone,
    });
    checkLuxonTimeZone(zone, tmp);
    return DateTime.FromLuxon(tmp);
};

/**
 * check if a Value is a Javascript Date Object
 *
 * @memberof module:types/datetime.DateTime
 * @static
 * @param value {any} some Javascript Value to check
 * @return {boolean} if the Value is a Javascript Date Object
 *
 * @example
 * // returns true
 * DateTime.IsJavascriptDate(new Date());
 * // returns false
 * DateTime.IsJavascriptDate(undefined);
 * DateTime.IsJavascriptDate(null);
 * DateTime.IsJavascriptDate(0);
 * DateTime.IsJavascriptDate('');
 * DateTime.IsJavascriptDate({});
 * DateTime.IsJavascriptDate([]);
 */
DateTime.IsJavascriptDate = (value) => {
    return Object.prototype.toString.call(value) === '[object Date]';
};

module.exports = {DateTime};
