import {assert} from 'chai';
import 'mocha';
import '../../src/ts-tooling';

describe('Array Extension Tests', () => {
    it('create new Array with Extension', () => {
        const test1 = [];
        const test2 = new Array<number>();
        assert.isFunction(test2.ElementAt);
    });
});
