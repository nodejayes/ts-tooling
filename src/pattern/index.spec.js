const {assert} = require('chai');
const {CreateWithFactory, Create, Throttle, Using} = require('./index');

describe('Type Pattern Export Tests', () => {
    it('Create', () => {
        assert.isDefined(Create);
    });
    it('CreateWithFactory', () => {
        assert.isDefined(CreateWithFactory);
    });
    it('Throttle', () => {
        assert.isDefined(Throttle);
    });
    it('Using', () => {
        assert.isDefined(Using);
    });
});
