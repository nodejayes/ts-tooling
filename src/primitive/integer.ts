import {clamp, random} from 'lodash';

/**
 * representation of a Integer
 * @group BasicTypes
 */
export class Integer {
    private _number = 0;
    private _isValid = false;

    /**
     * the Value of this Integer
     * @constructor
     */
    get Value(): number {
        return this._number;
    }

    /**
     * the Current Integer is a valid Integer
     * @constructor
     */
    get Valid(): boolean {
        return this._isValid;
    }

    /**
     * generate a Random Integer between min and max
     *
     * ```typescript
     * // set a Random Integer from 1-10 to random
     * const random = Integer.Random(new Integer(1), new Integer(10));
     * ```
     *
     * @param min
     * @param max
     * @constructor
     */
    static Random(min: Integer, max: Integer): Integer {
        return new Integer(random(min.Value, max.Value, false));
    }

    /**
     * create a new Integer from Number or String
     *
     * ```typescript
     * // create with constructor
     * const one = new Integer(1);
     *
     * // create from Javascript Value
     * const one = (1).ToInteger();
     * ```
     * @param integer
     */
    constructor(integer?: number | string) {
        if (!integer && integer !== 0) {
            return;
        }
        const tmp = parseInt(integer.toString());
        if (!isNaN(tmp)) {
            this._number = tmp;
            this._isValid = true;
        }
    }

    /**
     * is this Integer in Range of two Integers
     * the Borders equality is in the Range!
     *
     * ```typescript
     * const value = new Integer(2);
     * const start = new Integer(1);
     * const end = new Integer(3);
     *
     * value.IsInRange(start, end);
     * // result => True
     * ```
     *
     * @param start
     * @param end
     * @constructor
     */
    IsInRange(start: Integer, end: Integer): boolean {
        return this._number <= end.Value && this._number >= start.Value;
    }

    /**
     * the Integer is equal with another Integer
     *
     * ```typescript
     * console.info(new Integer(1).Equals(new Integer(1)));
     * // result => True
     *
     * console.info(new Integer(1).Equals(new Integer(2)));
     * // result => False
     * ```
     *
     * @param value
     * @constructor
     */
    Equals(value: Integer): boolean {
        return this._number === value.Value;
    }

    /**
     * the Integer is above another Integer
     *
     * ```typescript
     * console.info(new Integer(1).IsAbove(new Integer(0));
     * // result => True
     * ```
     *
     * @param value
     * @constructor
     */
    IsAbove(value: Integer): boolean {
        return this._number > value.Value;
    }

    /**
     * the Integer is below another Integer
     *
     * ```typescript
     * console.info(new Integer(0).IsBelow(new Integer(1)));
     * // result => True
     * ```
     *
     * @param value
     * @constructor
     */
    IsBelow(value: Integer): boolean {
        return this._number < value.Value;
    }

    /**
     * Clamps Integer within the inclusive lower and upper bounds.
     *
     * ```typescript
     * console.info(new Integer(12).Clamp(new Integer(1), new Integer(2)));
     * // result => 2
     * ```
     *
     * @param lower
     * @param upper
     * @constructor
     */
    Clamp(lower: Integer, upper: Integer): Integer {
        return new Integer(clamp(this._number, lower.Value, upper.Value));
    }

    /**
     * Add a Integer to this Integer
     *
     * ```typescript
     * console.info(new Integer(1).Add(new Integer(2)));
     * // result => 2
     * ```
     *
     * @param n
     * @constructor
     */
    Add(n: Integer): Integer {
        return new Integer(this.Value + n.Value);
    }

    /**
     * Subtract a Integer from this Integer
     *
     * ```typescript
     * console.info(new Integer(2).Subtract(new Integer(1)));
     * // result => 1
     * ```
     *
     * @param n
     * @constructor
     */
    Subtract(n: Integer): Integer {
        return new Integer(this.Value - n.Value);
    }

    /**
     * Multiply this Integer
     *
     * ```typescript
     * console.info(new Integer(1).Multiply(new Integer(1)));
     * // result => 1
     * ```
     *
     * @param n
     * @constructor
     */
    Multiply(n: Integer): Integer {
        return new Integer(this.Value * n.Value);
    }

    /**
     * Divide this Integer
     * ATTENTION Result is a Integer not Double
     * for Precision choose Double Data Type
     *
     * ```typescript
     * console.info(new Integer(4).Divide(new Integer(2)));
     * // returns => 2
     * ```
     *
     * @param n
     * @constructor
     */
    Divide(n: Integer): Integer {
        if (n.Value === 0) {
            throw new Error(`Division by Zero ${this._number} / ${n.Value}`);
        }
        return new Integer(this.Value / n.Value);
    }
}
