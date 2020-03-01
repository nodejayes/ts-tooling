const {StringFactory} = require('../../string');
const {ValidateGuid, Uuidv4} = require('../../../core/guid/guid');

class Guid {
    get IsEmpty() {
        return this._value.Equals(Guid.Empty.ToString());
    }

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

    ToString() {
        return this._value;
    }

    Equals(guid) {
        if (guid instanceof Guid) {
            return this._value.Equals(guid.ToString());
        }
        return this._value.Equals(guid);
    }
}

Object.defineProperty(Guid, "Empty", {
    get: function () {
        return new Guid('00000000-0000-0000-0000-000000000000');
    },
    enumerable: true,
    configurable: true
});

Guid.Validate = (guid) => {
    return ValidateGuid(guid);
};

module.exports = {Guid};
