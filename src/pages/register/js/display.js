import { registerUserListener } from '../../../js/event-listeners/authentication/register.js';

/**
 * Displays the pane to register a user.
 * Source: This was also used in my social media client javascript task
 * @function
 * @returns {string} HTML element for the displayContainer.
 */
export async function displayCreateUser() {
  return await createCreateUser();
}

/**
 * Creates the pane to register a user.
 * Source: This was also used in my social media client javascript task
 * @function
 * @returns {string} HTML element for the displayContainer.
 */
async function createCreateUser() {
  let display = `
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="row">
      <div class="col-md-12">
        <div
          class="fs-1 text-center"
        >
          Sign Up
        </div>
      </div>
      <div class="row border rounded-5 p-3 shadow">
        <div
          class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column"
        >
        <img class="rounded-5 login-image" src="src/pages/login/images/login-image.jpg" alt="login-image">
        </div>
        <div class="col-md-6 login-box container d-flex justify-content-center align-items-center">
          <div class="row justify-content-center">
            <div class="input-group mb-3">
              <input
                type="email"
                id="email-reg"
                name="email"
                class="form-control form-control-lg bg-light fs-6"
                placeholder="Email address"
                required="required"
              />
            </div>
            <div class="input-group mb-3">
                  <input
                    type="username"
                    id="username-reg"
                    name="username"
                    class="form-control form-control-lg bg-light fs-6"
                    placeholder="Username"
                    required="required"
                  />
                </div>
            <div class="input-group mb-1">
              <input
                type="password"
                id="password-reg"
                name="password"
                class="form-control form-control-lg bg-light fs-6"
                required="required"
                minlength="8"
                placeholder="Password"
              />
            </div>
            <div class="input-group mb-5 d-flex justify-content-between">
              <p id="error-reg" style="color:red;"></p>
            </div>
            <div class="input-group mb-3">
              <button
                id="register-btn"
                class="btn btn-lg btn-primary w-100 fs-6"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
  await addListeners();
  return display;
}

/**
 * The function adds actionlisteners to the HTML elements
 * @function
 */
async function addListeners() {
  window.addEventListener('DOMContentLoaded', (event) => {
    registerUserListener();
  });
}
