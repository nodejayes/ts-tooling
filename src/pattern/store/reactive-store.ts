import {BehaviorSubject} from 'rxjs';
import {Dictionary} from '../../collections/dictionary';
import {Chars} from '../../primitive/chars';
import {ZERO_INT} from '../../ts-tooling';
import {set, get} from 'lodash';

/**
 * a Reactive Store to save States and listen to Changes
 */
export class ReactiveStore<T> {
    private _core: T = null;
    private _behaviorSubjects = new Dictionary<BehaviorSubject<any>>();

    /**
     * create a new Store with a Initial State
     * @param initialState
     */
    constructor(initialState: T) {
        this._core = initialState;
    }

    /**
     * listen to a specific Property or a complete State change
     * @param selector
     */
    Listen<K>(selector: (d: T) => K): BehaviorSubject<K> {
        const key = this.parseSelectorAccess(selector);
        if (this._behaviorSubjects.ContainsKey(key)) {
            return this._behaviorSubjects.TryGetValue(key);
        }
        const subject = new BehaviorSubject<K>(selector(<T>this._core));
        this._behaviorSubjects.Add(key, subject);
        return subject;
    }

    /**
     * mutate a specific Property or a complete State
     * @param selector
     * @param mutation
     */
    Mutate<K>(selector: (d: T) => K, mutation: (s: K) => K): void {
        const key = this.parseSelectorAccess(selector);
        const behavior = this._behaviorSubjects.TryGetValue(key);
        const currentValue = selector(this._core);
        const newValue = mutation(currentValue);
        this._core = {
            ...this._core,
        };
        set(<any>this._core, key.Value, newValue);
        if (behavior) {
            behavior.next(get(this._core, key.Value));
        }
    }

    private parseSelectorAccess<K>(selector: (d: T) => K): Chars {
        let tmp = new Chars(selector.toString());
        tmp = tmp.Split('{'.ToChars()).ElementAt((1).ToInteger());
        tmp = tmp.Split('}'.ToChars()).ElementAt(ZERO_INT);
        const k = tmp.Trim(' '.ToChars())
            .Split('return '.ToChars())
            .Reduce((target, e) => target.Concat(e), new Chars())
            .Split(';'.ToChars())
            .Reduce((target, e) => target.Concat(e), new Chars())
            .Split('.'.ToChars());
        const key = k.Reduce((target, e) => target.Concat(e, '.'.ToChars()), new Chars());
        const firstIdx = key.IndexOf('.'.ToChars());
        return key.Substring(firstIdx.Add((1).ToInteger()), key.Length.Subtract(firstIdx));
    }
}