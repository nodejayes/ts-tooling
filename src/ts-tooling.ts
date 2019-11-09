import {DateTime} from './complex/date.time';
import './type.extensions';

/**
 * convert basic Javascript Date into DateTime
 * @constructor
 */
Date.prototype.ToDateTime = function (this: Date): DateTime {
    return DateTime.FromJavascriptDate(this);
};

// Types
export {DateTime} from './complex/date.time';
export {TimeSpan} from './complex/time.span';
export {Guid} from './complex/guid';

// Collections
export {Dictionary} from './complex/dictionary';
export {ListSortOrder} from './primitive/list.sort.order.enum';

// Patterns
export {using} from './pattern/dispose/using';
export {IDisposable} from './pattern/dispose/disposable';
export {create, createWithFactory} from './pattern/construct';
export {EventHandler} from './pattern/events/event.handler';
export {ReactiveStore} from './pattern/store/reactive.store';

// Utils
export {LZCompression} from './compression/lz';
export {StopWatch} from './utils/stopwatch';
export {NumberFactory} from './utils/number.factory';

export const ZERO_INT = 0;
export const ZERO_DOUBLE = 0.0;
