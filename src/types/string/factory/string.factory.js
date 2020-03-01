const {NumberFactory} = require('../../number');

class StringFactory {}

StringFactory.IsNullOrEmpty = (value) => {
    return !value || value.length < 1;
};

StringFactory.RandomAlphaString = (length) => {
    if (length < 1) {
        length = 1;
    }
    let tmp = '';
    const upper = NumberFactory.RandomInteger(0, 1);
    for (let i = 0; i < length; i++) {
        const code = upper === 0 ? NumberFactory.RandomInteger(65, 90) : NumberFactory.RandomInteger(97, 122);
        tmp += String.fromCharCode(code);
    }
    return tmp;
};

module.exports = {StringFactory};
