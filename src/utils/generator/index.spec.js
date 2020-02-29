const {assert} = require('chai');
const {describe, it} = require('mocha');
const {TestDataGenerator} = require('./index');

describe('Type Generator Export Tests', () => {
    it('TestDataGenerator', () => {
        assert.isDefined(TestDataGenerator);
    });
});
