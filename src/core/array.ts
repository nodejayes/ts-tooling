/**
 * @ignore
 */
export function getSortValue(v1, v2) {
    if (typeof v1.IsBefore === typeof function () {} &&
        typeof v1.IsAfter === typeof function () {}) {
        return v1.IsBefore(v2) ? [1, 2] :
            v1.IsAfter(v2) ? [2, 1] : [0, 0];
    }
    return [v1, v2];
}

/**
 * @ignore
 */
export function sort(array, columns, orders) {
    return array.sort((a, b) => {
        for (let i = 0; i < columns.length; i++) {
            const column = columns[i];
            const reverse = orders[i];
            const values = getSortValue(a[column], b[column]);
            if (values[0] < values[1]) {
                return reverse ? 1 : -1;
            }
            if (values[0] > values[1]) {
                return reverse ? -1 : 1;
            }
        }
        return 0;
    });
}

/**
 * @ignore
 */
export function groupBy<T>(array: T[], select: (d: T) => any) {
    const tmp = {};
    for (const item of array) {
        const v = select(item);
        if (!tmp[v]) {
            tmp[v] = [];
        }
        tmp[v].push(item);
    }
    return tmp;
}

/**
 * @ignore
 */
export function reverse<T>(array: T[]): T[] {
    const tmp = [];
    let counter = 0;
    for (let i = array.length-1; i >= 0; i--) {
        tmp[counter] = array[i];
        counter++;
    }
    return tmp;
}

/**
 * @ignore
 */
export function isFunction(value: any): boolean {
    return typeof value === typeof function() {};
}

/**
 * @ignore
 */
export function _find<T>(array: T[], cb: (d: T) => boolean, getIdx = false, up = true) {
    if (up === true) {
        for (let i = 0; i < array.length; i++) {
            const item = array[i];
            if (cb(item)) {
                return getIdx ? i : item;
            }
        }
        return getIdx ? -1 : null;
    }

    for (let i = array.length-1; i >= 0; i--) {
        const item = array[i];
        if (cb(item)) {
            return getIdx ? i : item;
        }
    }
    return getIdx ? -1 : null;
}

/**
 * @ignore
 */
export function find<T>(array: T[], cb: (d: T) => boolean, getIdx = false) {
    return _find(array, cb, getIdx);
}

/**
 * @ignore
 */
export function findLast<T>(array: T[], cb: (d: T) => boolean, getIdx = false) {
    return _find(array, cb, getIdx, false);
}

/**
 * @ignore
 */
export function filter<T>(array: T[], cb: (d: T) => boolean, remove = false): T[] {
    const tmp = [];
    for (const item of array) {
        if (remove === true) {
            if (!cb(item)) {
                tmp.push(item);
            }
        } else {
            if (cb(item)) {
                tmp.push(item);
            }
        }
    }
    return tmp;
}

/**
 * @ignore
 */
export function without<T>(array: T[], elements: T[]): T[] {
    const tmp = [];
    for (const item of array) {
        let found = indexOf(elements, item) > -1;
        if (!found) {
            tmp.push(item);
        }
    }
    return tmp;
}

/**
 * @ignore
 */
export function indexOf<T>(array: T[], element: T, skip = 0): number {
    for (let i = 0; i < array.length; i++) {
        if (element === array[i] && i >= skip) {
            return i;
        }
        if (isFunction(element['Equal']) && element['Equal'](array[i]) && i >= skip) {
            return i;
        }
    }
    return -1;
}

/**
 * @ignore
 */
export function operateArray(arr, filter, operation) {
    let value = null;
    let counter = 0;
    for (const item of arr) {
        if (typeof item !== typeof 0) {
            continue;
        }
        if (filter && !filter(item)) {
            continue;
        }
        counter++;
        switch(operation) {
            case 1:
                if (value === null || item > value) {
                    value = item;
                }
                break;
            case 2:
                if (value === null || item < value) {
                    value = item;
                }
                break;
            case 3:
            case 4:
                if (value === null) {
                    value = 0;
                }
                value += item;
                break;
        }
    }
    if (value === null) {
        value = 0;
    }
    if (operation === 4) {
        if (counter < 1) {
            return 0;
        }
        value = value / counter;
    }
    return value;
}

/**
 * @ignore
 */
export function mergeArray(array, index, elements) {
    const before = array.slice(0, index);
    const after = array.slice(index, array.length);
    return [...before, ...elements, ...after];
}
