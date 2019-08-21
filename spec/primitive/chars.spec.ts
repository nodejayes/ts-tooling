import {assert} from 'chai';
import {Chars, Integer} from "../../src/ts-tooling";

describe('Chars Tests', () => {
    it('can create empty Chars', () => {
        assert.isNull(new Chars().Value);
    });

    it('can create predefined Chars', () => {
        assert.equal(new Chars('abc').Value, 'abc');
    });

    it('can have Length', () => {
        assert.equal(new Chars('abc').Length.Value, 3);
    });

    it('can convert to CamelCase', () => {
        assert.equal(new Chars('Foo Bar').ToCamelCase().Value, 'fooBar');
        assert.equal(new Chars('--foo-bar--').ToCamelCase().Value, 'fooBar');
        assert.equal(new Chars('__FOO_BAR__').ToCamelCase().Value, 'fooBar');
    });

    it('can convert to KebabCase', () => {
        assert.equal(new Chars('Foo Bar').ToKebabCase().Value, 'foo-bar');
        assert.equal(new Chars('fooBar').ToKebabCase().Value, 'foo-bar');
        assert.equal(new Chars('__FOO_BAR__').ToKebabCase().Value, 'foo-bar');
    });

    it('can convert to SnakeCase', () => {
        assert.equal(new Chars('Foo Bar').ToSnakeCase().Value, 'foo_bar');
        assert.equal(new Chars('fooBar').ToSnakeCase().Value, 'foo_bar');
        assert.equal(new Chars('--FOO-BAR--').ToSnakeCase().Value, 'foo_bar');
    });

    it('can convert to StartCase', () => {
        assert.equal(new Chars('--foo-bar--').ToStartCase().Value, 'Foo Bar');
        assert.equal(new Chars('fooBar').ToStartCase().Value, 'Foo Bar');
        assert.equal(new Chars('__FOO_BAR__').ToStartCase().Value, 'FOO BAR');
    });

    it('can convert to Capitalize', () => {
        assert.equal(new Chars('hello').Capitalize().Value, 'Hello');
        assert.equal(new Chars('HELLO').Capitalize().Value, 'Hello');
        assert.equal(new Chars('Hello').Capitalize().Value, 'Hello');
    });

    it('can convert to Lower First', () => {
        assert.equal(new Chars('hello').LowerFirst().Value, 'hello');
        assert.equal(new Chars('HELLO').LowerFirst().Value, 'hELLO');
        assert.equal(new Chars('Hello').LowerFirst().Value, 'hello');
    });

    it('can deburr to latin 1', () => {
        assert.equal(new Chars('déjà vu').Deburr().Value, 'deja vu');
    });

    it('can check Chars Starts With', () => {
        assert.isTrue(new Chars('abcdefg').StartsWith(new Chars('abc')));
        assert.isTrue(new Chars('abcdefg').StartsWith(new Chars('b'), new Integer(1)));
        assert.isFalse(new Chars('abcdefg').StartsWith(new Chars('b'), new Integer(2)));
        assert.isFalse(new Chars('abcdefg').StartsWith(new Chars('z')));
    });

    it('can check Chars Ends With', () => {
        assert.isTrue(new Chars('abcdefg').EndsWith(new Chars('efg')));
        assert.isTrue(new Chars('abcdefg').EndsWith(new Chars('f'), new Integer(6)));
        assert.isFalse(new Chars('abcdefg').EndsWith(new Chars('f'), new Integer(1)));
        assert.isFalse(new Chars('abcdefg').EndsWith(new Chars('z')));
    });

    it('can escape HTML', () => {
        assert.equal(new Chars('fred, barney, & pebbles').HTMLEscape().Value, 'fred, barney, &amp; pebbles');
    });

    it('can escape RegExp', () => {
        assert.equal(new Chars('[lodash](https://lodash.com/)').RegExpEscape().Value, '\\[lodash\\]\\(https://lodash\\.com/\\)');
    });

    it('can convert to Lower Case', () => {
        assert.equal(new Chars('HELLO').ToLowerCase().Value, 'hello');
    });

    it('can Pad String Left Right and Both', () => {
        assert.equal(new Chars('abc').Pad(new Integer(8), new Chars('_-')).Value, '_-abc_-_');
        assert.equal(new Chars('abc').Pad(new Integer(8)).Value, '  abc   ');
        assert.equal(new Chars('abc').PadRight(new Integer(5), new Chars('_')).Value, 'abc__');
        assert.equal(new Chars('abc').PadRight(new Integer(5)).Value, 'abc  ');
        assert.equal(new Chars('abc').PadLeft(new Integer(5), new Chars('_')).Value, '__abc');
        assert.equal(new Chars('abc').PadLeft(new Integer(5)).Value, '  abc');
    });

    it('can repeat the String', () => {
        assert.equal(new Chars('*').Repeat(new Integer(3)).Value, '***');
    });

    it('can replace in String', () => {
        assert.equal(new Chars('abcddde').Replace(new Chars('d'), new Chars('z')).Value, 'abczdde');
        assert.equal(new Chars('abcddde').ReplaceAll(new Chars('d'), new Chars('z')).Value, 'abczzze');
    });

    it('can split Chars to List', () => {
        assert.equal(new Chars('abbbbabbbac').Split(new Chars('a')).Count.Value, 4);
        assert.equal(new Chars('abbbbabbbac').Split(new Chars('a')).ElementAt(new Integer(0)).Value, null);
        assert.equal(new Chars('abbbbabbbac').Split(new Chars('a')).ElementAt(new Integer(1)).Value, 'bbbb');
        assert.equal(new Chars('abbbbabbbac').Split(new Chars('a')).ElementAt(new Integer(2)).Value, 'bbb');
        assert.equal(new Chars('abbbbabbbac').Split(new Chars('a')).ElementAt(new Integer(3)).Value, 'c');
    });

    it('can make Chars to lower String', () => {
        assert.equal(new Chars('ABC').ToLower().Value, 'abc');
    });

    it('can make Chars to upper String', () => {
        assert.equal(new Chars('abc').ToUpper().Value, 'ABC');
        assert.equal(new Chars('abc').ToUpperCase().Value, 'ABC');
        assert.equal(new Chars('abc').UpperFirst().Value, 'Abc');
    });

    it('can trim Chars', () => {
        assert.equal(new Chars('  abc  ').Trim(new Chars(' ')).Value, 'abc');
        assert.equal(new Chars('  abc  ').TrimEnd(new Chars(' ')).Value, '  abc');
        assert.equal(new Chars('  abc  ').TrimStart(new Chars(' ')).Value, 'abc  ');
    });

    it('can truncate Chars', () => {
        assert.equal(new Chars('##-##Chars##-##').Truncate(new Integer(5)).Value, '##...');
        assert.equal(new Chars('##-##Chars##-##').Truncate(new Integer(5), new Chars('X')).Value, '##-#X');
        assert.equal(new Chars('##-##Chars##-##').Truncate(new Integer(5), new Chars('X'), new Chars('-')).Value, '##X');
    });

    it('can split by words', () => {
        assert.equal(new Chars('hello is a word of a sentence').Words().Count.Value, 7);
        assert.equal(new Chars('hello is a word of a sentence').Words().ElementAt(new Integer(0)).Value, 'hello');
        assert.equal(new Chars('hello is a word of a sentence').Words().ElementAt(new Integer(1)).Value, 'is');
        assert.equal(new Chars('hello is a word of a sentence').Words().ElementAt(new Integer(2)).Value, 'a');
        assert.equal(new Chars('hello is a word of a sentence').Words().ElementAt(new Integer(3)).Value, 'word');
        assert.equal(new Chars('hello is a word of a sentence').Words().ElementAt(new Integer(4)).Value, 'of');
        assert.equal(new Chars('hello is a word of a sentence').Words().ElementAt(new Integer(5)).Value, 'a');
        assert.equal(new Chars('hello is a word of a sentence').Words().ElementAt(new Integer(6)).Value, 'sentence');
    });

    it('can unescape HTML', () => {
        assert.equal(new Chars('fred, barney, &amp; pebbles').HTMLUnescape().Value, 'fred, barney, & pebbles');
    });

    it('can clone Instance', () => {
        const text = new Chars('Hello');
        const textClone = text.Clone();
        assert.notEqual(text, textClone);
    });

    it('can check contains', () => {
        assert.isTrue(new Chars('abbbc').Contains(new Chars('bbb')));
        assert.isTrue(new Chars('abbbc').Contains(new Chars('b')));
        assert.isFalse(new Chars('abbbc').Contains(new Chars('xxx')));
    });

    it('can check Equals', () => {
        assert.isTrue(new Chars('abc').Equals(new Chars('abc')));
        assert.isFalse(new Chars('abcx').Equals(new Chars('abc')));
    });

    it('can insert chars into chars', () => {
        assert.equal(new Chars('abc').Insert(new Integer(1), new Chars('x')).Value, 'axbc');
    });

    it('can Remove chars', () => {
        assert.equal(new Chars('axbc').Remove(new Integer(1)).Value, 'abc');
        assert.equal(new Chars('axbc').Remove(new Integer(1), new Integer(3)).Value, 'a');
    });

    it('can Substring', () => {
        assert.equal(new Chars('aaaaa').Substring(new Integer(1)).Value, 'aaaa');
        assert.equal(new Chars('aaaaa').Substring(new Integer(1), new Integer(1)).Value, 'a');
    });

    it('can get Index', () => {
        assert.equal(new Chars('aaaaa').IndexOf(new Chars('a')).Value, 0);
    });

    it('can get last Index', () => {
        assert.equal(new Chars('aaaaa').LastIndexOf(new Chars('a')).Value, 4);
    });

    it('extends the basic javascript String', () => {
        assert.equal('Hello'.ToChars().Value, 'Hello');
        assert.equal('1'.ToInteger().Value, 1);
        assert.equal('1.5'.ToDouble().Value, 1.5);
    });
});
