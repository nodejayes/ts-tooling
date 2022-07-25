const {
    Filter,
    Find,
    FindLast, GroupBy,
    IndexOf,
    MergeArray,
    OperateArray,
    Reverse, Sort,
    Without, Slice,
    Flat,
} = require('../../core/array/array');
const {IsFunction} = require('../../core/checker/checker');

/**
 * represent a Sort Order of a List
 *
 * @enum module:types/array.ListSortOrder
 * @readonly
 */
const ListSortOrder = Object.freeze({
    ASC: 'asc',
    DESC: 'desc',
});

/**
 * @class module:types/array.Array
 */

/**
 * get the Number of Items in the Array
 *
 * ##### Benchmarks
 *
 * | Method                         | Time                                             |
 * |--------------------------------|--------------------------------------------------|
 * | ts-tooling Count               | x 851,097,270 ops/sec ±28.64% (74 runs sampled)  |
 * | native length                  | x 1,085,894,940 ops/sec ±0.99% (88 runs sampled) |
 *
 * @function module:types/array.Array#Count
 *
 * @returns {number} the Number of Elements
 *
 * @example
 * // returns 3
 * [1,2,3].Count();
 * // returns 0
 * [].Count();
 */
Array.prototype.Count = function () {
    return this.length;
};

/**
 * get the maximum number in the Array
 *
 * only number types are checked!!!
 *
 * @function module:types/array.Array#Max
 *
 * @param filterMethod {function} a filter function to remove some number values
 * @returns {number} the maximum value
 *
 * @example
 * // returns 3
 * [1,2,3].Max();
 * // returns 2
 * [1,2,3].Max(i => i < 3);
 * // returns 4
 * [1,2,'3',4,'5'].Max();
 */
Array.prototype.Max = function (filterMethod) {
    return OperateArray(this, filterMethod, 1);
};

/**
 * get the minimum number in the Array
 *
 * only number types are checked!!!
 *
 * @function module:types/array.Array#Min
 *
 * @param filterMethod {function} a filter function to remove some number values
 * @returns {number} the minimum value
 *
 * @example
 * // returns 3
 * [1,2,3].Min();
 * // returns 2
 * [1,2,3].Min(i => i > 1);
 * // returns 4
 * ['1','2','3',4,'5'].Min();
 */
Array.prototype.Min = function (filterMethod) {
    return OperateArray(this, filterMethod, 2);
};

/**
 * get the Mean from all numbers in this array
 *
 * @function module:types/array.Array#Mean
 *
 * @param filterMethod {function} a filter function to remove some number values
 * @returns {number} the mean value
 *
 * @example
 * // returns 9.866666666666667
 * [1, 25.6, 3].Mean();
 * // returns 2
 * [1,2,3,4].Mean(i => i < 4);
 * // returns 4
 * ['1','2','3',4,'5'].Mean();
 */
Array.prototype.Mean = function (filterMethod) {
    return OperateArray(this, filterMethod, 4);
};

/**
 * get the Sum from all numbers in this array
 *
 * @function module:types/array.Array#Sum
 *
 * @param filterMethod {function} a filter function to remove some number values
 * @returns {number} the sum value
 *
 * @example
 * // returns 6
 * [1,2,3].Sum();
 * // returns 5
 * [1,2,3].Sum(i => i > 1);
 * // returns 4
 * ['1','2','3',4,'5'].Sum();
 */
Array.prototype.Sum = function (filterMethod) {
    return OperateArray(this, filterMethod, 3);
};

/**
 * add the given element at the end of the list
 *
 * ##### Benchmarks
 *
 * | Method          | Time                                          |
 * |-----------------|-----------------------------------------------|
 * | ts-tooling Add  | x 57,804,458 ops/sec ±1.47% (91 runs sampled) |
 * | native push     | x 58,264,211 ops/sec ±0.87% (88 runs sampled) |
 * | lodash union    | x 5,189,805 ops/sec ±0.56% (91 runs sampled)  |
 *
 * @function module:types/array.Array#Add
 *
 * @param element {any} the element to add in the list
 * @returns {any[]} the list after element added
 *
 * @example
 * // returns [1]
 * [].Add(1);
 */
Array.prototype.Add = function (element) {
    this.push(element);
    return this;
};

/**
 * add the element at the end of the list when the element not exists in the list.
 *
 * ##### Benchmarks
 *
 * | Method                     | Time                                           |
 * |----------------------------|------------------------------------------------|
 * | ts-tooling AddIfNotExists  | x 107,188,538 ops/sec ±0.52% (92 runs sampled) |
 * | native push                | x 107,892,115 ops/sec ±0.41% (92 runs sampled) |
 * | lodash uniq                | x 3,280,625 ops/sec ±0.45% (93 runs sampled)   |
 *
 * @function module:types/array.Array#AddIfNotExists
 *
 * @param element {any} the element to add in the list
 * @returns {any[]} the list after eventually added element
 *
 * @example
 * // returns [1,2]
 * [1].AddIfNotExists(2);
 * // returns [1]
 * [1].AddIfNotExists(1);
 */
