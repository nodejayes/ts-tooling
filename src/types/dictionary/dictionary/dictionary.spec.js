const {Dictionary} = require('./dictionary');
const {describe, it} = require('mocha');
const {assert} = require('chai');

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
        assert.equal(FILLED.Count, 3);
    });

    it('can get Keys', () => {
        assert.deepEqual(FILLED.Keys.ElementAt(0), 'a');
        assert.deepEqual(FILLED.Keys.ElementAt(1), 'b');
        assert.deepEqual(FILLED.Keys.ElementAt(2), 'c');
    });

    it('can get Values', () => {
        assert.deepEqual(FILLED.Values, [1, 2, 3]);
    });

    it('can Add Item into Dictionary', () => {
        assert.deepEqual(EMPTY.Add('a', 1).GetObject(), {'a': 1});
    });

    it('can Remove Item from Dictionary', () => {
        assert.deepEqual(FILLED.Remove('a').GetObject(), {'b': 2, 'c': 3})
    });

    it('can clear Dictionary', () => {
        assert.deepEqual(EMPTY.Clear().GetObject(), {});
    });

    it('can check if Key Contains', () => {
        assert.isTrue(FILLED.ContainsKey('b'));
        assert.isFalse(FILLED.ContainsKey('not in'));
    });

    it('can check if a Value Contains', () => {
        assert.isTrue(FILLED.ContainsValue(3));
        assert.isFalse(FILLED.ContainsValue(300));
    });

    it('[Method]: TryGetValue', () => {
        let res;
        assert.isTrue(FILLED.TryGetValue('b', (v) => res = v));
        assert.equal(res, 2);
        assert.isFalse(FILLED.TryGetValue('z', (v) => res = v));
        assert.isNull(res);
    });

    it('[Method]: GetValue', () => {
        assert.equal(FILLED.GetValue('b'), 2);
        assert.isNull(FILLED.GetValue('z'));
    });

    it('can find a Value by Filter', () => {
        const d = new Dictionary({
            Hello: 'World',
            This: 'is',
            A: 'Dictionary',
        });
        assert.equal(d.Find(i => i.Equals('is')), 'is');
    });

    it('can find multiple Values by a Filter', () => {
        const d = new Dictionary({
            Hello: 'World',
            Hello2: 'World',
            Hello3: 'World',
            This: 'is',
            A: 'Dictionary',
        });
        assert.equal(d.FindAll(i => i.Equals('World')).Count(), 3);
    });
});
