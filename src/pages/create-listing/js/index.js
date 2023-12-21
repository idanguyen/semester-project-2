import { displayCreateListing } from './display.js';
import { displayHeader, displayFooter } from '../../common/js/index.js';
import { updateLoginHTML } from '../../../js/localstorage/state.js';

let headerContainer = document.querySelector('.headerContainer');
let listingContainer = document.querySelector('.listingContainer');
let footerContainer = document.querySelector('.footerContainer');

document.onload = updateLoginHTML();
headerContainer.innerHTML = displayHeader();
listingContainer.innerHTML = await displayCreateListing();
footerContainer.innerHTML = displayFooter();
