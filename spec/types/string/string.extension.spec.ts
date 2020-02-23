import '../../../src/ts-tooling'
import {assert} from 'chai';
import 'mocha';

describe('String Extensions Tests', () => {
    describe('[Method]: CharAt', () => {
        it('the first Character (0) of the String "Hello" is "H"', () => {
            assert.equal('Hello'.CharAt(0), 'H');
        });
        it('the fifth Character of the String "Hello" "o"', () => {
            assert.equal('Hello'.CharAt(4), 'o');
        });
        it('throws Error when get sixth Character of the String "Hello"', () => {
            assert.throw(() => 'Hello'.CharAt(5));
        });
    });
    describe('[Method]: Capitalize', () => {
        it('"hello" converts to "Hello"', () => {
            assert.equal('hello'.Capitalize(), 'Hello');
        });
        it('"HELLO" converts to "Hello"', () => {
            assert.equal('HELLO'.Capitalize(), 'Hello');
        });
        it('"Hello" converts to "Hello"', () => {
            assert.equal('Hello'.Capitalize(), 'Hello');
        });
    });
    describe('[Method]: StartsWith', () => {
        it('get true-back if the string starts with the string', () => {
            assert.isTrue('abcdefg'.StartsWith('abc'));
        });
        it('get true back if the string starts with offset', () => {
            assert.isTrue('abcdefg'.StartsWith('b', 1));
        });
        it('returns false, if the letter is present in the string but not at the beginning', () => {
            assert.isFalse('abcdefg'.StartsWith('b', 2));
        });
        it('returns false, if the letter is not present in the string', () => {
            assert.isFalse('abcdefg'.StartsWith('z'));
        });
    });
    describe('[Method]: EndsWith', () => {
        it('get true-back if the string ends with the string', () => {
            assert.isTrue('abcdefg'.EndsWith('efg'));
        });
        it('get true back if the string ends with offset', () => {
            assert.isTrue('abcdefg'.EndsWith('f', 6));
        });
        it('returns false, if the letter is present in the string but not at the end', () => {
            assert.isFalse('abcdefg'.EndsWith('f', 1));
        });
        it('returns false, if the letter is not present in the string', () => {
            assert.isFalse('abcdefg'.EndsWith('z'));
        });
    });
    describe('[Method]: HTMLEscape', () => {
        it('escape HTML String', () => {
            assert.equal('fred, barney, & pebbles'.HTMLEscape(), 'fred, barney, &amp; pebbles');
        });
        it('not touch non HTML String', () => {
            assert.equal('fred, barney, pebbles'.HTMLEscape(), 'fred, barney, pebbles');
        });
    });
    describe('[Method]: HTMLUnescape', () => {
        it('unescape escaped HTML', () => {
            assert.equal('fred, barney, &amp; pebbles'.HTMLUnescape(), 'fred, barney, & pebbles');
        });
        it('not touch non HTML String', () => {
            assert.equal('fred, barney, pebbles'.HTMLUnescape(), 'fred, barney, pebbles');
        });
    });
    describe('[Method]: RegExpEscape', () => {
        it('escape RegExp', () => {
            assert.equal('[lodash](https://lodash.com/)'.RegExpEscape(), '\\[lodash\\]\\(https://lodash\\.com/\\)');
        });
    });
    describe('[Method]: ToCamelCase', () => {
        it('from Start Case', () => {
            assert.equal('Foo Bar'.ToCamelCase(), 'fooBar');
        });
        it('from Kebabcase', () => {
            assert.equal('--foo-bar--'.ToCamelCase(), 'fooBar');
        });
        it('from Snakecase', () => {
            assert.equal('__FOO_BAR__'.ToCamelCase(), 'fooBar');
        });
    });
    describe('[Method]: ToKebabCase', () => {
        it('from Start Case', () => {
            assert.equal('Foo Bar'.ToKebabCase(), 'foo-bar');
        });
        it('from CamelCase', () => {
            assert.equal('fooBar'.ToKebabCase(), 'foo-bar');
        });
        it('from Snake Case', () => {
            assert.equal('__FOO_BAR__'.ToKebabCase(), 'foo-bar');
        });
    });
    describe('[Method]: ToSnakeCase', () => {
        it('from Start Case', () => {
            assert.equal('Foo Bar'.ToSnakeCase(), 'foo_bar');
        });
        it('from Camel Case', () => {
            assert.equal('fooBar'.ToSnakeCase(), 'foo_bar');
        });
        it('from Kebab Case', () => {
            assert.equal('--FOO-BAR--'.ToSnakeCase(), 'foo_bar');
        });
    });
    describe('[Method]: ToCapitalCase', () => {
        it('from Kebab Case', () => {
            assert.equal('--foo-bar--'.ToCapitalCase(), 'Foo Bar');
        });
        it('from Camel Case', () => {
            assert.equal('fooBar'.ToCapitalCase(), 'Foo Bar');
        });
        it('from Snake Case', () => {
            assert.equal('__FOO_BAR__'.ToCapitalCase(), 'Foo Bar');
        });
    });
    describe('[Method]: ToConstantCase', () => {
        it('from Kebab Case', () => {
            assert.equal('--foo-bar--'.ToConstantCase(), 'FOO_BAR');
        });
        it('from Camel Case', () => {
            assert.equal('fooBar'.ToConstantCase(), 'FOO_BAR');
        });
        it('from Snake Case', () => {
            assert.equal('__FOO_BAR__'.ToConstantCase(), 'FOO_BAR');
        });
    });
    describe('[Method]: ToDotCase', () => {
        it('from Kebab Case', () => {
            assert.equal('--foo-bar--'.ToDotCase(), 'foo.bar');
        });
        it('from Camel Case', () => {
            assert.equal('fooBar'.ToDotCase(), 'foo.bar');
        });
        it('from Snake Case', () => {
            assert.equal('__FOO_BAR__'.ToDotCase(), 'foo.bar');
        });
    });
    describe('[Method]: ToNoCase', () => {
        it('from Kebab Case', () => {
            assert.equal('--foo-bar--'.ToNoCase(), 'foo bar');
        });
        it('from Camel Case', () => {
            assert.equal('fooBar'.ToNoCase(), 'foo bar');
        });
        it('from Snake Case', () => {
            assert.equal('__FOO_BAR__'.ToNoCase(), 'foo bar');
        });
    });
    describe('[Method]: ToPathCase', () => {
        it('from Kebab Case', () => {
            assert.equal('--foo-bar--'.ToPathCase(), 'foo/bar');
        });
        it('from Camel Case', () => {
            assert.equal('fooBar'.ToPathCase(), 'foo/bar');
        });
        it('from Snake Case', () => {
            assert.equal('__FOO_BAR__'.ToPathCase(), 'foo/bar');
        });
    });
    describe('[Method]: ToSentenceCase', () => {
        it('from Kebab Case', () => {
            assert.equal('--foo-bar--'.ToSentenceCase(), 'Foo bar');
        });
        it('from Camel Case', () => {
            assert.equal('fooBar'.ToSentenceCase(), 'Foo bar');
        });
        it('from Snake Case', () => {
            assert.equal('__FOO_BAR__'.ToSentenceCase(), 'Foo bar');
        });
    });
    describe('[Method]: ToPascalCase', () => {
        it('from Kebab Case', () => {
            assert.equal('--foo-bar--'.ToPascalCase(), 'FooBar');
        });
        it('from Camel Case', () => {
            assert.equal('fooBar'.ToPascalCase(), 'FooBar');
        });
        it('from Snake Case', () => {
            assert.equal('__FOO_BAR__'.ToPascalCase(), 'FooBar');
        });
    });
    describe('[Method]: ToLowerCase', () => {
        it('make all letters to lower case', () => {
            assert.equal('HELLO'.ToLowerCase(), 'hello');
        });
        it('leaves lower case letters as it is', () => {
            assert.equal('hello'.ToLowerCase(), 'hello');
        });
    });
    describe('[Method]: ToUpperCase', () => {
        it('makes every letter to upper case', () => {
            assert.equal('hello'.ToUpperCase(), 'HELLO');
        });
        it('leaves upper case letters as it is', () => {
            assert.equal('HELLO'.ToUpperCase(), 'HELLO');
        });
    });
    describe('[Method]: LowerFirst', () => {
        it('if first letter lower case leave it as it is', () => {
            assert.equal('hello'.LowerFirst(), 'hello');
        });
        it('if the first letter upper case convert it to lower case', () => {
            assert.equal('Hello'.LowerFirst(), 'hello');
        });
        it('do not touch the other letters', () => {
            assert.equal('HELLO'.LowerFirst(), 'hELLO');
        });
    });
    describe('[Method]: UpperFirst', () => {
        it('if first letter upper case leave it as it is', () => {
            assert.equal('Hello'.UpperFirst(), 'Hello');
        });
        it('if the first letter lower case convert it to upper case', () => {
            assert.equal('hello'.UpperFirst(), 'Hello');
        });
        it('do not touch the other letters', () => {
            assert.equal('hELLO'.UpperFirst(), 'HELLO');
        });
    });
    describe('[Method]: Words', () => {
        it('can convert a simple whitespaced sentence', () => {
            assert.equal('hello is a word of a sentence'.Words().length, 7);
            assert.equal('hello is a word of a sentence'.Words()[0], 'hello');
            assert.equal('hello is a word of a sentence'.Words()[1], 'is');
            assert.equal('hello is a word of a sentence'.Words()[2], 'a');
            assert.equal('hello is a word of a sentence'.Words()[3], 'word');
            assert.equal('hello is a word of a sentence'.Words()[4], 'of');
            assert.equal('hello is a word of a sentence'.Words()[5], 'a');
            assert.equal('hello is a word of a sentence'.Words()[6], 'sentence');
        });
        it('use a custom pattern', () => {
            assert.equal('abcd'.Words(null, 'a').length, 1);
            assert.equal('abcd'.Words(null, 'a')[0], 'a');
        });
        it('add a word filter', () => {
            assert.equal('hello is a word of a sentence'
                .Words(e => [
                    'hello', 'word', 'sentence'].Contains(e)
                ).length, 3);
            assert.equal('hello is a word of a sentence'
                .Words(e => [
                    'hello', 'word', 'sentence'].Contains(e)
                )[0], 'hello');
            assert.equal('hello is a word of a sentence'
                .Words(e => [
                    'hello', 'word', 'sentence'].Contains(e)
                )[1], 'word');
            assert.equal('hello is a word of a sentence'
                .Words(e => [
                    'hello', 'word', 'sentence'].Contains(e)
                )[2], 'sentence');
        });
    });
    describe('[Method]: Concat', () => {
        it('concat a and b', () => {
            assert.equal('a'.Concat('b'), 'ab');
        });
        it('concat a and b with separator', () => {
            assert.equal('a'.Concat('b', '#'), 'a#b');
        });
        it('concat empty string', () => {
            assert.equal(''.Concat('b', '#'), 'b');
        });
    });
    describe('[Method]: Join', () => {
        it('concat multiple strings', () => {
            const list = ['a','b','c'];
            const target = 'test';
            assert.equal(target.Join(list), 'testabc');
        });
        it('concat multiple strings with separator', () => {
            const list = ['a','b','c'];
            const target = 'test';
            assert.equal(target.Join(list, '#'), 'test#a#b#c');
        });
        it('can join empty string', () => {
            const list = ['a','b','c'];
            const target = '';
            assert.equal(target.Join(list, '#'), 'a#b#c');
        });
        it('empty appender returns original string', () => {
            assert.equal(''.Join([]), '');
        });
    });
    describe('[Method]: Pad', () => {
        it('add custom letter on both sides', () => {
            assert.equal('abc'.Pad(8, '_-'), '_-abc_-_');
        });
        it('default letter is the Whitespace', () => {
            assert.equal('abc'.Pad(8), '  abc   ');
        });
        it('if string is to long return the original string', () => {
            assert.equal('abcdefg'.Pad(3, '-'), 'abcdefg');
        });
    });
    describe('[Method]: PadLeft', () => {
        it('add custom letter on the left side', () => {
            assert.equal('abc'.PadLeft(5, '_'), '__abc');
        });
        it('default letter is the Whitespace', () => {
            assert.equal('abc'.PadLeft(5), '  abc');
        });
        it('if string is to long return the original string', () => {
            assert.equal('abcdefg'.PadLeft(3, '-'), 'abcdefg');
        });
    });
    describe('[Method]: PadRight', () => {
        it('add custom letter on the right side', () => {
            assert.equal('abc'.PadRight(5, '_'), 'abc__');
        });
        it('default letter is the Whitespace', () => {
            assert.equal('abc'.PadRight(5), 'abc  ');
        });
        it('if string is to long return the original string', () => {
            assert.equal('abcdefg'.PadRight(3, '-'), 'abcdefg');
        });
    });
    describe('[Method]: Repeat', () => {
        it('repeat * 5 times', () => {
            assert.equal('*'.Repeat(5), '*****');
        });
        it('repeat longer string than one letter', () => {
            assert.equal('*.*'.Repeat(3), '*.**.**.*');
        });
    });
    describe('[Method]: Replace', () => {
        it('replace the first match when only one match', () => {
            assert.equal('abcdefg'.Replace('b', 'z'), 'azcdefg');
        });
        it('replace the first match when have multiple matches', () => {
            assert.equal('abbcdefg'.Replace('b', 'z'), 'azbcdefg');
        });
        it('do nothing when have no matches', () => {
            assert.equal('abcdefg'.Replace('x', 'z'), 'abcdefg');
        });
    });
    describe('[Method]: ReplaceAll', () => {
        it('replace all matches', () => {
            assert.equal('abbbcdebfg'.ReplaceAll('b', 'z'), 'azzzcdezfg');
        });
        it('do nothing when have no matches', () => {
            assert.equal('abcdefg'.ReplaceAll('x', 'z'), 'abcdefg');
        });
    });
    describe('[Method]: Split', () => {
        it('split with multiple separators', () => {
            assert.equal('abbbbabbbac'.Split('a').length, 3);
            assert.equal('abbbbabbbac'.Split('a')[0], 'bbbb');
            assert.equal('abbbbabbbac'.Split('a')[1], 'bbb');
            assert.equal('abbbbabbbac'.Split('a')[2], 'c');
        });
        it('return a array with single element when have no separators', () => {
            assert.equal('abbbbabbbac'.Split('z').length, 1);
            assert.equal('abbbbabbbac'.Split('z')[0], 'abbbbabbbac');
        });
    });
    describe('[Method]: ToLower', () => {
        it('convert all letters to lower', () => {
            assert.equal('aBaBaB'.ToLower(), 'ababab');
        });
        it('leave lower letters at it is', () => {
            assert.equal('ababab'.ToLower(), 'ababab');
        });
    });
    describe('[Method]: ToUpper', () => {
        it('convert all letters to upper', () => {
            assert.equal('aBaBaB'.ToUpper(), 'ABABAB');
        });
        it('leave upper letters at it is', () => {
            assert.equal('ABABAB'.ToUpper(), 'ABABAB');
        });
    });
    describe('[Method]: Trim', () => {
        it('removes underscores from start and the end', () => {
            assert.equal('___Test___'.Trim('_'), 'Test');
        });
        it('Whitespaces are removed as standard characters', () => {
            assert.equal('   Test   '.Trim(), 'Test');
        });
        it('stops at the first different letter', () => {
            assert.equal('  _ Test   '.Trim(), '_ Test');
        });
        it('can remove templates', () => {
            assert.equal('+.+_ Test   +.+'.Trim('+.+'), '_ Test   ');
        });
    });
    describe('[Method]: TrimStart', () => {
        it('removes underscores from start and the end', () => {
            assert.equal('___Test___'.TrimStart('_'), 'Test___');
        });
        it('Whitespaces are removed as standard characters', () => {
            assert.equal('   Test   '.TrimStart(), 'Test   ');
        });
        it('stops at the first different letter', () => {
            assert.equal('  _ Test   '.TrimStart(), '_ Test   ');
        });
        it('can remove templates', () => {
            assert.equal('+.+_ Test   +.+'.TrimStart('+.+'), '_ Test   +.+');
        });
    });
    describe('[Method]: TrimEnd', () => {
        it('removes underscores from start and the end', () => {
            assert.equal('___Test___'.TrimEnd('_'), '___Test');
        });
        it('Whitespaces are removed as standard characters', () => {
            assert.equal('   Test   '.TrimEnd(), '   Test');
        });
        it('stops at the first different letter', () => {
            assert.equal('  _ Test   '.TrimEnd(), '  _ Test');
        });
        it('can remove templates', () => {
            assert.equal('+.+_ Test   +.+'.TrimEnd('+.+'), '+.+_ Test   ');
        });
    });
    describe('[Method]: Truncate', () => {
        it('truncate a to long string', () => {
            assert.equal('##-##Chars##-##'.Truncate(5), '##...');
        });
        it('truncate a to short string', () => {
            assert.equal('##'.Truncate(5), '##');
        });
        it('custom end string', () => {
            assert.equal('##-##Chars##-##'.Truncate(5, 'X'), '##-#X');
            assert.equal('##-##Chars##-##'.Truncate(5, 'XX'), '##-XX');
        });
        it('stops at separator', () => {
            assert.equal('##-##Chars##-##'.Truncate(5, 'X', '-'), '##X');
        });
    });
    describe('[Method]: Copy', () => {
        it('has a new instance after copy', () => {
            const test = 'a';
            const clone = test.Copy();
            assert.equal(test, clone);
        });
    });
    describe('[Method]: Contains', () => {
        it('found single character', () => {
            assert.isTrue('abbbc'.Contains('b'));
        });
        it('found string template', () => {
            assert.isTrue('abbbc'.Contains('bbb'));
        });
        it('contains not the string returns false', () => {
            assert.isFalse('abbbc'.Contains('xxx'));
        });
    });
    describe('[Method]: ContainsCount', () => {
        it('count single character', () => {
            assert.equal('zzabcabcabczz'.ContainsCount('a'), 3);
        });
        it('count template string', () => {
            assert.equal('zzabcabcabczz'.ContainsCount('abc'), 3);
        });
        it('no match retuns 0', () => {
            assert.equal('zzabcabcabczz'.ContainsCount('u'), 0);
        });
        it('count overlaps strings', () => {
            assert.equal('zzabcabcabczz'.ContainsCount('cabc', true), 2);
        });
        it('search equal string returns 1', () => {
            assert.equal(' '.ContainsCount(' '), 1);
        });
        it('search is empty string returns 0', () => {
            assert.equal('xxxxxxxx'.ContainsCount(''), 0);
        });
    });
    describe('[Method]: Equals', () => {
        it('the same String returns true', () => {
            assert.isTrue('Test'.Equals('Test'));
        });
        it('not the same String returns false', () => {
            assert.isFalse('Test'.Equals('X'));
        });
        it('lowercase and uppercase are not the same', () => {
            assert.isFalse('Test'.Equals('test'));
        });
    });
    describe('[Method]: Insert', () => {
        it('add at the start', () => {
            assert.equal('abc'.Insert(0, 'x'), 'xabc');
        });
        it('add at the end', () => {
            assert.equal('abc'.Insert(3, 'x'), 'abcx');
        });
        it('add between', () => {
            assert.equal('abc'.Insert(1, 'x'), 'axbc');
        });
        it('index to low then add to start', () => {
            assert.equal('abc'.Insert(-1, 'x'), 'xabc');
        });
        it('index to high then add to end', () => {
            assert.equal('abc'.Insert(100, 'x'), 'abcx');
        });
    });
    describe('[Method]: Remove', () => {
        it('remove single character at position', () => {
            assert.equal('axbc'.Remove(1), 'abc');
        });
        it('remove 3 character at position', () => {
            assert.equal('axbc'.Remove(1, 3), 'a');
        });
        it('index to low removes at the start', () => {
            assert.equal('abc'.Remove(-1), 'bc');
        });
        it('index to low removes at the start with exact position', () => {
            assert.equal('abc'.Remove(-1, 2), 'c');
        });
        it('index to high remove the last character', () => {
            assert.equal('abcdef'.Remove(100), 'abcde');
        });
        it('index to high remove the last character with exact position', () => {
            assert.equal('abcdef'.Remove(100, 3), 'abc');
        });
        it('remove to many returns a empty string', () => {
            assert.equal('abc'.Remove(10, 5), '');
        });
    });
    describe('[Method]: Substring', () => {
        it('default give one character', () => {
            assert.equal('___Test'.Substring(0), '_');
        });
        it('get the first 3 letters of the string', () => {
            assert.equal('___Test'.Substring(0, 3), '___');
        });
        it('get the last 3 letters of the string', () => {
            assert.equal('Test___'.Substring(4, 3), '___');
        });
        it('get some letters in the middle of the string', () => {
            assert.equal('___Test'.Substring(3, 4), 'Test');
        });
        it('index to low gets from start', () => {
            assert.equal('Test'.Substring(-1, 2), 'Te');
        });
        it('index to high gets from end', () => {
            assert.equal('Test'.Substring(100, 2), 'st');
        });
        it('count to low get one character', () => {
            assert.equal('Test'.Substring(0, -1), 'T');
        });
        it('count to high give the remaining characters', () => {
            assert.equal('Test'.Substring(1, 100), 'est');
        });
    });
    describe('[Method]: ToInteger', () => {
        it('"1" converts to 1', () => {
            assert.equal('1'.ToInteger(), 1);
        });
        it('"1.5" converts to 1', () => {
            assert.equal('1.5'.ToInteger(), 1);
        });
        it('invalid converts to 0', () => {
            assert.equal('aaa'.ToInteger(), 0);
        });
    });
    describe('[Method]: ToDouble', () => {
        it('"1" converts to 1.0', () => {
            assert.equal('1'.ToDouble(), 1.0);
        });
        it('"1.0" converts to 1.0', () => {
            assert.equal('1.0'.ToDouble(), 1.0);
        });
        it('"1.5" converts to 1', () => {
            assert.equal('1.5'.ToDouble(), 1.5);
        });
        it('invalid converts to 0.0', () => {
            assert.equal('aaa'.ToDouble(), 0.0);
        });
    });
    describe('[Method]: IndexOf', () => {
        it('get the first position of a in string "aaaa"', () => {
            assert.equal('aaaaa'.IndexOf('a'), 0);
        });
        it('get the first position of b in string "abc"', () => {
            assert.equal('abc'.IndexOf('b'), 1);
        });
        it('get -1 when character not exists', () => {
            assert.equal('abc'.IndexOf('z'), -1);
        });
        it('get first position of string template in string', () => {
            assert.equal('abcabc'.IndexOf('abc'), 0);
        });
    });
    describe('[Method]: LastIndexOf', () => {
        it('get the last position of a in string "aaaa"', () => {
            assert.equal('aaaaa'.LastIndexOf('a'), 4);
        });
        it('get the last position of b in string "abc"', () => {
            assert.equal('abc'.LastIndexOf('b'), 1);
        });
        it('get -1 when character not exists', () => {
            assert.equal('abc'.LastIndexOf('z'), -1);
        });
        it('get last position of string template in string', () => {
            assert.equal('abcabc'.LastIndexOf('abc'), 3);
        });
    });
    describe('[Method]: TextBetween', () => {
        it('get text between 2 text marks', () => {
            assert.equal('beforemodule@NgModule({betweenmodule})aftermodule'.TextBetween('@NgModule({', '})').length, 1);
            assert.equal('beforemodule@NgModule({betweenmodule})aftermodule'.TextBetween('@NgModule({', '})')[0], 'betweenmodule');
        });
        it('get all text between 2 text marks', () => {
            assert.equal('beforemodule@NgModule({betweenmodule})aftermodulebeforemodule@NgModule({betweenmodule})aftermodule'
                .TextBetween('@NgModule({', '})').length, 2);
            assert.equal('beforemodule@NgModule({betweenmodule})aftermodulebeforemodule@NgModule({betweenmodule})aftermodule'
                .TextBetween('@NgModule({', '})')[0], 'betweenmodule');
            assert.equal('beforemodule@NgModule({betweenmodule})aftermodulebeforemodule@NgModule({betweenmodule})aftermodule'
                .TextBetween('@NgModule({', '})')[1], 'betweenmodule');
        });
        it('empty string returns empty array', () => {
            assert.equal(''.TextBetween('a', 'b').length, 0);
        });
        it('nothing between found returns empty array', () => {
            assert.equal('   '.TextBetween(' ', ' ').length, 0);
        });
    });
    describe('[Method]: IsAscii', () => {
        it('returns true on ascii letters', () => {
            let tmp = '';
            for (let i = 0; i < 128; i++) {
                tmp += String.fromCharCode(i);
            }
            assert.isTrue(tmp.IsAscii());
        });
        it('returns false on non ascii letters', () => {
            let tmp = '';
            for (let i = 0; i < 130; i++) {
                tmp += String.fromCharCode(i);
            }
            assert.isFalse(tmp.IsAscii());
            assert.isFalse('©'.IsAscii());
        });
    });
    describe('[Method]: IsAlpha', () => {
        it('a-z and A-Z returns true', () => {
            assert.isTrue('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.IsAlpha());
        });
        it('numbers in string returns false', () => {
            assert.isFalse('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1'.IsAlpha());
        });
        it('ß in string returns false', () => {
            assert.isFalse('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZß'.IsAlpha());
        });
    });
    describe('[Method]: Bytes', () => {
        it('get the Bytes from string', () => {
            assert.equal('ABC'.Bytes(), 3);
        });
    });
    describe('String Case Convertion', () => {
        it('CamelCase', () => {
            assert.equal('test string'.ToCamelCase(), 'testString');
            assert.equal('test string'.ToCamelCase()
                .ToSnakeCase(), 'test_string');
            assert.equal('test string'.ToCamelCase()
                .ToSnakeCase()
                .ToPathCase(), 'test/string');
            assert.equal('test string'.ToCamelCase()
                .ToSnakeCase()
                .ToPathCase()
                .ToNoCase(), 'test string');
            assert.equal('test string'.ToCamelCase()
                .ToSnakeCase()
                .ToPathCase()
                .ToNoCase()
                .ToDotCase(), 'test.string');
            assert.equal('test string'.ToCamelCase()
                .ToSnakeCase()
                .ToPathCase()
                .ToNoCase()
                .ToDotCase()
                .ToConstantCase(), 'TEST_STRING');
            assert.equal('test string'.ToCamelCase()
                .ToSnakeCase()
                .ToPathCase()
                .ToNoCase()
                .ToDotCase()
                .ToConstantCase()
                .ToCapitalCase(), 'Test String');
            assert.equal('test string'.ToCamelCase()
                .ToSnakeCase()
                .ToPathCase()
                .ToNoCase()
                .ToDotCase()
                .ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase(), 'test-string');
        });
        it('KebabCase', () => {
            assert.equal('test string'.ToKebabCase(), 'test-string');
            assert.equal('test string'.ToKebabCase()
                .ToCamelCase(), 'testString');
            assert.equal('test string'.ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase(), 'test_string');
            assert.equal('test string'.ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase()
                .ToPathCase(), 'test/string');
            assert.equal('test string'.ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase()
                .ToPathCase()
                .ToNoCase(), 'test string');
            assert.equal('test string'.ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase()
                .ToPathCase()
                .ToNoCase()
                .ToDotCase(), 'test.string');
            assert.equal('test string'.ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase()
                .ToPathCase()
                .ToNoCase()
                .ToDotCase()
                .ToConstantCase(), 'TEST_STRING');
            assert.equal('test string'.ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase()
                .ToPathCase()
                .ToNoCase()
                .ToDotCase()
                .ToConstantCase()
                .ToCapitalCase(), 'Test String');
        });
        it('CapitalCase', () => {
            assert.equal('test string'.ToCapitalCase(), 'Test String');
            assert.equal('test string'.ToCapitalCase()
                .ToKebabCase(), 'test-string');
            assert.equal('test string'.ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase(), 'testString');
            assert.equal('test string'.ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase(), 'test_string');
            assert.equal('test string'.ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase()
                .ToPathCase(), 'test/string');
            assert.equal('test string'.ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase()
                .ToPathCase()
                .ToNoCase(), 'test string');
            assert.equal('test string'.ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase()
                .ToPathCase()
                .ToNoCase()
                .ToDotCase(), 'test.string');
            assert.equal('test string'.ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase()
                .ToPathCase()
                .ToNoCase()
                .ToDotCase()
                .ToConstantCase(), 'TEST_STRING');
        });
        it('ConstantCase', () => {
            assert.equal('test string'.ToConstantCase(), 'TEST_STRING');
            assert.equal('test string'.ToConstantCase()
                .ToCapitalCase(), 'Test String');
            assert.equal('test string'.ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase(), 'test-string');
            assert.equal('test string'.ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase(), 'testString');
            assert.equal('test string'.ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase(), 'test_string');
            assert.equal('test string'.ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase()
                .ToPathCase(), 'test/string');
            assert.equal('test string'.ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase()
                .ToPathCase()
                .ToNoCase(), 'test string');
            assert.equal('test string'.ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase()
                .ToPathCase()
                .ToNoCase()
                .ToDotCase(), 'test.string');
        });
        it('DotCase', () => {
            assert.equal('test string'.ToDotCase(), 'test.string');
            assert.equal('test string'.ToDotCase()
                .ToConstantCase(), 'TEST_STRING');
            assert.equal('test string'.ToDotCase()
                .ToConstantCase()
                .ToCapitalCase(), 'Test String');
            assert.equal('test string'.ToDotCase()
                .ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase(), 'test-string');
            assert.equal('test string'.ToDotCase()
                .ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase(), 'testString');
            assert.equal('test string'.ToDotCase()
                .ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase(), 'test_string');
            assert.equal('test string'.ToDotCase()
                .ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase()
                .ToPathCase(), 'test/string');
            assert.equal('test string'.ToDotCase()
                .ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase()
                .ToPathCase()
                .ToNoCase(), 'test string');
        });
        it('NoCase', () => {
            assert.equal('test string'.ToNoCase(), 'test string');
            assert.equal('test string'.ToNoCase()
                .ToDotCase(), 'test.string');
            assert.equal('test string'.ToNoCase()
                .ToDotCase()
                .ToConstantCase(), 'TEST_STRING');
            assert.equal('test string'.ToNoCase()
                .ToDotCase()
                .ToConstantCase()
                .ToCapitalCase(), 'Test String');
            assert.equal('test string'.ToNoCase()
                .ToDotCase()
                .ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase(), 'test-string');
            assert.equal('test string'.ToNoCase()
                .ToDotCase()
                .ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase(), 'testString');
            assert.equal('test string'.ToNoCase()
                .ToDotCase()
                .ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase(), 'test_string');
            assert.equal('test string'.ToNoCase()
                .ToDotCase()
                .ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase()
                .ToPathCase(), 'test/string');
        });
        it('PathCase', () => {
            assert.equal('test string'.ToPathCase(), 'test/string');
            assert.equal('test string'.ToPathCase()
                .ToNoCase(), 'test string');
            assert.equal('test string'.ToPathCase()
                .ToNoCase()
                .ToDotCase(), 'test.string');
            assert.equal('test string'.ToPathCase()
                .ToNoCase()
                .ToDotCase()
                .ToConstantCase(), 'TEST_STRING');
            assert.equal('test string'.ToPathCase()
                .ToNoCase()
                .ToDotCase()
                .ToConstantCase()
                .ToCapitalCase(), 'Test String');
            assert.equal('test string'.ToPathCase()
                .ToNoCase()
                .ToDotCase()
                .ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase(), 'test-string');
            assert.equal('test string'.ToPathCase()
                .ToNoCase()
                .ToDotCase()
                .ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase(), 'testString');
            assert.equal('test string'.ToPathCase()
                .ToNoCase()
                .ToDotCase()
                .ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase()
                .ToSnakeCase(), 'test_string');
        });
        it('SnakeCase', () => {
            assert.equal('test string'.ToSnakeCase(), 'test_string');
            assert.equal('test string'.ToSnakeCase().ToPathCase(), 'test/string');
            assert.equal('test string'.ToSnakeCase()
                .ToPathCase()
                .ToNoCase(), 'test string');
            assert.equal('test string'.ToSnakeCase()
                .ToPathCase()
                .ToNoCase()
                .ToDotCase(), 'test.string');
            assert.equal('test string'.ToSnakeCase()
                .ToPathCase()
                .ToNoCase()
                .ToDotCase()
                .ToConstantCase(), 'TEST_STRING');
            assert.equal('test string'.ToSnakeCase()
                .ToPathCase()
                .ToNoCase()
                .ToDotCase()
                .ToConstantCase()
                .ToCapitalCase(), 'Test String');
            assert.equal('test string'.ToSnakeCase()
                .ToPathCase()
                .ToNoCase()
                .ToDotCase()
                .ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase(), 'test-string');
            assert.equal('test string'.ToSnakeCase()
                .ToPathCase()
                .ToNoCase()
                .ToDotCase()
                .ToConstantCase()
                .ToCapitalCase()
                .ToKebabCase()
                .ToCamelCase(), 'testString');
        });
    });
});
