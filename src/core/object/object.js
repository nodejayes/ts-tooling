const RecursiveDeepCopy = (o, cache = []) => {
    let newO,
        i;

    if (typeof o !== 'object') {
        return o;
    }
    if (!o) {
        return o;
    }

    if (cache.indexOf(o) > -1) {
        return o;
    }
    cache.push(o);

    if ('[object Array]' === Object.prototype.toString.apply(o)) {
        newO = [];
        for (i = 0; i < o.length; i += 1) {
            newO[i] = RecursiveDeepCopy(o[i], cache);
        }
        return newO;
    }

    if (o instanceof Date) {
        return new Date(o.getTime());
    }

    newO = {};
    for (i in o) {
        if (o.hasOwnProperty(i)) {
            newO[i] = RecursiveDeepCopy(o[i], cache);
        }
    }
    return newO;
};

const Get = (obj, key) => {
    let tmp = obj;
    for (const part of key.split('.')) {
        if (!tmp || !tmp.hasOwnProperty(part)) {
            return null;
        }
        tmp = tmp[part];
    }
    return tmp;
};

const Set = (obj, key, value) => {
    let tmp = obj;
    const keys = key.split('.');
    for (let i = 0; i < keys.length-1; i++) {
        tmp = tmp[keys[i]];
    }
    tmp[keys[keys.length-1]] = value;
    return obj;
};

const Merge = (master, slave) => {
    for (const key in slave) {
        if (master.hasOwnProperty(key) && master[key] !== null && master[key] !== undefined) {
            if (slave[key] === undefined) {
                continue;
            }
            if (master[key] instanceof Date) {
                master[key] = slave[key];
                continue;
            }
            if (typeof master[key] === typeof {}) {
                master[key] = Merge(master[key], slave[key]);
                continue;
            }
            master[key] = slave[key];
        } else {
            master[key] = slave[key];
        }
    }
    return master;
};

module.exports = {Get, Set, Merge, RecursiveDeepCopy};
