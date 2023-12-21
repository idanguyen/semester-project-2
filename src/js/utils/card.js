/**
 * Checks the length of the title and reduces it to 18 characters to make it fit the cards.
 * @function
 * @returns {string} Returns a picture
 */
export function checkTitle(title) {
  if (title.length > 18) {
    return title.slice(0, 18) + '...';
  } else {
    return title;
  }
}