Array.prototype.AddIfNotExists = function (element) {
    if (this.indexOf(element) < 0) {
        this.push(element);
    }
    return this;
};

/**
 * shrink the array into a new object with a convert function.
 *
 * @function module:types/array.Array#Reduce
 *
 * @param reducer {function} the reducer function to convert each array element
 * @param initial {any} the initial value pass to each element
 * @returns {any} the shrinked object
 *
 * @example
 * // returns "a,b,c"
 * ['a', 'b', 'c'].Reduce((target, e) => {
 *      return target.Concat(e, ',');
 *  }, '')
 */
Array.prototype.Reduce = function (reducer, initial) {
    for (const element of this) {
        initial = reducer(initial, element);
    }
    return initial;
};

/**
 * add multiple elements at the end of this array
 *
 * ##### Benchmarks
 *
 * | Method                 | Time                                          |
 * |------------------------|-----------------------------------------------|
 * | ts-tooling AddRange    | x 39,273,414 ops/sec ±0.33% (94 runs sampled) |
 * | native spread operator | x 34,448,109 ops/sec ±0.57% (91 runs sampled) |
 * | lodash union           | x 3,644,336 ops/sec ±0.27% (98 runs sampled)  |
 *
 * @function module:types/array.Array#AddRange
 *
 * @param elements {any[]} the elements to add into this array
 * @returns {any[]} the array after add all elements
 *
 * @example
 * // returns [1,2,3,4]
 * [1].AddRange([2,3,4]);
 */
Array.prototype.AddRange = function (elements) {
    for (const el of elements) {
        this.push(el);
    }
    return this;
};

/**
 * add multiple elements at the end of this array when not exists
 *
 * ##### Benchmarks
 *
 * | Method                         | Time                                          |
 * |--------------------------------|-----------------------------------------------|
 * | ts-tooling AddRangeIfNotExists | x 44,300,453 ops/sec ±0.51% (95 runs sampled) |
 * | native loop in loop            | x 33,207,676 ops/sec ±0.18% (94 runs sampled) |
 * | lodash unique                  | x 3,313,261 ops/sec ±0.50% (92 runs sampled)  |
 *
 * @function module:types/array.Array#AddRangeIfNotExists
 *
 * @param elements {any[]} the elements to add into this array
 * @returns {any[]} the array after add all elements
 *
 * @example
 * // returns [1,2,3,4]
 * [1].AddRangeIfNotExists([2,3,4]);
 * // returns [1]
 * [1].AddRangeIfNotExists([1,1,1]);
 */
Array.prototype.AddRangeIfNotExists = function (elements) {
    for (const el of elements) {
        this.AddIfNotExists(el);
    }
    return this;
};

/**
 * remove all Elements from this array
 *
 * ##### Benchmarks
 *
 * | Method                         | Time                                           |
 * |--------------------------------|------------------------------------------------|
 * | ts-tooling Clear               | x 37,578,211 ops/sec ±0.41% (91 runs sampled)  |
 * | native length zero             | x 23,631,709 ops/sec ±0.38% (95 runs sampled)  |
 * | lodash unset                   | x 22,280,942 ops/sec ±0.44% (93 runs sampled)  |
 *
 * @function module:types/array.Array#Clear
 *
 * @returns {any[]} the empty array
 *
 * @example
 * // returns []
 * [1,2,3].Clear();
 */
Array.prototype.Clear = function () {
    this.splice(0, this.length);
    return this;
};

/**
 * check if this array have the given element
 *
 * ##### Benchmarks
 *
 * | Method                         | Time                                             |
 * |--------------------------------|--------------------------------------------------|
 * | ts-tooling Contains            | x 162,455,211 ops/sec ±0.71% (91 runs sampled)   |
 * | native indexOf                 | x 1,155,522,774 ops/sec ±0.21% (91 runs sampled) |
 * | lodash indexOf                 | x 155,472,909 ops/sec ±1.43% (94 runs sampled)   |
 *
 * @function module:types/array.Array#Contains
 *
 * @param element {any} the element to be find
 * @returns {boolean} element is in the list or not
 *
 * @example
 * // returns true
 * [1,2,3].Contains(2);
 * const element = {x:'y'};
 * [element].Contains(element);
 * const element2 = {hello:'world',Equals:(i) => this.hello === i.hello};
 * [element2].Contains(element2);
 * // returns false
 * [1,2,3].Contains(50);
 * [{hello:'world'}].Contains({hello:'world'});
 */
Array.prototype.Contains = function (element) {
    return this.indexOf(element) >= 0 ? true : this.Any(e => {
        if (typeof e['Equals'] === 'function') {
            return e['Equals'].bind(e)(element);
        }
        return e === element;
    });
};

/**
 * get a new instance of the array
 *
 * ##### Benchmarks
 *
 * | Method                         | Time                                             |
 * |--------------------------------|--------------------------------------------------|
 * | ts-tooling Copy                | x 92,921,502 ops/sec ±0.57% (96 runs sampled)    |
 * | native map                     | x 91,599,583 ops/sec ±0.62% (91 runs sampled)    |
 * | lodash clone                   | x 22,895,459 ops/sec ±0.57% (96 runs sampled)    |
 *
 * @function module:types/array.Array#Copy
 *
 * @returns {any[]} the new instance
 *
 * @example
 * // returns [1,2,3]
 * [1,2,3].Copy();
 */
