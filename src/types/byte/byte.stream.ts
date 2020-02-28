import {Byte} from './byte/byte';
import '../array';

/**
 * a Stream of multiple Bytes that can hold any Byte Values
 *
 * and handle Read/Write Operations
 *
 * @category Type
 */
export class ByteStream {
    private readonly _value: Byte[] = [];
    private _position = 0;

    /**
     * create a new Byte Stream from a Byte String
     * @param str the Byte String
     */
    static FromByteString(str: string): ByteStream {
        const tmp = new ByteStream();
        const arr = [];
        new TextEncoder().encode(str).forEach(i => arr.Add(new Byte(i)));
        tmp.Write(arr);
        return tmp;
    }

    /**
     * create a new ByteStream from a Array of Numbers
     * @param value the Array of Numbers
     */
    static FromNumberArray(value: number[]): ByteStream {
        const tmp = new ByteStream();
        tmp.Write(value.Convert(i => new Byte(i)));
        return tmp;
    }

    /**
     * the size of the Stream
     */
    get Length(): number {
        return this._value.length;
    }

    /**
     * the current Position of the Read/Write Cursor in the Stream
     */
    get Position(): number {
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
     * @param pos the Position the Cursor was set
     */
    SetCursor(pos: number) {
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
     * @param value the Bytes to write into Stream
     */
    Write(value: Byte[]): number {
        for (const b of value) {
            this.writeByte(b);
        }
        return value.length;
    }

    /**
     * write a single Byte into the Stream
     * @param value the Byte to write into Stream
     */
    WriteByte(value: Byte) {
        this.writeByte(value);
    }

    /**
     * read a Part of the Byte Stream on default the complete Stream was returned
     * @param pos the start position to read
     * @param len the number of Bytes to read
     */
    Read(pos?: number, len?: number): number[] {
        this._position = pos || 0;
        let size = len || this._value.length;
        if (size > this._value.length) {
            size = this._value.length;
        }
        const res = [];
        for (let i = 0; i < size; i++) {
            const b = this.readByte();
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
     * @param pos the Position in the Stream of the Byte to read
     */
    ReadByte(pos?: number): number {
        this._position = pos || 0;
        return this.readByte().Value;
    }

    /**
     * get the String representation of the Byte Stream
     */
    ToString(): string {
        return new TextDecoder().decode(new Uint8Array(this._value.Convert<number>(i => i.Value)));
    }

    private writeByte(b: Byte) {
        this._value[this._position] = b;
        this._position++;
    }

    private readByte(): Byte {
        const b = this._value.ElementAt(this._position);
        this._position++;
        return b;
    }
}
