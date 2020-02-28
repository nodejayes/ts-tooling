const {assert} = require('chai');
const {
    GetSortValue, Sort, GroupBy, Reverse,
    Find, FindLast, Filter, Without, IndexOf,
    OperateArray, MergeArray
} = require('./array');

const target = [
    {
        Name: 'Jonas Schreiner',
        Age: 23,
        Birthday: new Date(1965, 4, 12, 0, 0, 0),
        Address: {
            Street: 'Gotthardstrasse 69',
            PLZ: '99094',
            Town: 'Erfurt'
        }
    },
    {
        Name: 'Jonas Schreiner',
        Age: 24,
        Birthday: new Date(1965, 4, 11, 0, 0, 0),
        Address: {
            Street: 'Gotthardstrasse 69',
            PLZ: '99094',
            Town: 'Erfurt'
        }
    },
    {
        Name: 'Jonas Schreiner',
        Age: 22,
        Birthday: new Date(1965, 4, 13, 0, 0, 0),
        Address: {
            Street: 'Gotthardstrasse 69',
            PLZ: '99094',
            Town: 'Erfurt'
        }
    },
    {
        Name: 'Sandra Eichmann',
        Age: 45,
        Birthday: new Date(1969, 0, 22, 0, 0, 0),
        Address: {
            Street: 'Inge Beisheim Platz 20',
            PLZ: '25313',
            Town: 'Elmshorn'
        }
    },
    {
        Name: 'Ulrich Gärtner',
        Age: 60,
        Birthday: new Date(1959, 2, 23, 0, 0, 0),
        Address: {
            Street: 'Koenigstrasse 50',
            PLZ: '99750',
            Town: 'Bleicherode'
        }
    },
    {
        Name: 'Christine Ehrlichmann',
        Age: 37,
        Birthday: new Date(1982, 4, 23, 0, 0, 0),
        Address: {
            Street: 'Paul-Nevermann-Platz 59',
            PLZ: '97657',
            Town: 'Sandberg'
        }
    },
    {
        Name: 'Anne Klein',
        Age: 23,
        Birthday: new Date(1965, 8, 12, 0, 0, 0),
        Address: {
            Street: 'Jenaer Strasse 26',
            PLZ: '47053',
            Town: 'Duisburg',
        }
    }
];

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
    describe('[Method]: Sort', () => {
        it('not change unordered list', () => {
            assert.deepEqual(Sort(target, [], []),  [
                {
                    Name: 'Jonas Schreiner',
                    Age: 23,
                    Birthday: new Date(1965, 4, 12, 0, 0, 0),
                    Address: {
                        Street: 'Gotthardstrasse 69',
                        PLZ: '99094',
                        Town: 'Erfurt'
                    }
                },
                {
                    Name: 'Jonas Schreiner',
                    Age: 24,
                    Birthday: new Date(1965, 4, 11, 0, 0, 0),
                    Address: {
                        Street: 'Gotthardstrasse 69',
                        PLZ: '99094',
                        Town: 'Erfurt'
                    }
                },
                {
                    Name: 'Jonas Schreiner',
                    Age: 22,
                    Birthday: new Date(1965, 4, 13, 0, 0, 0),
                    Address: {
                        Street: 'Gotthardstrasse 69',
                        PLZ: '99094',
                        Town: 'Erfurt'
                    }
                },
                {
                    Name: 'Sandra Eichmann',
                    Age: 45,
                    Birthday: new Date(1969, 0, 22, 0, 0, 0),
                    Address: {
                        Street: 'Inge Beisheim Platz 20',
                        PLZ: '25313',
                        Town: 'Elmshorn'
                    }
                },
                {
                    Name: 'Ulrich Gärtner',
                    Age: 60,
                    Birthday: new Date(1959, 2, 23, 0, 0, 0),
                    Address: {
                        Street: 'Koenigstrasse 50',
                        PLZ: '99750',
                        Town: 'Bleicherode'
                    }
                },
                {
                    Name: 'Christine Ehrlichmann',
                    Age: 37,
                    Birthday: new Date(1982, 4, 23, 0, 0, 0),
                    Address: {
                        Street: 'Paul-Nevermann-Platz 59',
                        PLZ: '97657',
                        Town: 'Sandberg'
                    }
                },
                {
                    Name: 'Anne Klein',
                    Age: 23,
                    Birthday: new Date(1965, 8, 12, 0, 0, 0),
                    Address: {
                        Street: 'Jenaer Strasse 26',
                        PLZ: '47053',
                        Town: 'Duisburg',
                    }
                }
            ]);
        });
        it('sort by Name', () => {
            assert.deepEqual(Sort(target, ['Name'], [false]), [
                {
                    Name: 'Anne Klein',
                    Age: 23,
                    Birthday: new Date(1965, 8, 12, 0, 0, 0),
                    Address: {
                        Street: 'Jenaer Strasse 26',
                        PLZ: '47053',
                        Town: 'Duisburg',
                    }
                },{
                    Name: 'Christine Ehrlichmann',
                    Age: 37,
                    Birthday: new Date(1982, 4, 23, 0, 0, 0),
                    Address: {
                        Street: 'Paul-Nevermann-Platz 59',
                        PLZ: '97657',
                        Town: 'Sandberg'
                    }
                },{
                    Name: 'Jonas Schreiner',
                    Age: 23,
                    Birthday: new Date(1965, 4, 12, 0, 0, 0),
                    Address: {
                        Street: 'Gotthardstrasse 69',
                        PLZ: '99094',
                        Town: 'Erfurt'
                    }
                },{
                    Name: 'Jonas Schreiner',
                    Age: 24,
                    Birthday: new Date(1965, 4, 11, 0, 0, 0),
                    Address: {
                        Street: 'Gotthardstrasse 69',
                        PLZ: '99094',
                        Town: 'Erfurt'
                    }
                },{
                    Name: 'Jonas Schreiner',
                    Age: 22,
                    Birthday: new Date(1965, 4, 13, 0, 0, 0),
                    Address: {
                        Street: 'Gotthardstrasse 69',
                        PLZ: '99094',
                        Town: 'Erfurt'
                    }
                },{
                    Name: 'Sandra Eichmann',
                    Age: 45,
                    Birthday: new Date(1969, 0, 22, 0, 0, 0),
                    Address: {
                        Street: 'Inge Beisheim Platz 20',
                        PLZ: '25313',
                        Town: 'Elmshorn'
                    }
                },{
                    Name: 'Ulrich Gärtner',
                    Age: 60,
                    Birthday: new Date(1959, 2, 23, 0, 0, 0),
                    Address: {
                        Street: 'Koenigstrasse 50',
                        PLZ: '99750',
                        Town: 'Bleicherode'
                    }
                }
            ]);
        });
    });
    describe('[Method]: GroupBy', () => {
        it('group simple array', () => {
            assert.deepEqual(GroupBy([1,2,3,3,3], e => e), {
                '1': [1],
                '2': [2],
                '3': [3,3,3],
            });
        });
        it('group complex array', () => {
            assert.deepEqual(GroupBy([{hello:1}, {hello:1}, {hello:2}], e => e.hello), {
                '1': [{hello:1}, {hello:1}],
                '2': [{hello:2}],
            })
        });
    });
    describe('[Method]: Reverse', () => {
        it('reverse a array', () => {
            assert.deepEqual(Reverse([1,2,3]), [3,2,1]);
        });
    });
    describe('[Method]: Find', () => {
        it('can find a element in array', () => {
            assert.equal(Find([1,2,3,1,2,3], e => e > 2), 3);
        });
        it('find the first element', () => {
            assert.equal(Find([1,2,3,1,2,3], e => e > 2, true), 2);
        });
    });
    describe('[Method]: FindLast', () => {
        it('can find a element in array', () => {
            assert.equal(FindLast([1,2,3,1,2,3], e => e > 2), 3);
        });
        it('find the last element', () => {
            assert.equal(FindLast([1,2,3,1,2,3], e => e > 2, true), 5);
        });
    });
    describe('[Method]: Filter', () => {
        it('can filter a array', () => {
            assert.deepEqual(Filter([1,2,3], e => e > 1), [2,3]);
        });
        it('remove filter result', () => {
            assert.deepEqual(Filter([1,2,3], e => e > 1, true), [1]);
        });
    });
    describe('[Method]: Without', () => {
        it('remove elements', () => {
            assert.deepEqual(Without([1,2,3], [2,3]), [1]);
        });
    });
    describe('[Method]: IndexOf', () => {
        it('get first index without skip', () => {
            assert.equal(IndexOf([1,2,3,4,1,2,3,4], 3), 2);
        });
        it('get first index with skip', () => {
            assert.equal(IndexOf([1,2,3,4,1,2,3,4], 3, 3), 6);
        });
    });
    describe('[Method]: OperateArray', () => {
        it('max example op: 1', () => {
            assert.equal(OperateArray([1, 2, 3], null, 1), 3);
        });
        it('min example op: 2', () => {
            assert.equal(OperateArray([1, 2, 3], null, 2), 1);
        });
        it('sum example op: 3', () => {
            assert.equal(OperateArray([1, 2, 3], null, 3), 6);
        });
        it('mean example op: 4', () => {
            assert.equal(OperateArray([1, 25.6, 3], null, 4), 9.866666666666667);
        });
    });
    describe('[Method]: MergeArray', () => {
        it('add items at begin', () => {
            assert.deepEqual(MergeArray([3,4,5,6], 0, [1,2]), [1,2,3,4,5,6]);
        });
        it('add items at end', () => {
            assert.deepEqual(MergeArray([3,4,5,6], 4, [7,8]), [3,4,5,6,7,8]);
        });
        it('add items in the middle', () => {
            assert.deepEqual(MergeArray([3,4,5,6], 2, [7,8]), [3,4,7,8,5,6]);
        });
    });
});
