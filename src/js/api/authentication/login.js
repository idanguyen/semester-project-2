import { apiBase } from '../api-base.js';
import { headers } from '../headers.js';
import { saveItem } from '../../localstorage/save-item.js';

/**
 * Get a auction listsing from the auction site.
 * This does not require any authenication to view.
 * @function
 * @param {string} id - The id of the listing wanted
 * @param {string} flag - add flag for more details, seller or bids.
 * @returns {JSON} Returns specific listing in JSON format
 */
export async function login(email, password) {
  const response = await fetch(`${apiBase}auction/auth/login`, {
    method: 'post',
    body: JSON.stringify({ email, password }),
    headers: headers('application/json'),
  });

  if (response.ok) {
    const profile = await response.json();
    saveItem('token', profile.accessToken);
    delete profile.accessToken;
    saveItem('profile', profile);
    return profile;
  }

  throw new Error(response.statusText);
}
// taken from https://github.com/idanguyen/social-media-client/blob/master/src/js/api/auth/login.js
