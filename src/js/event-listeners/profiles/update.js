import { updateProfilePicture } from '../../api/profiles/update.js';
import { getItem } from '../../localstorage/get-item.js';
import { saveItem } from '../../localstorage/save-item.js';
import { setAvatar } from '../../utils/avatar.js';
import { sleep } from '../../utils/sleep.js';

export function editProfileRedirectListener() {
  let redirectEditBtn = document.getElementById('edit-prfl-btn');
  if (redirectEditBtn) {
    redirectEditBtn.addEventListener('click', redirectToEditProfile);
  }
}

export function redirectToEditProfile() {
  try {
    location.href = 'update-profile.html';
  } catch {
    return alert('There was an issue getting to the edit page!');
  }
}

export async function updatePictureListener() {
  let confirmBtn = document.getElementById('confirm-change-btn');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', await updatePicture);
  }
}

//update error
export async function updatePicture() {
  const image = document.getElementById('img-url-upd').value;
  try {
    console.log(image);
    let response = await updateProfilePicture(image);
    let profile = getItem('profile');
    console.log(profile);
    console.log(response);

    saveItem('profile', response);
    console.log(profile.avatar);
    setAvatar();
    sleep(500);
    location.reload();
  } catch {
    return alert('There was a problem updating the picture');
  }
}
