import { updateProfilePicture } from '../../api/profiles/update.js';
import { saveItem } from '../../localstorage/save-item.js';
import { setAvatar } from '../../utils/avatar.js';
import { sleep } from '../../utils/sleep.js';

/**
 * Adds event listener to the button for editing your picture.
 * @function
 */
export function editProfileRedirectListener() {
  let redirectEditBtn = document.getElementById('edit-prfl-btn');
  if (redirectEditBtn) {
    redirectEditBtn.addEventListener('click', redirectToEditProfile);
  }
}

/**
 * The functionality of the update profile picture button is to redirect to the correct page.
 * @function
 */
export function redirectToEditProfile() {
  try {
    location.href = 'update-profile.html';
  } catch {
    return alert('There was an issue getting to the edit page!');
  }
}

/**
 * Adds event listener to the confirm button when you press it to update the picture.
 * @function
 */
export async function updatePictureListener() {
  let confirmBtn = document.getElementById('confirm-change-btn');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', await updatePicture);
  }
}

/**
 * The function updates the profile picture with the value from the image url input.
 * @function
 */
export async function updatePicture() {
  const image = document.getElementById('img-url-upd').value;
  try {
    let response = await updateProfilePicture(image);
    saveItem('profile', response);
    setAvatar();
    sleep(500);
    location.reload();
  } catch {
    return alert('There was a problem updating the picture');
  }
}
