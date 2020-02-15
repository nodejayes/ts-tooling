### Class Validator

a Validator to validate decorated Typescript Classes

[<< Index](/wiki/index.md)

---

#### Validate

validate again a Decorated Class Instance

    Validate<T>(instance: T): Promise<IValidationError[]>

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

#### ValidateIf

only Validate the Property when the check Method returns True

    ValidateIf<T>(cb: (d: T) => boolean)
    
| Name        | Type     | Description                              |
|-------------|----------|------------------------------------------|
| cb          | function | a Method that returns boolean            |

```typescript
// only validate the Class when Validate Property is true
class ConditionalValidation {
    Validate: boolean;

    @ValidateIf<ConditionalValidation>(m => m.Validate)
    @IsDefined()
    Name: string;
}
```

---

[<< Index](/wiki/index.md)
