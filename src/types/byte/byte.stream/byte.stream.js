const {Byte} = require('../byte/byte');
require('../../array/extension');

/**
 * a Stream of multiple Bytes that can hold any Byte Values
 *
 * and handle Read/Write Operations
 *
 * @memberof module:types/byte
 */
class ByteStream {
    constructor() {
        this._value = [];
        this._position = 0;
    }

    /**
     * the size of the Stream
     *
     * @readonly
     * @return {number}
     */
    get Length() {
        return this._value.length;
    }

    /**
     * the current Position of the Read/Write Cursor in the Stream
     *
     * @readonly
     * @return {number}
     */
    get Position() {
        return this._position;
    }

    /**
     * reset the Read/Write Cursor of the Stream
     */
    ResetCursor() {
        this._position = 0;
    }

    /**
     * set the Read/Write Cursor to a specific Position
     * if a bigger Position given the Cursor was set to the end of  the Stream
     *
     * @param pos {number} the Position the Cursor was set
     * @return {void}
     */
    SetCursor(pos) {
        if (this.Length < pos) {
            this._position = this.Length;
            return;
        }
        if (pos < 0) {
            this._position = 0;
            return;
        }
        this._position = pos;
    }

    /**
     * write multiple Bytes into the Byte Stream
     *
     * @param value {Byte[]} the Bytes to write into Stream
     * @return {number} the length of bytes that was written
     */
    Write(value) {
        for (const b of value) {
            this._writeByte(b);
        }
        return value.length;
    }

    /**
     * write a single Byte into the Stream
     *
     * @param value {Byte} the Byte to write into Stream
     * @return {void}
     */
    WriteByte(value) {
        this._writeByte(value);
    }

    /**
     * read a Part of the Byte Stream on default the complete Stream was returned
     *
     * @param pos {number} the start position to read
     * @param len {number} the number of Bytes to read
     * @return {number[]}
     */
    Read(pos, len) {
        this._position = pos || 0;
        let size = len || this._value.length;
        if (size > this._value.length) {
            size = this._value.length;
        }
        const res = [];
        for (let i = 0; i < size; i++) {
            const b = this._readByte();
            if (!b) {
                continue;
            }
            res.Add(b.Value);
        }
        return res;
    }

    /**
     * read a single Byte at a specific Position of the Stream
     * if no Position passed the first Byte was read
     *
     * @param pos {number} the Position in the Stream of the Byte to read
     * @return {number}
     */
    ReadByte(pos) {
        this._position = pos || 0;
        return this._readByte().Value;
    }

    /**
     * get the String representation of the Byte Stream
     *
     * @return {string}
     */
    ToString() {
        return new TextDecoder().decode(new Uint8Array(this._value.Convert(i => i.Value)));
    }

    _writeByte(b) {
        this._value[this._position] = b;
        this._position++;
    }

    _readByte() {
        const b = this._value.ElementAt(this._position);
        this._position++;
        return b;
    }
}

/**
 * create a new Byte Stream from a Byte String
 *
 * @memberof module:types/byte.ByteStream
 * @static
 *
 * @param str {string} the Byte String
 * @return {ByteStream}
 */
ByteStream.FromByteString = (str) => {
    const tmp = new ByteStream();
    const arr = [];
    new TextEncoder().encode(str).forEach(i => arr.Add(new Byte(i)));
    tmp.Write(arr);
    return tmp;
};

/**
 * create a new ByteStream from a Array of Numbers
 *
 * @memberof module:types/byte.ByteStream
 * @static
 *
 * @param value {number[]} the Array of Numbers
 * @return {ByteStream}
 */
ByteStream.FromNumberArray = (value) => {
    const tmp = new ByteStream();
    tmp.Write(value.Convert(i => new Byte(i)));
    return tmp;
};

module.exports = {ByteStream};
