/**
 * implementation of lz compression
 * with lz-string
 *
 * @category Util
 */
export class LZCompression {
    /**
     * Compress any Javascript Value to a LZ String
     *
     * @param data a Javascript Value
     *
     * @example
     * ```typescript
     * // compress the Object to a zipped JSON String
     * LZCompression.Compress({"Hello":"World!"});
     * ```
     */
    static Compress(data: any): string;

    /**
     * Decompress a LZ String to any Javascript Value
     *
     * @param compressed a compressed string
     *
     * @example
     * ```typescript
     * // decompress the zipped JSON String to a Object
     * LZCompression.Compress('N4IgEgpgNlD2IC4QHVYCcoBMCEIC+QA=');
     * ```
     */
    static Decompress(compressed: string): any;
}
