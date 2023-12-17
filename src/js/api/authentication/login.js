import { apiBase } from '../api-base.js';
import { headers } from '../headers.js';
import { saveItem } from '../../localstorage/save-item.js';

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
// taken from https://github.com/idanguyen/social-media-client/blob/master/src/js/api/auth/login.js
