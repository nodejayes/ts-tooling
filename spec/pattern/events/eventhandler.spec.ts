import {assert} from 'chai';
import {EventHandler} from '../../../src/ts-tooling';
import 'mocha';

describe('EventHandler Tests', () => {
    it('can subscribe', (done) => {
        const eventHandler = new EventHandler<string>();
        eventHandler.Subscribe('s1'.ToChars(), (args) => {
            assert.equal(args, 'data');
            done();
        });
        eventHandler.Invoke('data');
    });

    it('unsubscribes', (done) => {
        const eventHandler = new EventHandler<string>();
        eventHandler.Subscribe('s1'.ToChars(), (args) => {
            assert.fail();
        });
        eventHandler.Unsubscribe('s1'.ToChars());
        eventHandler.Invoke('data');
        setTimeout(() => done(), 200);
    });

    it('unsubscribe only once', (done) => {
        const eventHandler = new EventHandler<string>();
        eventHandler.Subscribe('s1'.ToChars(), (args) => {
            assert.fail();
        });
        eventHandler.Subscribe('s2'.ToChars(), (args) => {
            assert.equal(args, 'data');
            setTimeout(() => done(), 200);
        });
        eventHandler.Unsubscribe('s1'.ToChars());
        eventHandler.Invoke('data');
    });

    it('unsubscribe all', (done) => {
        const eventHandler = new EventHandler<string>();
        eventHandler.Subscribe('s1'.ToChars(), (args) => {
            assert.fail();
        });
        eventHandler.Subscribe('s2'.ToChars(), (args) => {
            assert.fail();
        });
        eventHandler.Unsubscribe();
        eventHandler.Invoke('data');
        setTimeout(() => done(), 200);
    });
});
