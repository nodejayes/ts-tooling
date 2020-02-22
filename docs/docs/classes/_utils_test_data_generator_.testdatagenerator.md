---
id: "_utils_test_data_generator_.testdatagenerator"
title: "TestDataGenerator"
sidebar_label: "TestDataGenerator"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["utils/test.data.generator"](../modules/_utils_test_data_generator_.md) › [TestDataGenerator](_utils_test_data_generator_.testdatagenerator.md)

create some random Objects

## Hierarchy

* **TestDataGenerator**

## Index

### Methods

* [Object](_utils_test_data_generator_.testdatagenerator.md#static-object)

## Methods

### `Static` Object

▸ **Object**(`min`: number, `max?`: number, `keySize?`: number, `valueSize?`: number): *any*

*Defined in [src/utils/test.data.generator.ts:17](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/test.data.generator.ts#L17)*

generate a random object between the min max size in bytes

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`min` | number | minimum size of the generated objects |
`max?` | number | maximum size of the generated objects |
`keySize?` | number | fix key size in bytes |
`valueSize?` | number | fix value size in bytes  |

**Returns:** *any*
