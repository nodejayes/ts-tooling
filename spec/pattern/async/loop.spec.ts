import 'mocha';
import {assert} from 'chai';
import {asyncFor} from '../../../src/ts-tooling';

describe('asyncFor Loop Tests', () => {
    it('execute for loop as well', async () => {
        const test = [1,2,3,4,5,6,7,8,9,10];
        await asyncFor(test, async (el, idx, target) => {
            target[idx] += el;
        });
        assert.deepEqual(test, [2,4,6,8,10,12,14,16,18,20]);
    });
    it('is non blocking', (done) => {
        const test = [];
        let counter = 0;
        let calls = 0;
        for (let i = 0; i < 10; i++) {
            test.Add(1);
        }
        asyncFor(test, async (el, idx, target) => {
            calls++;
            // await new Promise(resolve => setTimeout(resolve, 30));
            for (let i = 0; i < 1000000; i++) {
                const z = 1+1;
            }
            target[idx] += el;
            if (calls.IsAbove(4)) {
                assert.equal(counter, 1);
            }
        }).then(() => {
            done();
        });
        setTimeout(() => {
            counter++;
        }, 150);
    });
});
