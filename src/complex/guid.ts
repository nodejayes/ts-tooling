import * as uuidv4 from 'uuid/v4';
import {StringFactory} from "../utils/string.factory";

/**
 * @ignore
 */
const GUID_LENGTH = 36;

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
 */
export class Guid {
    private _value: string;

    /**
     * get a empty Guid
     * @constructor
     */
    static get Empty(): Guid {
        return new Guid('00000000-0000-0000-0000-000000000000');
    }

    /**
     * validate a Guid
     * @param guid
     * @constructor
     */
    static Validate(guid: string): boolean {
        return validateGuid(guid);
    }

    /**
     * is this Guid a Empty Guid
     * @constructor
     */
    get IsEmpty(): boolean {
        return this._value.Equals(Guid.Empty.ToString());
    }

    /**
     * create a new Guid
     * @param guid
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
     * @constructor
     */
    ToString(): string {
        return this._value;
    }

    /**
     * check if the Guid is Equal another Guid
     * @param guid
     * @constructor
     */
    Equals(guid: Guid | string): boolean {
        if (guid instanceof Guid) {
            return this._value.Equals(guid.ToString());
        }
        return this._value.Equals(guid);
    }
}
