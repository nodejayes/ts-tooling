/**
 * sleep for the time in milliseconds and wait for execution
 *
 * @memberof module:pattern
 * @function
 *
 * @param ms {number} the amount of milliseconds to wait
 * @example
 * // wait for a second
 * await Sleep(1000);
 */
const Sleep = function (ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

module.exports = {Sleep};