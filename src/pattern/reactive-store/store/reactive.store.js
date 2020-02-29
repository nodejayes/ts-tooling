const {BehaviorSubject} = require('rxjs');
const {Dictionary} = require('../../../types/dictionary/dictionary/dictionary');
const {Get, Set} = require('../../../core/object/object');
const im = require('immer');
require('../../../types/array/extension');
require('../../../types/string/extension/extension');

class SafeBehaviorSubject extends BehaviorSubject {
    next(value) {
        throw new Error(`cannot emit value ${value} please use the Mutation Function to do that`);
    }

    _innerNext(value) {
        super.next(value);
    }
}

class ReactiveStore {
    constructor(initialState) {
        this._core = null;
        this._behaviorSubjects = new Dictionary();
        this._core = im.produce(initialState, () => {});
    }

    Listen(selector) {
        let key = this._parseSelectorAccess(selector);
        if (this._behaviorSubjects.ContainsKey(key)) {
            return this._behaviorSubjects.TryGetValue(key);
        }
        const subject = new SafeBehaviorSubject(selector(this._core));
        this._behaviorSubjects.Add(key, subject);
        return subject;
    }

    Mutate(selector, mutation) {
        const key = this._parseSelectorAccess(selector);
        const realKey = this._toRealKey(key);
        const behaviors = this._selectBehaviors(key);
        this._core = im.produce(this._core, draft => {
            const currentValue = selector(draft);
            const newValue = mutation(currentValue);
            if (!realKey) {
                draft = newValue;
            } else {
                Set(draft, realKey, newValue);
            }
            for (const behaviorKey of Object.keys(behaviors)) {
                const realKey = behaviorKey.StartsWith('root.') ? behaviorKey.Replace('root.', '') :
                    behaviorKey === 'root' ? '' : behaviorKey;
                const behavior = behaviors[behaviorKey];
                if (!realKey) {
                    behavior['_innerNext'](draft);
                    continue;
                }
                behavior['_innerNext'](Get(draft, realKey));
            }
        });
    }

    _selectBehaviors(key) {
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

    _parseSelectorAccess(selector) {
        let tmp = selector.toString();
        const isLambda = tmp.Contains('=>');
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
        return this._rootify(k.Reduce((target, e) => target.Concat(e, '.'), ''));
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
