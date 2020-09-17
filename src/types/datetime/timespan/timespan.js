const {StringFactory} = require('../../string/factory/string.factory');
const {ParseString} = require('../../../core/datetime/datetime');

/**
 * represents a duration from milliseconds to days
 *
 * @memberof module:types/datetime
 */
class TimeSpan {
    /**
     * the Days of this TimeSpan
     *
     * @readonly
     */
    get Day() {
        return this._days;
    }

    /**
     * the TimeSpan in Days
     *
     * @readonly
     */
    get TotalDays() {
        const ms = (this._milliseconds / TimeSpan.MillisecondsPerDay);
        const s = (this._seconds / TimeSpan.SecondsPerDay);
        const m = (this._minutes / TimeSpan.MinutesPerDay);
        const h = (this._hours / TimeSpan.HoursPerDay);
        return this._days + ms + s + m + h;
    }

    /**
     * the Hour of this TimeSpan
     *
     * @readonly
     */
    get Hour() {
        return this._hours;
    }

    /**
     * the TimeSpan in Hours
     *
     * @readonly
     */
    get TotalHours() {
        const d = (this._days * TimeSpan.HoursPerDay);
        const m = (this._minutes / TimeSpan.MinutesPerHour);
        const s = (this._seconds / TimeSpan.SecondsPerHour);
        const ms = (this._milliseconds / TimeSpan.MillisecondsPerHour);
        return this._hours + d + m + s + ms;
    }

    /**
     * the Minute of this TimeSpan
     *
     * @readonly
     */
    get Minute() {
        return this._minutes;
    }

    /**
     * the TimeSpan in Minutes
     *
     * @readonly
     */
    get TotalMinutes() {
        const d = this._days * TimeSpan.MinutesPerDay;
        const h = this._hours * TimeSpan.MinutesPerHour;
        const s = this._seconds / TimeSpan.SecondsPerMinute;
        const ms = this._milliseconds / TimeSpan.MillisecondsPerMinute;
        return this._minutes + d + h + s + ms;
    }

    /**
     * the Second of this TimeSpan
     *
     * @readonly
     */
    get Second() {
        return this._seconds;
    }

    /**
     * the TimeSpan in Seconds
     *
     * @readonly
     */
    get TotalSeconds() {
        const d = this._days * TimeSpan.SecondsPerDay;
        const h = this._hours * TimeSpan.SecondsPerHour;
        const m = this._minutes * TimeSpan.SecondsPerMinute;
        const ms = this._milliseconds / TimeSpan.MillisecondsPerSecond;
        return this._seconds + d + h + m + ms;
    }

    /**
     * the Millisecond of this TimeSpan
     *
     * @readonly
     */
    get Millisecond() {
        return this._milliseconds;
    }

    /**
     * the TimeSpan in Milliseconds
     *
     * @readonly
     */
    get TotalMilliseconds() {
        const d = this._days * TimeSpan.MillisecondsPerDay;
        const h = this._hours * TimeSpan.MillisecondsPerHour;
        const m = this._minutes * TimeSpan.MillisecondsPerMinute;
        const s = this._seconds * TimeSpan.MillisecondsPerSecond;
        return this._milliseconds + d + h + m + s;
    }

    /**
     * get the Time Span in Weeks
     *
     * @readonly
     */
    get TotalWeeks() {
        return this.TotalDays / 7;
    }

    /**
     * create a new TimeSpan
     *
     * @constructor
     *
     * @param hours {number?}
     * @param minutes {number?}
     * @param seconds {number?}
     * @param milliseconds {number?}
     * @param days {number?}
     * @return {TimeSpan}
     * @example
     * // create a TimeSpan of 2 Days, 2 Hours, 5 Minutes and 8 Seconds
     * const time = new TimeSpan(2, 5, 8, 2);
     */
    constructor(hours, minutes, seconds, milliseconds, days) {
        this._days = 0;
        this._hours = 0;
        this._minutes = 0;
        this._seconds = 0;
        this._milliseconds = 0;
        if (days && days > 0) {
            this._days = days;
        }
        if (hours && hours > 0) {
            this._hours = hours;
        }
        if (minutes && minutes > 0) {
            this._minutes = minutes;
        }
        if (seconds && seconds > 0) {
            this._seconds = seconds;
        }
        if (milliseconds && milliseconds > 0) {
            this._milliseconds = milliseconds;
        }
    }

    /**
     * add a TimeSpan to this TimeSpan
     *
     * @param duration {TimeSpan}
     * @return {TimeSpan}
     * @example
     * // returns 0.00:00:05
     * const time = new TimeSpan().Add(new TimeSpan(0, 0, 5, 0, 0));
     */
    Add(duration) {
        this._days += duration.Day;
        this._hours += duration.Hour;
        this._minutes += duration.Minute;
        this._seconds += duration.Second;
        this._milliseconds += duration.Millisecond;
        return this;
    }

