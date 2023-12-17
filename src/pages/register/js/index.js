import { displayCreateUser } from './display.js';
import { displayHeader } from '../../common/js/header.js';
import { displayFooter } from '../../common/js/footer.js';
import { updateLoginHTML } from '../../../js/localstorage/state.js';

let headerContainer = document.querySelector('.headerContainer');
let footerContainer = document.querySelector('.footerContainer');
let createUserContainer = document.querySelector('.createUserContainer');

document.onload = updateLoginHTML();
headerContainer.innerHTML = displayHeader();
createUserContainer.innerHTML = await displayCreateUser();
footerContainer.innerHTML = displayFooter();
