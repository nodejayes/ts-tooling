const {Round} = require('../../../core/number/number');

Number.prototype.IsInRange = function (lower, upper) {
    return this <= upper && this >= lower;
};

/**
 * @return {boolean}
 */
Number.prototype.Equals = function (value) {
    return this.valueOf() === value;
};

/**
 * @return {boolean}
 */
Number.prototype.IsAbove = function (value) {
    return this > value;
};

/**
 * @return {boolean}
 */
Number.prototype.IsBelow = function (value) {
    return this < value;
};

/**
 * @return {number}
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

Number.prototype.Add = function (value) {
    return this + value;
};

/**
 * @return {number}
 */
Number.prototype.Subtract = function (value) {
    return this - value;
};

/**
 * @return {number}
 */
Number.prototype.Multiply = function (value) {
    return this * value;
};

/**
 * @return {number}
 */
Number.prototype.Divide = function (value) {
    if (value === 0) {
        throw new Error(`Division by Zero ${this} / ${value}`);
    }
    return this / value;
};

Number.prototype.Ceil = function (precision) {
    return Round(this, precision, 'ceil');
};

Number.prototype.Floor = function (precision) {
    return Round(this, precision, 'floor');
};

Number.prototype.Round = function (precision) {
    return Round(this, precision);
};

/**
 * @return {number}
 */
Number.prototype.Numerals = function () {
    return this.toFixed(0).length;
};

/**
 * @return {number}
 */
Number.prototype.DecimalPlaces = function () {
    const tmp = this.toString().split('.');
    return tmp[1] ? tmp[1].length : 0;
};

Number.prototype.Increment = function (step) {
    step = step || 1;
    return this + step;
};

/**
 * @return {number}
 */
Number.prototype.Decrement = function (step) {
    step = step || 1;
    return this - step;
};
