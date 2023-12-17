import { displayHeader } from '../../common/js/header.js';
import { displayFooter } from '../../common/js/footer.js';
import { updateLoginHTML } from '../../../js/localstorage/state.js';
import { displayLogin } from './display.js';

let headerContainer = document.querySelector('.headerContainer');
let loginContainer = document.querySelector('.loginContainer');
let footerContainer = document.querySelector('.footerContainer');

document.onload = updateLoginHTML();
headerContainer.innerHTML = displayHeader();
loginContainer.innerHTML = await displayLogin();
footerContainer.innerHTML = displayFooter();
