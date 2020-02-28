const {assert} = require('chai');
const {StringFactory} = require('./index');

describe('Type String Export Tests', () => {
    it('StringFactory', () => {
        assert.isDefined(StringFactory);
    });
});
