const {assert} = require('chai');
const {DateRange, DateTime} = require('../../../ts-tooling');

describe('DateRange Tests', () => {
    it('invalid date range constructor', () => {
        assert.throw(() => {
            new DateRange(new DateTime('UTC', 2020, 3, 1, 4), new DateTime('UTC', 2020, 1, 3, 4))
        });
    });

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

        it('both are in', () => {
            assert.isTrue(range.Overlaps(bothIn));
        });

        it('begins in', () => {
            assert.isTrue(range.Overlaps(beginIn));
        });

        it('ends in', () => {
            assert.isTrue(range.Overlaps(endIn));
        });

        it('both are out', () => {
            assert.isTrue(range.Overlaps(bothOut));
        });
        it('range', () => {
            assert.isTrue(range.Overlaps(range));
        });
        it('both are before', () => {
            assert.isFalse(range.Overlaps(bothBefore));
        });
        it('both are after', () => {
            assert.isFalse(range.Overlaps(bothAfter));
        });
    });

    describe('[Method]: IsIn', () => {
        const a = DateTime.FromISOString('2019-01-01T00:00:00');
        const b = DateTime.FromISOString('2019-01-10T00:00:00');
        const range = new DateRange(a, b);
        const inRange = DateTime.FromISOString('2019-01-02T00:00:00');
        const notInRange = DateTime.FromISOString('2019-01-12T00:00:00');

        it('in range', () => {
            assert.isTrue(range.IsIn(inRange));
        });
        it('on borders', () => {
            assert.isTrue(range.IsIn(a));
            assert.isTrue(range.IsIn(b));
        });
        it('out of range', () => {
            assert.isFalse(range.IsIn(notInRange));
        });
    });

    describe('[Method]: IsBefore', () => {
        const a = DateTime.FromISOString('2019-01-01T00:00:00');
        const b = DateTime.FromISOString('2019-01-10T00:00:00');
        const range = new DateRange(a, b);
        const before = DateTime.FromISOString('2018-12-02T00:00:00');
        const after = DateTime.FromISOString('2019-01-12T00:00:00');

        it('before', () => {
            assert.isTrue(range.IsBefore(before));
        });

        it('on borders', () => {
            assert.isFalse(range.IsBefore(a));
            assert.isFalse(range.IsBefore(b));
        });

        it('after', () => {
            assert.isFalse(range.IsBefore(after));
        });
    });

    describe('[Method]: IsAfter', () => {
        const a = DateTime.FromISOString('2019-01-01T00:00:00');
        const b = DateTime.FromISOString('2019-01-10T00:00:00');
        const range = new DateRange(a, b);
        const before = DateTime.FromISOString('2018-12-02T00:00:00');
        const after = DateTime.FromISOString('2019-01-12T00:00:00');

        it('before', () => {
            assert.isTrue(range.IsAfter(after));
        });

        it('on borders', () => {
            assert.isFalse(range.IsAfter(b));
            assert.isFalse(range.IsAfter(a));
        });

        it('after', () => {
            assert.isFalse(range.IsAfter(before));
        });
    });

    describe('[Method]: ToString', () => {
        const v = new DateRange(new DateTime('UTC', 2020, 1, 1, 1), new DateTime('UTC', 2020, 1, 2, 1));

        it('default is yyyy-MM-dd hh:mm:ss', () => {
            assert.equal(v.ToString(), '[2020-01-01 01:00:00 => 2020-01-02 01:00:00]');
        });

        it('can input a custom format', () => {
            assert.equal(v.ToString('yyyy-MM-dd hh:mm:ss SSS'), '[2020-01-01 01:00:00 000 => 2020-01-02 01:00:00 000]');
        });
    });
});
