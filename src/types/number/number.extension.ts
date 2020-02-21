/**
 * @ignore
 */
function _round(value: number, precision: number = 0, method: string = 'round'): number {
    let offset = '1';
    for (let i = 0; i < Math.abs(precision); i++) {
        offset += '0';
    }
    const tmp = parseInt(offset, 10);
    return precision.IsBelow(0) ?
        Math[method](value / tmp) * tmp :
        Math[method](value * tmp) / tmp;
}

Number.prototype.IsInRange = function (lower: number, upper: number): boolean {
    return this <= upper && this >= lower;
};

Number.prototype.Equals = function (value: number): boolean {
    return this.valueOf() === value;
};

Number.prototype.IsAbove = function (value: number): boolean {
    return this > value;
};

Number.prototype.IsBelow = function (value: number): boolean {
    return this < value;
};

Number.prototype.Clamp = function (lower: number, upper: number): number {
    if (this < lower) {
        return lower;
    }
    if (this > upper) {
        return upper;
    }
    return this.valueOf();
};

Number.prototype.Add = function (value: number): number {
    return this + value;
};

Number.prototype.Subtract = function (value: number): number {
    return this - value;
};

Number.prototype.Multiply = function (value: number): number {
    return this * value;
};

Number.prototype.Divide = function (value: number): number {
    if (value === 0) {
        throw new Error(`Division by Zero ${this} / ${value}`);
    }
    return this / value;
};

Number.prototype.Ceil = function (precision?: number): number {
    return _round(this, precision, 'ceil');
};

Number.prototype.Floor = function (precision?: number): number {
    return _round(this, precision, 'floor');
};

Number.prototype.Round = function (precision?: number): number {
    return _round(this, precision);
};

Number.prototype.Numerals = function (): number {
    return this.toFixed(0).length;
};

Number.prototype.DecimalPlaces = function(): number {
    const tmp = this.toString().split('.');
    return tmp[1] ? tmp[1].length : 0;
};

Number.prototype.Increment = function (step?: number): number {
    step = step || 1;
    return this + step;
};

Number.prototype.Decrement = function (step?: number): number {
    step = step || 1;
    return this - step;
};
