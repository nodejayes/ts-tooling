import * as LZString from 'lz-string';

/**
 * implementation of lz compression
 * with lz-string
 */
export class LZCompression {
    /**
     * Compress any Javascript Value to a LZ String
     * @param data
     * @constructor
     */
    static Compress(data: any): string {
        return LZString.compressToBase64(JSON.stringify(data));
    }

    /**
     * Decompress a LZ String to any Javascript Value
     * @param compressed
     * @constructor
     */
    static Decompress(compressed: string): any {
        return JSON.parse(LZString.decompressFromBase64(compressed));
    }
}
