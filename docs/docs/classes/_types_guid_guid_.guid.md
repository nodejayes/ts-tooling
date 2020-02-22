---
id: "_types_guid_guid_.guid"
title: "Guid"
sidebar_label: "Guid"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["types/guid/guid"](../modules/_types_guid_guid_.md) › [Guid](_types_guid_guid_.guid.md)

represent the Global Uniqe Identifier

## Hierarchy

* **Guid**

## Index

### Constructors

* [constructor](_types_guid_guid_.guid.md#constructor)

### Properties

* [_value](_types_guid_guid_.guid.md#private-_value)

### Accessors

* [IsEmpty](_types_guid_guid_.guid.md#isempty)
* [Empty](_types_guid_guid_.guid.md#static-empty)

### Methods

* [Equals](_types_guid_guid_.guid.md#equals)
* [ToString](_types_guid_guid_.guid.md#tostring)
* [Validate](_types_guid_guid_.guid.md#static-validate)

## Constructors

###  constructor

\+ **new Guid**(`guid?`: string): *[Guid](_types_guid_guid_.guid.md)*

*Defined in [src/types/guid/guid.ts:125](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/guid/guid.ts#L125)*

create a new Guid

generates a new one when no guid was passed

**`example`** 
// returns a new generated Guid
new Guid();
// returns "6bcb9d2c-ae48-4310-8d56-ea7accffcc8c"
new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`guid?` | string | a new guid as string representation  |

**Returns:** *[Guid](_types_guid_guid_.guid.md)*

## Properties

### `Private` _value

• **_value**: *string*

*Defined in [src/types/guid/guid.ts:81](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/guid/guid.ts#L81)*

## Accessors

###  IsEmpty

• **get IsEmpty**(): *boolean*

*Defined in [src/types/guid/guid.ts:123](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/guid/guid.ts#L123)*

is this Guid a Empty Guid

**`example`** 
// returns true
new Guid('00000000-0000-0000-0000-000000000000').IsEmpty();
// returns false
new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c').IsEmpty();

**Returns:** *boolean*

matches the empty guid

___

### `Static` Empty

• **get Empty**(): *[Guid](_types_guid_guid_.guid.md)*

*Defined in [src/types/guid/guid.ts:92](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/guid/guid.ts#L92)*

get a empty Guid

**`example`** 
// returns "00000000-0000-0000-0000-000000000000"
Guid.Empty;

**Returns:** *[Guid](_types_guid_guid_.guid.md)*

the empty guid

## Methods

###  Equals

▸ **Equals**(`guid`: [Guid](_types_guid_guid_.guid.md) | string): *boolean*

*Defined in [src/types/guid/guid.ts:177](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/guid/guid.ts#L177)*

check if the Guid is Equal another Guid

**`example`** 
// returns true
new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c').Equals('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c');
new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c').Equals(new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c'));
// returns false
new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c').Equals('4fa89189-03b5-43f2-b184-8a42adeebfe7');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`guid` | [Guid](_types_guid_guid_.guid.md) &#124; string | the guid to check |

**Returns:** *boolean*

are the Guid´s equal or not

___

###  ToString

▸ **ToString**(): *string*

*Defined in [src/types/guid/guid.ts:160](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/guid/guid.ts#L160)*

converts the Guid to a String representation

**`example`** 
// returns "6bcb9d2c-ae48-4310-8d56-ea7accffcc8c"
new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c').ToString();

**Returns:** *string*

Guid as string

___

### `Static` Validate

▸ **Validate**(`guid`: string): *boolean*

*Defined in [src/types/guid/guid.ts:108](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/guid/guid.ts#L108)*

validate a Guid

**`example`** 
// returns true
Guid.Validate('00000000-0000-0000-0000-000000000000');
// returns false
Guid.Validate('00000000000000000000000000000000');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`guid` | string | the guid to validate |

**Returns:** *boolean*

is the given guid string valid or not
