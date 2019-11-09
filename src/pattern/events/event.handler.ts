import {Subject, Subscription} from 'rxjs';
import {Dictionary} from '../../complex/dictionary';
import {StringFactory} from '../../utils/string.factory';

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
    Subscribe(key: string, cb: (d: T) => void) {
        this._subscriptions.Add(key, this._stream.subscribe(cb));
    }

    /**
     * unsubscribe all callbacks
     * @param key the key to identify the Subscription to unsubscribe
     * @constructor
     */
    Unsubscribe(key?: string) {
        if (StringFactory.IsNullOrEmpty(key)) {
            for (const k of this._subscriptions.Keys()) {
                this.unsubscribeByKey(k);
            }
        } else {
            this.unsubscribeByKey(key);
        }
    }

    private unsubscribeByKey(key: string): void {
        const sub = this._subscriptions.TryGetValue(key);
        sub.unsubscribe();
        this._subscriptions.Remove(key);
    }
}
