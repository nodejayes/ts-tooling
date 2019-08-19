import {Duration as LuxonDuration, DurationObject} from 'luxon';
import {Integer} from "../primitive/integer";
import {Double} from "../primitive/double";
import {Chars} from "../primitive/chars";

/**
 * @ignore
 */
function parseString(str: string): DurationObject {
    let d = 0;
    let h = 0;
    let m = 0;
    let s = 0;
    let ms = 0;

    if (str.indexOf('.') !== -1) {
        const tmp1 = str.split('.');
        d = parseInt(tmp1[0].replace('.', ''));
        d = isNaN(d) ? 0 : d;
        str = tmp1[2];
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
        day: d,
        hour: h,
        minute: m,
        second: s,
        millisecond: ms,
    }
}

/**
 * represent a TimeSpan of a Time
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
    MillisecondsPerSecond = 1000;
    /**
     * how much Hours have one Day
     */
    HoursPerDay = 24;
    /**
     * how much Minutes have one Day
     */
    MinutesPerDay = this.HoursPerDay * 60;
    /**
     * how much Seconds have one Day
     */
    SecondsPerDay = this.MinutesPerDay * 60;
    /**
     * how mich Milliseconds have one Day
     */
    MillisecondsPerDay = this.SecondsPerDay * this.MillisecondsPerSecond;
    /**
     * Minutes in one Hour
     */
    MinutesPerHour = 60;
    /**
     * Seconds in one Hour
     */
    SecondsPerHour = this.MinutesPerHour * 60;
    /**
     * Milliseconds in one Hour
     */
    MillisecondsPerHour = this.SecondsPerHour * this.MillisecondsPerSecond;
    /**
     * Seconds in one Minute
     */
    SecondsPerMinute = this.SecondsPerHour / 60;
    /**
     * Milliseconds in one Minute
     */
    MillisecondsPerMinute = this.SecondsPerMinute * this.MillisecondsPerSecond;

    /**
     * the Days of this TimeSpan
     * @constructor
     */
    get Day(): Integer {
        return new Integer(this._days);
    }

    /**
     * the TimeSpan in Days
     * @constructor
     */
    get TotalDays(): Double {
        const ms = (this._milliseconds / this.MillisecondsPerDay);
        const s = (this._seconds / this.SecondsPerDay);
        const m = (this._minutes / this.MinutesPerDay);
        const h = (this._hours / this.HoursPerDay);
        return new Double(this._days + ms + s + m + h);
    }

    /**
     * the Hour of this TimeSpan
     * @constructor
     */
    get Hour(): Integer {
        return new Integer(this._hours);
    }

    /**
     * the TimeSpan in Hours
     * @constructor
     */
    get TotalHours(): Double {
        const d = (this._days * this.HoursPerDay);
        const m = (this._minutes / this.MinutesPerHour);
        const s = (this._seconds / this.SecondsPerHour);
        const ms = (this._milliseconds / this.MillisecondsPerHour);
        return new Double(this._hours + d + m + s + ms);
    }

    /**
     * the Minute of this TimeSpan
     * @constructor
     */
    get Minute(): Integer {
        return new Integer(this._minutes);
    }

    /**
     * the TimeSpan in Minutes
     * @constructor
     */
    get TotalMinutes(): Double {
        const d = this._days * this.MinutesPerDay;
        const h = this._hours * this.MinutesPerHour;
        const s = this._seconds / this.SecondsPerMinute;
        const ms = this._milliseconds / this.MillisecondsPerMinute;
        return new Double(this._minutes + d + h + s + ms);
    }

    /**
     * the Second of this TimeSpan
     * @constructor
     */
    get Second(): Integer {
        return new Integer(this._seconds);
    }

    /**
     * the TimeSpan in Seconds
     * @constructor
     */
    get TotalSeconds(): Double {
        const d = this._days * this.SecondsPerDay;
        const h = this._hours * this.SecondsPerHour;
        const m = this._minutes * this.SecondsPerMinute;
        const ms = this._milliseconds / this.MillisecondsPerSecond;
        return new Double(this._seconds + d + h + m + ms);
    }

    /**
     * the Millisecond of this TimeSpan
     * @constructor
     */
    get Millisecond(): Integer {
        return new Integer(this._milliseconds);
    }

    /**
     * the TimeSpan in Milliseconds
     * @constructor
     */
    get TotalMilliseconds(): Double {
        const d = this._days * this.MillisecondsPerDay;
        const h = this._hours * this.MillisecondsPerHour;
        const m = this._minutes * this.MillisecondsPerMinute;
        const s = this._seconds * this.MillisecondsPerSecond;
        return new Double(this._milliseconds + d + h + m + s);
    }

    /**
     * if the TimeSpan a valid TimeSpan
     * @constructor
     */
    get Valid(): boolean {
        return LuxonDuration.fromObject({
            milliseconds: this.TotalMilliseconds.Value,
        }).isValid
    }

    /**
     * create a new TimeSpan
     * @param hours
     * @param minutes
     * @param seconds
     * @param milliseconds
     * @param days
     */
    constructor(hours?: Integer, minutes?: Integer, seconds?: Integer, milliseconds?: Integer, days?: Integer) {
        if (days && days.Value > 0) {
            this._days = days.Value;
        }
        if (hours && hours.Value > 0) {
            this._hours = hours.Value;
        }
        if (minutes && minutes.Value > 0) {
            this._minutes = minutes.Value;
        }
        if (seconds && seconds.Value > 0) {
            this._seconds = seconds.Value;
        }
        if (milliseconds && milliseconds.Value > 0) {
            this._milliseconds = milliseconds.Value;
        }
    }

    /**
     * create TimeSpan from Luxon Object
     * @param luxon
     * @constructor
     */
    static FromLuxon(luxon: LuxonDuration): TimeSpan {
        return new TimeSpan(
            new Integer(luxon.hours),
            new Integer(luxon.minutes),
            new Integer(luxon.seconds),
            new Integer(luxon.milliseconds),
            new Integer(luxon.days));
    }

    /**
     * create TimeSpan from ISO Chars
     * Format is "Day.Hour:Minute:Second Millisecond"
     * @param isoStr
     * @constructor
     */
    static FromISOString(isoStr: Chars): TimeSpan {
        const d = LuxonDuration.fromObject(parseString(isoStr.Value));
        return this.FromLuxon(d);
    }

    /**
     * create TimeSpan from Milliseconds
     * @param milliseconds
     * @constructor
     */
    static FromMilliseconds(milliseconds: Integer): TimeSpan {
        return this.FromLuxon(LuxonDuration.fromMillis(milliseconds.Value));
    }

    /**
     * add a TimeSpan to this TimeSpan
     * @param duration
     * @constructor
     */
    Add(duration: TimeSpan): TimeSpan {
        this._days += duration.Day.Value;
        this._hours += duration.Hour.Value;
        this._minutes += duration.Minute.Value;
        this._seconds += duration.Second.Value;
        this._milliseconds += duration.Millisecond.Value;
        return this;
    }

    /**
     * check a TimeSpan of Equality with another TimeSpan
     * @param duration
     * @constructor
     */
    Equals(duration: TimeSpan): boolean {
        return this.TotalMilliseconds.Value === duration.TotalMilliseconds.Value;
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
        this._days -= duration.Day.Value;
        this._hours -= duration.Hour.Value;
        this._minutes -= duration.Minute.Value;
        this._seconds -= duration.Second.Value;
        this._milliseconds -= duration.Millisecond.Value;
        return this;
    }

    /**
     * is the TimeSpan before this TimeSpan
     * @param duration
     * @constructor
     */
    IsBefore(duration: TimeSpan): boolean {
        return duration.TotalMilliseconds.Value > this.TotalMilliseconds.Value;
    }

    /**
     * is the TimeSpan after this TimeSpan
     * @param duration
     * @constructor
     */
    IsAfter(duration: TimeSpan): boolean {
        return duration.TotalMilliseconds.Value < this.TotalMilliseconds.Value;
    }

    /**
     * return the TimeSpan as a Chars
     * you can define a Format Chars to format the TimeSpan
     * @param fmt
     * @constructor
     */
    ToString(fmt?: Chars): Chars {
        return new Chars(LuxonDuration.fromMillis(this.TotalMilliseconds.Value)
            .toFormat(fmt ? fmt.Value : 'hh:mm:ss'));
    }
}
