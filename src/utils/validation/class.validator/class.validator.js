const {ObjectFactory} = require('../../../types/object');

function isObject(v) {
    return v && typeof v === typeof {};
}

function isFunction(v) {
    return typeof v === typeof function () {};
}

function isValidUrl(url) {
    return /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/g.test(url);
}

const BASE_VALIDATIONS = {
    IsBase64: v => !/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{4})$/g.test(v),
    IsHexColor: v => !/^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/g.test(v),
    IsHexadecimal: v => !/(?:0[xX])?[0-9a-fA-F]+/g.test(v),
    IsMacAddress: v => !/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/g.test(v),
    IsPort: v => {
        let val = v;
        if (typeof v === typeof '') {
            val = parseInt(v);
        }
        if (isNaN(val)) {
            return true;
        }
        return val > 65536 ||val < 1
    },
    IsIp: v => !/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g.test(v),
    IsJSON: v => {
        try {
            JSON.parse(v);
            return false;
        } catch (e) {
            return true;
        }
    },
    IsJWT: v => !/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/g.test(v),
    IsByteLength: (v, validationValue) => v.Bytes() > validationValue,
    IsMongoId: v => !/^[0-9a-fA-F]{24}$/g.test(v),
    MinDate: (v, validationValue) => v.IsBefore(validationValue),
    MaxDate: (v, validationValue) => v.IsAfter(validationValue),
    ArrayNotEmpty: v => v ? !v.Any() : false,
    UniqueArray: v => {
        const tmp = [];
        for (const value of v) {
            if (tmp.Contains(value)) {
                return true;
            }
            tmp.Add(value);
        }
        return false;
    },
    IsAscii: v => typeof v !== typeof '' || !v.IsAscii(),
    IsAlphanumeric: v => !/^[a-zA-Z0-9]*$/g.test(v),
    IsAlpha: v => !/^[a-zA-Z]*$/g.test(v),
    IsUrl: v => !isValidUrl(v),
    IsUUID: v => !/^\{?[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\}?$/g.test(v),
    IsHash: v => !/^[0-9a-fA-F]{32}$/g.test(v) &&
        !/^[0-9a-fA-F]{40}$/g.test(v) &&
        !/^[0-9a-fA-F]{64}$/g.test(v) &&
        !/^[0-9a-fA-F]{128}$/g.test(v),
    IsNegative: v => v >= 0,
    IsPositive: v => v < 0,
    IsNumberString: v => isNaN(parseFloat(v)),
    IsBooleanString: v => v !== 'true' && v !== 'false' && v !== 'TRUE' && v !== 'FALSE',
    IsInt: v => isNaN(parseInt(v.toString())) || v.toString().Contains('.'),
    NotEquals: (v, validationValue) => validationValue === v,
    Equals: (v, validationValue) => validationValue !== v,
    Blacklist: (v, validationValue) => validationValue.Contains(v),
    Whitelist: (v, validationValue) => !validationValue.Contains(v),
    MaxLength: (v, validationValue) => v.length > validationValue,
    MinLength: (v, validationValue) => v.length <= validationValue,
    Max: (v, validationValue) => v > validationValue,
    Min: (v, validationValue) => v < validationValue,
    IsEmail: v => !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v),
    IsNotEmpty: v => v === '' || v === null || v === undefined,
    IsEmpty: v => v !== '' && v !== null && v !== undefined,
    IsDefined: v => v === null || v === undefined,
};
/**
 * @ignore
 */
