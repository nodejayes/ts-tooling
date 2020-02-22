---
id: "_utils_stopwatch_.stopwatch"
title: "StopWatch"
sidebar_label: "StopWatch"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["utils/stopwatch"](../modules/_utils_stopwatch_.md) › [StopWatch](_utils_stopwatch_.stopwatch.md)

measure the Time between Code Lines in ms

the StopWatch starts when a new Instance was created and can give the Elapsed ms when ElapsedMs was called.

measure multiple Times is also possible with SectionStart and SectionElapsedMs

## Hierarchy

* **StopWatch**

## Index

### Constructors

* [constructor](_utils_stopwatch_.stopwatch.md#constructor)

### Properties

* [_isPause](_utils_stopwatch_.stopwatch.md#private-_ispause)
* [_measures](_utils_stopwatch_.stopwatch.md#private-_measures)
* [_multipleIsPause](_utils_stopwatch_.stopwatch.md#private-_multipleispause)
* [_multipleMeasures](_utils_stopwatch_.stopwatch.md#private-_multiplemeasures)
* [_multipleTimes](_utils_stopwatch_.stopwatch.md#private-_multipletimes)
* [_time](_utils_stopwatch_.stopwatch.md#private-_time)

### Accessors

* [IsPause](_utils_stopwatch_.stopwatch.md#ispause)

### Methods

* [ElapsedMs](_utils_stopwatch_.stopwatch.md#elapsedms)
* [IsSectionPause](_utils_stopwatch_.stopwatch.md#issectionpause)
* [Pause](_utils_stopwatch_.stopwatch.md#pause)
* [Resume](_utils_stopwatch_.stopwatch.md#resume)
* [SectionElapsedMs](_utils_stopwatch_.stopwatch.md#sectionelapsedms)
* [SectionPause](_utils_stopwatch_.stopwatch.md#sectionpause)
* [SectionResume](_utils_stopwatch_.stopwatch.md#sectionresume)
* [SectionStart](_utils_stopwatch_.stopwatch.md#sectionstart)
* [getMultipleTimeDiff](_utils_stopwatch_.stopwatch.md#private-getmultipletimediff)
* [getTimeDiff](_utils_stopwatch_.stopwatch.md#private-gettimediff)
* [getTimestamp](_utils_stopwatch_.stopwatch.md#private-gettimestamp)
* [isBrowser](_utils_stopwatch_.stopwatch.md#private-isbrowser)

## Constructors

###  constructor

\+ **new StopWatch**(): *[StopWatch](_utils_stopwatch_.stopwatch.md)*

*Defined in [src/utils/stopwatch.ts:17](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/stopwatch.ts#L17)*

create a new StopWatch Instance at this Time the StopWatch was started

**`example`** 
const watch = new StopWatch();
// returns the elapsed Ms from construction and this Line
watch.ElapsedMs();

**Returns:** *[StopWatch](_utils_stopwatch_.stopwatch.md)*

## Properties

### `Private` _isPause

• **_isPause**: *boolean* = false

*Defined in [src/utils/stopwatch.ts:15](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/stopwatch.ts#L15)*

___

### `Private` _measures

• **_measures**: *number[]* = []

*Defined in [src/utils/stopwatch.ts:14](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/stopwatch.ts#L14)*

___

### `Private` _multipleIsPause

• **_multipleIsPause**: *object*

*Defined in [src/utils/stopwatch.ts:17](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/stopwatch.ts#L17)*

#### Type declaration:

* \[ **key**: *string*\]: boolean

___

### `Private` _multipleMeasures

• **_multipleMeasures**: *object*

*Defined in [src/utils/stopwatch.ts:16](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/stopwatch.ts#L16)*

#### Type declaration:

* \[ **key**: *string*\]: number[]

___

### `Private` _multipleTimes

• **_multipleTimes**: *object*

*Defined in [src/utils/stopwatch.ts:13](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/stopwatch.ts#L13)*

#### Type declaration:

* \[ **key**: *string*\]: number | [number, number]

___

### `Private` _time

• **_time**: *number | [number, number]*

*Defined in [src/utils/stopwatch.ts:12](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/stopwatch.ts#L12)*

## Accessors

###  IsPause

• **get IsPause**(): *boolean*

*Defined in [src/utils/stopwatch.ts:83](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/stopwatch.ts#L83)*

if the current StopWatch in pause mode

**`example`** 
const sw = new StopWatch();
// returns false
sw.IsPause();
sw.Pause();
// returns true
sw.IsPause();

**Returns:** *boolean*

## Methods

###  ElapsedMs

▸ **ElapsedMs**(): *number*

*Defined in [src/utils/stopwatch.ts:179](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/stopwatch.ts#L179)*

gets the Elapsed Time in ms from the StopWatch

**`example`** 
const sw = StopWatch();
// get the elapsed time in ms from StopWatch constructor
sw.ElapsedMs();

**Returns:** *number*

___

###  IsSectionPause

▸ **IsSectionPause**(`key`: string): *boolean*

*Defined in [src/utils/stopwatch.ts:68](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/stopwatch.ts#L68)*

checks if a Section was paused

**`example`** 
const sw = new StopWatch();
sw.SectionStart('sw1');
// returns false
sw.IsSectionPause('sw1');
sw.SectionPause('sw1');
// returns true
sw.IsSectionPause('sw1');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | the key that indicates the Section  |

**Returns:** *boolean*

___

###  Pause

▸ **Pause**(): *void*

*Defined in [src/utils/stopwatch.ts:152](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/stopwatch.ts#L152)*

stops the StopWatch from measure Time

**`example`** 
const sw = new StopWatch();
// pause the StopWatch
sw.Pause();

**Returns:** *void*

___

###  Resume

▸ **Resume**(): *void*

*Defined in [src/utils/stopwatch.ts:166](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/stopwatch.ts#L166)*

starts the StopWatch at the Point from the Last Pause

**`example`** 
const sw = new StopWatch();
sw.Pause();
// resume the paused StopWatch
sw.Resume();

**Returns:** *void*

___

###  SectionElapsedMs

▸ **SectionElapsedMs**(`key`: string): *number*

*Defined in [src/utils/stopwatch.ts:98](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/stopwatch.ts#L98)*

get the Time in ms Elapsed by the Section matches the given key

**`example`** 
const sw = new StopWatch();
sw.SectionStart('sw1');
// returns the elapsed milliseconds since start of section sw1
sw.SectionElapsedMs('sw1');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | the key that indicates the Section  |

**Returns:** *number*

___

###  SectionPause

▸ **SectionPause**(`key`: string): *void*

*Defined in [src/utils/stopwatch.ts:122](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/stopwatch.ts#L122)*

same as Pause only for Sections

**`example`** 
const sw = new StopWatch();
sw.SectionStart('sw1');
// pause the sw1 section
sw.SectionPause('sw1');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | the key that indicates the Section  |

**Returns:** *void*

___

###  SectionResume

▸ **SectionResume**(`key`: string): *void*

*Defined in [src/utils/stopwatch.ts:139](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/stopwatch.ts#L139)*

same as Resume only for Sections

**`example`** 
const sw = new StopWatch();
sw.SectionStart('sw1');
sw.SectionPause('sw1');
// restart the sw1 section
sw.SectionResume('sw1');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | the key that indicates the Section  |

**Returns:** *void*

___

###  SectionStart

▸ **SectionStart**(`key`: string): *void*

*Defined in [src/utils/stopwatch.ts:48](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/stopwatch.ts#L48)*

starts the StopWatch for a specific Section marks by the given key

**`example`** 
const watch = new StopWatch();
watch.SectionStart('A');
// logs the Time between SectionStart('A') and SectionElapsedMs('A')
watch.SectionElapsedMs('A');
watch.SectionStart('B');
// logs the Time between SectionStart('B') and SectionElapsedMs('B')
watch.SectionElapsedMs('B');
// logs the Time between SectionStart('A') and this Line with SectionStart('B') and SectionElapsedMs('B')
watch.SectionElapsedMs('A');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | the key that indicates the Section  |

**Returns:** *void*

___

### `Private` getMultipleTimeDiff

▸ **getMultipleTimeDiff**(`key`: string): *number*

*Defined in [src/utils/stopwatch.ts:206](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/stopwatch.ts#L206)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *number*

___

### `Private` getTimeDiff

▸ **getTimeDiff**(): *number*

*Defined in [src/utils/stopwatch.ts:196](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/stopwatch.ts#L196)*

**Returns:** *number*

___

### `Private` getTimestamp

▸ **getTimestamp**(): *number | [number, number]*

*Defined in [src/utils/stopwatch.ts:189](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/stopwatch.ts#L189)*

**Returns:** *number | [number, number]*

___

### `Private` isBrowser

▸ **isBrowser**(): *boolean*

*Defined in [src/utils/stopwatch.ts:219](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/stopwatch.ts#L219)*

**Returns:** *boolean*
