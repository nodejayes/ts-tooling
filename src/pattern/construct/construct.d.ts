/**
 * create a Variable and when not defined returns default or null
 *
 * @category Pattern
 *
 * @param initialValue
 * @param defaultValue
 */
export function Create<T>(initialValue: T, defaultValue?: T): T;

/**
 * create a Value with a Factory Method null safe with optional default value
 *
 * @category Pattern
 *
 * @param factoryMethod the Method that creates the Value
 * @param args the Factory Function Arguments
 * @param defaultValue
 */
export function CreateWithFactory<T>(factoryMethod: Function, args: any[], defaultValue?: T): T;
