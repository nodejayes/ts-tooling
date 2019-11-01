import {Double} from './primitive/double';
import {Integer} from './primitive/integer';
import {Chars} from "./primitive/chars";
import {DateTime} from './complex/date-time';
import {Bool} from "./primitive/bool";

// Basic Extensions
declare global {
    interface Number {
        ToDouble(): Double;

        ToInteger(): Integer;
    }

    interface String {
        ToChars(): Chars;

        ToDouble(): Double;

        ToInteger(): Integer;
    }

    interface Date {
        ToDateTime(): DateTime;
    }
}

/**
 * convert the basic Javascript Number into a Integer
 * @constructor
 */
Number.prototype.ToInteger = function (this: number): Integer {
    return new Integer(this);
};

/**
 * convert the basic Javascript Number into a Double
 * @constructor
 */
Number.prototype.ToDouble = function (this: number): Double {
    return new Double(this);
};

/**
 * convert the Basic Javascript String into Chars Object
 * @constructor
 */
String.prototype.ToChars = function (this: string): Chars {
    return new Chars(this);
};

/**
 * convert the basic Javascript String into a Integer
 * if not possible we get an Integer with value of Zero
 * @constructor
 */
String.prototype.ToInteger = function (this: string): Integer {
    return new Integer(this);
};

/**
 * convert the basic Javascript String into a Double
 * if not possible we get an Integer with value of Zero
 * @constructor
 */
String.prototype.ToDouble = function (this: string): Double {
    return new Double(this);
};

/**
 * convert basic Javascript Date into DateTime
 * @constructor
 */
Date.prototype.ToDateTime = function (this: Date): DateTime {
    return DateTime.FromJavascriptDate(this);
};

// Types
export {Double} from './primitive/double';
export {Bool} from './primitive/bool';
export {Integer} from './primitive/integer';
export {Chars} from './primitive/chars';
export {DateTime} from './complex/date-time';
export {TimeSpan} from './complex/time-span';
export {Guid} from './complex/guid';

// Collections
export {Dictionary} from './collections/dictionary';
export {List} from './collections/list';
export {ListSortOrder} from './collections/list-sort-order.enum';

// Patterns
export {using} from './pattern/dispose/using';
export {IDisposable} from './pattern/dispose/disposable';
export {create, createWithFactory} from './pattern/construct';
export {EventHandler} from './pattern/events/event-handler';
export {ReactiveStore} from './pattern/store/reactive-store';

// Utils
export {LZCompression} from './compression/lz';
export {StopWatch} from './utils/stopwatch';

export const ZERO_INT = new Integer(0);
export const ZERO_DOUBLE = new Double(0.0);
