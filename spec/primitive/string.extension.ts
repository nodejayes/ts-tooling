import '../../src/ts-tooling'
import {assert} from 'chai';
import 'mocha';

describe('String Extension Tests', () => {
    it('get Character at Position (CharAt)', () => {
        assert.equal('Hello'.CharAt(0), 'H');
        assert.equal('Hello'.CharAt(4), 'o');
        assert.throws(() => {
            'Hello'.CharAt(5)
        });
    });
});