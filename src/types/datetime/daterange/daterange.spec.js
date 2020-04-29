const {assert} = require('chai');
const {DateRange, DateTime} = require('../../../ts-tooling');

describe('DateRange Tests', () => {
    it('should create DateRange from two DateTimes', () => {
        const a = DateTime.FromISOString('2019-01-01T00:00:00');
        const b = DateTime.FromISOString('2019-01-10T00:00:00');
        const range = new DateRange(a, b);
        assert.isDefined(range);
    });
    it('should get Begin and End DateTime', () => {
        const a = DateTime.FromISOString('2019-01-01T00:00:00');
        const b = DateTime.FromISOString('2019-01-10T00:00:00');
        const range = new DateRange(a, b);
        assert.equal(range.Begin.ToUnixTimestamp(), a.ToUnixTimestamp());
        assert.equal(range.End.ToUnixTimestamp(), b.ToUnixTimestamp());
    });

    describe('[Method]: Overlaps', () => {
        const a = DateTime.FromISOString('2019-01-01T00:00:00');
        const b = DateTime.FromISOString('2019-01-10T00:00:00');
        const range = new DateRange(a, b);
        const bothIn = new DateRange(DateTime.FromISOString('2019-01-02T00:00:00'), DateTime.FromISOString('2019-01-03T00:00:00'));
        const beginIn = new DateRange(DateTime.FromISOString('2019-01-02T00:00:00'), DateTime.FromISOString('2019-01-11T00:00:00'));
        const endIn = new DateRange(DateTime.FromISOString('2018-12-02T00:00:00'), DateTime.FromISOString('2019-01-02T00:00:00'));
        const bothOut = new DateRange(DateTime.FromISOString('2018-12-02T00:00:00'), DateTime.FromISOString('2019-01-12T00:00:00'));
        const bothBefore = new DateRange(DateTime.FromISOString('2018-12-02T00:00:00'), DateTime.FromISOString('2018-12-03T00:00:00'));
        const bothAfter = new DateRange(DateTime.FromISOString('2019-01-12T00:00:00'), DateTime.FromISOString('2019-01-13T00:00:00'));
        assert.isTrue(range.Overlaps(bothIn));
        assert.isTrue(range.Overlaps(beginIn));
        assert.isTrue(range.Overlaps(endIn));
        assert.isTrue(range.Overlaps(bothOut));
        assert.isTrue(range.Overlaps(range));
        assert.isFalse(range.Overlaps(bothBefore));
        assert.isFalse(range.Overlaps(bothAfter));
    });
    describe('[Method]: IsIn', () => {
        const a = DateTime.FromISOString('2019-01-01T00:00:00');
        const b = DateTime.FromISOString('2019-01-10T00:00:00');
        const range = new DateRange(a, b);
        const inRange = DateTime.FromISOString('2019-01-02T00:00:00');
        const notInRange = DateTime.FromISOString('2019-01-12T00:00:00');
        assert.isTrue(range.IsIn(inRange));
        assert.isTrue(range.IsIn(a));
        assert.isTrue(range.IsIn(b));
        assert.isFalse(range.IsIn(notInRange));
    });
    describe('[Method]: IsBefore', () => {
        const a = DateTime.FromISOString('2019-01-01T00:00:00');
        const b = DateTime.FromISOString('2019-01-10T00:00:00');
        const range = new DateRange(a, b);
        const before = DateTime.FromISOString('2018-12-02T00:00:00');
        const after = DateTime.FromISOString('2019-01-12T00:00:00');
        assert.isTrue(range.IsBefore(before));
        assert.isFalse(range.IsBefore(a));
        assert.isFalse(range.IsBefore(b));
        assert.isFalse(range.IsBefore(after));
    });
    describe('[Method]: IsAfter', () => {
        const a = DateTime.FromISOString('2019-01-01T00:00:00');
        const b = DateTime.FromISOString('2019-01-10T00:00:00');
        const range = new DateRange(a, b);
        const before = DateTime.FromISOString('2018-12-02T00:00:00');
        const after = DateTime.FromISOString('2019-01-12T00:00:00');
        assert.isTrue(range.IsAfter(after));
        assert.isFalse(range.IsAfter(b));
        assert.isFalse(range.IsAfter(a));
        assert.isFalse(range.IsAfter(before));
    });
});
