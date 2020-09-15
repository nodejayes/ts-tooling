import {DateTime} from '../../../types/datetime';

/**
 * the Structure of a Validation Error
 *
 * @category Validation
 */
export interface IValidationError {
    /**
     * the Error Message String
     */
    Message: string;
}

export const VALIDATIONS: {
    IsBase64: (v) => boolean;
    IsHexColor: (v) => boolean;
    IsHexadecimal: (v) => boolean;
    IsMacAddress: (v) => boolean;
    IsPort: (v) => boolean;
    IsIp: (v) => boolean;
    IsJSON: (v) => boolean;
    IsJWT: (v) => boolean;
    IsByteLength: (v: string, validationValue: number) => boolean,
    IsMongoId: (v) => boolean;
    MinDate: (v: DateTime, validationValue: DateTime) => boolean,
    MaxDate: (v: DateTime, validationValue: DateTime) => boolean,
    ArrayNotEmpty: (v) => boolean;
    UniqueArray: (v) => boolean;
    IsAscii: (v) => boolean;
    IsAlphanumeric: (v) => boolean;
    IsAlpha: (v) => boolean;
    IsUrl: (v) => boolean;
    IsUUID: (v) => boolean;
    IsHash: (v) => boolean;
    IsNegative: (v) => boolean;
    IsPositive: (v) => boolean;
    IsNumberString: (v) => boolean;
    IsBooleanString: (v) => boolean;
    IsInt: (v) => boolean;
    NotEquals: (v, validationValue) => boolean,
    Equals: (v, validationValue) => boolean,
    Blacklist: (v, validationValue) => boolean,
    Whitelist: (v, validationValue) => boolean,
    MaxLength: (v, validationValue) => boolean,
    MinLength: (v, validationValue) => boolean,
    Max: (v, validationValue) => boolean,
    Min: (v, validationValue) => boolean,
    IsEmail: (v) => boolean;
    IsNotEmpty: (v) => boolean;
    IsEmpty: (v) => boolean;
    IsDefined: (v) => boolean;
};

/**
 * a Validator to validate decorated Typescript Classes
 *
 * @category Util
 */
export class ClassValidator {
    /**
     * validate again a Decorated Class Instance
     *
     * @param scenario scenario the Name of the Scenario to Validate with
     * @param instance the Instance of the Class to Validate
     *
     * @example
     * class User {
     *     `@`IsDefined('Name must be defined', ['Insert', 'Read'])
     *     Name: string;
     *
     *     `@`Min(0, 'Age must be greater -1', ['Insert', 'Update', 'Read'])
     *     `@`Max(200, 'Age must me lower 201', ['Insert', 'Update', 'Read'])
     *     Age: number;
     *
     *     `@`IsEmail('Email must be a valid email address', ['Insert', 'Update', 'Read'])
     *     Email: string;
     * }
     * const instance = new User();
     * // returns [
     *      {Message:'Name must be defined'},
     *      {Message:'Age must be greater -1'},
     *      {Message:'Age must me lower 201'},
     *      {Message:'Email must be a valid email address'},
     * ]
     * ClassValidator.Validate('Insert', instance);
     * instance.Name = 'Udo';
     * instance.Age = 20;
     * instance.Email = 'udo@address.de';
     * // returns []
     * ClassValidator.Validate('Insert', instance);
     */
    static Validate<T>(scenario: string, instance: T): Promise<IValidationError[]>;

    /**
     * validate a plain Object again a Class
     *
     * @param constructor the Class with the Validation Decorators
     * @param scenario scenario the Name of the Scenario to Validate with
     * @param value the raw JSON Object
     *
     * @example
     * class User {
     *     `@`IsDefined('Name must be defined', ['Insert', 'Read'])
     *     Name: string;
     *
     *     `@`Min(0, 'Age must be greater -1', ['Insert', 'Update', 'Read'])
     *     `@`Max(200, 'Age must me lower 201', ['Insert', 'Update', 'Read'])
     *     Age: number;
     *
     *     `@`IsEmail('Email must be a valid email address', ['Insert', 'Update', 'Read'])
     *     Email: string;
     * }
     * const instance = {
     *     Name: 'Udo',
     *     Age: 20,
     *     Email: 'udo@address.de',
     * };
     * // returns [
     *      {Message:'Name must be defined'},
     *      {Message:'Age must be greater -1'},
     *      {Message:'Age must me lower 201'},
     *      {Message:'Email must be a valid email address'},
     * ]
     * ClassValidator.ValidateObject(User, 'Insert', {});
     * // returns []
     * ClassValidator.ValidateObject(User, 'Insert', instance);
     */
    static ValidateObject<T>(constructor: new () => T, scenario: string, value: any): Promise<IValidationError[]>;
}

