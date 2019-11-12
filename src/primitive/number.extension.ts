import {clamp, ceil, floor, round} from 'lodash';

Number.prototype.IsInRange = function (start: number, end: number): boolean {
    return this <= end && this >= start;
};

Number.prototype.Equals = function (value: number): boolean {
    return this === value;
};

Number.prototype.IsAbove = function (value: number): boolean {
    return this > value;
};

Number.prototype.IsBelow = function (value: number): boolean {
    return this < value;
};

Number.prototype.Clamp = function (lower: number, upper: number): number {
    return clamp(this, lower, upper);
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
    return ceil(this, precision || 0);
};

Number.prototype.Floor = function (precision?: number): number {
    return floor(this, precision || 0);
};

Number.prototype.Round = function (precision?: number): number {
    return round(this, precision || 0);
};

Number.prototype.Increment = function (step?: number): number {
    step = step || 1;
    return this + step;
};

Number.prototype.Decrement = function (step?: number): number {
    step = step || 1;
    return this - step;
};