Array.prototype.Copy = function () {
    return this.map(x => x);
};

/**
 * check if the find Method returns true for a element in the list
 *
 * @function module:types/array.Array#Exists
 *
 * @param condition {function} the method executed for each element in the list
 * @returns {boolean} element exists or not
 *
 * @example
 * // returns true
 * [1,2,3].Exists(e => e === 2);
 * // returns false
 * [1,2,3].Exists(e => e === 20);
 */
Array.prototype.Exists = function (condition) {
    return this.Any(condition);
};

/**
 * find the first element that matches the condition in the array
 *
 * ##### Benchmarks
 *
 * | Method          | Time                                       |
 * |-----------------|--------------------------------------------|
 * | ts-tooling Find | x 229,304 ops/sec ±0.59% (95 runs sampled) |
 * | native find     | x 35,343 ops/sec ±28.79% (92 runs sampled) |
 * | lodash find     | x 219,159 ops/sec ±0.22% (96 runs sampled) |
 *
 * @function module:types/array.Array#Find
 *
 * @param condition {function} the method executed for each element in the list
 * @returns {any} the element that matches
 *
 * @example
 * // returns 2
 * [1,2,3].Find((e) => e > 1);
 */
Array.prototype.Find = function (condition) {
    return Find(this, condition);
};

/**
 * find the last element that matches the condition in the array
 *
 * ##### Benchmarks
 *
 * | Method               | Time                                           |
 * |----------------------|------------------------------------------------|
 * | ts-tooling FindLast  | x 227,298,011 ops/sec ±0.46% (93 runs sampled) |
 * | native for           | x 149,215,368 ops/sec ±0.59% (94 runs sampled) |
 * | lodash lastIndexOf   | x 64,148,306 ops/sec ±0.76% (94 runs sampled)  |
 *
 * @function module:types/array.Array#FindLast
 *
 * @param condition {function} the method executed for each element in the list
 * @returns {any} the element that matches
 *
 * @example
 * // returns 3
 * [1,2,3].FindLast((e) => e > 1);
 */
Array.prototype.FindLast = function (condition) {
    return FindLast(this, condition) || null;
};

/**
 * get the index number of the first matched element in the array
 *
 * ##### Benchmarks
 *
 * | Method               | Time                                           |
 * |----------------------|------------------------------------------------|
 * | ts-tooling FindIndex | x 240,067,369 ops/sec ±0.28% (96 runs sampled) |
 * | native for           | x 237,436,130 ops/sec ±1.00% (93 runs sampled) |
 * | lodash indexOf       | x 233,680,478 ops/sec ±0.55% (89 runs sampled) |
 *
 * @function module:types/array.Array#FindIndex
 *
 * @param condition {function} the method executed for each element in the list
 * @returns {number} the index number
 *
 * @example
 * // returns 1
 * [1,2,3,1,2,3].FindIndex(e => e === 2);
 */
Array.prototype.FindIndex = function (condition) {
    return Find(this, condition, true);
};

/**
 * get all elements that match the condition
 *
 * ##### Benchmarks
 *
 * | Method             | Time                                       |
 * |--------------------|--------------------------------------------|
 * | ts-tooling FindAll | x 29,934 ops/sec ±0.50% (96 runs sampled)  |
 * | native filter      | x 12,503 ops/sec ±14.18% (92 runs sampled) |
 * | lodash filter      | x 5,604 ops/sec ±0.56% (93 runs sampled)   |
 *
 * @function module:types/array.Array#FindAll
 *
 * @param condition {function} the method executed for each element in the list
 * @returns {any[]} a array of matched elements
 *
 * @example
 * // returns [2,3]
 * [1,2,3].FindAll(i => i > 1);
 */
Array.prototype.FindAll = function (condition) {
    const tmp = [];
    for (let i = 0; i < this.length; i++) {
        if (condition(this[i], i, this)) {
            tmp.push(this[i]);
        }
    }
    return tmp;
    // return Filter(this, condition);
};

/**
 * insert a element in the array at a specific position
 *
 * ##### Benchmarks
 *
 * | Method                    | Time                                          |
 * |---------------------------|-----------------------------------------------|
 * | ts-tooling Insert         | x 15,318,221 ops/sec ±0.53% (92 runs sampled) |
 * | native loop               | x 13,428,154 ops/sec ±1.98% (88 runs sampled) |
 * | lodash take and takeRight | x 14,216,260 ops/sec ±0.85% (90 runs sampled) |
 *
 * @function module:types/array.Array#Insert
 *
 * @param index {number} the position where to insert the element
 * @param element {any} the element to insert
 * @returns {any[]} the array with inserted element
 *
 * @example
 * // returns [1,5,2,3]
 * [1,2,3].Insert(1, 5);
 */
