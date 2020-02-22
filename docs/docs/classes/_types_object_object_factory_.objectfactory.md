---
id: "_types_object_object_factory_.objectfactory"
title: "ObjectFactory"
sidebar_label: "ObjectFactory"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["types/object/object.factory"](../modules/_types_object_object_factory_.md) › [ObjectFactory](_types_object_object_factory_.objectfactory.md)

Object Utils Class to perform some Operations on Objects

## Hierarchy

* **ObjectFactory**

## Index

### Methods

* [Copy](_types_object_object_factory_.objectfactory.md#static-copy)
* [GetCircular](_types_object_object_factory_.objectfactory.md#static-getcircular)
* [IsCircular](_types_object_object_factory_.objectfactory.md#static-iscircular)
* [Merge](_types_object_object_factory_.objectfactory.md#static-merge)
* [SizeOf](_types_object_object_factory_.objectfactory.md#static-sizeof)

## Methods

### `Static` Copy

▸ **Copy**<**T**>(`instance`: T): *T*

*Defined in [src/types/object/object.factory.ts:21](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/object/object.factory.ts#L21)*

copy a Object Instance and get a new one

**`example`** 
// returns {Hello:'World!'}
ObjectFactory.Copy({Hello:'World!'});
// returns false
const obj = {Hello:'World!'};
obj === ObjectFactory.Copy(obj);

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`instance` | T | the object to copy |

**Returns:** *T*

the new Object instance

___

### `Static` GetCircular

▸ **GetCircular**(`obj`: any): *string[]*

*Defined in [src/types/object/object.factory.ts:57](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/object/object.factory.ts#L57)*

returns the Keys of self references in Objects

**`example`** 
const obj1 = {hello:'world',c:null};
const obj2 = {test:'me',c:obj1};
obj1.c = obj2;
const combined = {t1:obj1,t2:obj2,t3:null};
const obj3 = combined;
combined.t3 = obj3;
// returns ['c', 'c', 't1']
ObjectFactory.GetCircular(combined);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | any | the Object to check  |

**Returns:** *string[]*

___

### `Static` IsCircular

▸ **IsCircular**(`obj`: any): *boolean*

*Defined in [src/types/object/object.factory.ts:38](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/object/object.factory.ts#L38)*

check if the given Object has some self references

**`example`** 
const obj1 = {hello:'world'};
const obj2 = {hello:'world'};
obj2.ref = obj2;
// returns false while the Object has no self references
ObjectFactory.IsCircular(obj1);
// returns true while obj2 has a self reference on the ref Property
ObjectFactory.IsCircular(obj2);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | any | the Object to check  |

**Returns:** *boolean*

___

### `Static` Merge

▸ **Merge**<**T**>(`parent`: any, `child`: any): *T*

*Defined in [src/types/object/object.factory.ts:112](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/object/object.factory.ts#L112)*

merge the child into the parent object

**`example`** 
// returns {name:'muster',age:10,state:{active:true}}
const obj1 = {
     name:'muster',
     age:10,
};
const obj2 = {
     state:{
         active:true
     }
};
ObjectFactory.Merge(obj1, obj2);

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`parent` | any | - |
`child` | any |   |

**Returns:** *T*

___

### `Static` SizeOf

▸ **SizeOf**(`obj`: any): *number*

*Defined in [src/types/object/object.factory.ts:89](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/object/object.factory.ts#L89)*

returns the Size in Byte of a Object Instance

**`example`** 
// returns 22
ObjectFactory.SizeOf({Hello: 'World!'});

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | any | the Object to check  |

**Returns:** *number*
