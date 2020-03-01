const {Random} = require('../../../core/number/number');

/**
 * With the factory you can create new integer or double values,
 * it does not matter if the numbers are entered as string or as number datatype.
 *
 * furthermore it is possible to create random integer or double values.
 *
 * @class module:types/number.NumberFactory
 */
class NumberFactory {}

/**
 * create a new Integer from the given input
 *
 * @function module:types/number.NumberFactory#NewInteger
 * @static
 *
 * @param value {number | string} Javascript Number or String that represent the new Integer
 * @returns {number} new integer representation of the string or number
 *
 * @example
 * // returns 1
 * NumberFactory.NewInteger(1);
 * NumberFactory.NewInteger('1');
 * NumberFactory.NewInteger(1.5);
 * // returns 0
 * NumberFactory.NewInteger('aaaa');
 */
NumberFactory.NewInteger = (value) => {
    const tmp = parseInt(value.toString());
    if (isNaN(tmp)) {
        return 0;
    }
    return tmp;
};

/**
 * create a new Double number from the given input
 *
 * @function module:types/number.NumberFactory#NewDouble
 * @static
 *
 * @param value {number | string} Javascript Number or String
 * @returns {string} the double number representation of the string or number input
 *
 * @example
 * // returns 1.5
 * NumberFactory.NewDouble(1.5);
 * NumberFactory.NewDouble('1.5');
 * // returns 0.0
 * NumberFactory.NewDouble('aaa');
 */
NumberFactory.NewDouble = (value) => {
    const tmp = parseFloat(value.toString());
    if (isNaN(tmp)) {
        return 0;
    }
    return tmp;
};

/**
 * create Random Integers in the min/max Border
 *
 * @function module:types/number.NumberFactory#RandomInteger
 * @static
 *
 * @param min {number} the minimum Integer that can be created
 * @param max {number} the maximum Integer that can be created
 * @returns {number} a integer number between min and max
 *
 * @example
 * // creates the Javascript Numbers 1,2,3,4,5,6,7,8,9 and 10
 * NumberFactory.RandomInteger(1, 10);
 */
NumberFactory.RandomInteger = (min, max) => {
    return Random(min, max, false);
};

/**
 * create Random Doubles in the min/max Border
 *
 * @function module:types/number.NumberFactory#RandomDouble
 * @static
 *
 * @param min {number} the minimum Double that can be created
 * @param max {number} the maximum Double that can be created
 * @returns {number} a double number between min and max
 *
 * @example
 * // create all Double Numbers begins with 0.0 and ends with 1.0
 * NumberFactory.RandomDouble(0, 1)
 */
NumberFactory.RandomDouble = (min, max) => {
    return Random(min, max, true);
};

module.exports = {NumberFactory};
