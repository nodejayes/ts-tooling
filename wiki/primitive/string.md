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

#### HTMLEscape

escape to a HTML safe string

    HTMLEscape?(): string;
    
```javascript
// returns "fred, barney, &amp; pebbles"
'fred, barney, & pebbles'.HTMLEscape();
```

---

#### HTMLUnescape

unescape a escaped HTML String

    HTMLUnescape?(): string;
    
```javascript
// returns "fred, barney, & pebbles"
'fred, barney, &amp; pebbles'.HTMLUnescape();
```

---

#### RegExpEscape

escape a String used for Regular Expression

    RegExpEscape?(): string;

```javascript
// returns "\[lodash\]\(https://lodash\.com/\)"
'[lodash](https://lodash.com/)'.RegExpEscape();
```

---

#### ToInteger

convert a string into a Integer number Value

    ToInteger?(): number;

```javascript
// returns 1
'1'.ToInteger();
'1.5'.ToInteger();
// returns 0
'aaa'.ToInteger();
```

---

#### ToDouble

convert a string into a Double number Value

    ToDouble?(): number;

```javascript
// returns 1.0
'1'.ToDouble();
'1.0'.ToDouble();
// returns 1.5
'1.5'.ToDouble();
// returns 0.0
'aaa'.ToDouble();
```

---

#### ToCamelCase

Converts a string into the Camel Case format.

    ToCamelCase?(): string;

```javascript
// returns "fooBar"
'Foo Bar'.ToCamelCase()
'--foo-bar--'.ToCamelCase()
'__FOO_BAR__'.ToCamelCase()
```

---

#### ToKebabCase

Converts a string into the Kebab Case format.

    ToKebabCase?(): string;

```javascript
// returns "foo-bar"
'Foo Bar'.ToKebabCase();
'fooBar'.ToKebabCase();
'__FOO_BAR__'.ToKebabCase();
```

---

#### ToSnakeCase

Converts a string into the Snake Case format.

    ToSnakeCase?(): string;

```javascript
// returns "foo_bar"
'Foo Bar'.ToSnakeCase();
'fooBar'.ToSnakeCase();
'--FOO-BAR--'.ToSnakeCase();
```

---

#### ToStartCase

Converts a string into the Start Case format.

    ToStartCase?(): string;

```javascript
// returns "Foo Bar"
'--foo-bar--'.ToStartCase();
'fooBar'.ToStartCase();
// returns "FOO BAR"
'__FOO_BAR__'.ToStartCase();
```

---

#### ToLowerCase

converts every letter of the string into lower case

    ToLowerCase?(): string;

```javascript
// returns "hello"
'HELLO'.ToLowerCase();
```

---

#### ToUpperCase

converts every letter of the string into upper case

    ToUpperCase?(): string;
    
```javascript
// returns "HELLO"
'hello'.ToLowerCase();
```

---

#### LowerFirst

convert the first letter of the string into lower case

    LowerFirst?(): string;

```javascript
// returns "hello"
'Hello'.LowerFirst();
'hello'.LowerFirst();
```

---

#### UpperFirst

convert the first letter of the string into upper case

    UpperFirst?(): string;
    
```javascript
// returns "Hello"
'hello'.UpperFirst();
'Hello'.UpperFirst();
```

---

#### Words

splits a string into an array of its words.

    Words?(filter?: (word: string) => boolean, pattern?: string): string[];
    
*Parameter:*

| Name    | Type     | Description                       |
|---------|----------|-----------------------------------|
| filter  | function | a word filter that can be applied |
| pattern | string   | a custom split pattern            |

```javascript
// returns ['hello', 'is', 'a', 'word', 'of', 'a', 'sentence']
'hello is a word of a sentence'.Words();
// returns ['a']
'abcd'.Words(null, 'a');
// returns ['hello', 'word', 'sentence']
'hello is a word of a sentence'
    .Words(e => [
        'hello', 'word', 'sentence'
    ].Contains(e)
);
```

---

#### Concat

concat 2 strings

    Concat?(appender: string, separator?: string): string;

*Parameter:*

| Name      | Type   | Description                                                |
|-----------|--------|------------------------------------------------------------|
| appender  | string | the string to append                                       |
| separator | string | a template string that separates each concat string member |

```javascript
// returns "ab"
'a'.Concat('b');
// returns "a#b"
'a'.Concat('b', '#');
```

---

#### Join

same as Concat only with multiple strings.

    Join?(appender: string[], separator?: string): string;

*Parameter:*

| Name      | Type   | Description                                                |
|-----------|--------|------------------------------------------------------------|
| appender  | string | the strings to append at the end                           |
| separator | string | a template string that separates each concat string member |

```javascript
// returns "testabc"
'test'.Join(['a','b','c']);
// returns "test#a#b#c"
'test'.Join(['a','b','c'], '#');
// returns "a#b#c"
''.Join(['a','b','c'], '#');
```

