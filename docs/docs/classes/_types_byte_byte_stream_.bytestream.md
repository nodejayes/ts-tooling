---
id: "_types_byte_byte_stream_.bytestream"
title: "ByteStream"
sidebar_label: "ByteStream"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["types/byte/byte.stream"](../modules/_types_byte_byte_stream_.md) › [ByteStream](_types_byte_byte_stream_.bytestream.md)

a Stream of multiple Bytes that can hold any Byte Values
and handle Read/Write Operations

## Hierarchy

* **ByteStream**

## Index

### Properties

* [_position](_types_byte_byte_stream_.bytestream.md#private-_position)
* [_value](_types_byte_byte_stream_.bytestream.md#private-_value)

### Accessors

* [Length](_types_byte_byte_stream_.bytestream.md#length)
* [Position](_types_byte_byte_stream_.bytestream.md#position)

### Methods

* [Read](_types_byte_byte_stream_.bytestream.md#read)
* [ReadByte](_types_byte_byte_stream_.bytestream.md#readbyte)
* [ResetCursor](_types_byte_byte_stream_.bytestream.md#resetcursor)
* [SetCursor](_types_byte_byte_stream_.bytestream.md#setcursor)
* [ToString](_types_byte_byte_stream_.bytestream.md#tostring)
* [Write](_types_byte_byte_stream_.bytestream.md#write)
* [WriteByte](_types_byte_byte_stream_.bytestream.md#writebyte)
* [readByte](_types_byte_byte_stream_.bytestream.md#private-readbyte)
* [writeByte](_types_byte_byte_stream_.bytestream.md#private-writebyte)
* [FromByteString](_types_byte_byte_stream_.bytestream.md#static-frombytestring)
* [FromNumberArray](_types_byte_byte_stream_.bytestream.md#static-fromnumberarray)

## Properties

### `Private` _position

• **_position**: *number* = 0

*Defined in [src/types/byte/byte.stream.ts:9](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/byte/byte.stream.ts#L9)*

___

### `Private` _value

• **_value**: *[Byte](_types_byte_byte_.byte.md)[]* = []

*Defined in [src/types/byte/byte.stream.ts:8](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/byte/byte.stream.ts#L8)*

## Accessors

###  Length

• **get Length**(): *number*

*Defined in [src/types/byte/byte.stream.ts:36](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/byte/byte.stream.ts#L36)*

the size of the Stream

**Returns:** *number*

___

###  Position

• **get Position**(): *number*

*Defined in [src/types/byte/byte.stream.ts:43](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/byte/byte.stream.ts#L43)*

the current Position of the Read/Write Cursor in the Stream

**Returns:** *number*

## Methods

###  Read

▸ **Read**(`pos?`: number, `len?`: number): *number[]*

*Defined in [src/types/byte/byte.stream.ts:95](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/byte/byte.stream.ts#L95)*

read a Part of the Byte Stream on default the complete Stream was returned

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pos?` | number | the start position to read |
`len?` | number | the number of Bytes to read  |

**Returns:** *number[]*

___

###  ReadByte

▸ **ReadByte**(`pos?`: number): *number*

*Defined in [src/types/byte/byte.stream.ts:117](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/byte/byte.stream.ts#L117)*

read a single Byte at a specific Position of the Stream
if no Position passed the first Byte was read

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pos?` | number | the Position in the Stream of the Byte to read  |

**Returns:** *number*

___

###  ResetCursor

▸ **ResetCursor**(): *void*

*Defined in [src/types/byte/byte.stream.ts:50](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/byte/byte.stream.ts#L50)*

reset the Read/Write Cursor of the Stream

**Returns:** *void*

___

###  SetCursor

▸ **SetCursor**(`pos`: number): *void*

*Defined in [src/types/byte/byte.stream.ts:59](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/byte/byte.stream.ts#L59)*

set the Read/Write Cursor to a specific Position
if a bigger Position given the Cursor was set to the end of  the Stream

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pos` | number | the Position the Cursor was set  |

**Returns:** *void*

___

###  ToString

▸ **ToString**(): *string*

*Defined in [src/types/byte/byte.stream.ts:125](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/byte/byte.stream.ts#L125)*

get the String representation of the Byte Stream

**Returns:** *string*

___

###  Write

▸ **Write**(`value`: [Byte](_types_byte_byte_.byte.md)[]): *number*

*Defined in [src/types/byte/byte.stream.ts:75](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/byte/byte.stream.ts#L75)*

write multiple Bytes into the Byte Stream

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | [Byte](_types_byte_byte_.byte.md)[] | the Bytes to write into Stream  |

**Returns:** *number*

___

###  WriteByte

▸ **WriteByte**(`value`: [Byte](_types_byte_byte_.byte.md)): *void*

*Defined in [src/types/byte/byte.stream.ts:86](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/byte/byte.stream.ts#L86)*

write a single Byte into the Stream

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | [Byte](_types_byte_byte_.byte.md) | the Byte to write into Stream  |

**Returns:** *void*

___

### `Private` readByte

▸ **readByte**(): *[Byte](_types_byte_byte_.byte.md)*

*Defined in [src/types/byte/byte.stream.ts:134](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/byte/byte.stream.ts#L134)*

**Returns:** *[Byte](_types_byte_byte_.byte.md)*

___

### `Private` writeByte

▸ **writeByte**(`b`: [Byte](_types_byte_byte_.byte.md)): *void*

*Defined in [src/types/byte/byte.stream.ts:129](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/byte/byte.stream.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [Byte](_types_byte_byte_.byte.md) |

**Returns:** *void*

___

### `Static` FromByteString

▸ **FromByteString**(`str`: string): *[ByteStream](_types_byte_byte_stream_.bytestream.md)*

*Defined in [src/types/byte/byte.stream.ts:15](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/byte/byte.stream.ts#L15)*

create a new Byte Stream from a Byte String

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | string | the Byte String  |

**Returns:** *[ByteStream](_types_byte_byte_stream_.bytestream.md)*

___

### `Static` FromNumberArray

▸ **FromNumberArray**(`value`: number[]): *[ByteStream](_types_byte_byte_stream_.bytestream.md)*

*Defined in [src/types/byte/byte.stream.ts:27](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/byte/byte.stream.ts#L27)*

create a new ByteStream from a Array of Numbers

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number[] | the Array of Numbers  |

**Returns:** *[ByteStream](_types_byte_byte_stream_.bytestream.md)*
