const {assert} = require('chai');
const {describe, it} = require('mocha');
const {Dictionary} = require('./index');

describe('Type Dictionary Export Tests', () => {
    it('Dictionary', () => {
        assert.isDefined(Dictionary);
    });
});
