const {assert} = require('chai');
const {TestDataGenerator} = require('./index');

describe('Type Generator Export Tests', () => {
    it('TestDataGenerator', () => {
        assert.isDefined(TestDataGenerator);
    });
});
