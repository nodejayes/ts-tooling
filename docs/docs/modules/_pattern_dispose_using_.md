---
id: "_pattern_dispose_using_"
title: "pattern/dispose/using"
sidebar_label: "pattern/dispose/using"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["pattern/dispose/using"](_pattern_dispose_using_.md)

## Index

### Functions

* [using](_pattern_dispose_using_.md#using)

## Functions

###  using

▸ **using**<**T**>(`item`: object, `cb`: function): *void*

*Defined in [src/pattern/dispose/using.ts:21](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/dispose/using.ts#L21)*

use a Instance and Dispose it after Execution

**Type parameters:**

▪ **T**: *[IDisposable](../interfaces/_pattern_dispose_disposable_.idisposable.md)*

**Parameters:**

▪ **item**: *object*

a instance of a Class to Dispose after running the using section

▪ **cb**: *function*

what is to do in this using?

```typescript
class WithDisposable implements IDisposable {
  Name = 'WithoutDisposable';

  Dispose(): void {
    this.Name = '';
  }
}
using(WithDisposable, (i) => {
  // Do whatever you want to do with the new Instance of the Class
});
```

▸ (`d`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`d` | T |

**Returns:** *void*
