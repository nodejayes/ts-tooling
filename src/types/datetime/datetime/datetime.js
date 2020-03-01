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

class DateTime {
    get Year() {
        return this._date.year;
    }

    get Month() {
        return this._date.month;
    }

    get Day() {
        return this._date.day;
    }

    get Hour() {
        return this._date.hour;
    }

    get Minute() {
        return this._date.minute;
    }

    get Second() {
        return this._date.second;
    }

    get Millisecond() {
        return this._date.millisecond;
    }

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

    get UTCOffsetMinutes() {
        return this._date.offset;
    }

    get Zone() {
        return this._date.zoneName;
    }

    get DayOfWeek() {
        return this._date.weekday;
    }

    get DayOfYear() {
        return this._date.ordinal;
    }

    get DaysInYear() {
        return this._date.daysInYear;
    }

    get DaysInMonth() {
        return this._date.daysInMonth;
    }

    get YearQuarter() {
        return this._date.quarter;
    }

    get YearWeekNumber() {
        return this._date.weekNumber;
    }

    get Date() {
        return new DateTime(this.Zone, this.Year, this.Month, this.Day, 0, 0, 0, 0);
    }

    get TimeOfDay() {
        return new TimeSpan(this.Hour, this.Minute, this.Second, this.Millisecond, 0);
    }

    get Valid() {
        return this._date.isValid;
    }

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

    Equals(dt) {
        return this._date.diff(dt._date).milliseconds === 0;
    }

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

    AddYears(years) {
        this._date = this._date.plus({years});
        return this;
    }

    AddMonths(months) {
        this._date = this._date.plus({months});
        return this;
    }

    AddDays(days) {
        this._date = this._date.plus({days});
        return this;
    }

    AddHours(hours) {
        this._date = this._date.plus({hours});
        return this;
    }

    AddMinutes(minutes) {
        this._date = this._date.plus({minutes});
        return this;
    }

    AddSeconds(seconds) {
        this._date = this._date.plus({seconds});
        return this;
    }

    AddMilliseconds(milliseconds) {
        this._date = this._date.plus({milliseconds});
        return this;
    }

    IsBefore(dt) {
        return this._date.diff(dt._date).milliseconds < 0;
    }

    IsAfter(dt) {
        return this._date.diff(dt._date).milliseconds > 0;
    }

    IsDaylightSavingTime() {
        return this._date.isInDST;
    }

    ToString(fmt) {
        return this._date.toFormat(fmt ? fmt : 'yyyy-MM-dd HH:mm:ss');
    }
}

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

module.exports = {DateTime};
