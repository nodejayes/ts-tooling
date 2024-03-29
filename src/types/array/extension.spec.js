const {assert} = require('chai');
const {describe, it} = require('mocha');
const {ListSortOrder} = require('./extension');
require('../string/extension/extension');

const complexValues = () => [
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

describe('Array Extension Tests', () => {
    describe('[Method]: Count', () => {
        it('get the length number of the Array', () => {
            assert.equal([1,2,3].Count(), 3);
        });
        it('empty Array is 0', () => {
            assert.equal([].Count(), 0);
        });
    });
    describe('[Method]: Max', () => {
        it('get max of all numbers', () => {
            assert.equal([1,2,3].Max(), 3);
        });
        it('get max of filtered numbers', () => {
            assert.equal([1,2,3].Max(i => i < 3), 2);
        });
        it('looking only on number values in the array', () => {
            assert.equal([1,2,'3',4,'5'].Max(), 4);
        });
        it('empty array is 0', () => {
            assert.equal([].Max(), 0);
        });
    });
    describe('[Method]: Min', () => {
        it('get min of all numbers', () => {
            assert.equal([1,2,3].Min(), 1);
        });
        it('get min of filtered numbers', () => {
            assert.equal([1,2,3].Min(i => i > 1), 2);
        });
        it('looking only on number values in the array', () => {
            assert.equal(['1','2','3',4,'5'].Min(), 4);
        });
        it('empty array is 0', () => {
            assert.equal([].Min(), 0);
        });
    });
    describe('[Method]: Mean', () => {
        it('get mean of all numbers', () => {
            assert.equal([1,2,3].Mean(), 2);
            assert.equal([1, 25.6, 3].Mean(), 9.866666666666667);
        });
        it('get mean of filtered numbers', () => {
            assert.equal([1,2,3,4].Mean(i => i < 4), 2);
        });
        it('looking only on number values in the array', () => {
            assert.equal(['1','2','3',4,'5'].Mean(), 4);
        });
        it('empty array is 0', () => {
            assert.equal([].Mean(), 0);
        });
    });
    describe('[Method]: Sum', () => {
        it('get sum of all numbers', () => {
            assert.equal([1,2,3].Sum(), 6);
        });
        it('get sum of filtered numbers', () => {
            assert.equal([1,2,3].Sum(i => i > 1), 5);
        });
        it('looking only on number values in the array', () => {
            assert.equal(['1','2','3',4,'5'].Sum(), 4);
        });
        it('empty array is 0', () => {
            assert.equal([].Sum(), 0);
        });
    });
    describe('[Method]: Add', () => {
        it('add element to a empty array', () => {
            assert.equal([].Add(1).length, 1);
            assert.equal([].Add(1)[0], 1);
        });
    });
    describe('[Method]: AddIfNotExists', () => {
        it('add element that not exists', () => {
            assert.equal([1].AddIfNotExists(2).length, 2);
            assert.equal([1].AddIfNotExists(2)[0], 1);
            assert.equal([1].AddIfNotExists(2)[1], 2);
        });
        it('do not add element that exists', () => {
            assert.equal([1].AddIfNotExists(1).length, 1);
            assert.equal([1].AddIfNotExists(1)[0], 1);
        });
    });
    describe('[Method]: Reduce', () => {
        it('reduce a string array to a string', () => {
            assert.equal(['a', 'b', 'c'].Reduce((target, e) => {
                return target.Concat(e, ',');
            }, ''), 'a,b,c');
        });
    });
    describe('[Method]: AddRange', () => {
        it('add some numbers at the end of a array', () => {
            assert.equal([1].AddRange([2,3,4]).length, 4);
            assert.equal([1].AddRange([2,3,4])[0], 1);
            assert.equal([1].AddRange([2,3,4])[1], 2);
            assert.equal([1].AddRange([2,3,4])[2], 3);
            assert.equal([1].AddRange([2,3,4])[3], 4);
        });
    });
    describe('[Method]: AddRangeIfNotExists', () => {
        it('add element that not exists', () => {
            assert.equal([1].AddRangeIfNotExists([2,3,4]).length, 4);
            assert.equal([1].AddRangeIfNotExists([2,3,4])[0], 1);
            assert.equal([1].AddRangeIfNotExists([2,3,4])[1], 2);
            assert.equal([1].AddRangeIfNotExists([2,3,4])[2], 3);
            assert.equal([1].AddRangeIfNotExists([2,3,4])[3], 4);
        });
        it('do not add element that exists', () => {
            assert.equal([1].AddRangeIfNotExists([1,1,1]).length, 1);
            assert.equal([1].AddRangeIfNotExists([1,1,1])[0], 1);
        });
    });
    describe('[Method]: Clear', () => {
        it('empty array returns empty array', () => {
            assert.equal([].Clear().length, 0);
        });
        it('clears all elements in the array', () => {
            assert.equal([1,2,3].Clear().length, 0);
        });
        it('avoid memory leaks', () => {
            let a1 = [1,2,3];
            let a2 = a1;
            a1.Clear();
            assert.deepEqual(a1, a2);
        });
    });
    describe('[Method]: Contains', () => {
        it('find primitive type', () => {
            assert.isTrue([1,2,3].Contains(2));
        });
        it('return false if not exists in array', () => {
            assert.isFalse([1,2,3].Contains(50));
        });
        it('object compare instance', () => {
            const element = {x:'y'};
            assert.isFalse([{hello:'world'}].Contains({hello:'world'}));
            assert.isTrue([element].Contains(element));
        });
        it('object with Equals method execute method to compare', () => {
            const element = {hello:'world',Equals:function (i) { return this.hello === i.hello;}};
            assert.isTrue([element].Contains(element));
        });
        it('works with undefined data', () => {
            assert.isFalse([undefined].Contains(1));
            assert.isTrue([undefined].Contains(undefined));
        });
        it('works with nullable data', () => {
            assert.isFalse([null].Contains(1));
            assert.isTrue([null].Contains(null));
        });
    });
    describe('[Method]: Copy', () => {
        it('creates a new instance', () => {
            const tmp = [];
            assert.isTrue(tmp !== tmp.Copy());
        });
    });
    describe('[Method]: Exists', () => {
        it('returns true when element is in the list', () => {
            assert.isTrue([1,2,3].Exists(e => e === 2));
        });
        it('returns false when element is not in the list', () => {
            assert.isFalse([1,2,3].Exists(e => e === 20));
        });
    });
    describe('[Method]: Find', () => {
        it('returns the first element that match the condition', () => {
            assert.equal([1,2,3].Find(e => e === 2), 2);
        });
        it('returns null when no element match the condition', () => {
            assert.isNull([1,2,3].Find(e => e === 20));
        });
    });
    describe('[Method]: FindLast', () => {
        it('returns the last element that match the condition', () => {
            assert.equal([1,2,3].FindLast(e => e === 2), 2);
        });
        it('returns null when no element match the condition', () => {
            assert.isNull([1,2,3].FindLast(e => e === 20));
        });
        it('get the last element on duplicate elements in array', () => {
            assert.equal([1,2,3,1,2,3].FindLast(e => e === 2), 2);
        });
    });
    describe('[Method]: FindIndex', () => {
        it('returns the first index that match the condition', () => {
            assert.equal([1,2,3].FindIndex(e => e === 2), 1);
        });
        it('returns -1 when no element match the condition', () => {
            assert.equal([1,2,3].FindIndex(e => e === 20), -1);
        });
        it('returns the first index that match the condition object example', () => {
            assert.equal([{n: 1}, {n: 2}, {n: 3}].FindIndex(e => e.n === 2), 1);
        });
        it('returns -1 when no element match the condition object example', () => {
            assert.equal([{n: 1}, {n: 2}, {n: 3}].FindIndex(e => e.n === 20), -1);
        });
    });
    describe('[Method]: FindLastIndex', () => {
        it('returns the last index that match the condition', () => {
            assert.equal([1,2,3].FindLastIndex(e => e === 2), 1);
        });
        it('returns -1 when no element match the condition', () => {
            assert.equal([1,2,3].FindLastIndex(e => e === 20), -1);
        });
        it('get the last index on duplicate elements in array', () => {
            assert.equal([1,2,3,1,2,3].FindLastIndex(e => e === 2), 4);
        });
    });
    describe('[Method]: FindAll', () => {
        it('get all elements that match the condition', () => {
            assert.equal([1,2,3].FindAll(i => i > 1).length, 2);
            assert.equal([1,2,3].FindAll(i => i > 1)[0], 2);
            assert.equal([1,2,3].FindAll(i => i > 1)[1], 3);
        });
        it('get empty array when no element match the condition', () => {
            assert.equal([1,2,3].FindAll(i => i === 100).length, 0);
        });
    });
    describe('[Method]: TrueForAll', () => {
        it('returns true when condition returns true for all elements', () => {
            assert.isTrue([1,2,3].TrueForAll(e => typeof e === typeof 0));
        });
        it('returns false when one element not match the condition', () => {
            assert.isFalse([1,2,3].TrueForAll(e => e === 1));
        });
        it('idx is not undefined', () => {
            [1,2,3].TrueForAll((e, i, arr) => {
                if (i < 0 || i === undefined || i === null) {
                    assert.fail('wrong index given');
                }
            });
        });
        it('arr is not undefined', () => {
            [1,2,3].TrueForAll((e, i, arr) => {
                if (!Array.isArray(arr)) {
                    assert.fail('the array was not passed in condition');
                }
            });
        });
    });
    describe('[Method]: Insert', () => {
        it('insert one element at beginning of the array', () => {
            assert.equal([1,2,3].Insert(0, 5).length, 4);
            assert.equal([1,2,3].Insert(0, 5)[0], 5);
            assert.equal([1,2,3].Insert(0, 5)[1], 1);
            assert.equal([1,2,3].Insert(0, 5)[2], 2);
            assert.equal([1,2,3].Insert(0, 5)[3], 3);
        });
        it('insert in the middle of the array', () => {
            const original = [1,2,3];
            const tmp = original.Insert(1, 5);
            assert.equal(tmp.length, 4);
            assert.equal(tmp[0], 1);
            assert.equal(tmp[1], 5);
            assert.equal(tmp[2], 2);
            assert.equal(tmp[3], 3);
        });
        it('do not modify the original array', () => {
            const original = [1,2,3];
            const tmp = original.Insert(1, 5);
            assert.equal(tmp.length, 4);
            assert.equal(tmp[0], 1);
            assert.equal(tmp[1], 5);
            assert.equal(tmp[2], 2);
            assert.equal(tmp[3], 3);
            assert.equal(original.length, 3);
            assert.equal(original[0], 1);
            assert.equal(original[1], 2);
            assert.equal(original[2], 3);
        });
    });
    describe('[Method]: InsertRange', () => {
        it('insert a array of elements into a array', () => {
            assert.equal([1,2,3].InsertRange(0, [4,5,6]).length, 6);
            assert.equal([1,2,3].InsertRange(0, [4,5,6])[0], 4);
            assert.equal([1,2,3].InsertRange(0, [4,5,6])[1], 5);
            assert.equal([1,2,3].InsertRange(0, [4,5,6])[2], 6);
            assert.equal([1,2,3].InsertRange(0, [4,5,6])[3], 1);
            assert.equal([1,2,3].InsertRange(0, [4,5,6])[4], 2);
            assert.equal([1,2,3].InsertRange(0, [4,5,6])[5], 3);
        });
        it('do not modify the original array', () => {
            const original = [1,2,3];
            const tmp = original.InsertRange(1, [4,5,6]);
            assert.equal(tmp.length, 6);
            assert.equal(tmp[0], 1);
            assert.equal(tmp[1], 4);
            assert.equal(tmp[2], 5);
            assert.equal(tmp[3], 6);
            assert.equal(tmp[4], 2);
            assert.equal(tmp[5], 3);
            assert.equal(original.length, 3);
            assert.equal(original[0], 1);
            assert.equal(original[1], 2);
            assert.equal(original[2], 3);
        });
    });
    describe('[Method]: IndexOf', () => {
        it('get the first index', () => {
            assert.equal([1,2,3,1,2,3].IndexOf(2), 1);
        });
        it('get the second index', () => {
            assert.equal([1,2,3,1,2,3].IndexOf(2, 2), 4);
        });
    });
    describe('[Method]: Remove', () => {
        it('remove element from array', () => {
            assert.equal([1,2,3].Remove(2).length, 2);
            assert.equal([1,2,3].Remove(2)[0], 1);
            assert.equal([1,2,3].Remove(2)[1], 3);
        });
        it('remove nothing when no match', () => {
            assert.equal([1,2,3].Remove(7).length, 3);
            assert.equal([1,2,3].Remove(7)[0], 1);
            assert.equal([1,2,3].Remove(7)[1], 2);
            assert.equal([1,2,3].Remove(7)[2], 3);
        });
    });
    describe('[Method]: RemoveAll', () => {
        it('remove all elements', () => {
            assert.equal([1,2,3].RemoveAll(() => true).length, 0);
        });
        it('remove by filter', () => {
            assert.equal([1,2,3].RemoveAll(e => e === 2).length, 2);
            assert.equal([1,2,3].RemoveAll(e => e === 2)[0], 1);
            assert.equal([1,2,3].RemoveAll(e => e === 2)[1], 3);
        });
        it('remove nothing when no match', () => {
            assert.equal([1,2,3].RemoveAll(e => false).length, 3);
            assert.equal([1,2,3].RemoveAll(e => false)[0], 1);
            assert.equal([1,2,3].RemoveAll(e => false)[1], 2);
            assert.equal([1,2,3].RemoveAll(e => false)[2], 3);
        });
    });
    describe('[Method]: RemoveAt', () => {
        it('remove element by index', () => {
            assert.equal([1,2,3].RemoveAt(1).length, 2);
            assert.equal([1,2,3].RemoveAt(1)[0], 1);
            assert.equal([1,2,3].RemoveAt(1)[1], 3);
        });
        it('remove nothing when index invalid', () => {
            assert.equal([1,2,3].RemoveAt(5).length, 3);
            assert.equal([1,2,3].RemoveAt(5)[0], 1);
            assert.equal([1,2,3].RemoveAt(5)[1], 2);
            assert.equal([1,2,3].RemoveAt(5)[2], 3);
        });
    });
    describe('[Method]: RemoveRange', () => {
        it('remove many elements from list', () => {
            assert.equal([1,2,3,4,5,6].RemoveRange([4,5,6]).length, 3);
            assert.equal([1,2,3,4,5,6].RemoveRange([4,5,6])[0], 1);
            assert.equal([1,2,3,4,5,6].RemoveRange([4,5,6])[1], 2);
            assert.equal([1,2,3,4,5,6].RemoveRange([4,5,6])[2], 3);
        });
        it('ignore not matched elements', () => {
            assert.equal([1,2,3].RemoveRange([4,5,6]).length, 3);
            assert.equal([1,2,3].RemoveRange([4,5,6])[0], 1);
            assert.equal([1,2,3].RemoveRange([4,5,6])[1], 2);
            assert.equal([1,2,3].RemoveRange([4,5,6])[2], 3);
        });
    });
    describe('[Method]: Reverse', () => {
        it('turn around the array', () => {
            assert.equal([1,2,3].Reverse().length, 3);
            assert.equal([1,2,3].Reverse()[0], 3);
            assert.equal([1,2,3].Reverse()[1], 2);
            assert.equal([1,2,3].Reverse()[2], 1);
        });
        it('360 array', () => {
            assert.equal([1,2,3].Reverse().Reverse().length, 3);
            assert.equal([1,2,3].Reverse().Reverse()[0], 1);
            assert.equal([1,2,3].Reverse().Reverse()[1], 2);
            assert.equal([1,2,3].Reverse().Reverse()[2], 3);
        });
    });
    describe('[Method]: Sort', () => {
        it('sort a number array', () => {
            assert.deepEqual([1, 2, 3].Sort(), [
                1,2,3
            ]);

            assert.deepEqual([1, 2, 3].Sort(ListSortOrder.DESC), [
                3,2,1
            ]);
        });
        it('sort string array', () => {
            assert.deepEqual(['a', 'b', 'c'].Sort(), [
                'a', 'b', 'c'
            ]);

            assert.deepEqual(['a', 'b', 'c'].Sort(ListSortOrder.DESC), [
                'c', 'b', 'a'
            ]);
        });
        it('sort a date list', () => {
            const list = [
                new Date(2019, 1, 1, 0, 0, 0),
                new Date(2019, 1, 2, 0, 0, 0),
                new Date(2019, 1, 3, 0, 0, 0),
            ];
            assert.deepEqual(list.Sort(), [
                new Date(2019, 1, 1, 0, 0, 0),
                new Date(2019, 1, 2, 0, 0, 0),
                new Date(2019, 1, 3, 0, 0, 0),
            ]);

            assert.deepEqual(list.Sort(ListSortOrder.DESC), [
                new Date(2019, 1, 3, 0, 0, 0),
                new Date(2019, 1, 2, 0, 0, 0),
                new Date(2019, 1, 1, 0, 0, 0),
            ]);
        });
    });
    describe('[Method]: SortBy', () => {
        it('not change unordered list', () => {
            const result = [
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
            assert.deepEqual(complexValues().SortBy([], []), result);
        });
        it('default sort is ASC', () => {
            const result = [
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
            ];
            assert.deepEqual(complexValues().SortBy(['Name']), result);
        });
        it('extends sort direction', () => {
            const result = [
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
                    Name: 'Anne Klein',
                    Age: 23,
                    Birthday: new Date(1965, 8, 12, 0, 0, 0),
                    Address: {
                        Street: 'Jenaer Strasse 26',
                        PLZ: '47053',
                        Town: 'Duisburg',
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
                    Name: 'Christine Ehrlichmann',
                    Age: 37,
                    Birthday: new Date(1982, 4, 23, 0, 0, 0),
                    Address: {
                        Street: 'Paul-Nevermann-Platz 59',
                        PLZ: '97657',
                        Town: 'Sandberg'
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
            ];
            assert.deepEqual(complexValues().SortBy(['Age', 'Name'], [ListSortOrder.ASC]), result);
        });
        it('ignore to many orders', () => {
            const result = [
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
                    Name: 'Anne Klein',
                    Age: 23,
                    Birthday: new Date(1965, 8, 12, 0, 0, 0),
                    Address: {
                        Street: 'Jenaer Strasse 26',
                        PLZ: '47053',
                        Town: 'Duisburg',
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
                    Name: 'Christine Ehrlichmann',
                    Age: 37,
                    Birthday: new Date(1982, 4, 23, 0, 0, 0),
                    Address: {
                        Street: 'Paul-Nevermann-Platz 59',
                        PLZ: '97657',
                        Town: 'Sandberg'
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
            ];
            assert.deepEqual(complexValues().SortBy(['Age', 'Name'], [ListSortOrder.ASC, ListSortOrder.ASC, ListSortOrder.ASC]), result);
        });
        it('sort by Name', () => {
            const result = [
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
            ];
            assert.deepEqual(complexValues().SortBy(['Name'], [ListSortOrder.ASC]), result);
        });
        it('sort by Age and Name', () => {
            const result = [
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
                    Name: 'Anne Klein',
                    Age: 23,
                    Birthday: new Date(1965, 8, 12, 0, 0, 0),
                    Address: {
                        Street: 'Jenaer Strasse 26',
                        PLZ: '47053',
                        Town: 'Duisburg',
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
                    Name: 'Christine Ehrlichmann',
                    Age: 37,
                    Birthday: new Date(1982, 4, 23, 0, 0, 0),
                    Address: {
                        Street: 'Paul-Nevermann-Platz 59',
                        PLZ: '97657',
                        Town: 'Sandberg'
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
            ];
            assert.deepEqual(complexValues().SortBy(['Age', 'Name'], [ListSortOrder.ASC, ListSortOrder.ASC]), result);
        });
    });
    describe('[Method]: Replace', () => {
        it('replace in the middle of the list', () => {
            assert.deepEqual([1,5,3].Replace(e => e === 5, 2), [1,2,3]);
        });
        it('append when the element not found', () => {
            assert.deepEqual([1,2,3].Replace(e => e === 7, 4), [1,2,3,4]);
        });
        it('not append when the element not found and force is false', () => {
            assert.deepEqual([1,2,3].Replace(e => e === 7, 4, false), [1,2,3]);
        });
    });
    describe('[Method]: ElementAt', () => {
        it('get the array element at the position', () => {
            assert.equal([1,2,3].ElementAt(1), 2);
        });
        it('get null when no element at position', () => {
            assert.isNull([1,2,3].ElementAt(5));
        });
    });
    describe('[Method]: Any', () => {
        it('returns true when list have elements', () => {
            assert.isTrue([1,2,3].Any());
        });
        it('returns false when the list is empty', () => {
            assert.isFalse([].Any());
        });
        it('returns true when condition is true', () => {
            assert.isTrue([1,2,3].Any(e => e === 2));
        });
        it('returns false when condition is false', () => {
            assert.isFalse([1,2,3].Any(e => e === 20));
        });
        it('find 0 in array', () => {
            assert.isTrue([0,1,2,3].Any(e => e === 0));
        });
    });
    describe('[Method]: FirstOrDefault', () => {
        it('gets the first element of array', () => {
            assert.equal([1,2,3,4,5,6].FirstOrDefault(), 1);
        });
        it('gets the first element that match', () => {
            assert.equal([1,2,3,4,5,6].FirstOrDefault(e => e > 1), 2);
        });
        it('gets default when nothing match', () => {
            assert.equal([1,2,3,4,5,6].FirstOrDefault(() => false, 10), 10);
        });
        it('return null when no default value was passed', () => {
            assert.isNull([1,2,3].FirstOrDefault(() => false));
        });
    });
    describe('[Method]: LastOrDefault', () => {
        it('gets the last element of array', () => {
            assert.equal([1,2,3,4,5,6].LastOrDefault(), 6);
        });
        it('gets the last element that match', () => {
            assert.equal([1,2,3,4,5,6].LastOrDefault(e => e > 1), 6);
        });
        it('gets default when nothing match', () => {
            assert.equal([1,2,3,4,5,6].LastOrDefault(() => false, 10), 10);
        });
        it('return null when no default value was passed', () => {
            assert.isNull([1,2,3].LastOrDefault(() => false));
        });
    });
    describe('[Method]: GroupBy', () => {
        it('group numbers array', () => {
            assert.deepEqual([1,2,3,3,3].GroupBy(e => e), {
                '1': [1],
                '2': [2],
                '3': [3, 3, 3],
            });
        });
        it('group objects', () => {
            assert.deepEqual([{hello:'World!'},{hello:'World!!'},{hello:'World!!!'},{hello:'World!'}].GroupBy(e => e.hello), {
                'World!': [{hello:'World!'},{hello:'World!'}],
                'World!!': [{hello:'World!!'}],
                'World!!!': [{hello:'World!!!'}],
            });
        });
    });
    describe('[Method]: GroupKey', () => {
        it('group numbers array', () => {
            assert.deepEqual([1,2,3,3,3].GroupKey(e => e), ['1', '2', '3']);
        });
    });
    describe('[Method]: Convert', () => {
        it('convert a array into another array', () => {
            assert.deepEqual([1,2,3].Convert(e => 'Test' + e), ['Test1', 'Test2', 'Test3']);
        });
        it('convert can access idx', () => {
            assert.deepEqual([1,2,3].Convert((e, idx) => 'Test' + e + idx), ['Test10', 'Test21', 'Test32']);
        });
        it('convert can access arr', () => {
            assert.deepEqual([1,2,3].Convert((e, idx, arr) => 'Test' + e + idx + arr.length), ['Test103', 'Test213', 'Test323']);
        });
    });
    describe('[Method]: Join', () => {
        it('default separator is comma', () => {
            assert.equal([1,2,3].Join(), '1,2,3');
        });
        it('custom separator', () => {
            assert.equal([1,2,3].Join('#'), '1#2#3');
        });
        it('empty array returns empty string', () => {
            assert.equal([].Join(','), '');
        });
    });
    describe('[Method]: UnionBy', () => {
        it('array union with all', () => {
            assert.deepEqual([1,2,3].UnionBy([4,5,6], () => true), [1,2,3,4,5,6]);
        });
        it('array union with match', () => {
            assert.deepEqual([1,2,3].UnionBy([4,5,6], e => e === 6), [1,2,3,6]);
        });
        it('array union with nothing', () => {
            assert.deepEqual([1,2,3].UnionBy([], () => true), [1,2,3]);
        });
    });
    describe('[Method]: Pull', () => {
        it('pull 2 from 1,2,3', () => {
            const tmp = [1,2,3];
            assert.equal(tmp.Pull(1), 2);
            assert.deepEqual(tmp, [1,3]);
        });
        it('to high index remove the last element', () => {
            const tmp = [1,2,3];
            assert.equal(tmp.Pull(10), 3);
            assert.deepEqual(tmp, [1,2]);
        });
        it('to low index remove the first element', () => {
            const tmp = [1,2,3];
            assert.equal(tmp.Pull(-1), 1);
            assert.deepEqual(tmp, [2,3]);
        });
    });
    describe('[Method]: Chunk', () => {
        it('chunk Array with uneven length', () => {
            assert.deepEqual([1,2,3,4,5].Chunk(2), [[1,2], [3,4], [5]]);
        });
        it('chunk Array with even length', () => {
            assert.deepEqual([1,2,3,4].Chunk(2), [[1,2], [3,4]]);
        });
        it('empty is empty', () => {
            assert.deepEqual([].Chunk(2), []);
        });
        it('zero length returns original result as one chunk', () => {
            assert.deepEqual([1,2,3,4].Chunk(-1), [[1,2,3,4]]);
        });
    });
    describe('[Method]: Unique', () => {
        it('unique array not change', () => {
            assert.deepEqual([1,2,3].Unique(), [1,2,3]);
        });
        it('make unique number array', () => {
            assert.deepEqual([1,1,2,2,3].Unique(), [1,2,3]);
        });
        it('make unique string array', () => {
            assert.deepEqual(['1','1','2','2','3'].Unique(), ['1','2','3']);
        });
        it('make unique object array', () => {
            assert.deepEqual([{a:1},{a:2},{a:1},{a:4}].Unique(), [{a:1},{a:2},{a:1},{a:4}]);
        });
        it('use Equal implementation in Objects', () => {
            class Test {
                constructor(a, b) {
                    this.a = a;
                    this.b = b;
                }

                Equals(obj) {
                    return this.a === obj.a && this.b === obj.b;
                }
            }
            const t1 = new Test(1,2);
            const t2 = new Test(1,2);
            const t3 = new Test(1,5);
            assert.deepEqual([t1, t2, t3].Unique(), [t1, t3]);
        });
        it('can make custom compare function some matches', () => {
            const list = [{hello: 1},{hello: 2},{hello: 2},{hello: 3},{hello: 3},{hello: 3}];
            assert.deepEqual(list.Unique((a, b) => a.hello === b.hello), [{hello: 1},{hello: 2},{hello: 3}]);
        });
        it('can make custom compare function nothing match', () => {
            const list = [{hello: 1},{hello: 2},{hello: 3}];
            assert.deepEqual(list.Unique((a, b) => a.hello === b.hello), list);
        });
    });
    describe('[Method]: ForSegment', () => {
        it('execute some function for each segments of an array', () => {
            let counter = 0;
            [1,2,3,4,5].ForSegment((c, n) => {
                counter++;
                assert.isDefined(c);
                assert.isDefined(n);
            });
            assert.equal(counter, 4);
        });
        it('catch not enough segments', () => {
            let counter = 0;
            [1].ForSegment(() => {
                counter++;
            });
            assert.equal(counter, 0);
        });
    });
    describe('[Method]: Without', () => {
        it('can skip first element', () => {
            let res = '';
            [1,2,3,4,5].Without([0], e => res += e);
            assert.equal(res, '2345');
        });
        it('can skip last element', () => {
            let res = '';
            [1,2,3,4,5].Without([4], e => res += e);
            assert.equal(res, '1234');
        });
        it('can skip middle element', () => {
            let res = '';
            [1,2,3,4,5].Without([2], e => res += e);
            assert.equal(res, '1245');
        });
        it('can skip random elements', () => {
            let res = '';
            [1,2,3,4,5].Without([0, 2, 4], e => res += e);
            assert.equal(res, '24');
        });
        it('indexes they not exists makes no problem', () => {
            let res = '';
            [1,2,3,4,5].Without([10], e => res += e);
            assert.equal(res, '12345');
        });
    });
    describe('[Method]: Flat', () => {
        it('flat a empty array', () => {
            assert.deepEqual([].Flat(), []);
            assert.deepEqual([].Flat(), [].flat());
        });
        it('flat a already flatten array', () => {
            assert.deepEqual([1,2,3,4].Flat(), [1,2,3,4]);
            assert.deepEqual([1,2,3,4].Flat(), [1,2,3,4].flat());
        });
        it('flat a array 1D', () => {
            assert.deepEqual([1,[2,3,4],5].Flat(), [1,2,3,4,5]);
            assert.deepEqual([1,[2,3,4],5].Flat(), [1,[2,3,4],5].flat());
        });
        it('flat a array 2D', () => {
            assert.deepEqual([1,[[2,3,4]],5].Flat(), [1,2,3,4,5]);
            assert.deepEqual([1,[[2,3,4]],5].Flat(), [1,[[2,3,4]],5].flat(2));
        });
        it('flat a array 3D', () => {
            assert.deepEqual([1,[[[2,3,4]]],5].Flat(), [1,2,3,4,5]);
            assert.deepEqual([1,[[[2,3,4]]],5].Flat(), [1,[[[2,3,4]]],5].flat(3));
        });
        it('flat a array 4D', () => {
            assert.deepEqual([1,[[[[2,3,4]]]],5].Flat(), [1,2,3,4,5]);
            assert.deepEqual([1,[[[[2,3,4]]]],5].Flat(), [1,[[[[2,3,4]]]],5].flat(4));
        });
        it('default goes down to every plane', () => {
            assert.deepEqual([1,[[[[[2,3,4]]]]],5].Flat(), [1,2,3,4,5]);
            assert.deepEqual([1,[[[[[2,3,4]]]]],5].Flat(), [1,[[[[[2,3,4]]]]],5].flat(5));
        });
        it('force only flat one plane', () => {
            assert.deepEqual([1,[[[[[2,3,4]]]]],5].Flat(1), [1,[[[[2,3,4]]]],5]);
            assert.deepEqual([1,[[[[[2,3,4]]]]],5].Flat(1), [1,[[[[[2,3,4]]]]],5].flat());
        });
        it('given zero as parameter', () => {
            assert.deepEqual([1,[[[[[2,3,4]]]]],5].Flat(0), [1,2,3,4,5]);
        });
        it('given -1 as parameter', () => {
            assert.deepEqual([1,[[[[[2,3,4]]]]],5].Flat(-1), [1,2,3,4,5]);
        });
        it('random array elements example 1', () => {
            assert.deepEqual([1,[[[[[2,3,4]],8,7,[9,10]]]],5].Flat(1), [1,[[[[2,3,4]],8,7,[9,10]]],5]);
            assert.deepEqual([1,[[[[[2,3,4]],8,7,[9,10]]]],5].Flat(1), [1,[[[[[2,3,4]],8,7,[9,10]]]],5].flat());
        });
        it('random array elements example2', () => {
            assert.deepEqual([1,[[[[[2,3,4]],8,7,[9,10]]]],5].Flat(), [1,2,3,4,8,7,9,10,5]);
            assert.deepEqual([1,[[[[[2,3,4]],8,7,[9,10]]]],5].Flat(), [1,[[[[2,3,4]],8,7,[9,10]]],5].flat(5));
        });
    });
    describe('[Method]: Head', () => {
        it('get empty array lower than zero', () => {
            assert.deepEqual([1,2,3].Head(-1), []);
        });
        it('get empty array on zero', () => {
            assert.deepEqual([1,2,3].Head(0), []);
        });
        it('get the exact number of arguments', () => {
            assert.deepEqual([1,2,3].Head(2), [1,2]);
        });
        it('greater than the array length get the complete array', () => {
            assert.deepEqual([1,2,3].Head(15), [1,2,3]);
        });
    });
    describe('[Method]: Tail', () => {
        it('get empty array lower than zero', () => {
            assert.deepEqual([1,2,3].Tail(-1), []);
        });
        it('get empty array on zero', () => {
            assert.deepEqual([1,2,3].Tail(0), []);
        });
        it('get the exact number of arguments', () => {
            assert.deepEqual([1,2,3].Tail(2), [2,3]);
        });
        it('greater than the array length get the complete array', () => {
            assert.deepEqual([1,2,3].Tail(15), [1,2,3]);
        });
    });
});
