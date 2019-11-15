import {random} from 'lodash';

/**
 * some Utils for Integer and Double numbers
 */
export class NumberFactory {
    /**
     * create a new Integer from the given input
     * @param value Javascript Number or String
     *
     * ```typescript
     * // create a valid Javascript Number with value 1
     * NumberFactory.newInteger(1);
     * NumberFactory.newInteger('1');
     * NumberFactory.newInteger(1.5);
     * ```
     */
    static newInteger(value: number | string): number {
        const tmp = parseInt(value.toString());
        if (isNaN(tmp)) {
            return 0;
        }
        return tmp;
    }

    /**
     * create a new Double number from the given input
     * @param value  Javascript Number or String
     *
     * ```typescript
     * // create a valid Javascript Number with value 1.5
     * NumberFactory.newDouble(1.5);
     * NumberFactory.newDouble('1.5');
     * ```
     */
    static newDouble(value: number | string): number {
        const tmp = parseFloat(value.toString());
        if (isNaN(tmp)) {
            return 0;
        }
        return tmp;
    }

    /**
     * create Random Integers in the min/max Border
     * @param min the minimum Integer that can be created
     * @param max the maximum Integer that can be created
     *
     * ```typescript
     * // creates the Javascript Numbers 1,2,3,4,5,6,7,8,9 and 10
     * NumberFactory.RandomInteger(1, 10);
     * ```
     */
    static RandomInteger(min: number, max: number): number {
        return random(min, max, false);
    }

    /**
     * create Random Doubles in the min/max Border
     * @param min the minimum Double that can be created
     * @param max the maximum Double that can be created
     *
     * ```typescript
     * // create all Double Numbers begins with 0.0 and ends with 1.0
     * NumberFactory.RandomDouble(0, 1)
     * ```
     */
    static RandomDouble(min: number, max: number): number {
        return random(min, max, true);
    }
}