Array.prototype.Insert = function (index, element) {
    return MergeArray(this, index, [element]);
};

/**
 * insert a array of elements in the array at a specific position
 *
 * @function module:types/array.Array#InsertRange
 *
 * @param index {number} the position where to insert the element
 * @param elements {any[]} the elements to insert
 * @returns {any[]} the array with inserted elements
 *
 * @example
 * // returns [1,4,5,6,2,3]
 * [1,2,3].Insert(1, [4,5,6]);
 */
Array.prototype.InsertRange = function (index, elements) {
    return MergeArray(this, index, elements);
};

/**
 * get the array index of a element
 *
 * ##### Benchmarks
 *
 * | Method                    | Time                                             |
 * |---------------------------|--------------------------------------------------|
 * | ts-tooling Insert         | x 239,446,561 ops/sec ±0.27% (98 runs sampled)   |
 * | native loop               | x 1,158,030,694 ops/sec ±0.16% (94 runs sampled) |
 * | lodash take and takeRight | x 72,062,997 ops/sec ±2.63% (85 runs sampled)    |
 *
 * @function module:types/array.Array#IndexOf
 *
 * @param element {any} the element to find in the array
 * @param fromIndex {number?} the index to skip
 * @returns {number} the array index of the target element
 *
 * @example
 * // returns 1
 * [1,2,3,1,2,3].IndexOf(2);
 * // returns 4
 * [1,2,3,1,2,3].IndexOf(2, 2);
 */
Array.prototype.IndexOf = function (element, fromIndex) {
    let tmp;
    if (fromIndex) {
        tmp = IndexOf(this, element, fromIndex);
    } else {
        tmp = IndexOf(this, element);
    }
    return tmp;
};

/**
 * remove a element from the list
 *
 * @function module:types/array.Array#Remove
 *
 * @param element {any} the element to remove from the list
 * @returns {any[]} the array without the element to remove
 *
 * @example
 * // returns [1,3]
 * [1,2,3].Remove(2);
 */
Array.prototype.Remove = function (element) {
    const tmp = Without(this, [element]);
    this.Clear();
    this.AddRange(tmp);
    return this;
};

/**
 * remove all elements that match the given condition
 *
 * @function module:types/array.Array#RemoveAll
 *
 * @param match {function} the condition executed by any element in the array
 * @returns {any[]} the array without the condition matching elements
 *
 * @example
 * // return [1,3]
 * [1,2,3].RemoveAll(e => e === 2);
 * // return []
 * [1,2,3].RemoveAll(() => true);
 */
Array.prototype.RemoveAll = function (match) {
    const tmp = Filter(this, i => match(i), true);
    this.Clear();
    this.AddRange(tmp);
    return this;
};

/**
 * remove element at specific position
 *
 * @function module:types/array.Array#RemoveAt
 *
 * @param index {number} the position where the element was removed
 * @returns {any[]} the array without the element to remove
 *
 * @example
 * // returns [1,3]
 * [1,2,3].RemoveAt(1);
 */
Array.prototype.RemoveAt = function (index) {
    if (index >= this.length || index < 0) {
        return this;
    }
    this.splice(index, 1);
    return this;
};

/**
 * remove multiple elements from the array
 *
 * @function module:types/array.Array#RemoveRange
 *
 * @param elements {any[]} the elements to remove from the array
 * @returns {any[]} the array without the elements to remove
 *
 * @example
 * // returns [1,2,3]
 * [1,2,3,4,5,6].RemoveRange([4,5,6]);
 * [1,2,3].RemoveRange([4,5,6]);
 */
Array.prototype.RemoveRange = function (elements) {
    const tmp = Without(this, elements);
    this.Clear();
    this.AddRange(tmp);
    return this;
};

/**
 * turn around the array elements
 *
 * @function module:types/array.Array#Reverse
 *
 * @returns {any[]} the reverse of the array
 *
 * @example
 * // returns [3,2,1]
 * [1,2,3].Reverse();
 */
Array.prototype.Reverse = function () {
    return Reverse(this);
};

/**
 * sort the elements in a array
 *
 * @function module:types/array.Array#Sort
 *
 * @param order {ListSortOrder} the direction to sort the array elements
 * @returns {any[]} the sorted array
 *
 * @example
 * // returns [1, 2, 3]
 * [1, 2, 3].Sort();
 * // returns [3, 2, 1]
 * [1, 2, 3].Sort(ListSortOrder.DESC);
 * // returns ['c', 'b', 'a']
 * ['a', 'b', 'c'].Sort(ListSortOrder.DESC);
 */
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

