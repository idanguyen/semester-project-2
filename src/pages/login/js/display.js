import { goToRegisterPageListener } from '../../../js/event-listeners/authentication/register.js';
import { loginUserListener } from '../../../js/event-listeners/authentication/login.js';

export async function displayLogin() {
  let display = `
  <section class=" h-100 gradient-custom-2">
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="row">
      <div class="col-md-12">
      </div>
      <div class="row border rounded-5 p-3 shadow">
        <div
          class="col-md-6 rounded-4 d-flex justify-content-center flex-column"
          style="background: #005f73"
        >
        <img class="login" src="src/pages/login/images/login-image.jpg" alt="login-image">
        </div>
        <div class="col-md-6 login-box">
          <div class="row justify-content-center">
            <div class="input-group mb-3">
              <input
                type="email"
                id="email-lgn"
                name="email"
                class="form-control form-control-lg bg-light fs-6"
                placeholder="Email address"
                required="required"
              />
            </div>
            <div class="input-group mb-1">
              <input
                type="password"
                id="password-lgn"
                name="password"
                class="form-control form-control-lg bg-light fs-6"
                required="required"
                minlength="8"
                placeholder="Password"
              />
            </div>
            <div class="input-group mb-5 d-flex justify-content-between">
              <p id="error"></p>
            </div>
            <div class="input-group mb-3">
              <button
                class="btn btn-lg btn-primary w-100 fs-6"
                id="main-login-btn"
              >
                Login
              </button>
            </div>
            <div class="input-group mb-3">
              <button
                id="go-to-register-btn"
                class="btn btn-lg btn-light w-100 fs-6"
              >
                Sign up
              </button>
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
    loginUserListener();
    goToRegisterPageListener();
  });
}
