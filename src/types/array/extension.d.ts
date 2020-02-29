/**
 * represent a Sort Order of a List
 *
 * @category Type
 */
export enum ListSortOrder {
    ASC = 'asc',
    DESC = 'desc'
}

/**
 * extends the basic Javascript Array
 */
interface Array<T> {
    /**
     * get the Number of Items in the Array
     *
     * @category array
     *
     * @returns the Number of Elements
     *
     * @example
     * ```typescript
     * // returns 3
     * [1,2,3].Count();
     * // returns 0
     * [].Count();
     * ```
     */
    Count?(): number;

    /**
     * get the maximum number in the Array
     *
     * only number types are checked!!!
     *
     * @category array
     *
     * @param filterMethod a filter function to remove some number values
     * @returns the maximum value
     *
     * @example
     * ```typescript
     * // returns 3
     * [1,2,3].Max();
     * // returns 2
     * [1,2,3].Max(i => i < 3);
     * // returns 4
     * [1,2,'3',4,'5'].Max();
     * ```
     */
    Max?(filterMethod?: (d: T) => boolean): number;

    /**
     * get the minimum number in the Array
     *
     * only number types are checked!!!
     *
     * @category array
     *
     * @param filterMethod a filter function to remove some number values
     * @returns the minimum value
     *
     * @example
     * ```typescript
     * // returns 3
     * [1,2,3].Min();
     * // returns 2
     * [1,2,3].Min(i => i > 1);
     * // returns 4
     * ['1','2','3',4,'5'].Min();
     * ```
     */
    Min?(filterMethod?: (d: T) => boolean): number;

    /**
     * get the Mean from all numbers in this array
     *
     * @category array
     *
     * @param filterMethod a filter function to remove some number values
     * @returns the mean value
     *
     * @example
     * ```typescript
     * // returns 9.866666666666667
     * [1, 25.6, 3].Mean();
     * // returns 2
     * [1,2,3,4].Mean(i => i < 4);
     * // returns 4
     * ['1','2','3',4,'5'].Mean();
     * ```
     */
    Mean?(filterMethod?: (d: T) => boolean): number;

    /**
     * get the Sum from all numbers in this array
     *
     * @category array
     *
     * @param filterMethod a filter function to remove some number values
     * @returns the sum value
     *
     * @example
     * ```typescript
     * // returns 6
     * [1,2,3].Sum();
     * // returns 5
     * [1,2,3].Sum(i => i > 1);
     * // returns 4
     * ['1','2','3',4,'5'].Sum();
     * ```
     */
    Sum?(filterMethod?: (d: T) => boolean): number;

    /**
     * add the given element at the end of the list
     *
     * @category array
     *
     * @param element the element to add in the list
     * @returns the list after element added
     *
     * @example
     * ```typescript
     * // returns [1]
     * [].Add(1);
     * ```
     */
    Add?(element: T): T[];

    /**
     * add the element at the end of the list when the element not exists in the list.
     *
     * @category array
     *
     * @param element the element to add in the list
     * @returns the list after eventually added element
     *
     * @example
     * ```typescript
     * // returns [1,2]
     * [1].AddIfNotExists(2);
     * // returns [1]
     * [1].AddIfNotExists(1);
     * ```
     */
    AddIfNotExists?(element: T): T[];

    /**
     * shrink the array into a new object with a convert function.
     *
     * @category array
     *
     * @param reducer the reducer function to convert each array element
     * @param initial the initial value pass to each element
     * @returns the shrinked object
     *
     * @example
     * ```typescript
     * // returns "a,b,c"
     * ['a', 'b', 'c'].Reduce((target, e) => {
     *      return target.Concat(e, ',');
     *  }, '')
     * ```
     */
    Reduce?<K>(reducer: (target: K, e: T) => K, initial: K): K;

    /**
     * add multiple elements at the end of this array
     *
     * @category array
     *
     * @param elements the elements to add into this array
     * @returns the array after add all elements
     *
     * @example
     * ```typescript
     * // returns [1,2,3,4]
     * [1].AddRange([2,3,4]);
     * ```
     */
    AddRange?(elements: T[]): T[];

