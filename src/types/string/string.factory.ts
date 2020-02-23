/**
 * some Utils for strings
 */
import {NumberFactory} from '../number';

/**
 * some Utils for Strings
 *
 * @category Type
 */
export class StringFactory {
    /**
     * check if a String is empty or null
     *
     * @category string
     *
     * @param value the string to check
     * @returns is the given string defined and not empty or not
     *
     * @example
     * ```typescript
     * // is true
     * StringFactory.IsNullOrEmpty(undefined);
     * StringFactory.IsNullOrEmpty(null);
     * StringFactory.IsNullOrEmpty('');
     * // is false
     * StringFactory.IsNullOrEmpty('a');
     * ```
     */
    static IsNullOrEmpty(value: string) {
        return !value || value.length < 1;
    }

    /**
     * generate a Random String with given Size
     *
     * use only letters a-z
     *
     * @category string
     *
     * @param length the Size of the String
     * @returns a random string with letters from a-z
     *
     * @example
     * ```typescript
     * // returns a random string with 12 bytes length
     * StringFactory.RandomAlphaString(12);
     * ```
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