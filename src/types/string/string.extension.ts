import {StringFactory} from './string.factory';
import {escape, unescape, trimChar, words, escapeRegExp} from '../../core/string/string';
import {
    camelCase, snakeCase, pascalCase, paramCase, capitalCase, constantCase, dotCase,
    noCase, pathCase, sentenceCase
} from 'change-case';
import '../array';

String.prototype.CharAt = function (pos: number): string {
    if (this.length.Subtract(1).IsBelow(pos)) {
        throw new Error(`the string has not enough Characters searching ${pos} string length are ${this.length}`);
    }
    return this[pos];
};

String.prototype.Capitalize = function (): string {
    if (this.length < 1) {
        return this;
    }
    const first = this[0];
    const others = this.slice(1, this.length);
    return `${first.ToUpper()}${others.ToLower()}`;
};

String.prototype.ToCamelCase = function (): string {
    return camelCase(this);
};

String.prototype.ToConstantCase = function () {
    return constantCase(this);
};

String.prototype.ToDotCase = function() {
    return dotCase(this);
};

String.prototype.ToNoCase = function () {
   return noCase(this);
};

String.prototype.ToPathCase = function () {
    return pathCase(this);
};

String.prototype.ToSentenceCase = function () {
    return sentenceCase(this);
};

String.prototype.StartsWith = function (search: string, position?: number): boolean {
    return this.startsWith(search, position ? position : 0);
};

String.prototype.EndsWith = function (search: string, position?: number): boolean {
    return this.endsWith(search, position ? position : this.length);
};

String.prototype.HTMLEscape = function (): string {
    return escape(this);
};

String.prototype.HTMLUnescape = function (): string {
    return unescape(this);
};

String.prototype.RegExpEscape = function (): string {
    return escapeRegExp(this);
};

String.prototype.ToKebabCase = function (): string {
    return paramCase(this);
};

String.prototype.ToSnakeCase = function (): string {
    return snakeCase(this);
};

String.prototype.ToCapitalCase = function (): string {
    return capitalCase(this);
};

String.prototype.ToPascalCase = function(): string {
    return pascalCase(this);
};

String.prototype.ToLowerCase = function (): string {
    return this.toLocaleLowerCase();
};

String.prototype.ToUpperCase = function (): string {
    return this.toUpperCase();
};

String.prototype.LowerFirst = function (): string {
    return `${this[0].toLowerCase()}${this.slice(1, this.length)}`;
};

String.prototype.UpperFirst = function (): string {
    return `${this[0].toUpperCase()}${this.slice(1, this.length)}`;
};

String.prototype.Words = function (filter?: (word: string) => boolean, pattern?: string): string[] {
    const tmp = words(this, pattern);
    return typeof filter === typeof function () {} ?
        tmp.FindAll(filter) :
        tmp;
};

String.prototype.Concat = function (appender: string, separator?: string): string {
    if (!StringFactory.IsNullOrEmpty(separator) && !StringFactory.IsNullOrEmpty(this)) {
        return this + separator + appender;
    }
    return this + appender;
};

String.prototype.Join = function (appender: string[], separator: string): string {
    if (!appender.Any()) {
        return this;
    }
    let res = this;
    for (const str of appender) {
        res = res.Concat(str, separator);
    }
    return res;
};

String.prototype.Pad = function (length: number, template?: string): string {
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

String.prototype.PadLeft = function (length: number, template?: string): string {
    template = StringFactory.IsNullOrEmpty(template) ? ' ' : template;
    return this.padStart(length, template);
};

String.prototype.PadRight = function (length: number, template?: string): string {
    template = StringFactory.IsNullOrEmpty(template) ? ' ' : template;
    return this.padEnd(length, template);
};

String.prototype.Repeat = function (times: number): string {
    let tmp = '';
    for (let i = 0; i < times; i++) {
        tmp += this;
    }
    return tmp;
};

String.prototype.Replace = function (search: string, replacer: string): string {
    return this.replace(search, replacer);
};

String.prototype.ReplaceAll = function (search: string, replacer: string): string {
    return this.split(search).join(replacer);
};

String.prototype.Split = function (pattern: string): string[] {
    if (StringFactory.IsNullOrEmpty(this)) {
        return [];
    }
    return this.split(pattern).FindAll( i => !!i);
};

String.prototype.ToLower = function (): string {
    return this.toLowerCase();
};

String.prototype.ToUpper = function (): string {
    return this.toUpperCase();
};

String.prototype.Trim = function (sequence?: string): string {
    if (!sequence) {
        return trimChar(this, ' ', 2);
    }
    return trimChar(this, sequence, 2);
};

String.prototype.TrimStart = function (sequence?: string): string {
    if (!sequence) {
        return trimChar(this, ' ', 0);
    }
    return trimChar(this, sequence, 0);
};

String.prototype.TrimEnd = function (sequence?: string): string {
    if (!sequence) {
        return trimChar(this, ' ', 1);
    }
    return trimChar(this, sequence, 1);
};

String.prototype.Truncate = function (length: number, omission?: string, separator?: string): string {
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

String.prototype.Copy = function (): string {
    return `${this}`;
};

String.prototype.Contains = function (search: string): boolean {
    return this.includes(search);
};

String.prototype.ContainsCount = function (search: string, allowOverlapping?: boolean): number {
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

String.prototype.Equals = function (value: string): boolean {
    return this === value;
};

String.prototype.Insert = function (startIndex: number, value: string): string {
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (startIndex > this.length) {
        startIndex = this.length;
    }
    return this.slice(0, startIndex) + value + this.slice(startIndex, this.length);
};

String.prototype.Remove = function (position: number, count?: number): string {
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

String.prototype.Substring = function (position: number, length?: number): string {
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

String.prototype.ToInteger = function (): number {
    const res = parseInt(this, 10);
    if (isNaN(res)) {
        return 0;
    }
    return res;
};

String.prototype.ToDouble = function (): number {
    const res = parseFloat(this);
    if (isNaN(res)) {
        return 0.0;
    }
    return res;
};

String.prototype.IndexOf = function (value: string): number {
    return this.indexOf(value);
};

String.prototype.LastIndexOf = function (value: string): number {
    let currentPosition = -1;
    let idx = this.indexOf(value, 0);
    while (idx !== -1) {
        currentPosition = idx;
        idx = this.indexOf(value, currentPosition + 1);
    }
    return currentPosition;
};

String.prototype.TextBetween = function (begin: string, end: string): string[] {
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

String.prototype.IsAscii = function (): boolean {
    for (let i = 0; i < this.length; i++) {
        if (this.charCodeAt(i) > 127) {
            return false;
        }
    }
    return true;
};

String.prototype.IsAlpha = function (): boolean {
    for (let i = 0; i < this.length; i++) {
        if (!this.charCodeAt(i).IsInRange(65, 90) &&
            !this.charCodeAt(i).IsInRange(97, 122)) {
            return false;
        }
    }
    return true;
};

String.prototype.Bytes = function (): number {
    return Buffer.byteLength(this);
};
