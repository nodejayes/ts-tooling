import {find, hasIn, keys, map, unset, values} from 'lodash';
import * as LZString from 'lz-string';
import {Integer} from "../primitive/integer";
import {List} from "./list";
import {Chars} from '../primitive/chars';

/**
 * representation of a string Dictionary
 */
export class Dictionary<T> {
    private _data = {};

    /**
     * create a new Dictionary you can fill it with predefined Data
     * @param dictionary
     */
    constructor(dictionary?: { [key: string]: T }) {
        if (dictionary) {
            this._data = dictionary;
        }
    }

    /**
     * Number of Entries in the Dictionary
     * @constructor
     */
    get Count(): Integer {
        return new Integer(keys(this._data).length);
    }

    /**
     * all Values of the Dictionary
     * @constructor
     */
    get Values(): T[] {
        return values(this._data);
    }

    /**
     * all Keys of the Dictionary
     * @constructor
     */
    get Keys(): List<Chars> {
        return new List<Chars>(map(keys(this._data), i => new Chars(i)));
    }

    /**
     * add a Entry into the Dictionary
     * @param key
     * @param item
     * @constructor
     */
    Add(key: Chars, item: T): Dictionary<T> {
        this._data[key.Value] = item;
        return this;
    }

    /**
     * clear the Dictionary
     * @constructor
     */
    Clear(): Dictionary<T> {
        this._data = {};
        return this;
    }

    /**
     * remove a Entry from the Dictionary
     * @param key
     * @constructor
     */
    Remove(key: Chars): Dictionary<T> {
        unset(this._data, key.Value);
        return this;
    }

    /**
     * check if a Key is in the Dictionary
     * @param key
     * @constructor
     */
    ContainsKey(key: Chars): boolean {
        return hasIn(this._data, key.Value);
    }

    /**
     * check if a Value is in the Dictionary
     * @param value
     * @constructor
     */
    ContainsValue(value: T): boolean {
        return !!find(this.Values, i => i === value);
    }

    /**
     * get the Dictionary as Javascript Object
     * @constructor
     */
    GetObject(): { [key: string]: T } {
        return this._data;
    }

    /**
     * try to get a Value in the Dictionary
     * @param key
     * @constructor
     */
    TryGetValue(key: Chars): T {
        return this._data[key.Value] || null;
    }

    /**
     * compress the Dictionary into a lz base64 string
     * @constructor
     */
    Compress(): Chars {
        return new Chars(LZString.compressToBase64(JSON.stringify(this._data)));
    }

    /**
     * decompress a lz base64 string into a Dictionary
     * @param compressed
     * @constructor
     */
    Decompress(compressed: Chars): Dictionary<T> {
        return new Dictionary<T>(JSON.parse(LZString.decompressFromBase64(compressed.Value)));
    }
}
