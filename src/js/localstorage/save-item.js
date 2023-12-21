/**
 * The functionality saving an item from the localstorage.
 * source: https://github.com/idanguyen/social-media-client/blob/master/src/js/storage/index.js Changed the name but kept functionality same
 * @function
 * @param {string} key the item name you want to save from the localstorage
 * @param {string} value the item value you want to get from the localstorage with given key
 */
export const saveItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