/**
 * only Validate the Property when the check Method returns True
 *
 * @category Validation Decorator
 *
 * @param cb define the check Method
 * @param scenarios the scenario strings where the validation was executed
 */
export function ValidateIf<T>(cb: (d: T) => boolean, scenarios?: string[]);

/**
 * check if the Value is missing and ignore all Validations
 *
 * @category Validation Decorator
 *
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsOptional(scenarios?: string[]);

/**
 * check if the Property was in the Object and have a Value
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function Required(validationMessage?: string, scenarios?: string[]);

/**
 * the Property must have a Valid Value
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsDefined(validationMessage?: string, scenarios?: string[]);

/**
 * the Property must have a Empty value like empty String or null or undefined
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsEmpty(validationMessage?: string, scenarios?: string[]);

/**
 * the Property must can not have a Empty value like empty String or null or undefined
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsNotEmpty(validationMessage?: string, scenarios?: string[]);

/**
 * the String at this Property must be a Email Address
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsEmail(validationMessage?: string, scenarios?: string[]);

/**
 * the numeric Value must be greater or Equal the given Value
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function Min(value: number, validationMessage?: string, scenarios?: string[]);

/**
 * the numeric Value mut be lower or equal the given Value
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function Max(value: number, validationMessage?: string, scenarios?: string[]);

/**
 * can execute a Function that returns true or false, can perform any Validation you want
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function CustomValidation(value: (v) => boolean | Promise<boolean>, validationMessage?: string, scenarios?: string[]);

/**
 * the String or Array must have the given Length or more
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function MinLength(value: number, validationMessage?: string, scenarios?: string[]);

/**
 * the String or Array must have the given Length or lesser
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function MaxLength(value: number, validationMessage?: string, scenarios?: string[]);

/**
 * implements a Whitelist check for the Property
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function Whitelist(value: any[], validationMessage?: string, scenarios?: string[]);

/**
 * implements a Blacklist check for the Property
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function Blacklist(value: any[], validationMessage?: string, scenarios?: string[]);

/**
 * check if the Property Value Equals the given Value using (===)
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function Equals<T>(value: T, validationMessage?: string, scenarios?: string[]);

/**
 * check if the Property Value Equals the given Value using (!==)
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class NotEqualsTest {
 *     `@`NotEquals('a', 'Invalid', ['S1'])
 *     value: string;
 * }
 * const instance = new NotEqualsTest();
 * // is invalid
 * instance.value = 'a';
 * // is valid
 * instance.value = 'ab';
 */
export function NotEquals(value: any, validationMessage?: string, scenarios?: string[]);

/**
 * check if the given Value is an Integer number
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsIntTest {
 *     `@`IsInt('Invalid', ['S1'])
 *     value: any;
 * }
 * const instance = new IsIntTest();
 * // is valid
 * instance.value = 1;
 * // is invalid
 * instance.value = 'a';
 */
export function IsInt(validationMessage?: string, scenarios?: string[]);

/**
 * check an Array if it has Unique Values
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class UniqueArrayTest {
 *     `@`UniqueArray('Invalid', ['S1'])
 *     value: number[];
 * }
 * const instance = UniqueArrayTest();
 * // is valid
 * instance.value = [1,2,3,4];
 * // is invalid
 * instance.value = [1,1,3,4];
 */
export function UniqueArray(validationMessage?: string, scenarios?: string[]);

/**
 * check if the Array not Empty
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function ArrayNotEmpty(validationMessage?: string, scenarios?: string[]);

/**
 * check the Value for a Positive number
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsPositiveCheck {
 *      `@`IsPositive('Invalid', ['S1'])
 *      prop: int;
 * }
 * const instance = new IsPositiveCheck();
 * instance.prop = 0;
 * // no error was return
 * await ClassValidator.Validate('S1', instance);
 * instance.prop = 1;
 * // no error was return
 * await ClassValidator.Validate('S1', instance);
 * instance.prop = -1;
 * // one error was returned
 * await ClassValidator.Validate('S1', instance);
 */
export function IsPositive(validationMessage?: string, scenarios?: string[]);

