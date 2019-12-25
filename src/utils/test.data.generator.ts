import {NumberFactory} from "./number.factory";
import {ObjectFactory} from "./object.factory";
import {StringFactory} from "./string.factory";

export class TestDataGenerator {
    /**
     * generate a random object between the min max size in bytes
     * @param min
     * @param max
     * @param keySize
     * @param valueSize
     * @constructor
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
