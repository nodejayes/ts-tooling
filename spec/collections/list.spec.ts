import {assert} from 'chai';
import {List, Integer, Chars, ListSortOrder} from "../../src/ts-tooling";

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

describe('List Tests', () => {
    describe('Basic Tests', () => {
        it('can create empty List', () => {
            assert.equal(new List<number>().Count.Value, 0, 'cannot create empty List');
        });

        it('can create predefined List', () => {
            assert.equal(new List<number>(primitiveNumbers).Count.Value, primitiveNumbers.length, 'cannot create predefined List');
        });

        it('has right Count', () => {
            assert.equal(new List<number>(primitiveNumbers).Count.Value, primitiveNumbers.length, 'invalid Count on primitive Numbers');
            assert.equal(new List<string>(primitiveStrings).Count.Value, primitiveStrings.length, 'invalid Count on primitive Strings');
            assert.equal(new List<Date>(primitiveDates).Count.Value, primitiveDates.length, 'invalid Count on primitive Dates');
        });

        it('can convert to Array', () => {
            const list = new List<number>();
            list.AddRange(new List([1, 2]));
            assert.equal(list.ToArray()[0], 1);
            assert.equal(list.ToArray()[1], 2);
        });

        it('can copy List', () => {
            const list = new List([1, 2]);
            const copy = list.Copy();
            assert.notEqual(list, copy, 'List is the same instance');
            assert.equal(list.Count.Value, copy.Count.Value);
            assert.equal(list.ToArray()[0], copy.ToArray()[0]);
            assert.equal(list.ToArray()[1], copy.ToArray()[1]);
        });
    });

    describe('Mutation Tests', () => {
        it('can Add a single Element into List', () => {
            const list = new List<number>();
            list.Add(2);
            assert.equal(list.Count.Value, 1, 'nothing added to List');
            assert.equal(list.ToArray()[0], 2, 'wrong item in List');
        });

        it('can Add multiple Elements into List', () => {
            const list = new List<number>();
            list.AddRange(new List([1, 2, 3]));
            assert.equal(list.Count.Value, 3, 'nothing added to List');
            assert.equal(list.ToArray()[0], 1, 'wrong item in List');
            assert.equal(list.ToArray()[1], 2, 'wrong item in List');
            assert.equal(list.ToArray()[2], 3, 'wrong item in List');
        });

        it('can clear List', () => {
            const list = new List<number>();
            list.AddRange(new List([1, 2, 3]));
            list.Clear();
            assert.equal(list.Count.Value, 0, 'List is not empty');
        });

        it('can insert Element in List', () => {
            const list = new List<number>();
            list.Insert(new Integer(0), 1);
            assert.equal(list.Count.Value, 1);
            assert.equal(list.ToArray()[0], 1);
        });

        it('can insert Element in List with not existent index', () => {
            const list = new List<number>();
            list.Insert(new Integer(2), 5);
            assert.equal(list.Count.Value, 3);
            assert.equal(list.ToArray()[2], 5);
        });

        it('can insert multiple Elements into List', () => {
            const list = new List([1, 2, 3]);
            list.InsertRange(new Integer(0), [5, 5]);
            assert.equal(list.Count.Value, 3);
            assert.equal(list.ToArray()[0], 5);
            assert.equal(list.ToArray()[1], 5);
            assert.equal(list.ToArray()[2], 3);
        });

        it('insert multiple Elements into list extends the List', () => {
            const list = new List();
            list.InsertRange(new Integer(0), [5, 5, 5]);
            assert.equal(list.Count.Value, 3);
            assert.equal(list.ToArray()[0], 5);
            assert.equal(list.ToArray()[1], 5);
            assert.equal(list.ToArray()[2], 5);
        });

        it('can remove a Item from List', () => {
            const list = new List([1, 2, 3]);
            list.Remove(2);
            assert.equal(list.Count.Value, 2);
            assert.equal(list.ToArray()[0], 1);
            assert.equal(list.ToArray()[1], 3);
        });

        it('can remove multiple Items from List', () => {
            const list = new List([1, 2, 3, 2, 2, 4, 5]);
            list.RemoveAll(i => i === 2);
            assert.equal(list.Count.Value, 4);
            assert.equal(list.ElementAt(new Integer(0)), 1);
            assert.equal(list.ElementAt(new Integer(1)), 3);
            assert.equal(list.ElementAt(new Integer(2)), 4);
            assert.equal(list.ElementAt(new Integer(3)), 5);
        });

        it('can remove Item from List at Index', () => {
            const list = new List([1, 2, 3, 2, 2, 4, 5]);
            list.RemoveAt(new Integer(3));
            assert.equal(list.Count.Value, 6);
            assert.equal(list.ToArray()[0], 1);
            assert.equal(list.ToArray()[1], 2);
            assert.equal(list.ToArray()[2], 3);
            assert.equal(list.ToArray()[3], 2);
            assert.equal(list.ToArray()[4], 4);
            assert.equal(list.ToArray()[5], 5);
        });

        it('can remove multiple Items from List', () => {
            const list = new List([1, 2, 3, 2, 2, 4, 5]);
            list.RemoveRange([2, 3, 4, 5]);
            assert.equal(list.Count.Value, 1);
            assert.equal(list.ToArray()[0], 1);
        });
    });

    describe('Operations Tests', () => {
        it('can check List if Contains Element', () => {
            const list = new List([1, 3, 4]);
            assert.isTrue(list.Contains(1));
            assert.isFalse(list.Contains(6));
            assert.isTrue(new List(complexValues).Contains(complexValues[0]));
            assert.isFalse(new List(complexValues).Contains(invalidUser));
        });

        it('can check, List if Exists Elements with filter', () => {
            assert.isTrue(new List(complexValues).Exists(i => i.Age === 23));
            assert.isFalse(new List(complexValues).Exists(i => i.Age === 999));
            assert.isTrue(new List([1, 2, 3]).Exists(i => i === 3));
            assert.isFalse(new List([1, 2, 3]).Exists(i => i === 4))
        });

        it('can find Element in List', () => {
            const list = new List(complexValues);
            assert.deepEqual(list.Find(i => i.Age === 23), complexValues[0]);
        });

        it('can find last Element match in List', () => {
            const list = new List(complexValues);
            assert.deepEqual(list.FindLast(i => i.Age === 23), complexValues[4]);
        });

        it('can find index of Element in List', () => {
            const list = new List(complexValues);
            assert.equal(list.FindIndex(i => i.Age === 23).Value, 0);
        });

        it('can find last index of Element in List', () => {
            const list = new List(complexValues);
            assert.equal(list.FindLastIndex(i => i.Age === 23).Value, 4);
        });

        it('can find all Elements in List by match', () => {
            const list = new List(complexValues);
            assert.equal(list.FindAll(i => i.Age === 23).Count.Value, 2);
        });

        it('can check match for all Elements in List', () => {
            assert.isTrue(new List([1, 1, 1, 1, 1]).TrueForAll(i => i === 1));
            assert.isFalse(new List([1, 1, 1, 2]).TrueForAll(i => i === 1));
        });

        it('can get the Index of Element in List', () => {
            assert.equal(new List([1, 2, 3, 4]).IndexOf(2).Value, 1);
            assert.equal(new List([1, 2, 3, 4, 1, 2, 3, 4]).IndexOf(2, new Integer(4)).Value, 5);
        });

        it('can turn around List', () => {
            const list = new List([1, 2, 3]);
            assert.deepEqual(list.Reverse().ToArray(), [3, 2, 1]);
        });

        it('can find the First match Element or return Default', () => {
            const list = new List([1, 2, 3, 1, 2, 3]);
            assert.equal(list.FirstOrDefault(i => i === 2), 2);
            assert.isNull(list.FirstOrDefault(i => i === 14));
            assert.equal(list.FirstOrDefault(i => i === 14, 12), 12);
            assert.equal(list.FirstOrDefault(), 1);
        });

        it('can find the Last match Element or return Default', () => {
            const list = new List([1, 2, 3, 1, 2, 3]);
            assert.equal(list.LastOrDefault(i => i === 2), 2);
            assert.isNull(list.LastOrDefault(i => i === 14));
            assert.equal(list.LastOrDefault(i => i === 14, 12), 12);
            assert.equal(list.LastOrDefault(), 3);
        });

        it('can get Element at Index', () => {
            const list = new List([1, 2, 3]);
            assert.equal(list.ElementAt(new Integer(0)), 1);
        });

        it('can sort Number List', () => {
            const list = new List([1, 2, 3]);
            assert.deepEqual(list.Sort()
                .ToArray(), [3, 2, 1]);
            assert.deepEqual(list.Sort()
                .Sort(ListSortOrder.DESC)
                .ToArray(), [1, 2, 3]);
        });

        it('can sort Chars List', () => {
            const list = new List(['a', 'b', 'c']);
            assert.deepEqual(list.Sort()
                .ToArray(), ['c', 'b', 'a']);
            assert.deepEqual(list.Sort()
                .Sort(ListSortOrder.DESC)
                .ToArray(), ['a', 'b', 'c']);
        });

        it('can sort Date List', () => {
            const list = new List([
                new Date(2019, 1, 1, 0, 0, 0),
                new Date(2019, 1, 2, 0, 0, 0),
                new Date(2019, 1, 3, 0, 0, 0),
            ]);
            assert.deepEqual(list.Sort()
                .ToArray(), [
                new Date(2019, 1, 3, 0, 0, 0),
                new Date(2019, 1, 2, 0, 0, 0),
                new Date(2019, 1, 1, 0, 0, 0),
            ]);
            assert.deepEqual(list.Sort()
                .Sort(ListSortOrder.DESC)
                .ToArray(), [
                new Date(2019, 1, 1, 0, 0, 0),
                new Date(2019, 1, 2, 0, 0, 0),
                new Date(2019, 1, 3, 0, 0, 0),
            ]);
        });

        it('can sort complex List', () => {
            const list = new List(complexValues);
            assert.deepEqual(list
                .SortBy(new List([new Chars('Name')]), new List([ListSortOrder.ASC]))
                .ToArray(), [
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
            const list = new List([1, 2, 2, 3, 3, 3]);
            const grouped = list.GroupBy(i => i);
            assert.equal(grouped.TryGetValue(new Chars('1')).Count.Value, 1);
            assert.equal(grouped.TryGetValue(new Chars('2')).Count.Value, 2);
            assert.equal(grouped.TryGetValue(new Chars('3')).Count.Value, 3);
        });

        it('can sum List elements', () => {
            const list = new List([1, 2, 3.5]);
            assert.equal(list.SumBy(i => i).Value, 6.5);
        });

        it('can get the max of numeric List', () => {
            assert.equal(new List([1, 2, 3]).Max.Value, 3);
            assert.equal(new List([1, 25.6, 3]).Max.Value, 25.6);
            assert.throws(() => new List(['a', 'b']).Max, 'List has no numeric Content');
        });

        it('can get the min of numeric List', () => {
            assert.equal(new List([1, 2, 3]).Min.Value, 1);
            assert.equal(new List([1.05, 25.6, 3]).Min.Value, 1.05);
            assert.throws(() => new List(['a', 'b']).Min, 'List has no numeric Content');
        });

        it('can get the mean of numeric List', () => {
            assert.equal(new List([1, 2, 3]).Mean.Value, 2);
            assert.equal(new List([1, 25.6, 3]).Mean.Value, 9.866666666666667);
            assert.throws(() => new List(['a', 'b']).Mean, 'List has no numeric Content');
        });

        it('can get the sum of numeric List', () => {
            assert.equal(new List([1, 2, 3]).Sum.Value, 6);
            assert.equal(new List([1, 25.6, 3]).Sum.Value, 29.6);
            assert.throws(() => new List(['a', 'b']).Sum, 'List has no numeric Content');
        });

        it('can get Max with complex Object', () => {
            const list = new List([
                {name: 'test1', value: 1},
                {name: 'test2', value: 2},
                {name: 'test3', value: 3},
            ]);
            assert.equal(list.MaxBy(i => i.value).name, 'test3');
        });

        it('can get Min with complex Object', () => {
            const list = new List([
                {name: 'test1', value: 1},
                {name: 'test2', value: 2},
                {name: 'test3', value: 3},
            ]);
            assert.equal(list.MinBy(i => i.value).name, 'test1');
        });

        it('can get Mean with complex Object', () => {
            const list = new List([
                {name: 'test1', value: 1},
                {name: 'test2', value: 2},
                {name: 'test3', value: 3},
            ]);
            assert.equal(list.MeanBy(i => i.value).Value, 2);
        });

        it('can unique add to list', () => {
            const list = new List([1,2,3]);
            assert.isTrue(list.AddIfNotExists(4));
            assert.equal(list.Count.Value, 4);
            assert.equal(list.Find(i => i === 4), 4);
            assert.isFalse(list.AddIfNotExists(3));
        });

        it('can unique add range values', () => {
            const list = new List([1,2,3]);
            let added = list.AddRangeIfNotExists(new List([4,5,6]));
            assert.isTrue(added.ElementAt((0).ToInteger()));
            assert.isTrue(added.ElementAt((1).ToInteger()));
            assert.isTrue(added.ElementAt((2).ToInteger()));
            assert.equal(list.Count.Value, 6);

            added = list.AddRangeIfNotExists(new List([1,5,7]));
            assert.isFalse(added.ElementAt((0).ToInteger()));
            assert.isFalse(added.ElementAt((1).ToInteger()));
            assert.isTrue(added.ElementAt((2).ToInteger()));
        });

        it('check for empty list', () => {
            assert.isTrue(new List().IsEmpty());
            assert.isFalse(new List([1,2,3]).IsEmpty());
        });
    });
});
