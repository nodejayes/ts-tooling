const {assert} = require('chai');
const {describe, it} = require('mocha');
const {Guid} = require('./index');

describe('Type Guid Export Tests', () => {
    it('Guid', () => {
        assert.isDefined(Guid);
    });
});
