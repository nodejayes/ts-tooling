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
import {TimeSpan} from './complex/time.span';
export {TimeSpan} from './complex/time.span';
import {Guid} from './complex/guid';
export {Guid} from './complex/guid';
import {Byte} from './complex/byte';
export {Byte} from './complex/byte';
import {ByteStream} from './complex/byte.stream';
export {ByteStream} from './complex/byte.stream';

// Collections
import {Dictionary} from './complex/dictionary';
export {Dictionary} from './complex/dictionary';
import {ListSortOrder} from './primitive/list.sort.order.enum';
export {ListSortOrder} from './primitive/list.sort.order.enum';

// Patterns
import {using} from './pattern/dispose/using';
export {using} from './pattern/dispose/using';
export {IDisposable} from './pattern/dispose/disposable';
import {create, createWithFactory} from './pattern/construct';
export {create, createWithFactory} from './pattern/construct';
import {EventHandler} from './pattern/events/event.handler';
export {EventHandler} from './pattern/events/event.handler';
import {ReactiveStore} from './pattern/store/reactive.store';
export {ReactiveStore} from './pattern/store/reactive.store';
import {BackgroundWorker} from './pattern/background.worker/background.worker';
export {BackgroundWorker} from './pattern/background.worker/background.worker';

// Utils
import {LZCompression} from './compression/lz';
export {LZCompression} from './compression/lz';
import {StopWatch} from './utils/stopwatch';
export {StopWatch} from './utils/stopwatch';
import {NumberFactory} from './utils/number.factory';
export {NumberFactory} from './utils/number.factory';
import {StringFactory} from "./utils/string.factory";
export {StringFactory} from "./utils/string.factory";
import {
    ClassValidator, IsDefined, IsEmail, Max, Min, Blacklist, IsNotEmpty,
    MaxLength, MinLength, ValidateIf, Whitelist
} from './utils/class.validator';
export {
    ClassValidator, IsDefined, IsEmail, Max, Min, Blacklist, IsNotEmpty,
    MaxLength, MinLength, ValidateIf, Whitelist
} from './utils/class.validator';
import {ObjectFactory} from "./utils/object.factory";
export {ObjectFactory} from "./utils/object.factory";

export default {
    DateTime, TimeSpan, Guid, Byte, ByteStream,
    Dictionary, ListSortOrder,
    using, create, createWithFactory, EventHandler, ReactiveStore, BackgroundWorker,
    LZCompression, StopWatch, NumberFactory, StringFactory, ClassValidator, ObjectFactory,
    IsDefined, IsEmail, Min, Max, Blacklist, IsNotEmpty, MaxLength, MinLength, ValidateIf, Whitelist
};
