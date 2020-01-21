import {BehaviorSubject, merge} from 'rxjs';
import {Dictionary} from '../../complex/dictionary';
import {set, get, cloneDeep} from 'lodash';

export class SafeBehaviorSubject<T> extends BehaviorSubject<T> {
    private _copy: T = null;

    constructor(defaultValue: T) {
        super(defaultValue);
        this._copy = cloneDeep(defaultValue);
    }

    getValue(): T {
        return this._copy;
    }

    next(value: T): void {
        super.next(value);
        this._copy = cloneDeep(value);
    }
}

/**
 * a Reactive Store to save States and listen to Changes
 */
export class ReactiveStore<T> {
    private _core: T = null;
    private _behaviorSubjects = new Dictionary<SafeBehaviorSubject<any>>();

    /**
     * enable the Debug log for the Store
     * (Logs to Console when no Action behavior was found)
     */
    DebugMode = false;

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
     * @param selector
     * @param mutation
     */
    Mutate<K>(selector: (d: T) => K, mutation: (s: K) => K): void {
        const key = this.parseSelectorAccess(selector);
        const realKey = key.StartsWith('root.') ? key.Replace('root.', '') :
            key === 'root' ? '' : key;
        const behaviors = this.selectBehaviors(key);
        const currentValue = selector(this._core);
        const newValue = mutation(currentValue);
        this._core = {
            ...this._core,
        };
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
                behavior.next(this._core);
            }
            behavior.next(get(this._core, realKey));
        }
    }

    private selectBehaviors<T>(key: string): {[key: string]: SafeBehaviorSubject<T>} {
        const res = {};
        const behaviorKeys = this._behaviorSubjects.Keys().FindAll(i => {
            return i.length >= key.length ? i.StartsWith(key) : key.StartsWith(i);
        });
        for (const behaviorKey of behaviorKeys) {
            const behavior = this._behaviorSubjects.TryGetValue(behaviorKey);
            if (behavior) {
                res[behaviorKey] = behavior;
            }
        }
        return res;
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
}
