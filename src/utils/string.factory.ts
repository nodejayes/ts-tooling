/**
 * some Utils for strings
 */
import {NumberFactory} from "./number.factory";

export class StringFactory {
    /**
     * check if a String is empty or null
     *
     * ```typescript
     * // is true
     * StringFactory.IsNullOrEmpty(undefined);
     * StringFactory.IsNullOrEmpty(null);
     * StringFactory.IsNullOrEmpty('');
     *
     * // is false
     * StringFactory.IsNullOrEmpty('a');
     * ```
     */
    static IsNullOrEmpty(value: string) {
        return !value || value.length < 1;
    }

    /**
     * generate a Random String with given Size
     * use only letters a-z
     * @param length the Size of the String
     * @constructor
     */
    static RandomAlphaString(length: number): string {
        if (length < 1) {
            length = 1;
        }
        let tmp = '';
        const upper = NumberFactory.RandomInteger(0, 1);
        for (let i = 0; i < length; i++) {
            const code = upper === 0 ? NumberFactory.RandomInteger(65, 90) : NumberFactory.RandomInteger(97, 122);
            tmp += String.fromCharCode(code);
        }
        return tmp;
    }
}
