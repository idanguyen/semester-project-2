import { apiBase } from '../api-base.js';
import { headers } from '../headers.js';
import { getItem } from '../../localstorage/get-item.js';

/**
 * Update your profile picture.
 * This requires authenication to view.
 * @function
 * @param {string} avatar - A string with a link to a picture.
 * @returns {[JSON]} Returns all listings in JSON format in an array
 */
export async function updateProfilePicture(avatar) {
  const profile = getItem('profile');
  const response = await fetch(
    `${apiBase}auction/profiles/${profile.name}/media`,
    {
      method: 'put',
      body: JSON.stringify({ avatar }),
      headers: headers('application/json'),
    },
  );
  if (response.ok) {
    console.log('det var ok');
    return response.json();
  }

  throw new Error(response.statusText);
}
