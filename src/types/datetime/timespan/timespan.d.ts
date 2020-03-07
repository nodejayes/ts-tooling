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
     * add a TimeSpan to this TimeSpan
     *
     * @param duration
     */
    Add(duration: TimeSpan): TimeSpan;

    /**
     * check a TimeSpan of Equality with another TimeSpan
     *
     * @param duration
     */
    Equals(duration: TimeSpan): boolean;

    /**
     * negate the current TimeSpan
     *
     * @return the negated TimeSpan
     */
    Negate(): TimeSpan;

    /**
     * subtract a TimeSpan from this TimeSpan
     *
     * @param duration
     */
    Subtract(duration: TimeSpan): TimeSpan;

    /**
     * is the TimeSpan before this TimeSpan
     *
     * @param duration
     */
    IsBefore(duration: TimeSpan): boolean;

    /**
     * is the TimeSpan after this TimeSpan
     *
     * @param duration
     */
    IsAfter(duration: TimeSpan): boolean;

    /**
     * return the TimeSpan as a Chars
     * you can define a Format Chars to format the TimeSpan
     *
     * @param fmt
     */
    ToString(fmt?: string): string;
}
