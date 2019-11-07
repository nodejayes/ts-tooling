import {DateTime} from './complex/date-time';

// Basic Extensions
declare global {
    interface Number {
        /**
         * if the Number between the Range of start and end
         * @param start the lower border
         * @param end the upper border
         * @constructor
         */
        IsInRange(start: number, end: number): boolean;
        /**
         * if the given Number the Same as this Number
         * @param value the Number to compare
         * @constructor
         */
        Equals(value: number): boolean;
        /**
         * the Number is above another Number
         * @param value the Number that must be lower than this Number to be True
         * @constructor
         */
        IsAbove(value: number): boolean;
        /**
         * the Number is below another Number
         * @param value the Number that must be higher than this Number to be True
         * @constructor
         */
        IsBelow(value: number): boolean;
        /**
         * Clamps Number within the inclusive lower and upper bounds.
         * @param lower the Number of the lower border
         * @param upper the Number of the upper border
         * @constructor
         */
        Clamp(lower: number, upper: number): number;

        /**
         * add a Number to this Number
         * @param value the Number to add
         * @constructor
         */
        Add(value: number): number;

        /**
         * remove a Number from this Number
         * @param value the Number to subtract
         * @constructor
         */
        Subtract(value: number): number;

        /**
         * multiply a Number with this Number
         * @param value the Multiplicand for this Number
         * @constructor
         */
        Multiply(value: number): number;

        /**
         * divide this Number by the given Number
         * throw a Exception when the Divisor is zero
         * @param value the Divisor
         * @constructor
         */
        Divide(value: number): number;

        /**
         * increment this Number and return a new Instance
         * @param step? the Number to Increment with one Call
         * @constructor
         */
        Increment(step?: number): number;

        /**
         * decrement this Number and return a new Instance
         * @param step? the Number to Decrement with one Call
         * @constructor
         */
        Decrement(step?: number): number;

        /**
         * Round up or down
         * @param precision number of digits after the decimal point
         * @constructor
         */
        Round(precision?: number): number;

        /**
         * Round down
         * @param precision number of digits after the decimal point
         * @constructor
         */
        Floor(precision?: number): number;

        /**
         * Round up
         * @param precision number of digits after the decimal point
         * @constructor
         */
        Ceil(precision?: number): number;
    }
    interface String {
    }
    interface Date {
        ToDateTime(): DateTime;
    }
}