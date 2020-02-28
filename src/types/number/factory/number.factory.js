const {Random} = require('../../../core/number/number');

class NumberFactory {
    static NewInteger(value) {
        const tmp = parseInt(value.toString());
        if (isNaN(tmp)) {
            return 0;
        }
        return tmp;
    }

    static NewDouble(value) {
        const tmp = parseFloat(value.toString());
        if (isNaN(tmp)) {
            return 0;
        }
        return tmp;
    }

    static RandomInteger(min, max) {
        return Random(min, max, false);
    }

    static RandomDouble(min, max) {
        return Random(min, max, true);
    }
}

module.exports = {NumberFactory};
