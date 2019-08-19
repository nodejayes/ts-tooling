import {assert} from 'chai';
import {EventHandler} from "../../../src/pattern/events/eventhandler";

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
});
