const {Random} = require('../../../core/number/number');

class NumberFactory {}

NumberFactory.NewInteger = (value) => {
    const tmp = parseInt(value.toString());
    if (isNaN(tmp)) {
        return 0;
    }
    return tmp;
};

NumberFactory.NewDouble = (value) => {
    const tmp = parseFloat(value.toString());
    if (isNaN(tmp)) {
        return 0;
    }
    return tmp;
};

NumberFactory.RandomInteger = (min, max) => {
    return Random(min, max, false);
};

NumberFactory.RandomDouble = (min, max) => {
    return Random(min, max, true);
};

module.exports = {NumberFactory};
