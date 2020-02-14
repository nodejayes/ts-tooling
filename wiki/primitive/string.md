### String Extensions

[<< Index](/wiki/index.md)

---

#### CharAt

Returns a letter of a string at a certain position.

    CharAt?(pos: number): string;

*Parameter:*

| Name | Type   | Description                             |
|------|--------|-----------------------------------------|
| pos  | number | The index of the letter to be returned. |

```javascript
// returns "H"
'Hello'.CharAt(0);
// returns "o"
'Hello'.CharAt(4);
// throws an Error while string has not enough letters
'Hello'.CharAt(5);
```

---

#### Capitalize

Converts a string so that the first letter of the string is capital and all others are small.

    Capitalize?(): string;

```javascript
// retruns "Hello"
'hello'.Capitalize();
'HELLO'.Capitalize();
'Hello'.Capitalize();
```

---

#### StartsWith

checks whether a string begins with a character string.

    StartsWith?(search: string, position?: number): boolean;

*Parameter:*

| Name     | Type   | Description                                   |
|----------|--------|-----------------------------------------------|
| search   | string | the string with which the string should begin |
| position | number | an offset parameter                           |

```javascript
// returns true
'abcdefg'.StartsWith('abc');
'abcdefg'.StartsWith('b', 1);
// returns false
'abcdefg'.StartsWith('b', 2);
'abcdefg'.StartsWith('z');
```

---

#### EndsWith

checks whether a string ends with a character string.

    EndsWith?(search: string, position?: number): boolean;
    
| Name     | Type   | Description                                   |
|----------|--------|-----------------------------------------------|
| search   | string | the string with which the string should begin |
| position | number | an offset parameter                           |

```javascript
// returns true
'abcdefg'.EndsWith('efg');
'abcdefg'.EndsWith('f', 6);
// returns false
'abcdefg'.EndsWith('f', 1);
'abcdefg'.EndsWith('z');
```

---

*more Comming Soon!*

---

[<< Index](/wiki/index.md)
