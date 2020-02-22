---
id: "_utils_class_validator_"
title: "utils/class.validator"
sidebar_label: "utils/class.validator"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["utils/class.validator"](_utils_class_validator_.md)

## Index

### Classes

* [ClassValidator](../classes/_utils_class_validator_.classvalidator.md)

### Interfaces

* [IValidationError](../interfaces/_utils_class_validator_.ivalidationerror.md)

### Variables

* [ValidationStore](_utils_class_validator_.md#const-validationstore)

### Functions

* [ArrayNotEmpty](_utils_class_validator_.md#arraynotempty)
* [Blacklist](_utils_class_validator_.md#blacklist)
* [CustomValidation](_utils_class_validator_.md#customvalidation)
* [Equals](_utils_class_validator_.md#equals)
* [IsAlpha](_utils_class_validator_.md#isalpha)
* [IsAlphanumeric](_utils_class_validator_.md#isalphanumeric)
* [IsAscii](_utils_class_validator_.md#isascii)
* [IsBase64](_utils_class_validator_.md#isbase64)
* [IsBooleanString](_utils_class_validator_.md#isbooleanstring)
* [IsByteLength](_utils_class_validator_.md#isbytelength)
* [IsDefined](_utils_class_validator_.md#isdefined)
* [IsEmail](_utils_class_validator_.md#isemail)
* [IsEmpty](_utils_class_validator_.md#isempty)
* [IsHash](_utils_class_validator_.md#ishash)
* [IsHexColor](_utils_class_validator_.md#ishexcolor)
* [IsHexadecimal](_utils_class_validator_.md#ishexadecimal)
* [IsInt](_utils_class_validator_.md#isint)
* [IsIp](_utils_class_validator_.md#isip)
* [IsJSON](_utils_class_validator_.md#isjson)
* [IsJWT](_utils_class_validator_.md#isjwt)
* [IsMacAddress](_utils_class_validator_.md#ismacaddress)
* [IsMongoId](_utils_class_validator_.md#ismongoid)
* [IsNegative](_utils_class_validator_.md#isnegative)
* [IsNotEmpty](_utils_class_validator_.md#isnotempty)
* [IsNumberString](_utils_class_validator_.md#isnumberstring)
* [IsOptional](_utils_class_validator_.md#isoptional)
* [IsPort](_utils_class_validator_.md#isport)
* [IsPositive](_utils_class_validator_.md#ispositive)
* [IsUUID](_utils_class_validator_.md#isuuid)
* [IsUrl](_utils_class_validator_.md#isurl)
* [Max](_utils_class_validator_.md#max)
* [MaxDate](_utils_class_validator_.md#maxdate)
* [MaxLength](_utils_class_validator_.md#maxlength)
* [Min](_utils_class_validator_.md#min)
* [MinDate](_utils_class_validator_.md#mindate)
* [MinLength](_utils_class_validator_.md#minlength)
* [NotEquals](_utils_class_validator_.md#notequals)
* [Required](_utils_class_validator_.md#required)
* [UniqueArray](_utils_class_validator_.md#uniquearray)
* [ValidateClass](_utils_class_validator_.md#validateclass)
* [ValidateIf](_utils_class_validator_.md#validateif)
* [Whitelist](_utils_class_validator_.md#whitelist)
* [checkForRequired](_utils_class_validator_.md#checkforrequired)
* [executeValidation](_utils_class_validator_.md#executevalidation)
* [isFunction](_utils_class_validator_.md#isfunction)
* [isObject](_utils_class_validator_.md#isobject)
* [isValidUrl](_utils_class_validator_.md#isvalidurl)
* [registerInStore](_utils_class_validator_.md#registerinstore)

### Object literals

* [BASE_VALIDATIONS](_utils_class_validator_.md#const-base_validations)
* [VALIDATIONS](_utils_class_validator_.md#const-validations)

## Variables

### `Const` ValidationStore

• **ValidationStore**: *object*

*Defined in [src/utils/class.validator.ts:376](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L376)*

#### Type declaration:

## Functions

###  ArrayNotEmpty

▸ **ArrayNotEmpty**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:631](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L631)*

check if the Array not Empty

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  Blacklist

▸ **Blacklist**(`value`: any[], `validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:569](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L569)*

implements a Blacklist check for the Property

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any[] | - |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  CustomValidation

▸ **CustomValidation**(`value`: function, `validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:517](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L517)*

can execute a Function that returns true or false, can perform any Validation you want

**Parameters:**

▪ **value**: *function*

▸ (`v`: any): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

▪`Optional`  **validationMessage**: *string*

**Returns:** *(Anonymous function)*

___

###  Equals

▸ **Equals**<**T**>(`value`: T, `validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:582](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L582)*

check if the Property Value Equals the given Value using (===)

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | T | - |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsAlpha

▸ **IsAlpha**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:719](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L719)*

check if the String contains only letters a-z

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsAlphanumeric

▸ **IsAlphanumeric**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:731](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L731)*

check if the string only contains letters a-z and numbers 0-9

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsAscii

▸ **IsAscii**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:743](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L743)*

check if the String only contains Ascii Characters

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsBase64

▸ **IsBase64**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:755](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L755)*

check if the String is a Base64 string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsBooleanString

▸ **IsBooleanString**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:669](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L669)*

check if the String has any valid Boolean declaration like

true, false, TRUE, FALSE

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsByteLength

▸ **IsByteLength**(`value`: number, `validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:854](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L854)*

check if the String has the Maximum Bytes Size of the given Value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | - |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsDefined

▸ **IsDefined**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:442](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L442)*

the Property must have a Valid Value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsEmail

▸ **IsEmail**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:478](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L478)*

the String at this Property must be a Email Address

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsEmpty

▸ **IsEmpty**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:454](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L454)*

the Property must have a Empty value like empty String or null or undefined

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsHash

▸ **IsHash**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:906](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L906)*

check if the String can be a Hash

supported are all Hashes with 32, 40, 64 and 128 bit size

for Example MD5, SHA-1, SHA-256, SHA-512, RIPEMD-160, Snefru, GHOST and Whirlpool

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsHexColor

▸ **IsHexColor**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:769](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L769)*

check if a String is a Hex Color

supported Hex Color with 8 (with Alpha), 6 (Default) or 3 (Short) Characters

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsHexadecimal

▸ **IsHexadecimal**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:781](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L781)*

check if a String is a Hexadecimal String

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsInt

▸ **IsInt**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:607](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L607)*

check if the given Value is an Integer number

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsIp

▸ **IsIp**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:805](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L805)*

check if the String is a IP Address

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsJSON

▸ **IsJSON**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:829](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L829)*

check if the String is a JSON String

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsJWT

▸ **IsJWT**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:841](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L841)*

check if the String is a JSON Web Token

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsMacAddress

▸ **IsMacAddress**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:793](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L793)*

check if the String is a MAC Address

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsMongoId

▸ **IsMongoId**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:866](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L866)*

check if a String is a MongoDb Object Id

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsNegative

▸ **IsNegative**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:655](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L655)*

check the Value for a Negative number

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsNotEmpty

▸ **IsNotEmpty**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:466](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L466)*

the Property must can not have a Empty value like empty String or null or undefined

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsNumberString

▸ **IsNumberString**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:681](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L681)*

check if the String contain Numbers Only

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsOptional

▸ **IsOptional**(): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:419](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L419)*

check if the Value is missing and ignore all Validations

**Returns:** *(Anonymous function)*

___

###  IsPort

▸ **IsPort**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:817](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L817)*

check if the String or Number is a Port Number

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsPositive

▸ **IsPositive**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:643](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L643)*

check the Value for a Positive number

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsUUID

▸ **IsUUID**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:890](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L890)*

check if a String is a UUID

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  IsUrl

▸ **IsUrl**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:878](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L878)*

check if a String is a valid URL

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  Max

▸ **Max**(`value`: number, `validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:504](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L504)*

the numeric Value mut be lower or equal the given Value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | - |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  MaxDate

▸ **MaxDate**(`value`: [DateTime](../classes/_types_datetime_date_time_.datetime.md), `validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:707](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L707)*

check if a DateTime is Before the value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | [DateTime](../classes/_types_datetime_date_time_.datetime.md) | - |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  MaxLength

▸ **MaxLength**(`value`: number, `validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:543](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L543)*

the String or Array must have the given Length or lesser

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | - |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  Min

▸ **Min**(`value`: number, `validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:491](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L491)*

the numeric Value must be greater or Equal the given Value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | - |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  MinDate

▸ **MinDate**(`value`: [DateTime](../classes/_types_datetime_date_time_.datetime.md), `validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:694](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L694)*

check if a DateTime is After the value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | [DateTime](../classes/_types_datetime_date_time_.datetime.md) | - |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  MinLength

▸ **MinLength**(`value`: number, `validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:530](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L530)*

the String or Array must have the given Length or more

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | number | - |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  NotEquals

▸ **NotEquals**(`value`: any, `validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:595](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L595)*

check if the Property Value Equals the given Value using (!==)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any | - |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  Required

▸ **Required**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:430](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L430)*

check if the Property was in the Object and have a Value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  UniqueArray

▸ **UniqueArray**(`validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:619](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L619)*

check an Array if it has Unique Values

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  ValidateClass

▸ **ValidateClass**<**T**>(`method`: function, `validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:919](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L919)*

validate the Class with a Function

**Type parameters:**

▪ **T**

**Parameters:**

▪ **method**: *function*

▸ (`instance`: T, `validators`: typeof VALIDATIONS): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | T |
`validators` | typeof VALIDATIONS |

▪`Optional`  **validationMessage**: *string*

**Returns:** *(Anonymous function)*

___

###  ValidateIf

▸ **ValidateIf**<**T**>(`cb`: function): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:410](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L410)*

only Validate the Property when the check Method returns True

**Type parameters:**

▪ **T**

**Parameters:**

▪ **cb**: *function*

define the check Method

▸ (`d`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`d` | T |

**Returns:** *(Anonymous function)*

___

###  Whitelist

▸ **Whitelist**(`value`: any[], `validationMessage?`: string): *(Anonymous function)*

*Defined in [src/utils/class.validator.ts:556](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L556)*

implements a Whitelist check for the Property

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | any[] | - |
`validationMessage?` | string |   |

**Returns:** *(Anonymous function)*

___

###  checkForRequired

▸ **checkForRequired**(`instance`: any, `errors`: [IValidationError](../interfaces/_utils_class_validator_.ivalidationerror.md)[]): *void*

*Defined in [src/utils/class.validator.ts:378](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L378)*

**Parameters:**

Name | Type |
------ | ------ |
`instance` | any |
`errors` | [IValidationError](../interfaces/_utils_class_validator_.ivalidationerror.md)[] |

**Returns:** *void*

___

###  executeValidation

▸ **executeValidation**(`value`: any, `cb`: function, `validationMessage`: string, `errors`: [IValidationError](../interfaces/_utils_class_validator_.ivalidationerror.md)[]): *void*

*Defined in [src/utils/class.validator.ts:391](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L391)*

**Parameters:**

▪ **value**: *any*

▪ **cb**: *function*

▸ (`v`: any): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

▪ **validationMessage**: *string*

▪ **errors**: *[IValidationError](../interfaces/_utils_class_validator_.ivalidationerror.md)[]*

**Returns:** *void*

___

###  isFunction

▸ **isFunction**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:7](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

___

###  isObject

▸ **isObject**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:3](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

___

###  isValidUrl

▸ **isValidUrl**(`url`: string): *boolean*

*Defined in [src/utils/class.validator.ts:15](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *boolean*

___

###  registerInStore

▸ **registerInStore**(`target`: any, `propertyKey`: string, `targetKey`: string, `value`: any, `validationMessage`: string): *void*

*Defined in [src/utils/class.validator.ts:397](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L397)*

**Parameters:**

Name | Type |
------ | ------ |
`target` | any |
`propertyKey` | string |
`targetKey` | string |
`value` | any |
`validationMessage` | string |

**Returns:** *void*

## Object literals

### `Const` BASE_VALIDATIONS

### ▪ **BASE_VALIDATIONS**: *object*

*Defined in [src/utils/class.validator.ts:19](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L19)*

###  ArrayNotEmpty

▸ **ArrayNotEmpty**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:48](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  Blacklist

▸ **Blacklist**(`v`: any, `validationValue`: any): *any*

*Defined in [src/utils/class.validator.ts:75](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |
`validationValue` | any |

**Returns:** *any*

###  Equals

▸ **Equals**(`v`: any, `validationValue`: any): *boolean*

*Defined in [src/utils/class.validator.ts:74](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |
`validationValue` | any |

**Returns:** *boolean*

###  IsAlpha

▸ **IsAlpha**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:61](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsAlphanumeric

▸ **IsAlphanumeric**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:60](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsAscii

▸ **IsAscii**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:59](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsBase64

▸ **IsBase64**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:20](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsBooleanString

▸ **IsBooleanString**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:71](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsByteLength

▸ **IsByteLength**(`v`: string, `validationValue`: number): *boolean*

*Defined in [src/utils/class.validator.ts:44](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | string |
`validationValue` | number |

**Returns:** *boolean*

###  IsDefined

▸ **IsDefined**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:84](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsEmail

▸ **IsEmail**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:81](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsEmpty

▸ **IsEmpty**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:83](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsHash

▸ **IsHash**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:64](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsHexColor

▸ **IsHexColor**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:21](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsHexadecimal

▸ **IsHexadecimal**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:22](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsInt

▸ **IsInt**(`v`: any): *any*

*Defined in [src/utils/class.validator.ts:72](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *any*

###  IsIp

▸ **IsIp**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:34](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsJSON

▸ **IsJSON**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:35](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsJWT

▸ **IsJWT**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:43](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsMacAddress

▸ **IsMacAddress**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:23](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsMongoId

▸ **IsMongoId**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:45](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsNegative

▸ **IsNegative**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:68](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsNotEmpty

▸ **IsNotEmpty**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:82](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsNumberString

▸ **IsNumberString**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:70](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsPort

▸ **IsPort**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:24](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsPositive

▸ **IsPositive**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:69](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsUUID

▸ **IsUUID**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:63](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsUrl

▸ **IsUrl**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:62](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  Max

▸ **Max**(`v`: any, `validationValue`: any): *boolean*

*Defined in [src/utils/class.validator.ts:79](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |
`validationValue` | any |

**Returns:** *boolean*

###  MaxDate

▸ **MaxDate**(`v`: [DateTime](../classes/_types_datetime_date_time_.datetime.md), `validationValue`: [DateTime](../classes/_types_datetime_date_time_.datetime.md)): *boolean*

*Defined in [src/utils/class.validator.ts:47](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [DateTime](../classes/_types_datetime_date_time_.datetime.md) |
`validationValue` | [DateTime](../classes/_types_datetime_date_time_.datetime.md) |

**Returns:** *boolean*

###  MaxLength

▸ **MaxLength**(`v`: any, `validationValue`: any): *boolean*

*Defined in [src/utils/class.validator.ts:77](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |
`validationValue` | any |

**Returns:** *boolean*

###  Min

▸ **Min**(`v`: any, `validationValue`: any): *boolean*

*Defined in [src/utils/class.validator.ts:80](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |
`validationValue` | any |

**Returns:** *boolean*

###  MinDate

▸ **MinDate**(`v`: [DateTime](../classes/_types_datetime_date_time_.datetime.md), `validationValue`: [DateTime](../classes/_types_datetime_date_time_.datetime.md)): *boolean*

*Defined in [src/utils/class.validator.ts:46](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [DateTime](../classes/_types_datetime_date_time_.datetime.md) |
`validationValue` | [DateTime](../classes/_types_datetime_date_time_.datetime.md) |

**Returns:** *boolean*

###  MinLength

▸ **MinLength**(`v`: any, `validationValue`: any): *boolean*

*Defined in [src/utils/class.validator.ts:78](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |
`validationValue` | any |

**Returns:** *boolean*

###  NotEquals

▸ **NotEquals**(`v`: any, `validationValue`: any): *boolean*

*Defined in [src/utils/class.validator.ts:73](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |
`validationValue` | any |

**Returns:** *boolean*

###  UniqueArray

▸ **UniqueArray**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:49](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  Whitelist

▸ **Whitelist**(`v`: any, `validationValue`: any): *boolean*

*Defined in [src/utils/class.validator.ts:76](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |
`validationValue` | any |

**Returns:** *boolean*

___

### `Const` VALIDATIONS

### ▪ **VALIDATIONS**: *object*

*Defined in [src/utils/class.validator.ts:86](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L86)*

###  ArrayNotEmpty

▸ **ArrayNotEmpty**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:99](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  Blacklist

▸ **Blacklist**(`v`: any, `validationValue`: any): *boolean*

*Defined in [src/utils/class.validator.ts:114](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |
`validationValue` | any |

**Returns:** *boolean*

###  Equals

▸ **Equals**(`v`: any, `validationValue`: any): *boolean*

*Defined in [src/utils/class.validator.ts:113](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |
`validationValue` | any |

**Returns:** *boolean*

###  IsAlpha

▸ **IsAlpha**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:103](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsAlphanumeric

▸ **IsAlphanumeric**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:102](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsAscii

▸ **IsAscii**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:101](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsBase64

▸ **IsBase64**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:87](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsBooleanString

▸ **IsBooleanString**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:110](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsByteLength

▸ **IsByteLength**(`v`: string, `validationValue`: number): *boolean*

*Defined in [src/utils/class.validator.ts:95](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | string |
`validationValue` | number |

**Returns:** *boolean*

###  IsDefined

▸ **IsDefined**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:123](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsEmail

▸ **IsEmail**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:120](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsEmpty

▸ **IsEmpty**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:122](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsHash

▸ **IsHash**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:106](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsHexColor

▸ **IsHexColor**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:88](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsHexadecimal

▸ **IsHexadecimal**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:89](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsInt

▸ **IsInt**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:111](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsIp

▸ **IsIp**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:92](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsJSON

▸ **IsJSON**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:93](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsJWT

▸ **IsJWT**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:94](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsMacAddress

▸ **IsMacAddress**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:90](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsMongoId

▸ **IsMongoId**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:96](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsNegative

▸ **IsNegative**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:107](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsNotEmpty

▸ **IsNotEmpty**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:121](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsNumberString

▸ **IsNumberString**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:109](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsPort

▸ **IsPort**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:91](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsPositive

▸ **IsPositive**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:108](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsUUID

▸ **IsUUID**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:105](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  IsUrl

▸ **IsUrl**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:104](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  Max

▸ **Max**(`v`: any, `validationValue`: any): *boolean*

*Defined in [src/utils/class.validator.ts:118](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |
`validationValue` | any |

**Returns:** *boolean*

###  MaxDate

▸ **MaxDate**(`v`: [DateTime](../classes/_types_datetime_date_time_.datetime.md), `validationValue`: [DateTime](../classes/_types_datetime_date_time_.datetime.md)): *boolean*

*Defined in [src/utils/class.validator.ts:98](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [DateTime](../classes/_types_datetime_date_time_.datetime.md) |
`validationValue` | [DateTime](../classes/_types_datetime_date_time_.datetime.md) |

**Returns:** *boolean*

###  MaxLength

▸ **MaxLength**(`v`: any, `validationValue`: any): *boolean*

*Defined in [src/utils/class.validator.ts:116](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |
`validationValue` | any |

**Returns:** *boolean*

###  Min

▸ **Min**(`v`: any, `validationValue`: any): *boolean*

*Defined in [src/utils/class.validator.ts:119](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L119)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |
`validationValue` | any |

**Returns:** *boolean*

###  MinDate

▸ **MinDate**(`v`: [DateTime](../classes/_types_datetime_date_time_.datetime.md), `validationValue`: [DateTime](../classes/_types_datetime_date_time_.datetime.md)): *boolean*

*Defined in [src/utils/class.validator.ts:97](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [DateTime](../classes/_types_datetime_date_time_.datetime.md) |
`validationValue` | [DateTime](../classes/_types_datetime_date_time_.datetime.md) |

**Returns:** *boolean*

###  MinLength

▸ **MinLength**(`v`: any, `validationValue`: any): *boolean*

*Defined in [src/utils/class.validator.ts:117](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |
`validationValue` | any |

**Returns:** *boolean*

###  NotEquals

▸ **NotEquals**(`v`: any, `validationValue`: any): *boolean*

*Defined in [src/utils/class.validator.ts:112](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |
`validationValue` | any |

**Returns:** *boolean*

###  UniqueArray

▸ **UniqueArray**(`v`: any): *boolean*

*Defined in [src/utils/class.validator.ts:100](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *boolean*

###  Whitelist

▸ **Whitelist**(`v`: any, `validationValue`: any): *boolean*

*Defined in [src/utils/class.validator.ts:115](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/utils/class.validator.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |
`validationValue` | any |

**Returns:** *boolean*
