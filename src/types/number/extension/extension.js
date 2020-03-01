const {Round} = require('../../../core/number/number');

/**
 * is the extension of the base javascript number data type
 *
 * @class module:types/number.Number
 */

/**
 * Checks if a number is within 2 limits.
 *
 * The limit values are included!
 *
 * @function module:types/number.Number#IsInRange
 *
 * @param lower {number} the lower limit
 * @param upper {number} the upper limit
 * @returns {boolean}
 *
 * @example
 * // returns true
 * 1.2.IsInRange(1.0, 2.0);
 * 1.0.IsInRange(1.0, 2.0);
 * 2.0.IsInRange(1.0, 2.0);
 * // returns false
 * 5.2.IsInRange(1.0, 2.0)
 */
Number.prototype.IsInRange = function (lower, upper) {
    return this <= upper && this >= lower;
};

/**
 * Checks if a number is equal to the current number.
 *
 * @function module:types/number.Number#Equals
 *
 * @param value {number} the Number to check again the current Number
 * @return {boolean}
 *
 * @example
 * // returns true
 * (1).Equals(1)
 * // returns false
 * (1).Equals(2)
 */
Number.prototype.Equals = function (value) {
    return this.valueOf() === value;
};

/**
 * Checks if a number is greater than the current number.
 *
 * @function module:types/number.Number#IsAbove
 *
 * @param value {number} the Number to check again the current Number
 * @return {boolean}
 *
 * @example
 * // returns true
 * (1).IsAbove(0)
 * // returns false
 * (1).IsAbove(1)
 * (1).IsAbove(5)
 */
Number.prototype.IsAbove = function (value) {
    return this > value;
};

/**
 * Checks if a number is lower than the current number.
 *
 * @function module:types/number.Number#IsBelow
 *
 * @param value {number} the Number to check again the current Number
 * @return {boolean}
 *
 * @example
 * // returns true
 * (1).IsBelow(5)
 * // returns false
 * (1).IsBelow(1)
 * (1).IsBelow(0)
 */
Number.prototype.IsBelow = function (value) {
    return this < value;
};

/**
 * Sets the value of the number to the lower or upper limit if the number is greater or smaller than the opere or lower limit.
 *
 * @function module:types/number.Number#Clamp
 *
 * @param lower {number} the lower limit
 * @param upper {number} the upper limit
 * @return {number}
 *
 * @example
 * // returns 10
 * (20).Clamp(1, 10);
 * (10).Clamp(1, 10);
 * // returns 9
 * (9).Clamp(1, 10);
 * // returns 1
 * (1).Clamp(1, 10);
 * (0.5).Clamp(1, 10);
 */
Number.prototype.Clamp = function (lower, upper) {
    if (this < lower) {
        return lower;
    }
    if (this > upper) {
        return upper;
    }
    return this.valueOf();
};

/**
 * Add the current number to the given number.
 *
 * @function module:types/number.Number#Add
 *
 * @param value {number} the Number to add to the current Number
 * @return {number}
 *
 * @example
 * // returns 2
 * (1).Add(1);
 * // returns 3
 * (1).Add(1).Add(1);
 */
Number.prototype.Add = function (value) {
    return this + value;
};

/**
 * Subtracts the current number with the given number.
 *
 * @function module:types/number.Number#Subtract
 *
 * @param value {number} the Number to subtract from the current Number
 * @return {number}
 *
 * @example
 * // returns 1
 * (2).Subtract(1);
 * // returns 0
 * (2).Subtract(1).Subtract(1);
 */
Number.prototype.Subtract = function (value) {
    return this - value;
};

/**
 * Multiplies the current number by the given number.
 *
 * @function module:types/number.Number#Multiply
 *
 * @param value {number} the Number to multiply from the current Number
 * @return {number}
 *
 * @example
 * // returns 10
 * (1).Multiply(10);
 * // returns 20
 * (1).Multiply(10).Multiply(2);
 */
Number.prototype.Multiply = function (value) {
    return this * value;
};

/**
 * Divides the current number with the given number.
 *
 * @function module:types/number.Number#Divide
 *
 * @param value {number} the Number to multiply from the current Number
 * @return {number}
 *
 * @example
 * // returns 5
 * (10).Divide(2);
 * // returns 5
 * (20). Divide(2).Divide(2);
 * // throws an Error
 * (10).Divide(0);
 */
Number.prototype.Divide = function (value) {
    if (value === 0) {
        throw new Error(`Division by Zero ${this} / ${value}`);
    }
    return this / value;
};

/**
 * Rounding up a number
 *
 * @function module:types/number.Number#Ceil
 *
 * @param precision {number} Number of digits used for rounding
 * @return {number}
 *
 * @example
 * // returns 5
 * 4.006.Ceil();
 * // returns 6.01
 * 6.004.Ceil(2);
 * // returns 6100
 * (6040).Ceil(-2);
 */
Number.prototype.Ceil = function (precision) {
    return Round(this, precision, 'ceil');
};

/**
 * Rounding off a number
 *
 * @function module:types/number.Number#Floor
 *
 * @param precision {number} Number of digits used for rounding
 * @return {number}
 *
 * @example
 * // returns 4
 * 4.006.Floor();
 * // returns 0.04
 * 0.046.Floor(2);
 * // returns 4000
 * (4060).Floor(-2);
 */
Number.prototype.Floor = function (precision) {
    return Round(this, precision, 'floor');
};

/**
 * Rounds a number up or down if the next digit is greater than or equal to 5.
 *
 * @function module:types/number.Number#Round
 *
 * @param precision {number} Number of digits used for rounding
 * @return {number}
 *
 * @example
 * // returns 4
 * 4.006.Round();
 * // returns 4.01
 * 4.006.Round(2);
 * // returns 4100
 * (4060).Round(-2);
 */
Number.prototype.Round = function (precision) {
    return Round(this, precision);
};

/**
 * number of digits before the decimal point
 *
 * @function module:types/number.Number#Numerals
 *
 * @return {number}
 *
 * @example
 * // returns 1
 * (1.5).Numerals();
 * (1).Numerals();
 * // returns 2
 * (10).Numerals();
 */
Number.prototype.Numerals = function () {
    return this.toFixed(0).length;
};

/**
 * Number of digits after the decimal point
 *
 * @function module:types/number.Number#DecimalPlaces
 *
 * @return {number}
 *
 * @example
 * // returns 0
 * (1).DecimalPlaces();
 * // returns 1
 * (1.5).DecimalPlaces();
 */
Number.prototype.DecimalPlaces = function () {
    const tmp = this.toString().split('.');
    return tmp[1] ? tmp[1].length : 0;
};

/**
 * increases the number by 1 or the value that was given.
 *
 * @function module:types/number.Number#Increment
 *
 * @param step {number} Number to be incremented by
 * @return {number}
 *
 * @example
 * // returns 2
 * (1).Increment();
 * // returns 5
 * (1).Increment(4);
 */
Number.prototype.Increment = function (step) {
    step = step || 1;
    return this + step;
};

/**
 * decreases the number by 1 or the value that was given.
 *
 * @function module:types/number.Number#Decrement
 *
 * @param step {number} Number to be decremented by
 * @return {number}
 *
 * @example
 * // returns 4
 * (5).Decrement();
 * // returns 1
 * (5).Decrement(4);
 */
Number.prototype.Decrement = function (step) {
    step = step || 1;
    return this - step;
};
