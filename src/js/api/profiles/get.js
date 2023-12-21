import { apiBase } from '../api-base.js';
import { headers } from '../headers.js';
import { getItem } from '../../localstorage/get-item.js';

//legge til flag

/**
 * Get your profile from the auction site.
 * This requires authenication to view.
 * @function
 * @param flag - If you want to see the listings of a profile, you need to send this flag.
 * @returns {[JSON]} Returns all listings in JSON format in an array
 */
export async function getProfile(flag = 'empty') {
  const profile = getItem('profile');
  switch (flag) {
    case 'empty': {
      const response = await fetch(
        `${apiBase}auction/profiles/${profile.name}`,
        {
          headers: headers(),
        },
      );
      if (response.ok) {
        return await response.json();
      }
      break;
    }
    case 'listings': {
      const listingsResponse = await fetch(
        `${apiBase}auction/profiles/${profile.name}/listings`,
        {
          headers: headers(),
        },
      );
      if (listingsResponse.ok) {
        return await listingsResponse.json();
      }
      break;
    }
    default: {
      throw new Error('Invalid flag');
    }
  }
}
