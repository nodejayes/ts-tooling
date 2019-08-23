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

/**
 * create a Value with a Factory Method null safe with optional default value
 * @param factoryMethod the Method that creates the Value
 * @param args the Factory Function Arguments
 * @param defaultValue
 */
export function createWithFactory<T>(factoryMethod: Function, args: any[], defaultValue?: T): T {
    if (!factoryMethod) {
        return typeof defaultValue === typeof undefined || defaultValue === null ? null : defaultValue;
    }
    const tmp = factoryMethod.apply(null, args);
    return typeof tmp === typeof undefined || tmp === null ? defaultValue === null ? null : defaultValue : tmp;
}
