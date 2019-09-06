import * as uuidv4 from 'uuid/v4';
import {Chars} from "../primitive/chars";
import {Integer} from "../primitive/integer";
import {List} from "../ts-tooling";

/**
 * @ignore
 */
const GUID_LENGTH = new Integer(36);

/**
 * @ignore
 */
const GUID_SEPERATOR_POSITIONS = new List<Integer>([
    new Integer(8),
    new Integer(13),
    new Integer(18),
    new Integer(23),
]);

/**
 * @ignore
 */
const GUID_VALID_CHARS = new List<Chars>([
    '0'.ToChars(), '1'.ToChars(), '2'.ToChars(), '3'.ToChars(), '4'.ToChars(), '5'.ToChars(),
    '6'.ToChars(), '7'.ToChars(), '8'.ToChars(), '9'.ToChars(), 'a'.ToChars(), 'b'.ToChars(),
    'c'.ToChars(), 'd'.ToChars(), 'e'.ToChars(), 'f'.ToChars(), '-'.ToChars()
]);

/**
 * @ignore
 */
function validateGuid(guid: Chars): boolean {
    // check the length of the Guid
    if (!guid.Length.Equals(GUID_LENGTH)) {
        return false;
    }
    // check the number of "-" in the Guid
    if (guid.ContainsCount('-'.ToChars()).IsAbove(new Integer(4))) {
        return false;
    }
    // check the Position of "-" in the Guid
    for (const pos of GUID_SEPERATOR_POSITIONS.ToArray()) {
        if (!guid.CharAt(pos).Equals(new Chars('-'))) {
            return false;
        }
    }
    // check the Chars in the Guid
    for (const char of guid.Value) {
        const c = new Chars(char).ToLowerCase();
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
    private _value: Chars;

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
    static Validate(guid: Chars): boolean {
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
    constructor(guid?: string | Chars) {
        if (!guid) {
            this._value = new Chars(uuidv4());
        } else if (guid instanceof Chars) {
            if (!validateGuid(guid)) {
                throw new Error(`guid is invalid ${guid.Value}`);
            }
            this._value = guid.ToLowerCase();
        } else {
            if (!validateGuid(guid.ToChars())) {
                throw new Error(`guid is invalid ${guid}`);
            }
            this._value = guid.ToChars().ToLowerCase();
        }
    }

    /**
     * converts the Guid to a String representation
     * @constructor
     */
    ToString(): Chars {
        return this._value;
    }

    /**
     * check if the Guid is Equal another Guid
     * @param guid
     * @constructor
     */
    Equals(guid: Guid | Chars): boolean {
        if (guid instanceof Chars) {
            return this._value.Equals(guid);
        }
        return this._value.Equals(guid.ToString());
    }
}