    /**
     * check a TimeSpan of Equality with another TimeSpan
     *
     * @param duration {TimeSpan}
     * @return {boolean}
     * @example
     * // is true
     * new TimeSpan().Equals(new TimeSpan());
     * // is false
     * new TimeSpan(5).Equals(new TimeSpan());
     */
    Equals(duration) {
        return this.TotalMilliseconds === duration.TotalMilliseconds;
    }

    /**
     * negate the current TimeSpan
     *
     * @return {TimeSpan} the negated TimeSpan
     * @example
     * // returns 0.-05:00:00
     * new TimeSpan(5).Negate();
     */
    Negate() {
        this._days = -this._days;
        this._hours = -this._hours;
        this._minutes = -this._minutes;
        this._seconds = -this._seconds;
        this._milliseconds = -this._milliseconds;
        return this;
    }

    /**
     * subtract a TimeSpan from this TimeSpan
     *
     * @param duration {TimeSpan}
     * @return {TimeSpan}
     * @example
     * // returns 0.04:00:00
     * new TimeSpan(5).Subtract(new TimeSpan(1));
     */
    Subtract(duration) {
        this._days -= duration.Day;
        this._hours -= duration.Hour;
        this._minutes -= duration.Minute;
        this._seconds -= duration.Second;
        this._milliseconds -= duration.Millisecond;
        return this;
    }

    /**
     * is the TimeSpan before this TimeSpan
     *
     * @param duration {TimeSpan}
     * @return {boolean}
     * @example
     * // is true
     * new TimeSpan(5).IsBefore(new TimeSpan(6));
     * // is false
     * new TimeSpan(5).IsBefore(new TimeSpan(2));
     */
    IsBefore(duration) {
        return duration.TotalMilliseconds > this.TotalMilliseconds;
    }

    /**
     * is the TimeSpan after this TimeSpan
     *
     * @param duration {TimeSpan}
     * @return {boolean}
     * @example
     * // is true
     * new TimeSpan(5).IsAfter(new TimeSpan(2));
     * // is false
     * new TimeSpan(5).IsAfter(new TimeSpan(6));
     */
    IsAfter(duration) {
        return duration.TotalMilliseconds < this.TotalMilliseconds;
    }

    /**
     * return the TimeSpan as a Chars
     * you can define a Format Chars to format the TimeSpan
     *
     * @param fmt {string?}
     * @return {string}
     * @example
     * // returns 1.01:01:01
     * new TimeSpan(1,1,1,1,1).ToString();
     * // returns 05:03:04
     * new TimeSpan(5, 3, 4).ToString();
     */
    ToString(fmt) {
        return (StringFactory.IsNullOrEmpty(fmt) ? this.Day > 0 ? 'D.HH:mm:ss' : 'HH:mm:ss' : fmt)
            .Replace('D', this.Day.toString(10))
            .Replace('HH', this.Hour.toString(10).PadLeft(2, '0'))
            .Replace('mm', this.Minute.toString(10).PadLeft(2, '0'))
            .Replace('ss', this.Second.toString(10).PadLeft(2, '0'))
            .Replace('SSS', this.Millisecond.toString(10).PadLeft(3, '0'))
            .Replace('H', this.Hour.toString(10))
            .Replace('m', this.Minute.toString(10))
            .Replace('s', this.Second.toString(10))
            .Replace('SS', this.Millisecond.toString(10).PadLeft(2, '0'))
            .Replace('S', this.Millisecond.toString(10));
    }
}
/**
 * Milliseconds in a Second
 *
 * @memberof module:types/datetime.TimeSpan
 * @static
 * @private
 */
TimeSpan.MillisecondsPerSecond = 1000;
/**
 * how much Hours have one Day
 *
 * @memberof module:types/datetime.TimeSpan
 * @static
 * @private
 */
TimeSpan.HoursPerDay = 24;
/**
 * how much Minutes have one Day
 *
 * @memberof module:types/datetime.TimeSpan
 * @static
 * @private
 */
TimeSpan.MinutesPerDay = TimeSpan.HoursPerDay * 60;
/**
 * how much Seconds have one Day
 *
 * @memberof module:types/datetime.TimeSpan
 * @static
 * @private
 */
TimeSpan.SecondsPerDay = TimeSpan.MinutesPerDay * 60;
/**
 * how much Milliseconds have one Day
 *
 * @memberof module:types/datetime.TimeSpan
 * @static
 * @private
 */
