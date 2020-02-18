import {recursiveDeepCopy} from '../core/object';
import {ListSortOrder} from './list.sort.order.enum';

/**
 * @ignore
 */
function getSortValue(v1, v2) {
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
function sort(array, columns, orders) {
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
function groupBy<T>(array: T[], select: (d: T) => any) {
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
function reverse<T>(array: T[]): T[] {
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
function isFunction(value: any): boolean {
    return typeof value === typeof function() {};
}

/**
 * @ignore
 */
function _find<T>(array: T[], cb: (d: T) => boolean, getIdx = false, up = true) {
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
function find<T>(array: T[], cb: (d: T) => boolean, getIdx = false) {
    return _find(array, cb, getIdx);
}

/**
 * @ignore
 */
function findLast<T>(array: T[], cb: (d: T) => boolean, getIdx = false) {
    return _find(array, cb, getIdx, false);
}

/**
 * @ignore
 */
function filter<T>(array: T[], cb: (d: T) => boolean, remove = false): T[] {
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
function without<T>(array: T[], elements: T[]): T[] {
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
function indexOf<T>(array: T[], element: T, skip = 0): number {
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
function operateArray(arr, filter, operation) {
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
function mergeArray(array, index, elements) {
    const before = array.slice(0, index);
    const after = array.slice(index, array.length);
    return [...before, ...elements, ...after];
}

Array.prototype.Count = function (): number {
    return this.length;
};

Array.prototype.Max = function (filterMethod?): number {
    return operateArray(this, filterMethod, 1);
};

Array.prototype.Min = function (filterMethod?): number {
    return operateArray(this, filterMethod, 2);
};

Array.prototype.Mean = function (filterMethod?): number {
    return operateArray(this, filterMethod, 4);
};

Array.prototype.Sum = function (filterMethod?): number {
    return operateArray(this, filterMethod, 3);
};

Array.prototype.Add = function (element) {
    this.push(element);
    return this;
};

Array.prototype.AddIfNotExists = function (element) {
    if (!this.Contains(element)) {
        this.Add(element);
    }
    return this;
};

Array.prototype.Reduce = function (reducer, initial): any {
    for (const element of this) {
        initial = reducer(initial, element);
    }
    return initial;
};

Array.prototype.AddRange = function (elements) {
    for (const el of elements) {
        this.Add(el);
    }
    return this;
};

Array.prototype.AddRangeIfNotExists = function (elements) {
    for (const el of elements) {
        this.AddIfNotExists(el);
    }
    return this;
};

Array.prototype.Clear = function () {
    this.splice(0, this.length);
    return this;
};

Array.prototype.Contains = function (element): boolean {
    for (const el of this) {
        if (isFunction(el['Equals'])) {
            if (el['Equals'](element)) {
                return true;
            }
        }
        if (el === element) {
            return true;
        }
    }
    return false;
};

Array.prototype.Copy = function () {
    const tmp = [];
    for (const el of this) {
        tmp.push(recursiveDeepCopy(el));
    }
    return tmp;
};

Array.prototype.Exists = function (condition): boolean {
    return !!find(this, condition);
};

Array.prototype.Find = function (condition): any {
    return find(this, condition) || null;
};

Array.prototype.FindLast = function (condition): any {
    return findLast(this, condition) || null;
};

Array.prototype.FindIndex = function (condition): number {
    return find(this, condition, true);
};

Array.prototype.FindAll = function (condition): any {
    return filter(this, condition);
};

Array.prototype.Insert = function (index: number, element) {
    return mergeArray(this, index, [element]);
};

Array.prototype.InsertRange = function (index: number, elements) {
    return mergeArray(this, index, elements);
};

Array.prototype.IndexOf = function (element, fromIndex?: number): number {
    let tmp: number;
    if (fromIndex) {
        tmp = indexOf(this, element, fromIndex);
    } else {
        tmp = indexOf(this, element);
    }
    return tmp;
};

Array.prototype.Remove = function (element) {
    const tmp = without(this, [element]);
    this.Clear();
    this.AddRange(tmp);
    return this;
};

Array.prototype.RemoveAll = function (match) {
    const tmp = filter(this, i => match(i), true);
    this.Clear();
    this.AddRange(tmp);
    return this;
};

Array.prototype.RemoveAt = function (index: number) {
    if (index >= this.length || index < 0) {
        return this;
    }
    this.splice(index, 1);
    return this;
};

Array.prototype.RemoveRange = function (elements) {
    const tmp = without(this, elements);
    this.Clear();
    this.AddRange(tmp);
    return this;
};

Array.prototype.Reverse = function (): any {
    return reverse(this);
};

Array.prototype.Sort = function (order?: ListSortOrder): any {
    const o = order === ListSortOrder.DESC ? 'asc' : 'desc';
    let sorted = this
        .sort((a, b) => a > b ? -1 : a < b ? 1 : 0);
    if (o === 'desc') {
        sorted = this
            .sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
    }
    return sorted;
};

Array.prototype.SortBy = function (keys: string[], orders?: ListSortOrder[]): any {
    return sort(this, keys, orders.Convert(o => o === ListSortOrder.DESC));
};

Array.prototype.ElementAt = function (index: number): any {
    return this[index] || null;
};

Array.prototype.Any = function (condition): boolean {
    if (typeof condition !== typeof function() {}) {
        return this.length.IsAbove(0);
    }
    return !!this.Find(condition);
};

Array.prototype.FirstOrDefault = function (condition?, def?): any {
    if (!isFunction(condition)) {
        return this[0] || (def ? def : null);
    }
    return find(this, condition) || (def ? def : null);
};

Array.prototype.FindLastIndex = function (condition): number {
    return findLast(this, condition, true);
};

Array.prototype.TrueForAll = function (condition): boolean {
    for (const item of this) {
        if (!condition(item)) {
            return false;
        }
    }
    return true;
};

Array.prototype.LastOrDefault = function (condition?, def?): any {
    if (!isFunction(condition)) {
        return this[this.length-1] || (def ? def : null);
    }
    return findLast(this, condition) || (def ? def : null);
};

Array.prototype.GroupBy = function (condition): any {
    return groupBy(this, condition);
};

Array.prototype.GroupKey = function (condition) {
    return Object.keys(groupBy(this, condition));
};

Array.prototype.Convert = function (convertMethod): any {
    return this.map(convertMethod);
};

Array.prototype.Join = function (sep?: string): string {
    return this.join(sep || ',');
};

Array.prototype.UnionBy = function(items, check) {
    for (const el of items) {
        if (check(el)) {
            this.push(el);
        }
    }
    return this;
};
