import {
    camelCase, capitalize, deburr, startsWith, endsWith, escape, unescape,
    escapeRegExp, kebabCase, snakeCase, startCase, lowerFirst, upperFirst,
    words, pad, padStart, padEnd, repeat, replace, filter, toUpper, toLower,
    trim, trimStart, trimEnd, truncate, clone, includes, lastIndexOf
} from 'lodash';
import {StringFactory} from '../utils/string.factory';

String.prototype.CharAt = function (pos: number): string {
    if (this.length.Subtract(1).IsBelow(pos)) {
        throw new Error(`the string has not enough Characters searching ${pos} string length are ${this.length}`);
    }
    return this[pos];
};

String.prototype.ToCamelCase = function (): string {
    return camelCase(this);
};

String.prototype.Capitalize = function (): string {
    return capitalize(this);
};

String.prototype.Deburr = function (): string {
    return deburr(this);
};

String.prototype.StartsWith = function (search: string, position?: number): boolean {
    return startsWith(this, search, position ? position : 0);
};

String.prototype.EndsWith = function (search: string, position?: number): boolean {
    return endsWith(this, search, position ? position : this.length);
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
    return kebabCase(this);
};

String.prototype.ToSnakeCase = function (): string {
    return snakeCase(this);
};

String.prototype.ToStartCase = function (): string {
    return startCase(this);
};

String.prototype.ToLowerCase = function (): string {
    return this.toLocaleLowerCase();
};

String.prototype.ToUpperCase = function (): string {
    return this.toUpperCase();
};

String.prototype.LowerFirst = function (): string {
    return lowerFirst(this);
};

String.prototype.UpperFirst = function (): string {
    return upperFirst(this);
};

String.prototype.Words = function (): string[] {
    return words(this);
};

String.prototype.Concat = function (appender: string, separator?: string): string {
    if (!StringFactory.IsNullOrEmpty(separator) && !StringFactory.IsNullOrEmpty(this)) {
        return this + separator + appender;
    }
    return this + appender;
};

String.prototype.Join = function (appender: string[], separator: string): string {
    if (!appender.Any()) {
        return '';
    }
    let res = '';
    for (const str of appender) {
        res = res.Concat(str, separator);
    }
    return res;
};

String.prototype.Pad = function (length: number, template?: string): string {
    template = StringFactory.IsNullOrEmpty(template) ? ' ' : template;
    return pad(this, length, template);
};

String.prototype.PadLeft = function (length: number, template?: string): string {
    template = StringFactory.IsNullOrEmpty(template) ? ' ' : template;
    return padStart(this, length, template);
};

String.prototype.PadRight = function (length: number, template?: string): string {
    template = StringFactory.IsNullOrEmpty(template) ? ' ' : template;
    return padEnd(this, length, template);
};

String.prototype.Repeat = function (times: number): string {
    return repeat(this, times);
};

String.prototype.Replace = function (search: string, replacer: string): string {
    return replace(this, search, replacer);
};

String.prototype.ReplaceAll = function (search: string, replacer: string): string {
    return this.split(search).join(replacer);
};

String.prototype.Split = function (pattern: string): string[] {
    if (StringFactory.IsNullOrEmpty(this)) {
        return [];
    }
    return filter(this.split(pattern), i => !!i);
};

String.prototype.ToLower = function (): string {
    return toLower(this);
};

String.prototype.ToUpper = function (): string {
    return toUpper(this);
};

String.prototype.Trim = function (sequence: string): string {
    return trim(this, sequence);
};

String.prototype.TrimStart = function (sequence: string): string {
    return trimStart(this, sequence);
};

String.prototype.TrimEnd = function (sequence: string): string {
    return trimEnd(this, sequence);
};

String.prototype.Truncate = function (length: number, omission?: string, separator?: string): string {
    return truncate(this, {
        length: length,
        omission: omission ? omission : '...',
        separator: separator ? separator : undefined,
    });
};

String.prototype.Clone = function (): string {
    return clone(this);
};

String.prototype.Contains = function (search: string): boolean {
    return includes(this, search);
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
    return this.slice(0, startIndex) + value + this.slice(startIndex, this.length);
};

String.prototype.Remove = function (position: number, count?: number): string {
    return this.substr(0, position) + this.substring(position + (count ? count : 1), this.length);
};

String.prototype.Substring = function (position: number, length?: number): string {
    return this.substr(position, length ? length : undefined);
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
    return lastIndexOf(this, value);
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

String.prototype.Bytes = function (): number {
    return Buffer.byteLength(this);
};
