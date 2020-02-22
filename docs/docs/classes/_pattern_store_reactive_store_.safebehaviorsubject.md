---
id: "_pattern_store_reactive_store_.safebehaviorsubject"
title: "SafeBehaviorSubject"
sidebar_label: "SafeBehaviorSubject"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["pattern/store/reactive.store"](../modules/_pattern_store_reactive_store_.md) › [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md)

## Type parameters

▪ **T**

## Hierarchy

* BehaviorSubject‹T›

  ↳ **SafeBehaviorSubject**

## Implements

* Subscribable‹T›
* SubscriptionLike

## Index

### Constructors

* [constructor](_pattern_store_reactive_store_.safebehaviorsubject.md#constructor)

### Properties

* [_isScalar](_pattern_store_reactive_store_.safebehaviorsubject.md#_isscalar)
* [closed](_pattern_store_reactive_store_.safebehaviorsubject.md#closed)
* [hasError](_pattern_store_reactive_store_.safebehaviorsubject.md#haserror)
* [isStopped](_pattern_store_reactive_store_.safebehaviorsubject.md#isstopped)
* [observers](_pattern_store_reactive_store_.safebehaviorsubject.md#observers)
* [operator](_pattern_store_reactive_store_.safebehaviorsubject.md#operator)
* [source](_pattern_store_reactive_store_.safebehaviorsubject.md#source)
* [thrownError](_pattern_store_reactive_store_.safebehaviorsubject.md#thrownerror)
* [value](_pattern_store_reactive_store_.safebehaviorsubject.md#value)
* [create](_pattern_store_reactive_store_.safebehaviorsubject.md#static-create)
* [if](_pattern_store_reactive_store_.safebehaviorsubject.md#static-if)
* [throw](_pattern_store_reactive_store_.safebehaviorsubject.md#static-throw)

### Methods

* [_subscribe](_pattern_store_reactive_store_.safebehaviorsubject.md#_subscribe)
* [_trySubscribe](_pattern_store_reactive_store_.safebehaviorsubject.md#_trysubscribe)
* [asObservable](_pattern_store_reactive_store_.safebehaviorsubject.md#asobservable)
* [complete](_pattern_store_reactive_store_.safebehaviorsubject.md#complete)
* [error](_pattern_store_reactive_store_.safebehaviorsubject.md#error)
* [forEach](_pattern_store_reactive_store_.safebehaviorsubject.md#foreach)
* [getValue](_pattern_store_reactive_store_.safebehaviorsubject.md#getvalue)
* [innerNext](_pattern_store_reactive_store_.safebehaviorsubject.md#private-innernext)
* [lift](_pattern_store_reactive_store_.safebehaviorsubject.md#lift)
* [next](_pattern_store_reactive_store_.safebehaviorsubject.md#next)
* [pipe](_pattern_store_reactive_store_.safebehaviorsubject.md#pipe)
* [subscribe](_pattern_store_reactive_store_.safebehaviorsubject.md#subscribe)
* [toPromise](_pattern_store_reactive_store_.safebehaviorsubject.md#topromise)
* [unsubscribe](_pattern_store_reactive_store_.safebehaviorsubject.md#unsubscribe)

## Constructors

###  constructor

\+ **new SafeBehaviorSubject**(`_value`: T): *[SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md)*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[constructor](_pattern_store_reactive_store_.safebehaviorsubject.md#constructor)*

*Overrides void*

Defined in node_modules/rxjs/internal/BehaviorSubject.d.ts:11

**Parameters:**

Name | Type |
------ | ------ |
`_value` | T |

**Returns:** *[SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md)*

## Properties

###  _isScalar

• **_isScalar**: *boolean*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[_isScalar](_pattern_store_reactive_store_.safebehaviorsubject.md#_isscalar)*

Defined in node_modules/rxjs/internal/Observable.d.ts:15

Internal implementation detail, do not use directly.

___

###  closed

• **closed**: *boolean*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[closed](_pattern_store_reactive_store_.safebehaviorsubject.md#closed)*

Defined in node_modules/rxjs/internal/Subject.d.ts:24

___

###  hasError

• **hasError**: *boolean*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[hasError](_pattern_store_reactive_store_.safebehaviorsubject.md#haserror)*

Defined in node_modules/rxjs/internal/Subject.d.ts:26

___

###  isStopped

• **isStopped**: *boolean*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[isStopped](_pattern_store_reactive_store_.safebehaviorsubject.md#isstopped)*

Defined in node_modules/rxjs/internal/Subject.d.ts:25

___

###  observers

• **observers**: *Observer‹T›[]*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[observers](_pattern_store_reactive_store_.safebehaviorsubject.md#observers)*

Defined in node_modules/rxjs/internal/Subject.d.ts:23

___

###  operator

• **operator**: *Operator‹any, T›*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[operator](_pattern_store_reactive_store_.safebehaviorsubject.md#operator)*

Defined in node_modules/rxjs/internal/Observable.d.ts:19

**`deprecated`** This is an internal implementation detail, do not use.

___

###  source

• **source**: *Observable‹any›*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[source](_pattern_store_reactive_store_.safebehaviorsubject.md#source)*

Defined in node_modules/rxjs/internal/Observable.d.ts:17

**`deprecated`** This is an internal implementation detail, do not use.

___

###  thrownError

• **thrownError**: *any*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[thrownError](_pattern_store_reactive_store_.safebehaviorsubject.md#thrownerror)*

Defined in node_modules/rxjs/internal/Subject.d.ts:27

___

###  value

• **value**: *T*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[value](_pattern_store_reactive_store_.safebehaviorsubject.md#value)*

Defined in node_modules/rxjs/internal/BehaviorSubject.d.ts:13

___

### `Static` create

▪ **create**: *Function*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[create](_pattern_store_reactive_store_.safebehaviorsubject.md#static-create)*

*Overrides void*

Defined in node_modules/rxjs/internal/Subject.d.ts:32

**`nocollapse`** 

**`deprecated`** use new Subject() instead

___

### `Static` if

▪ **if**: *typeof iif*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[if](_pattern_store_reactive_store_.safebehaviorsubject.md#static-if)*

Defined in node_modules/rxjs/internal/Observable.d.ts:71

**`nocollapse`** 

**`deprecated`** In favor of iif creation function: import { iif } from 'rxjs';

___

### `Static` throw

▪ **throw**: *typeof throwError*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[throw](_pattern_store_reactive_store_.safebehaviorsubject.md#static-throw)*

Defined in node_modules/rxjs/internal/Observable.d.ts:76

**`nocollapse`** 

**`deprecated`** In favor of throwError creation function: import { throwError } from 'rxjs';

## Methods

###  _subscribe

▸ **_subscribe**(`subscriber`: Subscriber‹T›): *Subscription*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[_subscribe](_pattern_store_reactive_store_.safebehaviorsubject.md#_subscribe)*

*Overrides void*

Defined in node_modules/rxjs/internal/BehaviorSubject.d.ts:15

**`deprecated`** This is an internal implementation detail, do not use.

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | Subscriber‹T› |

**Returns:** *Subscription*

___

###  _trySubscribe

▸ **_trySubscribe**(`subscriber`: Subscriber‹T›): *TeardownLogic*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[_trySubscribe](_pattern_store_reactive_store_.safebehaviorsubject.md#_trysubscribe)*

*Overrides void*

Defined in node_modules/rxjs/internal/Subject.d.ts:39

**`deprecated`** This is an internal implementation detail, do not use.

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | Subscriber‹T› |

**Returns:** *TeardownLogic*

___

###  asObservable

▸ **asObservable**(): *Observable‹T›*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[asObservable](_pattern_store_reactive_store_.safebehaviorsubject.md#asobservable)*

Defined in node_modules/rxjs/internal/Subject.d.ts:48

Creates a new Observable with this Subject as the source. You can do this
to create customize Observer-side logic of the Subject and conceal it from
code that uses the Observable.

**Returns:** *Observable‹T›*

Observable that the Subject casts to

___

###  complete

▸ **complete**(): *void*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[complete](_pattern_store_reactive_store_.safebehaviorsubject.md#complete)*

Defined in node_modules/rxjs/internal/Subject.d.ts:36

**Returns:** *void*

___

###  error

▸ **error**(`err`: any): *void*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[error](_pattern_store_reactive_store_.safebehaviorsubject.md#error)*

Defined in node_modules/rxjs/internal/Subject.d.ts:35

**Parameters:**

Name | Type |
------ | ------ |
`err` | any |

**Returns:** *void*

___

###  forEach

▸ **forEach**(`next`: function, `promiseCtor?`: PromiseConstructorLike): *Promise‹void›*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[forEach](_pattern_store_reactive_store_.safebehaviorsubject.md#foreach)*

Defined in node_modules/rxjs/internal/Observable.d.ts:64

**`method`** forEach

**Parameters:**

▪ **next**: *function*

a handler for each value emitted by the observable

▸ (`value`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

▪`Optional`  **promiseCtor**: *PromiseConstructorLike*

**Returns:** *Promise‹void›*

a promise that either resolves on observable completion or
 rejects with the handled error

___

###  getValue

▸ **getValue**(): *T*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[getValue](_pattern_store_reactive_store_.safebehaviorsubject.md#getvalue)*

Defined in node_modules/rxjs/internal/BehaviorSubject.d.ts:16

**Returns:** *T*

___

### `Private` innerNext

▸ **innerNext**(`value`: T): *void*

*Defined in [src/pattern/store/reactive.store.ts:14](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/store/reactive.store.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  lift

▸ **lift**<**R**>(`operator`: Operator‹T, R›): *Observable‹R›*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[lift](_pattern_store_reactive_store_.safebehaviorsubject.md#lift)*

*Overrides void*

Defined in node_modules/rxjs/internal/Subject.d.ts:33

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`operator` | Operator‹T, R› |

**Returns:** *Observable‹R›*

___

###  next

▸ **next**(`value`: T): *void*

*Overrides void*

*Defined in [src/pattern/store/reactive.store.ts:10](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/store/reactive.store.ts#L10)*

**`deprecated`** please use state.Mutation() to change the State Value

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *void*

___

###  pipe

▸ **pipe**(): *Observable‹T›*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[pipe](_pattern_store_reactive_store_.safebehaviorsubject.md#pipe)*

Defined in node_modules/rxjs/internal/Observable.d.ts:77

**Returns:** *Observable‹T›*

▸ **pipe**<**A**>(`op1`: OperatorFunction‹T, A›): *Observable‹A›*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[pipe](_pattern_store_reactive_store_.safebehaviorsubject.md#pipe)*

Defined in node_modules/rxjs/internal/Observable.d.ts:78

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹T, A› |

**Returns:** *Observable‹A›*

▸ **pipe**<**A**, **B**>(`op1`: OperatorFunction‹T, A›, `op2`: OperatorFunction‹A, B›): *Observable‹B›*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[pipe](_pattern_store_reactive_store_.safebehaviorsubject.md#pipe)*

Defined in node_modules/rxjs/internal/Observable.d.ts:79

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹T, A› |
`op2` | OperatorFunction‹A, B› |

**Returns:** *Observable‹B›*

▸ **pipe**<**A**, **B**, **C**>(`op1`: OperatorFunction‹T, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›): *Observable‹C›*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[pipe](_pattern_store_reactive_store_.safebehaviorsubject.md#pipe)*

Defined in node_modules/rxjs/internal/Observable.d.ts:80

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹T, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |

**Returns:** *Observable‹C›*

▸ **pipe**<**A**, **B**, **C**, **D**>(`op1`: OperatorFunction‹T, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›): *Observable‹D›*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[pipe](_pattern_store_reactive_store_.safebehaviorsubject.md#pipe)*

Defined in node_modules/rxjs/internal/Observable.d.ts:81

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹T, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |

**Returns:** *Observable‹D›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**>(`op1`: OperatorFunction‹T, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›): *Observable‹E›*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[pipe](_pattern_store_reactive_store_.safebehaviorsubject.md#pipe)*

Defined in node_modules/rxjs/internal/Observable.d.ts:82

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹T, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |

**Returns:** *Observable‹E›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**, **F**>(`op1`: OperatorFunction‹T, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›, `op6`: OperatorFunction‹E, F›): *Observable‹F›*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[pipe](_pattern_store_reactive_store_.safebehaviorsubject.md#pipe)*

Defined in node_modules/rxjs/internal/Observable.d.ts:83

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹T, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |
`op6` | OperatorFunction‹E, F› |

**Returns:** *Observable‹F›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**, **F**, **G**>(`op1`: OperatorFunction‹T, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›, `op6`: OperatorFunction‹E, F›, `op7`: OperatorFunction‹F, G›): *Observable‹G›*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[pipe](_pattern_store_reactive_store_.safebehaviorsubject.md#pipe)*

Defined in node_modules/rxjs/internal/Observable.d.ts:84

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹T, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |
`op6` | OperatorFunction‹E, F› |
`op7` | OperatorFunction‹F, G› |

**Returns:** *Observable‹G›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`op1`: OperatorFunction‹T, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›, `op6`: OperatorFunction‹E, F›, `op7`: OperatorFunction‹F, G›, `op8`: OperatorFunction‹G, H›): *Observable‹H›*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[pipe](_pattern_store_reactive_store_.safebehaviorsubject.md#pipe)*

Defined in node_modules/rxjs/internal/Observable.d.ts:85

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **H**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹T, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |
`op6` | OperatorFunction‹E, F› |
`op7` | OperatorFunction‹F, G› |
`op8` | OperatorFunction‹G, H› |

**Returns:** *Observable‹H›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`op1`: OperatorFunction‹T, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›, `op6`: OperatorFunction‹E, F›, `op7`: OperatorFunction‹F, G›, `op8`: OperatorFunction‹G, H›, `op9`: OperatorFunction‹H, I›): *Observable‹I›*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[pipe](_pattern_store_reactive_store_.safebehaviorsubject.md#pipe)*

Defined in node_modules/rxjs/internal/Observable.d.ts:86

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **H**

▪ **I**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹T, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |
`op6` | OperatorFunction‹E, F› |
`op7` | OperatorFunction‹F, G› |
`op8` | OperatorFunction‹G, H› |
`op9` | OperatorFunction‹H, I› |

**Returns:** *Observable‹I›*

▸ **pipe**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`op1`: OperatorFunction‹T, A›, `op2`: OperatorFunction‹A, B›, `op3`: OperatorFunction‹B, C›, `op4`: OperatorFunction‹C, D›, `op5`: OperatorFunction‹D, E›, `op6`: OperatorFunction‹E, F›, `op7`: OperatorFunction‹F, G›, `op8`: OperatorFunction‹G, H›, `op9`: OperatorFunction‹H, I›, ...`operations`: OperatorFunction‹any, any›[]): *Observable‹object›*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[pipe](_pattern_store_reactive_store_.safebehaviorsubject.md#pipe)*

Defined in node_modules/rxjs/internal/Observable.d.ts:87

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **H**

▪ **I**

**Parameters:**

Name | Type |
------ | ------ |
`op1` | OperatorFunction‹T, A› |
`op2` | OperatorFunction‹A, B› |
`op3` | OperatorFunction‹B, C› |
`op4` | OperatorFunction‹C, D› |
`op5` | OperatorFunction‹D, E› |
`op6` | OperatorFunction‹E, F› |
`op7` | OperatorFunction‹F, G› |
`op8` | OperatorFunction‹G, H› |
`op9` | OperatorFunction‹H, I› |
`...operations` | OperatorFunction‹any, any›[] |

**Returns:** *Observable‹object›*

___

###  subscribe

▸ **subscribe**(`observer?`: PartialObserver‹T›): *Subscription*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[subscribe](_pattern_store_reactive_store_.safebehaviorsubject.md#subscribe)*

Defined in node_modules/rxjs/internal/Observable.d.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`observer?` | PartialObserver‹T› |

**Returns:** *Subscription*

▸ **subscribe**(`next`: null | undefined, `error`: null | undefined, `complete`: function): *Subscription*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[subscribe](_pattern_store_reactive_store_.safebehaviorsubject.md#subscribe)*

Defined in node_modules/rxjs/internal/Observable.d.ts:49

**`deprecated`** Use an observer instead of a complete callback

**Parameters:**

▪ **next**: *null | undefined*

▪ **error**: *null | undefined*

▪ **complete**: *function*

▸ (): *void*

**Returns:** *Subscription*

▸ **subscribe**(`next`: null | undefined, `error`: function, `complete?`: function): *Subscription*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[subscribe](_pattern_store_reactive_store_.safebehaviorsubject.md#subscribe)*

Defined in node_modules/rxjs/internal/Observable.d.ts:51

**`deprecated`** Use an observer instead of an error callback

**Parameters:**

▪ **next**: *null | undefined*

▪ **error**: *function*

▸ (`error`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

▪`Optional`  **complete**: *function*

▸ (): *void*

**Returns:** *Subscription*

▸ **subscribe**(`next`: function, `error`: null | undefined, `complete`: function): *Subscription*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[subscribe](_pattern_store_reactive_store_.safebehaviorsubject.md#subscribe)*

Defined in node_modules/rxjs/internal/Observable.d.ts:53

**`deprecated`** Use an observer instead of a complete callback

**Parameters:**

▪ **next**: *function*

▸ (`value`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

▪ **error**: *null | undefined*

▪ **complete**: *function*

▸ (): *void*

**Returns:** *Subscription*

▸ **subscribe**(`next?`: function, `error?`: function, `complete?`: function): *Subscription*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[subscribe](_pattern_store_reactive_store_.safebehaviorsubject.md#subscribe)*

Defined in node_modules/rxjs/internal/Observable.d.ts:54

**Parameters:**

▪`Optional`  **next**: *function*

▸ (`value`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

▪`Optional`  **error**: *function*

▸ (`error`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

▪`Optional`  **complete**: *function*

▸ (): *void*

**Returns:** *Subscription*

___

###  toPromise

▸ **toPromise**<**T**>(`this`: Observable‹T›): *Promise‹T›*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[toPromise](_pattern_store_reactive_store_.safebehaviorsubject.md#topromise)*

Defined in node_modules/rxjs/internal/Observable.d.ts:88

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`this` | Observable‹T› |

**Returns:** *Promise‹T›*

▸ **toPromise**<**T**>(`this`: Observable‹T›, `PromiseCtor`: typeof Promise): *Promise‹T›*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[toPromise](_pattern_store_reactive_store_.safebehaviorsubject.md#topromise)*

Defined in node_modules/rxjs/internal/Observable.d.ts:89

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`this` | Observable‹T› |
`PromiseCtor` | typeof Promise |

**Returns:** *Promise‹T›*

▸ **toPromise**<**T**>(`this`: Observable‹T›, `PromiseCtor`: PromiseConstructorLike): *Promise‹T›*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[toPromise](_pattern_store_reactive_store_.safebehaviorsubject.md#topromise)*

Defined in node_modules/rxjs/internal/Observable.d.ts:90

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`this` | Observable‹T› |
`PromiseCtor` | PromiseConstructorLike |

**Returns:** *Promise‹T›*

___

###  unsubscribe

▸ **unsubscribe**(): *void*

*Inherited from [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md).[unsubscribe](_pattern_store_reactive_store_.safebehaviorsubject.md#unsubscribe)*

Defined in node_modules/rxjs/internal/Subject.d.ts:37

**Returns:** *void*
