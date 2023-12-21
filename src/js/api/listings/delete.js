import { apiBase } from '../api-base.js';
import { headers } from '../headers.js';

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
