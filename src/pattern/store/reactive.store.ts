import {BehaviorSubject} from 'rxjs';
import {Dictionary} from '../../complex/dictionary';
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
        set(<any>this._core, key, newValue);
        if (behavior) {
            behavior.next(get(this._core, key));
        } else {
            console.warn(`no behavior detected!`);
        }
    }

    private parseSelectorAccess<K>(selector: (d: T) => K): string {
        let tmp = selector.toString();
        tmp = tmp.Split('{').ElementAt(1);
        tmp = tmp.Split('}').ElementAt(0);
        if (tmp.Contains(';return ')) {
            // coverage stuff found
            tmp = 'return ' + tmp.Split(';return')
                .ElementAt(1)
        }
        const k = tmp.Trim(' ')
            .Split('return ')
            .Reduce((target, e) => target.Concat(e), '')
            .Split(';')
            .Reduce((target, e) => target.Concat(e), '')
            .Split('.');
        const key = k.Reduce((target, e) => target.Concat(e, '.'), '');
        const firstIdx = key.IndexOf('.');
        return key.Substring(firstIdx.Add(1), key.length.Subtract(firstIdx));
    }
}
