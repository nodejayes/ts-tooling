/**
 * some Utils for Integer and Double numbers
 *
 * @category Type
 */
export class NumberFactory {
    /**
     * create a new Integer from the given input
     *
     * @category number
     *
     * @param value Javascript Number or String that represent the new Integer
     * @returns new integer representation of the string or number
     *
     * @example
     * // returns 1
     * NumberFactory.NewInteger(1);
     * NumberFactory.NewInteger('1');
     * NumberFactory.NewInteger(1.5);
     * // returns 0
     * NumberFactory.NewInteger('aaaa');
     */
    static NewInteger(value: number | string): number;

    /**
     * create a new Double number from the given input
     *
     * @category number Javascript Number or String that represent the new Double
     *
     * @param value Javascript Number or String
     * @returns the double number representation of the string or number input
     *
     * @example
     * // returns 1.5
     * NumberFactory.NewDouble(1.5);
     * NumberFactory.NewDouble('1.5');
     * // returns 0.0
     * NumberFactory.NewDouble('aaa');
     */
    static NewDouble(value: number | string): number;

    /**
     * create Random Integers in the min/max Border
     *
     * @category number
     *
     * @param min the minimum Integer that can be created
     * @param max the maximum Integer that can be created
     * @returns a integer number between min and max
     *
     * @example
     * // creates the Javascript Numbers 1,2,3,4,5,6,7,8,9 and 10
     * NumberFactory.RandomInteger(1, 10);
     */
    static RandomInteger(min: number, max: number): number;

    /**
     * create Random Doubles in the min/max Border
     *
     * @category number
     *
     * @param min the minimum Double that can be created
     * @param max the maximum Double that can be created
     * @returns a double number between min and max
     *
     * @example
     * // create all Double Numbers begins with 0.0 and ends with 1.0
     * NumberFactory.RandomDouble(0, 1)
     */
    static RandomDouble(min: number, max: number): number;
}
