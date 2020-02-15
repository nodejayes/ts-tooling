### String Factory

some Utils for Strings

[<< Index](/wiki/index.md)

---

#### IsNullOrEmpty

check if a String is empty or null

    IsNullOrEmpty(value: string)
    
*Parameters:*

| Name  | Type   | Description         |
|-------|--------|---------------------|
| value | string | the string to check |

```javascript
// is true
StringFactory.IsNullOrEmpty(undefined);
StringFactory.IsNullOrEmpty(null);
StringFactory.IsNullOrEmpty('');
// is false
StringFactory.IsNullOrEmpty('a');
```

---

#### RandomAlphaString

generate a Random String with given Size

use only letters a-z

    RandomAlphaString(length: number): string

*Parameters:*

| Name   | Type   | Description            |
|--------|--------|------------------------|
| length | number | the Size of the String |

```javascript
// returns a random string with 12 bytes length
StringFactory.RandomAlphaString(12);
```

---

[<< Index](/wiki/index.md)
