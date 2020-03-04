const {StringFactory} = require('../factory/string.factory');
const {Escape, Unescape, TrimChar, Words, EscapeRegExp} = require('../../../core/string/string');
const {
    camelCase, snakeCase, pascalCase, paramCase, capitalCase, constantCase, dotCase,
    noCase, pathCase, sentenceCase
} = require('change-case');
require('../../array/extension');

/**
 * @class module:types/string.String
 */

/**
 * Returns a letter of a string at a certain position.
 *
 * @function module:types/string.String#CharAt
 *
 * @param pos {number} The index of the letter to be returned.
 * @returns {string} the Letter at the Position
 *
 * @example
 * // returns "H"
 * 'Hello'.CharAt(0);
 * // returns "o"
 * 'Hello'.CharAt(4);
 * // throws an Error while string has not enough letters
 * 'Hello'.CharAt(5);
 */
String.prototype.CharAt = function (pos) {
    if (this.length.Subtract(1).IsBelow(pos)) {
        throw new Error(`the string has not enough Characters searching ${pos} string length are ${this.length}`);
    }
    return this[pos];
};

/**
 * Converts a string so that the first letter of the string is capital and all others are small.
 *
 * @function module:types/string.String#Capitalize
 *
 * @returns {string} the capitalized String
 *
 * @example
 * // retruns "Hello"
 * 'hello'.Capitalize();
 * 'HELLO'.Capitalize();
 * 'Hello'.Capitalize();
 */
String.prototype.Capitalize = function () {
    if (this.length < 1) {
        return this;
    }
    const first = this[0];
    const others = this.slice(1, this.length);
    return `${first.ToUpper()}${others.ToLower()}`;
};

/**
 * Converts a string into the Camel Case format.
 *
 * @function module:types/string.String#ToCamelCase
 *
 * @returns {string} the Camel Case String
 *
 * @example
 * // returns "fooBar"
 * 'Foo Bar'.ToCamelCase()
 * '--foo-bar--'.ToCamelCase()
 * '__FOO_BAR__'.ToCamelCase()
 */
String.prototype.ToCamelCase = function () {
    return camelCase(this);
};

/**
 * Transform into upper case string with an underscore between words.
 *
 * @function module:types/string.String#ToConstantCase
 *
 * @returns {string} the Constant Case String
 *
 * @example
 * // returns "TEST_STRING"
 * 'test string'.ToConstantCase();
 */
String.prototype.ToConstantCase = function () {
    return constantCase(this);
};

/**
 * Transform into a lower case string with a period between words.
 *
 * @function module:types/string.String#ToDotCase
 *
 * @returns {string} the Dot Case String
 *
 * @example
 * // returns "test.string"
 * 'test string'.ToDotCase();
 */
String.prototype.ToDotCase = function() {
    return dotCase(this);
};

/**
 * Transform into a lower cased string with spaces between words.
 *
 * @function module:types/string.String#ToNoCase
 *
 * @returns {string} the No Case String
 *
 * @example
 * // returns "test.string"
 * 'test string'.ToNoCase();
 */
String.prototype.ToNoCase = function () {
   return noCase(this);
};

/**
 * Transform into a lower case string with slashes between words.
 *
 * @function module:types/string.String#ToPathCase
 *
 * @returns {string} the Path Case String
 *
 * @example
 * // returns "test/string"
 * 'test string'.ToPathCase();
 */
String.prototype.ToPathCase = function () {
    return pathCase(this);
};

/**
 * Transform into a lower case with spaces between words, then capitalize the string.
 *
 * @function module:types/string.String#ToSentenceCase
 *
 * @returns {string} the Sentence Case String
 *
 * @example
 * // returns "Test string"
 * 'test string'.ToSentenceCase();
 */
String.prototype.ToSentenceCase = function () {
    return sentenceCase(this);
};

/**
 * checks whether a string begins with a character string.
 *
 * @function module:types/string.String#StartsWith
 *
 * @param search {string} the string with which the string should begin
 * @param position {number} an offset parameter
 * @returns {boolean} the string begins with the string
 *
 * @example
 * // returns true
 * 'abcdefg'.StartsWith('abc');
 * 'abcdefg'.StartsWith('b', 1);
 * // returns false
 * 'abcdefg'.StartsWith('b', 2);
 * 'abcdefg'.StartsWith('z');
 */
String.prototype.StartsWith = function (search, position) {
    return this.startsWith(search, position ? position : 0);
};