/**
 * sort a array of objects by the given keys
 *
 * @function module:types/array.Array#SortBy
 *
 * @param keys {string[]} a list of keys to sort with
 * @param orders {ListSortOrder[]} the sort direction to the keys
 * @returns {any[]} the sorted list of objects
 *
 * @example
 * // returns [
 * // {
 * //       Name: 'Anne Klein',
 * //       Age: 23,
 * //       Birthday: new Date(1965, 8, 12, 0, 0, 0),
 * //       Address: {
 * //           Street: 'Jenaer Strasse 26',
 * //           PLZ: '47053',
 * //           Town: 'Duisburg',
 * //       }
 * //   },{
 * //       Name: 'Christine Ehrlichmann',
 * //       Age: 37,
 * //       Birthday: new Date(1982, 4, 23, 0, 0, 0),
 * //       Address: {
 * //           Street: 'Paul-Nevermann-Platz 59',
 * //           PLZ: '97657',
 * //           Town: 'Sandberg'
 * //       }
 * //   },{
 * //       Name: 'Jonas Schreiner',
 * //       Age: 23,
 * //       Birthday: new Date(1965, 4, 12, 0, 0, 0),
 * //       Address: {
 * //           Street: 'Gotthardstrasse 69',
 * //           PLZ: '99094',
 * //           Town: 'Erfurt'
 * //       }
 * //   },{
 * //       Name: 'Sandra Eichmann',
 * //       Age: 45,
 * //       Birthday: new Date(1969, 0, 22, 0, 0, 0),
 * //       Address: {
 * //           Street: 'Inge Beisheim Platz 20',
 * //           PLZ: '25313',
 * //           Town: 'Elmshorn'
 * //       }
 * //   },{
 * //       Name: 'Ulrich Gärtner',
 * //       Age: 60,
 * //       Birthday: new Date(1959, 2, 23, 0, 0, 0),
 * //       Address: {
 * //           Street: 'Koenigstrasse 50',
 * //           PLZ: '99750',
 * //           Town: 'Bleicherode'
 * //       }
 * //   }
 * // ]
 * [
 *    {
 *           Name: 'Jonas Schreiner',
 *           Age: 23,
 *           Birthday: new Date(1965, 4, 12, 0, 0, 0),
 *           Address: {
 *               Street: 'Gotthardstrasse 69',
 *               PLZ: '99094',
 *               Town: 'Erfurt'
 *           }
 *       },
 *    {
 *           Name: 'Sandra Eichmann',
 *           Age: 45,
 *           Birthday: new Date(1969, 0, 22, 0, 0, 0),
 *           Address: {
 *               Street: 'Inge Beisheim Platz 20',
 *               PLZ: '25313',
 *               Town: 'Elmshorn'
 *           }
 *       },
 *    {
 *           Name: 'Ulrich Gärtner',
 *           Age: 60,
 *           Birthday: new Date(1959, 2, 23, 0, 0, 0),
 *           Address: {
 *               Street: 'Koenigstrasse 50',
 *               PLZ: '99750',
 *               Town: 'Bleicherode'
 *           }
 *       },
 *    {
 *           Name: 'Christine Ehrlichmann',
 *           Age: 37,
 *           Birthday: new Date(1982, 4, 23, 0, 0, 0),
 *           Address: {
 *               Street: 'Paul-Nevermann-Platz 59',
 *               PLZ: '97657',
 *               Town: 'Sandberg'
 *           }
 *       },
 *    {
 *           Name: 'Anne Klein',
 *           Age: 23,
 *           Birthday: new Date(1965, 8, 12, 0, 0, 0),
 *           Address: {
 *               Street: 'Jenaer Strasse 26',
 *               PLZ: '47053',
 *               Town: 'Duisburg',
 *           }
 *       }
 *    ].SortBy(['Name'], [ListSortOrder.ASC]);
 */
Array.prototype.SortBy = function (keys, orders) {
    if (!orders) {
        orders = [];
        for (let i = 0; i < keys.length; i++) {
            orders.push(ListSortOrder.ASC);
        }
    }
    const missingOrders = keys.length - orders.length;
    if (missingOrders > 0) {
        for (let i = 0; i < missingOrders; i++) {
            orders.push(ListSortOrder.ASC);
        }
    }
    if (missingOrders < 0) {
        orders = orders.slice(0, keys.length - 1);
    }
    return Sort(this, keys, orders.Convert(o => o === ListSortOrder.DESC));
};

/**
 * get the array element at the given index or null
 *
 * ##### Benchmarks
 *
 * | Method                         | Time                                             |
 * |--------------------------------|--------------------------------------------------|
 * | ts-tooling ElementAt           | x 1,108,307,168 ops/sec ±0.93% (92 runs sampled) |
 * | native                         | 1,128,407,580 ops/sec ±0.69% (90 runs sampled)   |
 *
 * @function module:types/array.Array#ElementAt
 *
 * @param index {number} the index of the element to get from array
 * @returns {any[]} the element at the given index
 *
 * @example
 * // returns 2
 * [1,2,3].ElementAt(1);
 */
Array.prototype.ElementAt = function (index) {
    return this[index] || null;
};

/**
 * check if any element is in the array
 *
 * ##### Benchmarks
 *
 * | Method                         | Time                                           |
 * |--------------------------------|------------------------------------------------|
 * | ts-tooling Any                 | x 213,178,708 ops/sec ±0.70% (92 runs sampled) |
 * | native loop                    | x 206,000,901 ops/sec ±0.36% (96 runs sampled) |
 * | lodash find                    | x 21,507,024 ops/sec ±1.17% (79 runs sampled)  |
 *
 * @function module:types/array.Array#Any
 *
 * @param condition {function} the condition to search the element
 * @returns {boolean} array has a element or not
 *
 * @example
 * // returns true
 * [1,2,3].Any();
 * // returns false
 * [].Any();
 */
