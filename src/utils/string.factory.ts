/**
 * some Utils for strings
 */
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
}
