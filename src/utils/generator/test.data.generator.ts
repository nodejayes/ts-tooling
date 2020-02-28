import {NumberFactory} from '../../types/number/factory/number.factory';
import {ObjectFactory} from '../../types/object/object.factory';
import {StringFactory} from '../../types/string/string.factory';

/**
 * create some random Objects
 *
 * @category Util
 */
export class TestDataGenerator {
    /**
     * generate a random object between the min max size in bytes
     *
     * @param min minimum size of the generated objects
     * @param max maximum size of the generated objects
     * @param keySize fix key size in bytes
     * @param valueSize fix value size in bytes
     */
    static Object(min: number, max?: number, keySize?: number, valueSize?: number): any {
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
    }
}