    /**
     * add multiple elements at the end of this array when not exists
     *
     * @category array
     *
     * @param elements the elements to add into this array
     * @returns the array after add all elements
     *
     * @example
     * ```typescript
     * // returns [1,2,3,4]
     * [1].AddRangeIfNotExists([2,3,4]);
     * // returns [1]
     * [1].AddRangeIfNotExists([1,1,1]);
     * ```
     */
    AddRangeIfNotExists?(elements: T[]): T[];

    /**
     * remove all Elements from this array
     *
     * @category array
     *
     * @returns the empty array
     *
     * @example
     * ```typescript
     * // returns []
     * [1,2,3].Clear();
     * ```
     */
    Clear?(): T[];

    /**
     * check if this array have the given element
     *
     * @category array
     *
     * @param element the element to be find
     * @returns element is in the list or not
     *
     * @example
     * ```typescript
     * // returns true
     * [1,2,3].Contains(2);
     * const element = {x:'y'};
     * [element].Contains(element);
     * const element2 = {hello:'world',Equals:(i) => this.hello === i.hello};
     * [element2].Contains(element2);
     * // returns false
     * [1,2,3].Contains(50);
     * [{hello:'world'}].Contains({hello:'world'});
     * ```
     */
    Contains?(element: T): boolean;

    /**
     * get a new instance of the array
     *
     * @category array
     *
     * @returns the new instance
     *
     * @example
     * ```typescript
     * // returns [1,2,3]
     * [1,2,3].Copy();
     * ```
     */
    Copy?(): T[];

    /**
     * check if the find Method returns true for a element in the list
     *
     * @category array
     *
     * @param condition the method executed for each element in the list
     * @returns element exists or not
     *
     * @example
     * ```typescript
     * // returns true
     * [1,2,3].Exists(e => e === 2);
     * // returns false
     * [1,2,3].Exists(e => e === 20);
     * ```
     */
    Exists?(condition: (d: T) => boolean): boolean;

    /**
     * find the first element that matches the condition in the array
     *
     * @category array
     *
     * @param condition the method executed for each element in the list
     * @returns the element that matches
     *
     * @example
     * ```typescript
     * // returns 2
     * [1,2,3].Find((e) => e > 1);
     * ```
     */
    Find?(condition: (d: T) => boolean): T;

    /**
     * find the last element that matches the condition in the array
     *
     * @category array
     *
     * @param condition the method executed for each element in the list
     * @returns the element that matches
     *
     * @example
     * ```typescript
     * // returns 3
     * [1,2,3].FindLast((e) => e > 1);
     * ```
     */
    FindLast?(condition: (d: T) => boolean): T;

    /**
     * replace a Item in the List takes the first match
     *
     * @category array
     *
     * @param condition the method executed for each element in the list
     * @param item the Item to replace with
     * @returns the list with the inserted Item
     *
     * @example
     * ```typescript
     * // returns [1,2,3]
     * [1,5,3].Replace((e) => e === 5, 2);
     * ```
     */
    Replace?(condition: (d: T) => boolean, item: T): T[];

    /**
     * get the index number of the first matched element in the array
     *
     * @category array
     *
     * @param condition the method executed for each element in the list
     * @returns the index number
     *
     * @example
     * ```typescript
     * // returns 1
     * [1,2,3,1,2,3].FindIndex(e => e === 2);
     * ```
     */
    FindIndex?(condition: (d: T) => boolean): number;

    /**
     * get all elements that match the condition
     *
     * @category array
     *
     * @param condition the method executed for each element in the list
     * @returns a array of matched elements
     *
     * @example
     * ```typescript
     * // returns [2,3]
     * [1,2,3].FindAll(i => i > 1);
     * ```
     */
    FindAll?(condition: (d: T) => boolean): T[];

    /**
     * get the index number of the last matched element in the array
     *
     * @category array
     *
     * @param condition the method executed for each element in the list
     * @returns the index number
     *
     * @example
     * ```typescript
     * // returns 4
     * [1,2,3,1,2,3].FindLastIndex(e => e === 2);
     * ```
     */
    FindLastIndex?(condition: (d: T) => boolean): number;

