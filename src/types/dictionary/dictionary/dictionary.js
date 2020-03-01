require('../../array/extension');

class Dictionary {
    constructor(dictionary) {
        this._data = {};
        if (dictionary) {
            this._data = dictionary;
        }
    }

    get Count() {
        return Object.keys(this._data).length;
    }

    get Values() {
        return Object.values(this._data);
    }

    Keys() {
        return Object.keys(this._data);
    }

    Add(key, item) {
        this._data[key] = item;
        return this;
    }

    Clear() {
        this._data = {};
        return this;
    }

    Remove(key) {
        delete this._data[key];
        return this;
    }

    ContainsKey(key) {
        return key in this._data;
    }

    ContainsValue(value) {
        return this.Values.indexOf(value) > -1;
    }

    GetObject() {
        return this._data;
    }

    TryGetValue(key) {
        return this._data[key] || null;
    }

    Find(filter) {
        for (const v of this.Values) {
            if (filter(v)) {
                return v;
            }
        }
        return null;
    }

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
