/**
 * @ignore
 */
import {StringFactory} from '../string/string.factory';

/**
 * @ignore
 */
const GUID_LENGTH = 36;

/**
 * @ignore
 */
const lut = [];
for (let i= 0; i < 256; i++) {
    lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
}

/**
 * @ignore
 */
function uuidv4() {
    const d0 = Math.random()*0xffffffff|0;
    const d1 = Math.random()*0xffffffff|0;
    const d2 = Math.random()*0xffffffff|0;
    const d3 = Math.random()*0xffffffff|0;
    return lut[d0&0xff]+lut[d0>>8&0xff]+lut[d0>>16&0xff]+lut[d0>>24&0xff]+'-'+
        lut[d1&0xff]+lut[d1>>8&0xff]+'-'+lut[d1>>16&0x0f|0x40]+lut[d1>>24&0xff]+'-'+
        lut[d2&0x3f|0x80]+lut[d2>>8&0xff]+'-'+lut[d2>>16&0xff]+lut[d2>>24&0xff]+
        lut[d3&0xff]+lut[d3>>8&0xff]+lut[d3>>16&0xff]+lut[d3>>24&0xff];
}

/**
 * @ignore
 */
const GUID_SEPARATOR_POSITIONS = [
    8,
    13,
    18,
    23,
];

/**
 * @ignore
 */
const GUID_VALID_CHARS = [
    '0', '1', '2', '3', '4', '5',
    '6', '7', '8', '9', 'a', 'b',
    'c', 'd', 'e', 'f', '-'
];

/**
 * @ignore
 */
function validateGuid(guid: string): boolean {
    // check the length of the Guid
    if (!guid.length.Equals(GUID_LENGTH)) {
        return false;
    }
    // check the number of "-" in the Guid
    if (guid.ContainsCount('-').IsAbove(4)) {
        return false;
    }
    // check the Position of "-" in the Guid
    for (const pos of GUID_SEPARATOR_POSITIONS) {
        if (!guid.CharAt(pos).Equals('-')) {
            return false;
        }
    }
    // check the Chars in the Guid
    for (const char of guid) {
        const c = char.ToLowerCase();
        if (!GUID_VALID_CHARS.Contains(c)) {
            return false;
        }
    }
    return true;
}

/**
 * represent the Global Uniqe Identifier
 *
 * @category Type
 */
export class Guid {
    private _value: string;

    /**
     * get a empty Guid
     *
     * @returns the empty guid
     *
     * @example
     * // returns "00000000-0000-0000-0000-000000000000"
     * Guid.Empty;
     */
    static get Empty(): Guid {
        return new Guid('00000000-0000-0000-0000-000000000000');
    }

    /**
     * validate a Guid
     *
     * @param guid the guid to validate
     * @returns is the given guid string valid or not
     *
     * @example
     * // returns true
     * Guid.Validate('00000000-0000-0000-0000-000000000000');
     * // returns false
     * Guid.Validate('00000000000000000000000000000000');
     */
    static Validate(guid: string): boolean {
        return validateGuid(guid);
    }

    /**
     * is this Guid a Empty Guid
     *
     * @returns matches the empty guid
     *
     * @example
     * // returns true
     * new Guid('00000000-0000-0000-0000-000000000000').IsEmpty();
     * // returns false
     * new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c').IsEmpty();
     */
    get IsEmpty(): boolean {
        return this._value.Equals(Guid.Empty.ToString());
    }

    /**
     * create a new Guid
     *
     * generates a new one when no guid was passed
     *
     * @param guid a new guid as string representation
     *
     * @example
     * // returns a new generated Guid
     * new Guid();
     * // returns "6bcb9d2c-ae48-4310-8d56-ea7accffcc8c"
     * new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c');
     */
    constructor(guid?: string) {
        if (StringFactory.IsNullOrEmpty(guid)) {
            this._value = uuidv4();
        } else {
            if (!validateGuid(guid)) {
                throw new Error(`guid is invalid ${guid}`);
            }
            this._value = guid.ToLowerCase();
        }
    }

    /**
     * converts the Guid to a String representation
     *
     * @returns Guid as string
     *
     * @example
     * // returns "6bcb9d2c-ae48-4310-8d56-ea7accffcc8c"
     * new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c').ToString();
     */
    ToString(): string {
        return this._value;
    }

    /**
     * check if the Guid is Equal another Guid
     *
     * @param guid the guid to check
     * @returns are the Guid´s equal or not
     *
     * @example
     * // returns true
     * new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c').Equals('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c');
     * new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c').Equals(new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c'));
     * // returns false
     * new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c').Equals('4fa89189-03b5-43f2-b184-8a42adeebfe7');
     */
    Equals(guid: Guid | string): boolean {
        if (guid instanceof Guid) {
            return this._value.Equals(guid.ToString());
        }
        return this._value.Equals(guid);
    }
}