Array.prototype.Any = function (condition) {
    if (typeof condition !== typeof function() {}) {
        return this.length.IsAbove(0);
    }
    const tmp = this.Find(condition);
    return tmp !== null && tmp !== undefined;
};

/**
 * get the First element of the array or the first that match the condition
 *
 * when no element was found the default value or null was returned
 *
 * ##### Benchmarks
 *
 * | Method                         | Time                                             |
 * |--------------------------------|--------------------------------------------------|
 * | ts-tooling FirstOrDefault      | x 1,160,627,843 ops/sec ±0.22% (91 runs sampled) |
 * | native loop                    | x 1,047,556,734 ops/sec ±0.21% (97 runs sampled) |
 * | lodash first                   | x 1,165,609,777 ops/sec ±0.20% (93 runs sampled) |
 *
 * @function module:types/array.Array#FirstOrDefault
 *
 * @param condition {function} the condition executed ba any array element
 * @param def {any?} the default value to return
 * @returns {any} the element that matches first
 *
 * @example
 * // return 1
 * [1,2,3,4,5,6].FirstOrDefault();
 * // return 2
 * [1,2,3,4,5,6].FirstOrDefault(e => e > 1);
 * // return 10
 * [1,2,3,4,5,6].FirstOrDefault(() => false, 10);
 */
Array.prototype.FirstOrDefault = function (condition, def) {
    if (!IsFunction(condition)) {
        return this[0] || (def ? def : null);
    }
    return Find(this, condition) || (def ? def : null);
};

/**
 * get the index number of the last matched element in the array
 *
 * ##### Benchmarks
 *
 * | Method                   | Time                                           |
 * |--------------------------|------------------------------------------------|
 * | ts-tooling FindLastIndex | x 234,008,498 ops/sec ±0.34% (96 runs sampled) |
 * | native for               | x 236,726,921 ops/sec ±0.44% (93 runs sampled) |
 * | lodash lastIndexOf       | x 64,953,673 ops/sec ±0.89% (94 runs sampled)  |
 *
 * @function module:types/array.Array#FindLastIndex
 *
 * @param condition {function} the method executed for each element in the list
 * @returns {number} the index number
 *
 * @example
 * // returns 4
 * [1,2,3,1,2,3].FindLastIndex(e => e === 2);
 */
Array.prototype.FindLastIndex = function (condition) {
    return FindLast(this, condition, true);
};

/**
 * check if a condition returns true for any element in the array
 *
 * @function module:types/array.Array#TrueForAll
 *
 * @param condition {function} the method to check each element
 * @returns {boolean} condition is true for all elements or not
 *
 * @example
 * // returns true
 * [1,2,3].TrueForAll(e => typeof e === typeof 0);
 * // returns false
 * [1,2,3].TrueForAll(e => e === 1);
 */
Array.prototype.TrueForAll = function (condition) {
    for (let i = 0; i < this.length; i++) {
        const item = this[i];
        if (!condition(item, i, this)) {
            return false;
        }
    }
    return true;
};

/**
 * get the last element of the array or the last that match the condition
 *
 * when no element was found the default value or null was returned
 *
 * @function module:types/array.Array#LastOrDefault
 *
 * @param condition {function} the condition executed ba any array element
 * @param def {any?} the default value to return
 * @returns {any} the element that matches last
 *
 * @example
 * // return 6
 * [1,2,3,4,5,6].LastOrDefault();
 * [1,2,3,4,5,6].LastOrDefault(e => e > 1);
 * // return 10
 * [1,2,3,4,5,6].LastOrDefault(() => false, 10);
 */
Array.prototype.LastOrDefault = function (condition, def) {
    if (!IsFunction(condition)) {
        return this[this.length-1] || (def ? def : null);
    }
    return FindLast(this, condition) || (def ? def : null);
};

/**
 * groups a array of elements by a condition
 *
 * ##### Benchmarks
 *
 * | Method              | Time                                          |
 * |---------------------|-----------------------------------------------|
 * | ts-tooling GroupBy  | x 2,192,293 ops/sec ±0.48% (92 runs sampled)  |
 * | lodash groupBy      | x 1,661,346 ops/sec ±0.73% (88 runs sampled)  |
 *
 * @function module:types/array.Array#GroupBy
 *
 * @param condition {function} the condition to group the array
 * @returns {any} the grouped object with splatted arrays from the current array
 *
 * @example
 * // returns {'1': [1], '2': [2], '3': [3,3,3]}
 * [1,2,3,3,3].GroupBy(e => e);
 */
Array.prototype.GroupBy = function (condition) {
    return GroupBy(this, condition);
};

