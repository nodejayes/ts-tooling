### Array Extensions

[<< Index](/wiki/index.md)

---

#### Count

get the Number of Items in the Array

    Count?(): number;

```javascript
// returns 3
[1,2,3].Count();
// returns 0
[].Count();
```

---

#### Max

get the maximum number in the Array

only number types are checked!!!

    Max?(filterMethod?: FindMethod<T>): number;

*Parameter:*

| Name         | Type     | Description                                    |
|--------------|----------|------------------------------------------------|
| filterMethod | function | a filter function to remove some number values |

```javascript
// returns 3
[1,2,3].Max();
// returns 2
[1,2,3].Max(i => i < 3);
// returns 4
[1,2,'3',4,'5'].Max();
```

---

#### Min

get the minimum number in the Array

only number types are checked!!!

    Min?(filterMethod?: FindMethod<T>): number;

*Parameter:*

| Name         | Type     | Description                                    |
|--------------|----------|------------------------------------------------|
| filterMethod | function | a filter function to remove some number values |

```javascript
// returns 3
[1,2,3].Min();
// returns 2
[1,2,3].Min(i => i > 1);
// returns 4
['1','2','3',4,'5'].Min();
```

---

#### Mean

get the Mean from all numbers in this array

    Mean?(filterMethod?: FindMethod<T>): number;

*Parameter:*

| Name         | Type     | Description                                    |
|--------------|----------|------------------------------------------------|
| filterMethod | function | a filter function to remove some number values |

```javascript
// returns 9.866666666666667
[1, 25.6, 3].Mean();
// returns 2
[1,2,3,4].Mean(i => i < 4);
// returns 4
['1','2','3',4,'5'].Mean();
```

---

#### Sum

get the Sum from all numbers in this array

    Sum?(filterMethod?: FindMethod<T>): number;

*Parameter:*

| Name         | Type     | Description                                    |
|--------------|----------|------------------------------------------------|
| filterMethod | function | a filter function to remove some number values |

```javascript
// returns 6
[1,2,3].Sum();
// returns 5
[1,2,3].Sum(i => i > 1);
// returns 4
['1','2','3',4,'5'].Sum();
```

---

#### Add

add the given element at the end of the list

    Add?(element: T): T[];

*Parameter:*

| Name         | Type     | Description                                    |
|--------------|----------|------------------------------------------------|
| element      | generic  | the element to add in the list                 |

```javascript
// returns [1]
[].Add(1);
```

---

#### AddIfNotExists

add the element at the end of the list when the element not exists in the list.

    AddIfNotExists?(element: T): T[];

*Parameter:*

| Name         | Type     | Description                                    |
|--------------|----------|------------------------------------------------|
| element      | generic  | the element to add in the list                 |

```javascript
// returns [1,2]
[1].AddIfNotExists(2);
// returns [1]
[1].AddIfNotExists(1);
```

---

#### Reduce

shrink the array into a new object with a convert function.

    Reduce?<K>(reducer: ReducerMethod<T, K>, initial: K): K;

*Parameter:*

| Name         | Type     | Description                                        |
|--------------|----------|----------------------------------------------------|
| reducer      | function | the reducer function to convert each array element |
| initial      | generic  | the initial value pass to each element             |

```javascript
// returns "a,b,c"
['a', 'b', 'c'].Reduce((target, e) => {
     return target.Concat(e, ',');
 }, '')
```

---

#### AddRange

add multiple elements at the end of this array

    AddRange?(elements: T[]): T[];

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| elements     | generic[] | the elements to add into this array                |

```javascript
// returns [1,2,3,4]
[1].AddRange([2,3,4]);
```

---

#### AddRangeIfNotExists

add multiple elements at the end of this array when not exists

    AddRangeIfNotExists?(elements: T[]): T[];
    
*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| elements     | generic[] | the elements to add into this array                |

```javascript
// returns [1,2,3,4]
[1].AddRangeIfNotExists([2,3,4]);
// returns [1]
[1].AddRangeIfNotExists([1,1,1]);
```

---

#### Clear

remove all Elements from this array

    Clear?(): T[];

```javascript
// returns []
[1,2,3].Clear();
```

---

#### Contains

