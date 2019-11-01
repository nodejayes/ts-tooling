import {clamp, random, ceil, floor, round} from 'lodash';
import {Integer} from "./integer";

/**
 * representation of a Double
 */
export class Double {
    private _number = 0.0;
    private _isValid = false;

    /**
     * the Value of this Double
     * @constructor
     */
    get Value(): number {
        return this._number;
    }

    /**
     * the Double Value is a Valid Value
     * @constructor
     */
    get Valid(): boolean {
        return this._isValid;
    }

    /**
     * generate a Random Double between min and max
     * @param min
     * @param max
     * @constructor
     */
    static Random(min: Double, max: Double): Double {
        return new Double(random(min.Value, max.Value, true));
    }

    /**
     * create a new Double from Number or String
     * @param double
     */
    constructor(double?: number | string) {
        if (!double) {
            return;
        }
        const tmp = parseFloat(double.toString());
        if (!isNaN(tmp)) {
            this._number = tmp;
            this._isValid = true;
        }
    }

    /**
     * is this Double in Range of two Doubles
     * the Borders equality is in the Range!
     * @param start
     * @param end
     * @constructor
     */
    IsInRange(start: Double, end: Double): boolean {
        return this._number <= end.Value && this._number >= start.Value;
    }

    /**
     * the Double is equal with another Double
     * @param value
     * @constructor
     */
    Equals(value: Double): boolean {
        return this._number === value.Value;
    }

    /**
     * the Double is above another Double
     * @param value
     * @constructor
     */
    IsAbove(value: Double): boolean {
        return this._number > value.Value;
    }

    /**
     * the Double is below another Double
     * @param value
     * @constructor
     */
    IsBelow(value: Double): boolean {
        return this._number < value.Value;
    }

    /**
     * Clamps Double within the inclusive lower and upper bounds.
     * @param lower
     * @param upper
     * @constructor
     */
    Clamp(lower: Double, upper: Double): Double {
        return new Double(clamp(this._number, lower.Value, upper.Value));
    }

    /**
     * Add a Double to this Double
     * @param n
     * @constructor
     */
    Add(n: Double): Double {
        return new Double(this.Value + n.Value);
    }

    /**
     * Subtract a Double from this Double
     * @param n
     * @constructor
     */
    Subtract(n: Double): Double {
        return new Double(this.Value - n.Value);
    }

    /**
     * Multiply this Double
     * @param n
     * @constructor
     */
    Multiply(n: Double): Double {
        return new Double(this.Value * n.Value);
    }

    /**
     * Divide this Double
     * @param n
     * @constructor
     */
    Divide(n: Double): Double {
        if (n.Value === 0) {
            throw new Error(`Division by Zero ${this._number} / ${n.Value}`);
        }
        return new Double(this.Value / n.Value);
    }

    /**
     * round up
     * @param precision
     * @constructor
     */
    Ceil(precision?: Integer): Double {
        let p = 0;
        if (precision) {
            p = precision.Value;
        }
        return new Double(ceil(this._number, p));
    }

    /**
     * round down
     * @param precision
     * @constructor
     */
    Floor(precision?: Integer): Double {
        let p = 0;
        if (precision) {
            p = precision.Value;
        }
        return new Double(floor(this._number, p));
    }

    /**
     * round up or down
     * @param precision
     * @constructor
     */
    Round(precision?: Integer): Double {
        let p = 0;
        if (precision) {
            p = precision.Value;
        }
        return new Double(round(this._number, p));
    }

    /**
     * increment the Double by the number of Steps
     * @param step
     * @constructor
     */
    Increment(step?: Double): Double {
        if (!step) {
            this._number++;
        } else {
            this._number += step.Value;
        }
        return this;
    }

    /**
     * decrement this Double by the number of Steps
     * @param step
     * @constructor
     */
    Decrement(step?: Double): Double {
        if (!step) {
            this._number--;
        } else {
            this._number -= step.Value;
        }
        return this;
    }
}
