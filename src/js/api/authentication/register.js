import { apiBase } from '../api-base.js';
import { headers } from '../headers.js';

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
