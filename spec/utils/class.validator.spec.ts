import {assert} from 'chai';
import 'mocha';
import {IsDefined, IsEmail, Max, Min} from 'class-validator';
import {ClassValidator} from '../../src/ts-tooling.node';

class Test {
    @IsDefined()
    Name: string;

    @Min(0)
    @Max(150)
    Age: number;

    @IsEmail()
    Email: string;
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
});
