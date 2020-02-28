const {assert} = require('chai');
const {Guid} = require('./index');

describe('Type Guid Export Tests', () => {
    it('Guid', () => {
        assert.isDefined(Guid);
    });
});
