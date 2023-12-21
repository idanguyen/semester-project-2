import { isLoggedIn } from '../../../js/localstorage/state.js';
import { getProfile } from '../../../js/api/profiles/get.js';
import { setAvatar } from '../../../js/utils/avatar.js';
import { updatePicture } from '../../../js/event-listeners/profiles/update.js';
import { sleep } from '../../../js/utils/sleep.js';

/**
 * Displays the pane to change your profile picture.
 * Source: The display is inspired from: https://mdbootstrap.com/docs/standard/extended/profiles/
 * @function
 * @returns {string} HTML element for the displayContainer.
 */
export async function displayProfile() {
  if (isLoggedIn()) {
    let returnedHTML = await updateDisplay();

    return returnedHTML;
  } else {
    location.href = 'login.html';
  }
}

/**
 * Creates the pane to change your profile picture.
 * Source: The display is inspired from: https://mdbootstrap.com/docs/standard/extended/profiles/
 * @function
 * @returns {string} HTML element for the displayContainer.
 */
async function updateDisplay() {
  let profile = await getProfile();
  let avatar = setAvatar();
  let display = `
  <section class="h-100 gradient-custom-2">
  <div class="d-flex justify-content-center">
    <h1 class="">Edit Profile</h1>
  </div>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card">
          <div class="rounded-top text-white d-flex flex-row" style="background-color: #000; height:200px;">
            <div class="ms-4 mt-5 d-flex flex-column img-avatar" style="width: 150px;">
              <img class="img-avatar" src="${avatar}"
                alt="${profile.name}" class="img-fluid img-thumbnail mt-4 mb-2"
                style="width: 150px; z-index: 1">
            </div>
            <div class="ms-3" style="margin-top: 130px;">
              <h5>${profile.name}</h5>
              <p>${profile.email}</p>
            </div>
          </div>
          <br>
          <br>
          <div class="input-group mb-3">
                  <input
                    type="imagelink"
                    id="img-url-upd"
                    name="imagelink"
                    class="form-control form-control-lg bg-light fs-6"
                    placeholder="Image Link"
                    required="required"
                  />
            </div>
            <br>
            <button id="confirm-btn-pic" class="btn btn-outline-dark">Confirm</button>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>


`;
  addListeners();
  return display;
}

/**
 * The function adds actionlisteners to the HTML elements
 * @function
 */
function addListeners() {
  sleep(1000).then(() => {
    document
      .getElementById('confirm-btn-pic')
      .addEventListener('click', updatePicture);
  });
}
