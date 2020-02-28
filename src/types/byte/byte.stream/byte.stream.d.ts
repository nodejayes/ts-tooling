import {Byte} from '../byte/byte';

/**
 * a Stream of multiple Bytes that can hold any Byte Values
 *
 * and handle Read/Write Operations
 *
 * @category Type
 */
export class ByteStream {
    /**
     * create a new Byte Stream from a Byte String
     * @param str the Byte String
     */
    static FromByteString(str: string): ByteStream;

    /**
     * create a new ByteStream from a Array of Numbers
     * @param value the Array of Numbers
     */
    static FromNumberArray(value: number[]): ByteStream;

    /**
     * the size of the Stream
     */
    get Length(): number;

    /**
     * the current Position of the Read/Write Cursor in the Stream
     */
    get Position(): number;

    /**
     * reset the Read/Write Cursor of the Stream
     */
    ResetCursor();

    /**
     * set the Read/Write Cursor to a specific Position
     * if a bigger Position given the Cursor was set to the end of  the Stream
     * @param pos the Position the Cursor was set
     */
    SetCursor(pos: number);

    /**
     * write multiple Bytes into the Byte Stream
     * @param value the Bytes to write into Stream
     */
    Write(value: Byte[]): number;

    /**
     * write a single Byte into the Stream
     * @param value the Byte to write into Stream
     */
    WriteByte(value: Byte);

    /**
     * read a Part of the Byte Stream on default the complete Stream was returned
     * @param pos the start position to read
     * @param len the number of Bytes to read
     */
    Read(pos?: number, len?: number): number[];

    /**
     * read a single Byte at a specific Position of the Stream
     * if no Position passed the first Byte was read
     * @param pos the Position in the Stream of the Byte to read
     */
    ReadByte(pos?: number): number;

    /**
     * get the String representation of the Byte Stream
     */
    ToString(): string;
}
