const {Subject} = require('rxjs');
const {Dictionary} = require('../../../types/dictionary/dictionary/dictionary');
const {StringFactory} = require('../../../types/string/factory/string.factory');

/**
 * lets create a Event Handler you can subscribe or unsubscribe
 *
 * @memberof module:pattern/event-handler
 */
class EventHandler {
    constructor() {
        this._stream = new Subject();
        this._subscriptions = new Dictionary();
    }

    /**
     * invoke the Event on the Handler
     *
     * @param args {any}
     *
     * @example
     * const handler = new EventHandler<number>();
     * // sends 1 to every Subscriber
     * handler.Invoke(1);
     */
    Invoke(args) {
        this._stream.next(args);
    }

    /**
     * do something when the Handler is invoked
     *
     * @param key {string} the key to identify the subscription
     * @param cb {function}
     *
     * @example
     * const handler = new EventHandler<number>();
     * handler.Subscribe('X', (i) => {
     *     // get the Number that was send by a Invoke call (2)
     * });
     * handler.Invoke(2);
     */
    Subscribe(key, cb) {
        this._subscriptions.Add(key, this._stream.subscribe(cb));
    }

    /**
     * unsubscribe all callbacks
     *
     * @param key {string} the key to identify the Subscription to unsubscribe
     *
     * @example
     * const handler = new EventHandler<number>();
     * handler.Subscribe('X', (i) => {
     *      // nothing happen here while the Handler was unsubscribe
     * });
     * // unsubscribe only the X Subscriber
     * handler.Unsubscribe('X');
     * // unsubscribe all Subscriber
     * handler.Unsubscribe();
     * handler.Invoke(2);
     */
    Unsubscribe(key) {
        if (StringFactory.IsNullOrEmpty(key)) {
            for (const k of this._subscriptions.Keys) {
                this._unsubscribeByKey(k);
            }
        } else {
            this._unsubscribeByKey(key);
        }
    }

    _unsubscribeByKey(key) {
        const sub = this._subscriptions.TryGetValue(key);
        sub.unsubscribe();
        this._subscriptions.Remove(key);
    }
}

module.exports = {EventHandler};
