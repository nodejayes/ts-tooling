/**
 * Object Utils Class to perform some Operations on Objects
 *
 * @category Type
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
    static Copy<T>(instance: T): T;

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
    static IsCircular(obj: any): boolean;

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
    static GetCircular(obj: any): string[];

    /**
     * returns the Size in Byte of a Object Instance
     *
     * @param obj the Object to check
     *
     * @example
     * // returns 22
     * ObjectFactory.SizeOf({Hello: 'World!'});
     */
    static SizeOf(obj: any): number;

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
    static Merge<T>(parent: any, child: any): T

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
    static Get<T>(obj: any, key: string): T;

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
    static Set<T>(obj: T, key: string, value: any): T;

    /**
     * detect changes on javascript values
     * @param value1 first value to compare with
     * @param value2 second value to compare with
     * @return are the values equal or not
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
    static Equal(value1: any, value2: any): boolean;

    /**
     *
     * check if one object has same keys as the other Object
     *
     * @param value1 the first Object
     * @param value2 the second Object
     * @param notCheckPosition the keys must have the same Position
     * @return
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
    static EqualKeys(value1: any, value2: any, notCheckPosition?: boolean): boolean;

    /**
     * removes all Items from list2 in list1
     *
     * @memberof module:types/object.ObjectFactory
     * @static
     * @param list1 the first list
     * @param list2 the second list
     * @param equal a custom compare function
     * @return the difference of list1 and list2
     * @example
     * // returns [1,2,3]
     * ObjectFactory.Difference([1,2,3], [4,5,6])
     * // returns [1,2]
     * ObjectFactory.Difference([1,2,3], [3,4,5])
     * // returns []
     * ObjectFactory.Difference([1,2,3], [1,2,3])
     */
    static Difference<T, K>(list1: T[], list2: K[], equal?: (item1: T, item2: K) => boolean): T[];
}
