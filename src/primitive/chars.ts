import {
    camelCase,
    capitalize,
    deburr,
    endsWith,
    escape,
    escapeRegExp,
    kebabCase,
    lowerCase,
    lowerFirst,
    map,
    pad,
    padEnd,
    padStart,
    repeat,
    replace,
    snakeCase,
    startCase,
    startsWith,
    clone,
    toLower,
    toUpper,
    trim,
    trimEnd,
    trimStart,
    truncate,
    unescape,
    upperCase,
    upperFirst,
    words,
    includes,
    indexOf,
    lastIndexOf,
} from 'lodash';
import {Integer} from "./integer";
import {List} from "../collections/list";
import * as LZString from 'lz-string';

/**
 * represent a String DataType
 */
export class Chars {
    private _str: string = null;

    /**
     * the String Value
     * @constructor
     */
    get Value(): string {
        return this._str;
    }

    /**
     * number of characters in the String
     * @constructor
     */
    get Length(): Integer {
        return new Integer(this._str.length);
    }

    /**
     * create a new String Instance
     * @param str
     */
    constructor(str?: string) {
        this._str = str || null;
    }

    /**
     * returns a Character at Position in this String
     * @param pos
     * @constructor
     */
    CharAt(pos: Integer): Chars {
        if (this.Length.Subtract(new Integer(1)).IsBelow(pos)) {
            throw new Error(`Chars has not enough Characters searching ${pos.Value} Chars Length are ${this.Length.Value}`);
        }
        return this._str[pos.Value].ToChars();
    }

    /**
     * convert to CamelCase String
     * @constructor
     */
    ToCamelCase(): Chars {
        return new Chars(camelCase(this._str));
    }

    /**
     * make the first letter to Uppercase
     * @constructor
     */
    Capitalize(): Chars {
        return new Chars(capitalize(this._str));
    }

    /**
     * converting Latin-1 Supplement and Latin Extended-A letters
     * to basic Latin letters and removing combining diacritical marks.
     * @constructor
     */
    Deburr(): Chars {
        return new Chars(deburr(this._str));
    }

    /**
     * check if the String starts with a specific letter combination
     * @param search
     * @param position
     * @constructor
     */
    StartsWith(search: Chars, position?: Integer): boolean {
        return startsWith(this._str, search.Value, position ? position.Value : 0);
    }

    /**
     * check if the String ends with a specific letter combination
     * @param search
     * @param position
     * @constructor
     */
    EndsWith(search: Chars, position?: Integer): boolean {
        return endsWith(this._str, search.Value, position ? position.Value : this.Length.Value);
    }

    /**
     * escape the String to HTML
     * @constructor
     */
    HTMLEscape(): Chars {
        return new Chars(escape(this._str));
    }

    /**
     * unescape HTML String to normal String
     * @constructor
     */
    HTMLUnescape(): Chars {
        return new Chars(unescape(this._str));
    }

    /**
     * escape to a String used by a Regex
     * @constructor
     */
    RegExpEscape(): Chars {
        return new Chars(escapeRegExp(this._str));
    }

    /**
     * convert the String to Kebab Case
     * @constructor
     */
    ToKebabCase(): Chars {
        return new Chars(kebabCase(this._str));
    }

    /**
     * conver the String to Snake Case
     * @constructor
     */
    ToSnakeCase(): Chars {
        return new Chars(snakeCase(this._str));
    }

    /**
     * convert the String to Start Case
     * @constructor
     */
    ToStartCase(): Chars {
        return new Chars(startCase(this._str));
    }

    /**
     * convert the String to lowercase
     * @constructor
     */
    ToLowerCase(): Chars {
        return new Chars(this._str.toLowerCase());
    }

    /**
     * convert a String to uppercase
     * @constructor
     */
    ToUpperCase(): Chars {
        return new Chars(this._str.toUpperCase());
    }

    /**
     * convert the first letter of the String to lowercase
     * @constructor
     */
    LowerFirst(): Chars {
        return new Chars(lowerFirst(this._str));
    }

    /**
     * convert the first letter of the String to uppercase
     * @constructor
     */
    UpperFirst(): Chars {
        return new Chars(upperFirst(this._str));
    }

    /**
     * split the String into a List of Strings by Words
     * @constructor
     */
    Words(): List<Chars> {
        return new List(map(words(this._str), i => new Chars(i)));
    }

    /**
     * fill the String from left and right
     * @param length
     * @param template
     * @constructor
     */
    Pad(length: Integer, template?: Chars): Chars {
        template = template ? template : new Chars(' ');
        return new Chars(pad(this._str, length.Value, template.Value));
    }

    /**
     * fill the String from left
     * @param length
     * @param template
     * @constructor
     */
    PadLeft(length: Integer, template?: Chars): Chars {
        template = template ? template : new Chars(' ');
        return new Chars(padStart(this._str, length.Value, template.Value));
    }

    /**
     * fill the String from right
     * @param length
     * @param template
     * @constructor
     */
    PadRight(length: Integer, template?: Chars): Chars {
        template = template ? template : new Chars(' ');
        return new Chars(padEnd(this._str, length.Value, template.Value));
    }

