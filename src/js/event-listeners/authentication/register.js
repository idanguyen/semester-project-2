import { register } from '../../api/authentication/register.js';
import { login } from '../../api/authentication/login.js';

/**
 * This listens to the register button on the login page and adds the event to go to register on it.
 * @function
 */
export function goToRegisterPageListener() {
  let registerBtn = document.getElementById('go-to-register-btn');
  if (registerBtn) {
    registerBtn.addEventListener('click', goToRegister);
  }
}

/**
 * This redirects the user to the register page.
 * @function
 */
function goToRegister() {
  try {
    location.href = 'register.html';
  } catch {
    return alert('There was an issue going to the registration page!');
  }
}

/**
 * This is a button listener for when the register button is pressed.
 * @function
 */
export async function registerUserListener() {
  let registerBtn = document.getElementById('register-btn');
  if (registerBtn) {
    registerBtn.addEventListener('click', await registerUser);
  }
}

/**
 * This is the functionality to register a user. It checks the input elements from register.html and tries to create a user.
 * @function
 */
async function registerUser() {
  const email = document.getElementById('email-reg').value;
  const name = document.getElementById('username-reg').value;
  const password = document.getElementById('password-reg').value;

  try {
    await register(email, name, password);
  } catch (error) {
    document.getElementById('error-reg').innerHTML = error;
  }

  try {
    await login(email, password);
    location.reload();
  } catch (error) {
    return alert('There was a problem logging into your new account');
  }
}
