/**
 * represent the Global Uniqe Identifier
 *
 * @category Type
 */
export class Guid {
    /**
     * get a empty Guid
     *
     * @returns the empty guid
     *
     * @example
     * ```typescript
     * // returns "00000000-0000-0000-0000-000000000000"
     * Guid.Empty;
     * ```
     */
    static readonly Empty: Guid;

    /**
     * validate a Guid
     *
     * @param guid the guid to validate
     * @returns is the given guid string valid or not
     *
     * @example
     * ```typescript
     * // returns true
     * Guid.Validate('00000000-0000-0000-0000-000000000000');
     * // returns false
     * Guid.Validate('00000000000000000000000000000000');
     * ```
     */
    static Validate(guid: string): boolean;

    /**
     * is this Guid a Empty Guid
     *
     * @returns matches the empty guid
     *
     * @example
     * ```typescript
     * // returns true
     * new Guid('00000000-0000-0000-0000-000000000000').IsEmpty();
     * // returns false
     * new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c').IsEmpty();
     * ```
     */
    readonly IsEmpty: boolean;

    /**
     * create a new Guid
     *
     * generates a new one when no guid was passed
     *
     * @param guid a new guid as string representation
     *
     * @example
     * ```typescript
     * // returns a new generated Guid
     * new Guid();
     * // returns "6bcb9d2c-ae48-4310-8d56-ea7accffcc8c"
     * new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c');
     * ```
     */
    constructor(guid?: string);

    /**
     * converts the Guid to a String representation
     *
     * @returns Guid as string
     *
     * @example
     * ```typescript
     * // returns "6bcb9d2c-ae48-4310-8d56-ea7accffcc8c"
     * new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c').ToString();
     * ```
     */
    ToString(): string;

    /**
     * check if the Guid is Equal another Guid
     *
     * @param guid the guid to check
     * @returns are the Guid´s equal or not
     *
     * @example
     * ```typescript
     * // returns true
     * new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c').Equals('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c');
     * new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c').Equals(new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c'));
     * // returns false
     * new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c').Equals('4fa89189-03b5-43f2-b184-8a42adeebfe7');
     * ```
     */
    Equals(guid: Guid | string): boolean;
}