/**
 * checks whether a string ends with a character string.
 *
 * @function module:types/string.String#EndsWith
 *
 * @param search {string} the string with which the string should end
 * @param position {number} an offset parameter
 * @returns {boolean} the string ends with the search
 *
 * @example
 * // returns true
 * 'abcdefg'.EndsWith('efg');
 * 'abcdefg'.EndsWith('f', 6);
 * // returns false
 * 'abcdefg'.EndsWith('f', 1);
 * 'abcdefg'.EndsWith('z');
 */
String.prototype.EndsWith = function (search, position) {
    return this.endsWith(search, position ? position : this.length);
};

/**
 * escape to a HTML safe string
 *
 * @function module:types/string.String#HTMLEscape
 *
 * @returns {string} a escaped HTML String
 *
 * @example
 * // returns "fred, barney, &amp; pebbles"
 * 'fred, barney, & pebbles'.HTMLEscape();
 */
String.prototype.HTMLEscape = function () {
    return Escape(this);
};

/**
 * unescape a escaped HTML String
 *
 * @function module:types/string.String#HTMLUnescape
 *
 * @returns {string} a unescaped HTML String
 *
 * @example
 * // returns "fred, barney, & pebbles"
 * 'fred, barney, &amp; pebbles'.HTMLUnescape();
 */
String.prototype.HTMLUnescape = function () {
    return Unescape(this);
};

/**
 * escape a String used for Regular Expression
 *
 * @function module:types/string.String#RegExpEscape
 *
 * @returns {string} a escaped Regular Expression
 *
 * @example
 * // returns "\[helloworld\]\(https://google\.com/\)"
 * '[helloworld](https://google.com/)'.RegExpEscape();
 */
String.prototype.RegExpEscape = function () {
    return EscapeRegExp(this);
};

/**
 * Converts a string into the Kebab Case format.
 *
 * @function module:types/string.String#ToKebabCase
 *
 * @returns {string} the Kebab Case String
 *
 * @example
 * // returns "foo-bar"
 * 'Foo Bar'.ToKebabCase();
 * 'fooBar'.ToKebabCase();
 * '__FOO_BAR__'.ToKebabCase();
 */
String.prototype.ToKebabCase = function () {
    return paramCase(this);
};

/**
 * Converts a string into the Snake Case format.
 *
 * @function module:types/string.String#ToSnakeCase
 *
 * @returns {string} the Snake Case String
 *
 * @example
 * // returns "foo_bar"
 * 'Foo Bar'.ToSnakeCase();
 * 'fooBar'.ToSnakeCase();
 * '--FOO-BAR--'.ToSnakeCase();
 */
String.prototype.ToSnakeCase = function () {
    return snakeCase(this);
};

/**
 * Transform into a space separated string with each word capitalized.
 *
 * @function module:types/string.String#ToCapitalCase
 *
 * @returns {string} the Capital Case String
 *
 * @example
 * // returns "Test String"
 * 'test string'.ToCapitalCase();
 */
String.prototype.ToCapitalCase = function () {
    return capitalCase(this);
};

/**
 * Transform into a string of capitalized words without separators.
 *
 * @function module:types/string.String#ToPascalCase
 *
 * @returns {string} the Pascal Case String
 *
 * @example
 * // returns "Test string"
 * 'TestString'.ToPascalCase();
 */
String.prototype.ToPascalCase = function() {
    return pascalCase(this);
};

/**
 * converts every letter of the string into lower case
 *
 * @function module:types/string.String#ToLowerCase
 *
 * @returns {string} the lower case string
 *
 * @example
 * // returns "hello"
 * 'HELLO'.ToLowerCase();
 */
String.prototype.ToLowerCase = function () {
    return this.toLocaleLowerCase();
};

/**
 * converts every letter of the string into upper case
 *
 * @function module:types/string.String#ToUpperCase
 *
 * @returns {string} the upper case string
 *
 * @example
 * // returns "HELLO"
 * 'hello'.ToLowerCase();
 */
String.prototype.ToUpperCase = function () {
    return this.toUpperCase();
};

/**
 * convert the first letter of the string into lower case
 *
 * @function module:types/string.String#LowerFirst
 *
 * @returns {string} the new string with the lower case first letter
 *
 * @example
 * // returns "hello"
 * 'Hello'.LowerFirst();
 * 'hello'.LowerFirst();
 */
String.prototype.LowerFirst = function () {
    return `${this[0].toLowerCase()}${this.slice(1, this.length)}`;
};

