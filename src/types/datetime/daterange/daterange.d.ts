import {DateTime} from '..';

export class DateRange {
    /**
     * the Start DateTime
     *
     * @readonly
     */
    get Begin(): DateTime;
    /**
     * the End DateTime
     *
     * @readonly
     */
    get End(): DateTime;
    /**
     * create a new DateRange from two DateTime Objects
     *
     * @param from {DateTime} the start DateTime of the DateRange
     * @param to {DateTime} the end DateTime of the DateRange
     */
    constructor(from: DateTime, to: DateTime);
    /**
     * overlaps the given DateRange the current DateRange
     *
     * @param range {DateRange} the DateRange to check
     */
    Overlaps(range: DateRange): boolean;
    /**
     * is the given DateTime in the DateRange
     *
     * @param value {DateTime} the DateTime to check
     */
    IsIn(value: DateTime): boolean;
    /**
     * is the given DateTime before the DateRange
     *
     * @param value {DateTime} the DateTime to check
     */
    IsBefore(value: DateTime): boolean;
    /**
     * is the given DateTime after the DateRange
     *
     * @param value {DateTime} the DateTime to check
     */
    IsAfter(value: DateTime): boolean;
}
