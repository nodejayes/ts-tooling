---
id: "_pattern_functions_throttle_"
title: "pattern/functions/throttle"
sidebar_label: "pattern/functions/throttle"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["pattern/functions/throttle"](_pattern_functions_throttle_.md)

## Index

### Interfaces

* [IThrottleOptions](../interfaces/_pattern_functions_throttle_.ithrottleoptions.md)

### Variables

* [throttle](_pattern_functions_throttle_.md#const-throttle)

## Variables

### `Const` throttle

• **throttle**: *(Anonymous function)* = (function () {
    let locked = false;
    return function (options: IThrottleOptions, fn: (...args) => any, ...args: any) {
        if (!locked) {
            options.Timeout = options.Timeout || 500;
            options.Leading = options.Leading === true;
            if (options.Leading === true) {
                fn.call(fn, ...args);
            }
            setTimeout(() => {
                if (!options.Leading) {
                    fn.call(fn, ...args);
                }
                locked = false;
            }, options.Timeout);
        }
    }
})()

*Defined in [src/pattern/functions/throttle.ts:6](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/pattern/functions/throttle.ts#L6)*
