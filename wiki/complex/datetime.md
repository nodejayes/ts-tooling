### DateTime

represent a DateTime DataType

```javascript
// create a date in Europe Time Zone 2019-01-01 01:00:00.000
new DateTime('Europe/Berlin', 2019, 1, 1, 1, 0, 0, 0);
new DateTime('Europe/Berlin', 2019, 1, 1);
// create a date in Europe Time Zone 2019-01-01 00:00:00.000
new DateTime('Europe/Berlin', 2019, 1, 1, null, null, null, null, true);
```

[<< Index](/wiki/index.md)

---

*Properties:*

| Name             | Type     | Description                                     |
|------------------|----------|-------------------------------------------------|
| Year             | number   | Year of the Date                                |
| Month            | number   | Month of the Date                               |
| Day              | number   | Day of the Date                                 |
| Hour             | number   | Hour of the Date                                |
| Minute           | number   | Minute of the Date                              |
| Second           | number   | Second of the Date                              |
| Millisecond      | number   | Millisecond of the Date                         |
| UTC              | DateTime | get the DateTime as UTC                         |
| UTCOffsetMinutes | number   | the offset to UTC Timezone in Minutes           |
| Zone             | string   | the current Timezone Name                       |
| DayOfWeek        | number   | the Weekday of the DateTime                     |
| DayOfYear        | number   | the Day in the Year of the DateTime             |
| DaysInYear       | number   | the Number of the Days in the DateTime Year     |
| DaysInMonth      | number   | the Number of Days in the Month of the DateTime |
| YearQuarter      | number   | the Quarter of the Year of the DateTime         |
| YearWeekNumber   | number   | the Week Number of the Year of DateTime         |
| Date             | DateTime | the Date without the Time                       |
| TimeOfDay        | TimeSpan | the Time of the Day                             |
| Valid            | boolean  | check if the DateTime is a valid DateTime       |

---

#### FromLuxon

create DateTime from a Luxon Date Object

uses the Timezone from the Luxon Object

    FromLuxon(luxonDate: LuxonDateTime): DateTime
    
*Parameters:*

| Name      | Type          | Description                        |
|-----------|---------------|------------------------------------|
| luxonDate | LuxonDateTime | the luxon datetime object instance |

```javascript
// returns the current time in utc
const vgl = LuxonDateTime.utc();
DateTime.FromLuxon(vgl);
```

---

#### FromJavascriptDate

create a DateTime Type from a Javascript Date Object

you have to specify the Timezone or UTC was taken!

    FromJavascriptDate(date: Date, zone?: string): DateTime
    
*Parameters:*

| Name      | Type          | Description                        |
|-----------|---------------|------------------------------------|
| date      | Date          | the javascript date object         |
| zone      | string        | the time zone to use               |

```javascript
// returns DateTime 2019-01-01 01:00:00.000 in UTC Time Zone
DateTime.FromJavascriptDate(new Date(Date.UTC(2019,0,1,1,0,0)));
// returns DateTime 2019-01-01 01:00:00.000 in Europe/Berlin Time Zone
DateTime.FromJavascriptDate(new Date(Date.UTC(2019,0,1,1,0,0), 'Europe/Berlin'));
```

---

#### FromISOString

create DateTime from ISO string

you have to specify the Timezone or UTC was taken!

    FromISOString(isoStr: string, zone?: string): DateTime

*Parameters:*

| Name      | Type          | Description                        |
|-----------|---------------|------------------------------------|
| isoStr    | string        | the iso date time string           |
| zone      | string        | the time zone to use               |

```javascript
// returns DateTime 2019-01-01 01:00:00.000 in UTC Time Zone
DateTime.FromISOString('2019-01-01T01:00:00.000');
// returns DateTime 2019-01-01 01:00:00.000 in Europe/Berlin Time Zone
DateTime.FromISOString('2019-01-01T01:00:00.000', 'Europe/Berlin');
```

---

#### FromMilliseconds

create DateTime from Milliseconds

    FromMilliseconds(milliseconds: number, zone?: string): DateTime
    
*Parameters:*