/**
 * convert the first letter of the string into upper case
 *
 * @function module:types/string.String#UpperFirst
 *
 * @returns {string} the new string with the upper case first letter
 *
 * @example
 * // returns "Hello"
 * 'hello'.UpperFirst();
 * 'Hello'.UpperFirst();
 */
String.prototype.UpperFirst = function () {
    return `${this[0].toUpperCase()}${this.slice(1, this.length)}`;
};

/**
 * splits a string into an array of its words.
 *
 * @function module:types/string.String#Words
 *
 * @param filter {function?} a word filter that can be applied
 * @param pattern {string?} a custom split pattern
 * @returns {string[]} a Array of Words
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
String.prototype.Words = function (filter, pattern) {
    const tmp = Words(this, pattern);
    return typeof filter === typeof function () {} ?
        tmp.FindAll(filter) :
        tmp;
};

/**
 * concat 2 strings
 *
 * @function module:types/string.String#Concat
 *
 * @param appender {string} the string to append
 * @param separator {string?} a template string that separates each concat string member
 * @returns {string} the concated string
 *
 * @example
 * // returns "ab"
 * 'a'.Concat('b');
 * // returns "a#b"
 * 'a'.Concat('b', '#');
 */
String.prototype.Concat = function (appender, separator) {
    if (!StringFactory.IsNullOrEmpty(separator) && !StringFactory.IsNullOrEmpty(this)) {
        return this + separator + appender;
    }
    return this + appender;
};

/**
 * same as Concat only with multiple strings.
 *
 * @function module:types/string.String#Join
 *
 * @param appender {string[]} the strings to append at the end
 * @param separator {string?} a template string that separates each concat string member
 * @returns {string} the joinded string
 *
 * @example
 * // returns "testabc"
 * 'test'.Join(['a','b','c']);
 * // returns "test#a#b#c"
 * 'test'.Join(['a','b','c'], '#');
 * // returns "a#b#c"
 * ''.Join(['a','b','c'], '#');
 */
String.prototype.Join = function (appender, separator) {
    if (!appender.Any()) {
        return this;
    }
    let res = this;
    for (const str of appender) {
        res = res.Concat(str, separator);
    }
    return res;
};

/**
 * fills a string alternately from left and right.
 *
 * @function module:types/string.String#Pad
 *
 * @param length {number} Specifies how long the string should be
 * @param template {string?} the string to be inserted
 * @returns {string} the padded string
 *
 * @example
 * // returns "_-abc_-_"
 * 'abc'.Pad(8, '_-');
 * // returns "  abc   "
 * 'abc'.Pad(8);
 * // returns "abcdefg"
 * 'abcdefg'.Pad(3, '-');
 */
String.prototype.Pad = function (length, template) {
    template = StringFactory.IsNullOrEmpty(template) ? ' ' : template;
    let tmp = this;
    let sw = false;
    while (tmp.length < length) {
        if (sw) {
            for (let i = template.length-1; i >= 0; i--) {
                tmp = template[i] + tmp;
                if (tmp.length >= length) {
                    break;
                }
            }
        } else {
            for (let i = 0; i < template.length; i++) {
                tmp = tmp + template[i];
                if (tmp.length >= length) {
                    break;
                }
            }
        }
        sw = !sw;
    }
    return tmp;
};

/**
 * fills a string from left.
 *
 * @function module:types/string.String#PadLeft
 *
 * @param length {number} Specifies how long the string should be
 * @param template {string?} the string to be inserted
 * @returns {string} the padded string
 *
 * @example
 * // returns "__abc"
 * 'abc'.PadLeft(5, '_');
 * // returns "  abc"
 * 'abc'.PadLeft(5);
 * // returns "abcdefg"
 * 'abcdefg'.PadLeft(3, '-');
 */
String.prototype.PadLeft = function (length, template) {
    template = StringFactory.IsNullOrEmpty(template) ? ' ' : template;
    return this.padStart(length, template);
};

/**
 * fills a string from right.
 *
 * @function module:types/string.String#PadRight
 *
 * @param length {number} Specifies how long the string should be
 * @param template {string?} the string to be inserted
 * @returns {string} the padded string
 *
 * @example
 * // returns "abc__"
 * 'abc'.PadRight(5, '_');
 * // returns "abc  "
 * 'abc'.PadRight(5);
 * // returns "abcdefg"
 * 'abcdefg'.PadRight(3, '-');
 */
