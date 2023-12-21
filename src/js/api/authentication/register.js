import { apiBase } from '../api-base.js';
import { headers } from '../headers.js';

/**
 * This is from Noroff public repository. Used to register an account from sign up page
 * This does not require any authenication to view.
 * @function register
 * @param {string} id - The id of the listing wanted
 * @param {string} flag - add flag for more details, seller or bids.
 * @returns {JSON} Returns specific listing in JSON format
 */
export async function register(email, name, password) {
  const response = await fetch(`${apiBase}auction/auth/register`, {
    method: 'post',
    body: JSON.stringify({ email, name, password }),
    headers: headers('application/json'),
  });
  console.log(await response.json());

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

/* Source taken from https://github.com/idanguyen/social-media-client/blob/master/src/js/api/auth/register.js
 * This was learned from the previous task and copied to use for my project. It is a copy to speed development and it applies to this project well.
 */
