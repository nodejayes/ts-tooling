import {validate, ValidationError} from 'class-validator';
import {plainToClass} from 'class-transformer';

/**
 * wraps the Package class-validator to Validate Typescript Classes
 */
export class ClassValidator {
    /**
     * validate again a Decorated Class Instance
     * @param instance the Instance of the Class to Validate
     */
    static async Validate<T>(instance: T): Promise<ValidationError[]> {
        return await validate(instance);
    }

    /**
     * validate a plain Object again a Class
     * @param constructor the Class with the Validation Decorators
     * @param value the raw JSON Object
     */
    static async ValidateObject<T>(constructor: new () => T, value: any): Promise<ValidationError[]> {
        return await validate(plainToClass(constructor, value));
    }
}