String.prototype.PadRight = function (length, template) {
    template = StringFactory.IsNullOrEmpty(template) ? ' ' : template;
    return this.padEnd(length, template);
};

/**
 * repeat the current string x times
 *
 * @function module:types/string.String#Repeat
 *
 * @param times {number} how many repeats
 * @returns {string} repeated string
 *
 * @example
 * // returns "*****"
 * '*'.Repeat(5);
 */
String.prototype.Repeat = function (times) {
    let tmp = '';
    for (let i = 0; i < times; i++) {
        tmp += this;
    }
    return tmp;
};

/**
 * replace the first match on the current String
 *
 * @function module:types/string.String#Replace
 *
 * @param search {string} the pattern to search on the string
 * @param replacer {string} the string that replaces the found string
 * @returns {string} the replaced string
 *
 * @example
 * // returns "azcdefg"
 * 'abcdefg'.Replace('b', 'z');
 * // returns "azbcdefg"
 * 'abbcdefg'.Replace('b', 'z');
 */
String.prototype.Replace = function (search, replacer) {
    return this.replace(search, replacer);
};

/**
 * replace all matches on the current String
 *
 * @function module:types/string.String#ReplaceAll
 *
 * @param search {string} the pattern to search on the string
 * @param replacer {string} the string that replaces the found string
 * @returns {string} the replaced string
 *
 * @example
 * // returns "azzzcdezfg"
 * 'abbbcdebfg'.ReplaceAll('b', 'z');
 */
String.prototype.ReplaceAll = function (search, replacer) {
    return this.split(search).join(replacer);
};

/**
 * split a string by a pattern into a Array
 *
 * @function module:types/string.String#Split
 *
 * @param pattern {string} the template string to split the string
 * @returns {string[]} the splitted array
 *
 * @example
 * // returns ['bbbb', 'bbb', 'c']
 * 'abbbbabbbac'.Split('a');
 */
String.prototype.Split = function (pattern) {
    if (StringFactory.IsNullOrEmpty(this)) {
        return [];
    }
    return this.split(pattern).FindAll( i => !!i);
};

/**
 * convert all letters of the string into lower case.
 *
 * @function module:types/string.String#ToLower
 *
 * @returns {string} the lower case string
 *
 * @example
 * // returns "ababab"
 * 'aBaBaB'.ToLower();
 */
String.prototype.ToLower = function () {
    return this.toLowerCase();
};

/**
 * convert all letters of the string into upper case.
 *
 * @function module:types/string.String#ToUpper
 *
 * @returns {string} the upper case string
 * @example
 * // returns "ABABAB"
 * 'aBaBaB'.ToLower();
 */
String.prototype.ToUpper = function () {
    return this.toUpperCase();
};

/**
 * removes all consecutive string sequences at the beginning and end of the string.
 *
 * @function module:types/string.String#Trim
 *
 * @param sequence {string} the template string to be removed
 * @returns {string} the trimmed string
 *
 * @example
 * // returns "Test"
 * '___Test___'.Trim('_');
 * '   Test   '.Trim();
 */
String.prototype.Trim = function (sequence) {
    if (!sequence) {
        return TrimChar(this, ' ', 2);
    }
    return TrimChar(this, sequence, 2);
};

/**
 * removes all consecutive string sequences at the beginning of the string.
 *
 * @function module:types/string.String#TrimStart
 *
 * @param sequence {string} the template string to be removed
 * @returns {string} the trimmed string
 *
 * @example
 * // returns "Test"
 * '___Test'.Trim('_');
 * '   Test'.Trim();
 */
String.prototype.TrimStart = function (sequence) {
    if (!sequence) {
        return TrimChar(this, ' ', 0);
    }
    return TrimChar(this, sequence, 0);
};

/**
 * removes all consecutive string sequences at the end of the string.
 *
 * @function module:types/string.String#TrimEnd
 *
 * @param sequence {string} the template string to be removed
 * @returns {string} the trimmed string
 *
 * @example
 * // returns "Test"
 * 'Test___'.Trim('_');
 * 'Test   '.Trim();
 */
String.prototype.TrimEnd = function (sequence) {
    if (!sequence) {
        return TrimChar(this, ' ', 1);
    }
    return TrimChar(this, sequence, 1);
};