const VALIDATIONS = {
    IsBase64: v => !BASE_VALIDATIONS.IsBase64(v),
    IsHexColor: v => !BASE_VALIDATIONS.IsHexColor(v),
    IsHexadecimal: v => !BASE_VALIDATIONS.IsHexadecimal(v),
    IsMacAddress: v => !BASE_VALIDATIONS.IsMacAddress(v),
    IsPort: v => !BASE_VALIDATIONS.IsPort(v),
    IsIp: v => !BASE_VALIDATIONS.IsIp(v),
    IsJSON: v => !BASE_VALIDATIONS.IsJSON(v),
    IsJWT: v => !BASE_VALIDATIONS.IsJWT(v),
    IsByteLength: (v, validationValue) => !BASE_VALIDATIONS.IsByteLength(v, validationValue),
    IsMongoId: v => !BASE_VALIDATIONS.IsMongoId(v),
    MinDate: (v, validationValue) => !BASE_VALIDATIONS.MinDate(v, validationValue),
    MaxDate: (v, validationValue) => !BASE_VALIDATIONS.MaxDate(v, validationValue),
    ArrayNotEmpty: v => !BASE_VALIDATIONS.ArrayNotEmpty(v),
    UniqueArray: v => !BASE_VALIDATIONS.UniqueArray(v),
    IsAscii: v => !BASE_VALIDATIONS.IsAscii(v),
    IsAlphanumeric: v => !BASE_VALIDATIONS.IsAlphanumeric(v),
    IsAlpha: v => !BASE_VALIDATIONS.IsAlpha(v),
    IsUrl: v => !BASE_VALIDATIONS.IsUrl(v),
    IsUUID: v => !BASE_VALIDATIONS.IsUUID(v),
    IsHash: v => !BASE_VALIDATIONS.IsHash(v),
    IsNegative: v => !BASE_VALIDATIONS.IsNegative(v),
    IsPositive: v => !BASE_VALIDATIONS.IsPositive(v),
    IsNumberString: v => !BASE_VALIDATIONS.IsNumberString(v),
    IsBooleanString: v => !BASE_VALIDATIONS.IsBooleanString(v),
    IsInt: v => !BASE_VALIDATIONS.IsInt(v),
    NotEquals: (v, validationValue) => !BASE_VALIDATIONS.NotEquals(v, validationValue),
    Equals: (v, validationValue) => !BASE_VALIDATIONS.Equals(v, validationValue),
    Blacklist: (v, validationValue) => !BASE_VALIDATIONS.Blacklist(v, validationValue),
    Whitelist: (v, validationValue) => !BASE_VALIDATIONS.Whitelist(v, validationValue),
    MaxLength: (v, validationValue) => !BASE_VALIDATIONS.MaxLength(v, validationValue),
    MinLength: (v, validationValue) => !BASE_VALIDATIONS.MinLength(v, validationValue),
    Max: (v, validationValue) => !BASE_VALIDATIONS.Max(v, validationValue),
    Min: (v, validationValue) => !BASE_VALIDATIONS.Min(v, validationValue),
    IsEmail: v => !BASE_VALIDATIONS.IsEmail(v),
    IsNotEmpty: v => !BASE_VALIDATIONS.IsNotEmpty(v),
    IsEmpty: v => !BASE_VALIDATIONS.IsEmpty(v),
    IsDefined: v => !BASE_VALIDATIONS.IsDefined(v),
};

/**
 * a Validator to validate decorated Typescript Classes
 *
 * @class module:utils/validation.ClassValidator
 */
class ClassValidator {}

