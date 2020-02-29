const LZString = require('lz-string');

class LZCompression {}

LZCompression.Compress = (data) => {
    return LZString.compressToBase64(JSON.stringify(data));
};

LZCompression.Decompress = (compressed) => {
    return JSON.parse(LZString.decompressFromBase64(compressed));
};

module.exports = {LZCompression};
