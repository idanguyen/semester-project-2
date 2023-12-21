import { login } from '../../api/authentication/login.js';

/**
 * This is the listener to add to the login button, so that you get redirected to the correct page for login.
 * @function
 */
export function goToLoginHeaderListener() {
  let loginBtn = document.getElementById('log-in-btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', loginHeader);
  }
}

/**
 * This is the button to make the login header refer to the login page.
 * @function
 */
function loginHeader() {
  try {
    location.href = 'login.html';
  } catch {
    return alert('There was an issue going to the login page!');
  }
}

/**
 * This listens to the login button and tries to login the user when the login button is pressed
 * @function
 */
export async function loginUserListener() {
  let loginBtn = document.getElementById('main-login-btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', await loginUser);
  }
}

/**
 * This is from Noroff public repository. Used to login a user. The values are taken from two input elements in
 * login.html
 * @function
 */
async function loginUser() {
  const email = document.getElementById('email-lgn').value;
  const password = document.getElementById('password-lgn').value;

  try {
    await login(email, password);
    window.location.href = 'index.html';
  } catch (error) {
    document.getElementById('error-lgn').innerHTML = error;
    document.getElementById('error-lgn').style.color = 'red';
  }
}
