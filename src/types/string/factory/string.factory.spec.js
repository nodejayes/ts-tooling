const {assert} = require('chai');
const {describe, it} = require('mocha');
const {StringFactory} = require('./string.factory');

describe('String Factory Tests', () => {
    it('generate Random String', () => {
        const tmp = StringFactory.RandomAlphaString(50);
        assert.lengthOf(tmp, 50);
        assert.isTrue(tmp.IsAlpha());
    });
});
