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
 * @static
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
 * @static
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
 * @static
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
 * @static
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
 * @static
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
    return Merge(parent, child)
};

/**
 * get the Key of the Object by String Key
 *
 * @memberof module:types/object.ObjectFactory
 * @static
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

module.exports = {ObjectFactory};
