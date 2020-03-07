/**
 * create a Variable and when not defined returns default or null
 *
 * @memberof module:pattern
 *
 * @param initialValue {any}
 * @param defaultValue {any}
 * @return {any}
 */
function Create(initialValue, defaultValue) {
    return typeof initialValue === typeof undefined || initialValue === null ?
        defaultValue ?
            defaultValue :
            null :
        initialValue;
}

/**
 * create a Value with a Factory Method null safe with optional default value
 *
 * @memberof module:pattern
 *
 * @param factoryMethod {function} the Method that creates the Value
 * @param args {any} the Factory Function Arguments
 * @param defaultValue {any}
 * @return {any}
 */
function CreateWithFactory(factoryMethod, args, defaultValue) {
    if (!factoryMethod) {
        return typeof defaultValue === typeof undefined || defaultValue === null ? null : defaultValue;
    }
    const tmp = factoryMethod.apply(null, args);
    return typeof tmp === typeof undefined || tmp === null ? defaultValue === null ? null : defaultValue : tmp;
}

module.exports = {Create, CreateWithFactory};
