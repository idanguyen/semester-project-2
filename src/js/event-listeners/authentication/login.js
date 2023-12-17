import { login } from '../../api/authentication/login.js';

export function goToLoginHeaderListener() {
  let loginBtn = document.getElementById('log-in-btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', loginHeader);
  }
}

function loginHeader() {
  try {
    location.href = 'login.html';
  } catch {
    return alert('There was an issue going to the login page!');
  }
}

export async function loginUserListener() {
  let loginBtn = document.getElementById('main-login-btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', await loginUser);
  }
}

//update error
async function loginUser() {
  const email = document.getElementById('email-lgn').value;
  const password = document.getElementById('password-lgn').value;

  try {
    await login(email, password);
    window.location.href = 'index.html';
  } catch {
    return alert('There was a problem logging into your account');
  }
}