| Name         | Type          | Description                                          |
|--------------|---------------|------------------------------------------------------|
| milliseconds | number        | the total milliseconds since 1970-01-01 00:00:00.000 |
| zone         | string        | the time zone to use                                 |

```javascript
const vgl = LuxonDateTime.utc();
// returns the current date time in UTC Time Zone
DateTime.FromMilliseconds(vgl.toMillis());
// returns the current date time in Europe/Berlin Time Zone
DateTime.FromMilliseconds(vgl.toMillis(), 'Europe/Berlin');
```

---

#### ToZone

get the DateTime in a specific Timezone

    ToZone(zone: string, keepTimeZone = false): DateTime

*Parameters:*

| Name         | Type          | Description                                          |
|--------------|---------------|------------------------------------------------------|
| zone         | string        | the time zone to convert this time                   |
| keepTimeZone | boolean       | not convert the time only set the new time zone      |

```javascript
const TARGET_ZONE = 'Europe/Berlin';
const dateEurope = new DateTime('Europe/Berlin', 2019, 1, 1, 1);
const dateUtc = new DateTime('UTC', 2019, 1, 1, 1);
// returns 2019-01-01 01:00:00.000 in Europe/Berlin Time Zone
dateEurope.ToZone(TARGET_ZONE);
dateEurope.ToZone(TARGET_ZONE, true);
dateUtc.ToZone(TARGET_ZONE, true);
// returns 2019-01-01 02:00:00.000 in Europe/Berlin Time Zone
dateUtc.ToZone(TARGET_ZONE);
```

---

#### Add

add a DateTime to this DateTime

    Add(dt: DateTime): DateTime

*Parameters:*

| Name         | Type          | Description                                          |
|--------------|---------------|------------------------------------------------------|
| dt           | DateTime      | the DateTime to add on this DateTime                 |

```javascript
// returns 4038-02-03 23:00:00.000
DateTime.FromISOString('2019-01-01T00:00:00').Add(DateTime.FromISOString('2019-01-02T23:00:00'));
```

---

#### Subtract

subtract DateTime from this DateTime

    Subtract(dt: DateTime): DateTime
    
*Parameters:*

| Name         | Type          | Description                                          |
|--------------|---------------|------------------------------------------------------|
| dt           | DateTime      | the DateTime to subtract on this DateTime            |

```javascript
// returns 2019-01-01 01:00:00.000
DateTime.FromISOString('2019-02-02T02:00:00').Subtract(DateTime.FromISOString('0000-01-01T01:00:00'));
```

---

#### Equals

check if the DateTime equals this DateTime

    Equals(dt: DateTime): boolean

*Parameters:*

| Name         | Type          | Description                                          |
|--------------|---------------|------------------------------------------------------|
| dt           | DateTime      | the DateTime to compare with this DateTime           |

```javascript
// returns true
DateTime.FromISOString('2019-02-02T02:00:00').Equals(DateTime.FromISOString('2019-02-02T02:00:00'));
// returns false
DateTime.FromISOString('2019-02-02T02:00:00').Equals(DateTime.FromISOString('2019-02-02T03:00:00'));
```

---

#### AddYears

add a number of Years to this DateTime

    AddYears(years: number): DateTime
    
*Parameters:*

| Name         | Type          | Description                                          |
|--------------|---------------|------------------------------------------------------|
| years        | number        | the number of years to add                           |

```javascript
// returns 2021-01-01 00:00:00.000
DateTime.FromISOString('2019-01-01T00:00:00').AddYears(2);
```

---

#### AddMonths

add a number of Months to this DateTime

    AddMonths(months: number): DateTime

*Parameters:*

| Name         | Type          | Description                                          |
|--------------|---------------|------------------------------------------------------|
| months       | number        | the number of months to add                          |

```javascript
// returns 2019-03-01 00:00:00.000
DateTime.FromISOString('2019-01-01T00:00:00').AddMonths(2);
```
---

#### AddDays

add a number of Days to this DateTime

    AddDays(days: number): DateTime

*Parameters:*

| Name         | Type          | Description                                          |
|--------------|---------------|------------------------------------------------------|
| days         | number        | the number of days to add                            |

```javascript
// returns 2019-01-03 00:00:00.000
DateTime.FromISOString('2019-01-01T00:00:00').AddDays(2);
```

