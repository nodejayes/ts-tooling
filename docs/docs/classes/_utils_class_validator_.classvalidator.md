---
id: "_utils_class_validator_.classvalidator"
title: "ClassValidator"
sidebar_label: "ClassValidator"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["utils/class.validator"](../modules/_utils_class_validator_.md) › [ClassValidator](_utils_class_validator_.classvalidator.md)

a Validator to validate decorated Typescript Classes

## Hierarchy

* **ClassValidator**

## Index

### Methods

* [Validate](_utils_class_validator_.classvalidator.md#static-validate)
* [ValidateObject](_utils_class_validator_.classvalidator.md#static-validateobject)

## Methods

### `Static` Validate

▸ **Validate**<**T**>(`instance`: T): *Promise‹[IValidationError](../interfaces/_utils_class_validator_.ivalidationerror.md)[]›*

*Defined in [src/utils/class.validator.ts:161](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L161)*

validate again a Decorated Class Instance

**`example`** 
class User {

**`isdefined(&#x27;name`** must be defined')
    Name: string;

**`min(0,`** 'Age must be greater -1')

**`max(200,`** 'Age must me lower 201')
    Age: number;

**`isemail(&#x27;email`** must be a valid email address')
    Email: string;
}
const instance = new User();
// returns [
     {Message:'Name must be defined'},
     {Message:'Age must be greater -1'},
     {Message:'Age must me lower 201'},
     {Message:'Email must be a valid email address'},
]
ClassValidator.Validate(instance);
instance.Name = 'Udo';
instance.Age = 20;
instance.Email = 'udo@address.de';
// returns []
ClassValidator.Validate(instance);

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`instance` | T | the Instance of the Class to Validate  |

**Returns:** *Promise‹[IValidationError](../interfaces/_utils_class_validator_.ivalidationerror.md)[]›*

___

### `Static` ValidateObject

▸ **ValidateObject**<**T**>(`constructor`: object, `value`: any): *Promise‹[IValidationError](../interfaces/_utils_class_validator_.ivalidationerror.md)[]›*

*Defined in [src/utils/class.validator.ts:367](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L367)*

validate a plain Object again a Class

**`example`** 
class User {

**`isdefined(&#x27;name`** must be defined')
    Name: string;

**`min(0,`** 'Age must be greater -1')

**`max(200,`** 'Age must me lower 201')
    Age: number;

**`isemail(&#x27;email`** must be a valid email address')
    Email: string;
}
const demoUser = {};
// returns [
     {Message:'Name must be defined'},
     {Message:'Age must be greater -1'},
     {Message:'Age must me lower 201'},
     {Message:'Email must be a valid email address'},
]
ClassValidator.Validate(demoUser);
demoUser.Name = 'Udo';
demoUser.Age = 20;
demoUser.Email = 'udo@address.de';
// returns []
ClassValidator.Validate(demoUser);

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`constructor` | object | the Class with the Validation Decorators |
`value` | any | the raw JSON Object  |

**Returns:** *Promise‹[IValidationError](../interfaces/_utils_class_validator_.ivalidationerror.md)[]›*
