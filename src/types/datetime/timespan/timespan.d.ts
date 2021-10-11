import {ILuxonDuration, IMomentInstance} from '../../../core/datetime/datetime';

/**
 * represents a duration from milliseconds to days
 *
 * @category Type
 */
export class TimeSpan {
    /**
     * Milliseconds in a Second
     */
    static MillisecondsPerSecond: number;
    /**
     * how much Hours have one Day
     */
    static HoursPerDay: number;
    /**
     * how much Minutes have one Day
     */
    static MinutesPerDay: number;
    /**
     * how much Seconds have one Day
     */
    static SecondsPerDay: number;
    /**
     * how much Milliseconds have one Day
     */
    static MillisecondsPerDay: number;
    /**
     * Minutes in one Hour
     */
    static MinutesPerHour: number;
    /**
     * Seconds in one Hour
     */
    static SecondsPerHour: number;
    /**
     * Milliseconds in one Hour
     */
    static MillisecondsPerHour: number;
    /**
     * Seconds in one Minute
     */
    static SecondsPerMinute: number;
    /**
     * Milliseconds in one Minute
     */
    static MillisecondsPerMinute: number;

    /**
     * the Days of this TimeSpan
     */
    readonly Day: number;

    /**
     * the TimeSpan in Days
     */
    readonly TotalDays: number;

    /**
     * the Hour of this TimeSpan
     */
    readonly Hour: number;

    /**
     * the TimeSpan in Hours
     */
    readonly TotalHours: number;

    /**
     * the Minute of this TimeSpan
     */
    readonly Minute: number;

    /**
     * the TimeSpan in Minutes
     */
    readonly TotalMinutes: number;

    /**
     * the Second of this TimeSpan
     */
    readonly Second: number;

    /**
     * the TimeSpan in Seconds
     */
    readonly TotalSeconds: number;

    /**
     * the Millisecond of this TimeSpan
     */
    readonly Millisecond: number;

    /**
     * the TimeSpan in Milliseconds
     */
    readonly TotalMilliseconds: number;

    /**
     * get the Time Span in Weeks
     */
    readonly TotalWeeks: number;

    /**
     * create a new TimeSpan
     *
     * @param hours
     * @param minutes
     * @param seconds
     * @param milliseconds
     * @param days
     * @example
     * // create a TimeSpan of 2 Days, 2 Hours, 5 Minutes and 8 Seconds
     * const time = new TimeSpan(2, 5, 8, 2);
     */
    constructor(hours?: number, minutes?: number, seconds?: number, milliseconds?: number, days?: number);

    /**
     * create TimeSpan from Luxon Object
     *
     * @param luxon
     */
    static FromLuxon(luxon: ILuxonDuration): TimeSpan

    /**
     * create a new TimeSpan from a moment js instance
     *
     * @param moment the moment js instance
     * @param ignoreDate ignore the Date of the moment instance
     */
    static FromMoment(moment: IMomentInstance, ignoreDate?: boolean): TimeSpan

    /**
     * create a TimeSpan from a JavaScript Date
     *
     * @param date the JavaScript Date
     * @param ignoreDate ignore the Date of the Date instance
     */
    static FromJavaScriptDate(date: Date, ignoreDate?: boolean): TimeSpan;

    /**
     * create TimeSpan from ISO Chars
     * Format is "Day.Hour:Minute:Second Millisecond"
     *
     * @param isoStr
     */
    static FromISOString(isoStr: string): TimeSpan;

    /**
     * create TimeSpan from Milliseconds
     *
     * @param milliseconds
     */
    static FromMilliseconds(milliseconds: number): TimeSpan;

    /**
     * create TimeSpan from Seconds
     *
     * @param seconds
     */
    static FromSeconds(seconds: number): TimeSpan;

    /**
     * create TimeSpan from Minutes
     *
     * @param minutes
     */
    static FromMinutes(minutes: number): TimeSpan;

    /**
     * create TimeSpan from Hours
     *
     * @param hours
     */
    static FromHours(hours: number): TimeSpan;

    /**
     * create TimeSpan from Days
     *
     * @param days
     */
    static FromDays(days: number): TimeSpan;

    /**
     * add a TimeSpan to this TimeSpan
     *
     * @param duration
     * @example
     * // returns 0.00:00:05
     * const time = new TimeSpan().Add(new TimeSpan(0, 0, 5, 0, 0));
     */
    Add(duration: TimeSpan): TimeSpan;

    /**
     * check a TimeSpan of Equality with another TimeSpan
     *
     * @param duration
     * @example
     * // is true
     * new TimeSpan().Equals(new TimeSpan());
     * // is false
     * new TimeSpan(5).Equals(new TimeSpan());
     */
    Equals(duration: TimeSpan): boolean;

    /**
     * negate the current TimeSpan
     *
     * @return the negated TimeSpan
     * @example
     * // returns 0.-05:00:00
     * new TimeSpan(5).Negate();
     */
    Negate(): TimeSpan;

    /**
     * subtract a TimeSpan from this TimeSpan
     *
     * @param duration
     * @example
     * // returns 0.04:00:00
     * new TimeSpan(5).Subtract(new TimeSpan(1));
     */
    Subtract(duration: TimeSpan): TimeSpan;

    /**
     * is the TimeSpan before this TimeSpan
     *
     * @param duration
     * @example
     * // is true
     * new TimeSpan(5).IsBefore(new TimeSpan(6));
     * // is false
     * new TimeSpan(5).IsBefore(new TimeSpan(2));
     */
    IsBefore(duration: TimeSpan): boolean;

    /**
     * is the TimeSpan after this TimeSpan
     *
     * @param duration
     * @example
     * // is true
     * new TimeSpan(5).IsAfter(new TimeSpan(2));
     * // is false
     * new TimeSpan(5).IsAfter(new TimeSpan(6));
     */
    IsAfter(duration: TimeSpan): boolean;

    /**
     * return the TimeSpan as a Chars
     * you can define a Format Chars to format the TimeSpan
     *
     * @param fmt
     * @example
     * // returns 1.01:01:01
     * new TimeSpan(1,1,1,1,1).ToString();
     * // returns 05:03:04
     * new TimeSpan(5, 3, 4).ToString();
     */
    ToString(fmt?: string): string;
}
