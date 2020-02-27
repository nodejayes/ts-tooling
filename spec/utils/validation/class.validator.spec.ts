import {assert} from 'chai';
import 'mocha';
import {
    ClassValidator, IsDefined, IsEmail, Max, Min, Blacklist, IsNotEmpty,
    MaxLength, MinLength, ValidateIf, Whitelist, IsEmpty, Equals, NotEquals,
    ArrayNotEmpty, CustomValidation,
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
    UniqueArray, ValidateClass
} from '../../../src/utils/validation';
import {DateTime} from '../../../src/types/datetime';

class Test {
    @IsDefined()
    Name: string;

    @Min(0)
    @Max(200)
    Age: number;

    @IsEmail()
    Email: string;
}

class Test2 {
    @IsDefined('Invalid')
    Name: string;

    @Min(0, 'Invalid')
    @Max(200, 'Invalid')
    Age: number;

    @IsEmail('Invalid')
    Email: string;
}

class Test3 {
    @IsDefined()
    Name: string;
    Detail: SubObject;
}

class SubObject {
    @IsDefined()
    FirstName: string;

    @IsDefined()
    LastName: string;
}

class MultipleValidations {
    @IsDefined()
    @MinLength(3)
    @MaxLength(25)
    FirstName: string;

    @IsDefined()
    @MinLength(3)
    @MaxLength(50)
    LastName: string;
}

class ConditionalValidation {
    Validate: boolean;

    @ValidateIf<ConditionalValidation>(m => m.Validate)
    @IsDefined()
    Name: string;
}

class EmptyValue {
    @IsNotEmpty()
    prop: string;
}

