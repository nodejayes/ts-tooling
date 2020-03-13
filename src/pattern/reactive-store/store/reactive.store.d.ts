import {BehaviorSubject} from 'rxjs';

/**
 * extends the BehaviorSubject and prevent the next Method to execute
 *
 * @category Store
 */
export class SafeBehaviorSubject<T> extends BehaviorSubject<T> {
    /**
     * @deprecated please use state.Mutation() to change the State Value
     */
    next(value: T): void;
    /**
     * returns a copy of the current Value
     *
     * @returns the copy of the current Value
     */
    snapshot(): T;
}

/**
 * a Reactive Store to save States and listen to Changes
 *
 * @category Store
 */
export class ReactiveStore<T> {
    /**
     * create a new Store with a Initial State
     *
     * @param initialState the default State Value
     */
    constructor(initialState: T);

    /**
     * listen to a specific Property or a complete State change
     * you can use the SafeBehaviorSubject same as a BehaviorSubject but follow Functions has no effect
     * next, complete, error
     *
     * @param selector select the Part of the State to Listen
     *
     * @example
     * // write the data Property of the State into the console
     * store.Listen(s => s.data).subscribe(d => console.info(d));
     */
    Listen<K>(selector: (d: T) => K): SafeBehaviorSubject<K>;

    /**
     * mutate a specific Property or a complete State
     * @param selector select the Part of the State to Mutate
     * @param mutation define how to change the State
     *
     * @example
     * // simple Example to set the State
     * store.Mutate(s => s.data, () => newData);
     * // make a complex Mutation
     * store.Mutate(s => s, old => {
     *     old.data = [];
     *     old.loading = true;
     *     return old;
     * });
     */
    Mutate<K>(selector: (d: T) => K, mutation: (s: K) => K): void;
}
