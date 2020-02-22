---
id: "_types_datetime_date_time_.datetime"
title: "DateTime"
sidebar_label: "DateTime"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["types/datetime/date.time"](../modules/_types_datetime_date_time_.md) › [DateTime](_types_datetime_date_time_.datetime.md)

represent a DateTime DataType

## Hierarchy

* **DateTime**

## Index

### Constructors

* [constructor](_types_datetime_date_time_.datetime.md#constructor)

### Properties

* [_date](_types_datetime_date_time_.datetime.md#private-_date)

### Accessors

* [Date](_types_datetime_date_time_.datetime.md#date)
* [Day](_types_datetime_date_time_.datetime.md#day)
* [DayOfWeek](_types_datetime_date_time_.datetime.md#dayofweek)
* [DayOfYear](_types_datetime_date_time_.datetime.md#dayofyear)
* [DaysInMonth](_types_datetime_date_time_.datetime.md#daysinmonth)
* [DaysInYear](_types_datetime_date_time_.datetime.md#daysinyear)
* [Hour](_types_datetime_date_time_.datetime.md#hour)
* [Millisecond](_types_datetime_date_time_.datetime.md#millisecond)
* [Minute](_types_datetime_date_time_.datetime.md#minute)
* [Month](_types_datetime_date_time_.datetime.md#month)
* [Second](_types_datetime_date_time_.datetime.md#second)
* [TimeOfDay](_types_datetime_date_time_.datetime.md#timeofday)
* [UTC](_types_datetime_date_time_.datetime.md#utc)
* [UTCOffsetMinutes](_types_datetime_date_time_.datetime.md#utcoffsetminutes)
* [Valid](_types_datetime_date_time_.datetime.md#valid)
* [Year](_types_datetime_date_time_.datetime.md#year)
* [YearQuarter](_types_datetime_date_time_.datetime.md#yearquarter)
* [YearWeekNumber](_types_datetime_date_time_.datetime.md#yearweeknumber)
* [Zone](_types_datetime_date_time_.datetime.md#zone)

### Methods

* [Add](_types_datetime_date_time_.datetime.md#add)
* [AddDays](_types_datetime_date_time_.datetime.md#adddays)
* [AddHours](_types_datetime_date_time_.datetime.md#addhours)
* [AddMilliseconds](_types_datetime_date_time_.datetime.md#addmilliseconds)
* [AddMinutes](_types_datetime_date_time_.datetime.md#addminutes)
* [AddMonths](_types_datetime_date_time_.datetime.md#addmonths)
* [AddSeconds](_types_datetime_date_time_.datetime.md#addseconds)
* [AddYears](_types_datetime_date_time_.datetime.md#addyears)
* [Equals](_types_datetime_date_time_.datetime.md#equals)
* [IsAfter](_types_datetime_date_time_.datetime.md#isafter)
* [IsBefore](_types_datetime_date_time_.datetime.md#isbefore)
* [IsDaylightSavingTime](_types_datetime_date_time_.datetime.md#isdaylightsavingtime)
* [Subtract](_types_datetime_date_time_.datetime.md#subtract)
* [ToString](_types_datetime_date_time_.datetime.md#tostring)
* [ToZone](_types_datetime_date_time_.datetime.md#tozone)
* [FromISOString](_types_datetime_date_time_.datetime.md#static-fromisostring)
* [FromJavascriptDate](_types_datetime_date_time_.datetime.md#static-fromjavascriptdate)
* [FromLuxon](_types_datetime_date_time_.datetime.md#static-fromluxon)
* [FromMilliseconds](_types_datetime_date_time_.datetime.md#static-frommilliseconds)

## Constructors

###  constructor

\+ **new DateTime**(`zone?`: string, `year?`: number, `month?`: number, `day?`: number, `hour?`: number, `minute?`: number, `second?`: number, `millisecond?`: number, `keepTimeZone`: boolean): *[DateTime](_types_datetime_date_time_.datetime.md)*

*Defined in [src/types/datetime/date.time.ts:178](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L178)*

create a new DateTime

**`example`** 
// create a date in Europe Time Zone 2019-01-01 01:00:00.000
new DateTime('Europe/Berlin', 2019, 1, 1, 1, 0, 0, 0);
new DateTime('Europe/Berlin', 2019, 1, 1);
// create a date in Europe Time Zone 2019-01-01 00:00:00.000
new DateTime('Europe/Berlin', 2019, 1, 1, null, null, null, null, true);

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`zone?` | string | - | the dates time zone |
`year?` | number | - | the year of the date |
`month?` | number | - | the month of the date |
`day?` | number | - | the day of the date |
`hour?` | number | - | the hours of the date |
`minute?` | number | - | the minutes of the date |
`second?` | number | - | the seconds of the date |
`millisecond?` | number | - | the milliseconds of the date |
`keepTimeZone` | boolean | false | not convert the given date to the given time zone  |

**Returns:** *[DateTime](_types_datetime_date_time_.datetime.md)*

## Properties

### `Private` _date

• **_date**: *DateTime‹›* = LuxonDateTime.utc()

*Defined in [src/types/datetime/date.time.ts:34](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L34)*

## Accessors

###  Date

• **get Date**(): *[DateTime](_types_datetime_date_time_.datetime.md)*

*Defined in [src/types/datetime/date.time.ts:162](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L162)*

the Date without the Time

**Returns:** *[DateTime](_types_datetime_date_time_.datetime.md)*

___

###  Day

• **get Day**(): *number*

*Defined in [src/types/datetime/date.time.ts:53](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L53)*

Day of the Date in Month

**Returns:** *number*

___

###  DayOfWeek

• **get DayOfWeek**(): *number*

*Defined in [src/types/datetime/date.time.ts:119](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L119)*

the Weekday of the DateTime

**Returns:** *number*

___

###  DayOfYear

• **get DayOfYear**(): *number*

*Defined in [src/types/datetime/date.time.ts:126](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L126)*

the Day in the Year of the DateTime

**Returns:** *number*

___

###  DaysInMonth

• **get DaysInMonth**(): *number*

*Defined in [src/types/datetime/date.time.ts:140](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L140)*

the Number of Days in the Month of the DateTime

**Returns:** *number*

___

###  DaysInYear

• **get DaysInYear**(): *number*

*Defined in [src/types/datetime/date.time.ts:133](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L133)*

the Number of the Days in the DateTime Year

**Returns:** *number*

___

###  Hour

• **get Hour**(): *number*

*Defined in [src/types/datetime/date.time.ts:60](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L60)*

Hour of the Day

**Returns:** *number*

___

###  Millisecond

• **get Millisecond**(): *number*

*Defined in [src/types/datetime/date.time.ts:81](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L81)*

Millisecond of the Day

**Returns:** *number*

___

###  Minute

• **get Minute**(): *number*

*Defined in [src/types/datetime/date.time.ts:67](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L67)*

Minute of the Day

**Returns:** *number*

___

###  Month

• **get Month**(): *number*

*Defined in [src/types/datetime/date.time.ts:46](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L46)*

Month of the Date

**Returns:** *number*

___

###  Second

• **get Second**(): *number*

*Defined in [src/types/datetime/date.time.ts:74](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L74)*

Second of the Day

**Returns:** *number*

___

###  TimeOfDay

• **get TimeOfDay**(): *[TimeSpan](_types_datetime_time_span_.timespan.md)*

*Defined in [src/types/datetime/date.time.ts:169](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L169)*

the Time of the Day

**Returns:** *[TimeSpan](_types_datetime_time_span_.timespan.md)*

___

###  UTC

• **get UTC**(): *[DateTime](_types_datetime_date_time_.datetime.md)*

*Defined in [src/types/datetime/date.time.ts:88](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L88)*

get the DateTime as UTC

**Returns:** *[DateTime](_types_datetime_date_time_.datetime.md)*

___

###  UTCOffsetMinutes

• **get UTCOffsetMinutes**(): *number*

*Defined in [src/types/datetime/date.time.ts:105](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L105)*

the offset to UTC Timezone in Minutes

**Returns:** *number*

___

###  Valid

• **get Valid**(): *boolean*

*Defined in [src/types/datetime/date.time.ts:176](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L176)*

check if the DateTime is a valid DateTime

**Returns:** *boolean*

___

###  Year

• **get Year**(): *number*

*Defined in [src/types/datetime/date.time.ts:39](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L39)*

Year of the Date

**Returns:** *number*

___

###  YearQuarter

• **get YearQuarter**(): *number*

*Defined in [src/types/datetime/date.time.ts:148](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L148)*

the Quarter of the Year of the DateTime

**Returns:** *number*

___

###  YearWeekNumber

• **get YearWeekNumber**(): *number*

*Defined in [src/types/datetime/date.time.ts:155](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L155)*

the Week Number of the Year of DateTime

**Returns:** *number*

___

###  Zone

• **get Zone**(): *string*

*Defined in [src/types/datetime/date.time.ts:112](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L112)*

the current Timezone Name

**Returns:** *string*

## Methods

###  Add

▸ **Add**(`dt`: [DateTime](_types_datetime_date_time_.datetime.md)): *[DateTime](_types_datetime_date_time_.datetime.md)*

*Defined in [src/types/datetime/date.time.ts:354](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L354)*

add a DateTime to this DateTime

**`example`** 
// returns 4038-02-03 23:00:00.000
DateTime.FromISOString('2019-01-01T00:00:00').Add(DateTime.FromISOString('2019-01-02T23:00:00'));

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dt` | [DateTime](_types_datetime_date_time_.datetime.md) | the DateTime to add on this DateTime  |

**Returns:** *[DateTime](_types_datetime_date_time_.datetime.md)*

___

###  AddDays

▸ **AddDays**(`days`: number): *[DateTime](_types_datetime_date_time_.datetime.md)*

*Defined in [src/types/datetime/date.time.ts:441](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L441)*

add a number of Days to this DateTime

**`example`** 
// returns 2019-01-03 00:00:00.000
DateTime.FromISOString('2019-01-01T00:00:00').AddDays(2);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`days` | number | the number of days to add  |

**Returns:** *[DateTime](_types_datetime_date_time_.datetime.md)*

___

###  AddHours

▸ **AddHours**(`hours`: number): *[DateTime](_types_datetime_date_time_.datetime.md)*

*Defined in [src/types/datetime/date.time.ts:455](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L455)*

add a number of Hours to this DateTime

**`example`** 
// returns 2019-01-01 01:00:00.000
DateTime.FromISOString('2019-01-01T00:00:00').AddHours(1);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`hours` | number | the number of hours to add  |

**Returns:** *[DateTime](_types_datetime_date_time_.datetime.md)*

___

###  AddMilliseconds

▸ **AddMilliseconds**(`milliseconds`: number): *[DateTime](_types_datetime_date_time_.datetime.md)*

*Defined in [src/types/datetime/date.time.ts:497](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L497)*

add a number of Milliseconds to this DateTime

**`example`** 
// returns 2019-01-01 00:00:00.001
DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(1);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`milliseconds` | number | the number of milliseconds to add  |

**Returns:** *[DateTime](_types_datetime_date_time_.datetime.md)*

___

###  AddMinutes

▸ **AddMinutes**(`minutes`: number): *[DateTime](_types_datetime_date_time_.datetime.md)*

*Defined in [src/types/datetime/date.time.ts:469](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L469)*

add a number of Minutes to this DateTime

**`example`** 
// returns 2019-01-01 00:01:00.000
DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(1);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`minutes` | number | the number of minutes to add  |

**Returns:** *[DateTime](_types_datetime_date_time_.datetime.md)*

___

###  AddMonths

▸ **AddMonths**(`months`: number): *[DateTime](_types_datetime_date_time_.datetime.md)*

*Defined in [src/types/datetime/date.time.ts:427](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L427)*

add a number of Months to this DateTime

**`example`** 
// returns 2019-03-01 00:00:00.000
DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(2);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`months` | number | the number of months to add  |

**Returns:** *[DateTime](_types_datetime_date_time_.datetime.md)*

___

###  AddSeconds

▸ **AddSeconds**(`seconds`: number): *[DateTime](_types_datetime_date_time_.datetime.md)*

*Defined in [src/types/datetime/date.time.ts:483](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L483)*

add a number of Seconds to this DateTime

**`example`** 
// returns 2019-01-01 00:00:01.000
DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(1);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`seconds` | number | the number of seconds to add  |

**Returns:** *[DateTime](_types_datetime_date_time_.datetime.md)*

___

###  AddYears

▸ **AddYears**(`years`: number): *[DateTime](_types_datetime_date_time_.datetime.md)*

*Defined in [src/types/datetime/date.time.ts:413](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L413)*

add a number of Years to this DateTime

**`example`** 
// returns 2021-01-01 00:00:00.000
DateTime.FromISOString('2019-01-01T00:00:00').AddYears(2);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`years` | number | the number of years to add  |

**Returns:** *[DateTime](_types_datetime_date_time_.datetime.md)*

___

###  Equals

▸ **Equals**(`dt`: [DateTime](_types_datetime_date_time_.datetime.md)): *boolean*

*Defined in [src/types/datetime/date.time.ts:378](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L378)*

check if the DateTime equals this DateTime

**`example`** 
// returns true
DateTime.FromISOString('2019-02-02T02:00:00').Equals(DateTime.FromISOString('2019-02-02T02:00:00'));
// returns false
DateTime.FromISOString('2019-02-02T02:00:00').Equals(DateTime.FromISOString('2019-02-02T03:00:00'));

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dt` | [DateTime](_types_datetime_date_time_.datetime.md) | the DateTime to compare with this DateTime  |

**Returns:** *boolean*

___

###  IsAfter

▸ **IsAfter**(`dt`: [DateTime](_types_datetime_date_time_.datetime.md)): *boolean*

*Defined in [src/types/datetime/date.time.ts:528](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L528)*

is this DateTime after

**`example`** 
// returns true
DateTime.FromISOString('2019-02-02T02:00:00').IsAfter(DateTime.FromISOString('2019-02-01T02:00:00'));
// returns false
DateTime.FromISOString('2019-02-02T02:00:00').IsAfter(DateTime.FromISOString('2019-02-03T02:00:00'));

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dt` | [DateTime](_types_datetime_date_time_.datetime.md) | the DateTime to compare with this DateTime  |

**Returns:** *boolean*

___

###  IsBefore

▸ **IsBefore**(`dt`: [DateTime](_types_datetime_date_time_.datetime.md)): *boolean*

*Defined in [src/types/datetime/date.time.ts:513](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L513)*

is this DateTime before

**`example`** 
// returns true
DateTime.FromISOString('2019-02-02T02:00:00').IsBefore(DateTime.FromISOString('2019-02-03T02:00:00'));
// returns false
DateTime.FromISOString('2019-02-02T02:00:00').IsBefore(DateTime.FromISOString('2019-02-02T02:00:00'));

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dt` | [DateTime](_types_datetime_date_time_.datetime.md) | the DateTime to compare with this DateTime  |

**Returns:** *boolean*

___

###  IsDaylightSavingTime

▸ **IsDaylightSavingTime**(): *boolean*

*Defined in [src/types/datetime/date.time.ts:543](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L543)*

if the Current DateTime in Daylight Saving Time

**`example`** 
// returns true
DateTime.FromISOString('2019-06-02T02:00:00', 'Europe/Berlin').IsDaylightSavingTime();
// returns false
DateTime.FromISOString('2019-11-02T02:00:00', 'Europe/Berlin').IsDaylightSavingTime();
DateTime.FromISOString('2019-06-02T02:00:00', 'UTC').IsDaylightSavingTime();
DateTime.FromISOString('2019-11-02T02:00:00', 'UTC').IsDaylightSavingTime();

**Returns:** *boolean*

___

###  Subtract

▸ **Subtract**(`dt`: [DateTime](_types_datetime_date_time_.datetime.md)): *[DateTime](_types_datetime_date_time_.datetime.md)*

*Defined in [src/types/datetime/date.time.ts:391](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L391)*

subtract DateTime from this DateTime

**`example`** 
// returns 2019-01-01 01:00:00.000
DateTime.FromISOString('2019-02-02T02:00:00').Subtract(DateTime.FromISOString('0000-01-01T01:00:00'));

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dt` | [DateTime](_types_datetime_date_time_.datetime.md) | the DateTime to subtract on this DateTime  |

**Returns:** *[DateTime](_types_datetime_date_time_.datetime.md)*

___

###  ToString

▸ **ToString**(`fmt?`: string): *string*

*Defined in [src/types/datetime/date.time.ts:560](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L560)*

return the DateTime as a string

you can define a Format string to format the DateTime

**`example`** 
// returns "2019-01-01 12:23:54"
DateTime.FromISOString('2019-01-01T12:23:54').ToString();
// returns "2019"
DateTime.FromISOString('2019-01-01T12:23:54').ToString('yyyy');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fmt?` | string | the string format  |

**Returns:** *string*

___

###  ToZone

▸ **ToZone**(`zone`: string, `keepTimeZone`: boolean): *[DateTime](_types_datetime_date_time_.datetime.md)*

*Defined in [src/types/datetime/date.time.ts:332](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L332)*

get the DateTime in a specific Timezone

**`example`** 
const TARGET_ZONE = 'Europe/Berlin';
const dateEurope = new DateTime('Europe/Berlin', 2019, 1, 1, 1);
const dateUtc = new DateTime('UTC', 2019, 1, 1, 1);
// returns 2019-01-01 01:00:00.000 in Europe/Berlin Time Zone
dateEurope.ToZone(TARGET_ZONE);
dateEurope.ToZone(TARGET_ZONE, true);
dateUtc.ToZone(TARGET_ZONE, true);
// returns 2019-01-01 02:00:00.000 in Europe/Berlin Time Zone
dateUtc.ToZone(TARGET_ZONE);

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`zone` | string | - | the time zone to convert this time |
`keepTimeZone` | boolean | false | not convert the time only set the new time zone  |

**Returns:** *[DateTime](_types_datetime_date_time_.datetime.md)*

___

### `Static` FromISOString

▸ **FromISOString**(`isoStr`: string, `zone?`: string): *[DateTime](_types_datetime_date_time_.datetime.md)*

*Defined in [src/types/datetime/date.time.ts:280](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L280)*

create DateTime from ISO string

you have to specify the Timezone or UTC was taken!

**`example`** 
// returns DateTime 2019-01-01 01:00:00.000 in UTC Time Zone
DateTime.FromISOString('2019-01-01T01:00:00.000');
// returns DateTime 2019-01-01 01:00:00.000 in Europe/Berlin Time Zone
DateTime.FromISOString('2019-01-01T01:00:00.000', 'Europe/Berlin');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isoStr` | string | the iso date time string |
`zone?` | string | the time zone to use  |

**Returns:** *[DateTime](_types_datetime_date_time_.datetime.md)*

___

### `Static` FromJavascriptDate

▸ **FromJavascriptDate**(`date`: Date, `zone?`: string): *[DateTime](_types_datetime_date_time_.datetime.md)*

*Defined in [src/types/datetime/date.time.ts:255](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L255)*

create a DateTime Type from a Javascript Date Object

you have to specify the Timezone or UTC was taken!

**`example`** 
// returns DateTime 2019-01-01 01:00:00.000 in UTC Time Zone
DateTime.FromJavascriptDate(new Date(Date.UTC(2019,0,1,1,0,0)));
// returns DateTime 2019-01-01 01:00:00.000 in Europe/Berlin Time Zone
DateTime.FromJavascriptDate(new Date(Date.UTC(2019,0,1,1,0,0), 'Europe/Berlin'));

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`date` | Date | the javascript date object |
`zone?` | string | the time zone to use  |

**Returns:** *[DateTime](_types_datetime_date_time_.datetime.md)*

___

### `Static` FromLuxon

▸ **FromLuxon**(`luxonDate`: LuxonDateTime): *[DateTime](_types_datetime_date_time_.datetime.md)*

*Defined in [src/types/datetime/date.time.ts:229](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L229)*

create DateTime from a Luxon Date Object

uses the Timezone from the Luxon Object

**`example`** 
// returns the current time in utc
const vgl = LuxonDateTime.utc();
DateTime.FromLuxon(vgl);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`luxonDate` | LuxonDateTime | the luxon datetime object instance  |

**Returns:** *[DateTime](_types_datetime_date_time_.datetime.md)*

___

### `Static` FromMilliseconds

▸ **FromMilliseconds**(`milliseconds`: number, `zone?`: string): *[DateTime](_types_datetime_date_time_.datetime.md)*

*Defined in [src/types/datetime/date.time.ts:304](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/datetime/date.time.ts#L304)*

create DateTime from Milliseconds

**`example`** 
const vgl = LuxonDateTime.utc();
// returns the current date time in UTC Time Zone
DateTime.FromMilliseconds(vgl.toMillis());
// returns the current date time in Europe/Berlin Time Zone
DateTime.FromMilliseconds(vgl.toMillis(), 'Europe/Berlin');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`milliseconds` | number | the total milliseconds since 1970-01-01 00:00:00.000 |
`zone?` | string | the time zone to use  |

**Returns:** *[DateTime](_types_datetime_date_time_.datetime.md)*
