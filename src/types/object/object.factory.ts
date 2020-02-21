import {merge, recursiveDeepCopy} from '../../core/object';
const sizeof = require('object-sizeof');

/**
 * Object Utils Class to perform some Operations on Objects
 */
export class ObjectFactory {
    /**
     * copy a Object Instance and get a new one
     *
     * @param instance the object to copy
     * @returns the new Object instance
     *
     * @example
     * // returns {Hello:'World!'}
     * ObjectFactory.Copy({Hello:'World!'});
     * // returns false
     * const obj = {Hello:'World!'};
     * obj === ObjectFactory.Copy(obj);
     */
    static Copy<T>(instance: T): T {
        return recursiveDeepCopy(instance);
    }
    /**
     * check if the given Object has some self references
     *
     * @param obj the Object to check
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
    static IsCircular(obj: any): boolean {
        return ObjectFactory.GetCircular(obj).length > 0;
    }

    /**
     * returns the Keys of self references in Objects
     *
     * @param obj the Object to check
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
    static GetCircular(obj: any): string[] {
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

    /**
     * returns the Size in Byte of a Object Instance
     *
     * @param obj the Object to check
     *
     * @example
     * // returns 22
     * ObjectFactory.SizeOf({Hello: 'World!'});
     */
    static SizeOf(obj: any): number {
        return sizeof(obj);
    }

    /**
     * merge the child into the parent object
     *
     * @param parent
     * @param child
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
    static Merge<T>(parent: any, child: any): T {
        return merge(parent, child)
    }
}
