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
            if (!validationRules) {
                continue;
            }
            const value = instance[key];
            for (const validationKey of Object.keys(validationRules)) {
                const validationValue = validationRules[validationKey][0];
                const validationMessage = validationRules[validationKey][1];
                switch (validationKey) {
                    case 'IsDefined':
                        executeValidation(value, v => v === null || v === undefined, validationMessage, errors);
                        break;
                    case 'IsEmail':
                        // TODO: implement Email check
                        executeValidation(value, v => false, validationMessage, errors);
                        break;
                    case 'Min':
                        executeValidation(value, v => v < validationValue, validationMessage, errors);
                        break;
                    case 'Max':
                        executeValidation(value, v => v > validationValue, validationMessage, errors);
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

export function IsDefined(validationMessage?: string) {
    return function (target, propertyKey: string) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be defined.`;
        registerInStore(target, propertyKey, 'IsDefined', true, message);
    }
}

export function IsEmail(validationMessage?: string) {
    return function (target, propertyKey: string) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} must be a Email Address.`;
        registerInStore(target, propertyKey, 'IsEmail', true, message);
    }
}

export function Min(value: number, validationMessage?: string) {
    return function (target, propertyKey: string) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can not be lower than ${value}.`;
        registerInStore(target, propertyKey, 'Min', value, message);
    };
}

export function Max(value: number, validationMessage?: string) {
    return function (target, propertyKey: string) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} can not be bigger than ${value}.`;
        registerInStore(target, propertyKey, 'Max', value, message);
    };
}

export function CustomValidation(value: (v) => boolean, validationMessage?: string) {
    return function (target, propertyKey: string) {
        const message = validationMessage ? validationMessage : `the Property ${propertyKey} in ${target.constructor.name} Custom Validation was not successful.`;
        registerInStore(target, propertyKey, 'CustomValidation', value, message);
    }
}
