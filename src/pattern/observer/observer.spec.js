const {createObserver} = require('./observer');
const {describe, it} = require('mocha');
const {assert} = require('chai');

describe('Observer Tests', () => {
    let obs1 = null;
    let unsub = null;
    it('can create a Observer', () => {
        obs1 = createObserver();
        assert.isDefined(obs1);
    });
    it('can subscribe and publish', (done) => {
        unsub = obs1.subscribe(v => {
            assert.equal(v, 1);
            unsub();
            done();
        });
        obs1.publish(1);
    });
    it('can unsubscribe and not publish anymore', (done) => {
        obs1.subscribe(() => {
            assert.fail('subscribtion was triggered');
        })();
        obs1.publish(1);
        setTimeout(() => {
            done();
        }, 50);
    });
});
