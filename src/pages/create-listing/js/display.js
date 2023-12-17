import { postListing } from '../../../js/api/listings/post.js';
import { isLoggedIn } from '../../../js/localstorage/state.js';
import { sleep } from '../../../js/utils/sleep.js';

export async function displayCreateListing() {
  let loginStatus = isLoggedIn();
  if (loginStatus) {
    let display = `
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="row">
      <div class="col-md-12">
        <div
          class="fs-1 text-center"
        >
          Create Listing
        </div>
      </div>
      <div class="row border rounded-5 p-3 shadow">
        <div
          class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column"
          style="background: #005F73"
        >
        <img class="login" src="src/pages/login/images/login-image.jpg" alt="login-image">
        </div>
        <div class="col-md-6 login-box">
          <div class="row justify-content-center">
            <div class="input-group mb-3">
              <input
                type="title"
                id="title-cr-lst"
                name="title"
                class="form-control form-control-lg bg-light fs-6"
                placeholder="Title"
                required="required"
              />
            </div>
            <div class="input-group mb-3">
                  <input
                    type="description"
                    id="description-cr-lst"
                    name="description"
                    class="form-control form-control-lg bg-light fs-6"
                    placeholder="Description"
                    required="optional"
                  />
            </div>
            <div class="input-group mb-3">
              <input
                type="tags"
                id="tags-cr-lst"
                name="tags"
                class="form-control form-control-lg bg-light fs-6"
                placeholder="Tag"
                required="optional"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="media"
                id="media-cr-lst"
                name="media"
                class="form-control form-control-lg bg-light fs-6"
                placeholder="Media (url)"
                required="optional"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="endsyear"
                id="endsyear-cr-lst"
                name="endsyear"
                class="form-control form-control-lg bg-light fs-6"
                placeholder="Ends At Year (2023-XXXX)"
                required="required"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="endsmonth"
                id="endsmonth-cr-lst"
                name="endsmonth"
                class="form-control form-control-lg bg-light fs-6"
                placeholder="Ends At Month (1-12)"
                required="required"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="endsday"
                id="endsday-cr-lst"
                name="endsday"
                class="form-control form-control-lg bg-light fs-6"
                placeholder="Ends At Day (1-31)"
                required="required"
              />
            </div>
            <div class="input-group mb-5 d-flex justify-content-between">
              <p id="error-listing" style="color:red;"></p>
            </div>
            <div class="input-group mb-3">
              <button
                id="register-listing-btn"
                class="btn btn-lg btn-primary w-100 fs-6"
              >
                Create Listing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
    addListeners();
    return display;
  } else {
    location.href = 'login.html';
  }
}

function addListeners() {
  sleep(1000).then(() => {
    document
      .getElementById('register-listing-btn')
      .addEventListener('click', postListing);
  });
}
