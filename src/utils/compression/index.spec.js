const {assert} = require('chai');
const {describe, it} = require('mocha');
const {LZCompression} = require('./index');

describe('Type Compression Export Tests', () => {
    it('LZCompression', () => {
        assert.isDefined(LZCompression);
    });
});
