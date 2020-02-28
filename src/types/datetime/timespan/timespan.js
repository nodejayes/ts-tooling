const {StringFactory} = require('../../string/factory/string.factory');
const {ParseString} = require('../../../core/datetime/datetime');

class TimeSpan {
    static MillisecondsPerSecond = 1000;
    static HoursPerDay = 24;
    static MinutesPerDay = TimeSpan.HoursPerDay * 60;
    static SecondsPerDay = TimeSpan.MinutesPerDay * 60;
    static MillisecondsPerDay = TimeSpan.SecondsPerDay * TimeSpan.MillisecondsPerSecond;
    static MinutesPerHour = 60;
    static SecondsPerHour = TimeSpan.MinutesPerHour * 60;
    static MillisecondsPerHour = TimeSpan.SecondsPerHour * TimeSpan.MillisecondsPerSecond;
    static SecondsPerMinute = TimeSpan.SecondsPerHour / 60;
    static MillisecondsPerMinute = TimeSpan.SecondsPerMinute * TimeSpan.MillisecondsPerSecond;

    get Day() {
        return this._days;
    }

    get TotalDays() {
        const ms = (this._milliseconds / TimeSpan.MillisecondsPerDay);
        const s = (this._seconds / TimeSpan.SecondsPerDay);
        const m = (this._minutes / TimeSpan.MinutesPerDay);
        const h = (this._hours / TimeSpan.HoursPerDay);
        return this._days + ms + s + m + h;
    }

    get Hour() {
        return this._hours;
    }

    get TotalHours() {
        const d = (this._days * TimeSpan.HoursPerDay);
        const m = (this._minutes / TimeSpan.MinutesPerHour);
        const s = (this._seconds / TimeSpan.SecondsPerHour);
        const ms = (this._milliseconds / TimeSpan.MillisecondsPerHour);
        return this._hours + d + m + s + ms;
    }

    get Minute() {
        return this._minutes;
    }

    get TotalMinutes() {
        const d = this._days * TimeSpan.MinutesPerDay;
        const h = this._hours * TimeSpan.MinutesPerHour;
        const s = this._seconds / TimeSpan.SecondsPerMinute;
        const ms = this._milliseconds / TimeSpan.MillisecondsPerMinute;
        return this._minutes + d + h + s + ms;
    }

    get Second() {
        return this._seconds;
    }

    get TotalSeconds() {
        const d = this._days * TimeSpan.SecondsPerDay;
        const h = this._hours * TimeSpan.SecondsPerHour;
        const m = this._minutes * TimeSpan.SecondsPerMinute;
        const ms = this._milliseconds / TimeSpan.MillisecondsPerSecond;
        return this._seconds + d + h + m + ms;
    }

    get Millisecond() {
        return this._milliseconds;
    }

    get TotalMilliseconds() {
        const d = this._days * TimeSpan.MillisecondsPerDay;
        const h = this._hours * TimeSpan.MillisecondsPerHour;
        const m = this._minutes * TimeSpan.MillisecondsPerMinute;
        const s = this._seconds * TimeSpan.MillisecondsPerSecond;
        return this._milliseconds + d + h + m + s;
    }

    get TotalWeeks() {
        return this.TotalDays / 7;
    }

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

    static FromLuxon(luxon) {
        return new TimeSpan(
            luxon.hours || 0,
            luxon.minutes || 0,
            luxon.seconds || 0,
            luxon.milliseconds || 0,
            luxon.days || 0);
    }

    static FromMoment(moment, ignoreDate = false) {
        let millis = moment.valueOf();
        if (ignoreDate) {
            millis = moment.millisecond() +
                (moment.second() * TimeSpan.MillisecondsPerSecond) +
                (moment.minute() * TimeSpan.MillisecondsPerMinute) +
                (moment.hour() * TimeSpan.MillisecondsPerHour);
        }
        return TimeSpan.FromMilliseconds(millis);
    }

    static FromJavaScriptDate(date, ignoreDate = false) {
        let millis = date.valueOf();
        if (ignoreDate) {
            millis = date.getMilliseconds() +
                (date.getSeconds() * TimeSpan.MillisecondsPerSecond) +
                (date.getMinutes() * TimeSpan.MillisecondsPerMinute) +
                (date.getHours() * TimeSpan.MillisecondsPerHour);
        }
        return TimeSpan.FromMilliseconds(millis);
    }

    static FromISOString(isoStr) {
        return this.FromLuxon(ParseString(isoStr));
    }

    static FromMilliseconds(milliseconds) {
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

    Add(duration) {
        this._days += duration.Day;
        this._hours += duration.Hour;
        this._minutes += duration.Minute;
        this._seconds += duration.Second;
        this._milliseconds += duration.Millisecond;
        return this;
    }

    Equals(duration) {
        return this.TotalMilliseconds === duration.TotalMilliseconds;
    }

    Negate() {
        this._days = -this._days;
        this._hours = -this._hours;
        this._minutes = -this._minutes;
        this._seconds = -this._seconds;
        this._milliseconds = -this._milliseconds;
        return this;
    }

    Subtract(duration) {
        this._days -= duration.Day;
        this._hours -= duration.Hour;
        this._minutes -= duration.Minute;
        this._seconds -= duration.Second;
        this._milliseconds -= duration.Millisecond;
        return this;
    }

    IsBefore(duration) {
        return duration.TotalMilliseconds > this.TotalMilliseconds;
    }

    IsAfter(duration) {
        return duration.TotalMilliseconds < this.TotalMilliseconds;
    }

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

module.exports = {TimeSpan};
