import { updateLoginHTML } from '../../localstorage/state.js';
import { removeItem } from '../../localstorage/remove-item.js';

/**
 * This creates the listener for the logout button.
 * @function
 */
export function logoutHeaderListener() {
  let logoutBtn = document.getElementById('log-out-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logoutHeader);
  }
}

/**
 * This is the functionality to make the user log out.
 * @function
 */
export function logoutHeader() {
  try {
    removeItem('profile');
    removeItem('token');
    updateLoginHTML();
    location.href = 'index.html';
  } catch {
    return alert('There was an issue logging out!');
  }
}
