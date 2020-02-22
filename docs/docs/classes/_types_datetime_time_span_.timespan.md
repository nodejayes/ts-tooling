---
id: "_types_datetime_time_span_.timespan"
title: "TimeSpan"
sidebar_label: "TimeSpan"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["types/datetime/time.span"](../modules/_types_datetime_time_span_.md) › [TimeSpan](_types_datetime_time_span_.timespan.md)

represents a duration from milliseconds to days

## Hierarchy

* **TimeSpan**

## Index

### Constructors

* [constructor](_types_datetime_time_span_.timespan.md#constructor)

### Properties

* [_days](_types_datetime_time_span_.timespan.md#private-_days)
* [_hours](_types_datetime_time_span_.timespan.md#private-_hours)
* [_milliseconds](_types_datetime_time_span_.timespan.md#private-_milliseconds)
* [_minutes](_types_datetime_time_span_.timespan.md#private-_minutes)
* [_seconds](_types_datetime_time_span_.timespan.md#private-_seconds)
* [HoursPerDay](_types_datetime_time_span_.timespan.md#static-hoursperday)
* [MillisecondsPerDay](_types_datetime_time_span_.timespan.md#static-millisecondsperday)
* [MillisecondsPerHour](_types_datetime_time_span_.timespan.md#static-millisecondsperhour)
* [MillisecondsPerMinute](_types_datetime_time_span_.timespan.md#static-millisecondsperminute)
* [MillisecondsPerSecond](_types_datetime_time_span_.timespan.md#static-millisecondspersecond)
* [MinutesPerDay](_types_datetime_time_span_.timespan.md#static-minutesperday)
* [MinutesPerHour](_types_datetime_time_span_.timespan.md#static-minutesperhour)
* [SecondsPerDay](_types_datetime_time_span_.timespan.md#static-secondsperday)
* [SecondsPerHour](_types_datetime_time_span_.timespan.md#static-secondsperhour)
* [SecondsPerMinute](_types_datetime_time_span_.timespan.md#static-secondsperminute)

### Accessors

* [Day](_types_datetime_time_span_.timespan.md#day)
* [Hour](_types_datetime_time_span_.timespan.md#hour)
* [Millisecond](_types_datetime_time_span_.timespan.md#millisecond)
* [Minute](_types_datetime_time_span_.timespan.md#minute)
* [Second](_types_datetime_time_span_.timespan.md#second)
* [TotalDays](_types_datetime_time_span_.timespan.md#totaldays)
* [TotalHours](_types_datetime_time_span_.timespan.md#totalhours)
* [TotalMilliseconds](_types_datetime_time_span_.timespan.md#totalmilliseconds)
* [TotalMinutes](_types_datetime_time_span_.timespan.md#totalminutes)
* [TotalSeconds](_types_datetime_time_span_.timespan.md#totalseconds)
* [TotalWeeks](_types_datetime_time_span_.timespan.md#totalweeks)

### Methods

* [Add](_types_datetime_time_span_.timespan.md#add)
* [Equals](_types_datetime_time_span_.timespan.md#equals)
* [IsAfter](_types_datetime_time_span_.timespan.md#isafter)
* [IsBefore](_types_datetime_time_span_.timespan.md#isbefore)
* [Negate](_types_datetime_time_span_.timespan.md#negate)
* [Subtract](_types_datetime_time_span_.timespan.md#subtract)
* [ToString](_types_datetime_time_span_.timespan.md#tostring)
* [FromISOString](_types_datetime_time_span_.timespan.md#static-fromisostring)
* [FromJavaScriptDate](_types_datetime_time_span_.timespan.md#static-fromjavascriptdate)
* [FromLuxon](_types_datetime_time_span_.timespan.md#static-fromluxon)
* [FromMilliseconds](_types_datetime_time_span_.timespan.md#static-frommilliseconds)
* [FromMoment](_types_datetime_time_span_.timespan.md#static-frommoment)

## Constructors

###  constructor

\+ **new TimeSpan**(`hours?`: number, `minutes?`: number, `seconds?`: number, `milliseconds?`: number, `days?`: number): *[TimeSpan](_types_datetime_time_span_.timespan.md)*

*Defined in [src/types/datetime/time.span.ts:209](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L209)*

create a new TimeSpan

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hours?` | number | - |
`minutes?` | number | - |
`seconds?` | number | - |
`milliseconds?` | number | - |
`days?` | number |   |

**Returns:** *[TimeSpan](_types_datetime_time_span_.timespan.md)*

## Properties

### `Private` _days

• **_days**: *number* = 0

*Defined in [src/types/datetime/time.span.ts:67](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L67)*

___

### `Private` _hours

• **_hours**: *number* = 0

*Defined in [src/types/datetime/time.span.ts:68](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L68)*

___

### `Private` _milliseconds

• **_milliseconds**: *number* = 0

*Defined in [src/types/datetime/time.span.ts:71](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L71)*

___

### `Private` _minutes

• **_minutes**: *number* = 0

*Defined in [src/types/datetime/time.span.ts:69](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L69)*

___

### `Private` _seconds

• **_seconds**: *number* = 0

*Defined in [src/types/datetime/time.span.ts:70](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L70)*

___

### `Static` HoursPerDay

▪ **HoursPerDay**: *number* = 24

*Defined in [src/types/datetime/time.span.ts:80](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L80)*

how much Hours have one Day

___

### `Static` MillisecondsPerDay

▪ **MillisecondsPerDay**: *number* = TimeSpan.SecondsPerDay * TimeSpan.MillisecondsPerSecond

*Defined in [src/types/datetime/time.span.ts:92](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L92)*

how much Milliseconds have one Day

___

### `Static` MillisecondsPerHour

▪ **MillisecondsPerHour**: *number* = TimeSpan.SecondsPerHour * TimeSpan.MillisecondsPerSecond

*Defined in [src/types/datetime/time.span.ts:104](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L104)*

Milliseconds in one Hour

___

### `Static` MillisecondsPerMinute

▪ **MillisecondsPerMinute**: *number* = TimeSpan.SecondsPerMinute * TimeSpan.MillisecondsPerSecond

*Defined in [src/types/datetime/time.span.ts:112](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L112)*

Milliseconds in one Minute

___

### `Static` MillisecondsPerSecond

▪ **MillisecondsPerSecond**: *number* = 1000

*Defined in [src/types/datetime/time.span.ts:76](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L76)*

Milliseconds in a Second

___

### `Static` MinutesPerDay

▪ **MinutesPerDay**: *number* = TimeSpan.HoursPerDay * 60

*Defined in [src/types/datetime/time.span.ts:84](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L84)*

how much Minutes have one Day

___

### `Static` MinutesPerHour

▪ **MinutesPerHour**: *number* = 60

*Defined in [src/types/datetime/time.span.ts:96](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L96)*

Minutes in one Hour

___

### `Static` SecondsPerDay

▪ **SecondsPerDay**: *number* = TimeSpan.MinutesPerDay * 60

*Defined in [src/types/datetime/time.span.ts:88](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L88)*

how much Seconds have one Day

___

### `Static` SecondsPerHour

▪ **SecondsPerHour**: *number* = TimeSpan.MinutesPerHour * 60

*Defined in [src/types/datetime/time.span.ts:100](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L100)*

Seconds in one Hour

___

### `Static` SecondsPerMinute

▪ **SecondsPerMinute**: *number* = TimeSpan.SecondsPerHour / 60

*Defined in [src/types/datetime/time.span.ts:108](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L108)*

Seconds in one Minute

## Accessors

###  Day

• **get Day**(): *number*

*Defined in [src/types/datetime/time.span.ts:117](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L117)*

the Days of this TimeSpan

**Returns:** *number*

___

###  Hour

• **get Hour**(): *number*

*Defined in [src/types/datetime/time.span.ts:135](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L135)*

the Hour of this TimeSpan

**Returns:** *number*

___

###  Millisecond

• **get Millisecond**(): *number*

*Defined in [src/types/datetime/time.span.ts:189](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L189)*

the Millisecond of this TimeSpan

**Returns:** *number*

___

###  Minute

• **get Minute**(): *number*

*Defined in [src/types/datetime/time.span.ts:153](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L153)*

the Minute of this TimeSpan

**Returns:** *number*

___

###  Second

• **get Second**(): *number*

*Defined in [src/types/datetime/time.span.ts:171](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L171)*

the Second of this TimeSpan

**Returns:** *number*

___

###  TotalDays

• **get TotalDays**(): *number*

*Defined in [src/types/datetime/time.span.ts:124](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L124)*

the TimeSpan in Days

**Returns:** *number*

___

###  TotalHours

• **get TotalHours**(): *number*

*Defined in [src/types/datetime/time.span.ts:142](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L142)*

the TimeSpan in Hours

**Returns:** *number*

___

###  TotalMilliseconds

• **get TotalMilliseconds**(): *number*

*Defined in [src/types/datetime/time.span.ts:196](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L196)*

the TimeSpan in Milliseconds

**Returns:** *number*

___

###  TotalMinutes

• **get TotalMinutes**(): *number*

*Defined in [src/types/datetime/time.span.ts:160](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L160)*

the TimeSpan in Minutes

**Returns:** *number*

___

###  TotalSeconds

• **get TotalSeconds**(): *number*

*Defined in [src/types/datetime/time.span.ts:178](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L178)*

the TimeSpan in Seconds

**Returns:** *number*

___

###  TotalWeeks

• **get TotalWeeks**(): *number*

*Defined in [src/types/datetime/time.span.ts:207](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L207)*

get the Time Span in Weeks

**Returns:** *number*

## Methods

###  Add

▸ **Add**(`duration`: [TimeSpan](_types_datetime_time_span_.timespan.md)): *[TimeSpan](_types_datetime_time_span_.timespan.md)*

*Defined in [src/types/datetime/time.span.ts:325](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L325)*

add a TimeSpan to this TimeSpan

**Parameters:**

Name | Type |
------ | ------ |
`duration` | [TimeSpan](_types_datetime_time_span_.timespan.md) |

**Returns:** *[TimeSpan](_types_datetime_time_span_.timespan.md)*

___

###  Equals

▸ **Equals**(`duration`: [TimeSpan](_types_datetime_time_span_.timespan.md)): *boolean*

*Defined in [src/types/datetime/time.span.ts:339](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L339)*

check a TimeSpan of Equality with another TimeSpan

**Parameters:**

Name | Type |
------ | ------ |
`duration` | [TimeSpan](_types_datetime_time_span_.timespan.md) |

**Returns:** *boolean*

___

###  IsAfter

▸ **IsAfter**(`duration`: [TimeSpan](_types_datetime_time_span_.timespan.md)): *boolean*

*Defined in [src/types/datetime/time.span.ts:384](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L384)*

is the TimeSpan after this TimeSpan

**Parameters:**

Name | Type |
------ | ------ |
`duration` | [TimeSpan](_types_datetime_time_span_.timespan.md) |

**Returns:** *boolean*

___

###  IsBefore

▸ **IsBefore**(`duration`: [TimeSpan](_types_datetime_time_span_.timespan.md)): *boolean*

*Defined in [src/types/datetime/time.span.ts:375](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L375)*

is the TimeSpan before this TimeSpan

**Parameters:**

Name | Type |
------ | ------ |
`duration` | [TimeSpan](_types_datetime_time_span_.timespan.md) |

**Returns:** *boolean*

___

###  Negate

▸ **Negate**(): *[TimeSpan](_types_datetime_time_span_.timespan.md)*

*Defined in [src/types/datetime/time.span.ts:347](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L347)*

negate the current TimeSpan

**Returns:** *[TimeSpan](_types_datetime_time_span_.timespan.md)*

___

###  Subtract

▸ **Subtract**(`duration`: [TimeSpan](_types_datetime_time_span_.timespan.md)): *[TimeSpan](_types_datetime_time_span_.timespan.md)*

*Defined in [src/types/datetime/time.span.ts:361](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L361)*

subtract a TimeSpan from this TimeSpan

**Parameters:**

Name | Type |
------ | ------ |
`duration` | [TimeSpan](_types_datetime_time_span_.timespan.md) |

**Returns:** *[TimeSpan](_types_datetime_time_span_.timespan.md)*

___

###  ToString

▸ **ToString**(`fmt?`: string): *string*

*Defined in [src/types/datetime/time.span.ts:394](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L394)*

return the TimeSpan as a Chars
you can define a Format Chars to format the TimeSpan

**Parameters:**

Name | Type |
------ | ------ |
`fmt?` | string |

**Returns:** *string*

___

### `Static` FromISOString

▸ **FromISOString**(`isoStr`: string): *[TimeSpan](_types_datetime_time_span_.timespan.md)*

*Defined in [src/types/datetime/time.span.ts:291](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L291)*

create TimeSpan from ISO Chars
Format is "Day.Hour:Minute:Second Millisecond"

**Parameters:**

Name | Type |
------ | ------ |
`isoStr` | string |

**Returns:** *[TimeSpan](_types_datetime_time_span_.timespan.md)*

___

### `Static` FromJavaScriptDate

▸ **FromJavaScriptDate**(`date`: Date, `ignoreDate`: boolean): *[TimeSpan](_types_datetime_time_span_.timespan.md)*

*Defined in [src/types/datetime/time.span.ts:274](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L274)*

create a TimeSpan from a JavaScript Date

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`date` | Date | - | the JavaScript Date |
`ignoreDate` | boolean | false | ignore the Date of the Date instance  |

**Returns:** *[TimeSpan](_types_datetime_time_span_.timespan.md)*

___

### `Static` FromLuxon

▸ **FromLuxon**(`luxon`: [ILuxonDuration](../interfaces/_types_datetime_time_span_.iluxonduration.md)): *[TimeSpan](_types_datetime_time_span_.timespan.md)*

*Defined in [src/types/datetime/time.span.ts:242](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L242)*

create TimeSpan from Luxon Object

**Parameters:**

Name | Type |
------ | ------ |
`luxon` | [ILuxonDuration](../interfaces/_types_datetime_time_span_.iluxonduration.md) |

**Returns:** *[TimeSpan](_types_datetime_time_span_.timespan.md)*

___

### `Static` FromMilliseconds

▸ **FromMilliseconds**(`milliseconds`: number): *[TimeSpan](_types_datetime_time_span_.timespan.md)*

*Defined in [src/types/datetime/time.span.ts:300](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L300)*

create TimeSpan from Milliseconds

**Parameters:**

Name | Type |
------ | ------ |
`milliseconds` | number |

**Returns:** *[TimeSpan](_types_datetime_time_span_.timespan.md)*

___

### `Static` FromMoment

▸ **FromMoment**(`moment`: [IMomentInstance](../interfaces/_types_datetime_time_span_.imomentinstance.md), `ignoreDate`: boolean): *[TimeSpan](_types_datetime_time_span_.timespan.md)*

*Defined in [src/types/datetime/time.span.ts:257](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/time.span.ts#L257)*

create a new TimeSpan from a moment js instance

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`moment` | [IMomentInstance](../interfaces/_types_datetime_time_span_.imomentinstance.md) | - | the moment js instance |
`ignoreDate` | boolean | false | ignore the Date of the moment instance  |

**Returns:** *[TimeSpan](_types_datetime_time_span_.timespan.md)*
