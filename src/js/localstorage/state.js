import { getItem } from './get-item.js';

export const isLoggedIn = () => Boolean(getItem('token'));

export const profile = () => getItem('profile');

export function updateLoginHTML() {
  const token = getItem('token');
  document.body.classList[token ? 'add' : 'remove']('logged-in');
}
