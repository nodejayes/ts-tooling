const {Merge, RecursiveDeepCopy, Get, Set} = require('../../../core/object/object');
const sizeof = require('object-sizeof');

/**
 * Object Utils Class to perform some Operations on Objects
 *
 * @memberof module:types/object
 */
class ObjectFactory {}

/**
 * copy a Object Instance and get a new one
 *
 * @memberof module:types/object.ObjectFactory
 * @param instance {any} the object to copy
 * @returns {any} the new Object instance
 *
 * @example
 * // returns {Hello:'World!'}
 * ObjectFactory.Copy({Hello:'World!'});
 * // returns false
 * const obj = {Hello:'World!'};
 * obj === ObjectFactory.Copy(obj);
 */
ObjectFactory.Copy = (instance) => {
    return RecursiveDeepCopy(instance, []);
};

/**
 * check if the given Object has some self references
 *
 * @memberof module:types/object.ObjectFactory
 * @param obj {any} the Object to check
 * @return {boolean}
 *
 * @example
 * const obj1 = {hello:'world'};
 * const obj2 = {hello:'world'};
 * obj2.ref = obj2;
 * // returns false while the Object has no self references
 * ObjectFactory.IsCircular(obj1);
 * // returns true while obj2 has a self reference on the ref Property
 * ObjectFactory.IsCircular(obj2);
 */
ObjectFactory.IsCircular = (obj) => {
    return ObjectFactory.GetCircular(obj).length > 0;
};

/**
 * returns the Keys of self references in Objects
 *
 * @memberof module:types/object.ObjectFactory
 * @param obj {any} the Object to check
 * @return {string[]}
 *
 * @example
 * const obj1 = {hello:'world',c:null};
 * const obj2 = {test:'me',c:obj1};
 * obj1.c = obj2;
 * const combined = {t1:obj1,t2:obj2,t3:null};
 * const obj3 = combined;
 * combined.t3 = obj3;
 * // returns ['c', 'c', 't1']
 * ObjectFactory.GetCircular(combined);
 */
ObjectFactory.GetCircular = (obj) => {
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
};

/**
 * returns the Size in Byte of a Object Instance
 *
 * @memberof module:types/object.ObjectFactory
 * @param obj {any} the Object to check
 * @return {number}
 *
 * @example
 * // returns 22
 * ObjectFactory.SizeOf({Hello: 'World!'});
 */
ObjectFactory.SizeOf = (obj) => {
    return sizeof(obj);
};

/**
 * merge the child into the parent object
 *
 * @memberof module:types/object.ObjectFactory
 * @param parent {any}
 * @param child {any}
 * @return {any}
 *
 * @example
 * // returns {name:'muster',age:10,state:{active:true}}
 * const obj1 = {
 *      name:'muster',
 *      age:10,
 * };
 * const obj2 = {
 *      state:{
 *          active:true
 *      }
 * };
 * ObjectFactory.Merge(obj1, obj2);
 */
ObjectFactory.Merge = (parent, child) => {
    return Merge(parent, child);
};

/**
 * get the Key of the Object by String Key
 *
 * @memberof module:types/object.ObjectFactory
 * @param obj {any}
 * @param key {string}
 * @return {any}
 *
 * @example
 * // returns 'Paul'
 * ObjectFactory.Get({Hello:{Name:'Paul',World:'World'}}, 'Hello.World');
 * // returns {Name:'Paul',World:'World'}
 * ObjectFactory.Get({Hello:{Name:'Paul',World:'World'}}, 'Hello');
 * // returns null
 * ObjectFactory.Get({Hello:{Name:'Paul',World:'World'}}, 'hello');
 */
ObjectFactory.Get = (obj, key) => {
    return Get(obj, key);
};

/**
 * set the Value of a Object by key
 *
 * @memberof module:types/object.ObjectFactory
 * @param obj {any} the Object to modify
 * @param key {string} the Key of the Object to modify
 * @param value {any} the Value to set
 * @return {any}
 *
 * @example
 * // returns {Hello:'MyWorld'}
 * ObjectFactory.Set({Hello:'World'}, 'Hello', 'MyWorld');
 * // returns {Hello:'World'}
 * ObjectFactory.Set({Hello:'World'}, 'Hello.key', 'MyWorld');
 * // returns {Hello:'World',hello:'MyWorld'}
 * ObjectFactory.Set({Hello:'World'}, 'hello', 'MyWorld');
 */
ObjectFactory.Set = (obj, key, value) => {
    return Set(obj, key, value);
};

