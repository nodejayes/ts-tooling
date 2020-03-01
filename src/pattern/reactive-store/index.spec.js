const {assert} = require('chai');
const {describe, it} = require('mocha');
const {ReactiveStore, SafeBehaviorSubject} = require('./index');

describe('Type ReactiveStore Export Tests', () => {
    it('ReactiveStore', () => {
        assert.isDefined(ReactiveStore);
    });
    it('SafeBehaviorSubject', () => {
        assert.isDefined(SafeBehaviorSubject);
    });
});
