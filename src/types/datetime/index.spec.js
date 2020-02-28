const {assert} = require('chai');
const {TimeSpan, DateTime} = require('./index');

describe('Type DateTime Export Tests', () => {
    it('TimeSpan', () => {
        assert.isDefined(TimeSpan);
    });
    it('DateTime', () => {
        assert.isDefined(DateTime);
    });
});
