import {Subject, Subscription} from 'rxjs';
import {Dictionary} from '../../types/dictionary/dictionary';
import {StringFactory} from '../../types/string/string.factory';

/**
 * lets create a Event Handler you can subscribe or unsubscribe
 */
export class EventHandler<T> {
    private _stream = new Subject<T>();
    private _subscriptions: Dictionary<Subscription> = new Dictionary<Subscription>();

    /**
     * invoke the Event on the Handler
     * @param args
     *
     * ```typescript
     * const handler = new EventHandler<number>();
     * // sends 1 to every Subscriber
     * handler.Invoke(1);
     * ```
     */
    Invoke(args: T): void {
        this._stream.next(args);
    }

    /**
     * do something when the Handler is invoked
     * @param key the key to identify the subscription
     * @param cb
     * @returns the Idx of the Subscription
     *
     * ```typescript
     * const handler = new EventHandler<number>();
     * handler.Subscribe('X', (i) => {
     *     // get the Number that was send by a Invoke call (2)
     * });
     * handler.Invoke(2);
     * ```
     */
    Subscribe(key: string, cb: (d: T) => void) {
        this._subscriptions.Add(key, this._stream.subscribe(cb));
    }

    /**
     * unsubscribe all callbacks
     * @param key the key to identify the Subscription to unsubscribe
     *
     * ```typescript
     * const handler = new EventHandler<number>();
     * handler.Subscribe('X', (i) => {
     *      // nothing happen here while the Handler was unsubscribe
     * });
     * // unsubscribe only the X Subscriber
     * handler.Unsubscribe('X');
     * // unsubscribe all Subscriber
     * handler.Unsubscribe();
     * handler.Invoke(2);
     * ```
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
