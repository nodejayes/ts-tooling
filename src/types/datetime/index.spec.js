const {assert} = require('chai');
const {describe, it} = require('mocha');
const {TimeSpan, DateTime} = require('./index');

describe('Type DateTime Export Tests', () => {
    it('TimeSpan', () => {
        assert.isDefined(TimeSpan);
    });
    it('DateTime', () => {
        assert.isDefined(DateTime);
    });
});
