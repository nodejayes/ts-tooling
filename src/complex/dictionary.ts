import {find, hasIn, keys, values} from 'lodash';

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
    get Count(): number {
        return keys(this._data).length;
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
    Keys(): string[] {
        return keys(this._data);
    }

    /**
     * add a Entry into the Dictionary
     * @param key
     * @param item
     * @constructor
     */
    Add(key: string, item: T): Dictionary<T> {
        this._data[key] = item;
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
    Remove(key: string): Dictionary<T> {
        delete this._data[key];
        return this;
    }

    /**
     * check if a Key is in the Dictionary
     * @param key
     * @constructor
     */
    ContainsKey(key: string): boolean {
        return hasIn(this._data, key);
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
    TryGetValue(key: string): T {
        return this._data[key] || null;
    }

    /**
     * get a Value that match the Filter Condition
     * @param filter
     * @constructor
     */
    Find(filter: (d: T) => boolean): T {
        return find(this._data, filter);
    }

    /**
     * same as Find but get multiple Values
     * @param filter
     * @constructor
     */
    FindAll(filter: (d: T) => boolean): T[] {
        const r = [];
        for (const key of keys(this._data)) {
            if (filter(this._data[key])) {
                r.Add(this._data[key]);
            }
        }
        return r;
    }
}
