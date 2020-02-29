export {};

declare global {
    /**
     * extends the basic Javascript String
     */
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
         * ```typescript
         * // returns "H"
         * 'Hello'.CharAt(0);
         * // returns "o"
         * 'Hello'.CharAt(4);
         * // throws an Error while string has not enough letters
         * 'Hello'.CharAt(5);
         * ```
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
         * ```typescript
         * // retruns "Hello"
         * 'hello'.Capitalize();
         * 'HELLO'.Capitalize();
         * 'Hello'.Capitalize();
         * ```
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
         * ```typescript
         * // returns true
         * 'abcdefg'.StartsWith('abc');
         * 'abcdefg'.StartsWith('b', 1);
         * // returns false
         * 'abcdefg'.StartsWith('b', 2);
         * 'abcdefg'.StartsWith('z');
         * ```
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
         * ```typescript
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
         * ```typescript
         * // returns "fred, barney, &amp; pebbles"
         * 'fred, barney, & pebbles'.HTMLEscape();
         * ```
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
         * ```typescript
         * // returns "fred, barney, & pebbles"
         * 'fred, barney, &amp; pebbles'.HTMLUnescape();
         * ```
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
         * ```typescript
         * // returns "\[helloworld\]\(https://google\.com/\)"
         * '[helloworld](https://google.com/)'.RegExpEscape();
         * ```
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
         * ```typescript
         * // returns 1
         * '1'.ToInteger();
         * '1.5'.ToInteger();
         * // returns 0
         * 'aaa'.ToInteger();
         * ```
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
         * ```typescript
         * // returns 1.0
         * '1'.ToDouble();
         * '1.0'.ToDouble();
         * // returns 1.5
         * '1.5'.ToDouble();
         * // returns 0.0
         * 'aaa'.ToDouble();
         * ```
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
         * ```typescript
         * // returns "fooBar"
         * 'Foo Bar'.ToCamelCase()
         * '--foo-bar--'.ToCamelCase()
         * '__FOO_BAR__'.ToCamelCase()
         * ```
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
         * ```typescript
         * // returns "foo-bar"
         * 'Foo Bar'.ToKebabCase();
         * 'fooBar'.ToKebabCase();
         * '__FOO_BAR__'.ToKebabCase();
         * ```
         */
        ToKebabCase?(): string;

        /**
         * Transform into a space separated string with each word capitalized.
         *
         * @category string
         *
         * @returns the Capital Case String
         *
         * @example
         * ```typescript
         * // returns "Test String"
         * 'test string'.ToCapitalCase();
         * ```
         */
        ToCapitalCase?(): string;

        /**
         * Transform into upper case string with an underscore between words.
         *
         * @category string
         *
         * @returns the Constant Case String
         *
         * @example
         * ```typescript
         * // returns "TEST_STRING"
         * 'test string'.ToConstantCase();
         * ```
         */
        ToConstantCase?(): string;

        /**
         * Transform into a lower case string with a period between words.
         *
         * @category string
         *
         * @returns the Dot Case String
         *
         * @example
         * ```typescript
         * // returns "test.string"
         * 'test string'.ToDotCase();
         * ```
         */
        ToDotCase?(): string;

        /**
         * Transform into a lower cased string with spaces between words.
         *
         * @category string
         *
         * @returns the No Case String
         *
         * @example
         * ```typescript
         * // returns "test.string"
         * 'test string'.ToNoCase();
         * ```
         */
        ToNoCase?(): string;

        /**
         * Transform into a lower case string with slashes between words.
         *
         * @category string
         *
         * @returns the Path Case String
         *
         * @example
         * ```typescript
         * // returns "test/string"
         * 'test string'.ToPathCase();
         * ```
         */
        ToPathCase?(): string;

        /**
         * Transform into a lower case with spaces between words, then capitalize the string.
         *
         * @category string
         *
         * @returns the Sentence Case String
         *
         * @example
         * ```typescript
         * // returns "Test string"
         * 'test string'.ToSentenceCase();
         * ```
         */
        ToSentenceCase?(): string;

        /**
         * Transform into a string of capitalized words without separators.
         *
         * @category string
         *
         * @returns the Pascal Case String
         *
         * @example
         * ```typescript
         * // returns "Test string"
         * 'TestString'.ToPascalCase();
         * ```
         */
        ToPascalCase?(): string;

        /**
         * Converts a string into the Snake Case format.
         *
         * @category string
         *
         * @returns the Snake Case String
         *
         * @example
         * ```typescript
         * // returns "foo_bar"
         * 'Foo Bar'.ToSnakeCase();
         * 'fooBar'.ToSnakeCase();
         * '--FOO-BAR--'.ToSnakeCase();
         * ```
         */
        ToSnakeCase?(): string;

        /**
         * converts every letter of the string into lower case
         *
         * @category string
         *
         * @returns the lower case string
         *
         * @example
         * ```typescript
         * // returns "hello"
         * 'HELLO'.ToLowerCase();
         * ```
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
         * ```typescript
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
         * ```typescript
         * // returns "hello"
         * 'Hello'.LowerFirst();
         * 'hello'.LowerFirst();
         * ```
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
         * ```typescript
         * // returns "Hello"
         * 'hello'.UpperFirst();
         * 'Hello'.UpperFirst();
         * ```
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
         * ```typescript
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
         * ```
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
         * ```typescript
         * // returns "ab"
         * 'a'.Concat('b');
         * // returns "a#b"
         * 'a'.Concat('b', '#');
         * ```
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
         * ```typescript
         * // returns "testabc"
         * 'test'.Join(['a','b','c']);
         * // returns "test#a#b#c"
         * 'test'.Join(['a','b','c'], '#');
         * // returns "a#b#c"
         * ''.Join(['a','b','c'], '#');
         * ```
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
         * ```typescript
         * // returns "_-abc_-_"
         * 'abc'.Pad(8, '_-');
         * // returns "  abc   "
         * 'abc'.Pad(8);
         * // returns "abcdefg"
         * 'abcdefg'.Pad(3, '-');
         * ```
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
         * ```typescript
         * // returns "__abc"
         * 'abc'.PadLeft(5, '_');
         * // returns "  abc"
         * 'abc'.PadLeft(5);
         * // returns "abcdefg"
         * 'abcdefg'.PadLeft(3, '-');
         * ```
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
         * ```typescript
         * // returns "abc__"
         * 'abc'.PadRight(5, '_');
         * // returns "abc  "
         * 'abc'.PadRight(5);
         * // returns "abcdefg"
         * 'abcdefg'.PadRight(3, '-');
         * ```
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
         * ```typescript
         * // returns "*****"
         * '*'.Repeat(5);
         * ```
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
         * ```typescript
         * // returns "azcdefg"
         * 'abcdefg'.Replace('b', 'z');
         * // returns "azbcdefg"
         * 'abbcdefg'.Replace('b', 'z');
         * ```
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
         * ```typescript
         * // returns "azzzcdezfg"
         * 'abbbcdebfg'.ReplaceAll('b', 'z');
         * ```
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
         * ```typescript
         * // returns ['bbbb', 'bbb', 'c']
         * 'abbbbabbbac'.Split('a');
         * ```
         */
        Split?(pattern: string): string[];

        /**
         * convert all letters of the string into lower case.
         *
         * @category string
         *
         * @returns the lower case string
         *
         * @example
         * ```typescript
         * // returns "ababab"
         * 'aBaBaB'.ToLower();
         * ```
         */
        ToLower?(): string;

        /**
         * convert all letters of the string into upper case.
         *
         * @category string
         *
         * @returns the upper case string
         * @example
         * ```typescript
         * // returns "ABABAB"
         * 'aBaBaB'.ToLower();
         * ```
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
         * ```typescript
         * // returns "Test"
         * '___Test___'.Trim('_');
         * '   Test   '.Trim();
         * ```
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
         * ```typescript
         * // returns "Test"
         * '___Test'.Trim('_');
         * '   Test'.Trim();
         * ```
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
         * ```typescript
         * // returns "Test"
         * 'Test___'.Trim('_');
         * 'Test   '.Trim();
         * ```
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
         * ```typescript
         * // returns "##..."
         * '##-##Chars##-##'.Truncate(5);
         * // returns "##-#X"
         * '##-##Chars##-##'.Truncate(5, 'X');
         * ```
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
         * ```typescript
         * // returns a new Instance "Test"
         * 'Test'.Copy();
         * ```
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
         * ```typescript
         * // returns true
         * 'abbbc'.Contains('b');
         * 'abbbc'.Contains('bbb');
         * // returns false
         * 'abbbc'.Contains('xxx');
         * ```
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
         * ```typescript
         * // returns 3
         * 'zzabcabcabczz'.ContainsCount('a');
         * // returns 2
         * 'zzabcabcabczz'.ContainsCount('cabc', true);
         * ```
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
         * ```typescript
         * // returns true
         * 'Test'.Equals('Test');
         * // returns false
         * 'Test'.Equals('test');
         * ```
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
         * ```typescript
         * // returns "axbc"
         * 'abc'.Insert(1, 'x');
         * // returns "xabc"
         * 'abc'.Insert(-1, 'x');
         * // returns "abcx"
         * 'abc'.Insert(100, 'x');
         * ```
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
         * ```typescript
         * // returns "abc"
         * 'axbc'.Remove(1);
         * // returns "a"
         * 'axbc'.Remove(1, 3);
         * // returns ""
         * 'abc'.Remove(10, 5);
         * ```
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
         * ```typescript
         * // returns "_"
         * '___Test'.Substring(0);
         * // returns "Test"
         * '___Test'.Substring(3, 4);
         * // return "Te"
         * 'Test'.Substring(-1, 2);
         * // return "st"
         * 'Test'.Substring(100, 2);
         * ```
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
         * ```typescript
         * // returns 0
         * 'aaaaa'.IndexOf('a');
         * // returns 1
         * 'abc'.IndexOf('b');
         * // returns -1
         * 'abc'.IndexOf('z');
         * ```
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
         * ```typescript
         * // returns 4
         * 'aaaaa'.LastIndexOf('a');
         * // returns 1
         * 'abc'.LastIndexOf('b');
         * // returns -1
         * 'abc'.LastIndexOf('z');
         * ```
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
         * ```typescript
         * // returns "betweenmodule"
         * 'beforemodule@NgModule({betweenmodule})aftermodule'.TextBetween('@NgModule({', '})');
         * ```
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
         * ```typescript
         * // returns true
         * 'ABCD'.IsAscii();
         * // returns false
         * '©'.IsAscii();
         * ```
         */
        IsAscii?(): boolean;

        /**
         * check if this string only have alphabetical letters without "ß"
         *
         * @category string
         *
         * @returns has only alphabetical letters or not
         *
         * @example
         * ```typescript
         * // returns true
         * 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.IsAlpha();
         * // returns false
         * 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1'.IsAlpha();
         * 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZß'.IsAlpha();
         * ```
         */
        IsAlpha?(): boolean;

        /**
         * get the String Length in Bytes
         *
         * @category string
         *
         * @returns the Byte Length
         *
         * @example
         * ```typescript
         * // returns 3
         * 'ABC'.Bytes();
         * ```
         */
        Bytes?(): number;
    }
}