---

#### AddHours

add a number of Hours to this DateTime

    AddHours(hours: number): DateTime

*Parameters:*

| Name         | Type          | Description                                          |
|--------------|---------------|------------------------------------------------------|
| hours        | number        | the number of hours to add                           |

```javascript
// returns 2019-01-01 01:00:00.000
DateTime.FromISOString('2019-01-01T00:00:00').AddHours(1);
```

---

#### AddMinutes

add a number of Minutes to this DateTime

    AddMinutes(minutes: number): DateTime

*Parameters:*

| Name         | Type          | Description                                          |
|--------------|---------------|------------------------------------------------------|
| minutes      | number        | the number of minutes to add                         |

```javascript
// returns 2019-01-01 00:01:00.000
DateTime.FromISOString('2019-01-01T00:00:00').AddMinutes(1);
```

---

#### AddSeconds

add a number of Seconds to this DateTime

    AddSeconds(seconds: number): DateTime

*Parameters:*

| Name         | Type          | Description                                          |
|--------------|---------------|------------------------------------------------------|
| seconds      | number        | the number of seconds to add                         |

```javascript
// returns 2019-01-01 00:00:01.000
DateTime.FromISOString('2019-01-01T00:00:00').AddSeconds(1);
```

---

#### AddMilliseconds

add a number of Milliseconds to this DateTime

    AddMilliseconds(milliseconds: number): DateTime

*Parameters:*

| Name         | Type          | Description                                          |
|--------------|---------------|------------------------------------------------------|
| milliseconds | number        | the number of milliseconds to add                    |

```javascript
// returns 2019-01-01 00:00:00.001
DateTime.FromISOString('2019-01-01T00:00:00').AddMilliseconds(1);
```

---

#### IsBefore

is this DateTime before

    IsBefore(dt: DateTime): boolean
    
*Parameters:*

| Name         | Type          | Description                                          |
|--------------|---------------|------------------------------------------------------|
| dt           | DateTime      | the DateTime to compare with this DateTime           |

```javascript
// returns true
DateTime.FromISOString('2019-02-02T02:00:00').IsBefore(DateTime.FromISOString('2019-02-03T02:00:00'));
// returns false
DateTime.FromISOString('2019-02-02T02:00:00').IsBefore(DateTime.FromISOString('2019-02-02T02:00:00'));
```

---

#### IsAfter

is this DateTime after

    IsAfter(dt: DateTime): boolean

*Parameters:*

| Name         | Type          | Description                                          |
|--------------|---------------|------------------------------------------------------|
| dt           | DateTime      | the DateTime to compare with this DateTime           |

```javascript
// returns true
DateTime.FromISOString('2019-02-02T02:00:00').IsAfter(DateTime.FromISOString('2019-02-01T02:00:00'));
// returns false
DateTime.FromISOString('2019-02-02T02:00:00').IsAfter(DateTime.FromISOString('2019-02-03T02:00:00'));
```

---

#### IsDaylightSavingTime

if the Current DateTime in Daylight Saving Time

    IsDaylightSavingTime(): boolean
    
```javascript
// returns true
DateTime.FromISOString('2019-06-02T02:00:00', 'Europe/Berlin').IsDaylightSavingTime();
// returns false
DateTime.FromISOString('2019-11-02T02:00:00', 'Europe/Berlin').IsDaylightSavingTime();
DateTime.FromISOString('2019-06-02T02:00:00', 'UTC').IsDaylightSavingTime();
DateTime.FromISOString('2019-11-02T02:00:00', 'UTC').IsDaylightSavingTime();
```

---

#### ToString

return the DateTime as a string

you can define a Format string to format the DateTime

    ToString(fmt?: string): string

*Parameters:*

| Name         | Type          | Description                                          |
|--------------|---------------|------------------------------------------------------|
| fmt          | string        | the string format                                    |

```javascript
// returns "2019-01-01 12:23:54"
DateTime.FromISOString('2019-01-01T12:23:54').ToString();
// returns "2019"
DateTime.FromISOString('2019-01-01T12:23:54').ToString('yyyy');
```

---

[<< Index](/wiki/index.md)
