const {EventHandler} = require('./event.handler');
const {describe, it} = require('mocha');
const {assert} = require('chai');

describe('EventHandler Tests', () => {
    it('can subscribe', (done) => {
        const eventHandler = new EventHandler();
        eventHandler.Subscribe('s1', (args) => {
            assert.equal(args, 'data');
            done();
        });
        eventHandler.Invoke('data');
    });

    it('unsubscribes', (done) => {
        const eventHandler = new EventHandler();
        eventHandler.Subscribe('s1', (args) => {
            assert.fail();
        });
        eventHandler.Unsubscribe('s1');
        eventHandler.Invoke('data');
        setTimeout(() => done(), 50);
    });

    it('unsubscribe only once', (done) => {
        const eventHandler = new EventHandler();
        eventHandler.Subscribe('s1', (args) => {
            assert.fail();
        });
        eventHandler.Subscribe('s2', (args) => {
            assert.equal(args, 'data');
            setTimeout(() => done(), 50);
        });
        eventHandler.Unsubscribe('s1');
        eventHandler.Invoke('data');
    });

    it('unsubscribe all', (done) => {
        const eventHandler = new EventHandler();
        eventHandler.Subscribe('s1', (args) => {
            assert.fail();
        });
        eventHandler.Subscribe('s2', (args) => {
            assert.fail();
        });
        eventHandler.Unsubscribe();
        eventHandler.Invoke('data');
        setTimeout(() => done(), 50);
    });
});
