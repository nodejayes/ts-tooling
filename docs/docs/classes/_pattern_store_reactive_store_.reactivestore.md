---
id: "_pattern_store_reactive_store_.reactivestore"
title: "ReactiveStore"
sidebar_label: "ReactiveStore"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["pattern/store/reactive.store"](../modules/_pattern_store_reactive_store_.md) › [ReactiveStore](_pattern_store_reactive_store_.reactivestore.md)

a Reactive Store to save States and listen to Changes

## Type parameters

▪ **T**

## Hierarchy

* **ReactiveStore**

## Index

### Constructors

* [constructor](_pattern_store_reactive_store_.reactivestore.md#constructor)

### Properties

* [DebugMode](_pattern_store_reactive_store_.reactivestore.md#debugmode)
* [_behaviorSubjects](_pattern_store_reactive_store_.reactivestore.md#private-_behaviorsubjects)
* [_core](_pattern_store_reactive_store_.reactivestore.md#private-_core)

### Methods

* [Listen](_pattern_store_reactive_store_.reactivestore.md#listen)
* [Mutate](_pattern_store_reactive_store_.reactivestore.md#mutate)
* [parseSelectorAccess](_pattern_store_reactive_store_.reactivestore.md#private-parseselectoraccess)
* [selectBehaviors](_pattern_store_reactive_store_.reactivestore.md#private-selectbehaviors)
* [toRealKey](_pattern_store_reactive_store_.reactivestore.md#private-torealkey)

## Constructors

###  constructor

\+ **new ReactiveStore**(`initialState`: T): *[ReactiveStore](_pattern_store_reactive_store_.reactivestore.md)*

*Defined in [src/pattern/store/reactive.store.ts:29](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/store/reactive.store.ts#L29)*

create a new Store with a Initial State

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`initialState` | T |   |

**Returns:** *[ReactiveStore](_pattern_store_reactive_store_.reactivestore.md)*

## Properties

###  DebugMode

• **DebugMode**: *boolean* = false

*Defined in [src/pattern/store/reactive.store.ts:27](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/store/reactive.store.ts#L27)*

enable the Debug log for the Store
(Logs to Console when no Action behavior was found)

___

### `Private` _behaviorSubjects

• **_behaviorSubjects**: *[Dictionary](_types_dictionary_dictionary_.dictionary.md)‹[SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md)‹any››* = new Dictionary<SafeBehaviorSubject<any>>()

*Defined in [src/pattern/store/reactive.store.ts:29](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/store/reactive.store.ts#L29)*

___

### `Private` _core

• **_core**: *T* = null

*Defined in [src/pattern/store/reactive.store.ts:28](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/store/reactive.store.ts#L28)*

## Methods

###  Listen

▸ **Listen**<**K**>(`selector`: function): *[SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md)‹K›*

*Defined in [src/pattern/store/reactive.store.ts:49](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/store/reactive.store.ts#L49)*

listen to a specific Property or a complete State change
you can use the SafeBehaviorSubject same as a BehaviorSubject but follow Functions has no effect
next, complete, error

**`example`** 
// write the data Property of the State into the console
store.Listen(s => s.data).subscribe(d => console.info(d));

**Type parameters:**

▪ **K**

**Parameters:**

▪ **selector**: *function*

select the Part of the State to Listen

▸ (`d`: Draft‹T›): *K*

**Parameters:**

Name | Type |
------ | ------ |
`d` | Draft‹T› |

**Returns:** *[SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md)‹K›*

___

###  Mutate

▸ **Mutate**<**K**>(`selector`: function, `mutation`: function): *void*

*Defined in [src/pattern/store/reactive.store.ts:76](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/store/reactive.store.ts#L76)*

mutate a specific Property or a complete State

**`example`** 
// simple Example to set the State
store.Mutate(s => s.data, () => newData);

**`example`** 
// make a complex Mutation
store.Mutate(s => s, old => {
    old.data = [];
    old.loading = true;
    return old;
});

**Type parameters:**

▪ **K**

**Parameters:**

▪ **selector**: *function*

select the Part of the State to Mutate

▸ (`d`: Draft‹T›): *K*

**Parameters:**

Name | Type |
------ | ------ |
`d` | Draft‹T› |

▪ **mutation**: *function*

define how to change the State

▸ (`s`: K): *K*

**Parameters:**

Name | Type |
------ | ------ |
`s` | K |

**Returns:** *void*

___

### `Private` parseSelectorAccess

▸ **parseSelectorAccess**<**K**>(`selector`: function): *string*

*Defined in [src/pattern/store/reactive.store.ts:132](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/store/reactive.store.ts#L132)*

create a unique Key from the State Selector that can use as identifier for the Behavior Subjects
adds "root" in front of the Key to have no empty Key when selector points to the State itself

**`example`** 
store.Listen(s => s.data) // generates the key: root.data
store.Listen(s => s) // generates the key: root

**Type parameters:**

▪ **K**

**Parameters:**

▪ **selector**: *function*

▸ (`d`: Draft‹T›): *K*

**Parameters:**

Name | Type |
------ | ------ |
`d` | Draft‹T› |

**Returns:** *string*

___

### `Private` selectBehaviors

▸ **selectBehaviors**<**T**>(`key`: string): *object*

*Defined in [src/pattern/store/reactive.store.ts:105](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/store/reactive.store.ts#L105)*

returns the Behaviors to Invoke for the given Key

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string |   |

**Returns:** *object*

* \[ **key**: *string*\]: [SafeBehaviorSubject](_pattern_store_reactive_store_.safebehaviorsubject.md)‹T›

___

### `Private` toRealKey

▸ **toRealKey**(`key`: string): *string*

*Defined in [src/pattern/store/reactive.store.ts:166](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/store/reactive.store.ts#L166)*

creates the Original Path for a Object

**`example`** 
root.data // generates: data

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *string*
