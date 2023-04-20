const {IsFunction} = require('../checker/checker');

function _find(array, cb, getIdx = false, up = true) {
    if (up === true) {
        for (let i = 0; i < array.length; i++) {
            const item = array[i];
            if (cb(item, i, array)) {
                return getIdx ? i : item;
            }
        }
        return getIdx ? -1 : undefined;
    }

    for (let i = array.length-1; i >= 0; i--) {
        const item = array[i];
        if (cb(item, i, array)) {
            return getIdx ? i : item;
        }
    }
    return getIdx ? -1 : undefined;
}

const GetSortValue = (v1, v2) => {
    if (IsFunction(v1.IsBefore) &&
        IsFunction(v1.IsAfter)) {
        return v1.IsBefore(v2) ? [1, 2] :
            v1.IsAfter(v2) ? [2, 1] : [0, 0];
    }
    return [v1, v2];
};

const Sort = (array, columns, orders) => {
    return array.sort((a, b) => {
        for (let i = 0; i < columns.length; i++) {
            const column = columns[i];
            const reverse = orders[i];
            const values = GetSortValue(a[column], b[column]);
            if (values[0] < values[1]) {
                return reverse ? 1 : -1;
            }
            if (values[0] > values[1]) {
                return reverse ? -1 : 1;
            }
        }
        return 0;
    });
};

const GroupBy = (array, select) => {
    const tmp = {};
    for (const item of array) {
        const v = select(item);
        if (!tmp[v]) {
            tmp[v] = [];
        }
        tmp[v].push(item);
    }
    return tmp;
};

const Reverse = (array) => {
    const tmp = [];
    let counter = 0;
    for (let i = array.length-1; i >= 0; i--) {
        tmp[counter] = array[i];
        counter++;
    }
    return tmp;
};

const Find = (array, cb, getIdx = false) => {
    return _find(array, cb, getIdx);
};

const FindLast = (array, cb, getIdx = false) => {
    return _find(array, cb, getIdx, false);
};

const Filter = (array, cb, remove = false) => {
    const tmp = [];
    let i = 0;
    for (const item of array) {
        if (remove === true) {
            if (!cb(item, i, array)) {
                tmp.push(item);
            }
        } else {
            if (cb(item, i, array)) {
                tmp.push(item);
            }
        }
        i++;
    }
    return tmp;
};

const Without = (array, elements) => {
    const tmp = [];
    for (const item of array) {
        let found = IndexOf(elements, item) > -1;
        if (!found) {
            tmp.push(item);
        }
    }
    return tmp;
};

const IndexOf = (array, element, skip = 0) => {
    for (let i = 0; i < array.length; i++) {
        if (element === array[i] && i >= skip) {
            return i;
        }
        if (IsFunction(element['Equal']) && element['Equal'](array[i]) && i >= skip) {
            return i;
        }
    }
    return -1;
};

const OperateArray = (arr, filter, operation) => {
    let value = null;
    let counter = 0;
    for (const item of arr) {
        if (typeof item !== typeof 0) {
            continue;
        }
        if (filter && !filter(item, counter, arr)) {
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
};

const MergeArray = (array, index, elements) => {
    const before = Slice(array, 0, index);
    const after = Slice(array, index, array.length);
    return [...before, ...elements, ...after];
};

const Slice = (array, start, end) => {
    let index = -1;
    let length = array.length;

    if (start < 0) {
        start = -start > length ? 0 : (length + start);
    }
    end = end > length ? length : end;
    if (end < 0) {
        end += length;
    }
    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;

    let result = new Array(length);
    while (++index < length) {
        result[index] = array[index + start];
    }
    return result;
};

const Flat = (arr, maxDepth, depth, result = []) => {
    if (depth > maxDepth) {
        result.push(arr);
        return;
    }
    const l = arr.length;
    for (let i = 0; i < l; i++) {
        const v = arr[i];
        if (Array.isArray(v)) {
            Flat(v, maxDepth, ++depth, result);
            continue;
        }
        result.push(v);
    }
};

module.exports = {MergeArray, Sort, OperateArray, IndexOf, Without, Filter, Find, FindLast, Reverse, GroupBy, GetSortValue, Slice, Flat};
