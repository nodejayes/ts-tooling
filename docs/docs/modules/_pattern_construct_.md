---
id: "_pattern_construct_"
title: "pattern/construct"
sidebar_label: "pattern/construct"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["pattern/construct"](_pattern_construct_.md)

## Index

### Functions

* [create](_pattern_construct_.md#create)
* [createWithFactory](_pattern_construct_.md#createwithfactory)

## Functions

###  create

▸ **create**<**T**>(`initialValue`: T, `defaultValue?`: T): *T*

*Defined in [src/pattern/construct.ts:6](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/construct.ts#L6)*

create a Variable and when not defined returns default or null

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`initialValue` | T | - |
`defaultValue?` | T |   |

**Returns:** *T*

___

###  createWithFactory

▸ **createWithFactory**<**T**>(`factoryMethod`: Function, `args`: any[], `defaultValue?`: T): *T*

*Defined in [src/pattern/construct.ts:20](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/construct.ts#L20)*

create a Value with a Factory Method null safe with optional default value

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`factoryMethod` | Function | the Method that creates the Value |
`args` | any[] | the Factory Function Arguments |
`defaultValue?` | T |   |

**Returns:** *T*
