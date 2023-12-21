import { displayHeader, displayFooter } from '../../common/js/index.js';
import { displayListing } from './display.js';
import { updateLoginHTML } from '../../../js/localstorage/state.js';

let headerContainer = document.querySelector('.headerContainer');
let listingContainer = document.querySelector('.listingContainer');
let footerContainer = document.querySelector('.footerContainer');

document.onload = updateLoginHTML();
headerContainer.innerHTML = displayHeader();
listingContainer.innerHTML = await displayListing();
footerContainer.innerHTML = displayFooter();
