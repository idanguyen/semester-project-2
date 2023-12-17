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

// taken from https://github.com/idanguyen/social-media-client/blob/master/src/js/api/headers.js
