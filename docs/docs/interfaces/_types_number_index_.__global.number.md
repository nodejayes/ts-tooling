---
id: "_types_number_index_.__global.number"
title: "Number"
sidebar_label: "Number"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["types/number/index"](../modules/_types_number_index_.md) › [__global](../modules/_types_number_index_.__global.md) › [Number](_types_number_index_.__global.number.md)

## Hierarchy

* **Number**

## Index

### Methods

* [Add](_types_number_index_.__global.number.md#optional-add)
* [Ceil](_types_number_index_.__global.number.md#optional-ceil)
* [Clamp](_types_number_index_.__global.number.md#optional-clamp)
* [DecimalPlaces](_types_number_index_.__global.number.md#optional-decimalplaces)
* [Decrement](_types_number_index_.__global.number.md#optional-decrement)
* [Divide](_types_number_index_.__global.number.md#optional-divide)
* [Equals](_types_number_index_.__global.number.md#optional-equals)
* [Floor](_types_number_index_.__global.number.md#optional-floor)
* [Increment](_types_number_index_.__global.number.md#optional-increment)
* [IsAbove](_types_number_index_.__global.number.md#optional-isabove)
* [IsBelow](_types_number_index_.__global.number.md#optional-isbelow)
* [IsInRange](_types_number_index_.__global.number.md#optional-isinrange)
* [Multiply](_types_number_index_.__global.number.md#optional-multiply)
* [Numerals](_types_number_index_.__global.number.md#optional-numerals)
* [Round](_types_number_index_.__global.number.md#optional-round)
* [Subtract](_types_number_index_.__global.number.md#optional-subtract)

## Methods

### `Optional` Add

▸ **Add**(`value`: number): *number*

*Defined in [src/types/number/index.ts:98](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/number/index.ts#L98)*

Add the current number to the given number.

**`example`** 
```
// returns 2
(1).Add(1);
// returns 3
(1).Add(1).Add(1);
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | the Number to add to the current Number  |

**Returns:** *number*

___

### `Optional` Ceil

▸ **Ceil**(`precision?`: number): *number*

*Defined in [src/types/number/index.ts:210](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/number/index.ts#L210)*

Rounding up a number

**`example`** 
// returns 5
4.006.Ceil();
// returns 6.01
6.004.Ceil(2);
// returns 6100
(6040).Ceil(-2);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`precision?` | number | Number of digits used for rounding  |

**Returns:** *number*

___

### `Optional` Clamp

▸ **Clamp**(`lower`: number, `upper`: number): *number*

*Defined in [src/types/number/index.ts:83](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/number/index.ts#L83)*

Sets the value of the number to the lower or upper limit if the number is greater or smaller than the opere or lower limit.

**`example`** 
// returns 10
(20).Clamp(1, 10);
(10).Clamp(1, 10);
// returns 9
(9).Clamp(1, 10);
// returns 1
(1).Clamp(1, 10);
(0.5).Clamp(1, 10);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lower` | number | the lower limit |
`upper` | number | the upper limit  |

**Returns:** *number*

___

### `Optional` DecimalPlaces

▸ **DecimalPlaces**(): *number*

*Defined in [src/types/number/index.ts:233](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/number/index.ts#L233)*

Number of digits after the decimal point

**`example`** 
// returns 0
(1).DecimalPlaces();
// returns 1
(1.5).DecimalPlaces();

**Returns:** *number*

___

### `Optional` Decrement

▸ **Decrement**(`step?`: number): *number*

*Defined in [src/types/number/index.ts:165](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/number/index.ts#L165)*

decreases the number by 1 or the value that was given.

**`example`** 
// returns 4
(5).Decrement();
// returns 1
(5).Decrement(4);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`step?` | number | Number to be decremented by  |

**Returns:** *number*

___

### `Optional` Divide

▸ **Divide**(`value`: number): *number*

*Defined in [src/types/number/index.ts:139](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/number/index.ts#L139)*

Divides the current number with the given number.

**`example`** 
// returns 5
(10).Divide(2);
// returns 5
(20). Divide(2).Divide(2);
// throws an Error
(10).Divide(0);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | the Number to multiply from the current Number  |

**Returns:** *number*

___

### `Optional` Equals

▸ **Equals**(`value`: number): *boolean*

*Defined in [src/types/number/index.ts:37](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/number/index.ts#L37)*

Checks if a number is equal to the current number.

**`example`** 
// returns true
(1).Equals(1)
// returns false
(1).Equals(2)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | the Number to check again the current Number  |

**Returns:** *boolean*

___

### `Optional` Floor

▸ **Floor**(`precision?`: number): *number*

*Defined in [src/types/number/index.ts:195](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/number/index.ts#L195)*

Rounding off a number

**`example`** 
// returns 4
4.006.Floor();
// returns 0.04
0.046.Floor(2);
// returns 4000
(4060).Floor(-2);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`precision?` | number | Number of digits used for rounding  |

**Returns:** *number*

___

### `Optional` Increment

▸ **Increment**(`step?`: number): *number*

*Defined in [src/types/number/index.ts:152](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/number/index.ts#L152)*

increases the number by 1 or the value that was given.

**`example`** 
// returns 2
(1).Increment();
// returns 5
(1).Increment(4);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`step?` | number | Number to be incremented by  |

**Returns:** *number*

___

### `Optional` IsAbove

▸ **IsAbove**(`value`: number): *boolean*

*Defined in [src/types/number/index.ts:51](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/number/index.ts#L51)*

Checks if a number is greater than the current number.

**`example`** 
// returns true
(1).IsAbove(0)
// returns false
(1).IsAbove(1)
(1).IsAbove(5)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | the Number to check again the current Number  |

**Returns:** *boolean*

___

### `Optional` IsBelow

▸ **IsBelow**(`value`: number): *boolean*

*Defined in [src/types/number/index.ts:65](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/number/index.ts#L65)*

Checks if a number is lower than the current number.

**`example`** 
// returns true
(1).IsBelow(5)
// returns false
(1).IsBelow(1)
(1).IsBelow(0)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | the Number to check again the current Number  |

**Returns:** *boolean*

___

### `Optional` IsInRange

▸ **IsInRange**(`lower`: number, `upper`: number): *boolean*

*Defined in [src/types/number/index.ts:24](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/number/index.ts#L24)*

Checks if a number is within 2 limits.

The limit values are included!

**`example`** 
// returns true
1.2.IsInRange(1.0, 2.0);
1.0.IsInRange(1.0, 2.0);
2.0.IsInRange(1.0, 2.0);
// returns false
5.2.IsInRange(1.0, 2.0)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lower` | number | the lower limit |
`upper` | number | the upper limit  |

**Returns:** *boolean*

___

### `Optional` Multiply

▸ **Multiply**(`value`: number): *number*

*Defined in [src/types/number/index.ts:124](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/number/index.ts#L124)*

Multiplies the current number by the given number.

**`example`** 
// returns 10
(1).Multiply(10);
// returns 20
(1).Multiply(10).Multiply(2);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | the Number to multiply from the current Number  |

**Returns:** *number*

___

### `Optional` Numerals

▸ **Numerals**(): *number*

*Defined in [src/types/number/index.ts:222](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/number/index.ts#L222)*

number of digits before the decimal point

**`example`** 
// returns 1
(1.5).Numerals();
(1).Numerals();
// returns 2
(10).Numerals();

**Returns:** *number*

___

### `Optional` Round

▸ **Round**(`precision?`: number): *number*

*Defined in [src/types/number/index.ts:180](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/number/index.ts#L180)*

Rounds a number up or down if the next digit is greater than or equal to 5.

**`example`** 
// returns 4
4.006.Round();
// returns 4.01
4.006.Round(2);
// returns 4100
(4060).Round(-2);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`precision?` | number | Number of digits used for rounding  |

**Returns:** *number*

___

### `Optional` Subtract

▸ **Subtract**(`value`: number): *number*

*Defined in [src/types/number/index.ts:111](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/number/index.ts#L111)*

Subtracts the current number with the given number.

**`example`** 
// returns 1
(2).Subtract(1);
// returns 0
(2).Subtract(1).Subtract(1);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | the Number to subtract from the current Number  |

**Returns:** *number*
