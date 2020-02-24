import 'mocha';
import {assert} from 'chai';
import {
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
} from '../lib/ts-tooling';
import {BackgroundWorker as NodeBackgroundWorker} from '../lib/pattern/background.worker/node-worker';
import {BackgroundWorker as WebBackgroundWorker} from '../lib/pattern/background.worker/web-worker';

/**
 * Test if the Types are generated correctly in the Submodules from the lib folder
 */

describe('lib export Tests', () => {
    describe('Pattern Modules', () => {
        it('Node Worker', () => {
            assert.isDefined(NodeBackgroundWorker);
        });
        it('Web Worker', () => {
            assert.isDefined(WebBackgroundWorker);
        });
        it('Reactive Store', () => {
            assert.isDefined(ReactiveStore);
            assert.isDefined(SafeBehaviorSubject);
        });
        it('Event Handler', () => {
            assert.isDefined(EventHandler);
        });
        it('Pattern', () => {
            assert.isFunction(using);
            assert.isFunction(create);
            assert.isFunction(createWithFactory);
            assert.isFunction(throttle);
        });
    });
    describe('Type Modules', () => {
        it('array', () => {
            assert.isDefined(ListSortOrder);
            assert.isFunction([1].Add);
            assert.isFunction([1].Replace);
            assert.isFunction([1].Insert);
            assert.isFunction([1].InsertRange);
            assert.isFunction([1].Remove);
            assert.isFunction([1].RemoveAt);
            assert.isFunction([1].RemoveAll);
            assert.isFunction([1].RemoveRange);
            assert.isFunction([1].GroupBy);
        });
        it('byte', () => {
            assert.isDefined(Byte);
            assert.isDefined(ByteStream);
        });
        it('datetime', () => {
            assert.isDefined(DateTime);
            assert.isDefined(TimeSpan);
        });
        it('dictionary', () => {
            assert.isDefined(Dictionary);
        });
        it('guid', () => {
            assert.isDefined(Guid);
        });
        it('number', () => {
            assert.isDefined(NumberFactory);
            assert.isFunction((1).IsBelow);
        });
        it('object', () => {
            assert.isDefined(ObjectFactory);
        });
        it('string', () => {
            assert.isDefined(StringFactory);
            assert.isFunction(''.Concat);
        });
    });
    describe('Util Modules', () => {
        it('compression', () => {
            assert.isDefined(LZCompression);
        });
        it('generator', () => {
            assert.isDefined(TestDataGenerator);
        });
        it('stopwatch', () => {
            assert.isDefined(StopWatch);
        });
        it('validation', () => {
            assert.isDefined(ClassValidator);
            assert.isFunction(ValidateClass);
            assert.isFunction(IsDefined);
            assert.isFunction(IsEmail);
            assert.isFunction(Min);
            assert.isFunction(Max);
            assert.isFunction(Blacklist);
            assert.isFunction(IsEmpty);
            assert.isFunction(IsNotEmpty);
            assert.isFunction(MaxLength);
            assert.isFunction(MinLength);
            assert.isFunction(ValidateIf);
            assert.isFunction(Whitelist);
            assert.isFunction(Equals);
            assert.isFunction(NotEquals);
            assert.isFunction(ArrayNotEmpty);
            assert.isFunction(IsAlpha);
            assert.isFunction(IsAlphanumeric);
            assert.isFunction(IsAscii);
            assert.isFunction(IsBase64);
            assert.isFunction(IsBooleanString);
            assert.isFunction(IsByteLength);
            assert.isFunction(IsHash);
            assert.isFunction(IsHexadecimal);
            assert.isFunction(IsHexColor);
            assert.isFunction(IsInt);
            assert.isFunction(IsIp);
            assert.isFunction(IsJSON);
            assert.isFunction(IsJWT);
            assert.isFunction(IsMacAddress);
            assert.isFunction(IsMongoId);
            assert.isFunction(IsNegative);
            assert.isFunction(IsNumberString);
            assert.isFunction(IsOptional);
            assert.isFunction(IsPort);
            assert.isFunction(IsPositive);
            assert.isFunction(IsUrl);
            assert.isFunction(IsUUID);
            assert.isFunction(MaxDate);
            assert.isFunction(MinDate);
            assert.isFunction(Required);
            assert.isFunction(UniqueArray);
            assert.isFunction(CustomValidation);
        });
    });
});
