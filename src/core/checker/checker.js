const IsFunction = (value) => {
    return typeof value === typeof function() {};
};

const IsObject = (value) => {
    return value !== null && typeof value === typeof {};
};

module.exports = {IsFunction, IsObject};
