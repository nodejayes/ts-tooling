import * as LZString from 'lz-string';

/**
 * implementation of lz compression
 * with lz-string
 */
export class LZCompression {
    /**
     * Compress any Javascript Value to a LZ String
     * @param data
     *
     * ```typescript
     * // compress the Object to a zipped JSON String
     * LZCompression.Compress({"Hello":"World!"});
     * ```
     */
    static Compress(data: any): string {
        return LZString.compressToBase64(JSON.stringify(data));
    }

    /**
     * Decompress a LZ String to any Javascript Value
     * @param compressed
     *
     * ```typescript
     * // decompress the zipped JSON String to a Object
     * LZCompression.Compress('N4IgEgpgNlD2IC4QHVYCcoBMCEIC+QA=');
     * ```
     */
    static Decompress(compressed: string): any {
        return JSON.parse(LZString.decompressFromBase64(compressed));
    }
}
