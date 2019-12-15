import {isObject, isArray, isString, isFunction} from 'lodash';
import {ObjectFactory} from "../ts-tooling";

export interface IValidationError {
    Message: string;
}

/**
 * wraps the Package class-validator to Validate Typescript Classes
 */
export class ClassValidator {
    /**
     * validate again a Decorated Class Instance
     * @param instance the Instance of the Class to Validate
     */
    static async Validate<T>(instance: T): Promise<IValidationError[]> {
        const errors: IValidationError[] = [];
        for (const key of Object.keys(instance)) {
            const validationRules = ValidationStore[`${instance.constructor.name}_${key}`];
            const value = instance[key];
            if (isObject(value)) {
                // validate the SubObject but skip circulars
                if (!ObjectFactory.IsCircular(value)) {
                    const subErrors = await ClassValidator.Validate(value);
                    if (subErrors.Any()) {
                        errors.AddRange(subErrors);
                    }
                }
                continue;
            } else if (isArray(value) && value.Any()) {
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
                continue;
            }
            if (!validationRules) {
                continue;
            } else if (validationRules['ValidateIf'] && validationRules['ValidateIf'].Any() &&
                isFunction(validationRules['ValidateIf'][0]) && !validationRules['ValidateIf'][0](instance)) {
                continue;
            }
            for (const validationKey of Object.keys(validationRules)) {
                const validationValue = validationRules[validationKey][0];
                const validationMessage = validationRules[validationKey][1];
                switch (validationKey) {
                    case 'IsDefined':
                        executeValidation(value, v => v === null || v === undefined, validationMessage, errors);
                        break;
                    case 'IsNotEmpty':
                        if (!isString(value)) {
                            throw new Error(`can only placed at a string Property ${key} in ${instance.constructor.name}`);
                        }
                        executeValidation(value, v => v === '', validationMessage, errors);
                        break;
                    case 'IsEmail':
                        executeValidation(value, v => !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v), validationMessage, errors);
                        break;
                    case 'Min':
                        executeValidation(value, v => v < validationValue, validationMessage, errors);
                        break;
                    case 'Max':
                        executeValidation(value, v => v > validationValue, validationMessage, errors);
                        break;
                    case 'MinLength':
                        executeValidation(value, v => v.length > validationValue, validationMessage, errors);
                        break;
                    case 'MaxLength':
                        executeValidation(value, v => v.length < validationValue, validationMessage, errors);
                        break;
                    case 'Whitelist':
                        executeValidation(value, v => !validationValue.Contains(v), validationMessage, errors);
                        break;
                    case 'Blacklist':
                        executeValidation(value, v => validationValue.Contains(v), validationMessage, errors);
                        break;
                    case 'CustomValidation':
                        executeValidation(value, validationValue, validationMessage, errors);
                        break;
                }
            }
        }
        return errors;
    }

    /**
     * validate a plain Object again a Class
     * @param constructor the Class with the Validation Decorators
     * @param value the raw JSON Object
     */
    static async ValidateObject<T>(constructor: new () => T, value: any): Promise<IValidationError[]> {
        const inst = new constructor();
        for (const key of Object.keys(value)) {
            inst[key] = value[key];
        }
        return await ClassValidator.Validate<T>(inst);
    }
}

const ValidationStore = {};

function executeValidation(value, cb: (v) => boolean, validationMessage: string, errors: IValidationError[]) {
    if (cb(value)) {
        errors.Add({Message: validationMessage});
    }
}

function registerInStore(target, propertyKey: string, targetKey: string, value, validationMessage: string) {
    const key = `${target.constructor.name}_${propertyKey}`;
    if (!ValidationStore[key]) {
        ValidationStore[key] = {};
    }
    ValidationStore[key][targetKey] = [value, validationMessage];
}

/**
 * only Validate the Property when the check Method returns True
 * @param cb define the check Method
 * @constructor
 */
export function ValidateIf<T>(cb: (d: T) => boolean) {
    return function (target, propertyKey: string) {
        registerInStore(target, propertyKey, 'ValidateIf', cb, '');
    }
}

/**
 * the Property must have a Valid Value
 * @param validationMessage
 * @constructor
 */
export function IsDefined(validationMessage?: string) {
    return function (target, propertyKey: string) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be defined.`;
        registerInStore(target, propertyKey, 'IsDefined', true, message);
    }
}

/**
 * the Property must can not have a Empty value like empty String
 * @param validationMessage
 * @constructor
 */
export function IsNotEmpty(validationMessage?: string) {
    return function (target, propertyKey: string) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can not be Empty.`;
        registerInStore(target, propertyKey, 'IsNotEmpty', true, message);
    }
}

/**
 * the String at this Property must be a Email Address
 * @param validationMessage
 * @constructor
 */
export function IsEmail(validationMessage?: string) {
    return function (target, propertyKey: string) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a Email Address.`;
        registerInStore(target, propertyKey, 'IsEmail', true, message);
    }
}

/**
 * the numeric Value must be greater or Equal the given Value
 * @param value
 * @param validationMessage
 * @constructor
 */
export function Min(value: number, validationMessage?: string) {
    return function (target, propertyKey: string) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can not be lower than ${value}.`;
        registerInStore(target, propertyKey, 'Min', value, message);
    };
}

/**
 * the numeric Value mut be lower or equal the given Value
 * @param value
 * @param validationMessage
 * @constructor
 */
export function Max(value: number, validationMessage?: string) {
    return function (target, propertyKey: string) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can not be bigger than ${value}.`;
        registerInStore(target, propertyKey, 'Max', value, message);
    };
}

/**
 * can execute a Function that returns true or false, can perform any Validation you want
 * @param value
 * @param validationMessage
 * @constructor
 */
export function CustomValidation(value: (v) => boolean, validationMessage?: string) {
    return function (target, propertyKey: string) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} Custom Validation was not successful.`;
        registerInStore(target, propertyKey, 'CustomValidation', value, message);
    }
}

/**
 * the String or Array must have the given Length or more
 * @param value
 * @param validationMessage
 * @constructor
 */
export function MinLength(value: number, validationMessage?: string) {
    return function (target, propertyKey: string) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must have ${value} characters.`;
        registerInStore(target, propertyKey, 'MinLength', value, message);
    };
}

/**
 * the String or Array must have the given Length or lesser
 * @param value
 * @param validationMessage
 * @constructor
 */
export function MaxLength(value: number, validationMessage?: string) {
    return function (target, propertyKey: string) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can not have more than ${value} characters.`;
        registerInStore(target, propertyKey, 'MaxLength', value, message);
    };
}

/**
 * implements a Whitelist check for the Property
 * @param value
 * @param validationMessage
 * @constructor
 */
export function Whitelist(value: any[], validationMessage?: string) {
    return function (target, propertyKey: string) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can only have the following values: ${value.join(',')}`;
        registerInStore(target, propertyKey, 'Whitelist', value, message);
    }
}

/**
 * implements a Blacklist check for the Property
 * @param value
 * @param validationMessage
 * @constructor
 */
export function Blacklist(value: any[], validationMessage?: string) {
    return function (target, propertyKey: string) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can not have the following values: ${value.join(',')}`;
        registerInStore(target, propertyKey, 'Blacklist', value, message);
    }
}
