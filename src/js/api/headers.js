import { getItem } from '../localstorage/get-item.js';

export const headers = (contentType) => {
  const token = getItem('token');
  const headers = {};

  if (contentType) {
    headers['Content-Type'] = contentType;
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};

/** Source taken from https://github.com/idanguyen/social-media-client/blob/master/src/js/api/headers.js
 *  This was used to speed up development and it creates the headers for every API call
 * */
