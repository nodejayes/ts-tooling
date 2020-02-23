import 'mocha';
import {assert} from 'chai';
import {TestDataGenerator} from '../../ts-tooling';
const sizeof = require('object-sizeof');

describe('Test Data Generator Tests', () => {
    it('generate Test Object 512 Byte', () => {
        const tmp = TestDataGenerator.Object(512, 512);
        assert.isAbove(sizeof(tmp), 511);
    });
    it('manipulate key and value size', () => {
        for (let i = 0; i < 100; i++) {
            const tmp = TestDataGenerator.Object(1024, 512, 200, 150);
            for (const key of Object.keys(tmp)) {
                assert.isBelow(key.length, 201);
                assert.isBelow(tmp[key].length, 151);
            }
        }
    });
});
