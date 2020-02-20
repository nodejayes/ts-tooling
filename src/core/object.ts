/**
 * deep copy a Javascript Object
 *
 * @param o the object to copy
 */
export function recursiveDeepCopy(o) {
    let newO,
        i;

    if (typeof o !== 'object') {
        return o;
    }
    if (!o) {
        return o;
    }

    if ('[object Array]' === Object.prototype.toString.apply(o)) {
        newO = [];
        for (i = 0; i < o.length; i += 1) {
            newO[i] = recursiveDeepCopy(o[i]);
        }
        return newO;
    }

    newO = {};
    for (i in o) {
        if (o.hasOwnProperty(i)) {
            newO[i] = recursiveDeepCopy(o[i]);
        }
    }
    return newO;
}

/**
 * get a Object Value from a key definition
 *
 * @param obj the Object
 * @param key the Key definition
 */
export function get(obj: any, key: string): any {
    let tmp = obj;
    for (const part of key.Split('.')) {
        if (!tmp || !tmp.hasOwnProperty(part)) {
            return null;
        }
        tmp = tmp[part];
    }
    return tmp;
}

/**
 * set a Object key
 *
 * @param obj the Object
 * @param key the Key definition
 * @param value the Value to set
 */
export function set(obj: any, key: string, value: any): any {
    let tmp = obj;
    const keys = key.Split('.');
    for (let i = 0; i < keys.length-1; i++) {
        const part = keys[i];
        if (!tmp || !tmp.hasOwnProperty(part)) {
            return obj;
        }
        tmp = tmp[part];
    }
    tmp[keys.LastOrDefault()] = value;
    return obj;
}

/**
 * combine slave into master
 *
 * @param master
 * @param slave
 */
export function merge<T>(master: any, slave: any): T {
    for (const key in slave) {
        if (master.hasOwnProperty(key) && master[key] !== null && master[key] !== undefined) {
            if (typeof master[key] === typeof {}) {
                master[key] = merge(master[key], slave[key]);
            }
            master[key] = slave[key];
        } else {
            master[key] = slave[key];
        }
    }
    return master;
}
