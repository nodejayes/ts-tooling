declare module 'primitive/integer' {
	/**
	 * representation of a Integer
	 * @group BasicTypes
	 */
	export class Integer {
	    private _number;
	    private _isValid;
	    /**
	     * the Value of this Integer
	     * @constructor
	     */
	    readonly Value: number;
	    /**
	     * the Current Integer is a valid Integer
	     * @constructor
	     */
	    readonly Valid: boolean;
	    /**
	     * generate a Random Integer between min and max
	     *
	     * ```typescript
	     * // set a Random Integer from 1-10 to random
	     * const random = Integer.Random(new Integer(1), new Integer(10));
	     * ```
	     *
	     * @param min
	     * @param max
	     * @constructor
	     */
	    static Random(min: Integer, max: Integer): Integer;
	    /**
	     * create a new Integer from Number or String
	     *
	     * ```typescript
	     * // create with constructor
	     * const one = new Integer(1);
	     *
	     * // create from Javascript Value
	     * const one = (1).ToInteger();
	     * ```
	     * @param integer
	     */
	    constructor(integer?: number | string);
	    /**
	     * is this Integer in Range of two Integers
	     * the Borders equality is in the Range!
	     *
	     * ```typescript
	     * const value = new Integer(2);
	     * const start = new Integer(1);
	     * const end = new Integer(3);
	     *
	     * value.IsInRange(start, end);
	     * // result => True
	     * ```
	     *
	     * @param start
	     * @param end
	     * @constructor
	     */
	    IsInRange(start: Integer, end: Integer): boolean;
	    /**
	     * the Integer is equal with another Integer
	     *
	     * ```typescript
	     * console.info(new Integer(1).Equals(new Integer(1)));
	     * // result => True
	     *
	     * console.info(new Integer(1).Equals(new Integer(2)));
	     * // result => False
	     * ```
	     *
	     * @param value
	     * @constructor
	     */
	    Equals(value: Integer): boolean;
	    /**
	     * the Integer is above another Integer
	     *
	     * ```typescript
	     * console.info(new Integer(1).IsAbove(new Integer(0));
	     * // result => True
	     * ```
	     *
	     * @param value
	     * @constructor
	     */
	    IsAbove(value: Integer): boolean;
	    /**
	     * the Integer is below another Integer
	     *
	     * ```typescript
	     * console.info(new Integer(0).IsBelow(new Integer(1)));
	     * // result => True
	     * ```
	     *
	     * @param value
	     * @constructor
	     */
	    IsBelow(value: Integer): boolean;
	    /**
	     * Clamps Integer within the inclusive lower and upper bounds.
	     *
	     * ```typescript
	     * console.info(new Integer(12).Clamp(new Integer(1), new Integer(2)));
	     * // result => 2
	     * ```
	     *
	     * @param lower
	     * @param upper
	     * @constructor
	     */
	    Clamp(lower: Integer, upper: Integer): Integer;
	    /**
	     * Add a Integer to this Integer
	     *
	     * ```typescript
	     * console.info(new Integer(1).Add(new Integer(2)));
	     * // result => 2
	     * ```
	     *
	     * @param n
	     * @constructor
	     */
	    Add(n: Integer): Integer;
	    /**
	     * Subtract a Integer from this Integer
	     *
	     * ```typescript
	     * console.info(new Integer(2).Subtract(new Integer(1)));
	     * // result => 1
	     * ```
	     *
	     * @param n
	     * @constructor
	     */
	    Subtract(n: Integer): Integer;
	    /**
	     * Multiply this Integer
	     *
	     * ```typescript
	     * console.info(new Integer(1).Multiply(new Integer(1)));
	     * // result => 1
	     * ```
	     *
	     * @param n
	     * @constructor
	     */
	    Multiply(n: Integer): Integer;
	    /**
	     * Divide this Integer
	     * ATTENTION Result is a Integer not Double
	     * for Precision choose Double Data Type
	     *
	     * ```typescript
	     * console.info(new Integer(4).Divide(new Integer(2)));
	     * // returns => 2
	     * ```
	     *
	     * @param n
	     * @constructor
	     */
	    Divide(n: Integer): Integer;
	}

}
declare module 'primitive/double' {
	import { Integer } from 'primitive/integer';
	/**
	 * representation of a Double
	 */
	export class Double {
	    private _number;
	    private _isValid;
	    /**
	     * the Value of this Double
	     * @constructor
	     */
	    readonly Value: number;
	    /**
	     * the Double Value is a Valid Value
	     * @constructor
	     */
	    readonly Valid: boolean;
	    /**
	     * generate a Random Double between min and max
	     * @param min
	     * @param max
	     * @constructor
	     */
	    static Random(min: Double, max: Double): Double;
	    /**
	     * create a new Double from Number or String
	     * @param double
	     */
	    constructor(double?: number | string);
	    /**
	     * is this Double in Range of two Doubles
	     * the Borders equality is in the Range!
	     * @param start
	     * @param end
	     * @constructor
	     */
	    IsInRange(start: Double, end: Double): boolean;
	    /**
	     * the Double is equal with another Double
	     * @param value
	     * @constructor
	     */
	    Equals(value: Double): boolean;
	    /**
	     * the Double is above another Double
	     * @param value
	     * @constructor
	     */
	    IsAbove(value: Double): boolean;
	    /**
	     * the Double is below another Double
	     * @param value
	     * @constructor
	     */
	    IsBelow(value: Double): boolean;
	    /**
	     * Clamps Double within the inclusive lower and upper bounds.
	     * @param lower
	     * @param upper
	     * @constructor
	     */
	    Clamp(lower: Double, upper: Double): Double;
	    /**
	     * Add a Double to this Double
	     * @param n
	     * @constructor
	     */
	    Add(n: Double): Double;
	    /**
	     * Subtract a Double from this Double
	     * @param n
	     * @constructor
	     */
	    Subtract(n: Double): Double;
	    /**
	     * Multiply this Double
	     * @param n
	     * @constructor
	     */
	    Multiply(n: Double): Double;
	    /**
	     * Divide this Double
	     * @param n
	     * @constructor
	     */
	    Divide(n: Double): Double;
	    /**
	     * round up
	     * @param precision
	     * @constructor
	     */
	    Ceil(precision?: Integer): Double;
	    /**
	     * round down
	     * @param precision
	     * @constructor
	     */
	    Floor(precision?: Integer): Double;
	    /**
	     * round up or down
	     * @param precision
	     * @constructor
	     */
	    Round(precision?: Integer): Double;
	}

}
declare module 'collections/dictionary' {
	import { Integer } from 'primitive/integer';
	import { List } from 'collections/list';
	import { Chars } from 'primitive/chars';
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
	    readonly Count: Integer;
	    /**
	     * all Values of the Dictionary
	     * @constructor
	     */
	    readonly Values: T[];
	    /**
	     * all Keys of the Dictionary
	     * @constructor
	     */
	    readonly Keys: List<Chars>;
	    /**
	     * add a Entry into the Dictionary
	     * @param key
	     * @param item
	     * @constructor
	     */
	    Add(key: Chars, item: T): Dictionary<T>;
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
	    Remove(key: Chars): Dictionary<T>;
	    /**
	     * check if a Key is in the Dictionary
	     * @param key
	     * @constructor
	     */
	    ContainsKey(key: Chars): boolean;
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
	    TryGetValue(key: Chars): T;
	    /**
	     * compress the Dictionary into a lz base64 string
	     * @constructor
	     */
	    Compress(): Chars;
	    /**
	     * decompress a lz base64 string into a Dictionary
	     * @param compressed
	     * @constructor
	     */
	    Decompress(compressed: Chars): Dictionary<T>;
	}

}
declare module 'collections/list-sort-order.enum' {
	/**
	 * represent a Sort Order of a List
	 */
	export enum ListSortOrder {
	    ASC = 0,
	    DESC = 1
	}

}
declare module 'collections/list' {
	import { Dictionary } from 'collections/dictionary';
	import { Integer } from 'primitive/integer';
	import { Chars } from 'primitive/chars';
	import { ListSortOrder } from 'collections/list-sort-order.enum';
	import { Double } from 'primitive/double'; type FilterMethod<T> = (d: T) => boolean; type SumMethod<T> = (d: T) => number; type TransformMethod<T> = (d: T) => any; type ConvertMethod<T, K> = (d: T) => K;
	/**
	 * Represent a List of Items with specific Type
	 */
	export class List<T> {
	    private _data;
	    /**
	     * the number of items in the list
	     * @constructor
	     */
	    readonly Count: Integer;
	    /**
	     * get the Maximum Value in the List
	     * ATTENTION only in Numeric Lists
	     * @constructor
	     */
	    readonly Max: Double;
	    /**
	     * get the Min Value of the List
	     * ATTENTION only in Numeric Lists
	     * @constructor
	     */
	    readonly Min: Double;
	    /**
	     * get the Mean of this List
	     * ATTENTION only in Numeric Lists
	     * @constructor
	     */
	    readonly Mean: Double;
	    /**
	     * get the Sum of this List
	     * ATTENTION only in Numeric Lists
	     * @constructor
	     */
	    readonly Sum: Double;
	    /**
	     * create a new List you can create an empty List or fill an
	     * Array into the List when it was created
	     * @param data
	     */
	    constructor(data?: T[]);
	    /**
	     * add a new Item into the List
	     * @param element
	     * @constructor
	     */
	    Add(element: T): void;
	    /**
	     * add a Item to the List if not exists in the List
	     * @param element
	     * @constructor
	     */
	    AddIfNotExists(element: T): boolean;
	    /**
	     * same as Add with multiple Items
	     * @param elements
	     * @constructor
	     */
	    AddRange(elements: List<T>): void;
	    /**
	     * same as AddIfNotExists with multiple items
	     * @param elements
	     * @constructor
	     */
	    AddRangeIfNotExists(elements: List<T>): List<boolean>;
	    /**
	     * remove all Items from the List
	     * @constructor
	     */
	    Clear(): void;
	    /**
	     * check if an Item is in the List
	     * @param element
	     * @constructor
	     */
	    Contains(element: T): boolean;
	    /**
	     * copy the complete List into a new One
	     * @constructor
	     */
	    Copy(): List<T>;
	    /**
	     * check if a Items exists that match the specific Filter
	     * @param findMethod the Filter function
	     * @constructor
	     */
	    Exists(findMethod: FilterMethod<T>): boolean;
	    /**
	     * returns the First match of an Item from the List by specific Filter
	     * @param findMethod the Filter function
	     * @constructor
	     */
	    Find(findMethod: FilterMethod<T>): T;
	    /**
	     * returns the Last match of an Item from the List by specific Filter
	     * @param findMethod the Filter function
	     * @constructor
	     */
	    FindLast(findMethod: FilterMethod<T>): T;
	    /**
	     * returns the index of the First Item that matches the specific Filter
	     * @param findMethod the Filter function
	     * @constructor
	     */
	    FindIndex(findMethod: FilterMethod<T>): Integer;
	    /**
	     * returns all Items that matches the specific Filter
	     * as new List
	     * @param findMethod the Filter function
	     * @constructor
	     */
	    FindAll(findMethod: FilterMethod<T>): List<T>;
	    /**
	     * returns the Index of the Last match Item from the List by specific Filter
	     * @param findMethod the Filter function
	     * @constructor
	     */
	    FindLastIndex(findMethod: FilterMethod<T>): Integer;
	    /**
	     * check if the condition is true for all Items in the List
	     * @param matchMethod
	     * @constructor
	     */
	    TrueForAll(matchMethod: FilterMethod<T>): boolean;
	    /**
	     * insert a new Item at the Index into the List
	     * @param index
	     * @param element
	     * @constructor
	     */
	    Insert(index: Integer, element: T): void;
	    /**
	     * insert multiple Items at the Index into the List
	     * @param index
	     * @param elements
	     * @constructor
	     */
	    InsertRange(index: Integer, elements: T[]): void;
	    /**
	     * get the Index of an Intem in the List
	     * @param element
	     * @param fromIndex
	     * @constructor
	     */
	    IndexOf(element: T, fromIndex?: Integer): Integer;
	    /**
	     * removes a Item from the List
	     * @param element
	     * @constructor
	     */
	    Remove(element: T): void;
	    /**
	     * remove all Items from List that match the Filter
	     * @param match
	     * @constructor
	     */
	    RemoveAll(match: FilterMethod<T>): void;
	    /**
	     * remove a Item at a specific Index
	     * @param index
	     * @constructor
	     */
	    RemoveAt(index: Integer): void;
	    /**
	     * remove all these Items from the List
	     * @param elements
	     * @constructor
	     */
	    RemoveRange(elements: T[]): void;
	    /**
	     * turn around the whole List
	     * @constructor
	     */
	    Reverse(): List<T>;
	    /**
	     * convert the List back into a Javascript Array
	     * @constructor
	     */
	    ToArray(): T[];
	    /**
	     * sort primitive List by ASC or DESC order
	     * @param order
	     * @constructor
	     */
	    Sort(order?: ListSortOrder): List<T>;
	    /**
	     * sort complex List by multiple Keys
	     * @param keys
	     * @param orders
	     * @constructor
	     */
	    SortBy(keys: List<Chars>, orders?: List<ListSortOrder>): List<T>;
	    /**
	     * get the Item at the Index
	     * @param index
	     * @constructor
	     */
	    ElementAt(index: Integer): T;
	    /**
	     * find the First match Item or return a Default Value
	     * @param filterMethod
	     * @param def
	     * @constructor
	     */
	    FirstOrDefault(filterMethod: FilterMethod<T>, def?: T): T;
	    /**
	     * find the Last match Item or return a Default Value
	     * @param filterMethod
	     * @param def
	     * @constructor
	     */
	    LastOrDefault(filterMethod: FilterMethod<T>, def?: T): T;
	    /**
	     * group a List by a specific Key that was returned by transform Function
	     * @param transformMethod
	     * @constructor
	     */
	    GroupBy(transformMethod: TransformMethod<T>): Dictionary<List<T>>;
	    /**
	     * convert a List into another List
	     * @param convertMethod
	     * @constructor
	     */
	    Convert<K>(convertMethod: ConvertMethod<T, K>): List<K>;
	    /**
	     * get the Max Element
	     * must have a Numeric Property
	     * @param filterMethod
	     * @constructor
	     */
	    MaxBy(filterMethod: SumMethod<T>): T;
	    /**
	     * get the Min Element
	     * must have a Numeric Property
	     * @param filterMethod
	     * @constructor
	     */
	    MinBy(filterMethod: SumMethod<T>): T;
	    /**
	     * get the Mean of complex element
	     * must have a Numeric Property
	     * @param filterMethod
	     * @constructor
	     */
	    MeanBy(filterMethod: SumMethod<T>): Double;
	    /**
	     * calculate a Sum
	     * @param filterMethod
	     * @constructor
	     */
	    SumBy(filterMethod: SumMethod<T>): Double;
	    /**
	     * compress the List into a lz base64 string
	     * @constructor
	     */
	    Compress(): Chars;
	    /**
	     * decompress a lz base64 string into a List
	     * @param compressed
	     * @constructor
	     */
	    Decompress(compressed: Chars): List<T>;
	}
	export {};

}
declare module 'primitive/chars' {
	import { Integer } from 'primitive/integer';
	import { List } from 'collections/list';
	/**
	 * represent a String DataType
	 */
	export class Chars {
	    private _str;
	    /**
	     * the String Value
	     * @constructor
	     */
	    readonly Value: string;
	    /**
	     * number of characters in the String
	     * @constructor
	     */
	    readonly Length: Integer;
	    /**
	     * create a new String Instance
	     * @param str
	     */
	    constructor(str?: string);
	    /**
	     * convert to CamelCase String
	     * @constructor
	     */
	    ToCamelCase(): Chars;
	    /**
	     * make the first letter to Uppercase
	     * @constructor
	     */
	    Capitalize(): Chars;
	    /**
	     * converting Latin-1 Supplement and Latin Extended-A letters
	     * to basic Latin letters and removing combining diacritical marks.
	     * @constructor
	     */
	    Deburr(): Chars;
	    /**
	     * check if the String starts with a specific letter combination
	     * @param search
	     * @param position
	     * @constructor
	     */
	    StartsWith(search: Chars, position?: Integer): boolean;
	    /**
	     * check if the String ends with a specific letter combination
	     * @param search
	     * @param position
	     * @constructor
	     */
	    EndsWith(search: Chars, position?: Integer): boolean;
	    /**
	     * escape the String to HTML
	     * @constructor
	     */
	    HTMLEscape(): Chars;
	    /**
	     * unescape HTML String to normal String
	     * @constructor
	     */
	    HTMLUnescape(): Chars;
	    /**
	     * escape to a String used by a Regex
	     * @constructor
	     */
	    RegExpEscape(): Chars;
	    /**
	     * convert the String to Kebab Case
	     * @constructor
	     */
	    ToKebabCase(): Chars;
	    /**
	     * conver the String to Snake Case
	     * @constructor
	     */
	    ToSnakeCase(): Chars;
	    /**
	     * convert the String to Start Case
	     * @constructor
	     */
	    ToStartCase(): Chars;
	    /**
	     * convert the String to lowercase
	     * @constructor
	     */
	    ToLowerCase(): Chars;
	    /**
	     * convert a String to uppercase
	     * @constructor
	     */
	    ToUpperCase(): Chars;
	    /**
	     * convert the first letter of the String to lowercase
	     * @constructor
	     */
	    LowerFirst(): Chars;
	    /**
	     * convert the first letter of the String to uppercase
	     * @constructor
	     */
	    UpperFirst(): Chars;
	    /**
	     * split the String into a List of Strings by Words
	     * @constructor
	     */
	    Words(): List<Chars>;
	    /**
	     * fill the String from left and right
	     * @param length
	     * @param template
	     * @constructor
	     */
	    Pad(length: Integer, template?: Chars): Chars;
	    /**
	     * fill the String from left
	     * @param length
	     * @param template
	     * @constructor
	     */
	    PadLeft(length: Integer, template?: Chars): Chars;
	    /**
	     * fill the String from right
	     * @param length
	     * @param template
	     * @constructor
	     */
	    PadRight(length: Integer, template?: Chars): Chars;
	    /**
	     * repeat the String x times
	     * @param times
	     * @constructor
	     */
	    Repeat(times: Integer): Chars;
	    /**
	     * replace the first matching with other text
	     * @param search
	     * @param replacer
	     * @constructor
	     */
	    Replace(search: Chars, replacer: Chars): Chars;
	    /**
	     * replace all matchings with other text
	     * @param search
	     * @param replacer
	     * @constructor
	     */
	    ReplaceAll(search: Chars, replacer: Chars): Chars;
	    /**
	     * split the Chars in a List of Texts by Pattern
	     * @param pattern
	     * @constructor
	     */
	    Split(pattern: Chars): List<Chars>;
	    /**
	     * convert all letters from the Chars to Lowercase
	     * @constructor
	     */
	    ToLower(): Chars;
	    /**
	     * convert all Letters from the Chars to Uppercase
	     * @constructor
	     */
	    ToUpper(): Chars;
	    /**
	     * trim the Chars by a sequence on both sides
	     * @param sequence
	     * @constructor
	     */
	    Trim(sequence: Chars): Chars;
	    /**
	     * trim the Chars by sequence on Start
	     * @param sequence
	     * @constructor
	     */
	    TrimStart(sequence: Chars): Chars;
	    /**
	     * trim the Chars by sequence on end
	     * @param sequence
	     * @constructor
	     */
	    TrimEnd(sequence: Chars): Chars;
	    /**
	     * truncate the Chars by text length
	     * @param length
	     * @param omission
	     * @param seperator
	     * @constructor
	     */
	    Truncate(length: Integer, omission?: Chars, seperator?: Chars): Chars;
	    /**
	     * clone this Chars Instance into a new One
	     * @constructor
	     */
	    Clone(): Chars;
	    /**
	     * this CHars contains the given Chars?
	     * @param search
	     * @constructor
	     */
	    Contains(search: Chars): boolean;
	    /**
	     * the given Chars are Equals this One?
	     * @param value
	     * @constructor
	     */
	    Equals(value: Chars): boolean;
	    /**
	     * insert a new String into the Chars at Position
	     * @param startIndex
	     * @param value
	     * @constructor
	     */
	    Insert(startIndex: Integer, value: Chars): Chars;
	    /**
	     * remove chars at position
	     * @param position
	     * @param count
	     * @constructor
	     */
	    Remove(position: Integer, count?: Integer): Chars;
	    /**
	     * get the chars from position with length or all
	     * @param position
	     * @param length
	     * @constructor
	     */
	    Substring(position: Integer, length?: Integer): Chars;
	    /**
	     * find the first match of the Chars and return the Index Number
	     * @param value
	     * @constructor
	     */
	    IndexOf(value: Chars): Integer;
	    /**
	     * find the Last match of the chars and return the Index Number
	     * @param value
	     * @constructor
	     */
	    LastIndexOf(value: Chars): Integer;
	    /**
	     * compress the Chars into a lz base64 string
	     * @constructor
	     */
	    Compress(): Chars;
	    /**
	     * decompress a lz base64 string into a Chars
	     * @param compressed
	     * @constructor
	     */
	    Decompress(compressed: Chars): Chars;
	}

}
declare module 'complex/time-span' {
	import { Duration as LuxonDuration } from 'luxon';
	import { Integer } from 'primitive/integer';
	import { Double } from 'primitive/double';
	import { Chars } from 'primitive/chars';
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
	    readonly Day: Integer;
	    /**
	     * the TimeSpan in Days
	     * @constructor
	     */
	    readonly TotalDays: Double;
	    /**
	     * the Hour of this TimeSpan
	     * @constructor
	     */
	    readonly Hour: Integer;
	    /**
	     * the TimeSpan in Hours
	     * @constructor
	     */
	    readonly TotalHours: Double;
	    /**
	     * the Minute of this TimeSpan
	     * @constructor
	     */
	    readonly Minute: Integer;
	    /**
	     * the TimeSpan in Minutes
	     * @constructor
	     */
	    readonly TotalMinutes: Double;
	    /**
	     * the Second of this TimeSpan
	     * @constructor
	     */
	    readonly Second: Integer;
	    /**
	     * the TimeSpan in Seconds
	     * @constructor
	     */
	    readonly TotalSeconds: Double;
	    /**
	     * the Millisecond of this TimeSpan
	     * @constructor
	     */
	    readonly Millisecond: Integer;
	    /**
	     * the TimeSpan in Milliseconds
	     * @constructor
	     */
	    readonly TotalMilliseconds: Double;
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
	    constructor(hours?: Integer, minutes?: Integer, seconds?: Integer, milliseconds?: Integer, days?: Integer);
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
	    static FromISOString(isoStr: Chars): TimeSpan;
	    /**
	     * create TimeSpan from Milliseconds
	     * @param milliseconds
	     * @constructor
	     */
	    static FromMilliseconds(milliseconds: Integer): TimeSpan;
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
	    ToString(fmt?: Chars): Chars;
	}

}
declare module 'complex/date-time' {
	import { DateTime as LuxonDateTime } from 'luxon';
	import { TimeSpan } from 'complex/time-span';
	import { Integer } from 'primitive/integer';
	import { Chars } from 'primitive/chars';
	/**
	 * represent a DateTime DataType
	 */
	export class DateTime {
	    private _date;
	    /**
	     * Year of the Date
	     * @constructor
	     */
	    readonly Year: Integer;
	    /**
	     * Month of the Date
	     * @constructor
	     */
	    readonly Month: Integer;
	    /**
	     * Day of the Date in Month
	     * @constructor
	     */
	    readonly Day: Integer;
	    /**
	     * Hour of the Day
	     * @constructor
	     */
	    readonly Hour: Integer;
	    /**
	     * Minute of the Day
	     * @constructor
	     */
	    readonly Minute: Integer;
	    /**
	     * Second of the Day
	     * @constructor
	     */
	    readonly Second: Integer;
	    /**
	     * Millisecond of the Day
	     * @constructor
	     */
	    readonly Millisecond: Integer;
	    /**
	     * get the DateTime as UTC
	     * @constructor
	     */
	    readonly UTC: DateTime;
	    /**
	     * the offset to UTC Timezone in Minutes
	     * @constructor
	     */
	    readonly UTCOffsetMinutes: Integer;
	    /**
	     * the current Timezone Name
	     * @constructor
	     */
	    readonly Zone: Chars;
	    /**
	     * the Weekday of the DateTime
	     * @constructor
	     */
	    readonly DayOfWeek: Integer;
	    /**
	     * the Day in the Year of the DateTime
	     * @constructor
	     */
	    readonly DayOfYear: Integer;
	    /**
	     * the Number of the Days in the DateTime Year
	     * @constructor
	     */
	    readonly DaysInYear: Integer;
	    /**
	     * the Number of Days in the Month of the DateTime
	     * @constructor
	     */
	    readonly DaysInMonth: Integer;
	    /**
	     * the Quarter of the Year of the DateTime
	     * @constructor
	     */
	    readonly YearQuarter: Integer;
	    /**
	     * the Week Number of the Year of DateTime
	     * @constructor
	     */
	    readonly YearWeekNumber: Integer;
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
	    constructor(zone?: Chars, year?: Integer, month?: Integer, day?: Integer, hour?: Integer, minute?: Integer, second?: Integer, millisecond?: Integer);
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
	    static FromJavascriptDate(date: Date, zone?: Chars): DateTime;
	    /**
	     * create DateTime from ISO Chars
	     * you have to specify the Timezone or UTC was taken!
	     * @param isoStr
	     * @param zone
	     */
	    static FromISOString(isoStr: Chars, zone?: Chars): DateTime;
	    /**
	     * create DateTime from Milliseconds
	     * @param milliseconds
	     * @param zone
	     * @constructor
	     */
	    static FromMilliseconds(milliseconds: Integer, zone?: Chars): DateTime;
	    /**
	     * get the DateTime in a specific Timezone
	     * @param zone
	     */
	    ToZone(zone: Chars): DateTime;
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
	    AddYears(years: Integer): DateTime;
	    /**
	     * add a number of Months to this DateTime
	     * @param months
	     * @constructor
	     */
	    AddMonths(months: Integer): DateTime;
	    /**
	     * add a number of Days to this DateTime
	     * @param days
	     * @constructor
	     */
	    AddDays(days: Integer): DateTime;
	    /**
	     * add a number of Hours to this DateTime
	     * @param hours
	     * @constructor
	     */
	    AddHours(hours: Integer): DateTime;
	    /**
	     * add a number of Minutes to this DateTime
	     * @param minutes
	     * @constructor
	     */
	    AddMinutes(minutes: Integer): DateTime;
	    /**
	     * add a number of Seconds to this DateTime
	     * @param seconds
	     * @constructor
	     */
	    AddSeconds(seconds: Integer): DateTime;
	    /**
	     * add a number of Milliseconds to this DateTime
	     * @param milliseconds
	     * @constructor
	     */
	    AddMilliseconds(milliseconds: Integer): DateTime;
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
	    ToString(fmt?: Chars): Chars;
	}

}
declare module 'pattern/events/event-handler' {
	 type EventCallback<T, K> = (sender: T, args: K) => void;
	/**
	 * represent a Event Handler
	 */
	export class EventHandler<T, K> {
	    private _callbacks;
	    private _instance;
	    /**
	     * create a new Event Handler for an Instance
	     * @param instance
	     */
	    constructor(instance: T);
	    /**
	     * invoke the Event on the Handler
	     * @param args
	     * @constructor
	     */
	    Invoke(args: K): void;
	    /**
	     * do something when the Handler is invoked
	     * @param cb
	     * @constructor
	     */
	    Subscribe(cb: EventCallback<T, K>): void;
	}
	export {};

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
	 * @param item
	 * @param cb
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

}
declare module 'ts-tooling' {
	import { Double } from 'primitive/double';
	import { Integer } from 'primitive/integer';
	import { Chars } from 'primitive/chars';
	import { DateTime } from 'complex/date-time'; global {
	    interface Number {
	        ToDouble(): Double;
	        ToInteger(): Integer;
	    }
	    interface String {
	        ToChars(): Chars;
	        ToDouble(): Double;
	        ToInteger(): Integer;
	    }
	    interface Date {
	        ToDateTime(): DateTime;
	    }
	}
	export { EventHandler } from 'pattern/events/event-handler';
	export { using } from 'pattern/dispose/using';
	export { IDisposable } from 'pattern/dispose/disposable';
	export { Dictionary } from 'collections/dictionary';
	export { List } from 'collections/list';
	export { ListSortOrder } from 'collections/list-sort-order.enum';
	export { Double } from 'primitive/double';
	export { Integer } from 'primitive/integer';
	export { Chars } from 'primitive/chars';
	export { DateTime } from 'complex/date-time';
	export { TimeSpan } from 'complex/time-span';
	export { create } from 'pattern/construct';

}
