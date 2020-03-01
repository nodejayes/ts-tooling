function Create(initialValue, defaultValue) {
    return typeof initialValue === typeof undefined || initialValue === null ?
        defaultValue ?
            defaultValue :
            null :
        initialValue;
}

function CreateWithFactory(factoryMethod, args, defaultValue) {
    if (!factoryMethod) {
        return typeof defaultValue === typeof undefined || defaultValue === null ? null : defaultValue;
    }
    const tmp = factoryMethod.apply(null, args);
    return typeof tmp === typeof undefined || tmp === null ? defaultValue === null ? null : defaultValue : tmp;
}

module.exports = {Create, CreateWithFactory};
