import { displayCreateListing } from './display.js';
import { displayHeader } from '../../common/js/header.js';
import { displayFooter } from '../../common/js/footer.js';
import { updateLoginHTML } from '../../../js/localstorage/state.js';

let headerContainer = document.querySelector('.headerContainer');
let listingContainer = document.querySelector('.listingContainer');
let footerContainer = document.querySelector('.footerContainer');

document.onload = updateLoginHTML();
headerContainer.innerHTML = displayHeader();
listingContainer.innerHTML = await displayCreateListing();
footerContainer.innerHTML = displayFooter();
