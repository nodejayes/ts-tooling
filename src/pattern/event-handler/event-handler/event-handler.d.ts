/**
 * lets create a Event Handler you can subscribe or unsubscribe
 *
 * @category Pattern
 */
export class EventHandler<T> {
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
    Invoke(args: T): void;

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
    Subscribe(key: string, cb: (d: T) => void): void;

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
    Unsubscribe(key?: string): void;
}
