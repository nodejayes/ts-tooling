const {assert} = require('chai');
const {describe, it} = require('mocha');
const {StringFactory} = require('./index');

describe('Type String Export Tests', () => {
    it('StringFactory', () => {
        assert.isDefined(StringFactory);
    });
});
