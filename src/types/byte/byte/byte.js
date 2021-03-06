require('../../number/extension/extension');

/**
 * a Number represent as Byte
 *
 * @memberof module:types/byte
 */
class Byte {
    /**
     * create a new Byte
     * Numbers that are higher or lower than the maximum or minimum byte values are truncated.
     *
     * @constructor
     *
     * @param value the byte Value
     * @example
     * const b = new Byte(1);
     */
    constructor(value) {
        this._value = value.Clamp(0, 255);
    }

    /**
     * get the Byte Value
     *
     * @readonly
     *
     * @example
     * const b = new Byte(1);
     * // logs 1 in the console
     * console.info(b.value);
     */
    get Value() {
        return this._value;
    }
}

module.exports = {Byte};
