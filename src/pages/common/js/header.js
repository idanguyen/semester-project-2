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

export function displayHeader() {
  updateLoginHTML();
  let display = createNavigation();
  addListeners();
  return display;
}

function createNavigation() {
  let avatar = setAvatar();
  let navigation = `
  </div>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <div class="container-fluid">`;
  if (isLoggedIn()) {
    navigation += `
        <a id="log-out-btn" class="navbar-brand" style="cursor:pointer" href="index.html">Log Out</a>`;
  } else {
    navigation += `
        <a id="log-in-btn" class="navbar-brand" style="cursor:pointer" href="login.html">Log In</a>`;
  }
  navigation += `
        <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a id="home-btn-header" class="nav-link active" >Home</a>
                </li>
                <li class="nav-item">
                    <div class="container-fluid ">
                    <form class="d-flex input-group w-auto">
                    <input
                        type="search"
                        class="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                    />
                    <span class="input-group-text text-white border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                    </span>
                    </form>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a type="button" id="create-listing-btn" class="btn btn-outline-dark" data-mdb-ripple-color="dark" style="cursor:pointer" href="create-listing.html">Create Listing</a>
                </li>
                <li class="nav-item dropdown">
                    <img class="rounded-circle" src="${avatar}" alt="stock-profile" onclick="window.location='profile.html'">
                </li>
            </ul>
        </div>
    </div>
</nav>
  `;
  return navigation;
}

function addListeners() {
  sleep(1000).then(() => {
    goToLoginHeaderListener();
    logoutHeaderListener();
    goHomeListener('home-btn-header');
    editProfileRedirectListener();
    updatePictureListener();
  });
}

//https://www.freepik.com/free-vector/hand-drawn-different-people-icons-pack_17893869.htm#page=3&query=avatar&position=0&from_view=keyword&track=sph&uuid=42933467-2f40-4499-a897-c0b0da3c4784
//https://stackoverflow.com/questions/41513463/bootstrap-align-navbar-items-to-the-right
