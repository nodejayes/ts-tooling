/**
 * check any Value to be a specific Type
 */
export class Value {
    /**
     * check if the Value is a Function
     * @param value
     */
    static IsFunction(value: any): boolean {
        return typeof value === typeof function () {};
    }

    /**
     * check if the Value is a Array
     * @param value
     */
    static IsArray(value: any): boolean {
        return Array.isArray(value);
    }

    /**
     * check if the Value is a Object
     * @param value
     */
    static IsObject(value: any): boolean {
        return value !== null && !Value.IsArray(value) && typeof value === typeof {};
    }
}
