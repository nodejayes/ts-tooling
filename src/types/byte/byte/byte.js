require('../../number/extension/extension');

class Byte {
    constructor(value) {
        this._value = value.Clamp(0, 255);
    }

    get Value() {
        return this._value;
    }
}

module.exports = {Byte};