/**
 * detect changes on javascript values
 *
 * @memberof module:types/object.ObjectFactory
 * @param value1 {any} first value to compare with
 * @param value2 {any} second value to compare with
 * @return {boolean} are the values equal or not
 *
 * @example
 * // returns true
 * ObjectFactory.Equal(1,1);
 * ObjectFactory.Equal('a','a');
 * ObjectFactory.Equal({Hello:'World'},{Hello:'World'});
 * ObjectFactory.Equal([{Hello:'World'}],[{Hello:'World'}]);
 * // returns false
 * ObjectFactory.Equal(1,2);
 * ObjectFactory.Equal('a','b');
 * ObjectFactory.Equal({Hello:'World'},{Hello:'World!'});
 * ObjectFactory.Equal([{Hello:'World'}],[{Hello:'World!'}]);
 */
ObjectFactory.Equal = (value1, value2) => {
    return JSON.stringify(value1) === JSON.stringify(value2);
};

/**
 *
 * check if one object has same keys as the other Object
 *
 * @memberof module:types/object.ObjectFactory
 * @param value1 {any} the first Object
 * @param value2 {any} the second Object
 * @param notCheckPosition {boolean} the keys must have the same Position
 * @return {boolean}
 *
 * @example
 * // returns true
 * ObjectFactory.EqualKeys({Hello:'World'}, {Hello:'World!'});
 * ObjectFactory.EqualKeys({Hello:'World', Test: '2'}, {Test: '1', Hello:'World!'}, true);
 * // returns false
 * ObjectFactory.EqualKeys({Hello1:'World'}, {Hello:'World!'});
 * ObjectFactory.EqualKeys({Hello:'World'}, {Hello:'World!', Test: '1'});
 * ObjectFactory.EqualKeys({Hello:'World', Test: '2'}, {Hello:'World!'});
 * ObjectFactory.EqualKeys({hello:'World'}, {Hello:'World!'});
 * ObjectFactory.EqualKeys({Hello:'World', Test: '2'}, {Test: '1', Hello:'World!'});
 */
ObjectFactory.EqualKeys = (value1, value2, notCheckPosition) => {
    notCheckPosition = notCheckPosition === true;
    const k1 = Object.keys(value1);
    const k2 = Object.keys(value2);
    if (k1.length !== k2.length) {
        return false;
    }
    for (let i = 0; i < k1.length; i++) {
        if (!notCheckPosition) {
            if (k1[i] !== k2[i]) {
                return false;
            }
            continue;
        }
        if (!k2.Contains(k1[i])) {
            return false;
        }
    }
    return true;
};

/**
 * removes all Items from list2 in list1
 *
 * @memberof module:types/object.ObjectFactory
 * @param list1 {any[]} the first list
 * @param list2 {any[]} the second list
 * @param equal {function?} a custom compare function
 * @return {any[]} the difference of list1 and list2
 * @example
 * // returns [1,2,3]
 * ObjectFactory.Difference([1,2,3], [4,5,6])
 * // returns [1,2]
 * ObjectFactory.Difference([1,2,3], [3,4,5])
 * // returns []
 * ObjectFactory.Difference([1,2,3], [1,2,3])
 */
ObjectFactory.Difference = (list1, list2, equal) => {
    const tmp = [...list1];
    for (const keyL2 in list2) {
        const item = list2[keyL2];
        tmp.RemoveAll(e => typeof equal === 'function' ? equal(e, item) : e === item);
    }
    return tmp;
};

/**
 * freeze the Object
 *
 * @memberof module:types/object.ObjectFactory
 * @param obj {any} the Object to freeze
 * @param complete {boolean} freeze the Object recursive or not
 * @returns {any} the frozen Object
 *
 * @example
 * const tmp = {hello:'world!',subobj:{hello:'world'}};
 * let frozen1 = ObjectFactory.Freeze(tmp);
 * // that throws a Error
 * frozen1.hello = 'x';
 * // that is possible
 * frozen1.subobj.hello = 'x';
 *
 * let frozen2 = ObjectFactory.Freeze(tmp, true);
 * // that throws a Error
 * frozen2.hello = 'x';
 * frozen2.subobj.hello = 'x';
 */
ObjectFactory.Freeze = (obj, complete) => {
    if (!complete) {
        return Object.freeze(obj);
    }
    for (const key of Object.keys(obj)) {
        if (Array.isArray(obj[key])) {
            for (let i = 0; i < obj[key].length; i++) {
                obj[key][i] = ObjectFactory.Freeze(obj[key][i], true);
            }
            continue;
        }
        if (typeof obj[key] !== typeof {}) {
            continue;
        }
        obj[key] = Object.freeze(obj[key]);
    }
    return Object.freeze(obj);
};

module.exports = {ObjectFactory};
