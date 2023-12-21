import { getListings } from '../../../js/api/listings/get.js';
import { sleep } from '../../../js/utils/sleep.js';
import { isLoggedIn } from '../../../js/localstorage/state.js';
import { createImage } from '../../../js/utils/image.js';
import { calculateTimeLeft } from '../../../js/utils/time.js';
import { getParameter } from '../../../js/utils/parameter-management.js';
import { checkTitle } from '../../../js/utils/card.js';

let index = 0;
let listingsContainer = document.querySelector('.listingsContainer');
let listings = await getListingsForDisplay();

async function getListingsForDisplay() {
  let search = '';
  if (getParameter('search')) {
    search = getParameter('search');
  }
  let listingList = await getListings('bids', search);
  if (listingList.length === 0) {
    alert('No results on search term: ' + search + ' , returning to main page');
    location.href = 'index.html';
  }
  return listingList;
}

export async function displayListings(displayAmount) {
  isLoggedIn();
  index = displayAmount;
  let cards = `

  <div class="container mt-3 mb-3">
  <div class="row">`;
  for (let i = index - displayAmount; i < index; i++) {
    cards += createCard(listings[i]);
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

function createCard(listing) {
  let cost = 0;
  let image = createImage(listing.media[0]);
  let timeLeft = calculateTimeLeft(listing.endsAt);
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
      <p class="d-flex card-text justify-content-center">${timeLeft}</p> 
    </div>
    <div class="" onclick="window.location='listing.html?listing=${listing.id}';">
    </div>
  </div>
`;
  return card;
}

function addListeners() {
  sleep(500).then(() => {
    document
      .getElementById('load-more-btn')
      .addEventListener('click', loadMore);
  });
}

async function loadMore() {
  updateDisplay('loadMore');
  listingsContainer.innerHTML = await displayListings(index);
  if (listings.length === index) {
    document.getElementById('load-more-btn').style.display = 'none';
  }
}

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
