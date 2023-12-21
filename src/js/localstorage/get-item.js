/**
 * The functionality getting an item from the localstorage.
 * source: https://github.com/idanguyen/social-media-client/blob/master/src/js/storage/index.js Changed the name but kept functionality same
 * @function
 * @param {string} key the item you want to get from the localstorage
 */
export const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
};
