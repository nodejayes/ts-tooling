const LZString = require('lz-string');

/**
 * implementation of lz compression
 * with lz-string
 *
 * @memberof module:utils/compression
 */
class LZCompression {}

/**
 * Compress any Javascript Value to a LZ String
 *
 * @memberof module:utils/compression.LZCompression
 * @static
 * @param data {any} a Javascript Value
 * @return {string}
 *
 * @example
 * // compress the Object to a zipped JSON String
 * LZCompression.Compress({"Hello":"World!"});
 */
LZCompression.Compress = (data) => {
    return LZString.compressToBase64(JSON.stringify(data));
};

/**
 * Decompress a LZ String to any Javascript Value
 *
 * @memberof module:utils/compression.LZCompression
 * @static
 * @param compressed {string} a compressed string
 * @return {any}
 *
 * @example
 * // decompress the zipped JSON String to a Object
 * LZCompression.Compress('N4IgEgpgNlD2IC4QHVYCcoBMCEIC+QA=');
 */
LZCompression.Decompress = (compressed) => {
    return JSON.parse(LZString.decompressFromBase64(compressed));
};

module.exports = {LZCompression};
