const {assert} = require('chai');
const {GetSortValue} = require('./array');

describe('Core Array Tests', () => {
    describe('[Method]: GetSortValue', () => {
        it('execute IsAfter', () => {
            const v1 = {IsAfter: () => true, IsBefore: () => false};
            const v2 = {IsAfter: () => true, IsBefore: () => false};
            assert.deepEqual(GetSortValue(v1, v2), [2, 1]);
        });
        it('execute IsBefore', () => {
            const v1 = {IsAfter: () => false, IsBefore: () => true};
            const v2 = {IsAfter: () => false, IsBefore: () => true};
            assert.deepEqual(GetSortValue(v1, v2), [1, 2]);
        });
        it('execute both false', () => {
            const v1 = {IsAfter: () => false, IsBefore: () => false};
            const v2 = {IsAfter: () => false, IsBefore: () => false};
            assert.deepEqual(GetSortValue(v1, v2), [0, 0]);
        });
        it('returns value is no IsBefore or IsAfter defined', () => {
            const v1 = 5;
            const v2 = 5;
            assert.deepEqual(GetSortValue(v1, v2), [5, 5]);
        });
    });
});
