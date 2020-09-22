import {DateTime} from '..';

export class DateRange {
    /**
     * the Start DateTime
     *
     * @readonly
     * @example
     * const a = DateTime.FromISOString('2019-01-01T00:00:00');
     * const b = DateTime.FromISOString('2019-01-10T00:00:00');
     * const range = new DateRange(a, b);
     * // log 2019-01-01T00:00:00 into console
     * console.info(range.Begin)
     */
    get Begin(): DateTime;
    /**
     * the End DateTime
     *
     * @readonly
     * @example
     * const a = DateTime.FromISOString('2019-01-01T00:00:00');
     * const b = DateTime.FromISOString('2019-01-10T00:00:00');
     * const range = new DateRange(a, b);
     * // log 2019-01-10T00:00:00 into console
     * console.info(range.End)
     */
    get End(): DateTime;
    /**
     * create a new DateRange from two DateTime Objects
     *
     * @param from {DateTime} the start DateTime of the DateRange
     * @param to {DateTime} the end DateTime of the DateRange
     * @example
     * const a = DateTime.FromISOString('2019-01-01T00:00:00');
     * const b = DateTime.FromISOString('2019-01-10T00:00:00');
     * // create a date range object from 2019-01-01 to 2019-01-10
     * const range = new DateRange(a, b);
     */
    constructor(from: DateTime, to: DateTime);
    /**
     * overlaps the given DateRange the current DateRange
     *
     * @param range {DateRange} the DateRange to check
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
    Overlaps(range: DateRange): boolean;
    /**
     * is the given DateTime in the DateRange
     *
     * @param value {DateTime} the DateTime to check
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
    IsIn(value: DateTime): boolean;
    /**
     * is the given DateTime before the DateRange
     *
     * @param value {DateTime} the DateTime to check
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
    IsBefore(value: DateTime): boolean;
    /**
     * is the given DateTime after the DateRange
     *
     * @param value {DateTime} the DateTime to check
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
    IsAfter(value: DateTime): boolean;

    /**
     * print the DateRange into a String
     *
     * @param fmt the format of the DateTime strings look {@link DateTime} for more informations
     * @example
     * const dateRange = new DateRange(new DateTime('UTC', 2020, 1, 1, 1), new DateTime('UTC', 2020, 1, 2, 1));
     * // returns [2020-01-01 01:00:00 => 2020-01-02 01:00:00]
     * dateRange.ToString();
     * // returns [2020-01-01 01:00:00 000 => 2020-01-02 01:00:00 000]
     * dateRange.ToString('yyyy-MM-dd hh:mm:ss SSS');
     */
    ToString(fmt?: string): string;
}
