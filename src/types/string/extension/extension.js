const {StringFactory} = require('../factory/string.factory');
const {Escape, Unescape, TrimChar, Words, EscapeRegExp} = require('../../../core/string/string');
const {
    camelCase, snakeCase, pascalCase, paramCase, capitalCase, constantCase, dotCase,
    noCase, pathCase, sentenceCase
} = require('change-case');
require('../../array/extension');

/**
 * @return {string}
 */
String.prototype.CharAt = function (pos) {
    if (this.length.Subtract(1).IsBelow(pos)) {
        throw new Error(`the string has not enough Characters searching ${pos} string length are ${this.length}`);
    }
    return this[pos];
};

/**
 * @return {string}
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
 * @return {string}
 */
String.prototype.ToCamelCase = function () {
    return camelCase(this);
};

/**
 * @return {string}
 */
String.prototype.ToConstantCase = function () {
    return constantCase(this);
};

/**
 * @return {string}
 */
String.prototype.ToDotCase = function() {
    return dotCase(this);
};

/**
 * @return {string}
 */
String.prototype.ToNoCase = function () {
   return noCase(this);
};

/**
 * @return {string}
 */
String.prototype.ToPathCase = function () {
    return pathCase(this);
};

/**
 * @return {string}
 */
String.prototype.ToSentenceCase = function () {
    return sentenceCase(this);
};

/**
 * @return {boolean}
 */
String.prototype.StartsWith = function (search, position) {
    return this.startsWith(search, position ? position : 0);
};

/**
 * @return {boolean}
 */
String.prototype.EndsWith = function (search, position) {
    return this.endsWith(search, position ? position : this.length);
};

String.prototype.HTMLEscape = function () {
    return Escape(this);
};

String.prototype.HTMLUnescape = function () {
    return Unescape(this);
};

String.prototype.RegExpEscape = function () {
    return EscapeRegExp(this);
};

/**
 * @return {string}
 */
String.prototype.ToKebabCase = function () {
    return paramCase(this);
};

/**
 * @return {string}
 */
String.prototype.ToSnakeCase = function () {
    return snakeCase(this);
};

/**
 * @return {string}
 */
String.prototype.ToCapitalCase = function () {
    return capitalCase(this);
};

/**
 * @return {string}
 */
String.prototype.ToPascalCase = function() {
    return pascalCase(this);
};

/**
 * @return {string}
 */
String.prototype.ToLowerCase = function () {
    return this.toLocaleLowerCase();
};

/**
 * @return {string}
 */
String.prototype.ToUpperCase = function () {
    return this.toUpperCase();
};

/**
 * @return {string}
 */
String.prototype.LowerFirst = function () {
    return `${this[0].toLowerCase()}${this.slice(1, this.length)}`;
};

/**
 * @return {string}
 */
String.prototype.UpperFirst = function () {
    return `${this[0].toUpperCase()}${this.slice(1, this.length)}`;
};

String.prototype.Words = function (filter, pattern) {
    const tmp = Words(this, pattern);
    return typeof filter === typeof function () {} ?
        tmp.FindAll(filter) :
        tmp;
};

/**
 * @return {string}
 * @return {string}
 */
String.prototype.Concat = function (appender, separator) {
    if (!StringFactory.IsNullOrEmpty(separator) && !StringFactory.IsNullOrEmpty(this)) {
        return this + separator + appender;
    }
    return this + appender;
};

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
 * @return {string}
 */
String.prototype.PadLeft = function (length, template) {
    template = StringFactory.IsNullOrEmpty(template) ? ' ' : template;
    return this.padStart(length, template);
};

/**
 * @return {string}
 */
String.prototype.PadRight = function (length, template) {
    template = StringFactory.IsNullOrEmpty(template) ? ' ' : template;
    return this.padEnd(length, template);
};

/**
 * @return {string}
 */
String.prototype.Repeat = function (times) {
    let tmp = '';
    for (let i = 0; i < times; i++) {
        tmp += this;
    }
    return tmp;
};

/**
 * @return {string}
 */
String.prototype.Replace = function (search, replacer) {
    return this.replace(search, replacer);
};

/**
 * @return {string}
 */
String.prototype.ReplaceAll = function (search, replacer) {
    return this.split(search).join(replacer);
};

String.prototype.Split = function (pattern) {
    if (StringFactory.IsNullOrEmpty(this)) {
        return [];
    }
    return this.split(pattern).FindAll( i => !!i);
};

/**
 * @return {string}
 */
String.prototype.ToLower = function () {
    return this.toLowerCase();
};

/**
 * @return {string}
 */
String.prototype.ToUpper = function () {
    return this.toUpperCase();
};

/**
 * @return {string}
 * @return {string}
 */
String.prototype.Trim = function (sequence) {
    if (!sequence) {
        return TrimChar(this, ' ', 2);
    }
    return TrimChar(this, sequence, 2);
};

/**
 * @return {string}
 * @return {string}
 */
String.prototype.TrimStart = function (sequence) {
    if (!sequence) {
        return TrimChar(this, ' ', 0);
    }
    return TrimChar(this, sequence, 0);
};

/**
 * @return {string}
 * @return {string}
 */
String.prototype.TrimEnd = function (sequence) {
    if (!sequence) {
        return TrimChar(this, ' ', 1);
    }
    return TrimChar(this, sequence, 1);
};

/**
 * @return {string}
 * @return {string}
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
 * @return {string}
 */
String.prototype.Copy = function () {
    return `${this}`;
};

/**
 * @return {boolean}
 */
String.prototype.Contains = function (search) {
    return this.includes(search);
};

/**
 * @return {number}
 * @return {number}
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
 * @return {boolean}
 */
String.prototype.Equals = function (value) {
    return this.valueOf() === value;
};

/**
 * @return {string}
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
 * @return {string}
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
 * @return {string}
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
 * @return {number}
 * @return {number}
 */
String.prototype.ToInteger = function () {
    const res = parseInt(this, 10);
    if (isNaN(res)) {
        return 0;
    }
    return res;
};

/**
 * @return {number}
 * @return {number}
 */
String.prototype.ToDouble = function () {
    const res = parseFloat(this);
    if (isNaN(res)) {
        return 0.0;
    }
    return res;
};

/**
 * @return {number}
 */
String.prototype.IndexOf = function (value) {
    return this.indexOf(value);
};

/**
 * @return {number}
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
 * @return {boolean}
 * @return {boolean}
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
 * @return {boolean}
 * @return {boolean}
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
 * @return {number}
 */
String.prototype.Bytes = function () {
    return Buffer.byteLength(this.valueOf());
};