    /**
     * repeat the String x times
     * @param times
     * @constructor
     */
    Repeat(times: Integer): Chars {
        return new Chars(repeat(this._str, times.Value));
    }

    /**
     * replace the first matching with other text
     * @param search
     * @param replacer
     * @constructor
     */
    Replace(search: Chars, replacer: Chars): Chars {
        return new Chars(replace(this._str, search.Value, replacer.Value));
    }

    /**
     * replace all matchings with other text
     * @param search
     * @param replacer
     * @constructor
     */
    ReplaceAll(search: Chars, replacer: Chars): Chars {
        return new Chars(this._str.split(search.Value).join(replacer.Value));
    }

    /**
     * split the Chars in a List of Texts by Pattern
     * @param pattern
     * @constructor
     */
    Split(pattern: Chars): List<Chars> {
        if (!this._str) {
            return new List<Chars>();
        }
        return new List<Chars>(map(this._str.split(pattern.Value), i => new Chars(i)));
    }

    /**
     * convert all letters from the Chars to Lowercase
     * @constructor
     */
    ToLower(): Chars {
        return new Chars(toLower(this._str));
    }

    /**
     * convert all Letters from the Chars to Uppercase
     * @constructor
     */
    ToUpper(): Chars {
        return new Chars(toUpper(this._str));
    }

    /**
     * trim the Chars by a sequence on both sides
     * @param sequence
     * @constructor
     */
    Trim(sequence: Chars): Chars {
        return new Chars(trim(this._str, sequence.Value));
    }

    /**
     * trim the Chars by sequence on Start
     * @param sequence
     * @constructor
     */
    TrimStart(sequence: Chars): Chars {
        return new Chars(trimStart(this._str, sequence.Value));
    }

    /**
     * trim the Chars by sequence on end
     * @param sequence
     * @constructor
     */
    TrimEnd(sequence: Chars): Chars {
        return new Chars(trimEnd(this._str, sequence.Value));
    }

    /**
     * truncate the Chars by text length
     * @param length
     * @param omission
     * @param seperator
     * @constructor
     */
    Truncate(length: Integer, omission?: Chars, seperator?: Chars): Chars {
        return new Chars(truncate(this._str, {
            length: length.Value,
            omission: omission ? omission.Value : '...',
            separator: seperator ? seperator.Value : undefined,
        }));
    }

    /**
     * clone this Chars Instance into a new One
     * @constructor
     */
    Clone(): Chars {
        return new Chars(clone(this._str));
    }

    /**
     * this Chars contains the given Chars?
     * @param search
     * @constructor
     */
    Contains(search: Chars): boolean {
        return includes(this._str, search.Value);
    }

    /**
     * gets the Number of found Chars
     * @param search
     * @constructor
     */
    ContainsCount(search: Chars): Integer {
        let count = -1;
        const tmp = this.Split(search);
        for (const target of tmp.ToArray()) {
            if (!target) {
                continue;
            }
            count++;
        }
        return new Integer(count);
    }

    /**
     * the given Chars are Equals this One?
     * @param value
     * @constructor
     */
    Equals(value: Chars): boolean {
        return value.Value === this._str;
    }

    /**
     * insert a new String into the Chars at Position
     * @param startIndex
     * @param value
     * @constructor
     */
    Insert(startIndex: Integer, value: Chars): Chars {
        return new Chars(this._str.slice(0, startIndex.Value) + value.Value + this._str.slice(startIndex.Value, this._str.length));
    }

    /**
     * remove chars at position
     * @param position
     * @param count
     * @constructor
     */
    Remove(position: Integer, count?: Integer): Chars {
        return new Chars(this._str.substr(0, position.Value) + this._str.substr(position.Value+(count ? count.Value : 1), this._str.length));
    }

    /**
     * get the chars from position with length or all
     * @param position
     * @param length
     * @constructor
     */
    Substring(position: Integer, length?: Integer): Chars {
        return new Chars(this._str.substr(position.Value, length ? length.Value : undefined));
    }

    /**
     * find the first match of the Chars and return the Index Number
     * @param value
     * @constructor
     */
    IndexOf(value: Chars): Integer {
        return new Integer(indexOf(this._str, value.Value));
    }

    /**
     * find the Last match of the chars and return the Index Number
     * @param value
     * @constructor
     */
    LastIndexOf(value: Chars): Integer {
        return new Integer(lastIndexOf(this._str, value.Value));
    }

    /**
     * get Text between 2 searches
     * @param begin
     * @param end
     * @constructor
     */
    TextBetween(begin: Chars, end: Chars): List<Chars> {
        const tmp = new List<Chars>();
        for (const split of this.Split(begin).ToArray()) {
            if (!split._str) {
                continue;
            }
            const between = split.Split(end).FirstOrDefault(() => true);
            if (!between._str) {
                continue;
            }
            tmp.Add(between);
        }
        return tmp;
    }
}