check if this array have the given element

    Contains?(element: T): boolean;

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| elements     | generic[] | the elements to add into this array                |

```javascript
// returns true
[1,2,3].Contains(2);
const element = {x:'y'};
[element].Contains(element);
const element2 = {hello:'world',Equals:(i) => this.hello === i.hello};
[element2].Contains(element2);
// returns false
[1,2,3].Contains(50);
[{hello:'world'}].Contains({hello:'world'});
```

---

#### Copy

get a new instance of the array

    Copy?(): T[];
    
```javascript
// returns [1,2,3]
[1,2,3].Copy();
```

---

#### Exists

check if the find Method returns true for a element in the list

    Exists?(condition: FindMethod<T>): boolean;

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| condition    | function  | the method executed for each element in the list   |

```javascript
// returns true
[1,2,3].Exists(e => e === 2);
// returns false
[1,2,3].Exists(e => e === 20);
```

---

#### Find

find the first element that matches the condition in the array

    Find?(condition: FindMethod<T>): T;
    
*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| condition    | function  | the method executed for each element in the list   |
    
```javascript
// returns 2
[1,2,3].Find((e) => e > 1);
```

---

#### FindLast

find the last element that matches the condition in the array

    FindLast?(condition: FindMethod<T>): T;

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| condition    | function  | the method executed for each element in the list   |

```javascript
// returns 3
[1,2,3].FindLast((e) => e > 1);
```

---

#### FindIndex

get the index number of the first matched element in the array

    FindIndex?(condition: FindMethod<T>): number;

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| condition    | function  | the method executed for each element in the list   |

```javascript
// returns 1
[1,2,3,1,2,3].FindIndex(e => e === 2);
```

---

#### FindAll

get all elements that match the condition

    FindAll?(condition: FindMethod<T>): T[];

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| condition    | function  | the method executed for each element in the list   |

```javascript
// returns [2,3]
[1,2,3].FindAll(i => i > 1);
```

---

#### FindLastIndex

get the index number of the last matched element in the array

    FindLastIndex?(condition: FindMethod<T>): number;
    
*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| condition    | function  | the method executed for each element in the list   |

```javascript
// returns 4
[1,2,3,1,2,3].FindLastIndex(e => e === 2);
```

---

#### TrueForAll

check if a condition returns true for any element in the array

    TrueForAll?(condition: FindMethod<T>): boolean;

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| condition    | function  | the method executed for each element in the list   |

```javascript
// returns true
[1,2,3].TrueForAll(e => typeof e === typeof 0);
// returns false
[1,2,3].TrueForAll(e => e === 1);
```

---

#### Insert

insert a element in the array at a specific position

    Insert?(index: number, element: T): T[];

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| index        | number    | the position where to insert the element           |
| element      | generic   | the element to insert                              |

```javascript
// returns [1,5,2,3]
[1,2,3].Insert(1, 5);
```

---

#### InsertRange

insert a array of elements in the array at a specific position

    InsertRange?(index: number, elements: T[]): T[];

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| index        | number    | the position where to insert the element           |
| elements     | generic[] | the elements to insert                             |

```javascript
// returns [1,4,5,6,2,3]
[1,2,3].Insert(1, [4,5,6]);
```

---

#### IndexOf

get the array index of a element

    IndexOf?(element: T, fromIndex?: number): number;

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| element      | generic   | the element to find in the array                   |
| fromIndex    | number    | the index to skip                                  |

```javascript
// returns 1
[1,2,3,1,2,3].IndexOf(2);
// returns 4
[1,2,3,1,2,3].IndexOf(2, 2);
```

---

#### Remove

remove a element from the list

    Remove?(element: T): T[];

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| element      | generic   | the element to remove from the list                |

```javascript
// returns [1,3]
[1,2,3].Remove(2);
```

---

#### RemoveAll

remove all elements that match the given condition

    RemoveAll?(match: FindMethod<T>): T[];

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| match        | function  | the condition executed by any element in the array |

```javascript
// return [1,3]
[1,2,3].RemoveAll(e => e === 2);
// return []
[1,2,3].RemoveAll(() => true);
```

---

#### RemoveAt

