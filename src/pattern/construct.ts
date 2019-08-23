/**
 * create a Variable and when not defined returns default or null
 * @param initialValue
 * @param defaultValue
 */
export function create<T>(initialValue: T, defaultValue?: T): T {
    return typeof initialValue === typeof undefined || initialValue === null ?
        defaultValue ?
            defaultValue :
            null :
        initialValue;
}
