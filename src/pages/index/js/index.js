import { displayHeader } from '../../common/js/header.js';
import { displayFooter } from '../../common/js/footer.js';
import { displayListings } from './display.js';
import { updateLoginHTML } from '../../../js/localstorage/state.js';

let headerContainer = document.querySelector('.headerContainer');
let listingsContainer = document.querySelector('.listingsContainer');
let footerContainer = document.querySelector('.footerContainer');

let listings = await displayListings(8);

document.onload = updateLoginHTML();
headerContainer.innerHTML = displayHeader();
listingsContainer.innerHTML = listings;

footerContainer.innerHTML = displayFooter();
