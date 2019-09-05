import {
    cloneDeep,
    filter,
    find,
    findIndex,
    findLast,
    findLastIndex,
    groupBy,
    includes,
    indexOf,
    map,
    max,
    maxBy,
    mean,
    meanBy,
    min,
    minBy,
    orderBy,
    pullAt,
    remove,
    reverse,
    sum,
    sumBy,
    without,
    isFunction,
    first,
} from 'lodash';
import {Dictionary} from "./dictionary";
import {Integer} from "../primitive/integer";
import {Chars} from '../primitive/chars';
import {ListSortOrder} from "./list-sort-order.enum";
import {Double} from "../primitive/double";

/**
 * a callback that get the Item and returns a Boolean value
 * true means the Value is in the Filter
 */
export type FilterMethod<T> = (d: T) => boolean;
/**
 * a callback that gets the Item and returns a Number that was aggregate by Sum
 */
export type SumMethod<T> = (d: T) => number;
/**
 * a callback that gets the Item and return anything
 */
export type TransformMethod<T> = (d: T) => any;
/**
 * a callback that gets a Item and returns another specific Item
 */
export type ConvertMethod<T, K> = (d: T) => K;

/**
 * @ignore
 */
function checkIfNumeric<T>(item: T): boolean {
    return !isNaN(<any>item)
}

/**
 * Represent a List of Items with specific Type
 */
export class List<T> {
    private _data: T[] = [];

    /**
     * the number of items in the list
     * @constructor
     */
    get Count(): Integer {
        return new Integer(this._data.length);
    }

    /**
     * get the Maximum Value in the List
     * ATTENTION only in Numeric Lists
     * @constructor
     */
    get Max(): Double {
        if (!checkIfNumeric<T>(this._data[0])) {
            throw new Error(`List has no numeric Content`);
        }
        return new Double(<any>max(this._data));
    }

    /**
     * get the Min Value of the List
     * ATTENTION only in Numeric Lists
     * @constructor
     */
    get Min(): Double {
        if (!checkIfNumeric<T>(this._data[0])) {
            throw new Error(`List has no numeric Content`);
        }
        return new Double(<any>min(this._data));
    }

    /**
     * get the Mean of this List
     * ATTENTION only in Numeric Lists
     * @constructor
     */
    get Mean(): Double {
        if (!checkIfNumeric<T>(this._data[0])) {
            throw new Error(`List has no numeric Content`);
        }
        return new Double(mean(this._data));
    }

    /**
     * get the Sum of this List
     * ATTENTION only in Numeric Lists
     * @constructor
     */
    get Sum(): Double {
        if (!checkIfNumeric<T>(this._data[0])) {
            throw new Error(`List has no numeric Content`);
        }
        return new Double(sum(this._data));
    }

    /**
     * create a new List you can create an empty List or fill an
     * Array into the List when it was created
     * @param data
     */
    constructor(data?: T[]) {
        if (!data) {
            this._data = [];
        } else {
            this._data = data;
        }
    }

    /**
     * add a new Item into the List
     * @param element
     * @constructor
     */
    Add(element: T): void {
        this._data.push(element);
    }

    /**
     * add a Item to the List if not exists in the List
     * @param element
     * @constructor
     */
    AddIfNotExists(element: T): boolean {
        if (!this.Contains(element)) {
            this.Add(element);
            return true;
        }
        return false;
    }

    /**
     * same as Add with multiple Items
     * @param elements
     * @constructor
     */
    AddRange(elements: List<T>): void {
        for (const el of elements.ToArray()) {
            this.Add(el);
        }
    }

    /**
     * same as AddIfNotExists with multiple items
     * @param elements
     * @constructor
     */
    AddRangeIfNotExists(elements: List<T>): List<boolean> {
        const state = new List<boolean>();
        for (const el of elements.ToArray()) {
            state.Add(this.AddIfNotExists(el));
        }
        return state;
    }

    /**
     * remove all Items from the List
     * @constructor
     */
    Clear(): void {
        this._data = [];
    }

    /**
     * check if an Item is in the List
     * @param element
     * @constructor
     */
    Contains(element: T): boolean {
        return includes(this._data, element);
    }

    /**
     * copy the complete List into a new One
     * @constructor
     */
    Copy(): List<T> {
        const tmp = [];
        for (const el of this._data) {
            tmp.push(cloneDeep(el));
        }
        return new List<T>(tmp);
    }

    /**
     * check if a Items exists that match the specific Filter
     * @param findMethod the Filter function
     * @constructor
     */
    Exists(findMethod: FilterMethod<T>): boolean {
        return !!find(this._data, findMethod);
    }

    /**
     * returns the First match of an Item from the List by specific Filter
     * @param findMethod the Filter function
     * @constructor
     */
    Find(findMethod: FilterMethod<T>): T {
        return find(this._data, findMethod);
    }

    /**
     * returns the Last match of an Item from the List by specific Filter
     * @param findMethod the Filter function
     * @constructor
     */
    FindLast(findMethod: FilterMethod<T>): T {
        return findLast(this._data, findMethod);
    }

    /**
     * returns the index of the First Item that matches the specific Filter
     * @param findMethod the Filter function
     * @constructor
     */
    FindIndex(findMethod: FilterMethod<T>): Integer {
        return new Integer(findIndex(this._data, findMethod));
    }

    /**
     * returns all Items that matches the specific Filter
     * as new List
     * @param findMethod the Filter function
     * @constructor
     */
    FindAll(findMethod: FilterMethod<T>): List<T> {
        return new List<T>(filter(this._data, findMethod));
    }

