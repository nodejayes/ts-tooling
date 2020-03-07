require('../../array/extension');

/**
 * representation of a string Dictionary
 *
 * @memberof module:types/dictionary
 */
class Dictionary {
    /**
     * create a new Dictionary you can fill it with predefined Data
     *
     * @constructor
     *
     * @param dictionary {object} a Hash Map that represent the Dictionary
     */
    constructor(dictionary) {
        this._data = {};
        if (dictionary) {
            this._data = dictionary;
        }
    }

    /**
     * Number of Entries in the Dictionary
     *
     * @readonly
     * @return {number}
     */
    get Count() {
        return Object.keys(this._data).length;
    }

    /**
     * all Values of the Dictionary
     *
     * @readonly
     * @return {any[]}
     */
    get Values() {
        return Object.values(this._data);
    }

    /**
     * all Keys of the Dictionary
     *
     * @readonly
     * @return {string[]}
     */
    get Keys() {
        return Object.keys(this._data);
    }

    /**
     * add a Entry into the Dictionary
     *
     * @param key {string}
     * @param item {any}
     * @return {Dictionary}
     */
    Add(key, item) {
        this._data[key] = item;
        return this;
    }

    /**
     * clear the Dictionary
     *
     * @return {Dictionary}
     */
    Clear() {
        this._data = {};
        return this;
    }

    /**
     * remove a Entry from the Dictionary
     *
     * @param key {string}
     * @return {Dictionary}
     */
    Remove(key) {
        delete this._data[key];
        return this;
    }

    /**
     * check if a Key is in the Dictionary
     *
     * @param key {string}
     * @return {boolean}
     */
    ContainsKey(key) {
        return key in this._data;
    }

    /**
     * check if a Value is in the Dictionary
     *
     * @param value {any}
     * @return {boolean}
     */
    ContainsValue(value) {
        return this.Values.indexOf(value) > -1;
    }

    /**
     * get the Dictionary as Javascript Object
     *
     * @return {any}
     */
    GetObject() {
        return this._data;
    }

    /**
     * try to get a Value in the Dictionary
     *
     * @param key {string}
     * @return {any}
     */
    TryGetValue(key) {
        return this._data[key] || null;
    }

    /**
     * get a Value that match the Filter Condition
     *
     * @param filter {function}
     * @return {any}
     */
    Find(filter) {
        for (const v of this.Values) {
            if (filter(v)) {
                return v;
            }
        }
        return null;
    }

    /**
     * same as Find but get multiple Values
     *
     * @param filter {function}
     * @return {any[]}
     */
    FindAll(filter) {
        const r = [];
        for (const key of Object.keys(this._data)) {
            if (filter(this._data[key])) {
                r.Add(this._data[key]);
            }
        }
        return r;
    }
}

module.exports = {Dictionary};
