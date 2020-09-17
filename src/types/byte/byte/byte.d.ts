import '../../number/extension/extension';

/**
 * a Number represent as Byte
 *
 * @category Type
 */
export class Byte {
    /**
     * create a new Byte
     * Numbers that are higher or lower than the maximum or minimum byte values are truncated.
     *
     * @param value the byte Value
     *
     * @example
     * const b = new Byte(1);
     */
    constructor(value: number);

    /**
     * get the Byte Value
     *
     * @example
     * const b = new Byte(1);
     * // logs 1 in the console
     * console.info(b.value);
     */
    readonly Value: number;
}
