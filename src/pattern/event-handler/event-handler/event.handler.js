const {Subject} = require('rxjs');
const {Dictionary} = require('../../../types/dictionary/dictionary/dictionary');
const {StringFactory} = require('../../../types/string/factory/string.factory');

class EventHandler {
    constructor() {
        this._stream = new Subject();
        this._subscriptions = new Dictionary();
    }

    Invoke(args) {
        this._stream.next(args);
    }

    Subscribe(key, cb) {
        this._subscriptions.Add(key, this._stream.subscribe(cb));
    }

    Unsubscribe(key) {
        if (StringFactory.IsNullOrEmpty(key)) {
            for (const k of this._subscriptions.Keys()) {
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
