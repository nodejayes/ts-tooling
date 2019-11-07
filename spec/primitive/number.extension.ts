import '../../src/primitive';
import {assert} from 'chai';
import 'mocha';

describe('Number Extension Test', () => {
    it('can create Random Integers', () => {
        let counter = 0;
        while (counter < 100) {
            const n = Number.Random(0, 10);
            assert.isTrue(n >= 0 && n <= 10);
            counter++;
        }
    });
});