/**
 * validate again a Decorated Class Instance
 *
 * @function module:utils/validation.ClassValidator#Validate
 * @static
 * @param {any} instance the Instance of the Class to Validate
 * @param {string} scenario the Name of the Scenario to Validate with
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
ClassValidator.Validate = async (scenario, instance) => {
    const errors = [];
    checkForRequired(instance, errors);
    for (const key of Object.keys(instance)) {
        const validationRules = ValidationStore[`${instance.constructor.name}_${key}`];
        const value = instance[key];

        if (validationRules) {

            if (validationRules['ValidateIf'] && validationRules['ValidateIf'].Any()) {
                const validationScenarios = validationRules['ValidateIf'][2];
                if ((Array.isArray(validationScenarios) && !validationScenarios.Contains(scenario)) ||
                    (isFunction(validationRules['ValidateIf'][0]) && !validationRules['ValidateIf'][0](instance))) {
                    continue;
                }
            } else if (validationRules['IsOptional']) {
                const validationScenarios = validationRules['IsOptional'][2];
                if ((Array.isArray(validationScenarios) && !validationScenarios.Contains(scenario)) ||
                    (validationRules['IsOptional'][0] === true && !value)) {
                    continue;
                }
            }

            for (const validationKey of Object.keys(validationRules)) {
                const validationValue = validationRules[validationKey][0];
                const validationMessage = validationRules[validationKey][1];
                const validationScenarios = validationRules[validationKey][2];
                if (Array.isArray(validationScenarios) && !validationScenarios.Contains(scenario)) {
                    // can't execute the validation its not in the scenario
                    continue;
                }
                switch (validationKey) {
                    case 'IsDefined':
                        executeValidation(value, BASE_VALIDATIONS.IsDefined, validationMessage, errors);
                        break;
                    case 'IsEmpty':
                        executeValidation(value, BASE_VALIDATIONS.IsEmpty, validationMessage, errors);
                        break;
                    case 'IsNotEmpty':
                        executeValidation(value, BASE_VALIDATIONS.IsNotEmpty, validationMessage, errors);
                        break;
                    case 'IsEmail':
                        executeValidation(value, BASE_VALIDATIONS.IsEmail, validationMessage, errors);
                        break;
                    case 'Min':
                        executeValidation(value, v => BASE_VALIDATIONS.Min(v, validationValue), validationMessage, errors);
                        break;
                    case 'Max':
                        executeValidation(value, v => BASE_VALIDATIONS.Max(v, validationValue), validationMessage, errors);
                        break;
                    case 'MinLength':
                        executeValidation(value, v => BASE_VALIDATIONS.MinLength(v, validationValue), validationMessage, errors);
                        break;
                    case 'MaxLength':
                        executeValidation(value, v => BASE_VALIDATIONS.MaxLength(v, validationValue), validationMessage, errors);
                        break;
                    case 'Whitelist':
                        executeValidation(value, v => BASE_VALIDATIONS.Whitelist(v, validationValue), validationMessage, errors);
                        break;
                    case 'Blacklist':
                        executeValidation(value, v => BASE_VALIDATIONS.Blacklist(v, validationValue), validationMessage, errors);
                        break;
                    case 'Equals':
                        executeValidation(value, v => BASE_VALIDATIONS.Equals(v, validationValue), validationMessage, errors);
                        break;
                    case 'NotEquals':
                        executeValidation(value, v => BASE_VALIDATIONS.NotEquals(v, validationValue), validationMessage, errors);
                        break;
                    case 'IsInt':
                        executeValidation(value, BASE_VALIDATIONS.IsInt, validationMessage, errors);
                        break;
                    case 'IsBooleanString':
                        executeValidation(value, BASE_VALIDATIONS.IsBooleanString, validationMessage, errors);
                        break;
                    case 'IsNumberString':
                        executeValidation(value, BASE_VALIDATIONS.IsNumberString, validationMessage, errors);
                        break;
                    case 'IsPositive':
                        executeValidation(value, BASE_VALIDATIONS.IsPositive, validationMessage, errors);
                        break;
                    case 'IsNegative':
                        executeValidation(value, BASE_VALIDATIONS.IsNegative, validationMessage, errors);
                        break;
                    case 'IsHash':
                        executeValidation(value, BASE_VALIDATIONS.IsHash, validationMessage, errors);
                        break;
                    case 'IsUUID':
                        executeValidation(value, BASE_VALIDATIONS.IsUUID, validationMessage, errors);
                        break;
                    case 'IsUrl':
                        executeValidation(value, BASE_VALIDATIONS.IsUrl, validationMessage, errors);
                        break;
                    case 'IsAlpha':
                        executeValidation(value, BASE_VALIDATIONS.IsAlpha, validationMessage, errors);
                        break;
                    case 'IsAlphanumeric':
                        executeValidation(value, BASE_VALIDATIONS.IsAlphanumeric, validationMessage, errors);
                        break;
                    case 'IsAscii':
                        executeValidation(value, BASE_VALIDATIONS.IsAscii, validationMessage, errors);
                        break;
                    case 'IsBase64':
                        executeValidation(value, BASE_VALIDATIONS.IsBase64, validationMessage, errors);
                        break;
                    case 'IsHexColor':
                        executeValidation(value, BASE_VALIDATIONS.IsHexColor, validationMessage, errors);
                        break;
                    case 'IsHexadecimal':
                        executeValidation(value, BASE_VALIDATIONS.IsHexadecimal, validationMessage, errors);
                        break;
                    case 'IsMacAddress':
                        executeValidation(value, BASE_VALIDATIONS.IsMacAddress, validationMessage, errors);
                        break;
                    case 'IsPort':
                        executeValidation(value, BASE_VALIDATIONS.IsPort, validationMessage, errors);
                        break;
                    case 'IsIp':
                        executeValidation(value, BASE_VALIDATIONS.IsIp, validationMessage, errors);
                        break;
                    case 'IsJSON':
                        executeValidation(value, BASE_VALIDATIONS.IsJSON, validationMessage, errors);
                        break;
                    case 'IsJWT':
                        executeValidation(value, BASE_VALIDATIONS.IsJWT, validationMessage, errors);
                        break;
                    case 'IsByteLength':
                        executeValidation(value, v => BASE_VALIDATIONS.IsByteLength(v, validationValue), validationMessage, errors);
                        break;
                    case 'IsMongoId':
                        executeValidation(value, BASE_VALIDATIONS.IsMongoId, validationMessage, errors);
                        break;
                    case 'MinDate':
                        executeValidation(value, v => BASE_VALIDATIONS.MinDate(v, validationValue), validationMessage, errors);
                        break;
                    case 'MaxDate':
                        executeValidation(value, v => BASE_VALIDATIONS.MaxDate(v, validationValue), validationMessage, errors);
                        break;
                    case 'ArrayNotEmpty':
                        executeValidation(value, BASE_VALIDATIONS.ArrayNotEmpty, validationMessage, errors);
                        break;
                    case 'UniqueArray':
                        executeValidation(value, BASE_VALIDATIONS.UniqueArray, validationMessage, errors);
                        break;
                    case 'CustomValidation':
                        executeValidation(value, v => !validationValue(v), validationMessage, errors);
                        break;
                }
            }
        }

        if (Array.isArray(value) && value.Any()) {
            for (const entry of value) {
                if (isObject(entry)) {
                    // validate the SubObject but skip circulars
                    if (!ObjectFactory.IsCircular(entry)) {
                        const subErrors = await ClassValidator.Validate(scenario, entry);
                        if (subErrors.Any()) {
                            errors.AddRange(subErrors);
                        }
                    }
                }
            }
        } else if (isObject(value)) {
            // validate the SubObject but skip circulars
            if (!ObjectFactory.IsCircular(value)) {
                const subErrors = await ClassValidator.Validate(scenario, value);
                if (subErrors.Any()) {
                    errors.AddRange(subErrors);
                }
            }
        }
    }
    if (!errors.Any()) {
        const validationRules = ValidationStore[`${instance.constructor.name}_`];
        if (validationRules && validationRules['ValidateClass']) {
            const validationValue = validationRules['ValidateClass'][0];
            const validationMessage = validationRules['ValidateClass'][1];
            if (typeof validationValue === typeof function () {}) {
                if (!validationValue(instance, VALIDATIONS)) {
                    errors.Add({Message: validationMessage});
                }
            }
        }
    }
    return errors;
};

/**
 * validate a plain Object again a Class
 *
 * @function module:utils/validation.ClassValidator#ValidateObject
 * @static
 * @param {constructor} constructor the Class with the Validation Decorators
 * @param {string} scenario the Name of the Scenario to Validate with
 * @param {any} value the raw JSON Object
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
ClassValidator.ValidateObject = async (constructor, scenario, value) => {
    const inst = new constructor();
    for (const key of Object.keys(value)) {
        inst[key] = value[key];
    }
    return ClassValidator.Validate(scenario, inst);
};

const ValidationStore = {};

function checkForRequired(instance, errors) {
    const props = Object.keys(ValidationStore).FindAll(i => i.StartsWith(instance.constructor.name));
    for (const prop of props) {
        const validationRules = ValidationStore[prop];
        if (validationRules['Required']) {
            const propName = prop.Split('_').ElementAt(1);
            if (instance[propName] === undefined || instance[propName] === null) {
                errors.Add({Message:validationRules['Required'][1]});
            }
        }
    }
}

function executeValidation(value, cb, validationMessage, errors) {
    if (cb(value)) {
        errors.Add({Message: validationMessage});
    }
}

function registerInStore(target, propertyKey, targetKey, value, validationMessage, scenarios) {
    const key = `${target.constructor.name}_${propertyKey}`;
    if (!ValidationStore[key]) {
        ValidationStore[key] = {};
    }
    ValidationStore[key][targetKey] = [value, validationMessage, scenarios];
}

/**
 * only Validate the Property when the check Method returns True
 *
 * @function module:utils/validation.ValidateIf
 *
 * @param cb {function} define the check Method
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
 */