/**
 * groups a array of elements by a condition and returns the group keys
 *
 * ##### Benchmarks
 *
 * | Method              | Time                                          |
 * |---------------------|-----------------------------------------------|
 * | ts-tooling GroupBy  | x 1,410,032 ops/sec ±1.15% (92 runs sampled)  |
 *
 * @function module:types/array.Array#GroupKey
 *
 * @param condition {function} the condition to group the array
 * @returns {string[]} the grouped keys as string array
 *
 * @example
 * // returns ['1', '2', '3']
 * [1,2,3,3,3].GroupKey(e => e);
 */
Array.prototype.GroupKey = function (condition) {
    return Object.keys(GroupBy(this, condition));
};

/**
 * convert all elements of the array into other form
 *
 * ##### Benchmarks
 *
 * | Method              | Time                                         |
 * |---------------------|----------------------------------------------|
 * | ts-tooling Convert  | x 87,857 ops/sec ±0.55% (97 runs sampled)    |
 * | native map          | x 20,964 ops/sec ±18.85% (91 runs sampled)   |
 * | lodash map          | x 10,331 ops/sec ±0.84% (93 runs sampled)    |
 *
 * @function module:types/array.Array#Convert
 *
 * @param convertMethod {function} the method that execute with any element and convert them
 * @returns {any[]} a new converted array
 *
 * @example
 * // returns ['Test1', 'Test2', 'Test3']
 * [1,2,3].Convert(e => 'Test' + e);
 */
Array.prototype.Convert = function (convertMethod) {
    const len = this ? this.length : 0;
    const tmp = new Array(len);
    for (let i = 0; i < len; i++) {
        const el = this[i];
        tmp[i] = convertMethod(el, i, this);
    }
    return tmp;
};

/**
 * replace a Item in the List takes the first match
 *
 * @function module:types/array.Array#FindIndex
 *
 * @param condition {function} the method executed for each element in the list
 * @param item {any} the Item to replace with
 * @param force {boolean} add item if not found in list on the end default = true
 * @returns {any[]} the list with the inserted Item
 *
 * @example
 * // returns [1,2,3]
 * [1,5,3].Replace((e) => e === 5, 2);
 */
Array.prototype.Replace = function (condition, item, force = true) {
    const tmp = this;
    const pos = this.FindIndex(condition);
    if (pos.IsBelow(0)) {
        if (force === true) {
            tmp.Add(item);
        }
        return tmp;
    }
    tmp[pos] = item;
    return tmp;
};

/**
 * joins the array elements into a string with separator
 *
 * @function module:types/array.Array#Join
 *
 * @param separator {string} the separator to split the array elements in the string
 * @returns {string} the string with array elements
 *
 * @example
 * // returns "1,2,3"
 * [1,2,3].Join(',');
 */
Array.prototype.Join = function (separator) {
    return this.join(separator || ',');
};

/**
 * merge two arrays by the condition
 *
 * @function module:types/array.Array#UnionBy
 *
 * @param items {any[]} the items to add at the end of the array
 * @param check {function} the condition that executed by the given items
 * @returns {any[]} the merged array
 *
 * @example
 * // returns [1,2,3,6]
 * [1,2,3].UnionBy([4,5,6], e => e === 6);
 */
Array.prototype.UnionBy = function(items, check) {
    for (const el of items) {
        if (check(el)) {
            this.push(el);
        }
    }
    return this;
};

/**
 * remove the Element at the index from the Array and give it back
 *
 * @function module:types/array.Array#Pull
 *
 * @param index {number} the index of the element to remove from array
 * @returns {any} the removed element
 *
 * @example
 * // returns 2
 * const tmp = [1,2,3];
 * tmp.Pull(1);
 * console.info(tmp)
 * // prints [1,3]
 */
Array.prototype.Pull = function(index) {
    let el = this.ElementAt(index);
    if (index > this.length-1) {
        index = this.length-1;
        el = this.ElementAt(index);
    }
    if (index < 0) {
        index = 0;
        el = this.ElementAt(index);
    }
    this.splice(index, 1);
    return el;
};

function baseSlice(array, start, end) {
    let index = -1;
    let l = array.length;

    if (start < 0) {
        start = -start > l ? 0 : (l + start);
    }
    end = end > l ? l : end;
    if (end < 0) {
        end += l;
    }
    l = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;

    const result = Array(l);
    while (++index < l) {
        result[index] = array[index + start];
    }
    return result;
}

/**
 * split a Array into chunks
 *
 * ##### Benchmarks
 *
 * | Method                         | Time                                           |
 * |--------------------------------|------------------------------------------------|
 * | ts-tooling Chunk               | x 31,231,399 ops/sec ±0.64% (96 runs sampled)  |
 * | native loop                    | x 11,386,704 ops/sec ±1.01% (90 runs sampled)  |
 * | lodash chunk                   | x 29,142,827 ops/sec ±0.80% (92 runs sampled)  |
 *
 * @function module:types/array.Array#Chunk
 *
 * @param chunkSize {number} the length of a Chunk Size
 * @return {T[][]} the List of Chunks
 * @example
 * // returns [[1,2], [3,4], [5]]
 * [1,2,3,4,5].Chunk(2);
 */
