const {assert} = require('chai');
const {ParseString} = require('./datetime');

describe('Core DateTime Tests', () => {
    describe('[Method]: ParseString', () => {
        it('parse ISO Date String', () => {
            assert.deepEqual(ParseString('1.01:01:01 001'), {
                days: 1,
                hours: 1,
                minutes: 1,
                seconds: 1,
                milliseconds: 1,
            })
        });
    });
});
