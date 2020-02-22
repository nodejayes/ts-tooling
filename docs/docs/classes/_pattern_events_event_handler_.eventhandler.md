---
id: "_pattern_events_event_handler_.eventhandler"
title: "EventHandler"
sidebar_label: "EventHandler"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["pattern/events/event.handler"](../modules/_pattern_events_event_handler_.md) › [EventHandler](_pattern_events_event_handler_.eventhandler.md)

lets create a Event Handler you can subscribe or unsubscribe

## Type parameters

▪ **T**

## Hierarchy

* **EventHandler**

## Index

### Properties

* [_stream](_pattern_events_event_handler_.eventhandler.md#private-_stream)
* [_subscriptions](_pattern_events_event_handler_.eventhandler.md#private-_subscriptions)

### Methods

* [Invoke](_pattern_events_event_handler_.eventhandler.md#invoke)
* [Subscribe](_pattern_events_event_handler_.eventhandler.md#subscribe)
* [Unsubscribe](_pattern_events_event_handler_.eventhandler.md#unsubscribe)
* [unsubscribeByKey](_pattern_events_event_handler_.eventhandler.md#private-unsubscribebykey)

## Properties

### `Private` _stream

• **_stream**: *Subject‹T›* = new Subject<T>()

*Defined in [src/pattern/events/event.handler.ts:9](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/events/event.handler.ts#L9)*

___

### `Private` _subscriptions

• **_subscriptions**: *[Dictionary](_types_dictionary_dictionary_.dictionary.md)‹Subscription›* = new Dictionary<Subscription>()

*Defined in [src/pattern/events/event.handler.ts:10](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/events/event.handler.ts#L10)*

## Methods

###  Invoke

▸ **Invoke**(`args`: T): *void*

*Defined in [src/pattern/events/event.handler.ts:22](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/events/event.handler.ts#L22)*

invoke the Event on the Handler

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | T |   ```typescript const handler = new EventHandler<number>(); // sends 1 to every Subscriber handler.Invoke(1); ```  |

**Returns:** *void*

___

###  Subscribe

▸ **Subscribe**(`key`: string, `cb`: function): *void*

*Defined in [src/pattern/events/event.handler.ts:40](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/events/event.handler.ts#L40)*

do something when the Handler is invoked

**Parameters:**

▪ **key**: *string*

the key to identify the subscription

▪ **cb**: *function*

▸ (`d`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`d` | T |

**Returns:** *void*

the Idx of the Subscription

```typescript
const handler = new EventHandler<number>();
handler.Subscribe('X', (i) => {
    // get the Number that was send by a Invoke call (2)
});
handler.Invoke(2);
```

___

###  Unsubscribe

▸ **Unsubscribe**(`key?`: string): *void*

*Defined in [src/pattern/events/event.handler.ts:60](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/events/event.handler.ts#L60)*

unsubscribe all callbacks

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key?` | string | the key to identify the Subscription to unsubscribe  ```typescript const handler = new EventHandler<number>(); handler.Subscribe('X', (i) => {      // nothing happen here while the Handler was unsubscribe }); // unsubscribe only the X Subscriber handler.Unsubscribe('X'); // unsubscribe all Subscriber handler.Unsubscribe(); handler.Invoke(2); ```  |

**Returns:** *void*

___

### `Private` unsubscribeByKey

▸ **unsubscribeByKey**(`key`: string): *void*

*Defined in [src/pattern/events/event.handler.ts:70](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/events/event.handler.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *void*
