/* @flow */

/**
 * Sleeps for a number of milliseconds.
 *
 * @param {number} ms the number of milliseconds to sleep for
 * @returns {Promise}
 */
module.exports = function sleep (ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
};