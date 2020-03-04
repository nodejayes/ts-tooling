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
    MaxLength: (v, validationValue) => v.length < validationValue,
    MinLength: (v, validationValue) => v.length > validationValue,
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
 *
 * @example
 * class User {
 *     IsDefined('Name must be defined')
 *     Name: string;
 *
 *     Min(0, 'Age must be greater -1')
 *     Max(200, 'Age must me lower 201')
 *     Age: number;
 *
 *     IsEmail('Email must be a valid email address')
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
ClassValidator.Validate = async (instance) => {
    const errors = [];
    checkForRequired(instance, errors);
    for (const key of Object.keys(instance)) {
        const validationRules = ValidationStore[`${instance.constructor.name}_${key}`];
        const value = instance[key];

        if (validationRules) {
            if (validationRules['ValidateIf'] && validationRules['ValidateIf'].Any() &&
                isFunction(validationRules['ValidateIf'][0]) && !validationRules['ValidateIf'][0](instance)) {
                continue;
            } else if (validationRules['IsOptional'] && validationRules['IsOptional'][0] === true && !value) {
                continue;
            }

            for (const validationKey of Object.keys(validationRules)) {
                const validationValue = validationRules[validationKey][0];
                const validationMessage = validationRules[validationKey][1];
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
                        const subErrors = await ClassValidator.Validate(entry);
                        if (subErrors.Any()) {
                            errors.AddRange(subErrors);
                        }
                    }
                }
            }
        } else if (isObject(value)) {
            // validate the SubObject but skip circulars
            if (!ObjectFactory.IsCircular(value)) {
                const subErrors = await ClassValidator.Validate(value);
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
 * @param {any} value the raw JSON Object
 *
 * @example
 * class User {
 *     IsDefined('Name must be defined')
 *     Name: string;
 *
 *     Min(0, 'Age must be greater -1')
 *     Max(200, 'Age must me lower 201')
 *     Age: number;
 *
 *     IsEmail('Email must be a valid email address')
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
ClassValidator.ValidateObject = async (constructor, value) => {
    const inst = new constructor();
    for (const key of Object.keys(value)) {
        inst[key] = value[key];
    }
    return ClassValidator.Validate(inst);
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

function registerInStore(target, propertyKey, targetKey, value, validationMessage) {
    const key = `${target.constructor.name}_${propertyKey}`;
    if (!ValidationStore[key]) {
        ValidationStore[key] = {};
    }
    ValidationStore[key][targetKey] = [value, validationMessage];
}

/**
 * only Validate the Property when the check Method returns True
 *
 * @function module:utils/validation.ValidateIf
 *
 * @param cb {function} define the check Method
 * @return {ClassDecorator}
 */
function ValidateIf(cb) {
    return function (target, propertyKey) {
        registerInStore(target, propertyKey, 'ValidateIf', cb, '');
    }
}

/**
 * check if the Value is missing and ignore all Validations
 *
 * @function module:utils/validation.IsOptional
 * @return {ClassDecorator}
 */
function IsOptional() {
    return function (target, propertyKey) {
        registerInStore(target, propertyKey, 'IsOptional', true, '');
    }
}

/**
 * check if the Property was in the Object and have a Value
 *
 * @function module:utils/validation.Required
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function Required(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be set.`;
        registerInStore(target, propertyKey, 'Required', true, message);
    }
}

/**
 * the Property must have a Valid Value
 *
 * @function module:utils/validation.IsDefined
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsDefined(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be defined.`;
        registerInStore(target, propertyKey, 'IsDefined', true, message);
    }
}

/**
 * the Property must have a Empty value like empty String or null or undefined
 *
 * @function module:utils/validation.IsEmpty
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsEmpty(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be Empty.`;
        registerInStore(target, propertyKey, 'IsEmpty', true, message);
    }
}

/**
 * the Property must can not have a Empty value like empty String or null or undefined
 *
 * @function module:utils/validation.IsNotEmpty
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsNotEmpty(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can not be Empty.`;
        registerInStore(target, propertyKey, 'IsNotEmpty', true, message);
    }
}

/**
 * the String at this Property must be a Email Address
 *
 * @function module:utils/validation.IsEmail
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsEmail(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a Email Address.`;
        registerInStore(target, propertyKey, 'IsEmail', true, message);
    }
}

/**
 * the numeric Value must be greater or Equal the given Value
 *
 * @function module:utils/validation.Min
 *
 * @param value {number}
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function Min(value, validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can not be lower than ${value}.`;
        registerInStore(target, propertyKey, 'Min', value, message);
    };
}

/**
 * the numeric Value mut be lower or equal the given Value
 *
 * @function module:utils/validation.Max
 *
 * @param value {number}
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function Max(value, validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can not be bigger than ${value}.`;
        registerInStore(target, propertyKey, 'Max', value, message);
    };
}

/**
 * can execute a Function that returns true or false, can perform any Validation you want
 *
 * @function module:utils/validation.CustomValidation
 *
 * @param value {function}
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function CustomValidation(value, validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} Custom Validation was not successful.`;
        registerInStore(target, propertyKey, 'CustomValidation', value, message);
    }
}

/**
 * the String or Array must have the given Length or more
 *
 * @function module:utils/validation.MinLength
 *
 * @param value {number}
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function MinLength(value, validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must have ${value} characters.`;
        registerInStore(target, propertyKey, 'MinLength', value, message);
    };
}

/**
 * the String or Array must have the given Length or lesser
 *
 * @function module:utils/validation.MaxLength
 *
 * @param value {number}
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function MaxLength(value, validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can not have more than ${value} characters.`;
        registerInStore(target, propertyKey, 'MaxLength', value, message);
    };
}

/**
 * implements a Whitelist check for the Property
 *
 * @function module:utils/validation.Whitelist
 *
 * @param value {any[]}
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function Whitelist(value, validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can only have the following values: ${value.join(',')}`;
        registerInStore(target, propertyKey, 'Whitelist', value, message);
    }
}

/**
 * blacklisting some values for the Property
 *
 * @function module:utils/validation.Blacklist
 * @param value {any[]} values that are not allowed on this Property
 * @param validationMessage {string} the Message string that was written in the Validation Error Message
 * @return {ClassDecorator}
 */
function Blacklist(value, validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can not have the following values: ${value.join(',')}`;
        registerInStore(target, propertyKey, 'Blacklist', value, message);
    }
}

/**
 * check if the Property Value Equals the given Value using (===)
 *
 * @function module:utils/validation.Equals
 *
 * @param value {any}
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function Equals(value, validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} not match the value: ${value}`;
        registerInStore(target, propertyKey, 'Equals', value, message);
    }
}

/**
 * check if the Property Value Equals the given Value using (!==)
 *
 * @function module:utils/validation.NotEquals
 *
 * @param value {any}
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function NotEquals(value, validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} match the value: ${value}`;
        registerInStore(target, propertyKey, 'NotEquals', value, message);
    }
}

/**
 * check if the given Value is an Integer number
 *
 * @function module:utils/validation.IsInt
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsInt(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a Integer Value`;
        registerInStore(target, propertyKey, 'IsInt', true, message);
    }
}

/**
 * check an Array if it has Unique Values
 *
 * @function module:utils/validation.UniqueArray
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function UniqueArray(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must have Unique Values`;
        registerInStore(target, propertyKey, 'UniqueArray', true, message);
    }
}

/**
 * the Array must contain some Values
 *
 * @function module:utils/validation.ArrayNotEmpty
 * @param validationMessage {string} the Message string that was written in the Validation Error Message
 * @return {ClassDecorator}
 */
function ArrayNotEmpty(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can not be empty.`;
        registerInStore(target, propertyKey, 'ArrayNotEmpty', true, message);
    }
}

/**
 * check the Value for a Positive number
 *
 * @function module:utils/validation.IsPositive
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsPositive(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can only have Positive Values.`;
        registerInStore(target, propertyKey, 'IsPositive', true, message);
    }
}

/**
 * check the Value for a Negative number
 *
 * @function module:utils/validation.IsNegative
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsNegative(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can only have Positive Values.`;
        registerInStore(target, propertyKey, 'IsNegative', true, message);
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
 * @return {ClassDecorator}
 */
function IsBooleanString(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a Boolean String.`;
        registerInStore(target, propertyKey, 'IsBooleanString', true, message);
    }
}

/**
 * check if the String contain Numbers Only
 *
 * @function module:utils/validation.IsNumberString
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsNumberString(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can only contain Numbers.`;
        registerInStore(target, propertyKey, 'IsNumberString', true, message);
    }
}

/**
 * check if a DateTime is After the value
 *
 * @function module:utils/validation.MinDate
 *
 * @param value {DateTime}
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function MinDate(value, validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be greater than ${value.toString()}.`;
        registerInStore(target, propertyKey, 'MinDate', value, message);
    }
}

/**
 * check if a DateTime is Before the value
 *
 * @function module:utils/validation.MaxDate
 *
 * @param value {DateTime}
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function MaxDate(value, validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be lower than ${value.toString()}.`;
        registerInStore(target, propertyKey, 'MaxDate', value, message);
    }
}

/**
 * check if the String contains only letters a-z
 *
 * @function module:utils/validation.IsAlpha
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsAlpha(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can only contains letters (a-zA-Z).`;
        registerInStore(target, propertyKey, 'IsAlpha', true, message);
    }
}

/**
 * check if the string only contains letters a-z and numbers 0-9
 *
 * @function module:utils/validation.IsAlphanumeric
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsAlphanumeric(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can only contains letters and numbers.`;
        registerInStore(target, propertyKey, 'IsAlphanumeric', true, message);
    }
}

/**
 * check if the String only contains Ascii Characters
 *
 * @function module:utils/validation.IsAscii
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsAscii(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a Ascii String.`;
        registerInStore(target, propertyKey, 'IsAscii', true, message);
    }
}

/**
 * check if the String is a Base64 string
 *
 * @function module:utils/validation.IsBase64
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsBase64(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a Base64 String.`;
        registerInStore(target, propertyKey, 'IsBase64', true, message);
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
 * @return {ClassDecorator}
 */
function IsHexColor(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a Hex Color String.`;
        registerInStore(target, propertyKey, 'IsHexColor', true, message);
    }
}

/**
 * check if a String is a Hexadecimal String
 *
 * @function module:utils/validation.IsHexadecimal
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsHexadecimal(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a Hexadecimal String.`;
        registerInStore(target, propertyKey, 'IsHexadecimal', true, message);
    }
}

/**
 * check if the String is a MAC Address
 *
 * @function module:utils/validation.IsMacAddress
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsMacAddress(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a MAC Address.`;
        registerInStore(target, propertyKey, 'IsMacAddress', true, message);
    }
}

/**
 * check if the String is a IP Address
 *
 * @function module:utils/validation.IsIp
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsIp(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a IP Address.`;
        registerInStore(target, propertyKey, 'IsIp', true, message);
    }
}

/**
 * check if the String or Number is a Port Number
 *
 * @function module:utils/validation.IsPort
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsPort(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a Port Number.`;
        registerInStore(target, propertyKey, 'IsPort', true, message);
    }
}

/**
 * check if the String is a JSON String
 *
 * @function module:utils/validation.IsJSON
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsJSON(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a JSON String.`;
        registerInStore(target, propertyKey, 'IsJSON', true, message);
    }
}

/**
 * check if the String is a JSON Web Token
 *
 * @function module:utils/validation.IsJWT
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsJWT(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a JSON Web Token.`;
        registerInStore(target, propertyKey, 'IsJWT', true, message);
    }
}

/**
 * check if the String has the Maximum Bytes Size of the given Value
 *
 * @function module:utils/validation.IsByteLength
 *
 * @param value {number}
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsByteLength(value, validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can only have a Length of ${value} Bytes.`;
        registerInStore(target, propertyKey, 'IsByteLength', value, message);
    }
}

/**
 * check if a String is a MongoDb Object Id
 *
 * @function module:utils/validation.IsMongoId
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsMongoId(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a MongoDb ObjectId.`;
        registerInStore(target, propertyKey, 'IsMongoId', true, message);
    }
}

/**
 * check if a String is a valid URL
 *
 * @function module:utils/validation.IsUrl
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsUrl(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a URL.`;
        registerInStore(target, propertyKey, 'IsUrl', true, message);
    }
}

/**
 * check if a String is a UUID
 *
 * @function module:utils/validation.IsUUID
 *
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function IsUUID(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a UUID.`;
        registerInStore(target, propertyKey, 'IsUUID', true, message);
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
 * @return {ClassDecorator}
 */
function IsHash(validationMessage) {
    return function (target, propertyKey) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a Hash.`;
        registerInStore(target, propertyKey, 'IsHash', true, message);
    }
}

/**
 * validate the Class with a Function
 *
 * @function module:utils/validation.ValidateClass
 *
 * @param method {function}
 * @param validationMessage {string}
 * @return {ClassDecorator}
 */
function ValidateClass(method, validationMessage) {
    return function (target) {
        const message = validationMessage ? validationMessage : `the Class ${target.constructor.name} is invalid.`;
        registerInStore({constructor: {name: target.name}}, '', 'ValidateClass', method, message);
    }
}

module.exports = {
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
