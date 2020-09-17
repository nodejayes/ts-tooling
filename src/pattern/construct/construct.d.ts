/**
 * create a Variable and when not defined returns default or null
 *
 * @category Pattern
 *
 * @param initialValue
 * @param defaultValue
 * @example
 * // returns 2
 * Create(undefined, 2);
 * // returns 3
 * Create(3, 2);
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
 * @example
 * const factory = (argument1) => { return argument1; };
 * // returns "test"
 * CreateWithFactory(factory, ['test']);
 * // returns "default"
 * CreateWithFactory(factory, [], 'default');
 */
export function CreateWithFactory<T>(factoryMethod: Function, args: any[], defaultValue?: T): T;
