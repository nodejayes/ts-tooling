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
    IsBase64: (v: any) => boolean;
    IsHexColor: (v: any) => boolean;
    IsHexadecimal: (v: any) => boolean;
    IsMacAddress: (v: any) => boolean;
    IsPort: (v: any) => boolean;
    IsIp: (v: any) => boolean;
    IsJSON: (v: any) => boolean;
    IsJWT: (v: any) => boolean;
    IsByteLength: (v: string, validationValue: number) => boolean,
    IsMongoId: (v: any) => boolean;
    MinDate: (v: DateTime, validationValue: DateTime) => boolean,
    MaxDate: (v: DateTime, validationValue: DateTime) => boolean,
    ArrayNotEmpty: (v: any) => boolean;
    UniqueArray: (v: any) => boolean;
    IsAscii: (v: any) => boolean;
    IsAlphanumeric: (v: any) => boolean;
    IsAlpha: (v: any) => boolean;
    IsUrl: (v: any) => boolean;
    IsUUID: (v: any) => boolean;
    IsHash: (v: any) => boolean;
    IsNegative: (v: any) => boolean;
    IsPositive: (v: any) => boolean;
    IsNumberString: (v: any) => boolean;
    IsBooleanString: (v: any) => boolean;
    IsInt: (v: any) => boolean;
    NotEquals: (v: any, validationValue: any) => boolean,
    Equals: (v: any, validationValue: any) => boolean,
    Blacklist: (v: any, validationValue: any) => boolean,
    Whitelist: (v: any, validationValue: any) => boolean,
    MaxLength: (v: any, validationValue: any) => boolean,
    MinLength: (v: any, validationValue: any) => boolean,
    Max: (v: any, validationValue: any) => boolean,
    Min: (v: any, validationValue: any) => boolean,
    IsEmail: (v: any) => boolean;
    IsNotEmpty: (v: any) => boolean;
    IsEmpty: (v: any) => boolean;
    IsDefined: (v: any) => boolean;
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
export function ValidateIf<T>(cb: (d: T) => boolean, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if the Value is missing and ignore all Validations
 *
 * @category Validation Decorator
 *
 * @param scenarios the scenario strings where the validation was executed
 */
export function IsOptional(scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if the Property was in the Object and have a Value
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class RequiredTest {
 *     `@`Required('Invalid', ['S1'])
 *     value: any;
 * }
 * const instance = new RequiredTest();
 * // is invalid
 * instance.value = undefined;
 * instance.value = null;
 * // is valid
 * instance.value = '';
 * instance.value = 1;
 * instance.value = 'a';
 */
export function Required(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * the Property must have a Valid Value
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsDefinedTest {
 *     `@`IsDefined('Invalid', ['S1'])
 *     value: any;
 * }
 * const instance = new IsDefinedTest();
 * // is invalid
 * instance.value = undefined;
 * instance.value = null;
 * // is valid
 * instance.value = 1;
 * instance.value = 'a';
 */
export function IsDefined(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * the Property must have a Empty value like empty String or null or undefined
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsEmptyTest {
 *     `@`IsEmpty('Invalid', ['S1'])
 *     value: any;
 * }
 * const instance = new IsEmptyTest();
 * // is valid
 * instance.value = '';
 * instance.value = undefined;
 * instance.value = null;
 * // is invalid
 * instance.value = 1;
 * instance.value = 'a';
 */
export function IsEmpty(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * the Property must can not have a Empty value like empty String or null or undefined
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsNotEmptyTest {
 *     `@`IsNotEmpty('Invalid', ['S1])
 *     value: string;
 * }
 * const instance = new IsNotEmptyTest();
 * // is invalid
 * instance.value = '';
 * instance.value = null;
 * instance.value = undefined;
 * // is valid
 * instance.value = 'a';
 */
export function IsNotEmpty(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * the String at this Property must be a Email Address
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsEmailClass {
 *     `@`IsEmail('Invalid', ['S1])
 *     value: string;
 * }
 * const instance = new IsEmailClass();
 * // is invalid
 * instance.value = 'xxxxxxxx';
 * // is valid
 * instance.value = 'test@example.com';
 */
export function IsEmail(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * the numeric Value must be greater or Equal the given Value
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class MinClass {
 *     `@`Min(10, 'Invalid', ['S1'])
 *     value: number;
 * }
 * const instance = new MinClass();
 * // is valid
 * instance.value = 10;
 * instance.value = 11;
 * // is invalid
 * instance.value = 9;
 */
export function Min(value: number, validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * the numeric Value mut be lower or equal the given Value
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class MaxClass {
 *     `@`Max(3, 'Invalid', ['S1'])
 *     value: number;
 * }
 * const instance = new MaxClass();
 * // is valid
 * instance.value = 2;
 * instance.value = 3;
 * // is invalid
 * instance.value = 4;
 */
export function Max(value: number, validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * can execute a Function that returns true or false, can perform any Validation you want
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class CustomValidationClass {
 *     `@`CustomValidation(v => v > 5, 'Invalid', ['S1'])
 *     value: number;
 * }
 * const instance = new CustomValidationClass();
 * // is valid
 * instance.value = 6;
 * // is invalid
 * instance.value = 5;
 * instance.value = 4;
 */
export function CustomValidation(value: (v: any) => boolean | Promise<boolean>, validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * the String or Array must have the given Length or more
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class MinLengthClass {
 *     `@`MinLength(3, 'Invalid', ['S1'])
 *     value: string;
 * }
 * const instance = new MinLengthClass();
 * // is invalid
 * instance.value = 'a';
 * instance.value = 'ab';
 * // is valid
 * instance.value = 'abc';
 */
export function MinLength(value: number, validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * the String or Array must have the given Length or lesser
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class MaxLengthClass {
 *     `@`MaxLength(3, 'Invalid', ['S1'])
 *     value: string;
 * }
 * const instance = new MaxLengthClass();
 * // is valid
 * instance.value = 'a';
 * instance.value = 'ab';
 * instance.value = 'abc';
 * // is invalid
 * instance.value = 'abcd';
 */
export function MaxLength(value: number, validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * implements a Whitelist check for the Property
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class WhiteListClass {
 *     `@`Whitelist([1,4,8], 'Invalid', ['S1'])
 *     value: number;
 * }
 * const instance = new WhiteListClass();
 * // is valid
 * instance.value = 1;
 * instance.value = 4;
 * instance.value = 8;
 * // is invalid
 * instance.value = 9;
 */
export function Whitelist(value: any[], validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * implements a Blacklist check for the Property
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class BlacklistClass {
 *     `@`Blacklist([1,4,8], 'Invalid', ['S1'])
 *     value: number;
 * }
 * const instance = new BlacklistClass();
 * // is invalid
 * instance.value = 1;
 * instance.value = 4;
 * instance.value = 8;
 * // is valid
 * instance.value = 9;
 */
export function Blacklist(value: any[], validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if the Property Value Equals the given Value using (===)
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class EqualsClass {
 *     `@`Equals('-', 'Invalid', ['S1'])
 *     value: string;
 * }
 * const instance = new EqualsClass();
 * // is invalid
 * instance.value = 'a';
 * // is valid
 * instance.value = '-';
 */
export function Equals<T>(value: T, validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

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
export function NotEquals(value: any, validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

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
export function IsInt(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

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
export function UniqueArray(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if the Array not Empty
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 */
export function ArrayNotEmpty(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

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
export function IsPositive(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

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
export function IsNegative(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

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
export function IsBooleanString(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

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
export function IsNumberString(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if a DateTime is After the value
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class MinDateTest {
 *     `@`MinDate(new DateTime('UTC', 2019,1,1,0,0,0, 0), 'Invalid', ['S1'])
 *     value: DateTime;
 * }
 * const instance = new MinDateTest();
 * // is valid
 * instance.value = new DateTime('UTC', 2019,1,1,2,0,0, 0);
 * instance.value = new DateTime('UTC', 2019,1,1,0,0,0, 0);
 * // is invalid
 * instance.value = new DateTime('UTC', 2018,12,31,23,59,59, 999);
 */
export function MinDate(value: DateTime, validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if a DateTime is Before the value
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class MaxDateTest {
 *     `@`MaxDate(new DateTime('UTC', 2019,1,1,0,0,0,0), 'Invalid', ['S1'])
 *     value: DateTime;
 * }
 * const instance = new MaxDateTest();
 * // is invalid
 * instance.value = new DateTime('UTC', 2019,1,1,0,0,0, 1);
 * // is valid
 * instance.value = new DateTime('UTC', 2018,12,31,23,59,59, 999);
 * instance.value = new DateTime('UTC', 2019,1,1,0,0,0, 0);
 */
export function MaxDate(value: DateTime, validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if the String contains only letters a-z
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsAlphaTest {
 *     `@`IsAlpha('Invalid', ['S1'])
 *     value: string;
 * }
 * const instance = new IsAlphaTest();
 * // is valid
 * instance.value = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
 * // is invalid
 * instance.value = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1';
 */
export function IsAlpha(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if the string only contains letters a-z and numbers 0-9
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @return {ClassDecorator}
 * @example
 * class IsAlphanumericTest {
 *     `@`IsAlphanumeric('Invalid', ['S1'])
 *     values: string;
 * }
 * const instance = new IsAlphanumericTest();
 * // is valid
 * instance.value = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
 * // is invalid
 * instance.value = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?';
 */
export function IsAlphanumeric(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if the String only contains Ascii Characters
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsAsciiTest {
 *     `@`IsAscii('Invalid', ['S1'])
 *     value: string;
 * }
 * const instance = new IsAsciiTest();
 * // is valid
 * for (let i = 0; i <= 127; i++) {
 *     instance.value += String.fromCharCode(i);
 * }
 * // is invalid
 * for (let i = 128; i <= 255; i++) {
 *     instance.value += String.fromCharCode(i);
 * }
 */
export function IsAscii(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if the String is a Base64 string
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsBase64Test {
 *     `@`IsBase64('Invalid', ['S1'])
 *     value: string;
 * }
 * const instance = new IsBase64Test();
 * // is valid
 * instance.value = 'aGVsbG86d29ybGQhPyQqJigpJy09QH4=';
 * // is invalid
 * instance.value = 'hello:world!?$*&()'-=@~';
 */
export function IsBase64(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if a String is a Hex Color
 *
 * supported Hex Color with 8 (with Alpha), 6 (Default) or 3 (Short) Characters
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsHexColorTest {
 *     `@`IsHexColor('Invalid', ['S1'])
 *     value: string;
 * }
 * const instance = new IsHexColor();
 * // is valid
 * instance.value = '#ffffff';
 * instance.value = '#ffffffff';
 * // is invalid
 * instance.value = '#ffffffffff';
 */
export function IsHexColor(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if a String is a Hexadecimal String
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsHexadecimalTest {
 *     `@`IsHexadecimal('Invalid', ['S1])
 *     value: string;
 * }
 * const instance = new IsHexadecimalTest();
 * // is valid
 * instance.value = 'AF050505';
 * instance.value = 'af050505';
 * instance.value = '0xAF050505';
 * instance.value = '#AF050505';
 * // is invalid
 * instance.value = 'xxxxxxxx';
 */
export function IsHexadecimal(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if the String is a MAC Address
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsMacAddressTest {
 *     `@`IsMacAddress('Invalid', ['S1'])
 *     value: string;
 * }
 * const instance = new IsMacAddressTest();
 * // is valid
 * instance.value = '3D-F2-C9-A6-B3-4F';
 * instance.value = '3D:F2:C9:A6:B3:4F';
 * // is invalid
 * instance.value = '3D:F2:C9:A6:B3:4F:';
 */
export function IsMacAddress(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if the String is a IP Address
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsIpTest {
 *     `@`IsIp('Invalid', ['S1'])
 *     value: string;
 * }
 * const instance = new IsIpTest();
 * // is valid
 * instance.value = '192.168.1.1';
 * // is invalid
 * instance.value = '000.0000.00.00';
 * instance.value = '912.456.123.123';
 */
export function IsIp(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if the String or Number is a Port Number
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsPortTest {
 *     `@`IsPort('Invalid', ['S1'])
 *     value: string;
 * }
 * const instance = new IsPortTest();
 * // is valid
 * instance.value = '1';
 * instance.value = '65536';
 * // is invalid
 * instance.value = '65537';
 * instance.value = '0';
 */
export function IsPort(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if the String is a JSON String
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsJSONTest {
 *     `@`IsJSON('Invalid', ['S1'])
 *     value: string;
 * }
 * const instance = new IsJSONTest();
 * // is valid
 * instance.value = '{"Hello":"World"}';
 * // is invalid
 * instance.value = 'xxxxxxx';
 */
export function IsJSON(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if the String is a JSON Web Token
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsJWTTest {
 *     `@`IsJWT('Invalid', ['S1'])
 *     value: string;
 * }
 * const instance = new IsJWTTest();
 * // is valid
 * instance.value = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTYyMzkwMjJ9.tbDepxpstvGdW8TC3G8zg4B6rUYAOvfzdceoH48wgRQ';
 * // is invalid
 * instance.value = 'Hello';
 */
export function IsJWT(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if the String has the Maximum Bytes Size of the given Value
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsByteLengthTest {
 *     `@`IsByteLength(4, 'Invalid', ['S1])
 *     value: string
 * }
 * const instance = new IsByteLengthTest();
 * // is valid
 * instance.value = '1234';
 * // is invalid
 * instance.value = '12345';
 */
export function IsByteLength(value: number, validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if a String is a MongoDb Object Id
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsMongoIdTest {
 *     `@`IsMongoId('Invalid', ['S1'])
 *     value: string;
 * }
 * const instance = new IsMongoIdTest();
 * // is valid
 * instance.value = '5dfaa9da5fca3be0982a4301';
 * // is invalid
 * instance.value = 'abc';
 */
export function IsMongoId(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if a String is a valid URL
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsUrlTest {
 *     `@`IsUrl('Invalid', ['S1'])
 *     value: string;
 * }
 * const instance = new IsUrlTest();
 * // is valid
 * instance.value = 'http://foo.bar.com/';
 * instance.value = 'http://thingiverse.com/download:1894343';
 * // is invalid
 * instance.value = 'aaa';
 * instance.value = 'https://w';
 */
export function IsUrl(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * check if a String is a UUID
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 * @param scenarios the scenario strings where the validation was executed
 * @example
 * class IsUUIDTest {
 *     `@`IsUUID('Invalid', ['S1'])
 *     value: string;
 * }
 * const instance = new IsUUIDTest();
 * // is valid
 * instance.value = '3e019b17-e95e-40fc-9606-4041efcb2684';
 * instance.value = '{3e019b17-e95e-40fc-9606-4041efcb2684}';
 * // is invalid
 * instance.value = 'no uuid';
 */
export function IsUUID(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

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
 * @example
 * class IsHashTest {
 *     `@`IsHash('Invalid', ['S1'])
 *     value: string;
 * }
 * const instance = new IsHashTest();
 * // is valid
 * // MD5
 * instance.value = 'd41d8cd98f00b204e9800998ecf8427e';
 * // SHA-1
 * instance.value = 'da39a3ee5e6b4b0d3255bfef95601890afd80709';
 * // SHA-256
 * instance.value = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
 * // SHA-512
 * instance.value = 'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e';
 * // RIPEMD-160
 * instance.value = '9c1185a5c5e9fc54612808977ee8f548b2258d31';
 * // Snefru
 * instance.value = '8617f366566a011837f4fb4ba5bedea2b892f3ed8b894023d16ae344b2be5881';
 * // GHOST
 * instance.value = 'ce85b99cc46752fffee35cab9a7b0278abb4c2d2055cff685af4912c49490f8d';
 * // Whirlpool
 * instance.value = '19fa61d75522a4669b44e39c1d2e1726c530232130d407f89afee0964997f7a73e83be698b288febcf88e3e03c4f0757ea8964e59b63d93708b138cc42a66eb3';
 * // is invalid
 * instance.value = 'HalloWelt';
 */
export function IsHash(validationMessage?: string, scenarios?: string[]): (target: any, propertyKey: string) => void;

/**
 * validate the Class with a Function
 *
 * @category Validation Decorator
 *
 * @param method
 * @param validationMessage
 * @example
 * `@`ValidateClass((instance, validators) => validators.IsEmail(instance.email) && validators.Max(instance.num, 20), 'Invalid')
 * class ValidateClassTest {
 *     email: string;
 *     num: number;
 * }
 * const instance = new ValidateClassTest();
 * // is invalid
 * instance.email = 'test@example.com';
 * instance.num = 21;
 * // is valid
 * instance.email = 'test@example.com';
 * instance.num = 19;
 */
export function ValidateClass<T>(method: (instance: T, validators: typeof VALIDATIONS) => boolean, validationMessage?: string): (target: any) => void;
