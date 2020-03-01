const chai = require('chai');
const {describe, it} = require('mocha');
chai.use(require('chai-uuid'));
const {Uuidv4, ValidateGuid} = require('./guid');

describe('Core Guid Tests', () => {
    describe('[Method]: Uuidv4', () => {
        it('can generate a UUID', () => {
            const guid = Uuidv4();
            chai.expect(guid).to.be.a.uuid('v4');
        });
    });
    describe('[Method]: ValidateGuid', () => {
        it('can validate uuid', () => {
            chai.assert.isFalse(ValidateGuid('00000000-0000-q000-0000-000000000000'));
            chai.assert.isTrue(ValidateGuid('00000000-0000-0000-0000-000000000000'));
        });
    });
});
