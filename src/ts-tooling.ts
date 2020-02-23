// Types
import {NumberFactory} from './types/number';
import {StringFactory} from './types/string';
import {ListSortOrder} from './types/array';
import {ObjectFactory} from './types/object';
import {TimeSpan, DateTime} from './types/datetime';
import {Guid} from './types/guid';
import {Byte, ByteStream} from './types/byte';
import {Dictionary} from './types/dictionary';

// Patterns
import {using, IDisposable, create, createWithFactory, IThrottleOptions, throttle} from './pattern';
import {EventHandler} from './pattern/event-handler';
import {ReactiveStore, SafeBehaviorSubject} from './pattern/reactive-store';

// Utils
import {LZCompression} from './utils/compression';
import {StopWatch} from './utils/stopwatch';
import {
    ClassValidator, IsDefined, IsEmail, Max, Min, Blacklist, IsNotEmpty, IsEmpty,
    MaxLength, MinLength, ValidateIf, Whitelist, Equals, NotEquals,
    ArrayNotEmpty,
    IsAlpha,
    IsAlphanumeric,
    IsAscii,
    IsBase64,
    IsBooleanString,
    IsByteLength,
    IsHash,
    IsHexadecimal,
    IsHexColor,
    IsInt, IsIp, IsJSON, IsJWT, IsMacAddress,
    IsMongoId,
    IsNegative,
    IsNumberString,
    IsOptional, IsPort,
    IsPositive,
    IsUrl,
    IsUUID,
    MaxDate,
    MinDate,
    Required,
    UniqueArray,
    CustomValidation,
    ValidateClass
} from './utils/validation';
import {TestDataGenerator} from './utils/generator';

export {
    NumberFactory, StringFactory, ObjectFactory,
    DateTime, TimeSpan, Guid, Byte, ByteStream,
    ListSortOrder, Dictionary, TestDataGenerator,
    LZCompression, StopWatch, ClassValidator,
    IThrottleOptions, throttle, SafeBehaviorSubject, IDisposable,
    create, createWithFactory, using, EventHandler, ReactiveStore,
    IsDefined, IsEmail, Min, Max, Blacklist, IsEmpty, IsNotEmpty, MaxLength, MinLength, ValidateIf, Whitelist,
    Equals, NotEquals,
    ArrayNotEmpty,
    IsAlpha,
    IsAlphanumeric,
    IsAscii,
    IsBase64,
    IsBooleanString,
    IsByteLength,
    IsHash,
    IsHexadecimal,
    IsHexColor,
    IsInt, IsIp, IsJSON, IsJWT, IsMacAddress,
    IsMongoId,
    IsNegative,
    IsNumberString,
    IsOptional, IsPort,
    IsPositive,
    IsUrl,
    IsUUID,
    MaxDate,
    MinDate,
    Required,
    UniqueArray,
    CustomValidation,
    ValidateClass,
};

export default {
    NumberFactory, StringFactory, ObjectFactory,
    DateTime, TimeSpan, Guid, Byte, ByteStream,
    ListSortOrder, Dictionary, TestDataGenerator,
    throttle, SafeBehaviorSubject,
    using, create, createWithFactory, EventHandler, ReactiveStore,
    LZCompression, StopWatch, ClassValidator,
    IsDefined, IsEmail, Min, Max, Blacklist, IsEmpty, IsNotEmpty, MaxLength, MinLength, ValidateIf, Whitelist,
    Equals, NotEquals,
    ArrayNotEmpty,
    IsAlpha,
    IsAlphanumeric,
    IsAscii,
    IsBase64,
    IsBooleanString,
    IsByteLength,
    IsHash,
    IsHexadecimal,
    IsHexColor,
    IsInt, IsIp, IsJSON, IsJWT, IsMacAddress,
    IsMongoId,
    IsNegative,
    IsNumberString,
    IsOptional, IsPort,
    IsPositive,
    IsUrl,
    IsUUID,
    MaxDate,
    MinDate,
    Required,
    UniqueArray,
    CustomValidation,
    ValidateClass,
};
