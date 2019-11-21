import '../../src/ts-tooling.node'
import {assert} from 'chai';
import 'mocha';
import {StringFactory} from "../../src/utils/string.factory";

describe('String Extension Tests', () => {
    it('get Character at Position (CharAt)', () => {
        assert.equal('Hello'.CharAt(0), 'H');
        assert.equal('Hello'.CharAt(4), 'o');
        assert.throws(() => {
            'Hello'.CharAt(5)
        });
    });

    it('can create predefined Chars', () => {
        assert.equal('abc', 'abc');
    });

    it('can have Length', () => {
        assert.equal('abc'.length, 3);
    });

    it('can convert to CamelCase', () => {
        assert.equal('Foo Bar'.ToCamelCase(), 'fooBar');
        assert.equal('--foo-bar--'.ToCamelCase(), 'fooBar');
        assert.equal('__FOO_BAR__'.ToCamelCase(), 'fooBar');
    });

    it('can convert to KebabCase', () => {
        assert.equal('Foo Bar'.ToKebabCase(), 'foo-bar');
        assert.equal('fooBar'.ToKebabCase(), 'foo-bar');
        assert.equal('__FOO_BAR__'.ToKebabCase(), 'foo-bar');
    });

    it('can convert to SnakeCase', () => {
        assert.equal('Foo Bar'.ToSnakeCase(), 'foo_bar');
        assert.equal('fooBar'.ToSnakeCase(), 'foo_bar');
        assert.equal('--FOO-BAR--'.ToSnakeCase(), 'foo_bar');
    });

    it('can convert to StartCase', () => {
        assert.equal('--foo-bar--'.ToStartCase(), 'Foo Bar');
        assert.equal('fooBar'.ToStartCase(), 'Foo Bar');
        assert.equal('__FOO_BAR__'.ToStartCase(), 'FOO BAR');
    });

    it('can convert to Capitalize', () => {
        assert.equal('hello'.Capitalize(), 'Hello');
        assert.equal('HELLO'.Capitalize(), 'Hello');
        assert.equal('Hello'.Capitalize(), 'Hello');
    });

    it('can convert to Lower First', () => {
        assert.equal('hello'.LowerFirst(), 'hello');
        assert.equal('HELLO'.LowerFirst(), 'hELLO');
        assert.equal('Hello'.LowerFirst(), 'hello');
    });

    it('can deburr to latin 1', () => {
        assert.equal('déjà vu'.Deburr(), 'deja vu');
    });

    it('can check Chars Starts With', () => {
        assert.isTrue('abcdefg'.StartsWith('abc'));
        assert.isTrue('abcdefg'.StartsWith('b', 1));
        assert.isFalse('abcdefg'.StartsWith('b', 2));
        assert.isFalse('abcdefg'.StartsWith('z'));
    });

    it('can check Chars Ends With', () => {
        assert.isTrue('abcdefg'.EndsWith('efg'));
        assert.isTrue('abcdefg'.EndsWith('f', 6));
        assert.isFalse('abcdefg'.EndsWith('f', 1));
        assert.isFalse('abcdefg'.EndsWith('z'));
    });

    it('can escape HTML', () => {
        assert.equal('fred, barney, & pebbles'.HTMLEscape(), 'fred, barney, &amp; pebbles');
    });

    it('can escape RegExp', () => {
        assert.equal('[lodash](https://lodash.com/)'.RegExpEscape(), '\\[lodash\\]\\(https://lodash\\.com/\\)');
    });

    it('can convert to Lower Case', () => {
        assert.equal('HELLO'.ToLowerCase(), 'hello');
    });

    it('can Pad String Left Right and Both', () => {
        assert.equal('abc'.Pad(8, '_-'), '_-abc_-_');
        assert.equal('abc'.Pad(8), '  abc   ');
        assert.equal('abc'.PadRight(5, '_'), 'abc__');
        assert.equal('abc'.PadRight(5), 'abc  ');
        assert.equal('abc'.PadLeft(5, '_'), '__abc');
        assert.equal('abc'.PadLeft(5), '  abc');
    });

    it('can repeat the String', () => {
        assert.equal('*'.Repeat(3), '***');
    });

    it('can replace in String', () => {
        assert.equal('abcddde'.Replace('d', 'z'), 'abczdde');
        assert.equal('abcddde'.ReplaceAll('d', 'z'), 'abczzze');
        assert.equal('abcddde'.ReplaceAll('d', ''), 'abce');
    });

    it('can split Chars to List', () => {
        assert.equal('abbbbabbbac'.Split('a').Count(), 3);
        assert.equal('abbbbabbbac'.Split('a').ElementAt(0), 'bbbb');
        assert.equal('abbbbabbbac'.Split('a').ElementAt(1), 'bbb');
        assert.equal('abbbbabbbac'.Split('a').ElementAt(2), 'c');
    });

    it('can make Chars to lower String', () => {
        assert.equal('ABC'.ToLower(), 'abc');
    });

    it('can make Chars to upper String', () => {
        assert.equal('abc'.ToUpper(), 'ABC');
        assert.equal('abc'.ToUpperCase(), 'ABC');
        assert.equal('abc'.UpperFirst(), 'Abc');
    });

    it('can trim Chars', () => {
        assert.equal('  abc  '.Trim(' '), 'abc');
        assert.equal('  abc  '.TrimEnd(' '), '  abc');
        assert.equal('  abc  '.TrimStart(' '), 'abc  ');
    });

    it('can truncate Chars', () => {
        assert.equal('##-##Chars##-##'.Truncate(5), '##...');
        assert.equal('##-##Chars##-##'.Truncate(5, 'X'), '##-#X');
        assert.equal('##-##Chars##-##'.Truncate(5, 'X', '-'), '##X');
    });

    it('can split by words', () => {
        assert.equal('hello is a word of a sentence'.Words().Count(), 7);
        assert.equal('hello is a word of a sentence'.Words().ElementAt(0), 'hello');
        assert.equal('hello is a word of a sentence'.Words().ElementAt(1), 'is');
        assert.equal('hello is a word of a sentence'.Words().ElementAt(2), 'a');
        assert.equal('hello is a word of a sentence'.Words().ElementAt(3), 'word');
        assert.equal('hello is a word of a sentence'.Words().ElementAt(4), 'of');
        assert.equal('hello is a word of a sentence'.Words().ElementAt(5), 'a');
        assert.equal('hello is a word of a sentence'.Words().ElementAt(6), 'sentence');
    });

    it('can unescape HTML', () => {
        assert.equal('fred, barney, &amp; pebbles'.HTMLUnescape(), 'fred, barney, & pebbles');
    });

    it('can clone Instance', () => {
        const text = 'Hello';
        const textClone = text.Clone();
        assert.equal(text, textClone);
    });

    it('can check contains', () => {
        assert.isTrue('abbbc'.Contains('bbb'));
        assert.isTrue('abbbc'.Contains('b'));
        assert.isFalse('abbbc'.Contains('xxx'));
    });

    it('can check Equals', () => {
        assert.isTrue('abc'.Equals('abc'));
        assert.isFalse('abcx'.Equals('abc'));
    });

    it('can insert chars into chars', () => {
        assert.equal('abc'.Insert(1, 'x'), 'axbc');
    });

    it('can Remove chars', () => {
        assert.equal('axbc'.Remove(1), 'abc');
        assert.equal('axbc'.Remove(1, 3), 'a');
    });

    it('can Substring', () => {
        assert.equal('aaaaa'.Substring(1), 'aaaa');
        assert.equal('aaaaa'.Substring(1, 1), 'a');
    });

    it('can get Index', () => {
        assert.equal('aaaaa'.IndexOf('a'), 0);
    });

    it('can get last Index', () => {
        assert.equal('aaaaa'.LastIndexOf('a'), 4);
    });

    it('extends the basic javascript String', () => {
        assert.equal('1'.ToInteger(), 1);
        assert.equal('aaa'.ToInteger(), 0);
        assert.equal('1.5'.ToDouble(), 1.5);
        assert.equal('bbb'.ToDouble(), 0.0);
    });

    it('can get Text between', () => {
        assert.equal('beforemodule@NgModule({betweenmodule})aftermodule'
            .TextBetween('@NgModule({', '})')
            .Count(), 1);
        assert.equal('beforemodule@NgModule({betweenmodule})aftermodule'
            .TextBetween('@NgModule({', '})')
            .ElementAt(0), 'betweenmodule');
        assert.equal('abcdefg'.TextBetween('a', 'c').Count(), 1);
        assert.equal('abcdefg'.TextBetween('a', 'c').ElementAt(0), 'b');
        assert.equal('abcdefg'.TextBetween('a', 'b').Count(), 0);
        assert.equal('abcdefgabcdefg'.TextBetween('a', 'c').Count(), 2);
        assert.equal('abcdefgabcdefg'.TextBetween('a', 'c').ElementAt(0), 'b');
        assert.equal('abcdefgabcdefg'.TextBetween('a', 'c').ElementAt(1), 'b');
        assert.equal('abbcbbcdefgabcdefg'.TextBetween('a', 'c').Count(), 2);
        assert.equal('abbcbbcdefgabcdefg'.TextBetween('a', 'c').ElementAt(0), 'bb');
        assert.equal('abbcbbcdefgabcdefg'.TextBetween('a', 'c').ElementAt(1), 'b');
    });

    it('can get a char at position', () => {
        assert.equal('abc'.CharAt(0), 'a');
        assert.equal('abc'.CharAt(1), 'b');
        assert.equal('abc'.CharAt(2), 'c');
        assert.throws(() => {
            'abc'.CharAt(3);
        }, 'the string has not enough Characters searching 3 string length are 3');
    });

    it('can count containing strings', () => {
        assert.equal('zzabcabcabczz'.ContainsCount('a'), 3);
        assert.equal('zzabcabcabczz'.ContainsCount('abc'), 3);
        assert.equal('zzabcabcabczz'.ContainsCount('zz'), 2);
        assert.equal('zzabcabcabczz'.ContainsCount('u'), 0);
        assert.equal('zzabcabcabczz'.ContainsCount('cabc'), 1);
        assert.equal('zzabcabcabczz'.ContainsCount('cabc', true), 2);
    });

    it('check if string is Empty', () => {
        assert.isFalse(StringFactory.IsNullOrEmpty('a'));
        assert.isTrue(StringFactory.IsNullOrEmpty(''));
        assert.isTrue(StringFactory.IsNullOrEmpty(null));
    });

    it('can Concat Chars', () => {
        assert.equal('a'.Concat('b'), 'ab');
        assert.equal('a'.Concat('b', '#'), 'a#b');
    });

    it('can Join Chars', () => {
        const list = [
            'a',
            'b',
            'c',
        ];
        const target = '';
        assert.equal(target.Join(list, ','), 'a,b,c');
    });
});
