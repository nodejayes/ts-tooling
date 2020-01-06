import {assert} from 'chai';
import 'mocha';
import '../../lib/ts-tooling';
const {ListSortOrder} = require('../../lib/ts-tooling');

interface TestAddress {
    PLZ: string;
    Street: string;
    Town: string;
}

interface TestUser {
    Name: string;
    Age: number;
    Birthday: Date;
    Address: TestAddress;
}

const primitiveNumbers = [1, 5, 4, 3, 2, 8, 6, 7];
const primitiveStrings = ['2', '1', 'a', 'c', 'z', 'b'];
const primitiveDates = [
    new Date(2019, 3, 1, 0, 0, 0),
    new Date(2019, 3, 2, 0, 0, 0),
    new Date(2019, 2, 1, 0, 0, 0),
    new Date(2019, 4, 2, 0, 0, 0),
    new Date(2019, 2, 10, 0, 0, 0),
    new Date(2019, 6, 12, 0, 0, 0),
];
const complexValues: TestUser[] = [
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
const invalidUser: TestUser = {
    Name: 'notfound',
    Age: 5,
    Birthday: new Date(),
    Address: {
        Street: 'adasfdsgfhj',
        PLZ: '45613',
        Town: 'dfsgfhfgh'
    }
};

describe('Array Extension Bundle Tests', () => {
    it('can create empty List', () => {
        assert.equal([].Count(), 0, 'cannot create empty List');
    });

    it('can create predefined List', () => {
        assert.equal(primitiveNumbers.Count(), primitiveNumbers.length, 'cannot create predefined List');
    });

    it('has right Count', () => {
        assert.equal(primitiveNumbers.Count(), primitiveNumbers.length, 'invalid Count on primitive Numbers');
        assert.equal(primitiveStrings.Count(), primitiveStrings.length, 'invalid Count on primitive Strings');
        assert.equal(primitiveDates.Count(), primitiveDates.length, 'invalid Count on primitive Dates');
    });

    it('can convert to Array', () => {
        const list = [];
        list.AddRange([1, 2]);
        assert.equal(list[0], 1);
        assert.equal(list[1], 2);
    });

    it('can copy List', () => {
        const list = [1, 2];
        const copy = list.Copy();
        assert.notEqual(list, copy, 'List is the same instance');
        assert.equal(list.Count(), copy.Count());
        assert.equal(list[0], copy[0]);
        assert.equal(list[1], copy[1]);
    });
    it('create new Array with Extension', () => {
        const test = new Array<number>();
        assert.equal(test.Count(), 0);
    });

    it('can Add a single Element into List', () => {
        const list = [];
        list.Add(2);
        assert.equal(list.Count(), 1, 'nothing added to List');
        assert.equal(list[0], 2, 'wrong item in List');
    });

    it('can Add multiple Elements into List', () => {
        const list = [];
        list.AddRange([1, 2, 3]);
        assert.equal(list.Count(), 3, 'nothing added to List');
        assert.equal(list[0], 1, 'wrong item in List');
        assert.equal(list[1], 2, 'wrong item in List');
        assert.equal(list[2], 3, 'wrong item in List');
    });

    it('can clear List', () => {
        const list = [];
        list.AddRange([1, 2, 3]);
        list.Clear();
        assert.equal(list.Count(), 0, 'List is not empty');
    });

    it('can insert Element in List', () => {
        const list = [];
        list.Insert(0, 1);
        assert.equal(list.Count(), 1);
        assert.equal(list[0], 1);
    });

    it('can insert Element in List with not existent index', () => {
        const list = [];
        list.Insert(2, 5);
        assert.equal(list.Count(), 3);
        assert.equal(list[2], 5);
    });

    it('can insert multiple Elements into List', () => {
        const list = [1, 2, 3];
        list.InsertRange(0, [5, 5]);
        assert.equal(list.Count(), 3);
        assert.equal(list[0], 5);
        assert.equal(list[1], 5);
        assert.equal(list[2], 3);
    });

    it('insert multiple Elements into list extends the List', () => {
        const list = [];
        list.InsertRange(0, [5, 5, 5]);
        assert.equal(list.Count(), 3);
        assert.equal(list[0], 5);
        assert.equal(list[1], 5);
        assert.equal(list[2], 5);
    });

    it('can remove a Item from List', () => {
        const list = [1, 2, 3];
        list.Remove(2);
        assert.equal(list.Count(), 2);
        assert.equal(list[0], 1);
        assert.equal(list[1], 3);
    });

    it('can remove multiple Items from List', () => {
        const list = [1, 2, 3, 2, 2, 4, 5];
        list.RemoveAll(i => i === 2);
        assert.equal(list.Count(), 4);
        assert.equal(list.ElementAt(0), 1);
        assert.equal(list.ElementAt(1), 3);
        assert.equal(list.ElementAt(2), 4);
        assert.equal(list.ElementAt(3), 5);
    });

    it('can remove Item from List at Index', () => {
        const list = [1, 2, 3, 2, 2, 4, 5];
        list.RemoveAt(3);
        assert.equal(list.Count(), 6);
        assert.equal(list[0], 1);
        assert.equal(list[1], 2);
        assert.equal(list[2], 3);
        assert.equal(list[3], 2);
        assert.equal(list[4], 4);
        assert.equal(list[5], 5);
    });

    it('can remove multiple Items from List', () => {
        const list = [1, 2, 3, 2, 2, 4, 5];
        list.RemoveRange([2, 3, 4, 5]);
        assert.equal(list.Count(), 1);
        assert.equal(list[0], 1);
    });

    it('can check List if Contains Element', () => {
        const list = [1, 3, 4];
        assert.isTrue(list.Contains(1));
        assert.isFalse(list.Contains(6));
        assert.isTrue(complexValues.Contains(complexValues[0]));
        assert.isFalse(complexValues.Contains(invalidUser));
    });

    it('can check, List if Exists Elements with filter', () => {
        assert.isTrue(complexValues.Exists(i => i.Age === 23));
        assert.isFalse(complexValues.Exists(i => i.Age === 999));
        assert.isTrue([1, 2, 3].Exists(i => i === 3));
        assert.isFalse([1, 2, 3].Exists(i => i === 4))
    });

    it('can find Element in List', () => {
        assert.deepEqual(complexValues.Find(i => i.Age === 23), complexValues[0]);
    });

    it('can find last Element match in List', () => {
        assert.deepEqual(complexValues.FindLast(i => i.Age === 23), complexValues[4]);
    });

    it('can find index of Element in List', () => {
        assert.equal(complexValues.FindIndex(i => i.Age === 23), 0);
    });

    it('can find last index of Element in List', () => {
        assert.equal(complexValues.FindLastIndex(i => i.Age === 23), 4);
    });

    it('can find all Elements in List by match', () => {
        assert.equal(complexValues.FindAll(i => i.Age === 23).Count(), 2);
    });

    it('can check match for all Elements in List', () => {
        assert.isTrue([1, 1, 1, 1, 1].TrueForAll(i => i === 1));
        assert.isFalse([1, 1, 1, 2].TrueForAll(i => i === 1));
    });

    it('can get the Index of Element in List', () => {
        assert.equal([1, 2, 3, 4].IndexOf(2), 1);
        assert.equal([1, 2, 3, 4, 1, 2, 3, 4].IndexOf(2, 4), 5);
    });

    it('can turn around List', () => {
        assert.deepEqual([1, 2, 3].Reverse(), [3, 2, 1]);
    });

    it('can find the First match Element or return Default', () => {
        assert.equal([1, 2, 3, 1, 2, 3].FirstOrDefault(i => i === 2), 2);
        assert.isNull([1, 2, 3, 1, 2, 3].FirstOrDefault(i => i === 14));
        assert.equal([1, 2, 3, 1, 2, 3].FirstOrDefault(i => i === 14, 12), 12);
        assert.equal([1, 2, 3, 1, 2, 3].FirstOrDefault(), 1);
    });

    it('can find the Last match Element or return Default', () => {
        assert.equal([1, 2, 3, 1, 2, 3].LastOrDefault(i => i === 2), 2);
        assert.isNull([1, 2, 3, 1, 2, 3].LastOrDefault(i => i === 14));
        assert.equal([1, 2, 3, 1, 2, 3].LastOrDefault(i => i === 14, 12), 12);
        assert.equal([1, 2, 3, 1, 2, 3].LastOrDefault(), 3);
    });

    it('can get Element at Index', () => {
        assert.equal([1, 2, 3].ElementAt(0), 1);
    });

    it('can sort Number List', () => {
        assert.deepEqual([1, 2, 3].Sort(), [3, 2, 1]);
        assert.deepEqual([1, 2, 3].Sort()
            .Sort(ListSortOrder.DESC), [1, 2, 3]);
    });

    it('can sort Chars List', () => {
        assert.deepEqual(['a', 'b', 'c'].Sort(), ['c', 'b', 'a']);
        assert.deepEqual(['a', 'b', 'c'].Sort()
            .Sort(ListSortOrder.DESC), ['a', 'b', 'c']);
    });

    it('can sort Date List', () => {
        const list = [
            new Date(2019, 1, 1, 0, 0, 0),
            new Date(2019, 1, 2, 0, 0, 0),
            new Date(2019, 1, 3, 0, 0, 0),
        ];
        assert.deepEqual(list.Sort(), [
            new Date(2019, 1, 3, 0, 0, 0),
            new Date(2019, 1, 2, 0, 0, 0),
            new Date(2019, 1, 1, 0, 0, 0),
        ]);
        assert.deepEqual(list.Sort()
            .Sort(ListSortOrder.DESC), [
            new Date(2019, 1, 1, 0, 0, 0),
            new Date(2019, 1, 2, 0, 0, 0),
            new Date(2019, 1, 3, 0, 0, 0),
        ]);
    });

    it('can sort complex List', () => {
        assert.deepEqual(complexValues
            .SortBy(['Name'], [ListSortOrder.ASC]), [
            {
                Name: 'Anne Klein',
                Age: 23,
                Birthday: new Date(1965, 8, 12, 0, 0, 0),
                Address: {
                    Street: 'Jenaer Strasse 26',
                    PLZ: '47053',
                    Town: 'Duisburg',
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
        ])
    });

    it('can group List', () => {
        const grouped = [1, 2, 2, 3, 3, 3].GroupBy(i => i);
        assert.equal(grouped['1'].Count(), 1);
        assert.equal(grouped['2'].Count(), 2);
        assert.equal(grouped['3'].Count(), 3);
    });

    it('can sum List elements', () => {
        assert.equal([1, 2, 3.5].SumBy(i => i), 6.5);
    });

    it('can get the max of numeric List', () => {
        assert.equal([1, 2, 3].Max(), 3);
        assert.equal([1, 25.6, 3].Max(), 25.6);
        assert.throws(() => ['a', 'b'].Max(), 'Array has no numeric Content');
    });

    it('can get the min of numeric List', () => {
        assert.equal([1, 2, 3].Min(), 1);
        assert.equal([1.05, 25.6, 3].Min(), 1.05);
        assert.throws(() => ['a', 'b'].Min(), 'Array has no numeric Content');
    });

    it('can get the mean of numeric List', () => {
        assert.equal([1, 2, 3].Mean(), 2);
        assert.equal([1, 25.6, 3].Mean(), 9.866666666666667);
        assert.throws(() => ['a', 'b'].Mean(), 'Array has no numeric Content');
    });

    it('can get the sum of numeric List', () => {
        assert.equal([1, 2, 3].Sum(), 6);
        assert.equal([1, 25.6, 3].Sum(), 29.6);
        assert.throws(() => ['a', 'b'].Sum(), 'Array has no numeric Content');
    });

    it('can get Max with complex Object', () => {
        const list = [
            {name: 'test1', value: 1},
            {name: 'test2', value: 2},
            {name: 'test3', value: 3},
        ];
        assert.equal(list.MaxBy<{name: string, value: number}>(i => i.value).name, 'test3');
    });

    it('can get Min with complex Object', () => {
        const list = [
            {name: 'test1', value: 1},
            {name: 'test2', value: 2},
            {name: 'test3', value: 3},
        ];
        assert.equal(list.MinBy<{name: string, value: number}>(i => i.value).name, 'test1');
    });

    it('can get Mean with complex Object', () => {
        const list = [
            {name: 'test1', value: 1},
            {name: 'test2', value: 2},
            {name: 'test3', value: 3},
        ];
        assert.equal(list.MeanBy<number>(i => i.value), 2);
    });

    it('can unique add to list', () => {
        const list = [1,2,3];
        assert.isTrue(list.AddIfNotExists(4));
        assert.equal(list.Count(), 4);
        assert.equal(list.Find(i => i === 4), 4);
        assert.isFalse(list.AddIfNotExists(3));
    });

    it('can unique add range values', () => {
        let added = [1,2,3];
        added.AddRangeIfNotExists([4,5,6]);
        assert.equal(added.ElementAt(0), 1);
        assert.equal(added.ElementAt(1), 2);
        assert.equal(added.ElementAt(2), 3);
        assert.equal(added.ElementAt(3), 4);
        assert.equal(added.ElementAt(4), 5);
        assert.equal(added.ElementAt(5), 6);
        assert.equal(added.Count(), 6);

        added = [1,2,3];
        added.AddRangeIfNotExists([1,5,7]);
        assert.equal(added.ElementAt(0), 1);
        assert.equal(added.ElementAt(1), 2);
        assert.equal(added.ElementAt(2), 3);
        assert.equal(added.ElementAt(3), 5);
        assert.equal(added.ElementAt(4), 7);
    });

    it('check for empty list', () => {
        assert.isFalse([].Any());
        assert.isTrue([1,2,3].Any());
    });

    it('can Reduce List', () => {
        const list = [
            'a',
            'b',
            'c',
        ];
        const result = list.Reduce((target, e) => {
            return target.Concat(e, ',');
        }, '');
        assert.equal(result, 'a,b,c');
    });

    it('Join test', () => {
        const list = ['a', 'b', 'c'];
        assert.equal(list.Join(), 'a,b,c');
        assert.equal(list.Join('.'), 'a.b.c');
        assert.equal(['a',{Hello:'World'},'c'].Join('.'), 'a.[object Object].c');
    });
});
