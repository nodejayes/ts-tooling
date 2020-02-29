const {assert} = require('chai');
const {describe, it} = require('mocha');
const {NumberFactory} = require('./index');

describe('Type Number Export Tests', () => {
    it('NumberFactory', () => {
        assert.isDefined(NumberFactory);
    });
});