Array.prototype.Chunk = function (chunkSize) {
    if (chunkSize < 1) {
        return [this];
    }
    const l = this.length;
    const result = Array(Math.ceil(l / chunkSize));
    let index = 0;
    let resIndex = 0;

    while (index < l) {
        result[resIndex++] = baseSlice(this, index, (index += chunkSize));
    }
    return result;
};

/**
 * remove all Duplicates in the list
 *
 * @function module:types/array.Array#Unique
 *
 * @param cb {function?} a optional compare function
 * @return {any[]}
 *
 * @example
 * // returns [1,2,3]
 * [1,1,2,2,3].Unique();
 */
Array.prototype.Unique = function (cb) {
    const tmp = [];
    for (let i = 0; i < this.length; i++) {
        if (typeof cb === 'function') {
            const found = tmp.Find(t => cb(t, this[i]));
            if (found) {
                continue;
            }
        } else {
            if (tmp.Contains(this[i])) {
                continue;
            }
        }
        tmp.Add(this[i]);
    }
    return tmp;
};

/**
 * execute a callback for each Array Segment
 *
 * @function module:types/array.Array#ForSegment
 *
 * @param cb {function} the callback to execute with current element and next element
 * @example
 * // the counter after the execution is 4
 * let counter = 0;
 * [1,2,3,4,5].ForSegment((c, n) => {
 *     // c is the current element and n are the next element
 *     // both elements are defined when the next element have a next element and the value in the array are not undefined or null
 *     counter++;
 * });
 *
 * // the callback was never ben called so the counter after the execution is 0
 * let counter = 0;
 * [1].ForSegment(() => {
 *     counter++;
 * });
 */
Array.prototype.ForSegment = function (cb) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        const current = this[i];
        const next = this[i+1];
        if (!next || !current) {
            break;
        }
        cb(current, next);
    }
};

/**
 * iterate over the items they are not in the given indexes
 *
 * @function module:types/array.Array#Without
 *
 * @param indexes {number[]} the indexes to skip
 * @param cb {function} the operation to do
 *
 * @example
 * [1,2,3,4,5].Without([0,2], e => console.info(e));
 * // print into console
 * // 2
 * // 4
 * // 5
 */
Array.prototype.Without = function (indexes, cb) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (indexes.Contains(i)) {
            continue;
        }
        cb(this[i]);
    }
};

/**
 * flat a array to a specific depth
 *
 * ##### Benchmarks
 *
 * | Method              | Time                                          |
 * |---------------------|-----------------------------------------------|
 * | ts-tooling Flat     | x 12,075,388 ops/sec ±0.27% (97 runs sampled) |
 * | native flat         | x 645,246 ops/sec ±0.26% (90 runs sampled)    |
 * | lodash flattenDepth | x 7,094,123 ops/sec ±0.30% (95 runs sampled)  |
 *
 * @function module:types/array.Array#Flat
 *
 * @param depth {number} the number of planes to be resolved
 * @returns {array} the flatten array
 *
 * @example
 * // returns [1,2,3,4,5]
 * [1,[[[[[2,3,4]]]]],5].Flat();
 *
 * // returns [1,[[[[2,3,4]]]],5]
 * [1,[[[[[2,3,4]]]]],5].Flat(1);
 */
Array.prototype.Flat = function (depth) {
    if (!depth || depth < 0) {
        depth = 9007199254740991;
    }
    const result = [];
    Flat(this, depth, 0, result);
    return result;
};

/**
 * get the Elements from the end of the Array
 *
 * ##### Benchmarks
 *
 * | Method              | Time                                           |
 * |---------------------|------------------------------------------------|
 * | ts-tooling Tail     | x 101,331,109 ops/sec ±0.48% (95 runs sampled) |
 * | native slice        | x 53,480,600 ops/sec ±1.39% (91 runs sampled)  |
 * | lodash takeRight    | x 71,582,112 ops/sec ±1.02% (90 runs sampled)  |
 *
 * @function module:types/array.Array#Tail
 *
 * @param length {number} the number of elements to receive
 * @returns {array}
 *
 * @example
 * // returns [2,3]
 * [1,2,3].Tail(2);
 */
Array.prototype.Tail = function (length) {
    let arrLength = this.length;
    length = arrLength - length;
    return Slice(this, length < 0 ? 0 : length, arrLength);
};

/**
 * get the Elements on the Top of the Array
 *
 * ##### Benchmarks
 *
 * | Method              | Time                                           |
 * |---------------------|------------------------------------------------|
 * | ts-tooling Head     | x 111,504,913 ops/sec ±0.45% (94 runs sampled) |
 * | native slice        | x 37,705,060 ops/sec ±2.32% (92 runs sampled)  |
 * | lodash take         | x 78,197,044 ops/sec ±2.85% (87 runs sampled)  |
 *
 * @function module:types/array.Array#Head
 *
 * @param length {number} the number of elements to receive
 * @returns {array}
 *
 * @example
 * // returns [1,2]
 * [1,2,3].Head(2);
 */
Array.prototype.Head = function (length) {
    return Slice(this, 0, length < 0 ? 0 : length);
};

module.exports = {ListSortOrder};
