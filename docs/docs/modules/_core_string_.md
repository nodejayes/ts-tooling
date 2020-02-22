---
id: "_core_string_"
title: "core/string"
sidebar_label: "core/string"
---

[ts-tooling](../index.md) › [Globals](../globals.md) › ["core/string"](_core_string_.md)

## Index

### Variables

* [escapeHtmlChar](_core_string_.md#const-escapehtmlchar)
* [reAsciiWord](_core_string_.md#const-reasciiword)
* [reComboHalfMarksRange](_core_string_.md#const-recombohalfmarksrange)
* [reEscapedHtml](_core_string_.md#const-reescapedhtml)
* [reHasEscapedHtml](_core_string_.md#const-rehasescapedhtml)
* [reHasRegExpChar](_core_string_.md#const-rehasregexpchar)
* [reHasUnescapedHtml](_core_string_.md#const-rehasunescapedhtml)
* [reHasUnicodeWord](_core_string_.md#const-rehasunicodeword)
* [reOptMod](_core_string_.md#const-reoptmod)
* [reRegExpChar](_core_string_.md#const-reregexpchar)
* [reUnescapedHtml](_core_string_.md#const-reunescapedhtml)
* [reUnicodeWord](_core_string_.md#const-reunicodeword)
* [rsApos](_core_string_.md#const-rsapos)
* [rsAstralRange](_core_string_.md#const-rsastralrange)
* [rsBreak](_core_string_.md#const-rsbreak)
* [rsBreakRange](_core_string_.md#const-rsbreakrange)
* [rsCombo](_core_string_.md#const-rscombo)
* [rsComboMarksRange](_core_string_.md#const-rscombomarksrange)
* [rsComboRange](_core_string_.md#const-rscomborange)
* [rsComboSymbolsRange](_core_string_.md#const-rscombosymbolsrange)
* [rsDigits](_core_string_.md#const-rsdigits)
* [rsDingbat](_core_string_.md#const-rsdingbat)
* [rsDingbatRange](_core_string_.md#const-rsdingbatrange)
* [rsEmoji](_core_string_.md#const-rsemoji)
* [rsFitz](_core_string_.md#const-rsfitz)
* [rsLower](_core_string_.md#const-rslower)
* [rsLowerRange](_core_string_.md#const-rslowerrange)
* [rsMathOpRange](_core_string_.md#const-rsmathoprange)
* [rsMisc](_core_string_.md#const-rsmisc)
* [rsMiscLower](_core_string_.md#const-rsmisclower)
* [rsMiscUpper](_core_string_.md#const-rsmiscupper)
* [rsModifier](_core_string_.md#const-rsmodifier)
* [rsNonAstral](_core_string_.md#const-rsnonastral)
* [rsNonCharRange](_core_string_.md#const-rsnoncharrange)
* [rsOptContrLower](_core_string_.md#const-rsoptcontrlower)
* [rsOptContrUpper](_core_string_.md#const-rsoptcontrupper)
* [rsOptJoin](_core_string_.md#const-rsoptjoin)
* [rsOptVar](_core_string_.md#const-rsoptvar)
* [rsOrdLower](_core_string_.md#const-rsordlower)
* [rsOrdUpper](_core_string_.md#const-rsordupper)
* [rsPunctuationRange](_core_string_.md#const-rspunctuationrange)
* [rsRegional](_core_string_.md#const-rsregional)
* [rsSeq](_core_string_.md#const-rsseq)
* [rsSpaceRange](_core_string_.md#const-rsspacerange)
* [rsSurrPair](_core_string_.md#const-rssurrpair)
* [rsUpper](_core_string_.md#const-rsupper)
* [rsUpperRange](_core_string_.md#const-rsupperrange)
* [rsVarRange](_core_string_.md#const-rsvarrange)
* [rsZWJ](_core_string_.md#const-rszwj)
* [unescapeHtmlChar](_core_string_.md#const-unescapehtmlchar)

### Functions

* [asciiWords](_core_string_.md#asciiwords)
* [basePropertyOf](_core_string_.md#basepropertyof)
* [escape](_core_string_.md#escape)
* [escapeRegExp](_core_string_.md#escaperegexp)
* [hasUnicodeWord](_core_string_.md#hasunicodeword)
* [trimChar](_core_string_.md#trimchar)
* [unescape](_core_string_.md#unescape)
* [unicodeWords](_core_string_.md#unicodewords)
* [words](_core_string_.md#words)

### Object literals

* [htmlEscapes](_core_string_.md#const-htmlescapes)
* [htmlUnescapes](_core_string_.md#const-htmlunescapes)

## Variables

### `Const` escapeHtmlChar

• **escapeHtmlChar**: *(Anonymous function)* = basePropertyOf(htmlEscapes)

*Defined in [src/core/string.ts:125](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L125)*

___

### `Const` reAsciiWord

• **reAsciiWord**: *RegExp‹›* = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g

*Defined in [src/core/string.ts:88](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L88)*

___

### `Const` reComboHalfMarksRange

• **reComboHalfMarksRange**: *"\ufe20-\ufe2f"* = "\ufe20-\ufe2f"

*Defined in [src/core/string.ts:33](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L33)*

___

### `Const` reEscapedHtml

• **reEscapedHtml**: *RegExp‹›* = /&(?:amp|lt|gt|quot|#39);/g

*Defined in [src/core/string.ts:127](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L127)*

___

### `Const` reHasEscapedHtml

• **reHasEscapedHtml**: *RegExp‹›* = RegExp(reEscapedHtml.source)

*Defined in [src/core/string.ts:128](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L128)*

___

### `Const` reHasRegExpChar

• **reHasRegExpChar**: *RegExp‹›* = RegExp(reRegExpChar.source)

*Defined in [src/core/string.ts:144](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L144)*

___

### `Const` reHasUnescapedHtml

• **reHasUnescapedHtml**: *RegExp‹›* = RegExp(reUnescapedHtml.source)

*Defined in [src/core/string.ts:130](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L130)*

___

### `Const` reHasUnicodeWord

• **reHasUnicodeWord**: *RegExp‹›* = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/

*Defined in [src/core/string.ts:25](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L25)*

___

### `Const` reOptMod

• **reOptMod**: *string* = rsModifier + '?'

*Defined in [src/core/string.ts:65](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L65)*

___

### `Const` reRegExpChar

• **reRegExpChar**: *RegExp‹›* = /[\\^$.*+?()[\]{}|]/g

*Defined in [src/core/string.ts:143](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L143)*

___

### `Const` reUnescapedHtml

• **reUnescapedHtml**: *RegExp‹›* = /[&<>"']/g

*Defined in [src/core/string.ts:129](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L129)*

___

### `Const` reUnicodeWord

• **reUnicodeWord**: *RegExp‹›* = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
].join('|'), 'g')

*Defined in [src/core/string.ts:73](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L73)*

___

### `Const` rsApos

• **rsApos**: *"['’]"* = "['’]"

*Defined in [src/core/string.ts:46](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L46)*

___

### `Const` rsAstralRange

• **rsAstralRange**: *"\ud800-\udfff"* = "\ud800-\udfff"

*Defined in [src/core/string.ts:31](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L31)*

___

### `Const` rsBreak

• **rsBreak**: *string* = '[' + rsBreakRange + ']'

*Defined in [src/core/string.ts:47](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L47)*

___

### `Const` rsBreakRange

• **rsBreakRange**: *string* = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange

*Defined in [src/core/string.ts:44](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L44)*

___

### `Const` rsCombo

• **rsCombo**: *string* = '[' + rsComboRange + ']'

*Defined in [src/core/string.ts:48](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L48)*

___

### `Const` rsComboMarksRange

• **rsComboMarksRange**: *"\u0300-\u036f"* = "\u0300-\u036f"

*Defined in [src/core/string.ts:32](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L32)*

___

### `Const` rsComboRange

• **rsComboRange**: *string* = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange

*Defined in [src/core/string.ts:35](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L35)*

___

### `Const` rsComboSymbolsRange

• **rsComboSymbolsRange**: *"\u20d0-\u20ff"* = "\u20d0-\u20ff"

*Defined in [src/core/string.ts:34](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L34)*

___

### `Const` rsDigits

• **rsDigits**: *"\d+"* = "\d+"

*Defined in [src/core/string.ts:49](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L49)*

___

### `Const` rsDingbat

• **rsDingbat**: *string* = '[' + rsDingbatRange + ']'

*Defined in [src/core/string.ts:50](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L50)*

___

### `Const` rsDingbatRange

• **rsDingbatRange**: *"\u2700-\u27bf"* = "\u2700-\u27bf"

*Defined in [src/core/string.ts:36](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L36)*

___

### `Const` rsEmoji

• **rsEmoji**: *string* = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq

*Defined in [src/core/string.ts:71](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L71)*

___

### `Const` rsFitz

• **rsFitz**: *"\ud83c[\udffb-\udfff]"* = "\ud83c[\udffb-\udfff]"

*Defined in [src/core/string.ts:53](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L53)*

___

### `Const` rsLower

• **rsLower**: *string* = '[' + rsLowerRange + ']'

*Defined in [src/core/string.ts:51](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L51)*

___

### `Const` rsLowerRange

• **rsLowerRange**: *"a-z\xdf-\xf6\xf8-\xff"* = "a-z\xdf-\xf6\xf8-\xff"

*Defined in [src/core/string.ts:37](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L37)*

___

### `Const` rsMathOpRange

• **rsMathOpRange**: *"\xac\xb1\xd7\xf7"* = "\xac\xb1\xd7\xf7"

*Defined in [src/core/string.ts:38](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L38)*

___

### `Const` rsMisc

• **rsMisc**: *string* = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']'

*Defined in [src/core/string.ts:52](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L52)*

___

### `Const` rsMiscLower

• **rsMiscLower**: *string* = '(?:' + rsLower + '|' + rsMisc + ')'

*Defined in [src/core/string.ts:61](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L61)*

___

### `Const` rsMiscUpper

• **rsMiscUpper**: *string* = '(?:' + rsUpper + '|' + rsMisc + ')'

*Defined in [src/core/string.ts:62](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L62)*

___

### `Const` rsModifier

• **rsModifier**: *string* = '(?:' + rsCombo + '|' + rsFitz + ')'

*Defined in [src/core/string.ts:54](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L54)*

___

### `Const` rsNonAstral

• **rsNonAstral**: *string* = '[^' + rsAstralRange + ']'

*Defined in [src/core/string.ts:55](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L55)*

___

### `Const` rsNonCharRange

• **rsNonCharRange**: *"\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf"* = "\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf"

*Defined in [src/core/string.ts:39](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L39)*

___

### `Const` rsOptContrLower

• **rsOptContrLower**: *string* = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?'

*Defined in [src/core/string.ts:63](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L63)*

___

### `Const` rsOptContrUpper

• **rsOptContrUpper**: *string* = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?'

*Defined in [src/core/string.ts:64](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L64)*

___

### `Const` rsOptJoin

• **rsOptJoin**: *string* = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*'

*Defined in [src/core/string.ts:67](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L67)*

___

### `Const` rsOptVar

• **rsOptVar**: *string* = '[' + rsVarRange + ']?'

*Defined in [src/core/string.ts:66](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L66)*

___

### `Const` rsOrdLower

• **rsOrdLower**: *"\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])"* = "\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])"

*Defined in [src/core/string.ts:68](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L68)*

___

### `Const` rsOrdUpper

• **rsOrdUpper**: *"\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])"* = "\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])"

*Defined in [src/core/string.ts:69](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L69)*

___

### `Const` rsPunctuationRange

• **rsPunctuationRange**: *"\u2000-\u206f"* = "\u2000-\u206f"

*Defined in [src/core/string.ts:40](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L40)*

___

### `Const` rsRegional

• **rsRegional**: *"(?:\ud83c[\udde6-\uddff]){2}"* = "(?:\ud83c[\udde6-\uddff]){2}"

*Defined in [src/core/string.ts:56](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L56)*

___

### `Const` rsSeq

• **rsSeq**: *string* = rsOptVar + reOptMod + rsOptJoin

*Defined in [src/core/string.ts:70](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L70)*

___

### `Const` rsSpaceRange

• **rsSpaceRange**: *" \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000"* = " \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000"

*Defined in [src/core/string.ts:41](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L41)*

___

### `Const` rsSurrPair

• **rsSurrPair**: *"[\ud800-\udbff][\udc00-\udfff]"* = "[\ud800-\udbff][\udc00-\udfff]"

*Defined in [src/core/string.ts:57](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L57)*

___

### `Const` rsUpper

• **rsUpper**: *string* = '[' + rsUpperRange + ']'

*Defined in [src/core/string.ts:58](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L58)*

___

### `Const` rsUpperRange

• **rsUpperRange**: *"A-Z\xc0-\xd6\xd8-\xde"* = "A-Z\xc0-\xd6\xd8-\xde"

*Defined in [src/core/string.ts:42](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L42)*

___

### `Const` rsVarRange

• **rsVarRange**: *"\ufe0e\ufe0f"* = "\ufe0e\ufe0f"

*Defined in [src/core/string.ts:43](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L43)*

___

### `Const` rsZWJ

• **rsZWJ**: *"\u200d"* = "\u200d"

*Defined in [src/core/string.ts:59](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L59)*

___

### `Const` unescapeHtmlChar

• **unescapeHtmlChar**: *(Anonymous function)* = basePropertyOf(htmlUnescapes)

*Defined in [src/core/string.ts:124](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L124)*

## Functions

###  asciiWords

▸ **asciiWords**(`string`: any): *any*

*Defined in [src/core/string.ts:90](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`string` | any |

**Returns:** *any*

___

###  basePropertyOf

▸ **basePropertyOf**(`object`: any): *(Anonymous function)*

*Defined in [src/core/string.ts:103](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *(Anonymous function)*

___

###  escape

▸ **escape**(`string`: any): *any*

*Defined in [src/core/string.ts:137](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`string` | any |

**Returns:** *any*

___

###  escapeRegExp

▸ **escapeRegExp**(`string`: any): *any*

*Defined in [src/core/string.ts:146](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L146)*

**Parameters:**

Name | Type |
------ | ------ |
`string` | any |

**Returns:** *any*

___

###  hasUnicodeWord

▸ **hasUnicodeWord**(`string`: any): *boolean*

*Defined in [src/core/string.ts:27](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`string` | any |

**Returns:** *boolean*

___

###  trimChar

▸ **trimChar**(`string`: any, `charToRemove`: any, `mode`: number): *any*

*Defined in [src/core/string.ts:8](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L8)*

trim a string

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`string` | any | - | - |
`charToRemove` | any | - | - |
`mode` | number | 0 | remove from start => 0 remove at end => 1 remove both => 2  |

**Returns:** *any*

___

###  unescape

▸ **unescape**(`string`: any): *any*

*Defined in [src/core/string.ts:132](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`string` | any |

**Returns:** *any*

___

###  unicodeWords

▸ **unicodeWords**(`string`: any): *any*

*Defined in [src/core/string.ts:84](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`string` | any |

**Returns:** *any*

___

###  words

▸ **words**(`string`: any, `pattern`: any, `guard`: any): *any*

*Defined in [src/core/string.ts:94](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L94)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`string` | any | - |
`pattern` | any | - |
`guard` | any | null |

**Returns:** *any*

## Object literals

### `Const` htmlEscapes

### ▪ **htmlEscapes**: *object*

*Defined in [src/core/string.ts:116](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L116)*

###  "

• **"**: *string* = "&quot;"

*Defined in [src/core/string.ts:120](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L120)*

###  &

• **&**: *string* = "&amp;"

*Defined in [src/core/string.ts:117](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L117)*

###  '

• **'**: *string* = "&#39;"

*Defined in [src/core/string.ts:121](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L121)*

###  <

• **<**: *string* = "&lt;"

*Defined in [src/core/string.ts:118](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L118)*

###  >

• **>**: *string* = "&gt;"

*Defined in [src/core/string.ts:119](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L119)*

___

### `Const` htmlUnescapes

### ▪ **htmlUnescapes**: *object*

*Defined in [src/core/string.ts:109](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L109)*

###  &#39;

• **&#39;**: *string* = "'"

*Defined in [src/core/string.ts:114](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L114)*

###  &amp;

• **&amp;**: *string* = "&"

*Defined in [src/core/string.ts:110](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L110)*

###  &gt;

• **&gt;**: *string* = ">"

*Defined in [src/core/string.ts:112](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L112)*

###  &lt;

• **&lt;**: *string* = "<"

*Defined in [src/core/string.ts:111](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L111)*

###  &quot;

• **&quot;**: *string* = """

*Defined in [src/core/string.ts:113](https://github.com/nodejayes/ts-tooling/blob/ad92cc8/src/core/string.ts#L113)*
