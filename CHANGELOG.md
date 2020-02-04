### 2.4.8

* add a condition to the Any Method

### 2.4.7

* fix reactive store state get lost after multiple changes

### 2.4.6

* add Union By
* make interface Functions optional
* add GroupKey Method to Array

### 2.4.5

* Bugfix: Reactive Store emits to many Listeners

### 2.4.4

* more flexible Listen and Mutate in Reactive Store
    * You can Listen to a specific Sub Path in the State and Mutate the complete State and all the Sub Path Listeners was triggered

### 2.4.3

* faster Reactive Store getValue()

### 2.4.2

* smaller worker bundles

### 2.4.1

* move node and web worker to separate namespaces

### 2.4.0

* remove ToDateTime extension (trouble with third party libaries)

### 2.3.2

* add ReactiveStore DebugMode default disabled
* Array Convert accepts async Callbacks

### 2.3.1

* fix Reactive Store Listen Method

### 2.3.0

* add Join Method to Array
* add Observable getter for Reactive Store

### 2.2.2

* add IsAlpha check to String
* add Object Factory sizeof Method
* add TestDataGenerator
* add Class Validator Decorator

### 2.2.1

* fix NodeJs Bug process was renamed from Webpack so Stopwatch not works
* add Tests using the Webpack Package

### 2.2.0

* Reactive Store Wrap BehaviorSubject to prevent the User to change the Last Value and emit Values with next Function
* add ObjectFactory with Circular Detection
* own Validator Implementation reduces Bundle Size
* Fix String.ContainsCount Bug when searching empty String a Count was returned
* Fix TimeSpan.FromISOString Bug when given a TimeSpan String with Days
* add more Test Cases
* reduce code in String, StopWatch

### 2.1.3

* ReactiveStore supports mixing accessors like [''] or [""]
* add missing StringFactory to global Namespace

### 2.1.2

* load the WebWorker at construction for better performance
* update Dependencies
* add Documentation Site

### 2.1.1

* make the build smaller
* remove old scripts
* add pause function to StopWatch

### 2.1.0

* add Byte Type
* add ByteStream to read and Write Bytes
* add more Documentation
* add Class Validation based on class-validator Package
* Background Worker support for Node 12+ and Web Worker

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