function ValidateIf(cb, scenarios) {
    return function (target, propertyKey) {
        registerInStore(target, propertyKey, 'ValidateIf', cb, '', scenarios);
    }
}

/**
 * check if the Value is missing and ignore all Validations
 *
 * @function module:utils/validation.IsOptional
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
 */
function IsOptional(scenarios) {
    return function (target, propertyKey) {
        registerInStore(target, propertyKey, 'IsOptional', true, '', scenarios);
    }
}

/**
 * check if the Property was in the Object and have a Value
 *
 * @function module:utils/validation.Required
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
 * instance.value = 1;
 * instance.value = 'a';
 */
function Required(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be set.`;
        registerInStore(target, propertyKey, 'Required', true, message, scenarios);
    }
}

/**
 * the Property must have a Valid Value
 *
 * @function module:utils/validation.IsDefined
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function IsDefined(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be defined.`;
        registerInStore(target, propertyKey, 'IsDefined', true, message, scenarios);
    }
}

/**
 * the Property must have a Empty value like empty String or null or undefined
 *
 * @function module:utils/validation.IsEmpty
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
 * @example
 * class IsEmptyTest {
 *     `@`IsEmpty('Invalid', ['S1'])
 *     value: any;
 * }
 * const instance = new IsEmptyTest();
 * // is valid
 * instance.value = undefined;
 * instance.value = null;
 * // is invalid
 * instance.value = 1;
 * instance.value = 'a';
 */
