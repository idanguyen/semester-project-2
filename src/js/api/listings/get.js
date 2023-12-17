import { urlString } from '../api-base.js';
import { headers } from '../headers.js';

/**
 * Get the auction listsings from the auction site.
 * This does not require any authenication to view.
 * @function
 * @returns {[JSON]} Returns all listings in JSON format in an array
 */
export async function getListings() {
  const response = await fetch(`${urlString}auction/listings`, {
    headers: headers(),
  });
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

/**
 * Get a auction listsing from the auction site.
 * This does not require any authenication to view.
 * @function
 * @param {string} id - The id of the listing wanted
 * @param {string} flag - add flag for more details, seller or bids.
 * @returns {JSON} Returns specific listing in JSON format
 */
export async function getListing(id, flag = 'empty') {
  switch (flag) {
    case 'empty': {
      const response = await fetch(`${urlString}auction/listings/` + id, {
        headers: headers(),
      });
      if (response.ok) {
        return await response.json();
      }
      break;
    }

    case 'seller': {
      const sellerResponse = await fetch(
        `${urlString}auction/listings/` + id + '?_seller=true',
        {
          headers: headers(),
        },
      );
      if (sellerResponse.ok) {
        return await sellerResponse.json();
      }
      break;
    }

    case 'bids': {
      const bidsResponse = await fetch(
        `${urlString}auction/listings/` + id + '?_bids=true',
        {
          headers: headers(),
        },
      );
      if (bidsResponse.ok) {
        return await bidsResponse.json();
      }
      break;
    }

    default: {
      throw new Error('Invalid flag');
    }
  }
}
