import {assert} from 'chai';
import {EventHandler} from "../../../src/ts-tooling";

describe('EventHandler Tests', () => {
    it('can register on class', (done) => {
        class TestEventHandler {
            name = 'TestClass';
            ev = new EventHandler<TestEventHandler, string>(this);
        }
        const t = new TestEventHandler();
        t.ev.Subscribe((sender, args) => {
            assert.equal(sender.name, t.name);
            assert.equal(args, 'data');
            done();
        });
        t.ev.Invoke('data');
    });

    it('unsubscribes', (done) => {
        class TestEventHandler {
            name = 'TestClass';
            ev = new EventHandler<TestEventHandler, string>(this);
        }
        const t = new TestEventHandler();
        t.ev.Subscribe((sender, args) => {
            assert.fail();
        });
        t.ev.Unsubscribe();
        t.ev.Invoke('data');
        setTimeout(() => done(), 200);
    });
});
