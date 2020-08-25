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
     * @param instance the Instance of the Class to Validate
     *
     * @example
     * class User {
     *     @IsDefined('Name must be defined')
     *     Name: string;
     *
     *     @Min(0, 'Age must be greater -1')
     *     @Max(200, 'Age must me lower 201')
     *     Age: number;
     *
     *     @IsEmail('Email must be a valid email address')
     *     Email: string;
     * }
     * const instance = new User();
     * // returns [
     *      {Message:'Name must be defined'},
     *      {Message:'Age must be greater -1'},
     *      {Message:'Age must me lower 201'},
     *      {Message:'Email must be a valid email address'},
     * ]
     * ClassValidator.Validate(instance);
     * instance.Name = 'Udo';
     * instance.Age = 20;
     * instance.Email = 'udo@address.de';
     * // returns []
     * ClassValidator.Validate(instance);
     */
    static Validate<T>(instance: T): Promise<IValidationError[]>;

    /**
     * validate a plain Object again a Class
     *
     * @param constructor the Class with the Validation Decorators
     * @param value the raw JSON Object
     *
     * @example
     * class User {
     *     @IsDefined('Name must be defined')
     *     Name: string;
     *
     *     @Min(0, 'Age must be greater -1')
     *     @Max(200, 'Age must me lower 201')
     *     Age: number;
     *
     *     @IsEmail('Email must be a valid email address')
     *     Email: string;
     * }
     * const demoUser = {};
     * // returns [
     *      {Message:'Name must be defined'},
     *      {Message:'Age must be greater -1'},
     *      {Message:'Age must me lower 201'},
     *      {Message:'Email must be a valid email address'},
     * ]
     * ClassValidator.Validate(demoUser);
     * demoUser.Name = 'Udo';
     * demoUser.Age = 20;
     * demoUser.Email = 'udo@address.de';
     * // returns []
     * ClassValidator.Validate(demoUser);
     */
    static ValidateObject<T>(constructor: new () => T, value: any): Promise<IValidationError[]>;
}

/**
 * only Validate the Property when the check Method returns True
 *
 * @category Validation Decorator
 *
 * @param cb define the check Method
 */
export function ValidateIf<T>(cb: (d: T) => boolean);

/**
 * check if the Value is missing and ignore all Validations
 *
 * @category Validation Decorator
 */
export function IsOptional();

/**
 * check if the Property was in the Object and have a Value
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function Required(validationMessage?: string);

/**
 * the Property must have a Valid Value
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsDefined(validationMessage?: string);

/**
 * the Property must have a Empty value like empty String or null or undefined
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsEmpty(validationMessage?: string);

/**
 * the Property must can not have a Empty value like empty String or null or undefined
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsNotEmpty(validationMessage?: string);

/**
 * the String at this Property must be a Email Address
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsEmail(validationMessage?: string);

/**
 * the numeric Value must be greater or Equal the given Value
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 */
export function Min(value: number, validationMessage?: string);

/**
 * the numeric Value mut be lower or equal the given Value
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 */
export function Max(value: number, validationMessage?: string);

/**
 * can execute a Function that returns true or false, can perform any Validation you want
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 */
export function CustomValidation(value: (v) => boolean | Promise<boolean>, validationMessage?: string);

/**
 * the String or Array must have the given Length or more
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 */
export function MinLength(value: number, validationMessage?: string);

/**
 * the String or Array must have the given Length or lesser
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 */
export function MaxLength(value: number, validationMessage?: string);

/**
 * implements a Whitelist check for the Property
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 */
export function Whitelist(value: any[], validationMessage?: string);

/**
 * implements a Blacklist check for the Property
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 */
export function Blacklist(value: any[], validationMessage?: string);

/**
 * check if the Property Value Equals the given Value using (===)
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 */
export function Equals<T>(value: T, validationMessage?: string);

/**
 * check if the Property Value Equals the given Value using (!==)
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 */
export function NotEquals(value: any, validationMessage?: string);

/**
 * check if the given Value is an Integer number
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsInt(validationMessage?: string);

/**
 * check an Array if it has Unique Values
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function UniqueArray(validationMessage?: string);

/**
 * check if the Array not Empty
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function ArrayNotEmpty(validationMessage?: string);

/**
 * check the Value for a Positive number
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsPositive(validationMessage?: string);

/**
 * check the Value for a Negative number
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsNegative(validationMessage?: string);

/**
 * check if the String has any valid Boolean declaration like
 *
 * true, false, TRUE, FALSE
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsBooleanString(validationMessage?: string);

/**
 * check if the String contain Numbers Only
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsNumberString(validationMessage?: string);

/**
 * check if a DateTime is After the value
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 */
export function MinDate(value: DateTime, validationMessage?: string);

/**
 * check if a DateTime is Before the value
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 */
export function MaxDate(value: DateTime, validationMessage?: string);

/**
 * check if the String contains only letters a-z
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsAlpha(validationMessage?: string);

/**
 * check if the string only contains letters a-z and numbers 0-9
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsAlphanumeric(validationMessage?: string);

/**
 * check if the String only contains Ascii Characters
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsAscii(validationMessage?: string);

/**
 * check if the String is a Base64 string
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsBase64(validationMessage?: string);

/**
 * check if a String is a Hex Color
 *
 * supported Hex Color with 8 (with Alpha), 6 (Default) or 3 (Short) Characters
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsHexColor(validationMessage?: string);

/**
 * check if a String is a Hexadecimal String
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsHexadecimal(validationMessage?: string);

/**
 * check if the String is a MAC Address
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsMacAddress(validationMessage?: string);

/**
 * check if the String is a IP Address
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsIp(validationMessage?: string);

/**
 * check if the String or Number is a Port Number
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsPort(validationMessage?: string);

/**
 * check if the String is a JSON String
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsJSON(validationMessage?: string);

/**
 * check if the String is a JSON Web Token
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsJWT(validationMessage?: string);

/**
 * check if the String has the Maximum Bytes Size of the given Value
 *
 * @category Validation Decorator
 *
 * @param value
 * @param validationMessage
 */
export function IsByteLength(value: number, validationMessage?: string);

/**
 * check if a String is a MongoDb Object Id
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsMongoId(validationMessage?: string);

/**
 * check if a String is a valid URL
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsUrl(validationMessage?: string);

/**
 * check if a String is a UUID
 *
 * @category Validation Decorator
 *
 * @param validationMessage
 */
export function IsUUID(validationMessage?: string);

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
 */
export function IsHash(validationMessage?: string);

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