TimeSpan.MillisecondsPerDay = TimeSpan.SecondsPerDay * TimeSpan.MillisecondsPerSecond;
/**
 * Minutes in one Hour
 *
 * @memberof module:types/datetime.TimeSpan
 * @static
 * @private
 */
TimeSpan.MinutesPerHour = 60;
/**
 * Seconds in one Hour
 *
 * @memberof module:types/datetime.TimeSpan
 * @static
 * @private
 */
TimeSpan.SecondsPerHour = TimeSpan.MinutesPerHour * 60;
/**
 * Milliseconds in one Hour
 *
 * @memberof module:types/datetime.TimeSpan
 * @static
 * @private
 */
TimeSpan.MillisecondsPerHour = TimeSpan.SecondsPerHour * TimeSpan.MillisecondsPerSecond;
/**
 * Seconds in one Minute
 *
 * @memberof module:types/datetime.TimeSpan
 * @static
 * @private
 */
TimeSpan.SecondsPerMinute = TimeSpan.SecondsPerHour / 60;
/**
 * Milliseconds in one Minute
 *
 * @memberof module:types/datetime.TimeSpan
 * @static
 * @private
 */
TimeSpan.MillisecondsPerMinute = TimeSpan.SecondsPerMinute * TimeSpan.MillisecondsPerSecond;

/**
 * create TimeSpan from Luxon Object
 *
 * @memberof module:types/datetime.TimeSpan
 * @param luxon {any}
 * @static
 */
TimeSpan.FromLuxon = (luxon) => {
    return new TimeSpan(
        luxon.hours || 0,
        luxon.minutes || 0,
        luxon.seconds || 0,
        luxon.milliseconds || 0,
        luxon.days || 0);
};

/**
 * create a new TimeSpan from a moment js instance
 *
 * @memberof module:types/datetime.TimeSpan
 * @param moment {any} the moment js instance
 * @param ignoreDate {boolean?} ignore the Date of the moment instance
 * @static
 */
TimeSpan.FromMoment = (moment, ignoreDate = false) => {
    let millis = moment.valueOf();
    if (ignoreDate) {
        millis = moment.millisecond() +
            (moment.second() * TimeSpan.MillisecondsPerSecond) +
            (moment.minute() * TimeSpan.MillisecondsPerMinute) +
            (moment.hour() * TimeSpan.MillisecondsPerHour);
    }
    return TimeSpan.FromMilliseconds(millis);
};

/**
 * create a TimeSpan from a JavaScript Date
 *
 * @memberof module:types/datetime.TimeSpan
 * @param date {Date} the JavaScript Date
 * @param ignoreDate {boolean?} ignore the Date of the Date instance
 * @static
 */
TimeSpan.FromJavaScriptDate = (date, ignoreDate = false) => {
    let millis = date.valueOf();
    if (ignoreDate) {
        millis = date.getMilliseconds() +
            (date.getSeconds() * TimeSpan.MillisecondsPerSecond) +
            (date.getMinutes() * TimeSpan.MillisecondsPerMinute) +
            (date.getHours() * TimeSpan.MillisecondsPerHour);
    }
    return TimeSpan.FromMilliseconds(millis);
};

/**
 * create TimeSpan from ISO Chars
 * Format is "Day.Hour:Minute:Second Millisecond"
 *
 * @memberof module:types/datetime.TimeSpan
 * @param isoStr {string}
 * @static
 */
TimeSpan.FromISOString = (isoStr) => {
    return TimeSpan.FromLuxon(ParseString(isoStr));
};

/**
 * create TimeSpan from Milliseconds
 *
 * @memberof module:types/datetime.TimeSpan
 * @param milliseconds {number}
 * @static
 */
TimeSpan.FromMilliseconds = (milliseconds) => {
    const days = Math.floor(milliseconds / TimeSpan.MillisecondsPerDay);
    if (days > 0) {
        milliseconds = milliseconds - days * TimeSpan.MillisecondsPerDay;
    }
    const hours = Math.floor(milliseconds / TimeSpan.MillisecondsPerHour);
    if (hours > 0) {
        milliseconds = milliseconds - hours * TimeSpan.MillisecondsPerHour;
    }
    const minutes = Math.floor(milliseconds / TimeSpan.MillisecondsPerMinute);
    if (minutes > 0) {
        milliseconds = milliseconds - minutes * TimeSpan.MillisecondsPerMinute;
    }
    const second = Math.floor(milliseconds / TimeSpan.MillisecondsPerSecond);
    if (second > 0) {
        milliseconds = milliseconds - second * TimeSpan.MillisecondsPerSecond;
    }
    return new TimeSpan(hours, minutes, second, milliseconds, days);
};

module.exports = {TimeSpan};
