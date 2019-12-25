import 'mocha';
import {assert} from 'chai';
import {StringFactory} from "../../src/ts-tooling";

describe('String Factory Tests', () => {
    it('generate Random String', () => {
        const tmp = StringFactory.RandomAlphaString(50);
        assert.lengthOf(tmp, 50);
        assert.isTrue(tmp.IsAlpha());
    });
});
