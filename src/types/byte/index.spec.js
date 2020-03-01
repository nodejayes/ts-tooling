const {assert} = require('chai');
const {describe, it} = require('mocha');
const {Byte, ByteStream} = require('./index');

describe('Type Byte Export Tests', () => {
    it('Byte', () => {
        assert.isDefined(Byte);
    });
    it('ByteStream', () => {
        assert.isDefined(ByteStream);
    });
});
