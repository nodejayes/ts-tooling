### Class Validator

a Validator to validate decorated Typescript Classes

[<< Index](/wiki/index.md)

---

#### Validate

validate again a Decorated Class Instance

    Validate<T>(instance: T): Promise<IValidationError[]>

*Parameter:*

| Name     | Type    | Description                           |
|----------|---------|---------------------------------------|
| instance | generic | the Instance of the Class to Validate |

```typescript
class User {
    @IsDefined('Name must be defined')
    Name: string;

    @Min(0, 'Age must be greater -1')
    @Max(200, 'Age must me lower 201')
    Age: number;

    @IsEmail('Email must be a valid email address')
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
```

---

#### ValidateObject

validate a plain Object again a Class

    ValidateObject<T>(constructor: new () => T, value: any): Promise<IValidationError[]>

*Parameter:*

| Name        | Type    | Description                              |
|-------------|---------|------------------------------------------|
| constructor | class   | the Class with the Validation Decorators |
| value       | object  | the raw JSON Object                      |

```javascript
class User {
    @IsDefined('Name must be defined')
    Name: string;

    @Min(0, 'Age must be greater -1')
    @Max(200, 'Age must me lower 201')
    Age: number;

    @IsEmail('Email must be a valid email address')
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
```

---

#### Validation Decorators

| Name             | Signature                                                            | Description                                                                                                   |
|------------------|----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| ValidateIf       | @ValidateIf<T>(cb: (d: T) => boolean)                                | only Validate the Property when the check Method returns True                                                 |
| IsOptional       | @IsOptional()                                                        | check if the Value is missing and ignore all Validations                                                      |
| Required         | @Required(validationMessage?: string)                                | check if the Property was in the Object and have a Value                                                      |
| IsDefined        | @IsDefined(validationMessage?: string)                               | the Property must have a Valid Value                                                                          |
| IsEmpty          | @IsEmpty(validationMessage?: string)                                 | the Property must have a Empty value like empty String or null or undefined                                   |
| IsNotEmpty       | @IsNotEmpty(validationMessage?: string)                              | the Property must can not have a Empty value like empty String or null or undefined                           |
| IsEmail          | @IsEmail(validationMessage?: string)                                 | the String at this Property must be a Email Address                                                           |
| Min              | @Min(validationMessage?: string)                                     | the numeric Value must be greater or Equal the given Value                                                    |
| Max              | @Max(validationMessage?: string)                                     | the numeric Value mut be lower or equal the given Value                                                       |
| CustomValidation | @CustomValidation(value: (v) => boolean, validationMessage?: string) | can execute a Function that returns true or false, can perform any Validation you want                        |
| MinLength        | @MinLength(value: number, validationMessage?: string)                | the String or Array must have the given Length or more                                                        |
| MaxLength        | @MaxLength(value: number, validationMessage?: string)                | the String or Array must have the given Length or lesser                                                      |
| Whitelist        | @Whitelist(value: any[], validationMessage?: string)                 | implements a Whitelist check for the Property                                                                 |
| Blacklist        | @Blacklist(value: any[], validationMessage?: string)                 | implements a Blacklist check for the Property                                                                 |
| Equals           | @Equals(value: any, validationMessage?: string)                      | check if the Property Value Equals the given Value using (===)                                                |
| NotEquals        | @NotEquals(value: any, validationMessage?: string)                   | check if the Property Value Equals the given Value using (!==)                                                |
| IsInt            | @IsInt(validationMessage?: string)                                   | check if the given Value is an Integer number                                                                 |
| UniqueArray      | @UniqueArray(validationMessage?: string)                             | check an Array if it has Unique Values                                                                        |
| ArrayNotEmpty    | @ArrayNotEmpty(validationMessage?: string)                           | check if the Array not Empty                                                                                  |
| IsPositive       | @IsPositive(validationMessage?: string)                              | check the Value for a Positive number                                                                         |
| IsNegative       | @IsNegative(validationMessage?: string)                              | check the Value for a Negative number                                                                         |
| IsBooleanString  | @IsBooleanString(validationMessage?: string)                         | check if the String has any valid Boolean declaration like (true, false, TRUE, FALSE)                         |
| IsNumberString   | @IsNumberString(validationMessage?: string)                          | check if the String contain Numbers Only                                                                      |
| MinDate          | @MinDate(value: DateTime, validationMessage?: string)                | check if a DateTime is After the value                                                                        |
| MaxDate          | @MaxDate(value: DateTime, validationMessage?: string)                | check if a DateTime is Before the value                                                                       |
| IsAlpha          | @IsAlpha(validationMessage?: string)                                 | check if the String contains only letters a-z                                                                 |
| IsAlphanumeric   | @IsAlphanumeric(validationMessage?: string)                          | check if the string only contains letters a-z and numbers 0-9                                                 |
| IsAscii          | @IsAscii(validationMessage?: string)                                 | check if the String only contains Ascii Characters                                                            |
| IsBase64         | @IsBase64(validationMessage?: string)                                | check if the String is a Base64 string                                                                        |
| IsHexColor       | @IsHexColor(validationMessage?: string)                              | check if a String is a Hex Color supported Hex Color with 8 (with Alpha), 6 (Default) or 3 (Short) Characters |
| IsHexadecimal    | @IsHexadecimal(validationMessage?: string)                           | check if a String is a Hexadecimal String                                                                     |
| IsMacAddress     | @IsMacAddress(validationMessage?: string)                            | check if the String is a MAC Address                                                                          |
| IsIp             | @IsIp(validationMessage?: string)                                    | check if the String is a IP Address                                                                           |
| IsPort           | @IsPort(validationMessage?: string)                                  | check if the String or Number is a Port Number                                                                |
| IsJSON           | @IsJSON(validationMessage?: string)                                  | check if the String is a JSON String                                                                          |
| IsJWT            | @IsJWT(validationMessage?: string)                                   | check if the String is a JSON Web Token                                                                       |
| IsByteLength     | @IsByteLength(value: number, validationMessage?: string)             | check if the String has the Maximum Bytes Size of the given Value                                             |
| IsMongoId        | @IsMongoId(validationMessage?: string)                               | check if a String is a MongoDb Object Id                                                                      |
| IsUrl            | @IsUrl(validationMessage?: string)                                   | check if a String is a valid URL                                                                              |
| IsUUID           | @IsUUID(validationMessage?: string)                                  | check if a String is a UUID                                                                                   |
| IsHash           | @IsHash(validationMessage?: string)                                  | check if the String can be a Hash supported are all Hashes with 32, 40, 64 and 128 bit size                   |
| ValidateClass    | ValidateClass<T>(method: (instance: T, validators: typeof VALIDATIONS) => boolean, validationMessage?: string) | validate the Class with a Function                                  |

---

[<< Index](/wiki/index.md)
