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
     */
    constructor(dictionary?: { [key: string]: T });

    /**
     * Number of Entries in the Dictionary
     */
    readonly Count: number;

    /**
     * all Values of the Dictionary
     */
    readonly Values: T[];

    /**
     * all Keys of the Dictionary
     */
    readonly Keys: string[];

    /**
     * add a Entry into the Dictionary
     *
     * @param key
     * @param item
     */
    Add(key: string, item: T): Dictionary<T>;

    /**
     * clear the Dictionary
     */
    Clear(): Dictionary<T>;

    /**
     * remove a Entry from the Dictionary
     *
     * @param key
     */
    Remove(key: string): Dictionary<T>;

    /**
     * check if a Key is in the Dictionary
     *
     * @param key
     */
    ContainsKey(key: string): boolean;

    /**
     * check if a Value is in the Dictionary
     *
     * @param value
     */
    ContainsValue(value: T): boolean;

    /**
     * get the Dictionary as Javascript Object
     */
    GetObject(): { [key: string]: T };

    /**
     * try to get a Value in the Dictionary
     * @param key
     */
    TryGetValue(key: string): T;

    /**
     * get a Value that match the Filter Condition
     * @param filter
     */
    Find(filter: (d: T) => boolean): T;

    /**
     * same as Find but get multiple Values
     * @param filter
     */
    FindAll(filter: (d: T) => boolean): T[];
}
