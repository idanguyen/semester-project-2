import { isLoggedIn } from '../../../js/localstorage/state.js';
import { getProfile } from '../../../js/api/profiles/get.js';
import { setAvatar } from '../../../js/utils/avatar.js';
import {
  editProfileRedirectListener,
  redirectToEditProfile,
} from '../../../js/event-listeners/profiles/update.js';

//https://mdbootstrap.com/docs/standard/extended/profiles/

export async function displayProfile() {
  if (isLoggedIn()) {
    let returnedHTML = await loggedInDisplay();
    addListeners();
    return returnedHTML;
  } else {
    location.href = 'login.html';
  }
}

async function loggedInDisplay() {
  let profile = await getProfile();
  //let listings = await getProfile('listings');
  let avatar = setAvatar();
  let display = `
<section class="h-100 gradient-custom-2">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card">
          <div class="rounded-top text-white d-flex flex-row" style="background-color: #000; height:200px;">
            <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px;">
              <img src="${avatar}"
                alt="${profile.name}" class="img-fluid img-thumbnail mt-4 mb-2"
                style="width: 150px; z-index: 1">
              
            </div>
            <div class="ms-3" style="margin-top: 130px;">
              <h5>${profile.name}</h5>
              <p>${profile.email}</p>
            </div>
          </div>
          <a href="update-profile.html" type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark"
                style="z-index: 1;">
                Edit profile
              </a>
          <div class="p-4 text-black" style="background-color: #f8f9fa;">
            <div class="d-flex justify-content-end text-center py-1">
              <div>
                <p class="mb-1 h5">${profile.credits}</p>
                <p class="small text-muted mb-0">Credits</p>
              </div>
              <div class="px-3">
                <p class="mb-1 h5">${profile._count.listings}</p>
                <p class="small text-muted mb-0">Listings</p>
              </div>
              <div>
                <p class="mb-1 h5">${profile.wins.length}</p>
                <p class="small text-muted mb-0">Wins</p>
              </div>
            </div>
          </div>
          <br>

            <div class="d-flex justify-content-center align-items-center mb-4">
              <p class="lead fw-normal mb-0">Recent listings</p>
            </div>

            <div class="row g-2">
              <div class="col mb-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                  alt="image 1" class="w-100 rounded-3">
              </div>
              <div class="col mb-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                  alt="image 1" class="w-100 rounded-3">
              </div>
            </div>
            <div class="row g-2">
              <div class="col">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                  alt="image 1" class="w-100 rounded-3">
              </div>
              <div class="col">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                  alt="image 1" class="w-100 rounded-3">
              </div>
            </div>


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

function addListeners() {
  window.addEventListener('DOMContentLoaded', (event) => {
    editProfileRedirectListener();
  });
}
