import {assert} from 'chai';
import 'mocha';
const tst = require('../../lib/ts-tooling');

describe('Object Extension Bundle Tests', () => {
    it('detect Circular References', () => {
        const obj1 = {hello:'world'};
        const obj2 = {test:'me'};
        const combined = {t1:obj1,t2:obj2,t3:null};
        const obj3 = combined;
        combined.t3 = obj3;
        assert.isTrue(tst.ObjectFactory.IsCircular(combined));
        assert.isFalse(tst.ObjectFactory.IsCircular(obj1));
    });
    it('show Circular References Info', () => {
        const obj1 = {hello:'world',c:null};
        const obj2 = {test:'me',c:obj1};
        obj1.c = obj2;
        const combined = {t1:obj1,t2:obj2,t3:null};
        const obj3 = combined;
        combined.t3 = obj3;
        assert.deepEqual(tst.ObjectFactory.GetCircular(combined), ['c', 'c', 't1']);
    });
});
