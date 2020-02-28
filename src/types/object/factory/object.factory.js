const {Merge, RecursiveDeepCopy} = require('../../../core/object/object');
const sizeof = require('object-sizeof');

class ObjectFactory {
    static Copy(instance) {
        return RecursiveDeepCopy(instance);
    }

    static IsCircular(obj) {
        return ObjectFactory.GetCircular(obj).length > 0;
    }

    static GetCircular(obj) {
        const alreadyChecked = [];
        const keyReferences = [];

        function check(innerObj) {
            if (innerObj && typeof innerObj === 'object') {
                if (alreadyChecked.indexOf(innerObj) !== -1) {
                    return ['yes'];
                }
                alreadyChecked.push(innerObj);
                for (const key in innerObj) {
                    if (innerObj.hasOwnProperty(key) && check(innerObj[key]).length > 0) {
                        keyReferences.Add(key);
                        return keyReferences;
                    }
                }
            }
            return keyReferences;
        }

        return check(obj);
    }

    static SizeOf(obj) {
        return sizeof(obj);
    }

    static Merge(parent, child) {
        return Merge(parent, child)
    }
}

module.exports = {ObjectFactory};
