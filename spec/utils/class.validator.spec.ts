import {assert} from 'chai';
import 'mocha';
import {ClassValidator, IsDefined, IsEmail, Max, Min} from '../../src/ts-tooling';

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
});
