import './primitive/number.extension';
import './primitive/string.extension';
import './primitive/list.extension';

import {ListSortOrder} from './primitive/list.sort.order.enum';

type ConvertMethod<T, K> = ((d: T) => K) | ((d: T) => Promise<K>);
type TransformMethod<T> = (d: T) => any;
type FilterNumber<T> = (d: T) => number;
type FindMethod<T> = (d: T) => boolean;
type ReducerMethod<T, K> = (target: K, e: T) => K;


// Basic Extensions
declare global {
    interface Number {
        /**
         * Checks if a number is within 2 limits.
         *
         * The limit values are included!
         *
         * @param lower the lower limit
         * @param upper the upper limit
         *
         * @example
         * // returns true
         * 1.2.IsInRange(1.0, 2.0);
         * 1.0.IsInRange(1.0, 2.0);
         * 2.0.IsInRange(1.0, 2.0);
         * // returns false
         * 5.2.IsInRange(1.0, 2.0)
         */
        IsInRange?(lower: number, upper: number): boolean;

        /**
         * Checks if a number is equal to the current number.
         *
         * @param value the Number to check again the current Number
         *
         * @example
         * // returns true
         * (1).Equals(1)
         * // returns false
         * (1).Equals(2)
         */
        Equals?(value: number): boolean;

        /**
         * Checks if a number is greater than the current number.
         *
         * @param value the Number to check again the current Number
         *
         * @example
         * // returns true
         * (1).IsAbove(0)
         * // returns false
         * (1).IsAbove(1)
         * (1).IsAbove(5)
         */
        IsAbove?(value: number): boolean;

        /**
         * Checks if a number is lower than the current number.
         *
         * @param value the Number to check again the current Number
         *
         * @example
         * // returns true
         * (1).IsBelow(5)
         * // returns false
         * (1).IsBelow(1)
         * (1).IsBelow(0)
         */
        IsBelow?(value: number): boolean;

        /**
         * Sets the value of the number to the lower or upper limit if the number is greater or smaller than the opere or lower limit.
         *
         * @param lower the lower limit
         * @param upper the upper limit
         *
         * @example
         * // returns 10
         * (20).Clamp(1, 10);
         * (10).Clamp(1, 10);
         * // returns 9
         * (9).Clamp(1, 10);
         * // returns 1
         * (1).Clamp(1, 10);
         * (0.5).Clamp(1, 10);
         */
        Clamp?(lower: number, upper: number): number;

        /**
         * Add the current number to the given number.
         *
         * @param value the Number to add to the current Number
         *
         * @example
         * ```
         * // returns 2
         * (1).Add(1);
         * // returns 3
         * (1).Add(1).Add(1);
         * ```
         */
        Add?(value: number): number;

        /**
         * Subtracts the current number with the given number.
         *
         * @param value the Number to subtract from the current Number
         *
         * @example
         * // returns 1
         * (2).Subtract(1);
         * // returns 0
         * (2).Subtract(1).Subtract(1);
         */
        Subtract?(value: number): number;

        /**
         * Multiplies the current number by the given number.
         *
         * @param value the Number to multiply from the current Number
         *
         * @example
         * // returns 10
         * (1).Multiply(10);
         * // returns 20
         * (1).Multiply(10).Multiply(2);
         */
        Multiply?(value: number): number;

        /**
         * Divides the current number with the given number.
         *
         * @param value the Number to multiply from the current Number
         *
         * @example
         * // returns 5
         * (10).Divide(2);
         * // returns 5
         * (20). Divide(2).Divide(2);
         * // throws an Error
         * (10).Divide(0);
         */
        Divide?(value: number): number;

        /**
         * increases the number by 1 or the value that was given.
         *
         * @param step Number to be incremented by
         *
         * @example
         * // returns 2
         * (1).Increment();
         * // returns 5
         * (1).Increment(4);
         */
        Increment?(step?: number): number;

        /**
         * decreases the number by 1 or the value that was given.
         *
         * @param step Number to be decremented by
         *
         * @example
         * // returns 4
         * (5).Decrement();
         * // returns 1
         * (5).Decrement(4);
         */
        Decrement?(step?: number): number;

        /**
         * Rounds a number up or down if the next digit is greater than or equal to 5.
         *
         * @param precision Number of digits used for rounding
         *
         * @example
         * // returns 4
         * 4.006.Round();
         * // returns 4.01
         * 4.006.Round(2);
         * // returns 4100
         * (4060).Round(-2);
         */
        Round?(precision?: number): number;

        /**
         * Rounding off a number
         *
         * @param precision Number of digits used for rounding
         *
         * @example
         * // returns 4
         * 4.006.Floor();
         * // returns 0.04
         * 0.046.Floor(2);
         * // returns 4000
         * (4060).Floor(-2);
         */
        Floor?(precision?: number): number;

        /**
         * Rounding up a number
         *
         * @param precision Number of digits used for rounding
         *
         * @example
         * // returns 5
         * 4.006.Ceil();
         * // returns 6.01
         * 6.004.Ceil(2);
         * // returns 6100
         * (6040).Ceil(-2);
         */
        Ceil?(precision?: number): number;

        /**
         * number of digits before the decimal point
         *
         * @example
         * // returns 1
         * (1.5).Numerals();
         * (1).Numerals();
         * // returns 2
         * (10).Numerals();
         */
        Numerals?(): number;

        /**
         * Number of digits after the decimal point
         *
         * @example
         * // returns 0
         * (1).DecimalPlaces();
         * // returns 1
         * (1.5).DecimalPlaces();
         */
        DecimalPlaces?(): number;
    }
    interface String {
        /**
         * convert the String into a Number (integer) when it possible
         * @constructor
         */
        ToInteger?(): number;

        /**
         * convert the String into a Number (double) when it possible
         * @constructor
         */
        ToDouble?(): number;

        /**
         * returns a Character at Position in this String
         * @param pos the Position of the Character to return
         * @constructor
         */
        CharAt?(pos: number): string;

        /**
         * convert to CamelCase String
         * @constructor
         */
        ToCamelCase?(): string;

        /**
         * make the first letter to Uppercase
         * @constructor
         */
        Capitalize?(): string;

        /**
         * converting Latin-1 Supplement and Latin Extended-A letters
         * to basic Latin letters and removing combining diacritical marks.
         * @constructor
         */
        Deburr?(): string;

        /**
         * check if the String starts with a specific letter combination
         * @param search
         * @param position
         * @constructor
         */
        StartsWith?(search: string, position?: number): boolean;

        /**
         * check if the String ends with a specific letter combination
         * @param search
         * @param position
         * @constructor
         */
        EndsWith?(search: string, position?: number): boolean;

        /**
         * escape the String to HTML
         * @constructor
         */
        HTMLEscape?(): string;

        /**
         * unescape HTML String to normal String
         * @constructor
         */
        HTMLUnescape?(): string;

        /**
         * escape to a String used by a Regex
         * @constructor
         */
        RegExpEscape?(): string;

        /**
         * convert the String to Kebab Case
         * @constructor
         */
        ToKebabCase?(): string;

        /**
         * conver the String to Snake Case
         * @constructor
         */
        ToSnakeCase?(): string;

        /**
         * convert the String to Start Case
         * @constructor
         */
        ToStartCase?(): string;

        /**
         * convert the String to lowercase
         * @constructor
         */
        ToLowerCase?(): string;

        /**
         * convert a String to uppercase
         * @constructor
         */
        ToUpperCase?(): string;

        /**
         * convert the first letter of the String to lowercase
         * @constructor
         */
        LowerFirst?(): string;

        /**
         * convert the first letter of the String to uppercase
         * @constructor
         */
        UpperFirst?(): string;

        /**
         * split the String into a Array of Strings by Words
         * @constructor
         */
        Words?(): string[];

        /**
         * concat two strings optional with a Separator string
         * @param appender
         * @param separator
         * @constructor
         */
        Concat?(appender: string, separator?: string): string;

        /**
         * join a Array of strings into a new string
         * @param appender
         * @param separator
         * @constructor
         */
        Join?(appender: string[], separator?: string): string;

        /**
         * fill the String from left and right
         * @param length
         * @param template
         * @constructor
         */
        Pad?(length: number, template?: string): string;

        /**
         * fill the String from left
         * @param length
         * @param template
         * @constructor
         */
        PadLeft?(length: number, template?: string): string;

        /**
         * fill the String from right
         * @param length
         * @param template
         * @constructor
         */
        PadRight?(length: number, template?: string): string;

        /**
         * repeat the String x times
         * @param times
         * @constructor
         */
        Repeat?(times: number): string;

        /**
         * replace the first matching with other text
         * @param search
         * @param replacer
         * @constructor
         */
        Replace?(search: string, replacer: string): string;

        /**
         * replace all matchings with other text
         * @param search
         * @param replacer
         * @constructor
         */
        ReplaceAll?(search: string, replacer: string): string;

        /**
         * split the String in a Array of Texts by Pattern
         * @param pattern
         * @constructor
         */
        Split?(pattern: string): string[];

        /**
         * convert all letters from the String to Lowercase
         * @constructor
         */
        ToLower?(): string;

        /**
         * convert all Letters from the String to Uppercase
         * @constructor
         */
        ToUpper?(): string;

        /**
         * trim the String by a sequence on both sides
         * @param sequence
         * @constructor
         */
        Trim?(sequence: string): string;

        /**
         * trim the String by sequence on Start
         * @param sequence
         * @constructor
         */
        TrimStart?(sequence: string): string;

        /**
         * trim the String by sequence on end
         * @param sequence
         * @constructor
         */
        TrimEnd?(sequence: string): string;

        /**
         * truncate the String by text length
         * @param length
         * @param omission
         * @param separator
         * @constructor
         */
        Truncate?(length: number, omission?: string, separator?: string): string;

        /**
         * clone this String Instance into a new One
         * @constructor
         */
        Clone?(): string;

        /**
         * this String contains the given String?
         * @param search
         * @constructor
         */
        Contains?(search: string): boolean;

        /**
         * gets the Number of found String
         * @param search
         * @param allowOverlapping
         * @constructor
         */
        ContainsCount?(search: string, allowOverlapping?: boolean): number;

        /**
         * the given String are Equals this One?
         * @param value
         * @constructor
         */
        Equals?(value: string): boolean;

        /**
         * insert a new String into the String at Position
         * @param startIndex
         * @param value
         * @constructor
         */
        Insert?(startIndex: number, value: string): string;

        /**
         * remove chars at position
         * @param position
         * @param count
         * @constructor
         */
        Remove?(position: number, count?: number): string;

        /**
         * get the chars from position with length or all
         * @param position
         * @param length
         * @constructor
         */
        Substring?(position: number, length?: number): string;

        /**
         * find the first match of the String and return the Index Number
         * @param value
         * @constructor
         */
        IndexOf?(value: string): number;

        /**
         * find the Last match of the chars and return the Index Number
         * @param value
         * @constructor
         */
        LastIndexOf?(value: string): number;

        /**
         * get Text between 2 searches
         * @param begin
         * @param end
         * @constructor
         */
        TextBetween?(begin: string, end: string): string[];

        /**
         * the current String contains only Ascii Characters
         * @constructor
         */
        IsAscii?(): boolean;

        /**
         * check if the String only contains letters a-z
         * @constructor
         */
        IsAlpha?(): boolean;

        /**
         * return the Size of the String in Bytes
         * @constructor
         */
        Bytes?(): number;
    }
    interface Array<T> {
        /**
         * the number of items in the list
         * @constructor
         */
        Count?(): number;

        /**
         * get the Maximum Value in the Array
         * ATTENTION only in Numeric Lists
         * @constructor
         */
        Max?(): number;

        /**
         * get the Min Value of the Array
         * ATTENTION only in Numeric Lists
         * @constructor
         */
        Min?(): number;

        /**
         * get the Mean of this Array
         * ATTENTION only in Numeric Lists
         * @constructor
         */
        Mean?(): number;

        /**
         * get the Sum of this Array
         * ATTENTION only in Numeric Lists
         * @constructor
         */
        Sum?(): number;

        /**
         * add a new Item into the Array
         * @param element
         * @constructor
         */
        Add?(element: T): void;

        /**
         * add a Item to the Array if not exists in the Array
         * @param element
         * @constructor
         */
        AddIfNotExists?(element: T): boolean;

        /**
         * reduce a Array of Elements into a new Element
         * @param reducer
         * @param initial
         * @constructor
         */
        Reduce?<K>(reducer: ReducerMethod<T, K>, initial: K): K;

        /**
         * same as Add with multiple Items
         * @param elements
         * @constructor
         */
        AddRange?(elements: T[]): void;

        /**
         * same as AddIfNotExists with multiple items
         * @param elements
         * @constructor
         */
        AddRangeIfNotExists?(elements: T[]): boolean[];

        /**
         * remove all Items from the Array
         * @constructor
         */
        Clear?(): void;

        /**
         * check if an Item is in the Array
         * @param element
         * @constructor
         */
        Contains?(element: T): boolean;

        /**
         * copy the complete Array into a new One
         * @constructor
         */
        Copy?(): T[];

        /**
         * check if a Items exists that match the specific Filter
         * @constructor
         */
        Exists?(findMethod: FindMethod<T>): boolean;

        /**
         * returns the First match of an Item from the Array by specific Filter
         * @param findMethod
         * @constructor
         */
        Find?(findMethod: FindMethod<T>): T;

        /**
         * returns the Last match of an Item from the Array by specific Filter
         * @param findMethod
         * @constructor
         */
        FindLast?(findMethod: FindMethod<T>): T;

        /**
         * returns the index of the First Item that matches the specific Filter
         * @param findMethod
         * @constructor
         */
        FindIndex?(findMethod: FindMethod<T>): number;

        /**
         * returns all Items that matches the specific Filter
         * @param findMethod
         * @constructor
         */
        FindAll?(findMethod: FindMethod<T>): T[];

        /**
         * returns the Index of the Last match Item from the Array by specific Filter
         * @param findMethod
         * @constructor
         */
        FindLastIndex?(findMethod: FindMethod<T>): number;

        /**
         * check if the condition is true for all Items in the Array
         * @param matchMethod
         * @constructor
         */
        TrueForAll?(matchMethod: FindMethod<T>): boolean;

        /**
         * insert a new Item at the Index into the Array
         * @param index
         * @param element
         * @constructor
         */
        Insert?(index: number, element: T): T[];

        /**
         * insert multiple Items at the Index into the Array
         * @param index
         * @param elements
         * @constructor
         */
        InsertRange?(index: number, elements: T[]): T[];

        /**
         * get the Index of an Intem in the Array
         * @param element
         * @param fromIndex
         * @constructor
         */
        IndexOf?(element: T, fromIndex?: number): number;

        /**
         * removes a Item from the Array
         * @param element
         * @constructor
         */
        Remove?(element: T): void;

        /**
         * remove all Items from Array that match the Filter
         * @param match
         * @constructor
         */
        RemoveAll?(match: FindMethod<T>): void;

        /**
         * remove a Item at a specific Index
         * @param index
         * @constructor
         */
        RemoveAt?(index: number): void;

        /**
         * remove all these Items from the Array
         * @param elements
         * @constructor
         */
        RemoveRange?(elements: T[]): void;

        /**
         * turn around the whole Array
         * @constructor
         */
        Reverse?(): T[];

        /**
         * sort primitive Array by ASC or DESC order
         * @param order
         * @constructor
         */
        Sort?(order?: ListSortOrder): T[];

        /**
         * sort complex Array by multiple Keys
         * @param keys
         * @param orders
         * @constructor
         */
        SortBy?(keys: string[], orders?: ListSortOrder[]): T[];

        /**
         * get the Item at the Index
         * @param index
         * @constructor
         */
        ElementAt?(index: number): T;

        /**
         * have the Array more that one Item
         * @param condition the condition to search the element
         * @constructor
         */
        Any?(condition?: FindMethod<T>): boolean;

        /**
         * find the First match Item or return a Default Value
         * @param findMethod
         * @param def
         * @constructor
         */
        FirstOrDefault?(findMethod?: FindMethod<T>, def?: T): T;

        /**
         * find the Last match Item or return a Default Value
         * @param findMethod
         * @param def
         * @constructor
         */
        LastOrDefault?(findMethod?: FindMethod<T>, def?: T): T;

        /**
         * group a Array by a specific Key that was returned by transform Function
         * @param transformMethod
         * @constructor
         */
        GroupBy?(transformMethod: TransformMethod<T>): {[key: string]: T[]};

        /**
         * group a Array by a specific Key and returns only the Grouped Keys
         * @param transformMethod
         * @constructor
         */
        GroupKeys?(transformMethod: TransformMethod<T>): string[];

        /**
         * convert a Array into another Array
         * @param convertMethod
         * @constructor
         */
        Convert?<K>(convertMethod: ConvertMethod<T, K>): K[];

        /**
         * get the Max Element
         * must have a Numeric Property
         * @param filterMethod
         * @constructor
         */
        MaxBy?<K>(filterMethod: FilterNumber<T>): K;

        /**
         * get the Min Element
         * must have a Numeric Property
         * @param filterMethod
         * @constructor
         */
        MinBy?<K>(filterMethod: FilterNumber<T>): K;

        /**
         * get the Mean of complex element
         * must have a Numeric Property
         * @param filterMethod
         * @constructor
         */
        MeanBy?<K>(filterMethod: FilterNumber<T>): K;

        /**
         * calculate a Sum
         * @param filterMethod
         * @constructor
         */
        SumBy?(filterMethod: FilterNumber<T>): number;

        /**
         * joins the Array Elements to a single String split by separator
         * @param separator
         * @constructor
         */
        Join?(separator?: string): string;

        UnionBy?<T>(arr: T[], filterMethod: FindMethod<T>): T[];
    }
}