describe('ClassValidator Tests', () => {
    it('validate decorated Class', async () => {
        const valid = new Test();
        valid.Name = 'Max';
        valid.Age = 25;
        valid.Email = 'max@mustermann.de';
        const invalid = new Test();
        invalid.Name = null;
        invalid.Age = 1500;
        invalid.Email = 'abcdefg';
        let res = await ClassValidator.Validate(valid);
        assert.lengthOf(res, 0);
        res = await ClassValidator.Validate(invalid);
        assert.lengthOf(res, 3);
    });
    it('has Custom Validation Messages', async () => {
        const invalid = new Test2();
        invalid.Name = null;
        invalid.Age = 1500;
        invalid.Email = 'abcdefg';

        let res = await ClassValidator.Validate(invalid);
        assert.lengthOf(res, 3);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
        assert.equal(res.ElementAt(1).Message, 'Invalid');
        assert.equal(res.ElementAt(2).Message, 'Invalid');

        invalid.Age = -1;

        res = await ClassValidator.Validate(invalid);
        assert.lengthOf(res, 3);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
        assert.equal(res.ElementAt(1).Message, 'Invalid');
        assert.equal(res.ElementAt(2).Message, 'Invalid');
    });
    it('validate pure Object', async () => {
        const valid = {
            Name: 'Max',
            Age: 25,
            Email: 'max@mustermann.de'
        };
        const invalid = {
            Name: null,
            Age: 1500,
            Email: 'xxx',
        };
        let res = await ClassValidator.ValidateObject(Test, valid);
        assert.lengthOf(res, 0);
        res = await ClassValidator.ValidateObject(Test, invalid);
        assert.lengthOf(res, 3);
    });
    it('check Sub Objects', async () => {
        const t = new Test3();
        t.Name = 'IDontTellYou';
        t.Detail = new SubObject();
        t.Detail.FirstName = null;
        t.Detail.LastName = 'SomeName';
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'the Property FirstName in SubObject must be defined.');
    });
    it('support multiple Validations at one Property', async () => {
        const t = new MultipleValidations();
        t.FirstName = '';
        t.LastName = '';
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 2);
        assert.equal(res.ElementAt(0).Message, 'the Property FirstName in MultipleValidations can not have more than 25 characters.');
        assert.equal(res.ElementAt(1).Message, 'the Property LastName in MultipleValidations can not have more than 50 characters.');
    });
    it('use Conditional Validation', async () => {
        const t = new ConditionalValidation();
        t.Validate = true;
        t.Name = null;
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'the Property Name in ConditionalValidation must be defined.');

        t.Validate = false;
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);
    });
    it('check IsEmpty', async () => {
        class MustBeEmpty {
            @IsEmpty('Invalid')
            prop: string;
        }
        const t = new MustBeEmpty();
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 'value';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('check IsNotEmpty', async () => {
        const t = new EmptyValue();
        t.prop = '';
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'the Property prop in EmptyValue can not be Empty.');

        t.prop = 'value';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);
    });
    it('Blacklist check', async () => {
        class BlacklistCheck {
            @Blacklist(['a', 'b', 'c'])
            prop: string;
        }

        const t = new BlacklistCheck();
        t.prop = 'a';

        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'the Property prop in BlacklistCheck can not have the following values: a,b,c');

        t.prop = 'b';

        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'the Property prop in BlacklistCheck can not have the following values: a,b,c');

        t.prop = 'c';

        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'the Property prop in BlacklistCheck can not have the following values: a,b,c');

        t.prop = 'x';

        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);
    });
    it('Whitelist check', async () => {
        class WhitelistCheck {
            @Whitelist(['x', 'y', 'z'])
            prop: string;
        }

        const t = new WhitelistCheck();
        t.prop = 'a';

        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'the Property prop in WhitelistCheck can only have the following values: x,y,z');

        t.prop = 'x';

        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 'y';

        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 'z';

        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);
    });
    it('Equal check', async () => {
        class CheckEqual {
            @Equals('-', 'Invalid')
            prop: string;
        }
        const t = new CheckEqual();
        t.prop = null;
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');

        t.prop = '-';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);
    });
    it('NotEqual check', async () => {
        class CheckNotEqual {
            @NotEquals('-', 'Invalid')
            prop: string;
        }
        const t = new CheckNotEqual();
        t.prop = '-';
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');

        t.prop = 'a';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);
    });
    it('Required check', async () => {
        class CheckIsRequired {
            @Required('Invalid')
            id: number;
        }
        const t = new CheckIsRequired();
        t.id = null;

        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');

        t.id = 1;
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);
    });
    it('IsOptional check', async () => {
        class CheckIsOptional {
            @IsOptional()
            @Equals('test', 'Invalid')
            prop: string;
        }
        const t = new CheckIsOptional();
        t.prop = 'x';

        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');

        t.prop = null;
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 'test';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);
    });
    it('IsInt check', async () => {
        class CheckIsBoolean {
            @IsInt('Invalid')
            prop: any;
        }
        const t = new CheckIsBoolean();
        t.prop = 1;
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 1.5;
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');

        t.prop = '1.5';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('UniqueArray check', async () => {
        class UniqueArrayCheck {
            @UniqueArray('Invalid')
            prop: any[];
        }
        const tmp1 = {Hello:'World!'};
        const tmp2 = {Test:'World!'};
        const t = new UniqueArrayCheck();
        t.prop = [1,2,3,4];
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = [tmp1, tmp2];
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = [tmp1, tmp1];
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');

        t.prop = [1, 1];
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('ArrayIsNotEmpty check', async () => {
        class ArrayIsNotEmptyCheck {
            @ArrayNotEmpty('Invalid')
            prop: any[];
        }
        const t = new ArrayIsNotEmptyCheck();
        t.prop = [];
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');

        t.prop = [1];
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = null;
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);
    });
    it('IsPositive check', async () => {
        class IsPositiveCheck {
            @IsPositive('Invalid')
            prop: number;
        }
        const t = new IsPositiveCheck();
        t.prop = 0;
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 1;
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = -1;
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('IsNegative check', async () => {
        class IsNegativeCheck {
            @IsNegative('Invalid')
            prop: number;
        }
        const t = new IsNegativeCheck();
        t.prop = -1;
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 0;
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');

        t.prop = 1;
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('IsBooleanString check', async () => {
        class IsBooleanStringCheck {
            @IsBooleanString('Invalid')
            prop: string;
        }
        const t = new IsBooleanStringCheck();
        t.prop = 'true';
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 'false';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 'TRUE';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 'FALSE';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 'xxx';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('IsNumberString check', async () => {
        class IsNumberStringCheck {
            @IsNumberString('Invalid')
            prop: string;
        }
        const t = new IsNumberStringCheck();
        t.prop = '1';
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = '1.2';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = '1xxx2';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 'xxx';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('IsHash check', async () => {
        class IsHashCheck {
            @IsHash('Invalid')
            prop: string;
        }
        const t = new IsHashCheck();

        // MD5
        t.prop = 'd41d8cd98f00b204e9800998ecf8427e';
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        // SHA-1
        t.prop = 'da39a3ee5e6b4b0d3255bfef95601890afd80709';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        // SHA-256
        t.prop = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        // SHA-512
        t.prop = 'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        // RIPEMD-160
        t.prop = '9c1185a5c5e9fc54612808977ee8f548b2258d31';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        // Snefru
        t.prop = '8617f366566a011837f4fb4ba5bedea2b892f3ed8b894023d16ae344b2be5881';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        // GHOST
        t.prop = 'ce85b99cc46752fffee35cab9a7b0278abb4c2d2055cff685af4912c49490f8d';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        //Whirlpool
        t.prop = '19fa61d75522a4669b44e39c1d2e1726c530232130d407f89afee0964997f7a73e83be698b288febcf88e3e03c4f0757ea8964e59b63d93708b138cc42a66eb3';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        // test Upper Case Letters
        t.prop = t.prop.ToUpperCase();
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        // no Hash
        t.prop = 'HalloWelt';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('IsUUID check', async () => {
        class IsUUIDCheck {
            @IsUUID('Invalid')
            prop: string;
        }
        const t = new IsUUIDCheck();
        t.prop = '3e019b17-e95e-40fc-9606-4041efcb2684';
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = '{3e019b17-e95e-40fc-9606-4041efcb2684}';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 'no uuid';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('IsURL check', async () => {
        class IsURLCheck {
            @IsUrl('Invalid')
            prop: string;
        }

        const t = new IsURLCheck();
        for (const url of [
            'http://foobar.com', 'http://foo.bar.com/', 'http://qux.com',
            'http://en.wikipedia.org/wiki/Procter_&_Gamble',
            'http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&docid=nIv5rk2GyP3hXM&tbnid=isiOkMe3nCtexM:&ved=0CAUQjRw&url=http%3A%2F%2Fanimalcrossing.wikia.com%2Fwiki%2FLion&ei=ygZXU_2fGKbMsQTf4YLgAQ&bvm=bv.65177938,d.aWc&psig=AFQjCNEpBfKnal9kU7Zu4n7RnEt2nerN4g&ust=1398298682009707',
            'https://stackoverflow.com/',
            'oh.my', 'google.co.uk', 'test-domain.MUSEUM',
            'http://thingiverse.com/download:1894343',
            'https://medium.com/@techytimo'
        ]) {
            t.prop = url;
            let res = await ClassValidator.Validate(t);
            assert.lengthOf(res, 0);
        }

        for (const url of [
            'aaaa', 'https://w'
        ]) {
            t.prop = url;
            let res = await ClassValidator.Validate(t);
            assert.lengthOf(res, 1);
            assert.equal(res.ElementAt(0).Message, 'Invalid');
        }
    });
    it('IsMongoId check', async () => {
        class IsMongoIdCheck {
            @IsMongoId('Invalid')
            prop: string;
        }
        const t = new IsMongoIdCheck();

        t.prop = '5dfaa9da5fca3be0982a4301';
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 'Hallo';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('MinDate check', async () => {
        class MinDateCheck {
            @MinDate(new DateTime('UTC', 2019,1,1,0,0,0, 0), 'Invalid')
            prop: DateTime;
        }
        const t = new MinDateCheck();
        t.prop = new DateTime('UTC', 2019,1,1,2,0,0, 0);
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = new DateTime('UTC', 2019,1,1,0,0,0, 0);
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = new DateTime('UTC', 2018,12,31,23,59,59, 999);
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('MaxDate check', async () => {
        class MaxDateCheck {
            @MaxDate(new DateTime('UTC', 2019,1,1,0,0,0, 0), 'Invalid')
            prop: DateTime;
        }
        const t = new MaxDateCheck();
        t.prop = new DateTime('UTC', 2018,12,31,23,59,59, 999);
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = new DateTime('UTC', 2019,1,1,0,0,0, 0);
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = new DateTime('UTC', 2019,1,1,0,0,0, 1);
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('IsAlpha check', async () => {
        class IsAlphaCheck {
            @IsAlpha('Invalid')
            prop: string;
        }
        const t = new IsAlphaCheck();
        t.prop = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('IsAlphanumeric check', async () => {
        class IsAlphanumericCheck {
            @IsAlphanumeric('Invalid')
            prop: string;
        }
        const t = new IsAlphanumericCheck();
        t.prop = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('IsAscii check', async () => {
        class IsAsciiCheck {
            @IsAscii('Invalid')
            prop: string;
        }
        const t = new IsAsciiCheck();

        let asciiExample = '';
        let nonAsciiExample = '';
        for (let i = 0; i <= 127; i++) {
            asciiExample += String.fromCharCode(i);
        }
        for (let i = 128; i <= 255; i++) {
            nonAsciiExample += String.fromCharCode(i);
        }

        t.prop = asciiExample;
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = nonAsciiExample;
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('IsBase64 check',async () => {
        class IsBase64Check {
            @IsBase64('Invalid')
            prop: string;
        }
        const t = new IsBase64Check();

        t.prop = 'aGVsbG86d29ybGQhPyQqJigpJy09QH4=';
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 'hello:world!?$*&()\'-=@~';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('IsHexColor check', async () => {
        class IsHexColorCheck {
            @IsHexColor('Invalid')
            prop: string;
        }
        const t = new IsHexColorCheck();

        t.prop = '#ffffff';
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = '#ffffffff';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = '#ffffffffff';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('IsHexadecimal check', async () => {
        class IsHexadecimalCheck {
            @IsHexadecimal('Invalid')
            prop: string;
        }
        const t = new IsHexadecimalCheck();

        t.prop = 'AF050505';
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 'AF050505'.ToLowerCase();
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = '0xAF050505';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = '#AF050505';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 'xxxxxxxx';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('IsByteLength check', async () => {
        class IsByteLengthCheck {
            @IsByteLength(4, 'Invalid')
            prop: string;
        }
        const t = new IsByteLengthCheck();

        t.prop = '1234';
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = '12345';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('IsMacAddress check', async () => {
        class IsMacAddressCheck {
            @IsMacAddress('Invalid')
            prop: string;
        }
        const t = new IsMacAddressCheck();

        t.prop = '3D-F2-C9-A6-B3-4F';
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = '3D:F2:C9:A6:B3:4F';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = '3D:F2:C9:A6:B3:4F:';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('IsPort check', async () => {
        class IsPortCheck {
            @IsPort('Invalid')
            prop: number | string;
        }
        const t = new IsPortCheck();

        t.prop = 1;
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 65536;
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 65537;
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');

        t.prop = 0;
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');

        t.prop = '1';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = '65536';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = '65537';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');

        t.prop = '0';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');

        t.prop = 'x';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('IsIp check', async () => {
        class IsIpCheck {
            @IsIp('Invalid')
            prop: string;
        }
        const t = new IsIpCheck();

        t.prop = '192.168.1.1';
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = '000.0000.00.00';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');

        t.prop = '912.456.123.123';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('IsJson check', async () => {
        class IsJsonCheck {
            @IsJSON('Invalid')
            prop: string;
        }
        const t = new IsJsonCheck();

        t.prop = JSON.stringify({Hello:'World'});
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 'xxxx';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('IsJWT check', async () => {
        class IsJWTCheck {
            @IsJWT('Invalid')
            prop: string;
        }
        const t = new IsJWTCheck();

        t.prop = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTYyMzkwMjJ9.tbDepxpstvGdW8TC3G8zg4B6rUYAOvfzdceoH48wgRQ';
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 'Hello';
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('CustomValidator check', async () => {
        class CustomValidatorCheck {
            @CustomValidation(v => v === 5, 'Invalid')
            prop: number;
        }
        const t = new CustomValidatorCheck();

        t.prop = 5;
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop = 6;
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('validate Array with SubObjects', async () => {
        class ArrayWithSubObjectsSub {
            @CustomValidation(v => v === 'a', 'Invalid')
            prop: string;
        }
        class ArrayWithSubObjectsMain {
            sub: ArrayWithSubObjectsSub;
        }
        class ArrayWithSubObjects {
            prop: ArrayWithSubObjectsMain[];
        }
        const t = new ArrayWithSubObjects();
        const main1 = new ArrayWithSubObjectsMain();
        const main2 = new ArrayWithSubObjectsMain();
        const main3 = new ArrayWithSubObjectsMain();
        const sub1 = new ArrayWithSubObjectsSub();
        const sub2 = new ArrayWithSubObjectsSub();
        const sub3 = new ArrayWithSubObjectsSub();
        sub1.prop = 'a';
        sub2.prop = 'a';
        sub3.prop = 'x';
        main1.sub = sub1;
        main2.sub = sub2;
        main3.sub = sub3;

        t.prop = [main1, main2];
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop.Add(main3);
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
    it('ValidateClass check', async () => {
        @ValidateClass<ValidateClassCheck>((i, v) => {
            return v.IsEmail(i.prop1) && v.Max(i.prop2, 20);
        }, 'Invalid')
        class ValidateClassCheck {
            prop1: string;
            prop2: number;
        }
        const t = new ValidateClassCheck();
        t.prop1 = 'a@b.de';
        t.prop2 = 9;
        let res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 0);

        t.prop1 = 'a@b.de';
        t.prop2 = 50;
        res = await ClassValidator.Validate(t);
        assert.lengthOf(res, 1);
        assert.equal(res.ElementAt(0).Message, 'Invalid');
    });
});
