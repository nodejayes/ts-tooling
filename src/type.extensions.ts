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
         * Returns a letter of a string at a certain position.
         *
         * @category string
         *
         * @param pos The index of the letter to be returned.
         * @returns the Letter at the Position
         *
         * @example
         * // returns "H"
         * 'Hello'.CharAt(0);
         * // returns "o"
         * 'Hello'.CharAt(4);
         * // throws an Error while string has not enough letters
         * 'Hello'.CharAt(5);
         */
        CharAt?(pos: number): string;

        /**
         * Converts a string so that the first letter of the string is capital and all others are small.
         *
         * @category string
         *
         * @returns the capitalized String
         *
         * @example
         * // retruns "Hello"
         * 'hello'.Capitalize();
         * 'HELLO'.Capitalize();
         * 'Hello'.Capitalize();
         */
        Capitalize?(): string;

        /**
         * checks whether a string begins with a character string.
         *
         * @category string
         *
         * @param search the string with which the string should begin
         * @param position an offset parameter
         * @returns the string begins with the string
         *
         * @example
         * // returns true
         * 'abcdefg'.StartsWith('abc');
         * 'abcdefg'.StartsWith('b', 1);
         * // returns false
         * 'abcdefg'.StartsWith('b', 2);
         * 'abcdefg'.StartsWith('z');
         */
        StartsWith?(search: string, position?: number): boolean;

        /**
         * checks whether a string ends with a character string.
         *
         * @category string
         *
         * @param search the string with which the string should end
         * @param position an offset parameter
         * @returns the string ends with the search
         *
         * @example
         * ```
         * // returns true
         * 'abcdefg'.EndsWith('efg');
         * 'abcdefg'.EndsWith('f', 6);
         * // returns false
         * 'abcdefg'.EndsWith('f', 1);
         * 'abcdefg'.EndsWith('z');
         * ```
         */
        EndsWith?(search: string, position?: number): boolean;

        /**
         * escape to a HTML safe string
         *
         * @category string
         *
         * @returns a escaped HTML String
         *
         * @example
         * // returns "fred, barney, &amp; pebbles"
         * 'fred, barney, & pebbles'.HTMLEscape();
         */
        HTMLEscape?(): string;

        /**
         * unescape a escaped HTML String
         *
         * @category string
         *
         * @returns a unescaped HTML String
         *
         * @example
         * // returns "fred, barney, & pebbles"
         * 'fred, barney, &amp; pebbles'.HTMLUnescape();
         */
        HTMLUnescape?(): string;

        /**
         * escape a String used for Regular Expression
         *
         * @category string
         *
         * @returns a escaped Regular Expression
         *
         * @example
         * // returns "\[lodash\]\(https://lodash\.com/\)"
         * '[lodash](https://lodash.com/)'.RegExpEscape();
         */
        RegExpEscape?(): string;

        /**
         * convert a string into a Integer number Value
         *
         * @category string
         *
         * @returns a number instance that represents a integer
         *
         * @example
         * // returns 1
         * '1'.ToInteger();
         * '1.5'.ToInteger();
         * // returns 0
         * 'aaa'.ToInteger();
         */
        ToInteger?(): number;

        /**
         * convert a string into a Double number Value
         *
         * @category string
         *
         * @returns a number instance that represents a double
         *
         * @example
         * // returns 1.0
         * '1'.ToDouble();
         * '1.0'.ToDouble();
         * // returns 1.5
         * '1.5'.ToDouble();
         * // returns 0.0
         * 'aaa'.ToDouble();
         */
        ToDouble?(): number;

        /**
         * Converts a string into the Camel Case format.
         *
         * @category string
         *
         * @returns the Camel Case String
         *
         * @example
         * // returns "fooBar"
         * 'Foo Bar'.ToCamelCase()
         * '--foo-bar--'.ToCamelCase()
         * '__FOO_BAR__'.ToCamelCase()
         */
        ToCamelCase?(): string;

        /**
         * Converts a string into the Kebab Case format.
         *
         * @category string
         *
         * @returns the Kebab Case String
         *
         * @example
         * // returns "foo-bar"
         * 'Foo Bar'.ToKebabCase();
         * 'fooBar'.ToKebabCase();
         * '__FOO_BAR__'.ToKebabCase();
         */
        ToKebabCase?(): string;

        /**
         * Converts a string into the Snake Case format.
         *
         * @category string
         *
         * @returns the Snake Case String
         *
         * @example
         * // returns "foo_bar"
         * 'Foo Bar'.ToSnakeCase();
         * 'fooBar'.ToSnakeCase();
         * '--FOO-BAR--'.ToSnakeCase();
         */
        ToSnakeCase?(): string;

        /**
         * Converts a string into the Start Case format.
         *
         * @category string
         *
         * @returns the Start Case String
         *
         * @example
         * // returns "Foo Bar"
         * '--foo-bar--'.ToStartCase();
         * 'fooBar'.ToStartCase();
         * // returns "FOO BAR"
         * '__FOO_BAR__'.ToStartCase();
         */
        ToStartCase?(): string;

        /**
         * converts every letter of the string into lower case
         *
         * @category string
         *
         * @returns the lower case string
         *
         * @example
         * // returns "hello"
         * 'HELLO'.ToLowerCase();
         */
        ToLowerCase?(): string;

        /**
         * converts every letter of the string into upper case
         *
         * @category string
         *
         * @returns the upper case string
         *
         * @example
         * ```
         * // returns "HELLO"
         * 'hello'.ToLowerCase();
         * ```
         */
        ToUpperCase?(): string;

        /**
         * convert the first letter of the string into lower case
         *
         * @category string
         *
         * @returns the new string with the lower case first letter
         *
         * @example
         * // returns "hello"
         * 'Hello'.LowerFirst();
         * 'hello'.LowerFirst();
         */
        LowerFirst?(): string;

        /**
         * convert the first letter of the string into upper case
         *
         * @category string
         *
         * @returns the new string with the upper case first letter
         *
         * @example
         * // returns "Hello"
         * 'hello'.UpperFirst();
         * 'Hello'.UpperFirst();
         */
        UpperFirst?(): string;

        /**
         * splits a string into an array of its words.
         *
         * @category string
         *
         * @param filter a word filter that can be applied
         * @param pattern a custom split pattern
         * @returns a Array of Words
         *
         * @example
         * // returns ['hello', 'is', 'a', 'word', 'of', 'a', 'sentence']
         * 'hello is a word of a sentence'.Words();
         * // returns ['a']
         * 'abcd'.Words(null, 'a');
         * // returns ['hello', 'word', 'sentence']
         * 'hello is a word of a sentence'
         *     .Words(e => [
         *         'hello', 'word', 'sentence'
         *     ].Contains(e)
         * );
         */
        Words?(filter?: (word: string) => boolean, pattern?: string): string[];

        /**
         * concat 2 strings
         *
         * @category string
         *
         * @param appender the string to append
         * @param separator a template string that separates each concat string member
         * @returns the concated string
         *
         * @example
         * // returns "ab"
         * 'a'.Concat('b');
         * // returns "a#b"
         * 'a'.Concat('b', '#');
         */
        Concat?(appender: string, separator?: string): string;

        /**
         * same as Concat only with multiple strings.
         *
         * @category string
         *
         * @param appender the strings to append at the end
         * @param separator a template string that separates each concat string member
         * @returns the joinded string
         *
         * @example
         * // returns "testabc"
         * 'test'.Join(['a','b','c']);
         * // returns "test#a#b#c"
         * 'test'.Join(['a','b','c'], '#');
         * // returns "a#b#c"
         * ''.Join(['a','b','c'], '#');
         */
        Join?(appender: string[], separator?: string): string;

        /**
         * fills a string alternately from left and right.
         *
         * @category string
         *
         * @param length Specifies how long the string should be
         * @param template the string to be inserted
         * @returns the padded string
         *
         * @example
         * // returns "_-abc_-_"
         * 'abc'.Pad(8, '_-');
         * // returns "  abc   "
         * 'abc'.Pad(8);
         * // returns "abcdefg"
         * 'abcdefg'.Pad(3, '-');
         */
        Pad?(length: number, template?: string): string;

        /**
         * fills a string from left.
         *
         * @category string
         *
         * @param length Specifies how long the string should be
         * @param template the string to be inserted
         * @returns the padded string
         *
         * @example
         * // returns "__abc"
         * 'abc'.PadLeft(5, '_');
         * // returns "  abc"
         * 'abc'.PadLeft(5);
         * // returns "abcdefg"
         * 'abcdefg'.PadLeft(3, '-');
         */
        PadLeft?(length: number, template?: string): string;

        /**
         * fills a string from right.
         *
         * @category string
         *
         * @param length Specifies how long the string should be
         * @param template the string to be inserted
         * @returns the padded string
         *
         * @example
         * // returns "abc__"
         * 'abc'.PadRight(5, '_');
         * // returns "abc  "
         * 'abc'.PadRight(5);
         * // returns "abcdefg"
         * 'abcdefg'.PadRight(3, '-');
         */
        PadRight?(length: number, template?: string): string;

        /**
         * repeat the current string x times
         *
         * @category string
         *
         * @param times how many repeats
         * @returns repeated string
         *
         * @example
         * // returns "*****"
         * '*'.Repeat(5);
         */
        Repeat?(times: number): string;

        /**
         * replace the first match on the current String
         *
         * @category string
         *
         * @param search the pattern to search on the string
         * @param replacer the string that replaces the found string
         * @returns the replaced string
         *
         * @example
         * // returns "azcdefg"
         * 'abcdefg'.Replace('b', 'z');
         * // returns "azbcdefg"
         * 'abbcdefg'.Replace('b', 'z');
         */
        Replace?(search: string, replacer: string): string;

        /**
         * replace all matches on the current String
         *
         * @category string
         *
         * @param search the pattern to search on the string
         * @param replacer the string that replaces the found string
         * @returns the replaced string
         *
         * @example
         * // returns "azzzcdezfg"
         * 'abbbcdebfg'.ReplaceAll('b', 'z');
         */
        ReplaceAll?(search: string, replacer: string): string;

        /**
         * split a string by a pattern into a Array
         *
         * @category string
         *
         * @param pattern the template string to split the string
         * @returns the splitted array
         *
         * @example
         * // returns ['bbbb', 'bbb', 'c']
         * 'abbbbabbbac'.Split('z');
         */
        Split?(pattern: string): string[];

        /**
         * convert all letters of the string into lower case.
         *
         * @category string
         *
         * @returns the lower case string
         * @example
         * // returns "ababab"
         * 'aBaBaB'.ToLower();
         */
        ToLower?(): string;

        /**
         * convert all letters of the string into upper case.
         *
         * @category string
         *
         * @returns the upper case string
         * @example
         * // returns "ABABAB"
         * 'aBaBaB'.ToLower();
         */
        ToUpper?(): string;

        /**
         * removes all consecutive string sequences at the beginning and end of the string.
         *
         * @category string
         *
         * @param sequence the template string to be removed
         * @returns the trimmed string
         *
         * @example
         * // returns "Test"
         * '___Test___'.Trim('_');
         * '   Test   '.Trim();
         */
        Trim?(sequence?: string): string;

        /**
         * removes all consecutive string sequences at the beginning of the string.
         *
         * @category string
         *
         * @param sequence the template string to be removed
         * @returns the trimmed string
         *
         * @example
         * // returns "Test"
         * '___Test'.Trim('_');
         * '   Test'.Trim();
         */
        TrimStart?(sequence?: string): string;

        /**
         * removes all consecutive string sequences at the end of the string.
         *
         * @category string
         *
         * @param sequence the template string to be removed
         * @returns the trimmed string
         *
         * @example
         * // returns "Test"
         * 'Test___'.Trim('_');
         * 'Test   '.Trim();
         */
        TrimEnd?(sequence?: string): string;

        /**
         * cuts a string to a certain length.
         *
         * @category string
         *
         * @param length the length of the result string
         * @param omission the string placed at the end
         * @param separator
         * @returns the truncated string
         *
         * @example
         * // returns "##..."
         * '##-##Chars##-##'.Truncate(5);
         * // returns "##-#X"
         * '##-##Chars##-##'.Truncate(5, 'X');
         */
        Truncate?(length: number, omission?: string, separator?: string): string;

        /**
         * clones the current String into a new one
         *
         * @category string
         *
         * @returns a new Instance of a String
         *
         * @example
         * // returns a new Instance "Test"
         * 'Test'.Copy();
         */
        Copy?(): string;

        /**
         * checks if a string is in the current string.
         *
         * @category string
         *
         * @param search the string to find in this string
         * @returns search string is in this string or not
         *
         * @example
         * // returns true
         * 'abbbc'.Contains('b');
         * 'abbbc'.Contains('bbb');
         * // returns false
         * 'abbbc'.Contains('xxx');
         */
        Contains?(search: string): boolean;

        /**
         * returns the number of occurrences of the search string.
         *
         * @category string
         *
         * @param search the string to find in this string
         * @param allowOverlapping allow overlapping search
         * @returns the number of matches
         *
         * @example
         * // returns 3
         * 'zzabcabcabczz'.ContainsCount('a');
         * // returns 2
         * 'zzabcabcabczz'.ContainsCount('cabc', true);
         */
        ContainsCount?(search: string, allowOverlapping?: boolean): number;

        /**
         * check if this String strict the same as the given string
         *
         * @category string
         *
         * @param value the other string to compare with
         * @returns are both strings the same
         *
         * @example
         * // returns true
         * 'Test'.Equals('Test');
         * // returns false
         * 'Test'.Equals('test');
         */
        Equals?(value: string): boolean;

        /**
         * insert a string into this string on a specific position
         *
         * @category string
         *
         * @param startIndex the position where the string was added
         * @param value the string value to insert
         * @returns the combined string
         *
         * @example
         * // returns "axbc"
         * 'abc'.Insert(1, 'x');
         * // returns "xabc"
         * 'abc'.Insert(-1, 'x');
         * // returns "abcx"
         * 'abc'.Insert(100, 'x');
         */
        Insert?(startIndex: number, value: string): string;

        /**
         * remove a number of characters from the position in this string
         *
         * @category string
         *
         * @param position the position from where the characters was removed
         * @param count the number of characters to remove
         * @returns the cleaned string
         *
         * @example
         * // returns "abc"
         * 'axbc'.Remove(1);
         * // returns "a"
         * 'axbc'.Remove(1, 3);
         * // returns ""
         * 'abc'.Remove(10, 5);
         */
        Remove?(position: number, count?: number): string;

        /**
         * get a part of this string
         *
         * @category string
         *
         * @param position the position to start
         * @param length the number of characters to get from string
         * @returns the string part
         *
         * @example
         * // returns "_"
         * '___Test'.Substring(0);
         * // returns "Test"
         * '___Test'.Substring(3, 4);
         * // return "Te"
         * 'Test'.Substring(-1, 2);
         * // return "st"
         * 'Test'.Substring(100, 2);
         */
        Substring?(position: number, length?: number): string;

        /**
         * get the position of the first match in this string
         *
         * @category string
         *
         * @param value the string to search in this string
         * @returns the position index
         *
         * @example
         * // returns 0
         * 'aaaaa'.IndexOf('a');
         * // returns 1
         * 'abc'.IndexOf('b');
         * // returns -1
         * 'abc'.IndexOf('z');
         */
        IndexOf?(value: string): number;

        /**
         * get the position of the last match in this string
         *
         * @category string
         *
         * @param value the string to search in this string
         * @returns the position index
         *
         * @example
         * // returns 4
         * 'aaaaa'.LastIndexOf('a');
         * // returns 1
         * 'abc'.LastIndexOf('b');
         * // returns -1
         * 'abc'.LastIndexOf('z');
         */
        LastIndexOf?(value: string): number;

        /**
         * found text between 2 text marks and returns the results as string array
         *
         * @category string
         *
         * @param begin the first text mark
         * @param end the second text mark
         * @returns the texts between the text marks
         *
         * @example
         * // returns "betweenmodule"
         * 'beforemodule@NgModule({betweenmodule})aftermodule'.TextBetween('@NgModule({', '})');
         */
        TextBetween?(begin: string, end: string): string[];

        /**
         * check if this string only contains Ascii letters
         *
         * @category string
         *
         * @returns has only Ascii letters or not
         *
         * @example
         * // returns true
         * 'ABCD'.IsAscii();
         * // returns false
         * '©'.IsAscii();
         */
        IsAscii?(): boolean;

        /**
         * check if this string only have alphabetical letters without "ß"
         *
         * @category string
         * @returns has only alphabetical letters or not
         *
         * @example
         * // returns true
         * 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.IsAlpha();
         * // returns false
         * 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1'.IsAlpha();
         * 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZß'.IsAlpha();
         */
        IsAlpha?(): boolean;

        /**
         * get the String Length in Bytes
         *
         * @category string
         * @returns the Byte Length
         *
         * @example
         * // returns 3
         * 'ABC'.Bytes();
         */
        Bytes?(): number;
    }
    interface Array<T> {
        /**
         * get the Number of Items in the Array
         *
         * @category array
         * @returns the Number of Elements
         *
         * @example
         * // returns 3
         * [1,2,3].Count();
         * // returns 0
         * [].Count();
         */
        Count?(): number;

        /**
         * get the maximum number in the Array
         *
         * only number types are checked!!!
         *
         * @category array
         *
         * @param filterMethod a filter function to remove some number values
         * @returns the maximum value
         *
         * @example
         * // returns 3
         * [1,2,3].Max();
         * // returns 2
         * [1,2,3].Max(i => i < 3);
         * // returns 4
         * [1,2,'3',4,'5'].Max();
         */
        Max?(filterMethod?: FindMethod<T>): number;

        /**
         * get the minimum number in the Array
         *
         * only number types are checked!!!
         *
         * @category array
         *
         * @param filterMethod a filter function to remove some number values
         * @returns the minimum value
         *
         * @example
         * // returns 3
         * [1,2,3].Min();
         * // returns 2
         * [1,2,3].Min(i => i > 1);
         * // returns 4
         * ['1','2','3',4,'5'].Min();
         */
        Min?(filterMethod?: FindMethod<T>): number;

        /**
         * get the Mean from all numbers in this array
         *
         * @category array
         *
         * @param filterMethod a filter function to remove some number values
         * @returns the mean value
         *
         * @example
         * // returns 9.866666666666667
         * [1, 25.6, 3].Mean();
         * // returns 2
         * [1,2,3,4].Mean(i => i < 4);
         * // returns 4
         * ['1','2','3',4,'5'].Mean();
         */
        Mean?(filterMethod?: FindMethod<T>): number;

        /**
         * get the Sum from all numbers in this array
         *
         * @category array
         *
         * @param filterMethod a filter function to remove some number values
         * @returns the sum value
         *
         * @example
         * // returns 6
         * [1,2,3].Sum();
         * // returns 5
         * [1,2,3].Sum(i => i > 1);
         * // returns 4
         * ['1','2','3',4,'5'].Sum();
         */
        Sum?(filterMethod?: FindMethod<T>): number;

        /**
         * add the given element at the end of the list
         *
         * @category array
         *
         * @param element the element to add in the list
         * @returns the list after element added
         *
         * @example
         * // returns [1]
         * [].Add(1);
         */
        Add?(element: T): T[];

        /**
         * add the element at the end of the list when the element not exists in the list.
         *
         * @category array
         *
         * @param element the element to add in the list
         * @returns the list after eventually added element
         *
         * @example
         * // returns [1,2]
         * [1].AddIfNotExists(2);
         * // returns [1]
         * [1].AddIfNotExists(1);
         */
        AddIfNotExists?(element: T): T[];

        /**
         * shrink the array into a new object with a convert function.
         *
         * @category array
         *
         * @param reducer the reducer function to convert each array element
         * @param initial the initial value pass to each element
         * @returns the shrinked object
         *
         * @example
         * // returns "a,b,c"
         * ['a', 'b', 'c'].Reduce((target, e) => {
         *      return target.Concat(e, ',');
         *  }, '')
         */
        Reduce?<K>(reducer: ReducerMethod<T, K>, initial: K): K;

        /**
         * add multiple elements at the end of this array
         *
         * @category array
         *
         * @param elements the elements to add into this array
         * @returns the array after add all elements
         *
         * @example
         * // returns [1,2,3,4]
         * [1].AddRange([2,3,4]);
         */
        AddRange?(elements: T[]): T[];

        /**
         * add multiple elements at the end of this array when not exists
         *
         * @category array
         *
         * @param elements the elements to add into this array
         * @returns the array after add all elements
         *
         * @example
         * // returns [1,2,3,4]
         * [1].AddRangeIfNotExists([2,3,4]);
         * // returns [1]
         * [1].AddRangeIfNotExists([1,1,1]);
         */
        AddRangeIfNotExists?(elements: T[]): T[];

        /**
         * remove all Elements from this array
         *
         * @category array
         *
         * @returns the empty array
         *
         * @example
         * // returns []
         * [1,2,3].Clear();
         */
        Clear?(): T[];

        /**
         * check if this array have the given element
         *
         * @category array
         *
         * @param element the element to be find
         * @returns element is in the list or not
         *
         * @example
         * // returns true
         * [1,2,3].Contains(2);
         * const element = {x:'y'};
         * [element].Contains(element);
         * const element2 = {hello:'world',Equals:(i) => this.hello === i.hello};
         * [element2].Contains(element2);
         * // returns false
         * [1,2,3].Contains(50);
         * [{hello:'world'}].Contains({hello:'world'});
         */
        Contains?(element: T): boolean;

        /**
         * get a new instance of the array
         *
         * @category array
         *
         * @returns the new instance
         *
         * @example
         * // returns [1,2,3]
         * [1,2,3].Copy();
         */
        Copy?(): T[];

        /**
         * check if the find Method returns true for a element in the list
         *
         * @category array
         *
         * @param condition the method executed for each element in the list
         * @returns element exists or not
         *
         * @example
         * // returns true
         * [1,2,3].Exists(e => e === 2);
         * // returns false
         * [1,2,3].Exists(e => e === 20);
         */
        Exists?(condition: FindMethod<T>): boolean;

        /**
         * find the first element that matches the condition in the array
         *
         * @category array
         *
         * @param condition the method executed for each element in the list
         * @returns the element that matches
         *
         * @example
         * // returns 2
         * [1,2,3].Find((e) => e > 1);
         */
        Find?(condition: FindMethod<T>): T;

        /**
         * find the last element that matches the condition in the array
         *
         * @category array
         *
         * @param condition the method executed for each element in the list
         * @returns the element that matches
         *
         * @example
         * // returns 3
         * [1,2,3].FindLast((e) => e > 1);
         */
        FindLast?(condition: FindMethod<T>): T;

        /**
         * get the index number of the first matched element in the array
         *
         * @category array
         *
         * @param condition the method executed for each element in the list
         * @returns the index number
         *
         * @example
         * // returns 1
         * [1,2,3,1,2,3].FindIndex(e => e === 2);
         */
        FindIndex?(condition: FindMethod<T>): number;

        /**
         * get all elements that match the condition
         *
         * @category array
         *
         * @param condition the method executed for each element in the list
         * @returns a array of matched elements
         *
         * @example
         * // returns [2,3]
         * [1,2,3].FindAll(i => i > 1);
         */
        FindAll?(condition: FindMethod<T>): T[];

        /**
         * get the index number of the last matched element in the array
         *
         * @category array
         *
         * @param condition the method executed for each element in the list
         * @returns the index number
         *
         * @example
         * // returns 4
         * [1,2,3,1,2,3].FindLastIndex(e => e === 2);
         */
        FindLastIndex?(condition: FindMethod<T>): number;

        /**
         * check if a condition returns true for any element in the array
         *
         * @category array
         *
         * @param condition the method to check each element
         * @returns condition is true for all elements or not
         *
         * @example
         * // returns true
         * [1,2,3].TrueForAll(e => typeof e === typeof 0);
         * // returns false
         * [1,2,3].TrueForAll(e => e === 1);
         */
        TrueForAll?(condition: FindMethod<T>): boolean;

        /**
         * insert a element in the array at a specific position
         *
         * @category array
         *
         * @param index the position where to insert the element
         * @param element the element to insert
         * @returns the array with inserted element
         *
         * @example
         * // returns [1,5,2,3]
         * [1,2,3].Insert(1, 5);
         */
        Insert?(index: number, element: T): T[];

        /**
         * insert a array of elements in the array at a specific position
         *
         * @category array
         *
         * @param index the position where to insert the element
         * @param elements the elements to insert
         * @returns the array with inserted elements
         *
         * @example
         * // returns [1,4,5,6,2,3]
         * [1,2,3].Insert(1, [4,5,6]);
         */
        InsertRange?(index: number, elements: T[]): T[];

        /**
         * get the array index of a element
         *
         * @category array
         *
         * @param element the element to find in the array
         * @param fromIndex the index to skip
         * @returns the array index of the target element
         *
         * @example
         * // returns 1
         * [1,2,3,1,2,3].IndexOf(2);
         * // returns 4
         * [1,2,3,1,2,3].IndexOf(2, 2);
         */
        IndexOf?(element: T, fromIndex?: number): number;

        /**
         * remove a element from the list
         *
         * @category array
         *
         * @param element the element to remove from the list
         * @returns the array without the element to remove
         *
         * @example
         * // returns [1,3]
         * [1,2,3].Remove(2);
         */
        Remove?(element: T): T[];

        /**
         * remove all elements that match the given condition
         *
         * @category array
         *
         * @param match the condition executed by any element in the array
         * @returns the array without the condition matching elements
         *
         * @example
         * // return [1,3]
         * [1,2,3].RemoveAll(e => e === 2);
         * // return []
         * [1,2,3].RemoveAll(() => true);
         */
        RemoveAll?(match: FindMethod<T>): T[];

        /**
         * remove element at specific position
         *
         * @category array
         *
         * @param index the position where the element was removed
         * @returns the array without the element to remove
         *
         * @example
         * // returns [1,3]
         * [1,2,3].RemoveAt(1);
         */
        RemoveAt?(index: number): T[];

        /**
         * remove multiple elements from the array
         *
         * @category array
         *
         * @param elements the elements to remove from the array
         * @returns the array without the elements to remove
         *
         * @example
         * // returns [1,2,3]
         * [1,2,3,4,5,6].RemoveRange([4,5,6]);
         * [1,2,3].RemoveRange([4,5,6]);
         */
        RemoveRange?(elements: T[]): T[];

        /**
         * turn around the array elements
         *
         * @category array
         *
         * @returns the reverse of the array
         *
         * @example
         * // returns [3,2,1]
         * [1,2,3].Reverse();
         */
        Reverse?(): T[];

        /**
         * sort the elements in a array
         *
         * @category array
         *
         * @param order the direction to sort the array elements
         * @returns the sorted array
         *
         * @example
         * // returns [1, 2, 3]
         * [1, 2, 3].Sort();
         * // returns [3, 2, 1]
         * [1, 2, 3].Sort(ListSortOrder.DESC);
         * // returns ['c', 'b', 'a']
         * ['a', 'b', 'c'].Sort(ListSortOrder.DESC);
         */
        Sort?(order?: ListSortOrder): T[];

        /**
         * sort a array of objects by the given keys
         *
         * @category array
         *
         * @param keys a list of keys to sort with
         * @param orders the sort direction to the keys
         * @returns the sorted list of objects
         *
         * @example
         * // returns [
         * // {
         * //       Name: 'Anne Klein',
         * //       Age: 23,
         * //       Birthday: new Date(1965, 8, 12, 0, 0, 0),
         * //       Address: {
         * //           Street: 'Jenaer Strasse 26',
         * //           PLZ: '47053',
         * //           Town: 'Duisburg',
         * //       }
         * //   },{
         * //       Name: 'Christine Ehrlichmann',
         * //       Age: 37,
         * //       Birthday: new Date(1982, 4, 23, 0, 0, 0),
         * //       Address: {
         * //           Street: 'Paul-Nevermann-Platz 59',
         * //           PLZ: '97657',
         * //           Town: 'Sandberg'
         * //       }
         * //   },{
         * //       Name: 'Jonas Schreiner',
         * //       Age: 23,
         * //       Birthday: new Date(1965, 4, 12, 0, 0, 0),
         * //       Address: {
         * //           Street: 'Gotthardstrasse 69',
         * //           PLZ: '99094',
         * //           Town: 'Erfurt'
         * //       }
         * //   },{
         * //       Name: 'Sandra Eichmann',
         * //       Age: 45,
         * //       Birthday: new Date(1969, 0, 22, 0, 0, 0),
         * //       Address: {
         * //           Street: 'Inge Beisheim Platz 20',
         * //           PLZ: '25313',
         * //           Town: 'Elmshorn'
         * //       }
         * //   },{
         * //       Name: 'Ulrich Gärtner',
         * //       Age: 60,
         * //       Birthday: new Date(1959, 2, 23, 0, 0, 0),
         * //       Address: {
         * //           Street: 'Koenigstrasse 50',
         * //           PLZ: '99750',
         * //           Town: 'Bleicherode'
         * //       }
         * //   }
         * // ]
         * [
         *    {
         *           Name: 'Jonas Schreiner',
         *           Age: 23,
         *           Birthday: new Date(1965, 4, 12, 0, 0, 0),
         *           Address: {
         *               Street: 'Gotthardstrasse 69',
         *               PLZ: '99094',
         *               Town: 'Erfurt'
         *           }
         *       },
         *    {
         *           Name: 'Sandra Eichmann',
         *           Age: 45,
         *           Birthday: new Date(1969, 0, 22, 0, 0, 0),
         *           Address: {
         *               Street: 'Inge Beisheim Platz 20',
         *               PLZ: '25313',
         *               Town: 'Elmshorn'
         *           }
         *       },
         *    {
         *           Name: 'Ulrich Gärtner',
         *           Age: 60,
         *           Birthday: new Date(1959, 2, 23, 0, 0, 0),
         *           Address: {
         *               Street: 'Koenigstrasse 50',
         *               PLZ: '99750',
         *               Town: 'Bleicherode'
         *           }
         *       },
         *    {
         *           Name: 'Christine Ehrlichmann',
         *           Age: 37,
         *           Birthday: new Date(1982, 4, 23, 0, 0, 0),
         *           Address: {
         *               Street: 'Paul-Nevermann-Platz 59',
         *               PLZ: '97657',
         *               Town: 'Sandberg'
         *           }
         *       },
         *    {
         *           Name: 'Anne Klein',
         *           Age: 23,
         *           Birthday: new Date(1965, 8, 12, 0, 0, 0),
         *           Address: {
         *               Street: 'Jenaer Strasse 26',
         *               PLZ: '47053',
         *               Town: 'Duisburg',
         *           }
         *       }
         *    ].SortBy(['Name'], [ListSortOrder.ASC]);
         */
        SortBy?(keys: string[], orders?: ListSortOrder[]): T[];

        /**
         * get the array element at the given index or null
         *
         * @category array
         *
         * @param index the index of the element to get from array
         * @returns the element at the given index
         *
         * @example
         * // returns 2
         * [1,2,3].ElementAt(1);
         */
        ElementAt?(index: number): T;

        /**
         * check if any element is in the array
         *
         * @category array
         *
         * @param condition the condition to search the element
         * @returns array has a element or not
         *
         * @example
         * // returns true
         * [1,2,3].Any();
         * // returns false
         * [].Any();
         */
        Any?(condition?: FindMethod<T>): boolean;

        /**
         * get the First element of the array or the first that match the condition
         *
         * when no element was found the default value or null was returned
         *
         * @category array
         *
         * @param condition the condition executed ba any array element
         * @param def the default value to return
         * @returns the element that matches first
         *
         * @example
         * // return 1
         * [1,2,3,4,5,6].FirstOrDefault();
         * // return 2
         * [1,2,3,4,5,6].FirstOrDefault(e => e > 1);
         * // return 10
         * [1,2,3,4,5,6].FirstOrDefault(() => false, 10);
         */
        FirstOrDefault?(condition?: FindMethod<T>, def?: T): T;

        /**
         * get the last element of the array or the last that match the condition
         *
         * when no element was found the default value or null was returned
         *
         * @category array
         *
         * @param condition the condition executed ba any array element
         * @param def the default value to return
         * @returns the element that matches last
         *
         * @example
         * // return 6
         * [1,2,3,4,5,6].LastOrDefault();
         * [1,2,3,4,5,6].LastOrDefault(e => e > 1);
         * // return 10
         * [1,2,3,4,5,6].LastOrDefault(() => false, 10);
         */
        LastOrDefault?(condition?: FindMethod<T>, def?: T): T;

        /**
         * groups a array of elements by a condition
         *
         * @category array
         *
         * @param condition the condition to group the array
         * @returns the grouped object with splatted arrays from the current array
         *
         * @example
         * // returns {'1': [1], '2': [2], '3': [3,3,3]}
         * [1,2,3,3,3].GroupBy(e => e);
         */
        GroupBy?(condition: TransformMethod<T>): {[key: string]: T[]};

        /**
         * groups a array of elements by a condition and returns the group keys
         *
         * @category array
         *
         * @param condition the condition to group the array
         * @returns the grouped keys as string array
         *
         * @example
         * // returns ['1', '2', '3']
         * [1,2,3,3,3].GroupKey(e => e);
         */
        GroupKey?(condition: TransformMethod<T>): string[];

        /**
         * convert all elements of the array into other form
         *
         * @category array
         *
         * @param convertMethod the method that execute with any element and convert them
         * @returns a new converted array
         *
         * @example
         * // returns ['Test1', 'Test2', 'Test3']
         * [1,2,3].Convert(e => 'Test' + e);
         */
        Convert?<K>(convertMethod: ConvertMethod<T, K>): K[];

        /**
         * joins the array elements into a string with separator
         *
         * @category array
         *
         * @param separator the separator to split the array elements in the string
         * @returns the string with array elements
         *
         * @example
         * // returns "1,2,3"
         * [1,2,3].Join(',');
         */
        Join?(separator?: string): string;

        /**
         * merge two arrays by the condition
         *
         * @category array
         *
         * @param items the items to add at the end of the array
         * @param check the condition that executed by the given items
         * @returns the merged array
         *
         * @example
         * // returns [1,2,3,6]
         * [1,2,3].UnionBy([4,5,6], e => e === 6);
         */
        UnionBy?<T>(items: T[], check: FindMethod<T>): T[];
    }
}
