const {assert} = require('chai');
const {describe, it} = require('mocha');
const {ListSortOrder} = require('./index');

describe('Type Array Export Tests', () => {
    it('ListSortOrder', () => {
        assert.isDefined(ListSortOrder);
    });
});
