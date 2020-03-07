const {NumberFactory} = require('../../../types/number/factory/number.factory');
const {ObjectFactory} = require('../../../types/object/factory/object.factory');
const {StringFactory} = require('../../../types/string/factory/string.factory');

/**
 * create some random Objects
 *
 * @memberof module:utils/generator
 */
class TestDataGenerator {}

/**
 * generate a random object between the min max size in bytes
 *
 * @memberof module:utils/generator.TestDataGenerator
 * @static
 * @param min {number} minimum size of the generated objects
 * @param max {number?} maximum size of the generated objects
 * @param keySize {number?} fix key size in bytes
 * @param valueSize {number?} fix value size in bytes
 * @return {any}
 */
TestDataGenerator.Object = (min, max, keySize, valueSize) => {
    if (min < 1) {
        min = 512;
    }
    if (!max || max <= min) {
        max = min + 1;
    }
    if (!keySize) {
        keySize = 10;
    }
    if (!valueSize) {
        valueSize = 10;
    }
    const tmp = {};
    while (!ObjectFactory.SizeOf(tmp).IsAbove(min) &&
    !ObjectFactory.SizeOf(tmp).IsAbove(max)) {
        tmp[StringFactory.RandomAlphaString(NumberFactory.RandomInteger(1, keySize))] =
            StringFactory.RandomAlphaString(NumberFactory.RandomInteger(1, valueSize));
    }
    return tmp;
};

module.exports = {TestDataGenerator};
