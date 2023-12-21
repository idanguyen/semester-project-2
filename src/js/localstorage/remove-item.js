/**
 * The functionality removing an item from the localstorage.
 * source: https://github.com/idanguyen/social-media-client/blob/master/src/js/storage/index.js Changed the name but kept functionality same
 * @function
 * @param {string} key the item you want to remove from the localstorage
 */
export const removeItem = (key) => localStorage.removeItem(key);
