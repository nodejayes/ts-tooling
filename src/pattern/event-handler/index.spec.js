const {assert} = require('chai');
const {EventHandler} = require('./index');

describe('Type EventHandler Export Tests', () => {
    it('EventHandler', () => {
        assert.isDefined(EventHandler);
    });
});
