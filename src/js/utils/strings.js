/**
 * Compares two strings and returns a value depending on how they match. If they are matching it returns 0.
 * source of code: https://stackoverflow.com/questions/2167602/optimum-way-to-compare-strings-in-javascript from Gumbo
 * @function
 * @param string1 First string to compare with
 * @param string2 Second string to compare with
 * @returns {function} Whether the strings match or which is bigger
 */
export function stringCompare(string1, string2) {
  if (string1.toString() < string2.toString()) return -1;
  if (string1.toString() > string2.toString()) return 1;
  return 0;
}
