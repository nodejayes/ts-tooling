---
id: "_core_object_"
title: "core/object"
sidebar_label: "core/object"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["core/object"](_core_object_.md)

## Index

### Functions

* [get](_core_object_.md#get)
* [merge](_core_object_.md#merge)
* [recursiveDeepCopy](_core_object_.md#recursivedeepcopy)
* [set](_core_object_.md#set)

## Functions

###  get

▸ **get**(`obj`: any, `key`: string): *any*

*Defined in [src/core/object.ts:40](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/object.ts#L40)*

get a Object Value from a key definition

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | any | the Object |
`key` | string | the Key definition  |

**Returns:** *any*

___

###  merge

▸ **merge**<**T**>(`master`: any, `slave`: any): *T*

*Defined in [src/core/object.ts:74](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/object.ts#L74)*

combine slave into master

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`master` | any | - |
`slave` | any |   |

**Returns:** *T*

___

###  recursiveDeepCopy

▸ **recursiveDeepCopy**(`o`: any): *any*

*Defined in [src/core/object.ts:6](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/object.ts#L6)*

deep copy a Javascript Object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`o` | any | the object to copy  |

**Returns:** *any*

___

###  set

▸ **set**(`obj`: any, `key`: string, `value`: any): *any*

*Defined in [src/core/object.ts:58](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/object.ts#L58)*

set a Object key

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | any | the Object |
`key` | string | the Key definition |
`value` | any | the Value to set  |

**Returns:** *any*