/**
 * cuts a string to a certain length.
 *
 * @function module:types/string.String#Truncate
 *
 * @param length {number} the length of the result string
 * @param omission {string?} the string placed at the end
 * @param separator {string?}
 * @returns {string} the truncated string
 *
 * @example
 * // returns "##..."
 * '##-##Chars##-##'.Truncate(5);
 * // returns "##-#X"
 * '##-##Chars##-##'.Truncate(5, 'X');
 */
String.prototype.Truncate = function (length, omission, separator) {
    let tmp = '';
    const cutter = omission ? omission : '...';
    for (let i = 0; i < this.length; i++) {
        if (tmp.length >= length || tmp.endsWith(separator)) {
            return tmp.substr(0, tmp.length - cutter.length) + cutter;
        }
        tmp += this[i];
    }
    return tmp;
};

/**
 * clones the current String into a new one
 *
 * @function module:types/string.String#Copy
 *
 * @returns {string} a new Instance of a String
 *
 * @example
 * // returns a new Instance "Test"
 * 'Test'.Copy();
 */
String.prototype.Copy = function () {
    return `${this}`;
};

/**
 * checks if a string is in the current string.
 *
 * @function module:types/string.String#Contains
 *
 * @param search {string} the string to find in this string
 * @returns {string} search string is in this string or not
 *
 * @example
 * // returns true
 * 'abbbc'.Contains('b');
 * 'abbbc'.Contains('bbb');
 * // returns false
 * 'abbbc'.Contains('xxx');
 */
String.prototype.Contains = function (search) {
    return this.includes(search);
};

/**
 * returns the number of occurrences of the search string.
 *
 * @function module:types/string.String#ContainsCount
 *
 * @param search {string} the string to find in this string
 * @param allowOverlapping {boolean?} allow overlapping search
 * @returns {number} the number of matches
 *
 * @example
 * // returns 3
 * 'zzabcabcabczz'.ContainsCount('a');
 * // returns 2
 * 'zzabcabcabczz'.ContainsCount('cabc', true);
 */
