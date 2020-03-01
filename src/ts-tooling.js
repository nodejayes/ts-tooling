// Types
const {NumberFactory} = require('./types/number');
const {StringFactory} = require('./types/string');
const {ListSortOrder} = require('./types/array');
const {ObjectFactory} = require('./types/object');
const {TimeSpan, DateTime} = require('./types/datetime');
const {Guid} = require('./types/guid');
const {Byte, ByteStream} = require('./types/byte');
const {Dictionary} = require('./types/dictionary');

// Patterns
const {Using, Create, CreateWithFactory, Throttle} = require('./pattern');
const {EventHandler} = require('./pattern/event-handler');
const {ReactiveStore, SafeBehaviorSubject} = require('./pattern/reactive-store');

// Utils
const {LZCompression} = require('./utils/compression');
const {StopWatch} = require('./utils/stopwatch');
const {
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
} = require('./utils/validation');
const {TestDataGenerator} = require('./utils/generator');

module.exports = {
    NumberFactory, StringFactory, ObjectFactory,
    DateTime, TimeSpan, Guid, Byte, ByteStream,
    ListSortOrder, Dictionary, TestDataGenerator,
    LZCompression, StopWatch, ClassValidator,
    Throttle, SafeBehaviorSubject,
    Create, CreateWithFactory, Using, EventHandler, ReactiveStore,
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
