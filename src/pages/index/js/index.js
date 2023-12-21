import { displayHeader, displayFooter } from '../../common/js/index.js';
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
