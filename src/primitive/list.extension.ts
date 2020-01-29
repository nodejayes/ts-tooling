import {
    max, min, mean, sum, isFunction, cloneDeep, find,
    findLast, filter, findIndex, indexOf, without, remove,
    pullAt, reverse, orderBy, first, last, map, maxBy, minBy, meanBy, sumBy, groupBy,
    findLastIndex
} from 'lodash';
import {ListSortOrder} from './list.sort.order.enum';

function checkIfNumeric<T>(item: T): boolean {
    return !isNaN(<any>item)
}

Array.prototype.Count = function (): number {
    return this.length;
};

Array.prototype.Max = function (): number {
    if (!checkIfNumeric(this[0])) {
        throw new Error(`Array has no numeric Content`);
    }
    return max(this);
};

Array.prototype.Min = function (): number {
    if (!checkIfNumeric(this[0])) {
        throw new Error(`Array has no numeric Content`);
    }
    return min(this);
};

Array.prototype.Mean = function (): number {
    if (!checkIfNumeric(this[0])) {
        throw new Error(`Array has no numeric Content`);
    }
    return mean(this);
};

Array.prototype.Sum = function (): number {
    if (!checkIfNumeric(this[0])) {
        throw new Error(`Array has no numeric Content`);
    }
    return sum(this);
};

Array.prototype.Add = function (element): void {
    this.push(element);
};

Array.prototype.AddIfNotExists = function (element): boolean {
    if (!this.Contains(element)) {
        this.Add(element);
        return true;
    }
    return false;
};

Array.prototype.Reduce = function (reducer, initial): any {
    for (const element of this) {
        initial = reducer(initial, element);
    }
    return initial;
};

Array.prototype.AddRange = function (elements): void {
    for (const el of elements) {
        this.Add(el);
    }
};

Array.prototype.AddRangeIfNotExists = function (elements): boolean[] {
    const state = [];
    for (const el of elements) {
        state.Add(this.AddIfNotExists(el));
    }
    return state;
};

Array.prototype.Clear = function (): void {
    this.splice(0, this.length);
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

Array.prototype.Copy = function (): any {
    const tmp = [];
    for (const el of this) {
        tmp.push(cloneDeep(el));
    }
    return tmp;
};

Array.prototype.Exists = function (findMethod): boolean {
    return !!find(this, findMethod);
};

Array.prototype.Find = function (findMethod): any {
    return find(this, findMethod);
};

Array.prototype.FindLast = function (findMethod): any {
    return findLast(this, findMethod);
};

Array.prototype.FindIndex = function (findMethod): number {
    return findIndex(this, findMethod);
};

Array.prototype.FindAll = function (findMethod): any {
    return filter(this, findMethod);
};

Array.prototype.Insert = function (index: number, element): void {
    this[index] = element;
};

Array.prototype.InsertRange = function (index: number, elements): void {
    for (let i = 0; i < elements.length; i++) {
        this.Insert(index.Add(i), elements[i]);
    }
};

Array.prototype.IndexOf = function (element, fromIndex?: number): number {
    let tmp = -1;
    if (fromIndex) {
        tmp = indexOf(this, element, fromIndex);
    } else {
        tmp = indexOf(this, element);
    }
    return tmp;
};

Array.prototype.Remove = function (element): void {
    const tmp = without(this, element);
    this.Clear();
    this.AddRange(tmp);
};

Array.prototype.RemoveAll = function (match): void {
    const tmp = remove(this, i => !match(i));
    this.Clear();
    this.AddRange(tmp);
};

Array.prototype.RemoveAt = function (index: number): void {
    pullAt(this, index);
};

Array.prototype.RemoveRange = function (elements): void {
    const tmp = without(this, ...elements);
    this.Clear();
    this.AddRange(tmp);
};

Array.prototype.Reverse = function (): any {
    return reverse(this);
};

Array.prototype.Sort = function (order?: ListSortOrder): any {
    const o = order === ListSortOrder.DESC ? 'desc' : 'asc';
    let sorted = this
        .sort((a, b) => a > b ? -1 : a < b ? 1 : 0);
    if (o === 'desc') {
        sorted = this
            .sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
    }
    return sorted;
};

Array.prototype.SortBy = function (keys: string[], orders?: ListSortOrder[]): any {
    const k = keys.Convert<string>(i => i);
    const sortOrder = orders.Convert<boolean | 'desc' | 'asc'>(i => i === ListSortOrder.DESC ? 'desc' : 'asc');
    return orderBy(this, k, sortOrder);
};

Array.prototype.ElementAt = function (index: number): any {
    return this[index];
};

Array.prototype.Any = function (): boolean {
    return this.length.IsAbove(0);
};

Array.prototype.FirstOrDefault = function (filterMethod?, def?): any {
    if (!isFunction(filterMethod)) {
        return first(this) || (def ? def : null);
    }
    return find(this, filterMethod) || (def ? def : null);
};

Array.prototype.FindLastIndex = function (findMethod): number {
    return findLastIndex(this, findMethod);
};

Array.prototype.TrueForAll = function (matchMethod): boolean {
    for (const item of this) {
        if (!matchMethod(item)) {
            return false;
        }
    }
    return true;
};

Array.prototype.LastOrDefault = function (filterMethod?, def?): any {
    if (!isFunction(filterMethod)) {
        return last(this) || (def ? def : null);
    }
    return findLast(this, filterMethod) || (def ? def : null);
};

Array.prototype.GroupBy = function (transformMethod): any {
    return groupBy(this, transformMethod);
};

Array.prototype.GroupKeys = function (transformMethod) {
    return Object.keys(groupBy(this, transformMethod));
};

Array.prototype.Convert = function (convertMethod): any {
    return map(this, convertMethod);
};

Array.prototype.MaxBy = function (filterMethod): any {
    return maxBy(this, filterMethod);
};

Array.prototype.MinBy = function (filterMethod): any {
    return minBy(this, filterMethod);
};

Array.prototype.MeanBy = function (filterMethod): any {
    return meanBy(this, filterMethod);
};

Array.prototype.SumBy = function (filterMethod): number {
    return sumBy(this, filterMethod);
};

Array.prototype.Join = function (sep?: string): string {
    return this.join(sep || ',');
};

Array.prototype.UnionBy = function(arr, filter) {
    for (const el of arr) {
        if (filter(el)) {
            this.push(el);
        }
    }
    return this;
};
