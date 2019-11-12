/**
 * implement some static String Functions
 */
export class StringFactory {
    /**
     * check if a String is empty or null
     * @constructor
     */
    static IsNullOrEmpty(value: string) {
        return !value || value.length < 1;
    }
}
