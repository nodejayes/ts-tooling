/**
 * add DateTime and TimeSpan as new Objects
 *
 * @module types/datetime
 */

const {DateTime} = require('./datetime/datetime');
const {TimeSpan} = require('./timespan/timespan');
const {DateRange} = require('./daterange/daterange');

module.exports = {DateTime, TimeSpan, DateRange};
