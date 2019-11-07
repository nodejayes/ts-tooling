import {random} from 'lodash';

/**
 * create some Numbers
 */
export class NumberFactory {
    /**
     * create a new Integer Number from the given input
     * @param value Javascript Number or String
     */
    static newInteger(value: number | string): number {
        const tmp = parseInt(value.toString());
        if (isNaN(tmp)) {
            return 0;
        }
        return tmp;
    }

    /**
     * create a new Double Number from the given input
     * @param value  Javascript Number or String
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
     * @constructor
     */
    static RandomInteger(min: number, max: number): number {
        return random(min, max, false);
    }

    /**
     * create Random Doubles in the min/max Border
     * @param min the minimum Double that can be created
     * @param max the maximum Double that can be created
     * @constructor
     */
    static RandomDouble(min: number, max: number): number {
        return random(min, max, true);
    }
}