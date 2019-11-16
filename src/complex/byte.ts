/**
 * a Number represent as Byte
 */
export class Byte {
    private _value = 0;

    /**
     * create a new Byte
     * Numbers that are higher or lower than the maximum or minimum byte values are truncated.
     * @param value the byte Value
     */
    constructor(value: number) {
        this._value = value.Clamp(0, 255);
    }

    /**
     * get the Byte Value
     */
    get Value(): number {
        return this._value;
    }
}
