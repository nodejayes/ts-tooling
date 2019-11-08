import {DateTime} from './complex/date-time';
import './primitive/number.extension';
import './primitive/string.extension';
import {List} from "./collections/list";

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
         * check if a String is empty
         * @constructor
         */
        IsNullOrEmpty(): boolean;

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
    interface Date {
        ToDateTime(): DateTime;
    }
}