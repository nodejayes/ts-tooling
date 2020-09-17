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
     * @example
     * const a = DateTime.FromISOString('2019-01-01T00:00:00');
     * const b = DateTime.FromISOString('2019-01-10T00:00:00');
     * const range = new DateRange(a, b);
     * // log 2019-01-01T00:00:00 into console
     * console.info(range.Begin)
     */
    get Begin() {
        return this.begin;
    }

    /**
     * the End DateTime
     *
     * @readonly
     * @return {DateTime}
     * @example
     * const a = DateTime.FromISOString('2019-01-01T00:00:00');
     * const b = DateTime.FromISOString('2019-01-10T00:00:00');
     * const range = new DateRange(a, b);
     * // log 2019-01-10T00:00:00 into console
     * console.info(range.End)
     */
    get End() {
        return this.end;
    }

    /**
     * create a new DateRange from two DateTime Objects
     *
     * @param begin {DateTime} the start DateTime of the DateRange
     * @param to {DateTime} the end DateTime of the DateRange
     * @example
     * const a = DateTime.FromISOString('2019-01-01T00:00:00');
     * const b = DateTime.FromISOString('2019-01-10T00:00:00');
     * // create a date range object from 2019-01-01 to 2019-01-10
     * const range = new DateRange(a, b);
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
     * @example
     * const a = DateTime.FromISOString('2019-01-01T00:00:00');
     * const b = DateTime.FromISOString('2019-01-10T00:00:00');
     * const range = new DateRange(a, b);
     * const bothIn = new DateRange(DateTime.FromISOString('2019-01-02T00:00:00'), DateTime.FromISOString('2019-01-03T00:00:00'));
     * const beginIn = new DateRange(DateTime.FromISOString('2019-01-02T00:00:00'), DateTime.FromISOString('2019-01-11T00:00:00'));
     * const endIn = new DateRange(DateTime.FromISOString('2018-12-02T00:00:00'), DateTime.FromISOString('2019-01-02T00:00:00'));
     * const bothOut = new DateRange(DateTime.FromISOString('2018-12-02T00:00:00'), DateTime.FromISOString('2019-01-12T00:00:00'));
     * const bothBefore = new DateRange(DateTime.FromISOString('2018-12-02T00:00:00'), DateTime.FromISOString('2018-12-03T00:00:00'));
     * const bothAfter = new DateRange(DateTime.FromISOString('2019-01-12T00:00:00'), DateTime.FromISOString('2019-01-13T00:00:00'));
     * // is true
     * range.Overlaps(bothIn);
     * range.Overlaps(beginIn);
     * range.Overlaps(endIn);
     * range.Overlaps(bothOut);
     * range.Overlaps(range);
     * // is false
     * range.Overlaps(bothBefore);
     * range.Overlaps(bothAfter);
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
     * @example
     * const a = DateTime.FromISOString('2019-01-01T00:00:00');
     * const b = DateTime.FromISOString('2019-01-10T00:00:00');
     * const range = new DateRange(a, b);
     * const inRange = DateTime.FromISOString('2019-01-02T00:00:00');
     * const notInRange = DateTime.FromISOString('2019-01-12T00:00:00');
     * // is true
     * range.IsIn(inRange);
     * range.IsIn(a);
     * range.IsIn(b);
     * // is false
     * range.IsIn(notInRange);
     */
    IsIn(value) {
        return !this.IsBefore(value) && !this.IsAfter(value);
    }

    /**
     * is the given DateTime before the DateRange
     *
     * @param value {DateTime} the DateTime to check
     * @return {boolean}
     * @example
     * const a = DateTime.FromISOString('2019-01-01T00:00:00');
     * const b = DateTime.FromISOString('2019-01-10T00:00:00');
     * const range = new DateRange(a, b);
     * const before = DateTime.FromISOString('2018-12-02T00:00:00');
     * const after = DateTime.FromISOString('2019-01-12T00:00:00');
     * // is true
     * range.IsBefore(before);
     * // is false
     * range.IsBefore(a);
     * range.IsBefore(b);
     * range.IsBefore(after);
     */
    IsBefore(value) {
        return value.IsBefore(this.begin);
    }

    /**
     * is the given DateTime after the DateRange
     *
     * @param value {DateTime} the DateTime to check
     * @return {boolean}
     * @example
     * const a = DateTime.FromISOString('2019-01-01T00:00:00');
     * const b = DateTime.FromISOString('2019-01-10T00:00:00');
     * const range = new DateRange(a, b);
     * const before = DateTime.FromISOString('2018-12-02T00:00:00');
     * const after = DateTime.FromISOString('2019-01-12T00:00:00');
     * // is true
     * range.IsAfter(after);
     * // is false
     * range.IsAfter(b);
     * range.IsAfter(a);
     * range.IsAfter(before);
     */
    IsAfter(value) {
        return value.IsAfter(this.end);
    }
}

module.exports = {DateRange};