/**
 * check the Value for a Negative number
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsNegativeCheck {
 *      `@`IsNegative('Invalid', ['S1'])
 *      prop: int;
 * }
 * const instance = new IsNegativeCheck();
 * instance.prop = 0;
 * // one error was returned
 * await ClassValidator.Validate('S1', instance);
 * instance.prop = 1;
 * // one error was returned
 * await ClassValidator.Validate('S1', instance);
 * instance.prop = -1;
 * // no error was returned
 * await ClassValidator.Validate('S1', instance);
 */
export function IsNegative(validationMessage?: string, scenarios?: string[]);

/**
 * check if the String has any valid Boolean declaration like
 *
 * true, false, TRUE, FALSE
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsBooleanStringTest {
 *     `@`IsBooleanString('Invalid', ['S1'])
 *     value: string;
 * }
 * const instance = new IsBooleanStringTest();
 * instance.value = 'abc';
 * // returns a error
 * await ClassValidator.Validate('S1', instance);
 * instance.value = 'true';
 * // returns no error
 * await ClassValidator.Validate('S1', instance);
 * instance.value = 'false';
 * // returns no error
 * await ClassValidator.Validate('S1', instance);
 * instance.value = 'TRUE';
 * // returns no error
 * await ClassValidator.Validate('S1', instance);
 * instance.value = 'FALSE';
 * // returns no error
 * await ClassValidator.Validate('S1', instance);
 */
export function IsBooleanString(validationMessage?: string, scenarios?: string[]);

/**
 * check if the String contain Numbers Only
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsNumberStringTest {
 *     `@`IsNumberString('Invalid', ['S1'])
 *     value: string;
 * }
 * const instance = new IsNumberStringTest();
 * // is valid
 * instance.value = '1';
 * // is invalid
 * instance.value = '1a';
 */
export function IsNumberString(validationMessage?: string, scenarios?: string[]);

/**
 * check if a DateTime is After the value
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function MinDate(value: DateTime, validationMessage?: string, scenarios?: string[]);

/**
 * check if a DateTime is Before the value
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function MaxDate(value: DateTime, validationMessage?: string, scenarios?: string[]);

/**
 * check if the String contains only letters a-z
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsAlpha(validationMessage?: string, scenarios?: string[]);

/**
 * check if the string only contains letters a-z and numbers 0-9
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsAlphanumeric(validationMessage?: string, scenarios?: string[]);

/**
 * check if the String only contains Ascii Characters
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsAscii(validationMessage?: string, scenarios?: string[]);

/**
 * check if the String is a Base64 string
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsBase64(validationMessage?: string, scenarios?: string[]);

/**
 * check if a String is a Hex Color
 *
 * supported Hex Color with 8 (with Alpha), 6 (Default) or 3 (Short) Characters
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsHexColor(validationMessage?: string, scenarios?: string[]);

/**
 * check if a String is a Hexadecimal String
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsHexadecimal(validationMessage?: string, scenarios?: string[]);

/**
 * check if the String is a MAC Address
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsMacAddress(validationMessage?: string, scenarios?: string[]);

/**
 * check if the String is a IP Address
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsIp(validationMessage?: string, scenarios?: string[]);

/**
 * check if the String or Number is a Port Number
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsPort(validationMessage?: string, scenarios?: string[]);

/**
 * check if the String is a JSON String
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsJSON(validationMessage?: string, scenarios?: string[]);

/**
 * check if the String is a JSON Web Token
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsJWT(validationMessage?: string, scenarios?: string[]);

/**
 * check if the String has the Maximum Bytes Size of the given Value
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsByteLength(value: number, validationMessage?: string, scenarios?: string[]);

/**
 * check if a String is a MongoDb Object Id
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsMongoId(validationMessage?: string, scenarios?: string[]);

/**
 * check if a String is a valid URL
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsUrl(validationMessage?: string, scenarios?: string[]);

/**
 * check if a String is a UUID
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsUUID(validationMessage?: string, scenarios?: string[]);

/**
 * check if the String can be a Hash
 *
 * supported are all Hashes with 32, 40, 64 and 128 bit size
 *
 * for Example MD5, SHA-1, SHA-256, SHA-512, RIPEMD-160, Snefru, GHOST and Whirlpool
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsHash(validationMessage?: string, scenarios?: string[]);

/**
 * validate the Class with a Function
 *
 * @category Validation Decorator
 *
 * @param method
 * @param validationMessage
 *
 */
export function ValidateClass<T>(method: (instance: T, validators: typeof VALIDATIONS) => boolean, validationMessage?: string);
