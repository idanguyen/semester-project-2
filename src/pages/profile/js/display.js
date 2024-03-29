import { isLoggedIn } from '../../../js/localstorage/state.js';
import { getProfile } from '../../../js/api/profiles/get.js';
import { setAvatar } from '../../../js/utils/avatar.js';
import {
  editProfileRedirectListener,
  redirectToEditProfile,
} from '../../../js/event-listeners/profiles/update.js';
import { createImage } from '../../../js/utils/image.js';

/**
 * This displays the profile screen of whoever is logged in. If you are not logged in you are redirected to the login page.
 * Source: The display is inspired from: https://mdbootstrap.com/docs/standard/extended/profiles/
 * @function
 * @returns {string} HTML element for the displayContainer.
 */
export async function displayProfile() {
  if (isLoggedIn()) {
    let returnedHTML = await loggedInDisplay();
    addListeners();
    return returnedHTML;
  } else {
    location.href = 'login.html';
  }
}

/**
 * The function creates an image or gets the correct image for the media listing.
 * @function
 * @param {JSON} listings the user listings
 * @param {JSON} index the index you want to check.
 * @returns {string} the image in a html element.
 */
function getMedia(listings, index) {
  let image = listings[listings.length - index].media;
  if (image.length === 0) {
    image = './src/pages/common/images/standard-listing.jpeg';
  }
  return `<img src="${image}" alt="image 1" class="w-100 "></img>`;
}

/**
 * This displays the profile screen of whoever is logged in.
 * Source: The display is inspired from: https://mdbootstrap.com/docs/standard/extended/profiles/
 * @function
 * @returns {string} HTML element for the displayContainer.
 */
async function loggedInDisplay() {
  let profile = await getProfile();
  let avatar = setAvatar();
  let listings = await getProfile('listings');
  let display = `
<section class="h-100 gradient-custom-2">
<div class="d-flex justify-content-center">
    <h1 class="">My Profile</h1>
  </div>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card">
          <div class="rounded-top text-white d-flex flex-row" style="background-color: #000; height:200px;">
            <div class="img-avatar ms-4 mt-5 d-flex flex-column" style="width: 150px;">
              <img class="img-avatar" src="${avatar}"
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
          <div class="d-flex justify-content-between align-items-center mb-4">
              <p class="lead fw-normal mb-0 p-3">Recent Listings</p>
              <p class="mb-0 p-3"><a href="index.html?profile=${profile.name}" class="text-muted">Show all</a></p>
          </div>
`;

  display += addRecentListings(listings);

  display += `
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
  window.addEventListener('DOMContentLoaded', (event) => {
    editProfileRedirectListener();
  });
}

/**
 * The function creates a HTML code snippet to display recent listings of the user.
 * @function
 * @param {JSON} listings the 4 or less most recent user listings
 */
function addRecentListings(listings) {
  let length = listings.length;
  let image = './src/pages/common/images/standard-listing.jpeg';
  if (length === 0) {
    return '';
  } else if (length === 1) {
    return `
            <div class="row g-2">
              <div class="img-card col mb-2 card-transition" onclick="window.location='listing.html?listing=${
                listings[0].id
              }';">
                ${getMedia(listings, length)}
              </div>
              <div class="img-card col mb-2">
                <img src="${image}" alt="image 1" class="w-100 "></img>
              </div>
            </div>
`;
  } else if (length === 2) {
    return `
            <div class="row g-2">
              <div class="img-card col mb-2 card-transition" onclick="window.location='listing.html?listing=${
                listings[0].id
              }';">
                ${getMedia(listings, length)}
              </div>
              <div class="img-card col mb-2 card-transition" onclick="window.location='listing.html?listing=${
                listings[1].id
              }';">
                ${getMedia(listings, length - 1)}
              </div>
            </div>
`;
  } else if (length === 3) {
    return `
            <div class="row g-2">
              <div class="img-card col mb-2 card-transition" onclick="window.location='listing.html?listing=${
                listings[0].id
              }';">
                ${getMedia(listings, length)}
              </div>
              <div class="img-card col mb-2 card-transition" onclick="window.location='listing.html?listing=${
                listings[1].id
              }';">
                ${getMedia(listings, length - 1)}
              </div>
            </div>
            <div class="row g-2">
              <div class="img-card col card-transition" onclick="window.location='listing.html?listing=${
                listings[2].id
              }';">
                ${getMedia(listings, length - 2)}
              </div>
              <div class="img-card col">
                <img src="${image}" alt="image 1" class="w-100 "></img>
              </div>
            </div>
`;
  } else {
    return `
            <div class="row g-2">
              <div class="img-card col mb-2 card-transition" onclick="window.location='listing.html?listing=${
                listings[0].id
              }';">
                ${getMedia(listings, length)}
              </div>
              <div class="img-card col mb-2 card-transition" onclick="window.location='listing.html?listing=${
                listings[1].id
              }';">
                ${getMedia(listings, length - 1)}
              </div>
            </div>
            <div class="row g-2">
              <div class="img-card col card-transition" onclick="window.location='listing.html?listing=${
                listings[2].id
              }';">
                ${getMedia(listings, length - 2)}
              </div>
              <div class="img-card col card-transition" onclick="window.location='listing.html?listing=${
                listings[3].id
              }';">
                ${getMedia(listings, length - 3)}
              </div>
            </div>
`;
  }
}
