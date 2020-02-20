### Object Factory

Object Utils Class to perform some Operations on Objects

[<< Index](/wiki/index.md)

---

#### Copy

copy a Object Instance and get a new one

    Copy<T>(instance: T): T
    
*Parameter:*

| Name     | Type    | Description        |
|----------|---------|--------------------|
| instance | generic | the object to copy |

```javascript
// returns {Hello:'World!'}
ObjectFactory.Copy({Hello:'World!'});
// returns false
const obj = {Hello:'World!'};
obj === ObjectFactory.Copy(obj);
```

---

#### IsCircular

check if the given Object has some self references

    IsCircular(obj: any): boolean

*Parameter:*

| Name     | Type    | Description         |
|----------|---------|---------------------|
| obj      | object  | the Object to check |

```javascript
const obj1 = {hello:'world'};
const obj2 = {hello:'world'};
obj2.ref = obj2;
// returns false while the Object has no self references
ObjectFactory.IsCircular(obj1);
// returns true while obj2 has a self reference on the ref Property
ObjectFactory.IsCircular(obj2);
```

---

#### GetCircular

returns the Keys of self references in Objects

    GetCircular(obj: any): string[]

*Parameter:*

| Name     | Type    | Description         |
|----------|---------|---------------------|
| obj      | object  | the Object to check |

```javascript
const obj1 = {hello:'world',c:null};
const obj2 = {test:'me',c:obj1};
obj1.c = obj2;
const combined = {t1:obj1,t2:obj2,t3:null};
const obj3 = combined;
combined.t3 = obj3;
// returns ['c', 'c', 't1']
ObjectFactory.GetCircular(combined);
```

---

#### SizeOf

returns the Size in Byte of a Object Instance

    SizeOf(obj: any): number

*Parameter:*

| Name     | Type    | Description         |
|----------|---------|---------------------|
| obj      | any     | the Object to check |

```javascript
// returns 22
ObjectFactory.SizeOf({Hello: 'World!'});
```

---

#### Merge

merge the child into the parent object.

it mutates the parent!

    Merge<T>(parent: any, child: any): T

*Parameter:*

| Name     | Type    | Description                      |
|----------|---------|----------------------------------|
| parent   | any     | the main Object that was mutated |
| child    | any     | the second Object                |

```javascript
// returns {name:'muster',age:10,state:{active:true}}
const obj1 = {
     name:'muster',
     age:10,
};
const obj2 = {
     state:{
         active:true
     }
};
ObjectFactory.Merge(obj1, obj2);
```

---

[<< Index](/wiki/index.md)
