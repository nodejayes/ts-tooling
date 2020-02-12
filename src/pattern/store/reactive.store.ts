import {BehaviorSubject} from 'rxjs';
import {Dictionary} from '../../complex/dictionary';
import {cloneDeep, get, set} from 'lodash';
import {Guid} from "../../complex/guid";

/**
 * extends the rxjs BehaviorSubject and implements a Value Copy
 * next => create a Copy of the Value and emits the new Value to the BehaviorSubject
 * getValue => returns the current Copy of the Value in the Behavior Subject
 */
export class SafeBehaviorSubject<T> extends BehaviorSubject<T> {
    private _copy: T = null;
    objectId: Guid = null;

    constructor(defaultValue: T) {
        super(defaultValue);
        this.objectId = new Guid();
        this._copy = cloneDeep(defaultValue);
        super.pipe()
    }

    /**
     * get the current Value in the Subject
     */
    getValue(): T {
        return this._copy;
    }

    /**
     * @deprecated this function is disabled ... use the Store to mutate the State
     * @example
     * store.Listen(s => s.data, () => newData);
     */
    next(value: T) {}

    /**
     * @deprecated this function is disabled ... not allowed action
     */
    complete() {}

    /**
     * @deprecated this function is disabled ... not allowed action
     */
    error(err: any) {}

    private innerNext(value: T) {
        this._copy = cloneDeep(value);
        super.next(value);
    }
}

/**
 * a Reactive Store to save States and listen to Changes
 */
export class ReactiveStore<T> {
    /**
     * enable the Debug log for the Store
     * (Logs to Console when no Action behavior was found)
     */
    DebugMode = false;
    private _core: T = null;
    private _behaviorSubjects = new Dictionary<SafeBehaviorSubject<any>>();

    /**
     * create a new Store with a Initial State
     * @param initialState
     */
    constructor(initialState: T) {
        this._core = initialState;
    }

    /**
     * listen to a specific Property or a complete State change
     * you can use the SafeBehaviorSubject same as a BehaviorSubject but follow Functions has no effect
     * next, complete, error
     * @param selector select the Part of the State to Listen
     *
     * @example
     * // write the data Property of the State into the console
     * store.Listen(s => s.data).subscribe(d => console.info(d));
     */
    Listen<K>(selector: (d: T) => K): SafeBehaviorSubject<K> {
        let key = this.parseSelectorAccess(selector);
        if (this._behaviorSubjects.ContainsKey(key)) {
            return this._behaviorSubjects.TryGetValue(key);
        }
        const subject = new SafeBehaviorSubject<K>(selector(<T>this._core));
        this._behaviorSubjects.Add(key, subject);
        return subject;
    }

    /**
     * mutate a specific Property or a complete State
     * @param selector select the Part of the State to Mutate
     * @param mutation define how to change the State
     *
     * @example
     * // simple Example to set the State
     * store.Mutate(s => s.data, () => newData);
     *
     * @example
     * // make a complex Mutation
     * store.Mutate(s => s, old => {
     *     old.data = [];
     *     old.loading = true;
     *     return old;
     * });
     */
    Mutate<K>(selector: (d: T) => K, mutation: (s: K) => K): void {
        const key = this.parseSelectorAccess(selector);
        const realKey = this.toRealKey(key);
        const behaviors = this.selectBehaviors(key);
        const currentValue = selector(this._core);
        const newValue = mutation(currentValue);
        if (!realKey) {
            this._core = <any>newValue;
        } else {
            set(<any>this._core, realKey, newValue);
        }
        for (const behaviorKey of Object.keys(behaviors)) {
            const realKey = behaviorKey.StartsWith('root.') ? behaviorKey.Replace('root.', '') :
                behaviorKey === 'root' ? '' : behaviorKey;
            const behavior = behaviors[behaviorKey];
            if (!realKey) {
                behavior['innerNext'](this._core);
                continue;
            }
            behavior['innerNext'](get(this._core, realKey));
        }
    }

    /**
     * returns the Behaviors to Invoke for the given Key
     * @param key
     */
    private selectBehaviors<T>(key: string): { [key: string]: SafeBehaviorSubject<T> } {
        const res = {};
        const behaviorKeys = this._behaviorSubjects.Keys().FindAll(i => {
            if (i.Equals(key)) {
                return true;
            }
            return key.length >= i.length ?
                key.Split(i).FirstOrDefault().StartsWith('.') :
                i.Split(key).FirstOrDefault().StartsWith('.');
        });
        for (const behaviorKey of behaviorKeys) {
            const behavior = this._behaviorSubjects.TryGetValue(behaviorKey);
            if (behavior) {
                res[behaviorKey] = behavior;
            }
        }
        return res;
    }

    /**
     * create a unique Key from the State Selector that can use as identifier for the Behavior Subjects
     * adds "root" in front of the Key to have no empty Key when selector points to the State itself
     * @param selector
     * @example
     * store.Listen(s => s.data) // generates the key: root.data
     * store.Listen(s => s) // generates the key: root
     */
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
        let key = k.Reduce((target, e) => target.Concat(e, '.'), '');
        key = key.ReplaceAll('[\'', '.')
            .ReplaceAll('["', '.')
            .ReplaceAll('\']', '')
            .ReplaceAll('"]', '');
        const firstIdx = key.IndexOf('.');
        if (!key.Contains('.')) {
            return 'root';
        }
        let res = key.Substring(firstIdx.Add(1), key.length.Subtract(firstIdx));
        return `root.${res}`;
    }

    /**
     * creates the Original Path for a Object
     * @param key
     * @example
     * root.data // generates: data
     */
    private toRealKey(key: string): string {
        return key.StartsWith('root.') ?
            key.Replace('root.', '') :
            key === 'root' ? '' : key;
    }
}