---

#### Pad

fills a string alternately from left and right.

    Pad?(length: number, template?: string): string;

*Parameter:*

| Name     | Type   | Description                             |
|----------|--------|-----------------------------------------|
| length   | number | Specifies how long the string should be |
| template | string | the string to be inserted               |

```javascript
// returns "_-abc_-_"
'abc'.Pad(8, '_-');
// returns "  abc   "
'abc'.Pad(8);
// returns "abcdefg"
'abcdefg'.Pad(3, '-');
```

---

#### PadLeft

fills a string from left.

PadLeft?(length: number, template?: string): string;

*Parameter:*

| Name     | Type   | Description                             |
|----------|--------|-----------------------------------------|
| length   | number | Specifies how long the string should be |
| template | string | the string to be inserted               |

```javascript
// returns "__abc"
'abc'.PadLeft(5, '_');
// returns "  abc"
'abc'.PadLeft(5);
// returns "abcdefg"
'abcdefg'.PadLeft(3, '-');
```

---

#### PadRight

fills a string from right.

    PadRight?(length: number, template?: string): string;

*Parameter:*

| Name     | Type   | Description                             |
|----------|--------|-----------------------------------------|
| length   | number | Specifies how long the string should be |
| template | string | the string to be inserted               |

```javascript
// returns "abc__"
'abc'.PadRight(5, '_');
// returns "abc  "
'abc'.PadRight(5);
// returns "abcdefg"
'abcdefg'.PadRight(3, '-');
```

---

#### Repeat

repeat the current string x times

    Repeat?(times: number): string;

*Parameter:*

| Name  | Type   | Description      |
|-------|--------|------------------|
| times | number | how many repeats |

```javascript
// returns "*****"
'*'.Repeat(5);
```

---

#### Replace

replace the first match on the current String

    Replace?(search: string, replacer: string): string;

*Parameter:*

| Name     | Type   | Description                               |
|----------|--------|-------------------------------------------|
| search   | string | the pattern to search on the string       |
| replacer | string | the string that replaces the found string |

```javascript
// returns "azcdefg"
'abcdefg'.Replace('b', 'z');
// returns "azbcdefg"
'abbcdefg'.Replace('b', 'z');
```

---

#### ReplaceAll

replace all matches on the current String

    ReplaceAll?(search: string, replacer: string): string;

*Parameter:*

| Name     | Type   | Description                               |
|----------|--------|-------------------------------------------|
| search   | string | the pattern to search on the string       |
| replacer | string | the string that replaces the found string |

```javascript
// returns "azzzcdezfg"
'abbbcdebfg'.ReplaceAll('b', 'z');
```

---

#### Split

split a string by a pattern into a Array

    Split?(pattern: string): string[];

*Parameter:*

| Name     | Type   | Description                               |
|----------|--------|-------------------------------------------|
| pattern  | string | the template string to split the string   |

```javascript
// returns ['bbbb', 'bbb', 'c']
'abbbbabbbac'.Split('a');
```

---

#### ToLower

convert all letters of the string into lower case.

    ToLower?(): string;

```javascript
// returns "ababab"
'aBaBaB'.ToLower();
```

---

#### ToUpper

convert all letters of the string into upper case.

    ToUpper?(): string;

```javascript
// returns "ABABAB"
'aBaBaB'.ToLower();
```

---

#### Trim

removes all consecutive string sequences at the beginning and end of the string.

    Trim?(sequence?: string): string;

*Parameter:*

| Name     | Type   | Description                               |
|----------|--------|-------------------------------------------|
| sequence | string | the template string to be removed         |

```javascript
// returns "Test"
'___Test___'.Trim('_');
'   Test   '.Trim();
```

---

#### TrimStart

removes all consecutive string sequences at the beginning of the string.

    TrimStart?(sequence?: string): string;

*Parameter:*

| Name     | Type   | Description                               |
|----------|--------|-------------------------------------------|
| sequence | string | the template string to be removed         |

```javascript
// returns "Test"
'___Test'.Trim('_');
'   Test'.Trim();
```

---

#### TrimEnd

removes all consecutive string sequences at the end of the string.

    TrimEnd?(sequence?: string): string;

*Parameter:*

| Name     | Type   | Description                               |
|----------|--------|-------------------------------------------|
| sequence | string | the template string to be removed         |

```javascript
// returns "Test"
'Test___'.Trim('_');
'Test   '.Trim();
```

---

#### Truncate

cuts a string to a certain length.

    Truncate?(length: number, omission?: string, separator?: string): string;

*Parameter:*

| Name      | Type   | Description                               |
|-----------|--------|-------------------------------------------|
| length    | number | length of the result string               |
| omission  | string | the string placed at the end              |
| separator | string | stops at this character                   |

```javascript
// returns "##..."
'##-##Chars##-##'.Truncate(5);
// returns "##-#X"
'##-##Chars##-##'.Truncate(5, 'X');
```

