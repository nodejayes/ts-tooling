import {assert} from 'chai';
import 'mocha';
import {Byte} from '../../ts-tooling';

describe('Byte Tests', () => {
    it('create new Byte from Numbers', () => {
        assert.equal(new Byte(0).Value, 0);
        assert.equal(new Byte(1).Value, 1);
        assert.equal(new Byte(255).Value, 255);
        assert.equal(new Byte(256).Value, 255);
        assert.equal(new Byte(-1).Value, 0);
    });
});
