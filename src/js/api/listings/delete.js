import { apiBase } from '../api-base.js';
import { headers } from '../headers.js';

/**
 * Deletes a listing with given ID
 * This requires authentication and it requires you do be the owner of the listing.
 * @function deleteListing
 * @param {string} id - The id of the listing to delete
 */
export async function deleteListing(id) {
  const response = await fetch(`${apiBase}auction/listings/${id}`, {
    method: 'delete',
    headers: headers('application/json'),
  });

  if (response.ok) {
    const lisitng = await response.json();
    return lisitng;
  }
  throw new Error(response.statusText);
}
