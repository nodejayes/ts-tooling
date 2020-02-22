---
id: "_types_string_index_.__global.string"
title: "String"
sidebar_label: "String"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["types/string/index"](../modules/_types_string_index_.md) › [__global](../modules/_types_string_index_.__global.md) › [String](_types_string_index_.__global.string.md)

## Hierarchy

* **String**

## Index

### string Methods

* [Bytes](_types_string_index_.__global.string.md#optional-bytes)
* [Capitalize](_types_string_index_.__global.string.md#optional-capitalize)
* [CharAt](_types_string_index_.__global.string.md#optional-charat)
* [Concat](_types_string_index_.__global.string.md#optional-concat)
* [Contains](_types_string_index_.__global.string.md#optional-contains)
* [ContainsCount](_types_string_index_.__global.string.md#optional-containscount)
* [Copy](_types_string_index_.__global.string.md#optional-copy)
* [EndsWith](_types_string_index_.__global.string.md#optional-endswith)
* [Equals](_types_string_index_.__global.string.md#optional-equals)
* [HTMLEscape](_types_string_index_.__global.string.md#optional-htmlescape)
* [HTMLUnescape](_types_string_index_.__global.string.md#optional-htmlunescape)
* [IndexOf](_types_string_index_.__global.string.md#optional-indexof)
* [Insert](_types_string_index_.__global.string.md#optional-insert)
* [IsAlpha](_types_string_index_.__global.string.md#optional-isalpha)
* [IsAscii](_types_string_index_.__global.string.md#optional-isascii)
* [Join](_types_string_index_.__global.string.md#optional-join)
* [LastIndexOf](_types_string_index_.__global.string.md#optional-lastindexof)
* [LowerFirst](_types_string_index_.__global.string.md#optional-lowerfirst)
* [Pad](_types_string_index_.__global.string.md#optional-pad)
* [PadLeft](_types_string_index_.__global.string.md#optional-padleft)
* [PadRight](_types_string_index_.__global.string.md#optional-padright)
* [RegExpEscape](_types_string_index_.__global.string.md#optional-regexpescape)
* [Remove](_types_string_index_.__global.string.md#optional-remove)
* [Repeat](_types_string_index_.__global.string.md#optional-repeat)
* [Replace](_types_string_index_.__global.string.md#optional-replace)
* [ReplaceAll](_types_string_index_.__global.string.md#optional-replaceall)
* [Split](_types_string_index_.__global.string.md#optional-split)
* [StartsWith](_types_string_index_.__global.string.md#optional-startswith)
* [Substring](_types_string_index_.__global.string.md#optional-substring)
* [TextBetween](_types_string_index_.__global.string.md#optional-textbetween)
* [ToCamelCase](_types_string_index_.__global.string.md#optional-tocamelcase)
* [ToCapitalCase](_types_string_index_.__global.string.md#optional-tocapitalcase)
* [ToConstantCase](_types_string_index_.__global.string.md#optional-toconstantcase)
* [ToDotCase](_types_string_index_.__global.string.md#optional-todotcase)
* [ToDouble](_types_string_index_.__global.string.md#optional-todouble)
* [ToInteger](_types_string_index_.__global.string.md#optional-tointeger)
* [ToKebabCase](_types_string_index_.__global.string.md#optional-tokebabcase)
* [ToLower](_types_string_index_.__global.string.md#optional-tolower)
* [ToLowerCase](_types_string_index_.__global.string.md#optional-tolowercase)
* [ToNoCase](_types_string_index_.__global.string.md#optional-tonocase)
* [ToPascalCase](_types_string_index_.__global.string.md#optional-topascalcase)
* [ToPathCase](_types_string_index_.__global.string.md#optional-topathcase)
* [ToSentenceCase](_types_string_index_.__global.string.md#optional-tosentencecase)
* [ToSnakeCase](_types_string_index_.__global.string.md#optional-tosnakecase)
* [ToUpper](_types_string_index_.__global.string.md#optional-toupper)
* [ToUpperCase](_types_string_index_.__global.string.md#optional-touppercase)
* [Trim](_types_string_index_.__global.string.md#optional-trim)
* [TrimEnd](_types_string_index_.__global.string.md#optional-trimend)
* [TrimStart](_types_string_index_.__global.string.md#optional-trimstart)
* [Truncate](_types_string_index_.__global.string.md#optional-truncate)
* [UpperFirst](_types_string_index_.__global.string.md#optional-upperfirst)
* [Words](_types_string_index_.__global.string.md#optional-words)

## string Methods

### `Optional` Bytes

▸ **Bytes**(): *number*

*Defined in [src/types/string/index.ts:821](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L821)*

get the String Length in Bytes

**`example`** 
// returns 3
'ABC'.Bytes();

**Returns:** *number*

the Byte Length

___

### `Optional` Capitalize

▸ **Capitalize**(): *string*

*Defined in [src/types/string/index.ts:38](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L38)*

Converts a string so that the first letter of the string is capital and all others are small.

**`example`** 
// retruns "Hello"
'hello'.Capitalize();
'HELLO'.Capitalize();
'Hello'.Capitalize();

**Returns:** *string*

the capitalized String

___

### `Optional` CharAt

▸ **CharAt**(`pos`: number): *string*

*Defined in [src/types/string/index.ts:23](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L23)*

Returns a letter of a string at a certain position.

**`example`** 
// returns "H"
'Hello'.CharAt(0);
// returns "o"
'Hello'.CharAt(4);
// throws an Error while string has not enough letters
'Hello'.CharAt(5);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pos` | number | The index of the letter to be returned. |

**Returns:** *string*

the Letter at the Position

___

### `Optional` Concat

▸ **Concat**(`appender`: string, `separator?`: string): *string*

*Defined in [src/types/string/index.ts:381](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L381)*

concat 2 strings

**`example`** 
// returns "ab"
'a'.Concat('b');
// returns "a#b"
'a'.Concat('b', '#');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`appender` | string | the string to append |
`separator?` | string | a template string that separates each concat string member |

**Returns:** *string*

the concated string

___

### `Optional` Contains

▸ **Contains**(`search`: string): *boolean*

*Defined in [src/types/string/index.ts:634](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L634)*

checks if a string is in the current string.

**`example`** 
// returns true
'abbbc'.Contains('b');
'abbbc'.Contains('bbb');
// returns false
'abbbc'.Contains('xxx');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`search` | string | the string to find in this string |

**Returns:** *boolean*

search string is in this string or not

___

### `Optional` ContainsCount

▸ **ContainsCount**(`search`: string, `allowOverlapping?`: boolean): *number*

*Defined in [src/types/string/index.ts:651](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L651)*

returns the number of occurrences of the search string.

**`example`** 
// returns 3
'zzabcabcabczz'.ContainsCount('a');
// returns 2
'zzabcabcabczz'.ContainsCount('cabc', true);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`search` | string | the string to find in this string |
`allowOverlapping?` | boolean | allow overlapping search |

**Returns:** *number*

the number of matches

___

### `Optional` Copy

▸ **Copy**(): *string*

*Defined in [src/types/string/index.ts:617](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L617)*

clones the current String into a new one

**`example`** 
// returns a new Instance "Test"
'Test'.Copy();

**Returns:** *string*

a new Instance of a String

___

### `Optional` EndsWith

▸ **EndsWith**(`search`: string, `position?`: number): *boolean*

*Defined in [src/types/string/index.ts:76](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L76)*

checks whether a string ends with a character string.

**`example`** 
// returns true
'abcdefg'.EndsWith('efg');
'abcdefg'.EndsWith('f', 6);
// returns false
'abcdefg'.EndsWith('f', 1);
'abcdefg'.EndsWith('z');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`search` | string | the string with which the string should end |
`position?` | number | an offset parameter |

**Returns:** *boolean*

the string ends with the search

___

### `Optional` Equals

▸ **Equals**(`value`: string): *boolean*

*Defined in [src/types/string/index.ts:667](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L667)*

check if this String strict the same as the given string

**`example`** 
// returns true
'Test'.Equals('Test');
// returns false
'Test'.Equals('test');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | the other string to compare with |

**Returns:** *boolean*

are both strings the same

___

### `Optional` HTMLEscape

▸ **HTMLEscape**(): *string*

*Defined in [src/types/string/index.ts:89](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L89)*

escape to a HTML safe string

**`example`** 
// returns "fred, barney, &amp; pebbles"
'fred, barney, & pebbles'.HTMLEscape();

**Returns:** *string*

a escaped HTML String

___

### `Optional` HTMLUnescape

▸ **HTMLUnescape**(): *string*

*Defined in [src/types/string/index.ts:102](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L102)*

unescape a escaped HTML String

**`example`** 
// returns "fred, barney, & pebbles"
'fred, barney, &amp; pebbles'.HTMLUnescape();

**Returns:** *string*

a unescaped HTML String

___

### `Optional` IndexOf

▸ **IndexOf**(`value`: string): *number*

*Defined in [src/types/string/index.ts:744](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L744)*

get the position of the first match in this string

**`example`** 
// returns 0
'aaaaa'.IndexOf('a');
// returns 1
'abc'.IndexOf('b');
// returns -1
'abc'.IndexOf('z');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | the string to search in this string |

**Returns:** *number*

the position index

___

### `Optional` Insert

▸ **Insert**(`startIndex`: number, `value`: string): *string*

*Defined in [src/types/string/index.ts:686](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L686)*

insert a string into this string on a specific position

**`example`** 
// returns "axbc"
'abc'.Insert(1, 'x');
// returns "xabc"
'abc'.Insert(-1, 'x');
// returns "abcx"
'abc'.Insert(100, 'x');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`startIndex` | number | the position where the string was added |
`value` | string | the string value to insert |

**Returns:** *string*

the combined string

___

### `Optional` IsAlpha

▸ **IsAlpha**(): *boolean*

*Defined in [src/types/string/index.ts:808](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L808)*

check if this string only have alphabetical letters without "ß"

**`example`** 
// returns true
'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.IsAlpha();
// returns false
'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1'.IsAlpha();
'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZß'.IsAlpha();

**Returns:** *boolean*

has only alphabetical letters or not

___

### `Optional` IsAscii

▸ **IsAscii**(): *boolean*

*Defined in [src/types/string/index.ts:792](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L792)*

check if this string only contains Ascii letters

**`example`** 
// returns true
'ABCD'.IsAscii();
// returns false
'©'.IsAscii();

**Returns:** *boolean*

has only Ascii letters or not

___

### `Optional` Join

▸ **Join**(`appender`: string[], `separator?`: string): *string*

*Defined in [src/types/string/index.ts:400](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L400)*

same as Concat only with multiple strings.

**`example`** 
// returns "testabc"
'test'.Join(['a','b','c']);
// returns "test#a#b#c"
'test'.Join(['a','b','c'], '#');
// returns "a#b#c"
''.Join(['a','b','c'], '#');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`appender` | string[] | the strings to append at the end |
`separator?` | string | a template string that separates each concat string member |

**Returns:** *string*

the joinded string

___

### `Optional` LastIndexOf

▸ **LastIndexOf**(`value`: string): *number*

*Defined in [src/types/string/index.ts:762](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L762)*

get the position of the last match in this string

**`example`** 
// returns 4
'aaaaa'.LastIndexOf('a');
// returns 1
'abc'.LastIndexOf('b');
// returns -1
'abc'.LastIndexOf('z');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | the string to search in this string |

**Returns:** *number*

the position index

___

### `Optional` LowerFirst

▸ **LowerFirst**(): *string*

*Defined in [src/types/string/index.ts:327](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L327)*

convert the first letter of the string into lower case

**`example`** 
// returns "hello"
'Hello'.LowerFirst();
'hello'.LowerFirst();

**Returns:** *string*

the new string with the lower case first letter

___

### `Optional` Pad

▸ **Pad**(`length`: number, `template?`: string): *string*

*Defined in [src/types/string/index.ts:419](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L419)*

fills a string alternately from left and right.

**`example`** 
// returns "_-abc_-_"
'abc'.Pad(8, '_-');
// returns "  abc   "
'abc'.Pad(8);
// returns "abcdefg"
'abcdefg'.Pad(3, '-');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`length` | number | Specifies how long the string should be |
`template?` | string | the string to be inserted |

**Returns:** *string*

the padded string

___

### `Optional` PadLeft

▸ **PadLeft**(`length`: number, `template?`: string): *string*

*Defined in [src/types/string/index.ts:438](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L438)*

fills a string from left.

**`example`** 
// returns "__abc"
'abc'.PadLeft(5, '_');
// returns "  abc"
'abc'.PadLeft(5);
// returns "abcdefg"
'abcdefg'.PadLeft(3, '-');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`length` | number | Specifies how long the string should be |
`template?` | string | the string to be inserted |

**Returns:** *string*

the padded string

___

### `Optional` PadRight

▸ **PadRight**(`length`: number, `template?`: string): *string*

*Defined in [src/types/string/index.ts:457](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L457)*

fills a string from right.

**`example`** 
// returns "abc__"
'abc'.PadRight(5, '_');
// returns "abc  "
'abc'.PadRight(5);
// returns "abcdefg"
'abcdefg'.PadRight(3, '-');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`length` | number | Specifies how long the string should be |
`template?` | string | the string to be inserted |

**Returns:** *string*

the padded string

___

### `Optional` RegExpEscape

▸ **RegExpEscape**(): *string*

*Defined in [src/types/string/index.ts:115](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L115)*

escape a String used for Regular Expression

**`example`** 
// returns "\[lodash\]\(https://lodash\.com/\)"
'[lodash](https://lodash.com/)'.RegExpEscape();

**Returns:** *string*

a escaped Regular Expression

___

### `Optional` Remove

▸ **Remove**(`position`: number, `count?`: number): *string*

*Defined in [src/types/string/index.ts:705](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L705)*

remove a number of characters from the position in this string

**`example`** 
// returns "abc"
'axbc'.Remove(1);
// returns "a"
'axbc'.Remove(1, 3);
// returns ""
'abc'.Remove(10, 5);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`position` | number | the position from where the characters was removed |
`count?` | number | the number of characters to remove |

**Returns:** *string*

the cleaned string

___

### `Optional` Repeat

▸ **Repeat**(`times`: number): *string*

*Defined in [src/types/string/index.ts:471](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L471)*

repeat the current string x times

**`example`** 
// returns "*****"
'*'.Repeat(5);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`times` | number | how many repeats |

**Returns:** *string*

repeated string

___

### `Optional` Replace

▸ **Replace**(`search`: string, `replacer`: string): *string*

*Defined in [src/types/string/index.ts:488](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L488)*

replace the first match on the current String

**`example`** 
// returns "azcdefg"
'abcdefg'.Replace('b', 'z');
// returns "azbcdefg"
'abbcdefg'.Replace('b', 'z');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`search` | string | the pattern to search on the string |
`replacer` | string | the string that replaces the found string |

**Returns:** *string*

the replaced string

___

### `Optional` ReplaceAll

▸ **ReplaceAll**(`search`: string, `replacer`: string): *string*

*Defined in [src/types/string/index.ts:503](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L503)*

replace all matches on the current String

**`example`** 
// returns "azzzcdezfg"
'abbbcdebfg'.ReplaceAll('b', 'z');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`search` | string | the pattern to search on the string |
`replacer` | string | the string that replaces the found string |

**Returns:** *string*

the replaced string

___

### `Optional` Split

▸ **Split**(`pattern`: string): *string[]*

*Defined in [src/types/string/index.ts:517](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L517)*

split a string by a pattern into a Array

**`example`** 
// returns ['bbbb', 'bbb', 'c']
'abbbbabbbac'.Split('a');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pattern` | string | the template string to split the string |

**Returns:** *string[]*

the splitted array

___

### `Optional` StartsWith

▸ **StartsWith**(`search`: string, `position?`: number): *boolean*

*Defined in [src/types/string/index.ts:57](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L57)*

checks whether a string begins with a character string.

**`example`** 
// returns true
'abcdefg'.StartsWith('abc');
'abcdefg'.StartsWith('b', 1);
// returns false
'abcdefg'.StartsWith('b', 2);
'abcdefg'.StartsWith('z');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`search` | string | the string with which the string should begin |
`position?` | number | an offset parameter |

**Returns:** *boolean*

the string begins with the string

___

### `Optional` Substring

▸ **Substring**(`position`: number, `length?`: number): *string*

*Defined in [src/types/string/index.ts:726](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L726)*

get a part of this string

**`example`** 
// returns "_"
'___Test'.Substring(0);
// returns "Test"
'___Test'.Substring(3, 4);
// return "Te"
'Test'.Substring(-1, 2);
// return "st"
'Test'.Substring(100, 2);

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`position` | number | the position to start |
`length?` | number | the number of characters to get from string |

**Returns:** *string*

the string part

___

### `Optional` TextBetween

▸ **TextBetween**(`begin`: string, `end`: string): *string[]*

*Defined in [src/types/string/index.ts:777](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L777)*

found text between 2 text marks and returns the results as string array

**`example`** 
// returns "betweenmodule"
'beforemodule@NgModule({betweenmodule})aftermodule'.TextBetween('@NgModule({', '})');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin` | string | the first text mark |
`end` | string | the second text mark |

**Returns:** *string[]*

the texts between the text marks

___

### `Optional` ToCamelCase

▸ **ToCamelCase**(): *string*

*Defined in [src/types/string/index.ts:164](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L164)*

Converts a string into the Camel Case format.

**`example`** 
// returns "fooBar"
'Foo Bar'.ToCamelCase()
'--foo-bar--'.ToCamelCase()
'__FOO_BAR__'.ToCamelCase()

**Returns:** *string*

the Camel Case String

___

### `Optional` ToCapitalCase

▸ **ToCapitalCase**(): *string*

*Defined in [src/types/string/index.ts:192](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L192)*

Transform into a space separated string with each word capitalized.

**`example`** 
// returns "Test String"
'test string'.ToCapitalCase();

**Returns:** *string*

the Capital Case String

___

### `Optional` ToConstantCase

▸ **ToConstantCase**(): *string*

*Defined in [src/types/string/index.ts:205](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L205)*

Transform into upper case string with an underscore between words.

**`example`** 
// returns "TEST_STRING"
'test string'.ToConstantCase();

**Returns:** *string*

the Constant Case String

___

### `Optional` ToDotCase

▸ **ToDotCase**(): *string*

*Defined in [src/types/string/index.ts:218](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L218)*

Transform into a lower case string with a period between words.

**`example`** 
// returns "test.string"
'test string'.ToDotCase();

**Returns:** *string*

the Dot Case String

___

### `Optional` ToDouble

▸ **ToDouble**(): *number*

*Defined in [src/types/string/index.ts:149](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L149)*

convert a string into a Double number Value

**`example`** 
// returns 1.0
'1'.ToDouble();
'1.0'.ToDouble();
// returns 1.5
'1.5'.ToDouble();
// returns 0.0
'aaa'.ToDouble();

**Returns:** *number*

a number instance that represents a double

___

### `Optional` ToInteger

▸ **ToInteger**(): *number*

*Defined in [src/types/string/index.ts:131](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L131)*

convert a string into a Integer number Value

**`example`** 
// returns 1
'1'.ToInteger();
'1.5'.ToInteger();
// returns 0
'aaa'.ToInteger();

**Returns:** *number*

a number instance that represents a integer

___

### `Optional` ToKebabCase

▸ **ToKebabCase**(): *string*

*Defined in [src/types/string/index.ts:179](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L179)*

Converts a string into the Kebab Case format.

**`example`** 
// returns "foo-bar"
'Foo Bar'.ToKebabCase();
'fooBar'.ToKebabCase();
'__FOO_BAR__'.ToKebabCase();

**Returns:** *string*

the Kebab Case String

___

### `Optional` ToLower

▸ **ToLower**(): *string*

*Defined in [src/types/string/index.ts:529](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L529)*

convert all letters of the string into lower case.

**`example`** 
// returns "ababab"
'aBaBaB'.ToLower();

**Returns:** *string*

the lower case string

___

### `Optional` ToLowerCase

▸ **ToLowerCase**(): *string*

*Defined in [src/types/string/index.ts:298](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L298)*

converts every letter of the string into lower case

**`example`** 
// returns "hello"
'HELLO'.ToLowerCase();

**Returns:** *string*

the lower case string

___

### `Optional` ToNoCase

▸ **ToNoCase**(): *string*

*Defined in [src/types/string/index.ts:231](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L231)*

Transform into a lower cased string with spaces between words.

**`example`** 
// returns "test.string"
'test string'.ToNoCase();

**Returns:** *string*

the No Case String

___

### `Optional` ToPascalCase

▸ **ToPascalCase**(): *string*

*Defined in [src/types/string/index.ts:270](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L270)*

Transform into a string of capitalized words without separators.

**`example`** 
// returns "Test string"
'TestString'.ToPascalCase();

**Returns:** *string*

the Pascal Case String

___

### `Optional` ToPathCase

▸ **ToPathCase**(): *string*

*Defined in [src/types/string/index.ts:244](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L244)*

Transform into a lower case string with slashes between words.

**`example`** 
// returns "test/string"
'test string'.ToPathCase();

**Returns:** *string*

the Path Case String

___

### `Optional` ToSentenceCase

▸ **ToSentenceCase**(): *string*

*Defined in [src/types/string/index.ts:257](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L257)*

Transform into a lower case with spaces between words, then capitalize the string.

**`example`** 
// returns "Test string"
'test string'.ToSentenceCase();

**Returns:** *string*

the Sentence Case String

___

### `Optional` ToSnakeCase

▸ **ToSnakeCase**(): *string*

*Defined in [src/types/string/index.ts:285](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L285)*

Converts a string into the Snake Case format.

**`example`** 
// returns "foo_bar"
'Foo Bar'.ToSnakeCase();
'fooBar'.ToSnakeCase();
'--FOO-BAR--'.ToSnakeCase();

**Returns:** *string*

the Snake Case String

___

### `Optional` ToUpper

▸ **ToUpper**(): *string*

*Defined in [src/types/string/index.ts:541](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L541)*

convert all letters of the string into upper case.

**`example`** 
// returns "ABABAB"
'aBaBaB'.ToLower();

**Returns:** *string*

the upper case string

___

### `Optional` ToUpperCase

▸ **ToUpperCase**(): *string*

*Defined in [src/types/string/index.ts:313](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L313)*

converts every letter of the string into upper case

**`example`** 
```
// returns "HELLO"
'hello'.ToLowerCase();
```

**Returns:** *string*

the upper case string

___

### `Optional` Trim

▸ **Trim**(`sequence?`: string): *string*

*Defined in [src/types/string/index.ts:556](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L556)*

removes all consecutive string sequences at the beginning and end of the string.

**`example`** 
// returns "Test"
'___Test___'.Trim('_');
'   Test   '.Trim();

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sequence?` | string | the template string to be removed |

**Returns:** *string*

the trimmed string

___

### `Optional` TrimEnd

▸ **TrimEnd**(`sequence?`: string): *string*

*Defined in [src/types/string/index.ts:586](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L586)*

removes all consecutive string sequences at the end of the string.

**`example`** 
// returns "Test"
'Test___'.Trim('_');
'Test   '.Trim();

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sequence?` | string | the template string to be removed |

**Returns:** *string*

the trimmed string

___

### `Optional` TrimStart

▸ **TrimStart**(`sequence?`: string): *string*

*Defined in [src/types/string/index.ts:571](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L571)*

removes all consecutive string sequences at the beginning of the string.

**`example`** 
// returns "Test"
'___Test'.Trim('_');
'   Test'.Trim();

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sequence?` | string | the template string to be removed |

**Returns:** *string*

the trimmed string

___

### `Optional` Truncate

▸ **Truncate**(`length`: number, `omission?`: string, `separator?`: string): *string*

*Defined in [src/types/string/index.ts:604](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L604)*

cuts a string to a certain length.

**`example`** 
// returns "##..."
'##-##Chars##-##'.Truncate(5);
// returns "##-#X"
'##-##Chars##-##'.Truncate(5, 'X');

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`length` | number | the length of the result string |
`omission?` | string | the string placed at the end |
`separator?` | string | - |

**Returns:** *string*

the truncated string

___

### `Optional` UpperFirst

▸ **UpperFirst**(): *string*

*Defined in [src/types/string/index.ts:341](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L341)*

convert the first letter of the string into upper case

**`example`** 
// returns "Hello"
'hello'.UpperFirst();
'Hello'.UpperFirst();

**Returns:** *string*

the new string with the upper case first letter

___

### `Optional` Words

▸ **Words**(`filter?`: function, `pattern?`: string): *string[]*

*Defined in [src/types/string/index.ts:364](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/types/string/index.ts#L364)*

splits a string into an array of its words.

**`example`** 
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

**Parameters:**

▪`Optional`  **filter**: *function*

a word filter that can be applied

▸ (`word`: string): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`word` | string |

▪`Optional`  **pattern**: *string*

a custom split pattern

**Returns:** *string[]*

a Array of Words
