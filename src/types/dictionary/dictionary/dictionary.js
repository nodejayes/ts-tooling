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
     * @example
     * // create a empty dictionary
     * const empty = new Dictionary();
     * // create a Dictionary with number values
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
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
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * //write 3 into the console
     * console.info(filled.Count);
     */
    get Count() {
        return Object.keys(this._data).length;
    }

    /**
     * all Values of the Dictionary
     *
     * @readonly
     * @return {any[]}
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * //write [1,2,3] into the console
     * console.info(filled.Values);
     */
    get Values() {
        return Object.values(this._data);
    }

    /**
     * all Keys of the Dictionary
     *
     * @readonly
     * @return {string[]}
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * // writes ['a', 'b', 'c'] into the console
     * console.info(filled.Keys);
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
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * filled.Add('d', 4);
     * // writes ['a', 'b', 'c', 'd'] into the console
     * console.info(filled.Keys);
     * // writes [1, 2, 3, 4] into the console
     * console.info(filled.Values);
     */
    Add(key, item) {
        this._data[key] = item;
        return this;
    }

    /**
     * clear the Dictionary
     *
     * @return {Dictionary}
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * filled.Clear();
     * // writes [] into the console
     * console.info(filled.Keys);
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
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * filled.Remove('a');
     * // writes ['b', 'c'] into the console
     * console.info(filled.Keys);
     * // writes [2, 3] into the console
     * console.info(filled.Values);
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
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * // is true
     * filled.ContainsKey('b');
     * // is false
     * filled.ContainsKey('z');
     */
    ContainsKey(key) {
        return key in this._data;
    }

    /**
     * check if a Value is in the Dictionary
     *
     * @param value {any}
     * @return {boolean}
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * // is true
     * filled.ContainsValue(1);
     * // is false
     * filled.ContainsValue(10);
     */
    ContainsValue(value) {
        return this.Values.indexOf(value) > -1;
    }

    /**
     * get the Dictionary as Javascript Object
     *
     * @return {any}
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * // returns {'a': 1, 'b': 2, 'c': 3}
     * console.info(filled.GetObject());
     */
    GetObject() {
        return this._data;
    }

    /**
     * get a Value from the Dictionary
     *
     * @param key {string}
     * @returns {any|null}
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * // returns 2
     * filled.GetValue('b');
     * // returns null
     * filled.GetValue('z');
     */
    GetValue(key) {
        return this._data[key] || null;
    }

    /**
     * try to get a Value in the Dictionary
     *
     * @param key {string}
     * @param cb {function}
     * @return {boolean}
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * // returns true and set result 2
     * let result;
     * filled.TryGetValue('b', v => result = v);
     * // returns false and set result null
     * filled.TryGetValue('z', v => result = v);
     */
    TryGetValue(key, cb) {
        const value = this._data[key] || null;
        cb(value);
        return !!value;
    }

    /**
     * get a Value that match the Filter Condition
     *
     * @param filter {function}
     * @return {any}
     * @example
     * const d = new Dictionary({
     *      Hello: 'World',
     *      This: 'is',
     *      A: 'Dictionary',
     *  });
     *  // returns 'is'
     *  d.Find(i => i.Equals('is'));
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
     * @example
     * const d = new Dictionary({
     *      Hello: 'World',
     *      Hello2: 'World',
     *      Hello3: 'World',
     *      This: 'is',
     *      A: 'Dictionary',
     *  });
     *  // returns 3
     *  d.FindAll(i => i.Equals('World')).Count();
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
