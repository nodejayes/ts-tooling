---
id: "_types_string_string_factory_.stringfactory"
title: "StringFactory"
sidebar_label: "StringFactory"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["types/string/string.factory"](../modules/_types_string_string_factory_.md) › [StringFactory](_types_string_string_factory_.stringfactory.md)

some Utils for Strings

## Hierarchy

* **StringFactory**

## Index

### string Methods

* [IsNullOrEmpty](_types_string_string_factory_.stringfactory.md#static-isnullorempty)
* [RandomAlphaString](_types_string_string_factory_.stringfactory.md#static-randomalphastring)

## string Methods

### `Static` IsNullOrEmpty

▸ **IsNullOrEmpty**(`value`: string): *boolean*

*Defined in [src/types/string/string.factory.ts:26](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/string.factory.ts#L26)*

check if a String is empty or null

**`example`** 
// is true
StringFactory.IsNullOrEmpty(undefined);
StringFactory.IsNullOrEmpty(null);
StringFactory.IsNullOrEmpty('');
// is false
StringFactory.IsNullOrEmpty('a');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | the string to check |

**Returns:** *boolean*

is the given string defined and not empty or not

___

### `Static` RandomAlphaString

▸ **RandomAlphaString**(`length`: number): *string*

*Defined in [src/types/string/string.factory.ts:44](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/string.factory.ts#L44)*

generate a Random String with given Size

use only letters a-z

**`example`** 
// returns a random string with 12 bytes length
StringFactory.RandomAlphaString(12);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`length` | number | the Size of the String |

**Returns:** *string*

a random string with letters from a-z
