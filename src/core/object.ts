/**
 * @ignore
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
 * @ignore
 */
export function get(obj: any, key: string): any {
    let tmp = obj;
    for (const part of key.split('.')) {
        if (!tmp || !tmp.hasOwnProperty(part)) {
            return null;
        }
        tmp = tmp[part];
    }
    return tmp;
}

/**
 * @ignore
 */
export function set(obj: any, key: string, value: any): any {
    let tmp = obj;
    const keys = key.split('.');
    for (let i = 0; i < keys.length-1; i++) {
        tmp = tmp[keys[i]];
    }
    tmp[keys.LastOrDefault()] = value;
    return obj;
}

/**
 * @ignore
 */
export function merge<T>(master: any, slave: any): T {
    for (const key in slave) {
        if (master.hasOwnProperty(key) && master[key] !== null && master[key] !== undefined) {
            if (typeof master[key] === typeof {}) {
                master[key] = merge(master[key], slave[key]);
                continue;
            }
            master[key] = slave[key];
        } else {
            master[key] = slave[key];
        }
    }
    return master;
}
