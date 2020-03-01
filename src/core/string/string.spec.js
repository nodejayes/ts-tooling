const {assert} = require('chai');
const {describe, it} = require('mocha');
const {EscapeRegExp, Unescape, Escape, Words, TrimChar} = require('./string');

describe('Core String Tests', () => {
    describe('[Method]: EscapeRegExp', () => {
        it('escape RegEx', () => {
            assert.equal(EscapeRegExp('[test](https://google.com/)'), '\\[test\\]\\(https://google\\.com/\\)');
        });
    });
    describe('[Method]: Escape', () => {
        it('escape HTML', () => {
            assert.equal(Escape('fred, barney, & pebbles'), 'fred, barney, &amp; pebbles');
        });
    });
    describe('[Method]: Unescape', () => {
        it('unescape HTML', () => {
            assert.equal(Unescape('fred, barney, pebbles'), 'fred, barney, pebbles');
        });
    });
    describe('[Method]: Words', () => {
        it('split a sentence', () => {
            assert.deepEqual(Words('hello is a word of a sentence'), [
                'hello', 'is', 'a', 'word', 'of', 'a', 'sentence'
            ]);
        });
    });
    describe('[Method]: TrimChar', () => {
        it('remove underscores', () => {
            assert.equal(TrimChar('___Test___','_'), 'Test___');
            assert.equal(TrimChar('___Test___','_', 1), '___Test');
            assert.equal(TrimChar('___Test___','_', 2), 'Test');
        });
    });
});
