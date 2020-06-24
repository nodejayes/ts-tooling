const {assert} = require('chai');
const {describe, it} = require('mocha');
const {CreateWithFactory, Create, Throttle, Using, Retry} = require('./index');

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
    it('Retry', () => {
        assert.isDefined(Retry);
    });
});
