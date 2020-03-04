/**
 * This Module extends the Basic Javascript Number Data Type and can generate Random Numbers
 * or create Numbers from String or Number slitted by Integer and Double
 *
 * @module types/number
 */
require('./extension/extension');
const {NumberFactory} = require('./factory/number.factory');

module.exports = {NumberFactory};


