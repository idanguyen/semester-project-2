import { getParameter } from '../../../js/utils/parameter-management.js';
import { getListing } from '../../../js/api/listings/get.js';
import { sleep } from '../../../js/utils/sleep.js';
import { bid } from '../../../js/api/listings/post.js';

export async function displayListing() {
  let id = getParameter('listing');
  let listing = await getListing(id, 'bids');
  let card = createListing(listing);
  addListeners();
  return card;
}

function createListing(listing) {
  let cost = 0;
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
          <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src="${listing.media[0]}"
              style="border-top-left-radius: 15px; border-top-right-radius: 15px;" class="img-fluid"
              alt="${listing.id}" />
          </div>
          <div class="card-body pb-0">
            <div class="d-flex justify-content-between">
              <div>
                <p>${listing.title}</p>
                <p class="small text-muted">${listing.description}</p>
              </div>
            </div>
          </div>
          <hr class="my-0" />
          <div class="card-body pb-0">
            <div class="d-flex justify-content-between">
              <p>${cost} NOK</p>
            </div>
            <p class="small text-muted">${listing.bids.length} Bids</p>
          </div>
          <hr class="my-0" />


          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
              <input id="bid-amount" class="form-control" type="text" placeholder="Bid">
              <button id="bid-btn" type="button" class="btn btn-primary">Bid</button>
            </div>
          </div>
          <p id="error-bids-text" style="color:red;"></p>



        </div>
      </div>
    </div>
  </div>
</section>
`;
  return displayListings;
}

function addListeners() {
  sleep(1000).then(() => {
    document.getElementById('bid-btn').addEventListener('click', bid);
  });
}

//https://mdbootstrap.com/docs/standard/extended/product-cards/
