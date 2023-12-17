import { updateLoginHTML } from '../../localstorage/state.js';
import { removeItem } from '../../localstorage/remove-item.js';

export function logoutHeaderListener() {
  let logoutBtn = document.getElementById('log-out-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logoutHeader);
  }
}

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
