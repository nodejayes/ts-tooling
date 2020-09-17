/**
 * representation of a string Dictionary
 *
 * @category Type
 */
export class Dictionary<T> {
    /**
     * create a new Dictionary you can fill it with predefined Data
     *
     * @param dictionary a Hash Map that represent the Dictionary
     * @example
     * // create a empty dictionary
     * const empty = new Dictionary();
     * // create a Dictionary with number values
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     */
    constructor(dictionary?: { [key: string]: T });

    /**
     * Number of Entries in the Dictionary
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * //write 3 into the console
     * console.info(filled.Count);
     */
    readonly Count: number;

    /**
     * all Values of the Dictionary
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * //write [1,2,3] into the console
     * console.info(filled.Values);
     */
    readonly Values: T[];

    /**
     * all Keys of the Dictionary
     *
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * // writes ['a', 'b', 'c'] into the console
     * console.info(filled.Keys);
     */
    readonly Keys: string[];

    /**
     * add a Entry into the Dictionary
     *
     * @param key
     * @param item
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * filled.Add('d', 4);
     * // writes ['a', 'b', 'c', 'd'] into the console
     * console.info(filled.Keys);
     * // writes [1, 2, 3, 4] into the console
     * console.info(filled.Values);
     */
    Add(key: string, item: T): Dictionary<T>;

    /**
     * clear the Dictionary
     *
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * filled.Clear();
     * // writes [] into the console
     * console.info(filled.Keys);
     */
    Clear(): Dictionary<T>;

    /**
     * remove a Entry from the Dictionary
     *
     * @param key
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * filled.Remove('a');
     * // writes ['b', 'c'] into the console
     * console.info(filled.Keys);
     * // writes [2, 3] into the console
     * console.info(filled.Values);
     */
    Remove(key: string): Dictionary<T>;

    /**
     * check if a Key is in the Dictionary
     *
     * @param key
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * // is true
     * filled.ContainsKey('b');
     * // is false
     * filled.ContainsKey('z');
     */
    ContainsKey(key: string): boolean;

    /**
     * check if a Value is in the Dictionary
     *
     * @param value
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * // is true
     * filled.ContainsValue(1);
     * // is false
     * filled.ContainsValue(10);
     */
    ContainsValue(value: T): boolean;

    /**
     * get the Dictionary as Javascript Object
     *
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * // returns {'a': 1, 'b': 2, 'c': 3}
     * console.info(filled.GetObject());
     */
    GetObject(): { [key: string]: T };

    /**
     * try to get a Value in the Dictionary
     * @param key
     * @param value
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * // returns true and set result 2
     * let result;
     * filled.TryGetValue('b', v => result = v);
     * // returns false and set result null
     * filled.TryGetValue('z', v => result = v);
     */
    TryGetValue(key: string, value: (v: T) => void): boolean;

    /**
     * get a Value from the Dictionary
     *
     * @param key
     * @example
     * const filled = new Dictionary<number>({'a': 1, 'b': 2, 'c': 3});
     * // returns 2
     * filled.GetValue('b');
     * // returns null
     * filled.GetValue('z');
     */
    GetValue(key: string): T;

    /**
     * get a Value that match the Filter Condition
     * @param filter
     * @example
     * const d = new Dictionary({
     *      Hello: 'World',
     *      This: 'is',
     *      A: 'Dictionary',
     *  });
     *  // returns 'is'
     *  d.Find(i => i.Equals('is'));
     */
    Find(filter: (d: T) => boolean): T;

    /**
     * same as Find but get multiple Values
     * @param filter
     * @example
     * const d = new Dictionary({
     *      Hello: 'World',
     *      Hello2: 'World',
     *      Hello3: 'World',
     *      This: 'is',
     *      A: 'Dictionary',
     *  });
     *  // returns 3
     *  d.FindAll(i => i.Equals('World')).Count();
     */
    FindAll(filter: (d: T) => boolean): T[];
}
