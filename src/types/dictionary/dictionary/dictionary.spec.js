const {Dictionary} = require('./dictionary');
const {assert} = require("chai");

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
        assert.deepEqual(FILLED.Keys().ElementAt(0), 'a');
        assert.deepEqual(FILLED.Keys().ElementAt(1), 'b');
        assert.deepEqual(FILLED.Keys().ElementAt(2), 'c');
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

    it('can get a Value out of the Dictionary', () => {
        assert.equal(FILLED.TryGetValue('b'), 2);
        assert.isNull(FILLED.TryGetValue('z'));
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
