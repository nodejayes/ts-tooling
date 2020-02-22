---
id: "_utils_lz_.lzcompression"
title: "LZCompression"
sidebar_label: "LZCompression"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["utils/lz"](../modules/_utils_lz_.md) › [LZCompression](_utils_lz_.lzcompression.md)

implementation of lz compression
with lz-string

## Hierarchy

* **LZCompression**

## Index

### Methods

* [Compress](_utils_lz_.lzcompression.md#static-compress)
* [Decompress](_utils_lz_.lzcompression.md#static-decompress)

## Methods

### `Static` Compress

▸ **Compress**(`data`: any): *string*

*Defined in [src/utils/lz.ts:18](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/lz.ts#L18)*

Compress any Javascript Value to a LZ String

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | any | a Javascript Value  ```typescript // compress the Object to a zipped JSON String LZCompression.Compress({"Hello":"World!"}); ```  |

**Returns:** *string*

___

### `Static` Decompress

▸ **Decompress**(`compressed`: string): *any*

*Defined in [src/utils/lz.ts:32](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/lz.ts#L32)*

Decompress a LZ String to any Javascript Value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`compressed` | string | a compressed string  ```typescript // decompress the zipped JSON String to a Object LZCompression.Compress('N4IgEgpgNlD2IC4QHVYCcoBMCEIC+QA='); ```  |

**Returns:** *any*
