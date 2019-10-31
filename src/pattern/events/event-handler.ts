import {Subject, Subscription} from 'rxjs';
import {Dictionary} from '../../collections/dictionary';
import {Chars} from '../../primitive/chars';

/**
 * represent a Event Handler
 */
export class EventHandler<T> {
    private _stream = new Subject<T>();
    private _subscriptions: Dictionary<Subscription> = new Dictionary<Subscription>();

    /**
     * invoke the Event on the Handler
     * @param args
     * @constructor
     */
    Invoke(args: T): void {
        this._stream.next(args);
    }

    /**
     * do something when the Handler is invoked
     * @param key the key to identify the subscription
     * @param cb
     * @returns the Idx of the Subscription
     * @constructor
     */
    Subscribe(key: Chars, cb: (d: T) => void) {
        this._subscriptions.Add(key, this._stream.subscribe(cb));
    }

    /**
     * unsubscribe all callbacks
     * @param key the key to identify the Subscription to unsubscribe
     * @constructor
     */
    Unsubscribe(key?: Chars) {
        if (!key || key.IsEmpty()) {
            for (const k of this._subscriptions.Keys.ToArray()) {
                this.unsubscribeByKey(k);
            }
        } else {
            this.unsubscribeByKey(key);
        }
    }

    private unsubscribeByKey(key: Chars): void {
        const sub = this._subscriptions.TryGetValue(key);
        sub.unsubscribe();
        this._subscriptions.Remove(key);
    }
}
