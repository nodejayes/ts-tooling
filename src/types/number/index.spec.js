const {assert} = require('chai');
const {NumberFactory} = require('./index');

describe('Type Number Export Tests', () => {
    it('NumberFactory', () => {
        assert.isDefined(NumberFactory);
    });
});
