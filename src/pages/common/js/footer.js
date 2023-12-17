export function displayFooter() {
  return createFooter();
}

function createFooter() {
  let footer = `
    <br>
    <section class="">
        <footer class="text-center text-white" style="background-color: #0a4275;">
        <div class="container p-3">
            <section class="">
                <p class="d-flex justify-content-center align-items-center">
                    <span class="me-3">Vintage Auctions</span>
                </p>
            </section>
        </div>

        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2023 Copyright:
            <span class="text-white"">Ida Nguyen</span>
        </div>
        </footer>
    </section>
  `;
  return footer;
}

//https://mdbootstrap.com/docs/standard/navigation/footer/
