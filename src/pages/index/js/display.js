import { getListings, getListing } from '../../../js/api/listings/get.js';
import { removeItem } from '../../../js/localstorage/remove-item.js';
import { sleep } from '../../../js/utils/sleep.js';
import { isLoggedIn } from '../../../js/localstorage/state.js';

let index = 0;
let listingsContainer = document.querySelector('.listingsContainer');

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

  </div>
  <div class="align-content-center">
    <button id="bck-btn" class="btn btn-primary ">Back</button>
    <button id="fwd-btn" class="btn btn-primary justify-content-end">Forward</button> 
  </div>

</div>
  `;
  addListeners();

  return cards;
}

function createCard(listing) {
  let cost = 0;
  try {
    if (listing.bids[0].amount != null) {
      cost = listing.bids[listing.bids.length - 1].amount;
    }
  } catch (error) {
    alert(error);
  }
  let card = `
    <div class="col-md-3 col-sm-6 ">
      <div class="card card-block" onclick="window.location='listing.html?listing=${listing.id}';">
        
        <img src=${listing.media[0]} alt="${listing.id}>
        <p class="d-flex justify-content-center">${listing.title}</p>

        <h3 class="card-title text-right">Current Bid: ${cost}</h3>
        <p class="card-text">Listing ends at: ${listing.endsAt}</p> 
      </div>
      <div class="card" onclick="window.location='listing.html?listing=${listing.id}';">
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

async function back() {
  updateDisplay('back');
  listingsContainer.innerHTML = await displayListings(index);
}

async function forward() {
  updateDisplay('forward');
  listingsContainer.innerHTML = await displayListings(index);
}

async function updateDisplay(change) {
  switch (change) {
    case 'forward': {
      let newFwdItems = index + 8;
      index = checkRange(newFwdItems);
      break;
    }
    case 'back': {
      let newBckItems = index - 8;
      index = checkRange(newBckItems);
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
