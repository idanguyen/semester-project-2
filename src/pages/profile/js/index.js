import { displayProfile } from './display.js';
import { displayHeader, displayFooter } from '../../common/js/index.js';
import { updateLoginHTML } from '../../../js/localstorage/state.js';

let headerContainer = document.querySelector('.headerContainer');
let profileContainer = document.querySelector('.profileContainer');
let footerContainer = document.querySelector('.footerContainer');

document.onload = updateLoginHTML();
headerContainer.innerHTML = displayHeader();
profileContainer.innerHTML = await displayProfile();
footerContainer.innerHTML = displayFooter();
