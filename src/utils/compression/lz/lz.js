const LZString = require('lz-string');

class LZCompression {
    static Compress(data) {
        return LZString.compressToBase64(JSON.stringify(data));
    }

    static Decompress(compressed) {
        return JSON.parse(LZString.decompressFromBase64(compressed));
    }
}

module.exports = {LZCompression};
