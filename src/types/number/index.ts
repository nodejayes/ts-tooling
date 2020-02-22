import './number.extension';
import {NumberFactory} from './number.factory';

export {NumberFactory};

declare global {
    /**
     * extends the basic Javascript Number
     */
    interface Number {
        /**
         * Checks if a number is within 2 limits.
         *
         * The limit values are included!
         *
         * @param lower the lower limit
         * @param upper the upper limit
         *
         * @example
         * // returns true
         * 1.2.IsInRange(1.0, 2.0);
         * 1.0.IsInRange(1.0, 2.0);
         * 2.0.IsInRange(1.0, 2.0);
         * // returns false
         * 5.2.IsInRange(1.0, 2.0)
         */
        IsInRange?(lower: number, upper: number): boolean;

        /**
         * Checks if a number is equal to the current number.
         *
         * @param value the Number to check again the current Number
         *
         * @example
         * // returns true
         * (1).Equals(1)
         * // returns false
         * (1).Equals(2)
         */
        Equals?(value: number): boolean;

        /**
         * Checks if a number is greater than the current number.
         *
         * @param value the Number to check again the current Number
         *
         * @example
         * // returns true
         * (1).IsAbove(0)
         * // returns false
         * (1).IsAbove(1)
         * (1).IsAbove(5)
         */
        IsAbove?(value: number): boolean;

        /**
         * Checks if a number is lower than the current number.
         *
         * @param value the Number to check again the current Number
         *
         * @example
         * // returns true
         * (1).IsBelow(5)
         * // returns false
         * (1).IsBelow(1)
         * (1).IsBelow(0)
         */
        IsBelow?(value: number): boolean;

        /**
         * Sets the value of the number to the lower or upper limit if the number is greater or smaller than the opere or lower limit.
         *
         * @param lower the lower limit
         * @param upper the upper limit
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
        Clamp?(lower: number, upper: number): number;

        /**
         * Add the current number to the given number.
         *
         * @param value the Number to add to the current Number
         *
         * @example
         * ```
         * // returns 2
         * (1).Add(1);
         * // returns 3
         * (1).Add(1).Add(1);
         * ```
         */
        Add?(value: number): number;

        /**
         * Subtracts the current number with the given number.
         *
         * @param value the Number to subtract from the current Number
         *
         * @example
         * // returns 1
         * (2).Subtract(1);
         * // returns 0
         * (2).Subtract(1).Subtract(1);
         */
        Subtract?(value: number): number;

        /**
         * Multiplies the current number by the given number.
         *
         * @param value the Number to multiply from the current Number
         *
         * @example
         * // returns 10
         * (1).Multiply(10);
         * // returns 20
         * (1).Multiply(10).Multiply(2);
         */
        Multiply?(value: number): number;

        /**
         * Divides the current number with the given number.
         *
         * @param value the Number to multiply from the current Number
         *
         * @example
         * // returns 5
         * (10).Divide(2);
         * // returns 5
         * (20). Divide(2).Divide(2);
         * // throws an Error
         * (10).Divide(0);
         */
        Divide?(value: number): number;

        /**
         * increases the number by 1 or the value that was given.
         *
         * @param step Number to be incremented by
         *
         * @example
         * // returns 2
         * (1).Increment();
         * // returns 5
         * (1).Increment(4);
         */
        Increment?(step?: number): number;

        /**
         * decreases the number by 1 or the value that was given.
         *
         * @param step Number to be decremented by
         *
         * @example
         * // returns 4
         * (5).Decrement();
         * // returns 1
         * (5).Decrement(4);
         */
        Decrement?(step?: number): number;

        /**
         * Rounds a number up or down if the next digit is greater than or equal to 5.
         *
         * @param precision Number of digits used for rounding
         *
         * @example
         * // returns 4
         * 4.006.Round();
         * // returns 4.01
         * 4.006.Round(2);
         * // returns 4100
         * (4060).Round(-2);
         */
        Round?(precision?: number): number;

        /**
         * Rounding off a number
         *
         * @param precision Number of digits used for rounding
         *
         * @example
         * // returns 4
         * 4.006.Floor();
         * // returns 0.04
         * 0.046.Floor(2);
         * // returns 4000
         * (4060).Floor(-2);
         */
        Floor?(precision?: number): number;

        /**
         * Rounding up a number
         *
         * @param precision Number of digits used for rounding
         *
         * @example
         * // returns 5
         * 4.006.Ceil();
         * // returns 6.01
         * 6.004.Ceil(2);
         * // returns 6100
         * (6040).Ceil(-2);
         */
        Ceil?(precision?: number): number;

        /**
         * number of digits before the decimal point
         *
         * @example
         * // returns 1
         * (1.5).Numerals();
         * (1).Numerals();
         * // returns 2
         * (10).Numerals();
         */
        Numerals?(): number;

        /**
         * Number of digits after the decimal point
         *
         * @example
         * // returns 0
         * (1).DecimalPlaces();
         * // returns 1
         * (1.5).DecimalPlaces();
         */
        DecimalPlaces?(): number;
    }
}
