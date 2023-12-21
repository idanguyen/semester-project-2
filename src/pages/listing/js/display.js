import { getParameter } from '../../../js/utils/parameter-management.js';
import { getListing } from '../../../js/api/listings/get.js';
import { sleep } from '../../../js/utils/sleep.js';
import { bid } from '../../../js/api/listings/post.js';
import { deleteListing } from '../../../js/api/listings/delete.js';
import { isLoggedIn } from '../../../js/localstorage/state.js';
import { getItem } from '../../../js/localstorage/get-item.js';
import { stringCompare } from '../../../js/utils/strings.js';
import { createImage } from '../../../js/utils/image.js';
import { getRemaingAuctionTime } from '../../../js/utils/time.js';

let showBidsYN = false;

async function deleteFunction() {
  let id = getParameter('listing');
  deleteListing(id);
  sleep(500).then(() => {
    location.href = 'index.html';
  });
}

async function showBids() {
  showBidsYN = !showBidsYN;
  document.querySelector('.listingContainer').innerHTML =
    await displayListing();
}

function checkOwner(listingOwner) {
  let owner = listingOwner.seller.name;
  if (stringCompare(owner, getItem('profile').name) === 0) {
    return true;
  } else {
    return false;
  }
}

export async function displayListing() {
  let card = '';
  let id = getParameter('listing');
  let listing = await getListing(id, 'bids');
  if (isLoggedIn()) {
    let listingOwner = await getListing(id, 'seller');
    let isOwner = checkOwner(listingOwner);
    card = createListing(listing, isOwner);
    addListeners(isOwner);
  } else {
    card = createListing(listing, false);
  }

  return card;
}

function createListing(listing, isOwner) {
  let cost = 0;
  let image = createImage(listing.media[0]);
  let timeRemaining = getRemaingAuctionTime(
    listing.endsAt,
    `timer-${listing.id}`,
  );
  console.log(timeRemaining);
  try {
    if (listing.bids[0].amount != null) {
      cost = listing.bids[listing.bids.length - 1].amount;
    }
  } catch (error) {
    console.log(error);
  }
  let displayListings = `
  <section class=" h-100 gradient-custom-2">
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-4">
        <div class="card" style="border-radius: 15px;">
          <div>
            <img src="${image}"
              style="border-top-left-radius: 15px; border-top-right-radius: 15px;" class="img-fluid"
              alt="${listing.id}-listing" />
          </div>
          <div class="card-body pb-0">
            <div class="d-flex justify-content-center">
              <h2>${listing.title}</h2>
            </div>
             <br>

            <div class="d-flex">
              <p class="small text-muted just">${listing.description}</p>
            </div>
            <div class="d-flex justify-content-center">
              <p id="timer-${listing.id}">${timeRemaining}</p>
            </div>
          </div>


<hr class="my-0" />


          <div class="card-body pb-0">
            <div class="d-flex justify-content-center">
              <h3>${cost} NOK</h3>
            </div>
            <div class="d-flex justify-content-end">
              <p class="small text-muted just">${listing.bids.length} Bids</p>
            </div>
          </div>
          
`;
  if (isLoggedIn()) {
    displayListings += `
        <hr class="my-0" />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
              <input id="bid-amount" class="form-control" type="text" placeholder="Bid">
              <button id="bid-btn" type="button" class="btn btn-primary">Bid</button>
            </div>
              <button id="show-bids-btn" type="button" class="btn btn-light">Show Bids</button>
              `;
    if (isOwner) {
      displayListings += `
                <button id="del-btn" type="button" class="btn btn-danger">
                  Delete
                </button>
                `;
    }
  }
  displayListings += `
            </div>

`;
  if (showBidsYN) {
    displayListings += `
        <hr class="my-0" />
          <div class="card-body pb-0">
            <div class="d-flex">
              <h3>Bid History</h3>
            </div>
            <hr class="my-0" />
            `;
    for (let i = 0; i < listing.bids.length; i++) {
      displayListings += `
            <div class="d-flex justify-content-center">
              <h4>${listing.bids[i].amount} NOK</h4>
            </div>
            <div class="d-flex justify-content-end">
              <p>${listing.bids[i].bidderName}</p>
            </div>
            <hr class="my-0" />
            `;
    }

    displayListings += `
          </div>

`;
  }

  displayListings += `      
          <p id="error-bids-text" style="color:red;"></p>
        </div>
      </div>
    </div>
  </div>
</section>

`;
  return displayListings;
}

function addListeners(isOwner) {
  sleep(500).then(() => {
    document.getElementById('bid-btn').addEventListener('click', bid);
    document
      .getElementById('show-bids-btn')
      .addEventListener('click', showBids);

    if (isOwner) {
      document
        .getElementById('del-btn')
        .addEventListener('click', deleteFunction);
    }
  });
}

//https://mdbootstrap.com/docs/standard/extended/product-cards/
