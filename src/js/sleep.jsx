/* @flow */

/**
 * Sleeps for a number of milliseconds.
 *
 * @param {number} ms the number of milliseconds to sleep for
 * @returns {Promise}
 */
export default async function sleep (ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
};