function IsEmpty(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be Empty.`;
        registerInStore(target, propertyKey, 'IsEmpty', true, message, scenarios);
    }
}

/**
 * the Property must can not have a Empty value like empty String or null or undefined
 *
 * @function module:utils/validation.IsNotEmpty
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function IsNotEmpty(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can not be Empty.`;
        registerInStore(target, propertyKey, 'IsNotEmpty', true, message, scenarios);
    }
}

/**
 * the String at this Property must be a Email Address
 *
 * @function module:utils/validation.IsEmail
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function IsEmail(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a Email Address.`;
        registerInStore(target, propertyKey, 'IsEmail', true, message, scenarios);
    }
}

/**
 * the numeric Value must be greater or Equal the given Value
 *
 * @function module:utils/validation.Min
 *
 * @param value {number}
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function Min(value, validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can not be lower than ${value}.`;
        registerInStore(target, propertyKey, 'Min', value, message, scenarios);
    };
}

/**
 * the numeric Value mut be lower or equal the given Value
 *
 * @function module:utils/validation.Max
 *
 * @param value {number}
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function Max(value, validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can not be bigger than ${value}.`;
        registerInStore(target, propertyKey, 'Max', value, message, scenarios);
    };
}

/**
 * can execute a Function that returns true or false, can perform any Validation you want
 *
 * @function module:utils/validation.CustomValidation
 *
 * @param value {function}
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function CustomValidation(value, validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} Custom Validation was not successful.`;
        registerInStore(target, propertyKey, 'CustomValidation', value, message, scenarios);
    }
}

/**
 * the String or Array must have the given Length or more
 *
 * @function module:utils/validation.MinLength
 *
 * @param value {number}
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function MinLength(value, validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must have ${value} characters.`;
        registerInStore(target, propertyKey, 'MinLength', value, message, scenarios);
    };
}

/**
 * the String or Array must have the given Length or lesser
 *
 * @function module:utils/validation.MaxLength
 *
 * @param value {number}
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function MaxLength(value, validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can not have more than ${value} characters.`;
        registerInStore(target, propertyKey, 'MaxLength', value, message, scenarios);
    };
}

/**
 * implements a Whitelist check for the Property
 *
 * @function module:utils/validation.Whitelist
 *
 * @param value {any[]}
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function Whitelist(value, validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can only have the following values: ${value.join(',')}`;
        registerInStore(target, propertyKey, 'Whitelist', value, message, scenarios);
    }
}

/**
 * blacklisting some values for the Property
 *
 * @function module:utils/validation.Blacklist
 * @param value {any[]} values that are not allowed on this Property
 * @param validationMessage {string} the Message string that was written in the Validation Error Message
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function Blacklist(value, validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can not have the following values: ${value.join(',')}`;
        registerInStore(target, propertyKey, 'Blacklist', value, message, scenarios);
    }
}

/**
 * check if the Property Value Equals the given Value using (===)
 *
 * @function module:utils/validation.Equals
 *
 * @param value {any}
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function Equals(value, validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} not match the value: ${value}`;
        registerInStore(target, propertyKey, 'Equals', value, message, scenarios);
    }
}

/**
 * check if the Property Value Equals the given Value using (!==)
 *
 * @function module:utils/validation.NotEquals
 *
 * @param value {any}
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function NotEquals(value, validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} match the value: ${value}`;
        registerInStore(target, propertyKey, 'NotEquals', value, message, scenarios);
    }
}

/**
 * check if the given Value is an Integer number
 *
 * @function module:utils/validation.IsInt
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function IsInt(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a Integer Value`;
        registerInStore(target, propertyKey, 'IsInt', true, message, scenarios);
    }
}

/**
 * check an Array if it has Unique Values
 *
 * @function module:utils/validation.UniqueArray
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function UniqueArray(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must have Unique Values`;
        registerInStore(target, propertyKey, 'UniqueArray', true, message, scenarios);
    }
}

/**
 * the Array must contain some Values to be valid
 *
 * @function module:utils/validation.ArrayNotEmpty
 *
 * @param validationMessage {string} the Message string that was written in the Validation Error Message
 * @param scenarios {string[]} the scenario strings where the validation was executed
 *
 * @return {ClassDecorator}
 *
 * @example
 * class SomeEntity {
 *     `@`ArrayNotEmpty('array can not be empty', ['S1'])
 *     primeNumbers: number[];
 * }
 * const invalid = new SomeEntity();
 * // returns [{Message: 'array can not be empty'}]
 * ClassValidator.Validate('S1', invalid);
 *
 * const valid = new SomeEntity();
 * valid.primeNumbers = [2,3,5,7];
 * // returns []
 * ClassValidator.Validate('S1', valid);
 */
