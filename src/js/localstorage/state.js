import { getItem } from './get-item.js';

/**
 * Checks whether the user is logged in by seeing if the token is in the localstorage.
 * Taken from https://github.com/idanguyen/social-media-client/blob/master/src/js/api/auth/state.js Changed the location and name but kept functionality same
 * @function
 */
export const isLoggedIn = () => Boolean(getItem('token'));

export const profile = () => getItem('profile');

export function updateLoginHTML() {
  const token = getItem('token');
  document.body.classList[token ? 'add' : 'remove']('logged-in');
}
