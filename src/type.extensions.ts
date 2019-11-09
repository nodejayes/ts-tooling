import {DateTime} from './complex/date.time';
import './primitive/number.extension';
import './primitive/string.extension';
import {ListSortOrder} from "./primitive/list.sort.order.enum";

// Basic Extensions
declare global {
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
         * split the String into a List of Strings by Words
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
         * split the Chars in a List of Texts by Pattern
         * @param pattern
         * @constructor
         */
        Split(pattern: string): string[];

        /**
         * convert all letters from the Chars to Lowercase
         * @constructor
         */
        ToLower(): string;

        /**
         * convert all Letters from the Chars to Uppercase
         * @constructor
         */
        ToUpper(): string;

        /**
         * trim the Chars by a sequence on both sides
         * @param sequence
         * @constructor
         */
        Trim(sequence: string): string;

        /**
         * trim the Chars by sequence on Start
         * @param sequence
         * @constructor
         */
        TrimStart(sequence: string): string;

        /**
         * trim the Chars by sequence on end
         * @param sequence
         * @constructor
         */
        TrimEnd(sequence: string): string;

        /**
         * truncate the Chars by text length
         * @param length
         * @param omission
         * @param separator
         * @constructor
         */
        Truncate(length: number, omission?: string, separator?: string): string;

        /**
         * clone this Chars Instance into a new One
         * @constructor
         */
        Clone(): string;

        /**
         * this Chars contains the given Chars?
         * @param search
         * @constructor
         */
        Contains(search: string): boolean;

        /**
         * gets the Number of found Chars
         * @param search
         * @param allowOverlapping
         * @constructor
         */
        ContainsCount(search: string, allowOverlapping?: boolean): number;

        /**
         * the given Chars are Equals this One?
         * @param value
         * @constructor
         */
        Equals(value: string): boolean;

        /**
         * insert a new String into the Chars at Position
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
         * find the first match of the Chars and return the Index Number
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
         * get the Maximum Value in the List
         * ATTENTION only in Numeric Lists
         * @constructor
         */
        Max(): number;

        /**
         * get the Min Value of the List
         * ATTENTION only in Numeric Lists
         * @constructor
         */
        Min(): number;

        /**
         * get the Mean of this List
         * ATTENTION only in Numeric Lists
         * @constructor
         */
        Mean(): number;

        /**
         * get the Sum of this List
         * ATTENTION only in Numeric Lists
         * @constructor
         */
        Sum(): number;

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
         * reduce a List of Elements into a new Element
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
        Copy(): T[];

        /**
         * check if a Items exists that match the specific Filter
         * @constructor
         */
        Exists(findMethod: (d: T) => boolean): boolean;

        /**
         * returns the First match of an Item from the List by specific Filter
         * @param findMethod
         * @constructor
         */
        Find(findMethod: (d: T) => boolean): T;

        /**
         * returns the Last match of an Item from the List by specific Filter
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
         * returns the Index of the Last match Item from the List by specific Filter
         * @param findMethod
         * @constructor
         */
        FindLastIndex(findMethod: (d: T) => boolean): number;

        /**
         * check if the condition is true for all Items in the List
         * @param matchMethod
         * @constructor
         */
        TrueForAll(matchMethod: (d: T) => boolean): boolean;

        /**
         * insert a new Item at the Index into the List
         * @param index
         * @param element
         * @constructor
         */
        Insert(index: number, element: T): void;

        /**
         * insert multiple Items at the Index into the List
         * @param index
         * @param elements
         * @constructor
         */
        InsertRange(index: number, elements: T[]): void;

        /**
         * get the Index of an Intem in the List
         * @param element
         * @param fromIndex
         * @constructor
         */
        IndexOf(element: T, fromIndex?: number): number;

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
        RemoveAll(match: (d: T) => boolean): void;

        /**
         * remove a Item at a specific Index
         * @param index
         * @constructor
         */
        RemoveAt(index: number): void;

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
        Reverse(): T[];

        /**
         * sort primitive List by ASC or DESC order
         * @param order
         * @constructor
         */
        Sort(order?: ListSortOrder): T[];

        /**
         * sort complex List by multiple Keys
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
         * have the List more that one Item
         * @constructor
         */
        Any(): boolean;

        /**
         * find the First match Item or return a Default Value
         * @param findMethod
         * @param def
         * @constructor
         */
        FirstOrDefault(findMethod: (d: T) => boolean, def?: T): T;

        /**
         * find the Last match Item or return a Default Value
         * @param findMethod
         * @param def
         * @constructor
         */
        LastOrDefault(findMethod: (d: T) => boolean, def?: T): T;

        /**
         * group a List by a specific Key that was returned by transform Function
         * @param transformMethod
         * @constructor
         */
        GroupBy(transformMethod: (d: T) => any): {[key: string]: T[]};

        /**
         * convert a List into another List
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
        MaxBy(filterMethod: (d: T) => number): T;

        /**
         * get the Min Element
         * must have a Numeric Property
         * @param filterMethod
         * @constructor
         */
        MinBy(filterMethod: (d: T) => number): T;

        /**
         * get the Mean of complex element
         * must have a Numeric Property
         * @param filterMethod
         * @constructor
         */
        MeanBy(filterMethod: (d: T) => number): T;

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
