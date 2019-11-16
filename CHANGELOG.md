### 2.1.0 (not released)

* add Byte Type
* add ByteStream to read and Write Bytes
* add more Documentation

### 2.0.0

* Refactor Base Types to use native Javascript Types
* Increment/Decrement not mutate the this Instance only returns a new Instance

### 1.2.0

Features:

* Reactive Store
* Increment/Decrement Integer and Double
* add List Reduce Function
* add a Chars Concat and Join Function
* refactor Event Handler with rxjs Subscription
* add IsEmpty check for Chars
* add rxjs as Dependency
* ZERO Constant for Integer and Double
* IsEmpty Check for List
* Any Check for List

Bugfixes:

* fix Zone Check in DateTime
* fix missing generic Type
* add missing List Type on Chars Words Function

### 1.1.0

* add StopWatch
* fix Javascript Date conversion
* add travis ci and coveralls
* add some Project Information's

### 1.0.16

* invoke EventHandler async

### 1.0.15

* add Event Handler Unsubscribe

### 1.0.14

* fix ReplaceAll with empty string generates null values
* null or undefined Chars is a empty string
* change ContainsCount
* Split dont return null or empty values

### 1.0.13

* fix TextBetween when search not begins in string

### 1.0.12

* change LastOrDefault like FirstOrDefault
* add Guid Data Type
* add CharAt Method to Chars
* ass ContainsCount Method to Chars
* fix List Contains
* fix LowerCase and UpperCase (use javascript native one)

### 1.0.11

* FirstOrDefault in List optional Filter Method (when not defined the First Element is returned)
* add TextBetween Method to Chars returns the Text between a start or end search string
* make Split null safe

### 1.0.10

* export List Function Types
* add Find and FindAll to Dictionary

### 1.0.9

* change main entry

### 1.0.8

* clean rebuild dist folder

### 1.0.7

* move LZCompression into a static Class

### 1.0.6

* add createWithFactory Function same as create but with a Factory Function

### 1.0.5

* add create Function to create values null safe

### 1.0.4

* add Items to List when not exists
* fix Problem when returning false Values from List
* Lists are initial with empty value on construction
* AddRange now gets a List not a Raw Javascript Array

### 1.0.3

* Initial Release
