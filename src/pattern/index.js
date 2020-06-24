/**
 * @module pattern
 */
const {Retry} = require('./functions/retry');
const {Using} = require('./dispose/using');
const {Throttle} = require('./functions/throttle');
const {Create, CreateWithFactory} = require('./construct/construct');

module.exports = {Using, Throttle, CreateWithFactory, Create, Retry};
