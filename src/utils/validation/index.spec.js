const {assert} = require('chai');
const {
    ClassValidator,
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
    ValidateClass
} = require('./index');

describe('Type Byte Export Tests', () => {
    it('ClassValidator', () => {
        assert.isDefined(ClassValidator);
    });
    it('IsDefined', () => {
        assert.isDefined(IsDefined);
    });
    it('IsEmail', () => {
        assert.isDefined(IsEmail);
    });
    it('Min', () => {
        assert.isDefined(Min);
    });
    it('Max', () => {
        assert.isDefined(Max);
    });
    it('Blacklist', () => {
        assert.isDefined(Blacklist);
    });
    it('IsEmpty', () => {
        assert.isDefined(IsEmpty);
    });
    it('IsNotEmpty', () => {
        assert.isDefined(IsNotEmpty);
    });
    it('MaxLength', () => {
        assert.isDefined(MaxLength);
    });
    it('MinLength', () => {
        assert.isDefined(MinLength);
    });
    it('ValidateIf', () => {
        assert.isDefined(ValidateIf);
    });
    it('Whitelist', () => {
        assert.isDefined(Whitelist);
    });
    it('Equals', () => {
        assert.isDefined(Equals);
    });
    it('NotEquals', () => {
        assert.isDefined(NotEquals);
    });
    it('ArrayNotEmpty', () => {
        assert.isDefined(ArrayNotEmpty);
    });
    it('IsAlpha', () => {
        assert.isDefined(IsAlpha);
    });
    it('IsAlphanumeric', () => {
        assert.isDefined(IsAlphanumeric);
    });
    it('IsAscii', () => {
        assert.isDefined(IsAscii);
    });
    it('IsBase64', () => {
        assert.isDefined(IsBase64);
    });
    it('IsBooleanString', () => {
        assert.isDefined(IsBooleanString);
    });
    it('IsByteLength', () => {
        assert.isDefined(IsByteLength);
    });
    it('IsHash', () => {
        assert.isDefined(IsHash);
    });
    it('IsHexadecimal', () => {
        assert.isDefined(IsHexadecimal);
    });
    it('IsHexColor', () => {
        assert.isDefined(IsHexColor);
    });
    it('IsInt', () => {
        assert.isDefined(IsInt);
    });
    it('IsIp', () => {
        assert.isDefined(IsIp);
    });
    it('IsJSON', () => {
        assert.isDefined(IsJSON);
    });
    it('IsJWT', () => {
        assert.isDefined(IsJWT);
    });
    it('IsMacAddress', () => {
        assert.isDefined(IsMacAddress);
    });
    it('IsMongoId', () => {
        assert.isDefined(IsMongoId);
    });
    it('IsNegative', () => {
        assert.isDefined(IsNegative);
    });
    it('IsNumberString', () => {
        assert.isDefined(IsNumberString);
    });
    it('IsOptional', () => {
        assert.isDefined(IsOptional);
    });
    it('IsPort', () => {
        assert.isDefined(IsPort);
    });
    it('IsPositive', () => {
        assert.isDefined(IsPositive);
    });
    it('IsUrl', () => {
        assert.isDefined(IsUrl);
    });
    it('IsUUID', () => {
        assert.isDefined(IsUUID);
    });
    it('MaxDate', () => {
        assert.isDefined(MaxDate);
    });
    it('MinDate', () => {
        assert.isDefined(MinDate);
    });
    it('Required', () => {
        assert.isDefined(Required);
    });
    it('UniqueArray', () => {
        assert.isDefined(UniqueArray);
    });
    it('CustomValidation', () => {
        assert.isDefined(CustomValidation);
    });
    it('ValidateClass', () => {
        assert.isDefined(ValidateClass);
    });
});