    /**
     * check if a condition returns true for any element in the array
     *
     * @category array
     *
     * @param condition the method to check each element
     * @returns condition is true for all elements or not
     *
     * @example
     * ```typescript
     * // returns true
     * [1,2,3].TrueForAll(e => typeof e === typeof 0);
     * // returns false
     * [1,2,3].TrueForAll(e => e === 1);
     * ```
     */
    TrueForAll?(condition: (d: T) => boolean): boolean;

    /**
     * insert a element in the array at a specific position
     *
     * @category array
     *
     * @param index the position where to insert the element
     * @param element the element to insert
     * @returns the array with inserted element
     *
     * @example
     * ```typescript
     * // returns [1,5,2,3]
     * [1,2,3].Insert(1, 5);
     * ```
     */
    Insert?(index: number, element: T): T[];

    /**
     * insert a array of elements in the array at a specific position
     *
     * @category array
     *
     * @param index the position where to insert the element
     * @param elements the elements to insert
     * @returns the array with inserted elements
     *
     * @example
     * ```typescript
     * // returns [1,4,5,6,2,3]
     * [1,2,3].Insert(1, [4,5,6]);
     * ```
     */
    InsertRange?(index: number, elements: T[]): T[];

    /**
     * get the array index of a element
     *
     * @category array
     *
     * @param element the element to find in the array
     * @param fromIndex the index to skip
     * @returns the array index of the target element
     *
     * @example
     * ```typescript
     * // returns 1
     * [1,2,3,1,2,3].IndexOf(2);
     * // returns 4
     * [1,2,3,1,2,3].IndexOf(2, 2);
     * ```
     */
    IndexOf?(element: T, fromIndex?: number): number;

    /**
     * remove a element from the list
     *
     * @category array
     *
     * @param element the element to remove from the list
     * @returns the array without the element to remove
     *
     * @example
     * ```typescript
     * // returns [1,3]
     * [1,2,3].Remove(2);
     * ```
     */
    Remove?(element: T): T[];

    /**
     * remove all elements that match the given condition
     *
     * @category array
     *
     * @param match the condition executed by any element in the array
     * @returns the array without the condition matching elements
     *
     * @example
     * ```typescript
     * // return [1,3]
     * [1,2,3].RemoveAll(e => e === 2);
     * // return []
     * [1,2,3].RemoveAll(() => true);
     * ```
     */
    RemoveAll?(match: (d: T) => boolean): T[];

    /**
     * remove element at specific position
     *
     * @category array
     *
     * @param index the position where the element was removed
     * @returns the array without the element to remove
     *
     * @example
     * ```typescript
     * // returns [1,3]
     * [1,2,3].RemoveAt(1);
     * ```
     */
    RemoveAt?(index: number): T[];

    /**
     * remove multiple elements from the array
     *
     * @category array
     *
     * @param elements the elements to remove from the array
     * @returns the array without the elements to remove
     *
     * @example
     * ```typescript
     * // returns [1,2,3]
     * [1,2,3,4,5,6].RemoveRange([4,5,6]);
     * [1,2,3].RemoveRange([4,5,6]);
     * ```
     */
    RemoveRange?(elements: T[]): T[];

    /**
     * turn around the array elements
     *
     * @category array
     *
     * @returns the reverse of the array
     *
     * @example
     * ```typescript
     * // returns [3,2,1]
     * [1,2,3].Reverse();
     * ```
     */
    Reverse?(): T[];

    /**
     * sort the elements in a array
     *
     * @category array
     *
     * @param order the direction to sort the array elements
     * @returns the sorted array
     *
     * @example
     * ```typescript
     * // returns [1, 2, 3]
     * [1, 2, 3].Sort();
     * // returns [3, 2, 1]
     * [1, 2, 3].Sort(ListSortOrder.DESC);
     * // returns ['c', 'b', 'a']
     * ['a', 'b', 'c'].Sort(ListSortOrder.DESC);
     * ```
     */
    Sort?(order?: ListSortOrder): T[];

