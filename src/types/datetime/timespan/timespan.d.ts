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
    get Day(): number;

    /**
     * the TimeSpan in Days
     */
    get TotalDays(): number;

    /**
     * the Hour of this TimeSpan
     */
    get Hour(): number;

    /**
     * the TimeSpan in Hours
     */
    get TotalHours(): number;

    /**
     * the Minute of this TimeSpan
     */
    get Minute(): number;

    /**
     * the TimeSpan in Minutes
     */
    get TotalMinutes(): number;

    /**
     * the Second of this TimeSpan
     */
    get Second(): number;

    /**
     * the TimeSpan in Seconds
     */
    get TotalSeconds(): number;

    /**
     * the Millisecond of this TimeSpan
     */
    get Millisecond(): number;

    /**
     * the TimeSpan in Milliseconds
     */
    get TotalMilliseconds(): number;

    /**
     * get the Time Span in Weeks
     */
    get TotalWeeks(): number;

    /**
     * create a new TimeSpan
     * @param hours
     * @param minutes
     * @param seconds
     * @param milliseconds
     * @param days
     */
    constructor(hours?: number, minutes?: number, seconds?: number, milliseconds?: number, days?: number);

    /**
     * create TimeSpan from Luxon Object
     * @param luxon
     * @constructor
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
     * @param isoStr
     * @constructor
     */
    static FromISOString(isoStr: string): TimeSpan;

    /**
     * create TimeSpan from Milliseconds
     * @param milliseconds
     * @constructor
     */
    static FromMilliseconds(milliseconds: number): TimeSpan;

    /**
     * add a TimeSpan to this TimeSpan
     * @param duration
     * @constructor
     */
    Add(duration: TimeSpan): TimeSpan;

    /**
     * check a TimeSpan of Equality with another TimeSpan
     * @param duration
     * @constructor
     */
    Equals(duration: TimeSpan): boolean;

    /**
     * negate the current TimeSpan
     * @constructor
     */
    Negate(): TimeSpan;

    /**
     * subtract a TimeSpan from this TimeSpan
     * @param duration
     * @constructor
     */
    Subtract(duration: TimeSpan): TimeSpan;

    /**
     * is the TimeSpan before this TimeSpan
     * @param duration
     * @constructor
     */
    IsBefore(duration: TimeSpan): boolean;

    /**
     * is the TimeSpan after this TimeSpan
     * @param duration
     * @constructor
     */
    IsAfter(duration: TimeSpan): boolean;

    /**
     * return the TimeSpan as a Chars
     * you can define a Format Chars to format the TimeSpan
     * @param fmt
     * @constructor
     */
    ToString(fmt?: string): string;
}
