---
id: "_types_dictionary_dictionary_.dictionary"
title: "Dictionary"
sidebar_label: "Dictionary"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["types/dictionary/dictionary"](../modules/_types_dictionary_dictionary_.md) › [Dictionary](_types_dictionary_dictionary_.dictionary.md)

representation of a string Dictionary

## Type parameters

▪ **T**

## Hierarchy

* **Dictionary**

## Index

### Constructors

* [constructor](_types_dictionary_dictionary_.dictionary.md#constructor)

### Properties

* [_data](_types_dictionary_dictionary_.dictionary.md#private-_data)

### Accessors

* [Count](_types_dictionary_dictionary_.dictionary.md#count)
* [Values](_types_dictionary_dictionary_.dictionary.md#values)

### Methods

* [Add](_types_dictionary_dictionary_.dictionary.md#add)
* [Clear](_types_dictionary_dictionary_.dictionary.md#clear)
* [ContainsKey](_types_dictionary_dictionary_.dictionary.md#containskey)
* [ContainsValue](_types_dictionary_dictionary_.dictionary.md#containsvalue)
* [Find](_types_dictionary_dictionary_.dictionary.md#find)
* [FindAll](_types_dictionary_dictionary_.dictionary.md#findall)
* [GetObject](_types_dictionary_dictionary_.dictionary.md#getobject)
* [Keys](_types_dictionary_dictionary_.dictionary.md#keys)
* [Remove](_types_dictionary_dictionary_.dictionary.md#remove)
* [TryGetValue](_types_dictionary_dictionary_.dictionary.md#trygetvalue)

## Constructors

###  constructor

\+ **new Dictionary**(`dictionary?`: object): *[Dictionary](_types_dictionary_dictionary_.dictionary.md)*

*Defined in [src/types/dictionary/dictionary.ts:5](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/dictionary/dictionary.ts#L5)*

create a new Dictionary you can fill it with predefined Data

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dictionary?` | object |   |

**Returns:** *[Dictionary](_types_dictionary_dictionary_.dictionary.md)*

## Properties

### `Private` _data

• **_data**: *object*

*Defined in [src/types/dictionary/dictionary.ts:5](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/dictionary/dictionary.ts#L5)*

#### Type declaration:

## Accessors

###  Count

• **get Count**(): *number*

*Defined in [src/types/dictionary/dictionary.ts:21](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/dictionary/dictionary.ts#L21)*

Number of Entries in the Dictionary

**Returns:** *number*

___

###  Values

• **get Values**(): *T[]*

*Defined in [src/types/dictionary/dictionary.ts:29](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/dictionary/dictionary.ts#L29)*

all Values of the Dictionary

**Returns:** *T[]*

## Methods

###  Add

▸ **Add**(`key`: string, `item`: T): *[Dictionary](_types_dictionary_dictionary_.dictionary.md)‹T›*

*Defined in [src/types/dictionary/dictionary.ts:47](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/dictionary/dictionary.ts#L47)*

add a Entry into the Dictionary

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`item` | T |

**Returns:** *[Dictionary](_types_dictionary_dictionary_.dictionary.md)‹T›*

___

###  Clear

▸ **Clear**(): *[Dictionary](_types_dictionary_dictionary_.dictionary.md)‹T›*

*Defined in [src/types/dictionary/dictionary.ts:56](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/dictionary/dictionary.ts#L56)*

clear the Dictionary

**Returns:** *[Dictionary](_types_dictionary_dictionary_.dictionary.md)‹T›*

___

###  ContainsKey

▸ **ContainsKey**(`key`: string): *boolean*

*Defined in [src/types/dictionary/dictionary.ts:76](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/dictionary/dictionary.ts#L76)*

check if a Key is in the Dictionary

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *boolean*

___

###  ContainsValue

▸ **ContainsValue**(`value`: T): *boolean*

*Defined in [src/types/dictionary/dictionary.ts:85](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/dictionary/dictionary.ts#L85)*

check if a Value is in the Dictionary

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *boolean*

___

###  Find

▸ **Find**(`filter`: function): *T*

*Defined in [src/types/dictionary/dictionary.ts:111](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/dictionary/dictionary.ts#L111)*

get a Value that match the Filter Condition

**Parameters:**

▪ **filter**: *function*

▸ (`d`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`d` | T |

**Returns:** *T*

___

###  FindAll

▸ **FindAll**(`filter`: function): *T[]*

*Defined in [src/types/dictionary/dictionary.ts:125](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/dictionary/dictionary.ts#L125)*

same as Find but get multiple Values

**Parameters:**

▪ **filter**: *function*

▸ (`d`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`d` | T |

**Returns:** *T[]*

___

###  GetObject

▸ **GetObject**(): *object*

*Defined in [src/types/dictionary/dictionary.ts:93](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/dictionary/dictionary.ts#L93)*

get the Dictionary as Javascript Object

**Returns:** *object*

* \[ **key**: *string*\]: T

___

###  Keys

▸ **Keys**(): *string[]*

*Defined in [src/types/dictionary/dictionary.ts:37](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/dictionary/dictionary.ts#L37)*

all Keys of the Dictionary

**Returns:** *string[]*

___

###  Remove

▸ **Remove**(`key`: string): *[Dictionary](_types_dictionary_dictionary_.dictionary.md)‹T›*

*Defined in [src/types/dictionary/dictionary.ts:66](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/dictionary/dictionary.ts#L66)*

remove a Entry from the Dictionary

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *[Dictionary](_types_dictionary_dictionary_.dictionary.md)‹T›*

___

###  TryGetValue

▸ **TryGetValue**(`key`: string): *T*

*Defined in [src/types/dictionary/dictionary.ts:102](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/dictionary/dictionary.ts#L102)*

try to get a Value in the Dictionary

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *T*
