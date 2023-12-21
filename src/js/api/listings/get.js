import { urlString } from '../api-base.js';
import { headers } from '../headers.js';

/**
 * Get the auction listsings from the auction site.
 * This does not require any authenication to view.
 * @function
 * @returns {[JSON]} Returns all listings in JSON format in an array
 */
export async function getListings(flag = 'empty', search = '', profile = '') {
  let url = '';
  switch (flag) {
    case 'empty': {
      if (profile) {
        url = `${urlString}auction/profiles/${profile}/listings?_tag=${search}`;
      } else {
        url = `${urlString}auction/listings?_tag=${search}&_active=true`;
      }
      const response = await fetch(url, {
        headers: headers(),
      });
      if (response.ok) {
        return await response.json();
      }
      break;
    }

    case 'seller': {
      if (profile) {
        url = `${urlString}auction/profiles/${profile}/listings?_seller=true&_tag=${search}`;
      } else {
        url = `${urlString}auction/listings?_seller=true&_tag=${search}&_active=true`;
      }
      const response = await fetch(url, {
        headers: headers(),
      });
      if (response.ok) {
        return await response.json();
      }
      break;
    }
    case 'bids': {
      if (profile) {
        url = `${urlString}auction/profiles/${profile}/listings?_seller=true&_tag=${search}`;
      } else {
        url = `${urlString}auction/listings?_bids=true&_tag=${search}&_active=true`;
      }
      const response = await fetch(url, {
        headers: headers(),
      });
      if (response.ok) {
        return await response.json();
      }
      break;
    }
    default: {
      throw new Error('Invalid flag');
    }
  }
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

export async function getSearch() {
  let searchTerm = document.getElementById('search-bar').value;
  console.log(searchTerm);
  const response = await fetch(
    `${urlString}auction/listings?_tag=${searchTerm}`,
    {
      headers: headers(),
    },
  );
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
