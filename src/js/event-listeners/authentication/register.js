import { register } from '../../api/authentication/register.js';
import { login } from '../../api/authentication/login.js';

export function goToRegisterPageListener() {
  let registerBtn = document.getElementById('go-to-register-btn');
  if (registerBtn) {
    registerBtn.addEventListener('click', goToRegister);
  }
}

function goToRegister() {
  try {
    location.href = 'register.html';
  } catch {
    return alert('There was an issue going to the registration page!');
  }
}

export async function registerUserListener() {
  let registerBtn = document.getElementById('register-btn');
  if (registerBtn) {
    registerBtn.addEventListener('click', await registerUser);
  }
}

//update error
async function registerUser() {
  const email = document.getElementById('email-reg').value;
  const name = document.getElementById('username-reg').value;
  const password = document.getElementById('password-reg').value;

  try {
    await register(email, name, password);
  } catch {
    return alert('There was a problem creating your account');
  }

  try {
    await login(email, password);
    location.reload();
  } catch {
    return alert('There was a problem logging into your account');
  }
}