    /**
     * sort a array of objects by the given keys
     *
     * @category array
     *
     * @param keys a list of keys to sort with
     * @param orders the sort direction to the keys
     * @returns the sorted list of objects
     *
     * @example
     * ```typescript
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
     * ```
     */
    SortBy?(keys: string[], orders?: ListSortOrder[]): T[];

    /**
     * get the array element at the given index or null
     *
     * @category array
     *
     * @param index the index of the element to get from array
     * @returns the element at the given index
     *
     * @example
     * ```typescript
     * // returns 2
     * [1,2,3].ElementAt(1);
     * ```
     */
    ElementAt?(index: number): T;

    /**
     * check if any element is in the array
     *
     * @category array
     *
     * @param condition the condition to search the element
     * @returns array has a element or not
     *
     * @example
     * ```typescript
     * // returns true
     * [1,2,3].Any();
     * // returns false
     * [].Any();
     * ```
     */
    Any?(condition?: (d: T) => boolean): boolean;

    /**
     * get the First element of the array or the first that match the condition
     *
     * when no element was found the default value or null was returned
     *
     * @category array
     *
     * @param condition the condition executed ba any array element
     * @param def the default value to return
     * @returns the element that matches first
     *
     * @example
     * ```typescript
     * // return 1
     * [1,2,3,4,5,6].FirstOrDefault();
     * // return 2
     * [1,2,3,4,5,6].FirstOrDefault(e => e > 1);
     * // return 10
     * [1,2,3,4,5,6].FirstOrDefault(() => false, 10);
     * ```
     */
    FirstOrDefault?(condition?: (d: T) => boolean, def?: T): T;

    /**
     * get the last element of the array or the last that match the condition
     *
     * when no element was found the default value or null was returned
     *
     * @category array
     *
     * @param condition the condition executed ba any array element
     * @param def the default value to return
     * @returns the element that matches last
     *
     * @example
     * ```typescript
     * // return 6
     * [1,2,3,4,5,6].LastOrDefault();
     * [1,2,3,4,5,6].LastOrDefault(e => e > 1);
     * // return 10
     * [1,2,3,4,5,6].LastOrDefault(() => false, 10);
     * ```
     */
    LastOrDefault?(condition?: (d: T) => boolean, def?: T): T;

    /**
     * groups a array of elements by a condition
     *
     * @category array
     *
     * @param condition the condition to group the array
     * @returns the grouped object with splatted arrays from the current array
     *
     * @example
     * ```typescript
     * // returns {'1': [1], '2': [2], '3': [3,3,3]}
     * [1,2,3,3,3].GroupBy(e => e);
     * ```
     */
    GroupBy?(condition: (d: T) => any): {[key: string]: T[]};

    /**
     * groups a array of elements by a condition and returns the group keys
     *
     * @category array
     *
     * @param condition the condition to group the array
     * @returns the grouped keys as string array
     *
     * @example
     * ```typescript
     * // returns ['1', '2', '3']
     * [1,2,3,3,3].GroupKey(e => e);
     * ```
     */
    GroupKey?(condition: (d: T) => any): string[];

    /**
     * convert all elements of the array into other form
     *
     * @category array
     *
     * @param convertMethod the method that execute with any element and convert them
     * @returns a new converted array
     *
     * @example
     * ```typescript
     * // returns ['Test1', 'Test2', 'Test3']
     * [1,2,3].Convert(e => 'Test' + e);
     * ```
     */
    Convert?<K>(convertMethod: ((d: T) => K) | ((d: T) => Promise<K>)): K[];

    /**
     * joins the array elements into a string with separator
     *
     * @category array
     *
     * @param separator the separator to split the array elements in the string
     * @returns the string with array elements
     *
     * @example
     * ```typescript
     * // returns "1,2,3"
     * [1,2,3].Join(',');
     * ```
     */
    Join?(separator?: string): string;

    /**
     * merge two arrays by the condition
     *
     * @category array
     *
     * @param items the items to add at the end of the array
     * @param check the condition that executed by the given items
     * @returns the merged array
     *
     * @example
     * ```typescript
     * // returns [1,2,3,6]
     * [1,2,3].UnionBy([4,5,6], e => e === 6);
     * ```
     */
    UnionBy?<T>(items: T[], check: (d: T) => boolean): T[];
}