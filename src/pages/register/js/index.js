import { displayCreateUser } from './display.js';
import { displayHeader, displayFooter } from '../../common/js/index.js';
import { updateLoginHTML } from '../../../js/localstorage/state.js';

let headerContainer = document.querySelector('.headerContainer');
let footerContainer = document.querySelector('.footerContainer');
let createUserContainer = document.querySelector('.createUserContainer');

document.onload = updateLoginHTML();
headerContainer.innerHTML = displayHeader();
createUserContainer.innerHTML = await displayCreateUser();
footerContainer.innerHTML = displayFooter();
