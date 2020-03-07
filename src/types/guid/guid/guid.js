const {StringFactory} = require('../../string');
const {ValidateGuid, Uuidv4} = require('../../../core/guid/guid');

/**
 * represent the Global Uniqe Identifier
 *
 * @memberof module:types/guid
 */
class Guid {
    /**
     * is this Guid a Empty Guid
     *
     * @returns {boolean} matches the empty guid
     *
     * @example
     * // returns true
     * new Guid('00000000-0000-0000-0000-000000000000').IsEmpty();
     * // returns false
     * new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c').IsEmpty();
     */
    get IsEmpty() {
        return this._value.Equals(Guid.Empty.ToString());
    }

    /**
     * create a new Guid
     *
     * generates a new one when no guid was passed
     *
     * @constructor
     *
     * @param guid {string?} a new guid as string representation
     * @return {Guid}
     *
     * @example
     * // returns a new generated Guid
     * new Guid();
     * // returns "6bcb9d2c-ae48-4310-8d56-ea7accffcc8c"
     * new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c');
     */
    constructor(guid) {
        this._value = null;
        if (StringFactory.IsNullOrEmpty(guid)) {
            this._value = Uuidv4();
        } else {
            if (!ValidateGuid(guid)) {
                throw new Error(`guid is invalid ${guid}`);
            }
            this._value = guid.ToLowerCase();
        }
    }

    /**
     * converts the Guid to a String representation
     *
     * @returns Guid {Guid} as string
     *
     * @example
     * // returns "6bcb9d2c-ae48-4310-8d56-ea7accffcc8c"
     * new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c').ToString();
     */
    ToString() {
        return this._value;
    }

    /**
     * check if the Guid is Equal another Guid
     *
     * @param guid {Guid} the guid to check
     * @returns {boolean} are the Guid´s equal or not
     *
     * @example
     * // returns true
     * new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c').Equals('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c');
     * new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c').Equals(new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c'));
     * // returns false
     * new Guid('6bcb9d2c-ae48-4310-8d56-ea7accffcc8c').Equals('4fa89189-03b5-43f2-b184-8a42adeebfe7');
     */
    Equals(guid) {
        if (guid instanceof Guid) {
            return this._value.Equals(guid.ToString());
        }
        return this._value.Equals(guid);
    }
}

/**
 * get a empty Guid
 *
 * @memberof module:types/guid.Guid
 * @property Empty
 * @readonly
 * @static
 * @returns {Guid} the empty guid
 *
 * @example
 * // returns "00000000-0000-0000-0000-000000000000"
 * Guid.Empty;
 */
Object.defineProperty(Guid, "Empty", {
    get: function () {
        return new Guid('00000000-0000-0000-0000-000000000000');
    },
    enumerable: true,
    configurable: true
});

/**
 * validate a Guid
 *
 * @memberof module:types/guid.Guid
 * @static
 * @param guid {Guid} the guid to validate
 * @returns {boolean} is the given guid string valid or not
 *
 * @example
 * // returns true
 * Guid.Validate('00000000-0000-0000-0000-000000000000');
 * // returns false
 * Guid.Validate('00000000000000000000000000000000');
 */
Guid.Validate = (guid) => {
    return ValidateGuid(guid);
};

module.exports = {Guid};