remove element at specific position

    RemoveAt?(index: number): T[];

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| index        | number    | the position where the element was removed         |

```javascript
// returns [1,3]
[1,2,3].RemoveAt(1);
```

---

#### RemoveRange

remove multiple elements from the array

    RemoveRange?(elements: T[]): T[];

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| elements     | generic[] | the elements to remove from the array              |

```javascript
// returns [1,2,3]
[1,2,3,4,5,6].RemoveRange([4,5,6]);
[1,2,3].RemoveRange([4,5,6]);
```

---

#### Reverse

turn around the array elements

    Reverse?(): T[];

```javascript
// returns [3,2,1]
[1,2,3].Reverse();
```

---

#### Sort

sort the elements in a array

    Sort?(order?: ListSortOrder): T[];

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| order        | enum      | the direction to sort the array elements           |

```javascript
// returns [1, 2, 3]
[1, 2, 3].Sort();
// returns [3, 2, 1]
[1, 2, 3].Sort(ListSortOrder.DESC);
// returns ['c', 'b', 'a']
['a', 'b', 'c'].Sort(ListSortOrder.DESC);
```

---

#### SortBy

sort a array of objects by the given keys

    SortBy?(keys: string[], orders?: ListSortOrder[]): T[];
    
*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| keys        | string[]   | a list of keys to sort with                        |
| orders      | enum[]     | the sort direction to the keys                     |

```javascript
// returns [
// {
//       Name: 'Anne Klein',
//       Age: 23,
//       Birthday: new Date(1965, 8, 12, 0, 0, 0),
//       Address: {
//           Street: 'Jenaer Strasse 26',
//           PLZ: '47053',
//           Town: 'Duisburg',
//       }
//   },{
//       Name: 'Christine Ehrlichmann',
//       Age: 37,
//       Birthday: new Date(1982, 4, 23, 0, 0, 0),
//       Address: {
//           Street: 'Paul-Nevermann-Platz 59',
//           PLZ: '97657',
//           Town: 'Sandberg'
//       }
//   },{
//       Name: 'Jonas Schreiner',
//       Age: 23,
//       Birthday: new Date(1965, 4, 12, 0, 0, 0),
//       Address: {
//           Street: 'Gotthardstrasse 69',
//           PLZ: '99094',
//           Town: 'Erfurt'
//       }
//   },{
//       Name: 'Sandra Eichmann',
//       Age: 45,
//       Birthday: new Date(1969, 0, 22, 0, 0, 0),
//       Address: {
//           Street: 'Inge Beisheim Platz 20',
//           PLZ: '25313',
//           Town: 'Elmshorn'
//       }
//   },{
//       Name: 'Ulrich Gärtner',
//       Age: 60,
//       Birthday: new Date(1959, 2, 23, 0, 0, 0),
//       Address: {
//           Street: 'Koenigstrasse 50',
//           PLZ: '99750',
//           Town: 'Bleicherode'
//       }
//   }
// ]
[
   {
          Name: 'Jonas Schreiner',
          Age: 23,
          Birthday: new Date(1965, 4, 12, 0, 0, 0),
          Address: {
              Street: 'Gotthardstrasse 69',
              PLZ: '99094',
              Town: 'Erfurt'
          }
      },
   {
          Name: 'Sandra Eichmann',
          Age: 45,
          Birthday: new Date(1969, 0, 22, 0, 0, 0),
          Address: {
              Street: 'Inge Beisheim Platz 20',
              PLZ: '25313',
              Town: 'Elmshorn'
          }
      },
   {
          Name: 'Ulrich Gärtner',
          Age: 60,
          Birthday: new Date(1959, 2, 23, 0, 0, 0),
          Address: {
              Street: 'Koenigstrasse 50',
              PLZ: '99750',
              Town: 'Bleicherode'
          }
      },
   {
          Name: 'Christine Ehrlichmann',
          Age: 37,
          Birthday: new Date(1982, 4, 23, 0, 0, 0),
          Address: {
              Street: 'Paul-Nevermann-Platz 59',
              PLZ: '97657',
              Town: 'Sandberg'
          }
      },
   {
          Name: 'Anne Klein',
          Age: 23,
          Birthday: new Date(1965, 8, 12, 0, 0, 0),
          Address: {
              Street: 'Jenaer Strasse 26',
              PLZ: '47053',
              Town: 'Duisburg',
          }
      }
   ].SortBy(['Name'], [ListSortOrder.ASC]);
```

