import { displayProfile } from './display.js';
import { displayHeader } from '../../common/js/header.js';
import { displayFooter } from '../../common/js/footer.js';
import { updateLoginHTML } from '../../../js/localstorage/state.js';

let headerContainer = document.querySelector('.headerContainer');
let profileContainer = document.querySelector('.profileContainer');
let footerContainer = document.querySelector('.footerContainer');

document.onload = updateLoginHTML();
headerContainer.innerHTML = displayHeader();
profileContainer.innerHTML = await displayProfile();
footerContainer.innerHTML = displayFooter();
