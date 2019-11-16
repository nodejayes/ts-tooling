declare module 'complex/time.span' {
	import { Duration as LuxonDuration } from 'luxon';
	/**
	 * represent a TimeSpan of a Time
	 */
	export class TimeSpan {
	    private _days;
	    private _hours;
	    private _minutes;
	    private _seconds;
	    private _milliseconds;
	    /**
	     * Milliseconds in a Second
	     */
	    MillisecondsPerSecond: number;
	    /**
	     * how much Hours have one Day
	     */
	    HoursPerDay: number;
	    /**
	     * how much Minutes have one Day
	     */
	    MinutesPerDay: number;
	    /**
	     * how much Seconds have one Day
	     */
	    SecondsPerDay: number;
	    /**
	     * how mich Milliseconds have one Day
	     */
	    MillisecondsPerDay: number;
	    /**
	     * Minutes in one Hour
	     */
	    MinutesPerHour: number;
	    /**
	     * Seconds in one Hour
	     */
	    SecondsPerHour: number;
	    /**
	     * Milliseconds in one Hour
	     */
	    MillisecondsPerHour: number;
	    /**
	     * Seconds in one Minute
	     */
	    SecondsPerMinute: number;
	    /**
	     * Milliseconds in one Minute
	     */
	    MillisecondsPerMinute: number;
	    /**
	     * the Days of this TimeSpan
	     * @constructor
	     */
	    readonly Day: number;
	    /**
	     * the TimeSpan in Days
	     * @constructor
	     */
	    readonly TotalDays: number;
	    /**
	     * the Hour of this TimeSpan
	     * @constructor
	     */
	    readonly Hour: number;
	    /**
	     * the TimeSpan in Hours
	     * @constructor
	     */
	    readonly TotalHours: number;
	    /**
	     * the Minute of this TimeSpan
	     * @constructor
	     */
	    readonly Minute: number;
	    /**
	     * the TimeSpan in Minutes
	     * @constructor
	     */
	    readonly TotalMinutes: number;
	    /**
	     * the Second of this TimeSpan
	     * @constructor
	     */
	    readonly Second: number;
	    /**
	     * the TimeSpan in Seconds
	     * @constructor
	     */
	    readonly TotalSeconds: number;
	    /**
	     * the Millisecond of this TimeSpan
	     * @constructor
	     */
	    readonly Millisecond: number;
	    /**
	     * the TimeSpan in Milliseconds
	     * @constructor
	     */
	    readonly TotalMilliseconds: number;
	    /**
	     * if the TimeSpan a valid TimeSpan
	     * @constructor
	     */
	    readonly Valid: boolean;
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
	    static FromLuxon(luxon: LuxonDuration): TimeSpan;
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

}
declare module 'utils/string.factory' {
	/**
	 * some Utils for strings
	 */
	export class StringFactory {
	    /**
	     * check if a String is empty or null
	     *
	     * ```typescript
	     * // is true
	     * StringFactory.IsNullOrEmpty(undefined);
	     * StringFactory.IsNullOrEmpty(null);
	     * StringFactory.IsNullOrEmpty('');
	     *
	     * // is false
	     * StringFactory.IsNullOrEmpty('a');
	     * ```
	     */
	    static IsNullOrEmpty(value: string): boolean;
	}

}
declare module 'complex/date.time' {
	import { DateTime as LuxonDateTime } from 'luxon';
	import { TimeSpan } from 'complex/time.span';
	/**
	 * represent a DateTime DataType
	 */
	export class DateTime {
	    private _date;
	    /**
	     * Year of the Date
	     * @constructor
	     */
	    readonly Year: number;
	    /**
	     * Month of the Date
	     * @constructor
	     */
	    readonly Month: number;
	    /**
	     * Day of the Date in Month
	     * @constructor
	     */
	    readonly Day: number;
	    /**
	     * Hour of the Day
	     * @constructor
	     */
	    readonly Hour: number;
	    /**
	     * Minute of the Day
	     * @constructor
	     */
	    readonly Minute: number;
	    /**
	     * Second of the Day
	     * @constructor
	     */
	    readonly Second: number;
	    /**
	     * Millisecond of the Day
	     * @constructor
	     */
	    readonly Millisecond: number;
	    /**
	     * get the DateTime as UTC
	     * @constructor
	     */
	    readonly UTC: DateTime;
	    /**
	     * the offset to UTC Timezone in Minutes
	     * @constructor
	     */
	    readonly UTCOffsetMinutes: number;
	    /**
	     * the current Timezone Name
	     * @constructor
	     */
	    readonly Zone: string;
	    /**
	     * the Weekday of the DateTime
	     * @constructor
	     */
	    readonly DayOfWeek: number;
	    /**
	     * the Day in the Year of the DateTime
	     * @constructor
	     */
	    readonly DayOfYear: number;
	    /**
	     * the Number of the Days in the DateTime Year
	     * @constructor
	     */
	    readonly DaysInYear: number;
	    /**
	     * the Number of Days in the Month of the DateTime
	     * @constructor
	     */
	    readonly DaysInMonth: number;
	    /**
	     * the Quarter of the Year of the DateTime
	     * @constructor
	     */
	    readonly YearQuarter: number;
	    /**
	     * the Week Number of the Year of DateTime
	     * @constructor
	     */
	    readonly YearWeekNumber: number;
	    /**
	     * the Date without the Time
	     * @constructor
	     */
	    readonly Date: DateTime;
	    /**
	     * the Time of the Day
	     * @constructor
	     */
	    readonly TimeOfDay: TimeSpan;
	    /**
	     * check if the DateTime is a valid DateTime
	     * @constructor
	     */
	    readonly Valid: boolean;
	    /**
	     * create a new DateTime
	     * @param zone
	     * @param year
	     * @param month
	     * @param day
	     * @param hour
	     * @param minute
	     * @param second
	     * @param millisecond
	     */
	    constructor(zone?: string, year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number);
	    /**
	     * create DateTime from a Luxon Date Object
	     * uses the Timezone from the Luxon Object
	     * @param luxonDate
	     */
	    static FromLuxon(luxonDate: LuxonDateTime): DateTime;
	    /**
	     * create a DateTime Type from a Javascript Date Object
	     * you have to specify the Timezone or UTC was taken!
	     * @param date
	     * @param zone
	     */
	    static FromJavascriptDate(date: Date, zone?: string): DateTime;
	    /**
	     * create DateTime from ISO Chars
	     * you have to specify the Timezone or UTC was taken!
	     * @param isoStr
	     * @param zone
	     */
	    static FromISOString(isoStr: string, zone?: string): DateTime;
	    /**
	     * create DateTime from Milliseconds
	     * @param milliseconds
	     * @param zone
	     * @constructor
	     */
	    static FromMilliseconds(milliseconds: number, zone?: string): DateTime;
	    /**
	     * get the DateTime in a specific Timezone
	     * @param zone
	     */
	    ToZone(zone: string): DateTime;
	    /**
	     * add a DateTime to this DateTime
	     * @param dt
	     * @constructor
	     */
	    Add(dt: DateTime): DateTime;
	    /**
	     * check if the DateTime equals this DateTime
	     * @param dt
	     * @constructor
	     */
	    Equals(dt: DateTime): boolean;
	    /**
	     * subtract DateTime from this DateTime
	     * @param dt
	     * @constructor
	     */
	    Subtract(dt: DateTime): DateTime;
	    /**
	     * add a number of Years to this DateTime
	     * @param years
	     * @constructor
	     */
	    AddYears(years: number): DateTime;
	    /**
	     * add a number of Months to this DateTime
	     * @param months
	     * @constructor
	     */
	    AddMonths(months: number): DateTime;
	    /**
	     * add a number of Days to this DateTime
	     * @param days
	     * @constructor
	     */
	    AddDays(days: number): DateTime;
	    /**
	     * add a number of Hours to this DateTime
	     * @param hours
	     * @constructor
	     */
	    AddHours(hours: number): DateTime;
	    /**
	     * add a number of Minutes to this DateTime
	     * @param minutes
	     * @constructor
	     */
	    AddMinutes(minutes: number): DateTime;
	    /**
	     * add a number of Seconds to this DateTime
	     * @param seconds
	     * @constructor
	     */
	    AddSeconds(seconds: number): DateTime;
	    /**
	     * add a number of Milliseconds to this DateTime
	     * @param milliseconds
	     * @constructor
	     */
	    AddMilliseconds(milliseconds: number): DateTime;
	    /**
	     * is this DateTime before
	     * @param dt
	     * @constructor
	     */
	    IsBefore(dt: DateTime): boolean;
	    /**
	     * is this DateTime after
	     * @param dt
	     * @constructor
	     */
	    IsAfter(dt: DateTime): boolean;
	    /**
	     * if the Current DateTime in Daylight Saving Time
	     * @constructor
	     */
	    IsDaylightSavingTime(): boolean;
	    /**
	     * return the DateTime as a Chars
	     * you can define a Format Chars to format the DateTime
	     * @param fmt
	     * @constructor
	     */
	    ToString(fmt?: string): string;
	}

}
declare module 'primitive/number.extension' {
	export {};

}
declare module 'primitive/string.extension' {
	export {};

}
declare module 'primitive/list.sort.order.enum' {
	/**
	 * represent a Sort Order of a List
	 */
	export enum ListSortOrder {
	    ASC = 0,
	    DESC = 1
	}

}
declare module 'primitive/list.extension' {
	export {};

}
declare module 'type.extensions' {
	import { DateTime } from 'complex/date.time';
	import 'primitive/number.extension';
	import 'primitive/string.extension';
	import 'primitive/list.extension';
	import { ListSortOrder } from 'primitive/list.sort.order.enum'; global {
	    interface Number {
	        /**
	         * if the Number between the Range of start and end
	         * @param start the lower border
	         * @param end the upper border
	         * @constructor
	         */
	        IsInRange(start: number, end: number): boolean;
	        /**
	         * if the given Number the Same as this Number
	         * @param value the Number to compare
	         * @constructor
	         */
	        Equals(value: number): boolean;
	        /**
	         * the Number is above another Number
	         * @param value the Number that must be lower than this Number to be True
	         * @constructor
	         */
	        IsAbove(value: number): boolean;
	        /**
	         * the Number is below another Number
	         * @param value the Number that must be higher than this Number to be True
	         * @constructor
	         */
	        IsBelow(value: number): boolean;
	        /**
	         * Clamps Number within the inclusive lower and upper bounds.
	         * @param lower the Number of the lower border
	         * @param upper the Number of the upper border
	         * @constructor
	         */
	        Clamp(lower: number, upper: number): number;
	        /**
	         * add a Number to this Number
	         * @param value the Number to add
	         * @constructor
	         */
	        Add(value: number): number;
	        /**
	         * remove a Number from this Number
	         * @param value the Number to subtract
	         * @constructor
	         */
	        Subtract(value: number): number;
	        /**
	         * multiply a Number with this Number
	         * @param value the Multiplicand for this Number
	         * @constructor
	         */
	        Multiply(value: number): number;
	        /**
	         * divide this Number by the given Number
	         * throw a Exception when the Divisor is zero
	         * @param value the Divisor
	         * @constructor
	         */
	        Divide(value: number): number;
	        /**
	         * increment this Number and return a new Instance
	         * @param step? the Number to Increment with one Call
	         * @constructor
	         */
	        Increment(step?: number): number;
	        /**
	         * decrement this Number and return a new Instance
	         * @param step? the Number to Decrement with one Call
	         * @constructor
	         */
	        Decrement(step?: number): number;
	        /**
	         * Round up or down
	         * @param precision number of digits after the decimal point
	         * @constructor
	         */
	        Round(precision?: number): number;
	        /**
	         * Round down
	         * @param precision number of digits after the decimal point
	         * @constructor
	         */
	        Floor(precision?: number): number;
	        /**
	         * Round up
	         * @param precision number of digits after the decimal point
	         * @constructor
	         */
	        Ceil(precision?: number): number;
	    }
	    interface String {
	        /**
	         * convert the String into a Number (integer) when it possible
	         * @constructor
	         */
	        ToInteger(): number;
	        /**
	         * convert the String into a Number (double) when it possible
	         * @constructor
	         */
	        ToDouble(): number;
	        /**
	         * returns a Character at Position in this String
	         * @param pos the Position of the Character to return
	         * @constructor
	         */
	        CharAt(pos: number): string;
	        /**
	         * convert to CamelCase String
	         * @constructor
	         */
	        ToCamelCase(): string;
	        /**
	         * make the first letter to Uppercase
	         * @constructor
	         */
	        Capitalize(): string;
	        /**
	         * converting Latin-1 Supplement and Latin Extended-A letters
	         * to basic Latin letters and removing combining diacritical marks.
	         * @constructor
	         */
	        Deburr(): string;
	        /**
	         * check if the String starts with a specific letter combination
	         * @param search
	         * @param position
	         * @constructor
	         */
	        StartsWith(search: string, position?: number): boolean;
	        /**
	         * check if the String ends with a specific letter combination
	         * @param search
	         * @param position
	         * @constructor
	         */
	        EndsWith(search: string, position?: number): boolean;
	        /**
	         * escape the String to HTML
	         * @constructor
	         */
	        HTMLEscape(): string;
	        /**
	         * unescape HTML String to normal String
	         * @constructor
	         */
	        HTMLUnescape(): string;
	        /**
	         * escape to a String used by a Regex
	         * @constructor
	         */
	        RegExpEscape(): string;
	        /**
	         * convert the String to Kebab Case
	         * @constructor
	         */
	        ToKebabCase(): string;
	        /**
	         * conver the String to Snake Case
	         * @constructor
	         */
	        ToSnakeCase(): string;
	        /**
	         * convert the String to Start Case
	         * @constructor
	         */
	        ToStartCase(): string;
	        /**
	         * convert the String to lowercase
	         * @constructor
	         */
	        ToLowerCase(): string;
	        /**
	         * convert a String to uppercase
	         * @constructor
	         */
	        ToUpperCase(): string;
	        /**
	         * convert the first letter of the String to lowercase
	         * @constructor
	         */
	        LowerFirst(): string;
	        /**
	         * convert the first letter of the String to uppercase
	         * @constructor
	         */
	        UpperFirst(): string;
	        /**
	         * split the String into a Array of Strings by Words
	         * @constructor
	         */
	        Words(): string[];
	        /**
	         * concat two strings optional with a Separator string
	         * @param appender
	         * @param separator
	         * @constructor
	         */
	        Concat(appender: string, separator?: string): string;
	        /**
	         * join a Array of strings into a new string
	         * @param appender
	         * @param separator
	         * @constructor
	         */
	        Join(appender: string[], separator?: string): string;
	        /**
	         * fill the String from left and right
	         * @param length
	         * @param template
	         * @constructor
	         */
	        Pad(length: number, template?: string): string;
	        /**
	         * fill the String from left
	         * @param length
	         * @param template
	         * @constructor
	         */
	        PadLeft(length: number, template?: string): string;
	        /**
	         * fill the String from right
	         * @param length
	         * @param template
	         * @constructor
	         */
	        PadRight(length: number, template?: string): string;
	        /**
	         * repeat the String x times
	         * @param times
	         * @constructor
	         */
	        Repeat(times: number): string;
	        /**
	         * replace the first matching with other text
	         * @param search
	         * @param replacer
	         * @constructor
	         */
	        Replace(search: string, replacer: string): string;
	        /**
	         * replace all matchings with other text
	         * @param search
	         * @param replacer
	         * @constructor
	         */
	        ReplaceAll(search: string, replacer: string): string;
	        /**
	         * split the String in a Array of Texts by Pattern
	         * @param pattern
	         * @constructor
	         */
	        Split(pattern: string): string[];
	        /**
	         * convert all letters from the String to Lowercase
	         * @constructor
	         */
	        ToLower(): string;
	        /**
	         * convert all Letters from the String to Uppercase
	         * @constructor
	         */
	        ToUpper(): string;
	        /**
	         * trim the String by a sequence on both sides
	         * @param sequence
	         * @constructor
	         */
	        Trim(sequence: string): string;
	        /**
	         * trim the String by sequence on Start
	         * @param sequence
	         * @constructor
	         */
	        TrimStart(sequence: string): string;
	        /**
	         * trim the String by sequence on end
	         * @param sequence
	         * @constructor
	         */
	        TrimEnd(sequence: string): string;
	        /**
	         * truncate the String by text length
	         * @param length
	         * @param omission
	         * @param separator
	         * @constructor
	         */
	        Truncate(length: number, omission?: string, separator?: string): string;
	        /**
	         * clone this String Instance into a new One
	         * @constructor
	         */
	        Clone(): string;
	        /**
	         * this String contains the given String?
	         * @param search
	         * @constructor
	         */
	        Contains(search: string): boolean;
	        /**
	         * gets the Number of found String
	         * @param search
	         * @param allowOverlapping
	         * @constructor
	         */
	        ContainsCount(search: string, allowOverlapping?: boolean): number;
	        /**
	         * the given String are Equals this One?
	         * @param value
	         * @constructor
	         */
	        Equals(value: string): boolean;
	        /**
	         * insert a new String into the String at Position
	         * @param startIndex
	         * @param value
	         * @constructor
	         */
	        Insert(startIndex: number, value: string): string;
	        /**
	         * remove chars at position
	         * @param position
	         * @param count
	         * @constructor
	         */
	        Remove(position: number, count?: number): string;
	        /**
	         * get the chars from position with length or all
	         * @param position
	         * @param length
	         * @constructor
	         */
	        Substring(position: number, length?: number): string;
	        /**
	         * find the first match of the String and return the Index Number
	         * @param value
	         * @constructor
	         */
	        IndexOf(value: string): number;
	        /**
	         * find the Last match of the chars and return the Index Number
	         * @param value
	         * @constructor
	         */
	        LastIndexOf(value: string): number;
	        /**
	         * get Text between 2 searches
	         * @param begin
	         * @param end
	         * @constructor
	         */
	        TextBetween(begin: string, end: string): string[];
	    }
	    interface Array<T> {
	        /**
	         * the number of items in the list
	         * @constructor
	         */
	        Count(): number;
	        /**
	         * get the Maximum Value in the Array
	         * ATTENTION only in Numeric Lists
	         * @constructor
	         */
	        Max(): number;
	        /**
	         * get the Min Value of the Array
	         * ATTENTION only in Numeric Lists
	         * @constructor
	         */
	        Min(): number;
	        /**
	         * get the Mean of this Array
	         * ATTENTION only in Numeric Lists
	         * @constructor
	         */
	        Mean(): number;
	        /**
	         * get the Sum of this Array
	         * ATTENTION only in Numeric Lists
	         * @constructor
	         */
	        Sum(): number;
	        /**
	         * add a new Item into the Array
	         * @param element
	         * @constructor
	         */
	        Add(element: T): void;
	        /**
	         * add a Item to the Array if not exists in the Array
	         * @param element
	         * @constructor
	         */
	        AddIfNotExists(element: T): boolean;
	        /**
	         * reduce a Array of Elements into a new Element
	         * @param reducer
	         * @param initial
	         * @constructor
	         */
	        Reduce<K>(reducer: (target: K, e: T) => K, initial: K): K;
	        /**
	         * same as Add with multiple Items
	         * @param elements
	         * @constructor
	         */
	        AddRange(elements: T[]): void;
	        /**
	         * same as AddIfNotExists with multiple items
	         * @param elements
	         * @constructor
	         */
	        AddRangeIfNotExists(elements: T[]): boolean[];
	        /**
	         * remove all Items from the Array
	         * @constructor
	         */
	        Clear(): void;
	        /**
	         * check if an Item is in the Array
	         * @param element
	         * @constructor
	         */
	        Contains(element: T): boolean;
	        /**
	         * copy the complete Array into a new One
	         * @constructor
	         */
	        Copy(): T[];
	        /**
	         * check if a Items exists that match the specific Filter
	         * @constructor
	         */
	        Exists(findMethod: (d: T) => boolean): boolean;
	        /**
	         * returns the First match of an Item from the Array by specific Filter
	         * @param findMethod
	         * @constructor
	         */
	        Find(findMethod: (d: T) => boolean): T;
	        /**
	         * returns the Last match of an Item from the Array by specific Filter
	         * @param findMethod
	         * @constructor
	         */
	        FindLast(findMethod: (d: T) => boolean): T;
	        /**
	         * returns the index of the First Item that matches the specific Filter
	         * @param findMethod
	         * @constructor
	         */
	        FindIndex(findMethod: (d: T) => boolean): number;
	        /**
	         * returns all Items that matches the specific Filter
	         * @param findMethod
	         * @constructor
	         */
	        FindAll(findMethod: (d: T) => boolean): T[];
	        /**
	         * returns the Index of the Last match Item from the Array by specific Filter
	         * @param findMethod
	         * @constructor
	         */
	        FindLastIndex(findMethod: (d: T) => boolean): number;
	        /**
	         * check if the condition is true for all Items in the Array
	         * @param matchMethod
	         * @constructor
	         */
	        TrueForAll(matchMethod: (d: T) => boolean): boolean;
	        /**
	         * insert a new Item at the Index into the Array
	         * @param index
	         * @param element
	         * @constructor
	         */
	        Insert(index: number, element: T): void;
	        /**
	         * insert multiple Items at the Index into the Array
	         * @param index
	         * @param elements
	         * @constructor
	         */
	        InsertRange(index: number, elements: T[]): void;
	        /**
	         * get the Index of an Intem in the Array
	         * @param element
	         * @param fromIndex
	         * @constructor
	         */
	        IndexOf(element: T, fromIndex?: number): number;
	        /**
	         * removes a Item from the Array
	         * @param element
	         * @constructor
	         */
	        Remove(element: T): void;
	        /**
	         * remove all Items from Array that match the Filter
	         * @param match
	         * @constructor
	         */
	        RemoveAll(match: (d: T) => boolean): void;
	        /**
	         * remove a Item at a specific Index
	         * @param index
	         * @constructor
	         */
	        RemoveAt(index: number): void;
	        /**
	         * remove all these Items from the Array
	         * @param elements
	         * @constructor
	         */
	        RemoveRange(elements: T[]): void;
	        /**
	         * turn around the whole Array
	         * @constructor
	         */
	        Reverse(): T[];
	        /**
	         * sort primitive Array by ASC or DESC order
	         * @param order
	         * @constructor
	         */
	        Sort(order?: ListSortOrder): T[];
	        /**
	         * sort complex Array by multiple Keys
	         * @param keys
	         * @param orders
	         * @constructor
	         */
	        SortBy(keys: string[], orders?: ListSortOrder[]): T[];
	        /**
	         * get the Item at the Index
	         * @param index
	         * @constructor
	         */
	        ElementAt(index: number): T;
	        /**
	         * have the Array more that one Item
	         * @constructor
	         */
	        Any(): boolean;
	        /**
	         * find the First match Item or return a Default Value
	         * @param findMethod
	         * @param def
	         * @constructor
	         */
	        FirstOrDefault(findMethod?: (d: T) => boolean, def?: T): T;
	        /**
	         * find the Last match Item or return a Default Value
	         * @param findMethod
	         * @param def
	         * @constructor
	         */
	        LastOrDefault(findMethod?: (d: T) => boolean, def?: T): T;
	        /**
	         * group a Array by a specific Key that was returned by transform Function
	         * @param transformMethod
	         * @constructor
	         */
	        GroupBy(transformMethod: (d: T) => any): {
	            [key: string]: T[];
	        };
	        /**
	         * convert a Array into another Array
	         * @param convertMethod
	         * @constructor
	         */
	        Convert<K>(convertMethod: (d: T) => K): K[];
	        /**
	         * get the Max Element
	         * must have a Numeric Property
	         * @param filterMethod
	         * @constructor
	         */
	        MaxBy<K>(filterMethod: (d: T) => number): K;
	        /**
	         * get the Min Element
	         * must have a Numeric Property
	         * @param filterMethod
	         * @constructor
	         */
	        MinBy<K>(filterMethod: (d: T) => number): K;
	        /**
	         * get the Mean of complex element
	         * must have a Numeric Property
	         * @param filterMethod
	         * @constructor
	         */
	        MeanBy<K>(filterMethod: (d: T) => number): K;
	        /**
	         * calculate a Sum
	         * @param filterMethod
	         * @constructor
	         */
	        SumBy(filterMethod: (d: T) => number): number;
	    }
	    interface Date {
	        ToDateTime(): DateTime;
	    }
	}

}
declare module 'complex/guid' {
	/**
	 * represent the Global Uniqe Identifier
	 */
	export class Guid {
	    private _value;
	    /**
	     * get a empty Guid
	     * @constructor
	     */
	    static readonly Empty: Guid;
	    /**
	     * validate a Guid
	     * @param guid
	     * @constructor
	     */
	    static Validate(guid: string): boolean;
	    /**
	     * is this Guid a Empty Guid
	     * @constructor
	     */
	    readonly IsEmpty: boolean;
	    /**
	     * create a new Guid
	     * @param guid
	     */
	    constructor(guid?: string);
	    /**
	     * converts the Guid to a String representation
	     * @constructor
	     */
	    ToString(): string;
	    /**
	     * check if the Guid is Equal another Guid
	     * @param guid
	     * @constructor
	     */
	    Equals(guid: Guid | string): boolean;
	}

}
declare module 'complex/byte' {
	/**
	 * a Number represent as Byte
	 */
	export class Byte {
	    private _value;
	    /**
	     * create a new Byte
	     * Numbers that are higher or lower than the maximum or minimum byte values are truncated.
	     * @param value the byte Value
	     */
	    constructor(value: number);
	    /**
	     * get the Byte Value
	     */
	    readonly Value: number;
	}

}
declare module 'complex/byte.stream' {
	import { Byte } from 'complex/byte';
	/**
	 * a Stream of multiple Bytes that can hold any Byte Values
	 * and handle Read/Write Operations
	 */
	export class ByteStream {
	    private readonly _value;
	    private _position;
	    /**
	     * create a new Byte Stream from a Byte String
	     * @param str the Byte String
	     */
	    static FromByteString(str: string): ByteStream;
	    /**
	     * the size of the Stream
	     */
	    readonly Length: number;
	    /**
	     * the current Position of the Read/Write Cursor in the Stream
	     */
	    readonly Position: number;
	    /**
	     * reset the Read/Write Cursor of the Stream
	     */
	    ResetCursor(): void;
	    /**
	     * set the Read/Write Cursor to a specific Position
	     * if a bigger Position given the Cursor was set to the end of  the Stream
	     * @param pos the Position the Cursor was set
	     */
	    SetCursor(pos: number): void;
	    /**
	     * write multiple Bytes into the Byte Stream
	     * @param value the Bytes to write into Stream
	     */
	    Write(value: Byte[]): number;
	    /**
	     * write a single Byte into the Stream
	     * @param value the Byte to write into Stream
	     */
	    WriteByte(value: Byte): void;
	    /**
	     * read a Part of the Byte Stream on default the complete Stream was returned
	     * @param pos the start position to read
	     * @param len the number of Bytes to read
	     */
	    Read(pos?: number, len?: number): number[];
	    /**
	     * read a single Byte at a specific Position of the Stream
	     * if no Position passed the first Byte was read
	     * @param pos the Position in the Stream of the Byte to read
	     */
	    ReadByte(pos?: number): number;
	    /**
	     * get the String representation of the Byte Stream
	     */
	    ToString(): string;
	    private writeByte;
	    private readByte;
	}

}
declare module 'complex/dictionary' {
	/**
	 * representation of a string Dictionary
	 */
	export class Dictionary<T> {
	    private _data;
	    /**
	     * create a new Dictionary you can fill it with predefined Data
	     * @param dictionary
	     */
	    constructor(dictionary?: {
	        [key: string]: T;
	    });
	    /**
	     * Number of Entries in the Dictionary
	     * @constructor
	     */
	    readonly Count: number;
	    /**
	     * all Values of the Dictionary
	     * @constructor
	     */
	    readonly Values: T[];
	    /**
	     * all Keys of the Dictionary
	     * @constructor
	     */
	    Keys(): string[];
	    /**
	     * add a Entry into the Dictionary
	     * @param key
	     * @param item
	     * @constructor
	     */
	    Add(key: string, item: T): Dictionary<T>;
	    /**
	     * clear the Dictionary
	     * @constructor
	     */
	    Clear(): Dictionary<T>;
	    /**
	     * remove a Entry from the Dictionary
	     * @param key
	     * @constructor
	     */
	    Remove(key: string): Dictionary<T>;
	    /**
	     * check if a Key is in the Dictionary
	     * @param key
	     * @constructor
	     */
	    ContainsKey(key: string): boolean;
	    /**
	     * check if a Value is in the Dictionary
	     * @param value
	     * @constructor
	     */
	    ContainsValue(value: T): boolean;
	    /**
	     * get the Dictionary as Javascript Object
	     * @constructor
	     */
	    GetObject(): {
	        [key: string]: T;
	    };
	    /**
	     * try to get a Value in the Dictionary
	     * @param key
	     * @constructor
	     */
	    TryGetValue(key: string): T;
	    /**
	     * get a Value that match the Filter Condition
	     * @param filter
	     * @constructor
	     */
	    Find(filter: (d: T) => boolean): T;
	    /**
	     * same as Find but get multiple Values
	     * @param filter
	     * @constructor
	     */
	    FindAll(filter: (d: T) => boolean): T[];
	}

}
declare module 'pattern/dispose/disposable' {
	/**
	 * implements Methods to make a Class Disposable
	 */
	export interface IDisposable {
	    Dispose(): void;
	}

}
declare module 'pattern/dispose/using' {
	import { IDisposable } from 'pattern/dispose/disposable';
	/**
	 * use a Instance and Dispose it after Execution
	 * @param item a instance of a Class to Dispose after running the using section
	 * @param cb what is to do in this using?
	 *
	 * ```typescript
	 * class WithDisposable implements IDisposable {
	 *   Name = 'WithoutDisposable';
	 *
	 *   Dispose(): void {
	 *     this.Name = '';
	 *   }
	 * }
	 * using(WithDisposable, (i) => {
	 *   // Do whatever you want to do with the new Instance of the Class
	 * });
	 * ```
	 */
	export function using<T extends IDisposable>(item: new () => T, cb: (d: T) => void): void;

}
declare module 'pattern/construct' {
	/**
	 * create a Variable and when not defined returns default or null
	 * @param initialValue
	 * @param defaultValue
	 */
	export function create<T>(initialValue: T, defaultValue?: T): T;
	/**
	 * create a Value with a Factory Method null safe with optional default value
	 * @param factoryMethod the Method that creates the Value
	 * @param args the Factory Function Arguments
	 * @param defaultValue
	 */
	export function createWithFactory<T>(factoryMethod: Function, args: any[], defaultValue?: T): T;

}
declare module 'pattern/events/event.handler' {
	/**
	 * lets create a Event Handler you can subscribe or unsubscribe
	 */
	export class EventHandler<T> {
	    private _stream;
	    private _subscriptions;
	    /**
	     * invoke the Event on the Handler
	     * @param args
	     *
	     * ```typescript
	     * const handler = new EventHandler<number>();
	     * // sends 1 to every Subscriber
	     * handler.Invoke(1);
	     * ```
	     */
	    Invoke(args: T): void;
	    /**
	     * do something when the Handler is invoked
	     * @param key the key to identify the subscription
	     * @param cb
	     * @returns the Idx of the Subscription
	     *
	     * ```typescript
	     * const handler = new EventHandler<number>();
	     * handler.Subscribe('X', (i) => {
	     *     // get the Number that was send by a Invoke call (2)
	     * });
	     * handler.Invoke(2);
	     * ```
	     */
	    Subscribe(key: string, cb: (d: T) => void): void;
	    /**
	     * unsubscribe all callbacks
	     * @param key the key to identify the Subscription to unsubscribe
	     *
	     * ```typescript
	     * const handler = new EventHandler<number>();
	     * handler.Subscribe('X', (i) => {
	     *      // nothing happen here while the Handler was unsubscribe
	     * });
	     * // unsubscribe only the X Subscriber
	     * handler.Unsubscribe('X');
	     * // unsubscribe all Subscriber
	     * handler.Unsubscribe();
	     * handler.Invoke(2);
	     * ```
	     */
	    Unsubscribe(key?: string): void;
	    private unsubscribeByKey;
	}

}
declare module 'pattern/store/reactive.store' {
	import { BehaviorSubject } from 'rxjs';
	/**
	 * a Reactive Store to save States and listen to Changes
	 */
	export class ReactiveStore<T> {
	    private _core;
	    private _behaviorSubjects;
	    /**
	     * create a new Store with a Initial State
	     * @param initialState
	     */
	    constructor(initialState: T);
	    /**
	     * listen to a specific Property or a complete State change
	     * @param selector
	     */
	    Listen<K>(selector: (d: T) => K): BehaviorSubject<K>;
	    /**
	     * mutate a specific Property or a complete State
	     * @param selector
	     * @param mutation
	     */
	    Mutate<K>(selector: (d: T) => K, mutation: (s: K) => K): void;
	    private parseSelectorAccess;
	}

}
declare module 'compression/lz' {
	/**
	 * implementation of lz compression
	 * with lz-string
	 */
	export class LZCompression {
	    /**
	     * Compress any Javascript Value to a LZ String
	     * @param data
	     *
	     * ```typescript
	     * // compress the Object to a zipped JSON String
	     * LZCompression.Compress({"Hello":"World!"});
	     * ```
	     */
	    static Compress(data: any): string;
	    /**
	     * Decompress a LZ String to any Javascript Value
	     * @param compressed
	     *
	     * ```typescript
	     * // decompress the zipped JSON String to a Object
	     * LZCompression.Compress('N4IgEgpgNlD2IC4QHVYCcoBMCEIC+QA=');
	     * ```
	     */
	    static Decompress(compressed: string): any;
	}

}
declare module 'utils/stopwatch' {
	/**
	 * measure the Time between Code Lines in ms
	 * the StopWatch starts when a new Instance was created and can give the Elapsed ms when ElapsedMs was called.
	 * measure multiple Times is also possible with SectionStart and SectionElapsedMs
	 */
	export class StopWatch {
	    private readonly _time;
	    private readonly _multipleTimes;
	    /**
	     * create a new StopWatch Instance at this Time the StopWatch was started
	     *
	     * ```typescript
	     * const watch = new StopWatch();
	     * // returns the elapsed Ms from construction and this Line
	     * watch.ElapsedMs();
	     * ```
	     */
	    constructor();
	    /**
	     * starts the StopWatch for a specific Section marks by the given key
	     * @param key the key that indicates the Section
	     *
	     * ```typescript
	     * const watch = new StopWatch();
	     * watch.SectionStart('A');
	     * // logs the Time between SectionStart('A') and SectionElapsedMs('A')
	     * watch.SectionElapsedMs('A');
	     * watch.SectionStart('B');
	     * // logs the Time between SectionStart('B') and SectionElapsedMs('B')
	     * watch.SectionElapsedMs('B');
	     * // logs the Time between SectionStart('A') and this Line with SectionStart('B') and SectionElapsedMs('B')
	     * watch.SectionElapsedMs('A');
	     * ```
	     */
	    SectionStart(key: string): void;
	    /**
	     * get the Time in ms Elapsed by the Section matches the given key
	     * @param key the key that indicates the Section
	     */
	    SectionElapsedMs(key: string): number;
	    /**
	     * gets the Elapsed Time in ms from the StopWatch
	     */
	    ElapsedMs(): number;
	    private getTimestamp;
	    private getTimeDiff;
	    private getMultipleTimeDiff;
	    private isBrowser;
	}

}
declare module 'utils/number.factory' {
	/**
	 * some Utils for Integer and Double numbers
	 */
	export class NumberFactory {
	    /**
	     * create a new Integer from the given input
	     * @param value Javascript Number or String
	     *
	     * ```typescript
	     * // create a valid Javascript Number with value 1
	     * NumberFactory.newInteger(1);
	     * NumberFactory.newInteger('1');
	     * NumberFactory.newInteger(1.5);
	     * ```
	     */
	    static newInteger(value: number | string): number;
	    /**
	     * create a new Double number from the given input
	     * @param value  Javascript Number or String
	     *
	     * ```typescript
	     * // create a valid Javascript Number with value 1.5
	     * NumberFactory.newDouble(1.5);
	     * NumberFactory.newDouble('1.5');
	     * ```
	     */
	    static newDouble(value: number | string): number;
	    /**
	     * create Random Integers in the min/max Border
	     * @param min the minimum Integer that can be created
	     * @param max the maximum Integer that can be created
	     *
	     * ```typescript
	     * // creates the Javascript Numbers 1,2,3,4,5,6,7,8,9 and 10
	     * NumberFactory.RandomInteger(1, 10);
	     * ```
	     */
	    static RandomInteger(min: number, max: number): number;
	    /**
	     * create Random Doubles in the min/max Border
	     * @param min the minimum Double that can be created
	     * @param max the maximum Double that can be created
	     *
	     * ```typescript
	     * // create all Double Numbers begins with 0.0 and ends with 1.0
	     * NumberFactory.RandomDouble(0, 1)
	     * ```
	     */
	    static RandomDouble(min: number, max: number): number;
	}

}
declare module 'ts-tooling' {
	import 'type.extensions';
	export { DateTime } from 'complex/date.time';
	export { TimeSpan } from 'complex/time.span';
	export { Guid } from 'complex/guid';
	export { Byte } from 'complex/byte';
	export { ByteStream } from 'complex/byte.stream';
	export { Dictionary } from 'complex/dictionary';
	export { ListSortOrder } from 'primitive/list.sort.order.enum';
	export { using } from 'pattern/dispose/using';
	export { IDisposable } from 'pattern/dispose/disposable';
	export { create, createWithFactory } from 'pattern/construct';
	export { EventHandler } from 'pattern/events/event.handler';
	export { ReactiveStore } from 'pattern/store/reactive.store';
	export { LZCompression } from 'compression/lz';
	export { StopWatch } from 'utils/stopwatch';
	export { NumberFactory } from 'utils/number.factory';
	export const ZERO_INT = 0;
	export const ZERO_DOUBLE = 0;

}