---

#### Copy

clones the current String into a new one

    Copy?(): string;

```javascript
// returns a new Instance "Test"
'Test'.Copy();
```

---

#### Contains

checks if a string is in the current string.

    Contains?(search: string): boolean;

*Parameter:*

| Name      | Type   | Description                               |
|-----------|--------|-------------------------------------------|
| search    | string | the string to find in this string         |

```javascript
// returns true
'abbbc'.Contains('b');
'abbbc'.Contains('bbb');
// returns false
'abbbc'.Contains('xxx');
```

---

#### ContainsCount

returns the number of occurrences of the search string.

    ContainsCount?(search: string, allowOverlapping?: boolean): number;

*Parameter:*

| Name             | Type    | Description                               |
|------------------|---------|-------------------------------------------|
| search           | string  | the string to find in this string         |
| allowOverlapping | boolean | allow overlapping search                  |

```javascript
// returns 3
'zzabcabcabczz'.ContainsCount('a');
// returns 2
'zzabcabcabczz'.ContainsCount('cabc', true);
```

---

#### Equals

check if this String strict the same as the given string

    Equals?(value: string): boolean;

*Parameter:*

| Name      | Type    | Description                               |
|-----------|---------|-------------------------------------------|
| value     | string  | the other string to compare with          |

```javascript
// returns true
'Test'.Equals('Test');
// returns false
'Test'.Equals('test');
```

---

#### Insert

insert a string into this string on a specific position

    Insert?(startIndex: number, value: string): string;

*Parameter:*

| Name       | Type    | Description                               |
|------------|---------|-------------------------------------------|
| startIndex | number  | the position where the string was added   |
| value      | string  | the string value to insert                |

```javascript
// returns "axbc"
'abc'.Insert(1, 'x');
// returns "xabc"
'abc'.Insert(-1, 'x');
// returns "abcx"
'abc'.Insert(100, 'x');
```

---

#### Remove

remove a number of characters from the position in this string

    Remove?(position: number, count?: number): string;

*Parameter:*

| Name       | Type    | Description                                        |
|------------|---------|----------------------------------------------------|
| position   | number  | the position from where the characters was removed |
| count      | number  | the number of characters to remove                 |

```javascript
// returns "abc"
'axbc'.Remove(1);
// returns "a"
'axbc'.Remove(1, 3);
// returns ""
'abc'.Remove(10, 5);
```

---

#### Substring

get a part of this string

    Substring?(position: number, length?: number): string;

*Parameter:*

| Name       | Type    | Description                                        |
|------------|---------|----------------------------------------------------|
| position   | number  | the position to start                              |
| length     | number  | the number of characters to get from string        |

```javascript
// returns "_"
'___Test'.Substring(0);
// returns "Test"
'___Test'.Substring(3, 4);
// return "Te"
'Test'.Substring(-1, 2);
// return "st"
'Test'.Substring(100, 2);
```

---

#### IndexOf

get the position of the first match in this string

    IndexOf?(value: string): number;

*Parameter:*

| Name    | Type    | Description                                        |
|---------|---------|----------------------------------------------------|
| value   | string  | the string to search in this string                |

```javascript
// returns 0
'aaaaa'.IndexOf('a');
// returns 1
'abc'.IndexOf('b');
// returns -1
'abc'.IndexOf('z');
```

---

#### LastIndexOf

get the position of the last match in this string

    LastIndexOf?(value: string): number;

*Parameter:*

| Name    | Type    | Description                                        |
|---------|---------|----------------------------------------------------|
| value   | string  | the string to search in this string                |

```javascript
// returns 4
'aaaaa'.LastIndexOf('a');
// returns 1
'abc'.LastIndexOf('b');
// returns -1
'abc'.LastIndexOf('z');
```

---

#### TextBetween

found text between 2 text marks and returns the results as string array

    TextBetween?(begin: string, end: string): string[];

*Parameter:*

| Name    | Type    | Description                                        |
|---------|---------|----------------------------------------------------|
| begin   | string  | the first text mark                                |
| end     | string  | the second text mark                               |

```javascript
// returns "betweenmodule"
'beforemodule@NgModule({betweenmodule})aftermodule'.TextBetween('@NgModule({', '})');
```

---

#### IsAscii

check if this string only contains Ascii letters

    IsAscii?(): boolean;

```javascript
// returns true
'ABCD'.IsAscii();
// returns false
'©'.IsAscii();
```

---

#### IsAlpha

check if this string only have alphabetical letters without "ß"

    IsAlpha?(): boolean;

```javascript
// returns true
'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.IsAlpha();
// returns false
'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1'.IsAlpha();
'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZß'.IsAlpha();
```

---

#### Bytes

get the String Length in Bytes

    Bytes?(): number;

```javascript
// returns 3
'ABC'.Bytes();
```

---

[<< Index](/wiki/index.md)
