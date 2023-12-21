import { apiBase } from '../api-base.js';
import { headers } from '../headers.js';
import { saveItem } from '../../localstorage/save-item.js';

/**
 * This is from Noroff public repository. Use to login to the user
 * This does not require any authenication to view.
 * @function login
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

/* Source taken from https://github.com/idanguyen/social-media-client/blob/master/src/js/api/auth/login.js
 * This was learned from the previous task and copied to use for my project. It is a copy to speed development and it applies to this project well.
 */
