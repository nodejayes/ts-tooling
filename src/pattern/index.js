/**
 * @module pattern
 */
const {Using} = require('./dispose/using');
const {Throttle} = require('./functions/throttle');
const {Create, CreateWithFactory} = require('./construct/construct');

module.exports = {Using, Throttle, CreateWithFactory, Create};
