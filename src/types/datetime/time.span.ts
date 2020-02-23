import {StringFactory} from '../string';

/**
 * Luxon representation
 * @ignore
 */
export interface ILuxonDuration {
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
    days?: number;
}

/**
 * Moment Js representation
 * @ignore
 */
export interface IMomentInstance {
    valueOf(): number;
    hour(): number;
    minute(): number;
    second(): number;
    millisecond(): number;
}

/**
 * @ignore
 */
function parseString(str: string): ILuxonDuration {
    let d = 0;
    let h = 0;
    let m = 0;
    let s = 0;
    let ms = 0;

    if (str.indexOf('.') !== -1) {
        const tmp1 = str.split('.');
        d = parseInt(tmp1[0]);
        d = isNaN(d) ? 0 : d;
        str = tmp1[1];
    }
    const tmp2 = str.split(':');
    h = parseInt(tmp2[0]);
    m = parseInt(tmp2[1]);
    h = isNaN(h) ? 0 : h;
    m = isNaN(m) ? 0 : m;

    const tmp3 = tmp2[2].split(' ');

    s = parseInt(tmp3[0]);
    s = isNaN(s) ? 0 : s;
    ms = parseInt(tmp3[1]);
    ms = isNaN(ms) ? 0 : ms;

    return {
        days: d,
        hours: h,
        minutes: m,
        seconds: s,
        milliseconds: ms,
    }
}

/**
 * represents a duration from milliseconds to days
 *
 * @category Type
 */
export class TimeSpan {
    private _days = 0;
    private _hours = 0;
    private _minutes = 0;
    private _seconds = 0;
    private _milliseconds = 0;

    /**
     * Milliseconds in a Second
     */
    static MillisecondsPerSecond = 1000;
    /**
     * how much Hours have one Day
     */
    static HoursPerDay = 24;
    /**
     * how much Minutes have one Day
     */
    static MinutesPerDay = TimeSpan.HoursPerDay * 60;
    /**
     * how much Seconds have one Day
     */
    static SecondsPerDay = TimeSpan.MinutesPerDay * 60;
    /**
     * how much Milliseconds have one Day
     */
    static MillisecondsPerDay = TimeSpan.SecondsPerDay * TimeSpan.MillisecondsPerSecond;
    /**
     * Minutes in one Hour
     */
    static MinutesPerHour = 60;
    /**
     * Seconds in one Hour
     */
    static SecondsPerHour = TimeSpan.MinutesPerHour * 60;
    /**
     * Milliseconds in one Hour
     */
    static MillisecondsPerHour = TimeSpan.SecondsPerHour * TimeSpan.MillisecondsPerSecond;
    /**
     * Seconds in one Minute
     */
    static SecondsPerMinute = TimeSpan.SecondsPerHour / 60;
    /**
     * Milliseconds in one Minute
     */
    static MillisecondsPerMinute = TimeSpan.SecondsPerMinute * TimeSpan.MillisecondsPerSecond;

    /**
     * the Days of this TimeSpan
     */
    get Day(): number {
        return this._days;
    }

    /**
     * the TimeSpan in Days
     */
    get TotalDays(): number {
        const ms = (this._milliseconds / TimeSpan.MillisecondsPerDay);
        const s = (this._seconds / TimeSpan.SecondsPerDay);
        const m = (this._minutes / TimeSpan.MinutesPerDay);
        const h = (this._hours / TimeSpan.HoursPerDay);
        return this._days + ms + s + m + h;
    }

    /**
     * the Hour of this TimeSpan
     */
    get Hour(): number {
        return this._hours;
    }

    /**
     * the TimeSpan in Hours
     */
    get TotalHours(): number {
        const d = (this._days * TimeSpan.HoursPerDay);
        const m = (this._minutes / TimeSpan.MinutesPerHour);
        const s = (this._seconds / TimeSpan.SecondsPerHour);
        const ms = (this._milliseconds / TimeSpan.MillisecondsPerHour);
        return this._hours + d + m + s + ms;
    }

    /**
     * the Minute of this TimeSpan
     */
    get Minute(): number {
        return this._minutes;
    }

    /**
     * the TimeSpan in Minutes
     */
    get TotalMinutes(): number {
        const d = this._days * TimeSpan.MinutesPerDay;
        const h = this._hours * TimeSpan.MinutesPerHour;
        const s = this._seconds / TimeSpan.SecondsPerMinute;
        const ms = this._milliseconds / TimeSpan.MillisecondsPerMinute;
        return this._minutes + d + h + s + ms;
    }

    /**
     * the Second of this TimeSpan
     */
    get Second(): number {
        return this._seconds;
    }

    /**
     * the TimeSpan in Seconds
     */
    get TotalSeconds(): number {
        const d = this._days * TimeSpan.SecondsPerDay;
        const h = this._hours * TimeSpan.SecondsPerHour;
        const m = this._minutes * TimeSpan.SecondsPerMinute;
        const ms = this._milliseconds / TimeSpan.MillisecondsPerSecond;
        return this._seconds + d + h + m + ms;
    }

