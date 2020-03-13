const {BehaviorSubject} = require('rxjs');
const {ObjectFactory} = require('../../../types/object');
const {Dictionary} = require('../../../types/dictionary/dictionary/dictionary');
const {Get, Set} = require('../../../core/object/object');
const im = require('immer');
require('../../../types/array/extension');
require('../../../types/string/extension/extension');

/**
 * extends the BehaviorSubject and prevent the next Method to execute
 *
 * @memberof module:pattern/reactive-store
 * @extends {BehaviorSubject} the BehaviorSubject from RxJs
 */
class SafeBehaviorSubject extends BehaviorSubject {
    /**
     * disable the Method from BehaviorSubject to not allow to get another value Instance other than the Store
     *
     * @deprecated please use state.Mutation() to change the State Value
     */
    next(value) {
        throw new Error(`cannot emit value ${value} please use the Mutation Function to do that`);
    }

    _innerNext(value) {
        super.next(value);
    }

    /**
     * returns a copy of the current Value
     *
     * @returns {T} the copy of the current Value
     */
    getValue() {
        return ObjectFactory.Copy(super.getValue());
    }
}

/**
 * a Reactive Store to save States and listen to Changes
 *
 * @memberof module:pattern/reactive-store
 */
class ReactiveStore {
    /**
     * create a new Store with a Initial State
     *
     * @constructor
     *
     * @param initialState {any} the default State Value
     */
    constructor(initialState) {
        this._core = null;
        this._behaviorSubjects = new Dictionary();
        this._core = im.produce(initialState, () => {});
    }

    /**
     * listen to a specific Property or a complete State change
     * you can use the SafeBehaviorSubject same as a BehaviorSubject but follow Functions has no effect
     * next, complete, error
     *
     * @param selector {function} select the Part of the State to Listen
     * @return {SafeBehaviorSubject}
     *
     * @example
     * // write the data Property of the State into the console
     * store.Listen(s => s.data).subscribe(d => console.info(d));
     */
    Listen(selector) {
        let key = this._parseSelectorAccess(selector);
        if (this._behaviorSubjects.ContainsKey(key)) {
            return this._behaviorSubjects.TryGetValue(key);
        }
        const subject = new SafeBehaviorSubject(selector(this._core));
        this._behaviorSubjects.Add(key, subject);
        return subject;
    }

    /**
     * mutate a specific Property or a complete State
     *
     * @param selector {function} select the Part of the State to Mutate
     * @param mutation {function} define how to change the State
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
    Mutate(selector, mutation) {
        const key = this._parseSelectorAccess(selector);
        const realKey = this._toRealKey(key);
        const behaviors = this._selectBehaviors(key);
        let changed = true;
        this._core = im.produce(this._core, draft => {
            const original = selector(this._core);
            const currentValue = selector(draft);
            const newValue = mutation(currentValue);
            const hash1 = JSON.stringify(original);
            const hash2 = JSON.stringify(newValue);
            if (hash1 === hash2) {
                changed = false;
                return;
            }
            if (!realKey) {
                draft = newValue;
            } else {
                Set(draft, realKey, newValue);
            }
        });

        if (changed) {
            for (const behaviorKey of Object.keys(behaviors)) {
                const realKey = behaviorKey.StartsWith('root.') ? behaviorKey.Replace('root.', '') :
                    behaviorKey === 'root' ? '' : behaviorKey;
                const behavior = behaviors[behaviorKey];
                if (!realKey) {
                    behavior['_innerNext'](this._core);
                    continue;
                }
                behavior['_innerNext'](Get(this._core, realKey));
            }
        }
    }

    _selectBehaviors(key) {
        const res = {};
        const behaviorKeys = this._behaviorSubjects.Keys.FindAll(i => {
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

    _parseSelectorAccess(selector) {
        let tmp = selector.toString();
        const isLambda = tmp.Contains('=>') && !tmp.Contains('return ') && !tmp.Contains('{') && !tmp.Contains('}');
        return isLambda ? this._parseLambdaSyntax(tmp) : this._parseFunctionSyntax(tmp);
    }

    _parseLambdaSyntax(tmp) {
        const key = tmp.Split('=>')
            .ElementAt(1)
            .Split(';')
            .ElementAt(0);
        return this._rootify(key);
    }

    _parseFunctionSyntax(tmp) {
        tmp = tmp.Split('{').ElementAt(1);
        tmp = tmp.Split('}').ElementAt(0);
        tmp = this._removeCoverageStuff(tmp);
        const k = tmp.Trim(' ')
            .Split('return ')
            .Reduce((target, e) => target.Concat(e), '')
            .Split(';')
            .Reduce((target, e) => target.Concat(e), '')
            .Split('.');
        return this._rootify(k.Reduce((target, e) => target.Concat(e, '.'), ''));
    }

    _removeCoverageStuff(tmp) {
        if (tmp.Contains(';return ')) {
            // coverage stuff found
            tmp = 'return ' + tmp.Split(';return')
                .ElementAt(1);
        }
        return tmp;
    }

    _rootify(selector) {
        const key = selector.ReplaceAll('[\'', '.')
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

    _toRealKey(key) {
        return key.StartsWith('root.') ?
            key.Replace('root.', '') :
            key === 'root' ? '' : key;
    }
}

module.exports = {SafeBehaviorSubject, ReactiveStore};
