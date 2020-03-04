const {NumberFactory} = require('../../number');

/**
 * some String Utils
 *
 * @class module:types/string.StringFactory
 */
class StringFactory {}

/**
 * check if a String is empty or null
 *
 * @function module:types/string.StringFactory#IsNullOrEmpty
 * @static
 * @param value {string} the string to check
 * @returns {boolean} is the given string defined and not empty or not
 *
 * @example
 * // is true
 * StringFactory.IsNullOrEmpty(undefined);
 * StringFactory.IsNullOrEmpty(null);
 * StringFactory.IsNullOrEmpty('');
 * // is false
 * StringFactory.IsNullOrEmpty('a');
 */
StringFactory.IsNullOrEmpty = (value) => {
    return !value || value.length < 1;
};

/**
 * generate a Random String with given Size
 *
 * use only letters a-z
 *
 * @function module:types/string.StringFactory#RandomAlphaString
 *
 * @param length {number} the Size of the String
 * @returns {string} a random string with letters from a-z
 *
 * @example
 * // returns a random string with 12 bytes length
 * StringFactory.RandomAlphaString(12);
 */
StringFactory.RandomAlphaString = (length) => {
    if (length < 1) {
        length = 1;
    }
    let tmp = '';
    const upper = NumberFactory.RandomInteger(0, 1);
    for (let i = 0; i < length; i++) {
        const code = upper === 0 ? NumberFactory.RandomInteger(65, 90) : NumberFactory.RandomInteger(97, 122);
        tmp += String.fromCharCode(code);
    }
    return tmp;
};

module.exports = {StringFactory};
