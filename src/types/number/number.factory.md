### Number Factory

some Utils for Integer and Double numbers

[<< Index](/wiki/index.md)

---

#### NewInteger

create a new Integer from the given input

    NewInteger(value: number | string): number

*Parameter:*

| Name       | Type             | Description                                                 |
|------------|------------------|-------------------------------------------------------------|
| value      | number / string  | Javascript Number or String that represent the new Integer  |

```javascript
// returns 1
NumberFactory.NewInteger(1);
NumberFactory.NewInteger('1');
NumberFactory.NewInteger(1.5);
// returns 0
NumberFactory.NewInteger('aaaa');
```

---

#### NewDouble

create a new Double number from the given input

    NewDouble(value: number | string): number

*Parameter:*

| Name       | Type             | Description                                               |
|------------|------------------|-----------------------------------------------------------|
| value      | number / string  | Javascript Number or String that represent the new Double |

```javascript
// returns 1.5
NumberFactory.NewDouble(1.5);
NumberFactory.NewDouble('1.5');
// returns 0.0
NumberFactory.NewDouble('aaa');
```

---

#### RandomInteger

create Random Integers in the min/max Border

    RandomInteger(min: number, max: number): number

| Name       | Type    | Description                                               |
|------------|---------|-----------------------------------------------------------|
| min        | number  | the minimum Integer that can be created                   |
| max        | number  | the maximum Integer that can be created                   |

```javascript
// creates the Javascript Numbers 1,2,3,4,5,6,7,8,9 and 10
NumberFactory.RandomInteger(1, 10);
```

---

#### RandomDouble

create Random Doubles in the min/max Border

    RandomDouble(min: number, max: number): number

| Name       | Type    | Description                                               |
|------------|---------|-----------------------------------------------------------|
| min        | number  | the minimum Double that can be created                    |
| max        | number  | the maximum Double that can be created                    |

```javascript
// create all Double Numbers begins with 0.0 and ends with 1.0
NumberFactory.RandomDouble(0, 1)
```

---

[<< Index](/wiki/index.md)
