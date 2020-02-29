const {assert} = require('chai');
const {LZCompression} = require('./index');

describe('Type Compression Export Tests', () => {
    it('LZCompression', () => {
        assert.isDefined(LZCompression);
    });
});