    /**
     * returns the Index of the Last match Item from the List by specific Filter
     * @param findMethod the Filter function
     * @constructor
     */
    FindLastIndex(findMethod: FilterMethod<T>): Integer {
        return new Integer(findLastIndex(this._data, findMethod));
    }

    /**
     * check if the condition is true for all Items in the List
     * @param matchMethod
     * @constructor
     */
    TrueForAll(matchMethod: FilterMethod<T>): boolean {
        for (const item of this._data) {
            if (!matchMethod(item)) {
                return false;
            }
        }
        return true;
    }

    /**
     * insert a new Item at the Index into the List
     * @param index
     * @param element
     * @constructor
     */
    Insert(index: Integer, element: T): void {
        this._data[index.Value] = element;
    }

    /**
     * insert multiple Items at the Index into the List
     * @param index
     * @param elements
     * @constructor
     */
    InsertRange(index: Integer, elements: T[]): void {
        for (let i = 0; i < elements.length; i++) {
            this.Insert(index.Add(new Integer(i)), elements[i]);
        }
    }

    /**
     * get the Index of an Intem in the List
     * @param element
     * @param fromIndex
     * @constructor
     */
    IndexOf(element: T, fromIndex?: Integer): Integer {
        let tmp = -1;
        if (fromIndex) {
            tmp = indexOf(this._data, element, fromIndex.Value);
        } else {
            tmp = indexOf(this._data, element);
        }
        return new Integer(tmp);
    }

    /**
     * removes a Item from the List
     * @param element
     * @constructor
     */
    Remove(element: T): void {
        this._data = without(this._data, element);
    }

    /**
     * remove all Items from List that match the Filter
     * @param match
     * @constructor
     */
    RemoveAll(match: FilterMethod<T>): void {
        this._data = remove(this._data, i => !match(i));
    }

    /**
     * remove a Item at a specific Index
     * @param index
     * @constructor
     */
    RemoveAt(index: Integer): void {
        pullAt(this._data, index.Value);
    }

    /**
     * remove all these Items from the List
     * @param elements
     * @constructor
     */
    RemoveRange(elements: T[]): void {
        this._data = without(this._data, ...elements);
    }

    /**
     * turn around the whole List
     * @constructor
     */
    Reverse(): List<T> {
        return new List<T>(reverse(this._data));
    }

    /**
     * convert the List back into a Javascript Array
     * @constructor
     */
    ToArray(): T[] {
        return this._data;
    }

    /**
     * sort primitive List by ASC or DESC order
     * @param order
     * @constructor
     */
    Sort(order?: ListSortOrder): List<T> {
        const o = order === ListSortOrder.DESC ? 'desc' : 'asc';
        let sorted = this._data
            .sort((a, b) => a > b ? -1 : a < b ? 1 : 0);
        if (o === 'desc') {
            sorted = this._data
                .sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
        }
        return new List<T>(sorted);
    }

    /**
     * sort complex List by multiple Keys
     * @param keys
     * @param orders
     * @constructor
     */
    SortBy(keys: List<Chars>, orders?: List<ListSortOrder>): List<T> {
        const k = keys.Convert<string>(i => i.Value)
            .ToArray();
        const sortOrder = orders.Convert<boolean | 'desc' | 'asc'>(i => i === ListSortOrder.DESC ? 'desc' : 'asc')
            .ToArray();
        return new List<T>(orderBy(this._data, k, sortOrder));
    }

    /**
     * get the Item at the Index
     * @param index
     * @constructor
     */
    ElementAt(index: Integer): T {
        return this._data[index.Value];
    }

    /**
     * find the First match Item or return a Default Value
     * @param filterMethod
     * @param def
     * @constructor
     */
    FirstOrDefault(filterMethod?: FilterMethod<T>, def?: T): T {
        if (!isFunction(filterMethod)) {
            return first(this._data) || (def ? def : null);
        }
        return find(this._data, filterMethod) || (def ? def : null);
    }

    /**
     * find the Last match Item or return a Default Value
     * @param filterMethod
     * @param def
     * @constructor
     */
    LastOrDefault(filterMethod: FilterMethod<T>, def?: T): T {
        return findLast(this._data, filterMethod) || (def ? def : null);
    }

    /**
     * group a List by a specific Key that was returned by transform Function
     * @param transformMethod
     * @constructor
     */
    GroupBy(transformMethod: TransformMethod<T>): Dictionary<List<T>> {
        const tmp = new Dictionary<List<T>>();
        const dict = groupBy(this._data, transformMethod);
        for (const key in dict) {
            tmp.Add(new Chars(key), new List<T>(dict[key]));
        }
        return tmp;
    }

    /**
     * convert a List into another List
     * @param convertMethod
     * @constructor
     */
    Convert<K>(convertMethod: ConvertMethod<T, K>): List<K> {
        return new List(map(this._data, convertMethod));
    }

    /**
     * get the Max Element
     * must have a Numeric Property
     * @param filterMethod
     * @constructor
     */
    MaxBy(filterMethod: SumMethod<T>): T {
        return maxBy(this._data, filterMethod);
    }

    /**
     * get the Min Element
     * must have a Numeric Property
     * @param filterMethod
     * @constructor
     */
    MinBy(filterMethod: SumMethod<T>): T {
        return minBy(this._data, filterMethod);
    }

    /**
     * get the Mean of complex element
     * must have a Numeric Property
     * @param filterMethod
     * @constructor
     */
    MeanBy(filterMethod: SumMethod<T>): Double {
        return new Double(meanBy(this._data, filterMethod));
    }

    /**
     * calculate a Sum
     * @param filterMethod
     * @constructor
     */
    SumBy(filterMethod: SumMethod<T>): Double {
        return new Double(sumBy(this._data, filterMethod));
    }
}
