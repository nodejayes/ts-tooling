const {assert} = require('chai');
const {describe, it} = require('mocha');
const {BackgroundWorker} = require('./index');

describe('Type NodeWorker Export Tests', () => {
    it('BackgroundWorker', () => {
        assert.isDefined(BackgroundWorker);
    });
});
