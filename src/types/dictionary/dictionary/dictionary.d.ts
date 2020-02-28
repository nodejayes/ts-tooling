/**
 * representation of a string Dictionary
 *
 * @category Type
 */
export class Dictionary<T> {
    /**
     * create a new Dictionary you can fill it with predefined Data
     * @param dictionary
     */
    constructor(dictionary?: { [key: string]: T });

    /**
     * Number of Entries in the Dictionary
     * @constructor
     */
    get Count(): number;

    /**
     * all Values of the Dictionary
     * @constructor
     */
    get Values(): T[];

    /**
     * all Keys of the Dictionary
     * @constructor
     */
    Keys(): string[];

    /**
     * add a Entry into the Dictionary
     * @param key
     * @param item
     * @constructor
     */
    Add(key: string, item: T): Dictionary<T>;

    /**
     * clear the Dictionary
     * @constructor
     */
    Clear(): Dictionary<T>;

    /**
     * remove a Entry from the Dictionary
     * @param key
     * @constructor
     */
    Remove(key: string): Dictionary<T>;

    /**
     * check if a Key is in the Dictionary
     * @param key
     * @constructor
     */
    ContainsKey(key: string): boolean;

    /**
     * check if a Value is in the Dictionary
     * @param value
     * @constructor
     */
    ContainsValue(value: T): boolean;

    /**
     * get the Dictionary as Javascript Object
     * @constructor
     */
    GetObject(): { [key: string]: T };

    /**
     * try to get a Value in the Dictionary
     * @param key
     * @constructor
     */
    TryGetValue(key: string): T;

    /**
     * get a Value that match the Filter Condition
     * @param filter
     * @constructor
     */
    Find(filter: (d: T) => boolean): T;

    /**
     * same as Find but get multiple Values
     * @param filter
     * @constructor
     */
    FindAll(filter: (d: T) => boolean): T[];
}
