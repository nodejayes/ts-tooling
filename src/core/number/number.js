const Round = (value, precision = 0, method = 'round') => {
    let offset = '1';
    for (let i = 0; i < Math.abs(precision); i++) {
        offset += '0';
    }
    const tmp = parseInt(offset, 10);
    return precision < 0 ?
        Math[method](value / tmp) * tmp :
        Math[method](value * tmp) / tmp;
};

const Random = (min, max, floating) => {
    return floating === true ?
        Math.random() * (max - min) + min :
        Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = {Round, Random};
