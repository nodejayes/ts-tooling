---
id: "_types_number_number_factory_.numberfactory"
title: "NumberFactory"
sidebar_label: "NumberFactory"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["types/number/number.factory"](../modules/_types_number_number_factory_.md) › [NumberFactory](_types_number_number_factory_.numberfactory.md)

some Utils for Integer and Double numbers

## Hierarchy

* **NumberFactory**

## Index

### number Methods

* [NewInteger](_types_number_number_factory_.numberfactory.md#static-newinteger)
* [RandomDouble](_types_number_number_factory_.numberfactory.md#static-randomdouble)
* [RandomInteger](_types_number_number_factory_.numberfactory.md#static-randominteger)

### number Javascript Number or String that represent the new Double Methods

* [NewDouble](_types_number_number_factory_.numberfactory.md#static-newdouble)

## number Methods

### `Static` NewInteger

▸ **NewInteger**(`value`: number | string): *number*

*Defined in [src/types/number/number.factory.ts:27](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/number/number.factory.ts#L27)*

create a new Integer from the given input

**`example`** 
// returns 1
NumberFactory.NewInteger(1);
NumberFactory.NewInteger('1');
NumberFactory.NewInteger(1.5);
// returns 0
NumberFactory.NewInteger('aaaa');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number &#124; string | Javascript Number or String that represent the new Integer |

**Returns:** *number*

new integer representation of the string or number

___

### `Static` RandomDouble

▸ **RandomDouble**(`min`: number, `max`: number): *number*

*Defined in [src/types/number/number.factory.ts:88](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/number/number.factory.ts#L88)*

create Random Doubles in the min/max Border

**`example`** 
// create all Double Numbers begins with 0.0 and ends with 1.0
NumberFactory.RandomDouble(0, 1)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`min` | number | the minimum Double that can be created |
`max` | number | the maximum Double that can be created |

**Returns:** *number*

a double number between min and max

___

### `Static` RandomInteger

▸ **RandomInteger**(`min`: number, `max`: number): *number*

*Defined in [src/types/number/number.factory.ts:71](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/number/number.factory.ts#L71)*

create Random Integers in the min/max Border

**`example`** 
// creates the Javascript Numbers 1,2,3,4,5,6,7,8,9 and 10
NumberFactory.RandomInteger(1, 10);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`min` | number | the minimum Integer that can be created |
`max` | number | the maximum Integer that can be created |

**Returns:** *number*

a integer number between min and max

___

## number Javascript Number or String that represent the new Double Methods

### `Static` NewDouble

▸ **NewDouble**(`value`: number | string): *number*

*Defined in [src/types/number/number.factory.ts:50](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/number/number.factory.ts#L50)*

create a new Double number from the given input

**`example`** 
// returns 1.5
NumberFactory.NewDouble(1.5);
NumberFactory.NewDouble('1.5');
// returns 0.0
NumberFactory.NewDouble('aaa');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number &#124; string | Javascript Number or String |

**Returns:** *number*

the double number representation of the string or number input
