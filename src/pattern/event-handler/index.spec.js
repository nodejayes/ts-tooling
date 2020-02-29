const {assert} = require('chai');
const {describe, it} = require('mocha');
const {EventHandler} = require('./index');

describe('Type EventHandler Export Tests', () => {
    it('EventHandler', () => {
        assert.isDefined(EventHandler);
    });
});
