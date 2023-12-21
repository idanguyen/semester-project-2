/**
 * Creates a sleep function for the desired amount of time.
 * source of code: https://stackoverflow.com/questions/65559244/what-is-the-resolve-function-in-the-promise-settimeout-best-practice
 * @function
 * @param ms Sleep timer in milliseconds
 * @returns {function} a sleep function sleeping for desired input
 */

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
//
