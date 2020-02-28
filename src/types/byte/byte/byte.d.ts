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
     * @param value the byte Value
     */
    constructor(value: number);

    /**
     * get the Byte Value
     */
    get Value(): number;
}
