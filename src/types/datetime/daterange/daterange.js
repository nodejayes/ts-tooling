/**
 * some Calculations for DateTime Ranges
 *
 * @memberof module:types/datetime
 */
class DateRange {
    /**
     * the Start DateTime
     *
     * @readonly
     * @return {DateTime}
     */
    get Begin() {
        return this.begin;
    }

    /**
     * the End DateTime
     *
     * @readonly
     * @return {DateTime}
     */
    get End() {
        return this.end;
    }

    /**
     * create a new DateRange from two DateTime Objects
     *
     * @param begin {DateTime} the start DateTime of the DateRange
     * @param to {DateTime} the end DateTime of the DateRange
     */
    constructor(begin, to) {
        this.begin = begin;
        this.end = to;
    }

    /**
     * overlaps the given DateRange the current DateRange
     *
     * @param range {DateRange} the DateRange to check
     * @return {boolean}
     */
    Overlaps(range) {
        return this.IsIn(range.Begin) || this.IsIn(range.End) ||
            (this.IsBefore(range.Begin) && this.IsAfter(range.End));
    }

    /**
     * is the given DateTime in the DateRange
     *
     * @param value {DateTime} the DateTime to check
     * @return {boolean}
     */
    IsIn(value) {
        return !this.IsBefore(value) && !this.IsAfter(value);
    }

    /**
     * is the given DateTime before the DateRange
     *
     * @param value {DateTime} the DateTime to check
     * @return {boolean}
     */
    IsBefore(value) {
        return value.IsBefore(this.begin);
    }

    /**
     * is the given DateTime after the DateRange
     *
     * @param value {DateTime} the DateTime to check
     * @return {boolean}
     */
    IsAfter(value) {
        return value.IsAfter(this.end);
    }
}

module.exports = {DateRange};