function ArrayNotEmpty(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can not be empty.`;
        registerInStore(target, propertyKey, 'ArrayNotEmpty', true, message, scenarios);
    }
}

/**
 * check the Value for a Positive number
 *
 * @function module:utils/validation.IsPositive
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
 *
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
function IsPositive(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can only have Positive Values.`;
        registerInStore(target, propertyKey, 'IsPositive', true, message, scenarios);
    }
}

/**
 * check the Value for a Negative number
 *
 * @function module:utils/validation.IsNegative
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
 *
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
function IsNegative(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can only have Positive Values.`;
        registerInStore(target, propertyKey, 'IsNegative', true, message, scenarios);
    }
}

/**
 * check if the String has any valid Boolean declaration like
 *
 * true, false, TRUE, FALSE
 *
 * @function module:utils/validation.IsBooleanString
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
 * @example
 * class IsBooleanStringTest {
 *     `@`IsBooleanString('Invalid', ['S1'])
 *     value: string;
 * }
 * const instance = new IsBooleanStringTest();
 * // is valid
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
function IsBooleanString(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a Boolean String.`;
        registerInStore(target, propertyKey, 'IsBooleanString', true, message, scenarios);
    }
}

/**
 * check if the String contain Numbers Only
 *
 * @function module:utils/validation.IsNumberString
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function IsNumberString(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can only contain Numbers.`;
        registerInStore(target, propertyKey, 'IsNumberString', true, message, scenarios);
    }
}

/**
 * check if a DateTime is After the value
 *
 * @function module:utils/validation.MinDate
 *
 * @param value {DateTime}
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function MinDate(value, validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be greater than ${value.toString()}.`;
        registerInStore(target, propertyKey, 'MinDate', value, message, scenarios);
    }
}

/**
 * check if a DateTime is Before the value
 *
 * @function module:utils/validation.MaxDate
 *
 * @param value {DateTime}
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function MaxDate(value, validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be lower than ${value.toString()}.`;
        registerInStore(target, propertyKey, 'MaxDate', value, message, scenarios);
    }
}

/**
 * check if the String contains only letters a-z
 *
 * @function module:utils/validation.IsAlpha
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function IsAlpha(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can only contains letters (a-zA-Z).`;
        registerInStore(target, propertyKey, 'IsAlpha', true, message, scenarios);
    }
}

/**
 * check if the string only contains letters a-z and numbers 0-9
 *
 * @function module:utils/validation.IsAlphanumeric
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
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
function IsAlphanumeric(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can only contains letters and numbers.`;
        registerInStore(target, propertyKey, 'IsAlphanumeric', true, message, scenarios);
    }
}

/**
 * check if the String only contains Ascii Characters
 *
 * @function module:utils/validation.IsAscii
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function IsAscii(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a Ascii String.`;
        registerInStore(target, propertyKey, 'IsAscii', true, message, scenarios);
    }
}

/**
 * check if the String is a Base64 string
 *
 * @function module:utils/validation.IsBase64
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function IsBase64(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a Base64 String.`;
        registerInStore(target, propertyKey, 'IsBase64', true, message, scenarios);
    }
}

/**
 * check if a String is a Hex Color
 *
 * supported Hex Color with 8 (with Alpha), 6 (Default) or 3 (Short) Characters
 *
 * @function module:utils/validation.IsHexColor
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function IsHexColor(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a Hex Color String.`;
        registerInStore(target, propertyKey, 'IsHexColor', true, message, scenarios);
    }
}

/**
 * check if a String is a Hexadecimal String
 *
 * @function module:utils/validation.IsHexadecimal
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function IsHexadecimal(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a Hexadecimal String.`;
        registerInStore(target, propertyKey, 'IsHexadecimal', true, message, scenarios);
    }
}

/**
 * check if the String is a MAC Address
 *
 * @function module:utils/validation.IsMacAddress
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function IsMacAddress(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a MAC Address.`;
        registerInStore(target, propertyKey, 'IsMacAddress', true, message, scenarios);
    }
}

/**
 * check if the String is a IP Address
 *
 * @function module:utils/validation.IsIp
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function IsIp(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a IP Address.`;
        registerInStore(target, propertyKey, 'IsIp', true, message, scenarios);
    }
}

/**
 * check if the String or Number is a Port Number
 *
 * @function module:utils/validation.IsPort
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function IsPort(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a Port Number.`;
        registerInStore(target, propertyKey, 'IsPort', true, message, scenarios);
    }
}

/**
 * check if the String is a JSON String
 *
 * @function module:utils/validation.IsJSON
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function IsJSON(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a JSON String.`;
        registerInStore(target, propertyKey, 'IsJSON', true, message, scenarios);
    }
}

/**
 * check if the String is a JSON Web Token
 *
 * @function module:utils/validation.IsJWT
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function IsJWT(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a JSON Web Token.`;
        registerInStore(target, propertyKey, 'IsJWT', true, message, scenarios);
    }
}

/**
 * check if the String has the Maximum Bytes Size of the given Value
 *
 * @function module:utils/validation.IsByteLength
 *
 * @param value {number}
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function IsByteLength(value, validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can only have a Length of ${value} Bytes.`;
        registerInStore(target, propertyKey, 'IsByteLength', value, message, scenarios);
    }
}

/**
 * check if a String is a MongoDb Object Id
 *
 * @function module:utils/validation.IsMongoId
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function IsMongoId(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a MongoDb ObjectId.`;
        registerInStore(target, propertyKey, 'IsMongoId', true, message, scenarios);
    }
}

/**
 * check if a String is a valid URL
 *
 * @function module:utils/validation.IsUrl
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function IsUrl(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a URL.`;
        registerInStore(target, propertyKey, 'IsUrl', true, message, scenarios);
    }
}

/**
 * check if a String is a UUID
 *
 * @function module:utils/validation.IsUUID
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function IsUUID(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a UUID.`;
        registerInStore(target, propertyKey, 'IsUUID', true, message, scenarios);
    }
}

/**
 * check if the String can be a Hash
 *
 * supported are all Hashes with 32, 40, 64 and 128 bit size
 *
 * for Example MD5, SHA-1, SHA-256, SHA-512, RIPEMD-160, Snefru, GHOST and Whirlpool
 *
 * @function module:utils/validation.IsHash
 *
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function IsHash(validationMessage, scenarios) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a Hash.`;
        registerInStore(target, propertyKey, 'IsHash', true, message, scenarios);
    }
}

/**
 * validate the Class with a Function
 *
 * @function module:utils/validation.ValidateClass
 *
 * @param method {function}
 * @param validationMessage {string}
 * @param scenarios {string[]} the scenario strings where the validation was executed
 * @return {ClassDecorator}
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
function ValidateClass(method, validationMessage, scenarios) {
    return function (target) {
        const message = validationMessage ? validationMessage : `the Class ${target.constructor.name} is invalid.`;
        registerInStore({constructor: {name: target.name}}, '', 'ValidateClass', method, message, scenarios);
    }
}

module.exports = {
    VALIDATIONS,
    ClassValidator,
    IsDefined, IsEmail, Min, Max, Blacklist, IsEmpty, IsNotEmpty, MaxLength, MinLength, ValidateIf, Whitelist,
    Equals, NotEquals,
    ArrayNotEmpty,
    IsAlpha,
    IsAlphanumeric,
    IsAscii,
    IsBase64,
    IsBooleanString,
    IsByteLength,
    IsHash,
    IsHexadecimal,
    IsHexColor,
    IsInt, IsIp, IsJSON, IsJWT, IsMacAddress,
    IsMongoId,
    IsNegative,
    IsNumberString,
    IsOptional, IsPort,
    IsPositive,
    IsUrl,
    IsUUID,
    MaxDate,
    MinDate,
    Required,
    UniqueArray,
    CustomValidation,
    ValidateClass
};
