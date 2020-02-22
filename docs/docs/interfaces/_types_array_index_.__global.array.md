---
id: "_types_array_index_.__global.array"
title: "Array"
sidebar_label: "Array"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["types/array/index"](../modules/_types_array_index_.md) › [__global](../modules/_types_array_index_.__global.md) › [Array](_types_array_index_.__global.array.md)

## Type parameters

▪ **T**

## Hierarchy

* **Array**

## Index

### Other Methods

* [Replace](_types_array_index_.__global.array.md#optional-replace)

### array Methods

* [Add](_types_array_index_.__global.array.md#optional-add)
* [AddIfNotExists](_types_array_index_.__global.array.md#optional-addifnotexists)
* [AddRange](_types_array_index_.__global.array.md#optional-addrange)
* [AddRangeIfNotExists](_types_array_index_.__global.array.md#optional-addrangeifnotexists)
* [Any](_types_array_index_.__global.array.md#optional-any)
* [Clear](_types_array_index_.__global.array.md#optional-clear)
* [Contains](_types_array_index_.__global.array.md#optional-contains)
* [Convert](_types_array_index_.__global.array.md#optional-convert)
* [Copy](_types_array_index_.__global.array.md#optional-copy)
* [Count](_types_array_index_.__global.array.md#optional-count)
* [ElementAt](_types_array_index_.__global.array.md#optional-elementat)
* [Exists](_types_array_index_.__global.array.md#optional-exists)
* [Find](_types_array_index_.__global.array.md#optional-find)
* [FindAll](_types_array_index_.__global.array.md#optional-findall)
* [FindIndex](_types_array_index_.__global.array.md#optional-findindex)
* [FindLast](_types_array_index_.__global.array.md#optional-findlast)
* [FindLastIndex](_types_array_index_.__global.array.md#optional-findlastindex)
* [FirstOrDefault](_types_array_index_.__global.array.md#optional-firstordefault)
* [GroupBy](_types_array_index_.__global.array.md#optional-groupby)
* [GroupKey](_types_array_index_.__global.array.md#optional-groupkey)
* [IndexOf](_types_array_index_.__global.array.md#optional-indexof)
* [Insert](_types_array_index_.__global.array.md#optional-insert)
* [InsertRange](_types_array_index_.__global.array.md#optional-insertrange)
* [Join](_types_array_index_.__global.array.md#optional-join)
* [LastOrDefault](_types_array_index_.__global.array.md#optional-lastordefault)
* [Max](_types_array_index_.__global.array.md#optional-max)
* [Mean](_types_array_index_.__global.array.md#optional-mean)
* [Min](_types_array_index_.__global.array.md#optional-min)
* [Reduce](_types_array_index_.__global.array.md#optional-reduce)
* [Remove](_types_array_index_.__global.array.md#optional-remove)
* [RemoveAll](_types_array_index_.__global.array.md#optional-removeall)
* [RemoveAt](_types_array_index_.__global.array.md#optional-removeat)
* [RemoveRange](_types_array_index_.__global.array.md#optional-removerange)
* [Reverse](_types_array_index_.__global.array.md#optional-reverse)
* [Sort](_types_array_index_.__global.array.md#optional-sort)
* [SortBy](_types_array_index_.__global.array.md#optional-sortby)
* [Sum](_types_array_index_.__global.array.md#optional-sum)
* [TrueForAll](_types_array_index_.__global.array.md#optional-trueforall)
* [UnionBy](_types_array_index_.__global.array.md#optional-unionby)

## Other Methods

### `Optional` Replace

▸ **Replace**(`condition`: [FindMethod](../modules/_types_array_index_.md#findmethod)‹T›, `item`: T): *T[]*

*Defined in [src/types/array/index.ts:282](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L282)*

replace a Item in the List takes the first match

**`example`** 
// returns [1,2,3]
[1,5,3].Replace((e) => e === 5, 2);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | [FindMethod](../modules/_types_array_index_.md#findmethod)‹T› | the method executed for each element in the list |
`item` | T | the Item to replace with |

**Returns:** *T[]*

the list with the inserted Item

___

## array Methods

### `Optional` Add

▸ **Add**(`element`: T): *T[]*

*Defined in [src/types/array/index.ts:115](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L115)*

add the given element at the end of the list

**`example`** 
// returns [1]
[].Add(1);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | T | the element to add in the list |

**Returns:** *T[]*

the list after element added

___

### `Optional` AddIfNotExists

▸ **AddIfNotExists**(`element`: T): *T[]*

*Defined in [src/types/array/index.ts:131](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L131)*

add the element at the end of the list when the element not exists in the list.

**`example`** 
// returns [1,2]
[1].AddIfNotExists(2);
// returns [1]
[1].AddIfNotExists(1);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | T | the element to add in the list |

**Returns:** *T[]*

the list after eventually added element

___

### `Optional` AddRange

▸ **AddRange**(`elements`: T[]): *T[]*

*Defined in [src/types/array/index.ts:162](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L162)*

add multiple elements at the end of this array

**`example`** 
// returns [1,2,3,4]
[1].AddRange([2,3,4]);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`elements` | T[] | the elements to add into this array |

**Returns:** *T[]*

the array after add all elements

___

### `Optional` AddRangeIfNotExists

▸ **AddRangeIfNotExists**(`elements`: T[]): *T[]*

*Defined in [src/types/array/index.ts:178](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L178)*

add multiple elements at the end of this array when not exists

**`example`** 
// returns [1,2,3,4]
[1].AddRangeIfNotExists([2,3,4]);
// returns [1]
[1].AddRangeIfNotExists([1,1,1]);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`elements` | T[] | the elements to add into this array |

**Returns:** *T[]*

the array after add all elements

___

### `Optional` Any

▸ **Any**(`condition?`: [FindMethod](../modules/_types_array_index_.md#findmethod)‹T›): *boolean*

*Defined in [src/types/array/index.ts:620](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L620)*

check if any element is in the array

**`example`** 
// returns true
[1,2,3].Any();
// returns false
[].Any();

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition?` | [FindMethod](../modules/_types_array_index_.md#findmethod)‹T› | the condition to search the element |

**Returns:** *boolean*

array has a element or not

___

### `Optional` Clear

▸ **Clear**(): *T[]*

*Defined in [src/types/array/index.ts:191](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L191)*

remove all Elements from this array

**`example`** 
// returns []
[1,2,3].Clear();

**Returns:** *T[]*

the empty array

___

### `Optional` Contains

▸ **Contains**(`element`: T): *boolean*

*Defined in [src/types/array/index.ts:212](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L212)*

check if this array have the given element

**`example`** 
// returns true
[1,2,3].Contains(2);
const element = {x:'y'};
[element].Contains(element);
const element2 = {hello:'world',Equals:(i) => this.hello === i.hello};
[element2].Contains(element2);
// returns false
[1,2,3].Contains(50);
[{hello:'world'}].Contains({hello:'world'});

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | T | the element to be find |

**Returns:** *boolean*

element is in the list or not

___

### `Optional` Convert

▸ **Convert**<**K**>(`convertMethod`: [ConvertMethod](../modules/_types_array_index_.md#convertmethod)‹T, K›): *K[]*

*Defined in [src/types/array/index.ts:703](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L703)*

convert all elements of the array into other form

**`example`** 
// returns ['Test1', 'Test2', 'Test3']
[1,2,3].Convert(e => 'Test' + e);

**Type parameters:**

▪ **K**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`convertMethod` | [ConvertMethod](../modules/_types_array_index_.md#convertmethod)‹T, K› | the method that execute with any element and convert them |

**Returns:** *K[]*

a new converted array

___

### `Optional` Copy

▸ **Copy**(): *T[]*

*Defined in [src/types/array/index.ts:225](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L225)*

get a new instance of the array

**`example`** 
// returns [1,2,3]
[1,2,3].Copy();

**Returns:** *T[]*

the new instance

___

### `Optional` Count

▸ **Count**(): *number*

*Defined in [src/types/array/index.ts:25](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L25)*

get the Number of Items in the Array

**`example`** 
// returns 3
[1,2,3].Count();
// returns 0
[].Count();

**Returns:** *number*

the Number of Elements

___

### `Optional` ElementAt

▸ **ElementAt**(`index`: number): *T*

*Defined in [src/types/array/index.ts:604](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L604)*

get the array element at the given index or null

**`example`** 
// returns 2
[1,2,3].ElementAt(1);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | number | the index of the element to get from array |

**Returns:** *T*

the element at the given index

___

### `Optional` Exists

▸ **Exists**(`condition`: [FindMethod](../modules/_types_array_index_.md#findmethod)‹T›): *boolean*

*Defined in [src/types/array/index.ts:241](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L241)*

check if the find Method returns true for a element in the list

**`example`** 
// returns true
[1,2,3].Exists(e => e === 2);
// returns false
[1,2,3].Exists(e => e === 20);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | [FindMethod](../modules/_types_array_index_.md#findmethod)‹T› | the method executed for each element in the list |

**Returns:** *boolean*

element exists or not

___

### `Optional` Find

▸ **Find**(`condition`: [FindMethod](../modules/_types_array_index_.md#findmethod)‹T›): *T*

*Defined in [src/types/array/index.ts:255](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L255)*

find the first element that matches the condition in the array

**`example`** 
// returns 2
[1,2,3].Find((e) => e > 1);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | [FindMethod](../modules/_types_array_index_.md#findmethod)‹T› | the method executed for each element in the list |

**Returns:** *T*

the element that matches

___

### `Optional` FindAll

▸ **FindAll**(`condition`: [FindMethod](../modules/_types_array_index_.md#findmethod)‹T›): *T[]*

*Defined in [src/types/array/index.ts:310](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L310)*

get all elements that match the condition

**`example`** 
// returns [2,3]
[1,2,3].FindAll(i => i > 1);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | [FindMethod](../modules/_types_array_index_.md#findmethod)‹T› | the method executed for each element in the list |

**Returns:** *T[]*

a array of matched elements

___

### `Optional` FindIndex

▸ **FindIndex**(`condition`: [FindMethod](../modules/_types_array_index_.md#findmethod)‹T›): *number*

*Defined in [src/types/array/index.ts:296](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L296)*

get the index number of the first matched element in the array

**`example`** 
// returns 1
[1,2,3,1,2,3].FindIndex(e => e === 2);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | [FindMethod](../modules/_types_array_index_.md#findmethod)‹T› | the method executed for each element in the list |

**Returns:** *number*

the index number

___

### `Optional` FindLast

▸ **FindLast**(`condition`: [FindMethod](../modules/_types_array_index_.md#findmethod)‹T›): *T*

*Defined in [src/types/array/index.ts:269](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L269)*

find the last element that matches the condition in the array

**`example`** 
// returns 3
[1,2,3].FindLast((e) => e > 1);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | [FindMethod](../modules/_types_array_index_.md#findmethod)‹T› | the method executed for each element in the list |

**Returns:** *T*

the element that matches

___

### `Optional` FindLastIndex

▸ **FindLastIndex**(`condition`: [FindMethod](../modules/_types_array_index_.md#findmethod)‹T›): *number*

*Defined in [src/types/array/index.ts:324](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L324)*

get the index number of the last matched element in the array

**`example`** 
// returns 4
[1,2,3,1,2,3].FindLastIndex(e => e === 2);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | [FindMethod](../modules/_types_array_index_.md#findmethod)‹T› | the method executed for each element in the list |

**Returns:** *number*

the index number

___

### `Optional` FirstOrDefault

▸ **FirstOrDefault**(`condition?`: [FindMethod](../modules/_types_array_index_.md#findmethod)‹T›, `def?`: T): *T*

*Defined in [src/types/array/index.ts:641](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L641)*

get the First element of the array or the first that match the condition

when no element was found the default value or null was returned

**`example`** 
// return 1
[1,2,3,4,5,6].FirstOrDefault();
// return 2
[1,2,3,4,5,6].FirstOrDefault(e => e > 1);
// return 10
[1,2,3,4,5,6].FirstOrDefault(() => false, 10);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition?` | [FindMethod](../modules/_types_array_index_.md#findmethod)‹T› | the condition executed ba any array element |
`def?` | T | the default value to return |

**Returns:** *T*

the element that matches first

___

### `Optional` GroupBy

▸ **GroupBy**(`condition`: [TransformMethod](../modules/_types_array_index_.md#transformmethod)‹T›): *object*

*Defined in [src/types/array/index.ts:675](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L675)*

groups a array of elements by a condition

**`example`** 
// returns {'1': [1], '2': [2], '3': [3,3,3]}
[1,2,3,3,3].GroupBy(e => e);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | [TransformMethod](../modules/_types_array_index_.md#transformmethod)‹T› | the condition to group the array |

**Returns:** *object*

the grouped object with splatted arrays from the current array

* \[ **key**: *string*\]: T[]

___

### `Optional` GroupKey

▸ **GroupKey**(`condition`: [TransformMethod](../modules/_types_array_index_.md#transformmethod)‹T›): *string[]*

*Defined in [src/types/array/index.ts:689](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L689)*

groups a array of elements by a condition and returns the group keys

**`example`** 
// returns ['1', '2', '3']
[1,2,3,3,3].GroupKey(e => e);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | [TransformMethod](../modules/_types_array_index_.md#transformmethod)‹T› | the condition to group the array |

**Returns:** *string[]*

the grouped keys as string array

___

### `Optional` IndexOf

▸ **IndexOf**(`element`: T, `fromIndex?`: number): *number*

*Defined in [src/types/array/index.ts:387](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L387)*

get the array index of a element

**`example`** 
// returns 1
[1,2,3,1,2,3].IndexOf(2);
// returns 4
[1,2,3,1,2,3].IndexOf(2, 2);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | T | the element to find in the array |
`fromIndex?` | number | the index to skip |

**Returns:** *number*

the array index of the target element

___

### `Optional` Insert

▸ **Insert**(`index`: number, `element`: T): *T[]*

*Defined in [src/types/array/index.ts:355](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L355)*

insert a element in the array at a specific position

**`example`** 
// returns [1,5,2,3]
[1,2,3].Insert(1, 5);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | number | the position where to insert the element |
`element` | T | the element to insert |

**Returns:** *T[]*

the array with inserted element

___

### `Optional` InsertRange

▸ **InsertRange**(`index`: number, `elements`: T[]): *T[]*

*Defined in [src/types/array/index.ts:370](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L370)*

insert a array of elements in the array at a specific position

**`example`** 
// returns [1,4,5,6,2,3]
[1,2,3].Insert(1, [4,5,6]);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | number | the position where to insert the element |
`elements` | T[] | the elements to insert |

**Returns:** *T[]*

the array with inserted elements

___

### `Optional` Join

▸ **Join**(`separator?`: string): *string*

*Defined in [src/types/array/index.ts:717](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L717)*

joins the array elements into a string with separator

**`example`** 
// returns "1,2,3"
[1,2,3].Join(',');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator?` | string | the separator to split the array elements in the string |

**Returns:** *string*

the string with array elements

___

### `Optional` LastOrDefault

▸ **LastOrDefault**(`condition?`: [FindMethod](../modules/_types_array_index_.md#findmethod)‹T›, `def?`: T): *T*

*Defined in [src/types/array/index.ts:661](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L661)*

get the last element of the array or the last that match the condition

when no element was found the default value or null was returned

**`example`** 
// return 6
[1,2,3,4,5,6].LastOrDefault();
[1,2,3,4,5,6].LastOrDefault(e => e > 1);
// return 10
[1,2,3,4,5,6].LastOrDefault(() => false, 10);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition?` | [FindMethod](../modules/_types_array_index_.md#findmethod)‹T› | the condition executed ba any array element |
`def?` | T | the default value to return |

**Returns:** *T*

the element that matches last

___

### `Optional` Max

▸ **Max**(`filterMethod?`: [FindMethod](../modules/_types_array_index_.md#findmethod)‹T›): *number*

*Defined in [src/types/array/index.ts:45](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L45)*

get the maximum number in the Array

only number types are checked!!!

**`example`** 
// returns 3
[1,2,3].Max();
// returns 2
[1,2,3].Max(i => i < 3);
// returns 4
[1,2,'3',4,'5'].Max();

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filterMethod?` | [FindMethod](../modules/_types_array_index_.md#findmethod)‹T› | a filter function to remove some number values |

**Returns:** *number*

the maximum value

___

### `Optional` Mean

▸ **Mean**(`filterMethod?`: [FindMethod](../modules/_types_array_index_.md#findmethod)‹T›): *number*

*Defined in [src/types/array/index.ts:83](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L83)*

get the Mean from all numbers in this array

**`example`** 
// returns 9.866666666666667
[1, 25.6, 3].Mean();
// returns 2
[1,2,3,4].Mean(i => i < 4);
// returns 4
['1','2','3',4,'5'].Mean();

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filterMethod?` | [FindMethod](../modules/_types_array_index_.md#findmethod)‹T› | a filter function to remove some number values |

**Returns:** *number*

the mean value

___

### `Optional` Min

▸ **Min**(`filterMethod?`: [FindMethod](../modules/_types_array_index_.md#findmethod)‹T›): *number*

*Defined in [src/types/array/index.ts:65](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L65)*

get the minimum number in the Array

only number types are checked!!!

**`example`** 
// returns 3
[1,2,3].Min();
// returns 2
[1,2,3].Min(i => i > 1);
// returns 4
['1','2','3',4,'5'].Min();

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filterMethod?` | [FindMethod](../modules/_types_array_index_.md#findmethod)‹T› | a filter function to remove some number values |

**Returns:** *number*

the minimum value

___

### `Optional` Reduce

▸ **Reduce**<**K**>(`reducer`: [ReducerMethod](../modules/_types_array_index_.md#reducermethod)‹T, K›, `initial`: K): *K*

*Defined in [src/types/array/index.ts:148](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L148)*

shrink the array into a new object with a convert function.

**`example`** 
// returns "a,b,c"
['a', 'b', 'c'].Reduce((target, e) => {
     return target.Concat(e, ',');
 }, '')

**Type parameters:**

▪ **K**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reducer` | [ReducerMethod](../modules/_types_array_index_.md#reducermethod)‹T, K› | the reducer function to convert each array element |
`initial` | K | the initial value pass to each element |

**Returns:** *K*

the shrinked object

___

### `Optional` Remove

▸ **Remove**(`element`: T): *T[]*

*Defined in [src/types/array/index.ts:401](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L401)*

remove a element from the list

**`example`** 
// returns [1,3]
[1,2,3].Remove(2);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`element` | T | the element to remove from the list |

**Returns:** *T[]*

the array without the element to remove

___

### `Optional` RemoveAll

▸ **RemoveAll**(`match`: [FindMethod](../modules/_types_array_index_.md#findmethod)‹T›): *T[]*

*Defined in [src/types/array/index.ts:417](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L417)*

remove all elements that match the given condition

**`example`** 
// return [1,3]
[1,2,3].RemoveAll(e => e === 2);
// return []
[1,2,3].RemoveAll(() => true);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`match` | [FindMethod](../modules/_types_array_index_.md#findmethod)‹T› | the condition executed by any element in the array |

**Returns:** *T[]*

the array without the condition matching elements

___

### `Optional` RemoveAt

▸ **RemoveAt**(`index`: number): *T[]*

*Defined in [src/types/array/index.ts:431](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L431)*

remove element at specific position

**`example`** 
// returns [1,3]
[1,2,3].RemoveAt(1);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | number | the position where the element was removed |

**Returns:** *T[]*

the array without the element to remove

___

### `Optional` RemoveRange

▸ **RemoveRange**(`elements`: T[]): *T[]*

*Defined in [src/types/array/index.ts:446](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L446)*

remove multiple elements from the array

**`example`** 
// returns [1,2,3]
[1,2,3,4,5,6].RemoveRange([4,5,6]);
[1,2,3].RemoveRange([4,5,6]);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`elements` | T[] | the elements to remove from the array |

**Returns:** *T[]*

the array without the elements to remove

___

### `Optional` Reverse

▸ **Reverse**(): *T[]*

*Defined in [src/types/array/index.ts:459](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L459)*

turn around the array elements

**`example`** 
// returns [3,2,1]
[1,2,3].Reverse();

**Returns:** *T[]*

the reverse of the array

___

### `Optional` Sort

▸ **Sort**(`order?`: [ListSortOrder](../enums/_types_array_array_extension_.listsortorder.md)): *T[]*

*Defined in [src/types/array/index.ts:477](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L477)*

sort the elements in a array

**`example`** 
// returns [1, 2, 3]
[1, 2, 3].Sort();
// returns [3, 2, 1]
[1, 2, 3].Sort(ListSortOrder.DESC);
// returns ['c', 'b', 'a']
['a', 'b', 'c'].Sort(ListSortOrder.DESC);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`order?` | [ListSortOrder](../enums/_types_array_array_extension_.listsortorder.md) | the direction to sort the array elements |

**Returns:** *T[]*

the sorted array

___

### `Optional` SortBy

▸ **SortBy**(`keys`: string[], `orders?`: [ListSortOrder](../enums/_types_array_array_extension_.listsortorder.md)[]): *T[]*

*Defined in [src/types/array/index.ts:590](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L590)*

sort a array of objects by the given keys

**`example`** 
// returns [
// {
//       Name: 'Anne Klein',
//       Age: 23,
//       Birthday: new Date(1965, 8, 12, 0, 0, 0),
//       Address: {
//           Street: 'Jenaer Strasse 26',
//           PLZ: '47053',
//           Town: 'Duisburg',
//       }
//   },{
//       Name: 'Christine Ehrlichmann',
//       Age: 37,
//       Birthday: new Date(1982, 4, 23, 0, 0, 0),
//       Address: {
//           Street: 'Paul-Nevermann-Platz 59',
//           PLZ: '97657',
//           Town: 'Sandberg'
//       }
//   },{
//       Name: 'Jonas Schreiner',
//       Age: 23,
//       Birthday: new Date(1965, 4, 12, 0, 0, 0),
//       Address: {
//           Street: 'Gotthardstrasse 69',
//           PLZ: '99094',
//           Town: 'Erfurt'
//       }
//   },{
//       Name: 'Sandra Eichmann',
//       Age: 45,
//       Birthday: new Date(1969, 0, 22, 0, 0, 0),
//       Address: {
//           Street: 'Inge Beisheim Platz 20',
//           PLZ: '25313',
//           Town: 'Elmshorn'
//       }
//   },{
//       Name: 'Ulrich Gärtner',
//       Age: 60,
//       Birthday: new Date(1959, 2, 23, 0, 0, 0),
//       Address: {
//           Street: 'Koenigstrasse 50',
//           PLZ: '99750',
//           Town: 'Bleicherode'
//       }
//   }
// ]
[
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
   ].SortBy(['Name'], [ListSortOrder.ASC]);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`keys` | string[] | a list of keys to sort with |
`orders?` | [ListSortOrder](../enums/_types_array_array_extension_.listsortorder.md)[] | the sort direction to the keys |

**Returns:** *T[]*

the sorted list of objects

___

### `Optional` Sum

▸ **Sum**(`filterMethod?`: [FindMethod](../modules/_types_array_index_.md#findmethod)‹T›): *number*

*Defined in [src/types/array/index.ts:101](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L101)*

get the Sum from all numbers in this array

**`example`** 
// returns 6
[1,2,3].Sum();
// returns 5
[1,2,3].Sum(i => i > 1);
// returns 4
['1','2','3',4,'5'].Sum();

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`filterMethod?` | [FindMethod](../modules/_types_array_index_.md#findmethod)‹T› | a filter function to remove some number values |

**Returns:** *number*

the sum value

___

### `Optional` TrueForAll

▸ **TrueForAll**(`condition`: [FindMethod](../modules/_types_array_index_.md#findmethod)‹T›): *boolean*

*Defined in [src/types/array/index.ts:340](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L340)*

check if a condition returns true for any element in the array

**`example`** 
// returns true
[1,2,3].TrueForAll(e => typeof e === typeof 0);
// returns false
[1,2,3].TrueForAll(e => e === 1);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | [FindMethod](../modules/_types_array_index_.md#findmethod)‹T› | the method to check each element |

**Returns:** *boolean*

condition is true for all elements or not

___

### `Optional` UnionBy

▸ **UnionBy**<**T**>(`items`: T[], `check`: [FindMethod](../modules/_types_array_index_.md#findmethod)‹T›): *T[]*

*Defined in [src/types/array/index.ts:732](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/array/index.ts#L732)*

merge two arrays by the condition

**`example`** 
// returns [1,2,3,6]
[1,2,3].UnionBy([4,5,6], e => e === 6);

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`items` | T[] | the items to add at the end of the array |
`check` | [FindMethod](../modules/_types_array_index_.md#findmethod)‹T› | the condition that executed by the given items |

**Returns:** *T[]*

the merged array
