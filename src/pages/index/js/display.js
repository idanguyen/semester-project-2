import { getListings, getListing } from '../../../js/api/listings/get.js';
import { removeItem } from '../../../js/localstorage/remove-item.js';
import { sleep } from '../../../js/utils/sleep.js';
import { isLoggedIn } from '../../../js/localstorage/state.js';

let index = 0;

export async function displayListings(displayAmount) {
  isLoggedIn();
  index = displayAmount;
  let listings = await getListings();
  let cards = `

  <div class="container mt-2 mb-6">
  <div class="row">`;
  for (let i = index - 8; i < index; i++) {
    let listing = await getListing(listings[i].id, 'bids');
    cards += createCard(listing);
  }
  cards += `
  <button id="fwd-btn" class="card-text">Forward</button> 
  <button id="bck-btn" class="card-text">Back</button>
  </div>

  </div>
  `;
  addListeners();

  return cards;
}

function createCard(listing) {
  let card = `
    <div class="col-md-3 col-sm-6">
      <div class="card card-block" onclick="window.location='listing.html?listing=${
        listing.id
      }';">
        <h4 class="card-title text-right">Current Bid: ${
          listing.bids[listing.bids.length - 1].amount
        }</h4>
        <img src=${listing.media[0]} alt="${listing.id}>
        <h5 class="card-title mt-3 mb-3">${listing.title}</h5>
        <p class="card-text">${listing.endsAt}</p> 
      </div>
      <div class="card">
        <button class="card-text">Bid</button> 
      </div>
      <div class="card" onclick="window.location='listing.html?listing=${
        listing.id
      }';">
        <button class="card-text">View</button> 
      </div>
    </div>
`;
  return card;
}

function addListeners() {
  sleep(1000).then(() => {
    document.getElementById('fwd-btn').addEventListener('click', forward);
    document.getElementById('bck-btn').addEventListener('click', back);
  });
}

function back() {
  updateDisplay('back');
}

function forward() {
  updateDisplay('forward');
}

async function updateDisplay(change) {
  switch (change) {
    case 'forward': {
      let newFwdItems = index + 8;
      await displayListings(checkRange(newFwdItems));
      console.log(index);
      break;
    }
    case 'back': {
      let newBckItems = index - 8;
      await displayListings(checkRange(newBckItems));
      console.log(index);
      break;
    }
    default: {
      alert('Something went wrong');
    }
  }
}

function checkRange(amount) {
  if (amount < 8) {
    index = 8;
    return 8;
  }
  if (amount > 92) {
    index = 92;
    return 92;
  }
  return amount;
}
