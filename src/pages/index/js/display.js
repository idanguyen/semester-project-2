import { getListings } from '../../../js/api/listings/get.js';
import { sleep } from '../../../js/utils/sleep.js';
import { isLoggedIn } from '../../../js/localstorage/state.js';
import {
  createImage,
  getRemaingAuctionTime,
  getParameter,
  checkTitle,
} from '../../../js/utils/index.js';

let index = 0;
let listingsContainer = document.querySelector('.listingsContainer');
let listings = await getListingsForDisplay();

/**
 * Gets the initial listings to display with user and search taken into account.
 * @function
 * @returns listings to display.
 */
async function getListingsForDisplay() {
  let search = '';
  if (getParameter('search')) {
    search = getParameter('search');
  }
  let profile = '';
  if (getParameter('profile')) {
    profile = getParameter('profile');
  }
  let listingList = await getListings('bids', search, profile);
  if (listingList.length === 0) {
    alert('No results on search term: ' + search + ' , returning to main page');
    location.href = 'index.html';
  }
  return listingList;
}

/**
 * Displays the listings with the proper amount
 * @function
 * @param displayAmount The number of cards to display.
 * @returns HTML for a card.
 */
export async function displayListings(displayAmount) {
  isLoggedIn();
  index = displayAmount;
  let cards = `
  <div class="d-flex justify-content-center">
    <h1 class="">Browse the Auction</h1>
  </div>
  <div class="container mt-3 mb-3">
  <div class="row">`;
  for (let i = index - displayAmount; i < index; i++) {
    if (listings[i]) {
      cards += createCard(listings[i]);
    }
  }
  cards += `

  </div>
  <div class="text-center pt-3">
    <button id="load-more-btn" class="btn btn-primary">Load More</button> 
  </div>

</div>

  `;
  addListeners();

  return cards;
}

/**
 * The function creates a card to display in the main page
 * Source: https://mdbootstrap.com/docs/standard/extended/product-cards/ Card design taken from here.
 * @function
 * @param listing The listing to create a card for.
 * @returns HTML for a card.
 */
function createCard(listing) {
  let cost = 0;
  console.log(listing);
  let image = createImage(listing.media[0]);
  let timeLeft = getRemaingAuctionTime(
    listing.endsAt,
    `timer-index-${listing.id}`,
  );
  let title = checkTitle(listing.title);
  try {
    if (listing.bids[0].amount != null) {
      cost = listing.bids[listing.bids.length - 1].amount;
    }
  } catch (error) {
    console.log(error);
  }
  let card = `
  <div class="col-md-3 col-sm-6 pb-3">
    <div class="p-2 card card-transition card-block" onclick="window.location='listing.html?listing=${listing.id}';">
      <div class="img-card justify-content-center">
        <img src=${image} alt="${listing.id} class="img-card">
      </div>
      <h3 class="d-flex justify-content-center">${title}</h3>
      <br>
      <p class="d-flex justify-content-center">${cost} NOK</p>
      <p id="timer-index-${listing.id}"class="d-flex card-text justify-content-center">${timeLeft}</p> 
    </div>
  </div>
`;
  return card;
}

/**
 * The function adds actionlisteners to the HTML elements
 * @function
 */
function addListeners() {
  sleep(500).then(() => {
    document
      .getElementById('load-more-btn')
      .addEventListener('click', loadMore);
  });
}

/**
 * The function loads more listings to be seen other than just the initial 8
 * @function
 */
async function loadMore() {
  updateDisplay('loadMore');
  listingsContainer.innerHTML = await displayListings(index);
  if (listings.length === index) {
    document.getElementById('load-more-btn').style.display = 'none';
  }
}

/**
 * The function loads the listings you want to display
 * @function
 * @param change The flag to change.
 */
async function updateDisplay(change) {
  switch (change) {
    case 'loadMore': {
      let newFwdItems = index + 8;
      index = checkRange(newFwdItems);
      break;
    }
    default: {
      throw new Error('Issue with index');
    }
  }
}

/**
 * The function figures out how many listings to display
 * @function
 * @param amount The amount of listings.
 */
function checkRange(amount) {
  if (amount < 8) {
    index = 8;
    return 8;
  }
  if (amount > listings.length) {
    index = listings.length;
    return listings.length;
  }
  return amount;
}
