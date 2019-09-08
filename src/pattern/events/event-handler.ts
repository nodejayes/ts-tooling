import {each} from 'async';
type EventCallback<T, K> = (sender: T, args: K) => void;

/**
 * represent a Event Handler
 */
export class EventHandler<T, K> {
    private _callbacks: EventCallback<T, K>[] = [];
    private _instance: T;

    /**
     * create a new Event Handler for an Instance
     * @param instance
     */
    constructor(instance: T) {
        this._instance = instance;
    }

    /**
     * invoke the Event on the Handler
     * @param args
     * @constructor
     */
    Invoke(args: K): void {
        each(this._callbacks, (event) => {
            setTimeout(() => {
                event(this._instance, args);
            }, 1);
        });
    }

    /**
     * do something when the Handler is invoked
     * @param cb
     * @constructor
     */
    Subscribe(cb: EventCallback<T, K>): void {
        this._callbacks.push(cb);
    }

    /**
     * unsubscribe all callbacks
     * @constructor
     */
    Unsubscribe() {
        this._callbacks = [];
    }
}