    /**
     * the Millisecond of this TimeSpan
     */
    get Millisecond(): number {
        return this._milliseconds;
    }

    /**
     * the TimeSpan in Milliseconds
     */
    get TotalMilliseconds(): number {
        const d = this._days * TimeSpan.MillisecondsPerDay;
        const h = this._hours * TimeSpan.MillisecondsPerHour;
        const m = this._minutes * TimeSpan.MillisecondsPerMinute;
        const s = this._seconds * TimeSpan.MillisecondsPerSecond;
        return this._milliseconds + d + h + m + s;
    }

    /**
     * get the Time Span in Weeks
     */
    get TotalWeeks(): number {
        return this.TotalDays / 7;
    }

    /**
     * create a new TimeSpan
     * @param hours
     * @param minutes
     * @param seconds
     * @param milliseconds
     * @param days
     */
    constructor(hours?: number, minutes?: number, seconds?: number, milliseconds?: number, days?: number) {
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
     * create TimeSpan from Luxon Object
     * @param luxon
     * @constructor
     */
    static FromLuxon(luxon: ILuxonDuration): TimeSpan {
        return new TimeSpan(
            luxon.hours || 0,
            luxon.minutes || 0,
            luxon.seconds || 0,
            luxon.milliseconds || 0,
            luxon.days || 0);
    }

    /**
     * create a new TimeSpan from a moment js instance
     *
     * @param moment the moment js instance
     * @param ignoreDate ignore the Date of the moment instance
     */
    static FromMoment(moment: IMomentInstance, ignoreDate = false): TimeSpan {
        let millis = moment.valueOf();
        if (ignoreDate) {
            millis = moment.millisecond() +
                (moment.second() * TimeSpan.MillisecondsPerSecond) +
                (moment.minute() * TimeSpan.MillisecondsPerMinute) +
                (moment.hour() * TimeSpan.MillisecondsPerHour);
        }
        return TimeSpan.FromMilliseconds(millis);
    }

    /**
     * create a TimeSpan from a JavaScript Date
     *
     * @param date the JavaScript Date
     * @param ignoreDate ignore the Date of the Date instance
     */
    static FromJavaScriptDate(date: Date, ignoreDate = false): TimeSpan {
        let millis = date.valueOf();
        if (ignoreDate) {
            millis = date.getMilliseconds() +
                (date.getSeconds() * TimeSpan.MillisecondsPerSecond) +
                (date.getMinutes() * TimeSpan.MillisecondsPerMinute) +
                (date.getHours() * TimeSpan.MillisecondsPerHour);
        }
        return TimeSpan.FromMilliseconds(millis);
    }

    /**
     * create TimeSpan from ISO Chars
     * Format is "Day.Hour:Minute:Second Millisecond"
     * @param isoStr
     * @constructor
     */
    static FromISOString(isoStr: string): TimeSpan {
        return this.FromLuxon(parseString(isoStr));
    }

    /**
     * create TimeSpan from Milliseconds
     * @param milliseconds
     * @constructor
     */
    static FromMilliseconds(milliseconds: number): TimeSpan {
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
    }

    /**
     * add a TimeSpan to this TimeSpan
     * @param duration
     * @constructor
     */
    Add(duration: TimeSpan): TimeSpan {
        this._days += duration.Day;
        this._hours += duration.Hour;
        this._minutes += duration.Minute;
        this._seconds += duration.Second;
        this._milliseconds += duration.Millisecond;
        return this;
    }

    /**
     * check a TimeSpan of Equality with another TimeSpan
     * @param duration
     * @constructor
     */
    Equals(duration: TimeSpan): boolean {
        return this.TotalMilliseconds === duration.TotalMilliseconds;
    }

    /**
     * negate the current TimeSpan
     * @constructor
     */
    Negate(): TimeSpan {
        this._days = -this._days;
        this._hours = -this._hours;
        this._minutes = -this._minutes;
        this._seconds = -this._seconds;
        this._milliseconds = -this._milliseconds;
        return this;
    }

    /**
     * subtract a TimeSpan from this TimeSpan
     * @param duration
     * @constructor
     */
    Subtract(duration: TimeSpan): TimeSpan {
        this._days -= duration.Day;
        this._hours -= duration.Hour;
        this._minutes -= duration.Minute;
        this._seconds -= duration.Second;
        this._milliseconds -= duration.Millisecond;
        return this;
    }

    /**
     * is the TimeSpan before this TimeSpan
     * @param duration
     * @constructor
     */
    IsBefore(duration: TimeSpan): boolean {
        return duration.TotalMilliseconds > this.TotalMilliseconds;
    }

    /**
     * is the TimeSpan after this TimeSpan
     * @param duration
     * @constructor
     */
    IsAfter(duration: TimeSpan): boolean {
        return duration.TotalMilliseconds < this.TotalMilliseconds;
    }

    /**
     * return the TimeSpan as a Chars
     * you can define a Format Chars to format the TimeSpan
     * @param fmt
     * @constructor
     */
    ToString(fmt?: string): string {
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
