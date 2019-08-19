import {assert} from 'chai';
import {Dictionary, Integer, Chars} from "../../src/index";

const DEMO_DATA = {'a': 1, 'b': 2, 'c': 3};
const EMPTY = new Dictionary();
const FILLED = new Dictionary(DEMO_DATA);

describe('Dictionary Tests', () => {
    it('can create a empty Dictionary', () => {
        assert.deepEqual(EMPTY.GetObject(), {});
    });

    it('can create a filled Dictionary', () => {
        assert.deepEqual(FILLED.GetObject(), DEMO_DATA);
    });

    it('can get Count', () => {
        assert.equal(FILLED.Count.Value, 3);
    });

    it('can get Keys', () => {
        assert.deepEqual(FILLED.Keys.ElementAt(new Integer(0)).Value, 'a');
        assert.deepEqual(FILLED.Keys.ElementAt(new Integer(1)).Value, 'b');
        assert.deepEqual(FILLED.Keys.ElementAt(new Integer(2)).Value, 'c');
    });

    it('can get Values', () => {
        assert.deepEqual(FILLED.Values, [1, 2, 3]);
    });

    it('can Add Item into Dictionary', () => {
        assert.deepEqual(EMPTY.Add(new Chars('a'), 1).GetObject(), {'a': 1});
    });

    it('can Remove Item from Dictionary', () => {
        assert.deepEqual(FILLED.Remove(new Chars('a')).GetObject(), {'b': 2, 'c': 3})
    });

    it('can clear Dictionary', () => {
        assert.deepEqual(EMPTY.Clear().GetObject(), {});
    });

    it('can check if Key Contains', () => {
        assert.isTrue(FILLED.ContainsKey(new Chars('b')));
        assert.isFalse(FILLED.ContainsKey(new Chars('not in')));
    });

    it('can check if a Value Contains', () => {
        assert.isTrue(FILLED.ContainsValue(3));
        assert.isFalse(FILLED.ContainsValue(300));
    });

    it('can get a Value out of the Dictionary', () => {
        assert.equal(FILLED.TryGetValue(new Chars('b')), 2);
        assert.isNull(FILLED.TryGetValue(new Chars('z')));
    });
});
