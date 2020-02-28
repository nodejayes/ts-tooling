const {RecursiveDeepCopy} = require('../../core/object/object');
const {
    Filter,
    Find,
    FindLast, GroupBy,
    IndexOf,
    MergeArray,
    OperateArray,
    Reverse, Sort,
    Without
} = require('../../core/array/array');
const {IsFunction} = require('../../core/checker/checker');

const ListSortOrder = Object.freeze({
    ASC: 'asc',
    DESC: 'desc',
});

/**
 * @return {number}
 */
Array.prototype.Count = function () {
    return this.length;
};

Array.prototype.Max = function (filterMethod) {
    return OperateArray(this, filterMethod, 1);
};

Array.prototype.Min = function (filterMethod) {
    return OperateArray(this, filterMethod, 2);
};

Array.prototype.Mean = function (filterMethod) {
    return OperateArray(this, filterMethod, 4);
};

Array.prototype.Sum = function (filterMethod) {
    return OperateArray(this, filterMethod, 3);
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

Array.prototype.Reduce = function (reducer, initial) {
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

/**
 * @return {boolean}
 */
Array.prototype.Contains = function (element) {
    for (const el of this) {
        if (IsFunction(el['Equals'])) {
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

/**
 * @return {boolean}
 */
Array.prototype.Exists = function (condition) {
    return !!Find(this, condition);
};

Array.prototype.Find = function (condition) {
    return Find(this, condition) || null;
};

Array.prototype.FindLast = function (condition) {
    return FindLast(this, condition) || null;
};

Array.prototype.FindIndex = function (condition) {
    return Find(this, condition, true);
};

Array.prototype.FindAll = function (condition) {
    return Filter(this, condition);
};

Array.prototype.Insert = function (index, element) {
    return MergeArray(this, index, [element]);
};

Array.prototype.InsertRange = function (index, elements) {
    return MergeArray(this, index, elements);
};

Array.prototype.IndexOf = function (element, fromIndex) {
    let tmp;
    if (fromIndex) {
        tmp = IndexOf(this, element, fromIndex);
    } else {
        tmp = IndexOf(this, element);
    }
    return tmp;
};

Array.prototype.Remove = function (element) {
    const tmp = Without(this, [element]);
    this.Clear();
    this.AddRange(tmp);
    return this;
};

Array.prototype.RemoveAll = function (match) {
    const tmp = Filter(this, i => match(i), true);
    this.Clear();
    this.AddRange(tmp);
    return this;
};

Array.prototype.RemoveAt = function (index) {
    if (index >= this.length || index < 0) {
        return this;
    }
    this.splice(index, 1);
    return this;
};

Array.prototype.RemoveRange = function (elements) {
    const tmp = Without(this, elements);
    this.Clear();
    this.AddRange(tmp);
    return this;
};

Array.prototype.Reverse = function () {
    return Reverse(this);
};

Array.prototype.Sort = function (order) {
    const o = !order ? 'asc' : order;
    let sorted = this
        .sort((a, b) => a > b ? -1 : a < b ? 1 : 0);
    if (o === 'asc') {
        sorted = this
            .sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
    }
    return sorted;
};

Array.prototype.SortBy = function (keys, orders) {
    return Sort(this, keys, orders.Convert(o => o === ListSortOrder.DESC));
};

Array.prototype.ElementAt = function (index) {
    return this[index] || null;
};

/**
 * @return {boolean}
 */
Array.prototype.Any = function (condition) {
    if (typeof condition !== typeof function() {}) {
        return this.length.IsAbove(0);
    }
    return !!this.Find(condition);
};

Array.prototype.FirstOrDefault = function (condition, def) {
    if (!IsFunction(condition)) {
        return this[0] || (def ? def : null);
    }
    return Find(this, condition) || (def ? def : null);
};

Array.prototype.FindLastIndex = function (condition) {
    return FindLast(this, condition, true);
};

/**
 * @return {boolean}
 */
Array.prototype.TrueForAll = function (condition) {
    for (const item of this) {
        if (!condition(item)) {
            return false;
        }
    }
    return true;
};

Array.prototype.LastOrDefault = function (condition, def) {
    if (!IsFunction(condition)) {
        return this[this.length-1] || (def ? def : null);
    }
    return FindLast(this, condition) || (def ? def : null);
};

Array.prototype.GroupBy = function (condition) {
    return GroupBy(this, condition);
};

Array.prototype.GroupKey = function (condition) {
    return Object.keys(GroupBy(this, condition));
};

Array.prototype.Convert = function (convertMethod) {
    return this.map(convertMethod);
};

Array.prototype.Replace = function (condition, item) {
    const tmp = this;
    const pos = this.FindIndex(condition);
    if (pos.IsBelow(0)) {
        tmp.Add(item);
        return tmp;
    }
    tmp[pos] = item;
    return tmp;
};

/**
 * @return {string}
 */
Array.prototype.Join = function (sep) {
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

module.exports = {ListSortOrder};
