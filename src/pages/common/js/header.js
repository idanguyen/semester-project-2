import { isLoggedIn, updateLoginHTML } from '../../../js/localstorage/state.js';
import { goToLoginHeaderListener } from '../../../js/event-listeners/authentication/login.js';
import { logoutHeaderListener } from '../../../js/event-listeners/authentication/logout.js';
import { goHomeListener } from '../../../js/event-listeners/ui/ui.js';
import {
  editProfileRedirectListener,
  updatePictureListener,
} from '../../../js/event-listeners/profiles/update.js';
import { setAvatar } from '../../../js/utils/avatar.js';
import { sleep } from '../../../js/utils/sleep.js';
import { getLogo } from '../../../js/utils/logo.js';

/**
 * The function displays the header created in another function
 * Sources: There are several different sources used for this header, with this source being vital : https://www.shecodes.io/athena/36478-how-to-create-a-search-input-and-button-in-javascript
 * others: https://stackoverflow.com/questions/41513463/bootstrap-align-navbar-items-to-the-right
 * @function
 * @returns {string} Returns the HTML code for the footer
 */
export function displayHeader() {
  updateLoginHTML();
  let display = createNavigation();
  addListeners();
  return display;
}

/**
 * The function creates the header and makes it into a html string.
 * Sources: There are several different sources used for this header, with this source being vital : https://www.shecodes.io/athena/36478-how-to-create-a-search-input-and-button-in-javascript
 * others: https://stackoverflow.com/questions/41513463/bootstrap-align-navbar-items-to-the-right
 * @function
 * @returns {string} Returns the HTML code for the footer
 */
function createNavigation() {
  let avatar = setAvatar();
  let logo = getLogo();
  let newNav = `

<nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <div class="container-fluid">
    <nav class="navbar navbar-light bg-primary">
  <div class="container">
    <a class="navbar-brand" href="index.html">
      <img src="${logo}" alt="header-logo" width="25" height="24">
    </a>
  </div>
</nav>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <form class="d-flex">
            <input id="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" list="search-suggestions" >
            <datalist id="search-suggestions">
              <option value="Christmas">
              <option value="Dog">
              <option value="Car">
              <option value="Cat">
            </datalist>
          </form>
        </li>
      </ul>`;
  if (isLoggedIn()) {
    newNav += `
    <div>
        <a id="create-listing-btn" class="btn btn-primary" style="color:white; cursor:pointer"  href="create-listing.html" >Create Listing</a>
        <a id="log-out-btn" class="btn btn-primary " style="color:white; cursor:pointer" href="index.html" >Log Out</a>
    </div>`;
  } else {
    newNav += `
        <a id="log-in-btn" class="btn btn-primary pull-right" style="color:white; cursor:pointer" href="login.html">Log In</a>`;
  }

  newNav += `
      <div class="img-avatar">
        <img src="${avatar}" alt="stock-profile" onclick="window.location='profile.html'" class="img-avatar rounded-circle cursor-hand">
      </div>
    </div>
  </div>
</nav>
`;
  return newNav;
}

/**
 * The function adds actionlisteners to the HTML elements
 * @function
 */
function addListeners() {
  sleep(1000).then(() => {
    document.getElementById('search').addEventListener('search', updatesearch);

    goToLoginHeaderListener();
    logoutHeaderListener();
    goHomeListener('home-btn-header');
    editProfileRedirectListener();
    updatePictureListener();
  });
}

/**
 * The function adds actionlisteners to the search, and converts the search to lower case.
 * @function
 */
function updatesearch() {
  location.href =
    'index.html?search=' +
    document.getElementById('search').value.toLowerCase();
}
