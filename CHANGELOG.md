### 3.7.0

* add better Benchmarks
* add Array Flat
* fix Array Copy
* optimize Performance Array Copy
* better Performance
* more Documentation

### 3.6.0

* DateRange can't construct when end DateTime is before start DateTime
* add DateRange ToString function
* add Geometry Types Point, Line, Polygon, MultiPoint, MultiLine, MultiPolygon, Feature, FeatureCollection
* add more tests

### 3.5.1

* bugfix Validator MinLength

### 3.5.0

* support async functions in CustomValidation Decorator (type fix)
* scenario in validation
* add Without Method to Array
* add more documentation and tests
* add GetValue function to the Dictionary
* TryGetValue function on Dictionary other api

### 3.4.2

* security update

### 3.4.1

* fix MaxLength and MinLength Validators

### 3.4.0

* add Freeze Method to ObjectFactory
* add ForSegment Method to Array

### 3.3.0

* add Difference Function in ObjectFactory
* add IsJavascriptDate Function to DateTime
* add custom detection strategy for Unique
* add Retry Function to the Pattern
* add EqualKeys Function to ObjectFactory

### 3.2.1

* add DateRange Class
* add Equal Method to ObjectFactory
* export VALIDATIONS

### 3.1.0

* add Arrays Chunk Function
* add WhenReady Function Execution
* add DateTime ToDate Function
* add Get to ObjectFactory
* add Set to ObjectFactory
* add Unique to Array

### 3.0.3

* bugfix export types of EventHandler

### 3.0.2

* bugfix SortBy with empty direction (default is ASC)

### 3.0.1

* improve performance of Convert
* add more Benchmarks
* add more Documentation
* add ToUnixTimeStamp at DateTime
* Reactive Store emits Subscription only when the value was changed
* add Pull Function to Array
* reactive store listen every change as flag

### 3.0.0

* pure Javascript Node Module (no bundle)
* change documentation tool
* add benchmarks

### 2.6.5

* big bundle and submodule bundles
* add testing generated bundles

### 2.6.4

* go back to webpack

### 2.6.3

* using github ci
* custom coverage generator
* remove coveralls and travis ci

### 2.6.2

* using typescript toolchain
* remove webpack

### 2.6.1

* fix Type generation
* generate typescript definitions in parallel

### 2.6.0

* merge simple Objects with ObjectFactory
* ReactiveStore state only can changed by Mutation Function (using immer)
* Array add Replace Method
* create submodules (imported all in ts-tooling)

### 2.5.2

* reduce package size

### 2.5.1

* update Documentation
* add DecimalPlaces and Numerals to number
* remove MinBy MaxBy MeanBy and SumBy (replaced by filter parameter)
* add filter Parameter to Min Max Mean and Sum
* GroupKeys named GroupKey now
* Copy Objects with Object Factory
* add Markdown Wiki (including in NPM Package too)
* move lz compression into utils
* DateTime keeps time zone on construct new DateTime (ne parameter keepTimeZone can be set to overwrite the behavior)

### 2.5.0

* update Dependencies
* add throttle Function to patterns

### 2.4.9

* generate Guid into SafeBehaviorSubject

### 2.4.8

* add a condition to the Any Method
* Insert and InsertRange make a insert not a replace

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