---

#### ElementAt

get the array element at the given index or null

    ElementAt?(index: number): T;

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| index        | number    | the index of the element to get from array         |

```javascript
// returns 2
[1,2,3].ElementAt(1);
```

---

#### Any

check if any element is in the array

    Any?(condition?: FindMethod<T>): boolean;

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| condition    | function  | the condition to search the element                |

```javascript
// returns true
[1,2,3].Any();
// returns false
[].Any();
```

---

#### FirstOrDefault

get the First element of the array or the first that match the condition

when no element was found the default value or null was returned

    FirstOrDefault?(condition?: FindMethod<T>, def?: T): T;

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| condition    | function  | the condition executed ba any array element        |
| def          | generic   | the default value to return                        |

```javascript
// return 1
[1,2,3,4,5,6].FirstOrDefault();
// return 2
[1,2,3,4,5,6].FirstOrDefault(e => e > 1);
// return 10
[1,2,3,4,5,6].FirstOrDefault(() => false, 10);
```

---

#### LastOrDefault

get the last element of the array or the last that match the condition

when no element was found the default value or null was returned

    LastOrDefault?(condition?: FindMethod<T>, def?: T): T;

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| condition    | function  | the condition executed ba any array element        |
| def          | generic   | the default value to return                        |

```javascript
// return 6
[1,2,3,4,5,6].LastOrDefault();
[1,2,3,4,5,6].LastOrDefault(e => e > 1);
// return 10
[1,2,3,4,5,6].LastOrDefault(() => false, 10);
```

---

#### GroupBy

groups a array of elements by a condition

    GroupBy?(condition: TransformMethod<T>): {[key: string]: T[]};

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| condition    | function  | the condition to group the array                   |

```javascript
// returns {'1': [1], '2': [2], '3': [3,3,3]}
[1,2,3,3,3].GroupBy(e => e);
```

---

#### GroupKey

groups a array of elements by a condition and returns the group keys

    GroupKey?(condition: TransformMethod<T>): string[];

*Parameter:*

| Name         | Type      | Description                                        |
|--------------|-----------|----------------------------------------------------|
| condition    | function  | the condition to group the array                   |

```javascript
// returns ['1', '2', '3']
[1,2,3,3,3].GroupKey(e => e);
```

---

#### Convert

convert all elements of the array into other form

    Convert?<K>(convertMethod: ConvertMethod<T, K>): K[];

*Parameter:*

| Name          | Type      | Description                                               |
|---------------|-----------|-----------------------------------------------------------|
| convertMethod | function  | the method that execute with any element and convert them |

```javascript
// returns ['Test1', 'Test2', 'Test3']
[1,2,3].Convert(e => 'Test' + e);
```

---

#### Join

joins the array elements into a string with separator

    Join?(separator?: string): string;
    
*Parameter:*

| Name         | Type      | Description                                             |
|--------------|-----------|---------------------------------------------------------|
| separator    | string    | the separator to split the array elements in the string |

```javascript
// returns "1,2,3"
[1,2,3].Join(',');
```

---

#### UnionBy

merge two arrays by the condition

    UnionBy?<T>(items: T[], check: FindMethod<T>): T[];
    
*Parameter:*

| Name         | Type      | Description                                             |
|--------------|-----------|---------------------------------------------------------|
| items        | generic[] | the items to add at the end of the array                |
| check        | function  | the condition that executed by the given items          |

```javascript
// returns [1,2,3,6]
[1,2,3].UnionBy([4,5,6], e => e === 6);
```

---

#### Replace

replace a Item in the List takes the first match

    Replace?(condition: FindMethod<T>, item: T): T[];

| Name         | Type      | Description                                             |
|--------------|-----------|---------------------------------------------------------|
| condition    | function  | the method executed for each element in the list        |
| item         | generic   | the Item to replace with                                |    

```javascript
// returns [1,2,3]
[1,5,3].Replace((e) => e === 5, 2);
```

---        

[<< Index](/wiki/index.md)