String.prototype.ContainsCount = function (search, allowOverlapping) {
    allowOverlapping = allowOverlapping === true;
    if (search.length <= 0) {
        return 0;
    }

    let n = 0;
    let pos = 0;
    let step = allowOverlapping ? 1 : search.length;

    while (true) {
        pos = this.indexOf(search, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
};

/**
 * check if this String strict the same as the given string
 *
 * @function module:types/string.String#Equals
 *
 * @param value {string} the other string to compare with
 * @returns {boolean} are both strings the same
 *
 * @example
 * // returns true
 * 'Test'.Equals('Test');
 * // returns false
 * 'Test'.Equals('test');
 */
String.prototype.Equals = function (value) {
    return this.valueOf() === value;
};

/**
 * insert a string into this string on a specific position
 *
 * @function module:types/string.String#Insert
 *
 * @param startIndex {number} the position where the string was added
 * @param value {string} the string value to insert
 * @returns {string} the combined string
 *
 * @example
 * // returns "axbc"
 * 'abc'.Insert(1, 'x');
 * // returns "xabc"
 * 'abc'.Insert(-1, 'x');
 * // returns "abcx"
 * 'abc'.Insert(100, 'x');
 */
String.prototype.Insert = function (startIndex, value) {
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (startIndex > this.length) {
        startIndex = this.length;
    }
    return this.slice(0, startIndex) + value + this.slice(startIndex, this.length);
};

/**
 * remove a number of characters from the position in this string
 *
 * @function module:types/string.String#Remove
 *
 * @param position {number} the position from where the characters was removed
 * @param count {number?} the number of characters to remove
 * @returns {string} the cleaned string
 *
 * @example
 * // returns "abc"
 * 'axbc'.Remove(1);
 * // returns "a"
 * 'axbc'.Remove(1, 3);
 * // returns ""
 * 'abc'.Remove(10, 5);
 */
String.prototype.Remove = function (position, count) {
    let charsCanBeRemoved = this.length;
    if (position < 0) {
        position = 0;
    }
    if (position > this.length) {
        position = this.length - 1;
        charsCanBeRemoved = 1;
    }
    if (count > charsCanBeRemoved) {
        position = position - (count - charsCanBeRemoved);
    }
    return this.substr(0, position) + this.substring(position + (count ? count : 1), this.length);
};

/**
 * get a part of this string
 *
 * @function module:types/string.String#Substring
 *
 * @param position {number} the position to start
 * @param length {number} the number of characters to get from string
 * @returns {string} the string part
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
String.prototype.Substring = function (position, length) {
    if (!length || length < 1) {
        length = 1;
    }
    if (position < 0) {
        position = 0;
    }
    if (position > this.length) {
        position = this.length - length;
    }
    return this.substr(position, length);
};

/**
 * convert a string into a Integer number Value
 *
 * @function module:types/string.String#ToInteger
 *
 * @returns {number} a number instance that represents a integer
 *
 * @example
 * // returns 1
 * '1'.ToInteger();
 * '1.5'.ToInteger();
 * // returns 0
 * 'aaa'.ToInteger();
 */
String.prototype.ToInteger = function () {
    const res = parseInt(this, 10);
    if (isNaN(res)) {
        return 0;
    }
    return res;
};

/**
 * convert a string into a Double number Value
 *
 * @function module:types/string.String#ToDouble
 *
 * @returns {number} a number instance that represents a double
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
String.prototype.ToDouble = function () {
    const res = parseFloat(this);
    if (isNaN(res)) {
        return 0.0;
    }
    return res;
};

/**
 * get the position of the first match in this string
 *
 * @function module:types/string.String#IndexOf
 *
 * @param value {string} the string to search in this string
 * @returns {number} the position index
 *
 * @example
 * // returns 0
 * 'aaaaa'.IndexOf('a');
 * // returns 1
 * 'abc'.IndexOf('b');
 * // returns -1
 * 'abc'.IndexOf('z');
 */
String.prototype.IndexOf = function (value) {
    return this.indexOf(value);
};

/**
 * get the position of the last match in this string
 *
 * @function module:types/string.String#LastIndexOf
 *
 * @param value {string} the string to search in this string
 * @returns {number} the position index
 *
 * @example
 * // returns 4
 * 'aaaaa'.LastIndexOf('a');
 * // returns 1
 * 'abc'.LastIndexOf('b');
 * // returns -1
 * 'abc'.LastIndexOf('z');
 */
String.prototype.LastIndexOf = function (value) {
    let currentPosition = -1;
    let idx = this.indexOf(value, 0);
    while (idx !== -1) {
        currentPosition = idx;
        idx = this.indexOf(value, currentPosition + 1);
    }
    return currentPosition;
};

/**
 * found text between 2 text marks and returns the results as string array
 *
 * @function module:types/string.String#TextBetween
 *
 * @param begin {string} the first text mark
 * @param end {string} the second text mark
 * @returns {string[]} the texts between the text marks
 *
 * @example
 * // returns "betweenmodule"
 * 'beforemodule@NgModule({betweenmodule})aftermodule'.TextBetween('@NgModule({', '})');
 */
String.prototype.TextBetween = function (begin, end) {
    const tmp = [];
    for (const split of this.Split(begin)) {
        const between = split.Split(end).FirstOrDefault(() => true);
        tmp.Add(between);
    }
    if (!this.StartsWith(begin) || this.EndsWith(tmp.ElementAt(0))) {
        // remove the begin string
        tmp.RemoveAt(0);
    }
    return tmp;
};

/**
 * check if this string only contains Ascii letters
 *
 * @function module:types/string.String#IsAscii
 *
 * @returns {boolean} has only Ascii letters or not
 *
 * @example
 * // returns true
 * 'ABCD'.IsAscii();
 * // returns false
 * '©'.IsAscii();
 */
String.prototype.IsAscii = function () {
    for (let i = 0; i < this.length; i++) {
        if (this.charCodeAt(i) > 127) {
            return false;
        }
    }
    return true;
};

/**
 * check if this string only have alphabetical letters without "ß"
 *
 * @function module:types/string.String#IsAlpha
 *
 * @returns {boolean} has only alphabetical letters or not
 *
 * @example
 * // returns true
 * 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.IsAlpha();
 * // returns false
 * 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1'.IsAlpha();
 * 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZß'.IsAlpha();
 */
String.prototype.IsAlpha = function () {
    for (let i = 0; i < this.length; i++) {
        if (!this.charCodeAt(i).IsInRange(65, 90) &&
            !this.charCodeAt(i).IsInRange(97, 122)) {
            return false;
        }
    }
    return true;
};

/**
 * get the String Length in Bytes
 *
 * @function module:types/string.String#Bytes
 *
 * @returns {number} the Byte Length
 *
 * @example
 * // returns 3
 * 'ABC'.Bytes();
 */
String.prototype.Bytes = function () {
    return Buffer.byteLength(this.valueOf());
};
