/**
 * The footer is taken from: https://mdbootstrap.com/docs/standard/navigation/footer/ as the initial template, then customized for the
 * need of the website.
 * @function
 * @returns {string} Returns the HTML code for the footer
 */
export function displayFooter() {
  return createFooter();
}

/**
 * The footer is taken from: https://mdbootstrap.com/docs/standard/navigation/footer/ as the initial template, then customized for the
 * need of the website.
 * @function
 * @returns {string} Returns the HTML code for the footer
 */
function createFooter() {
  let footer = `
    <br>
    <section class="">
        <footer class="text-center text-white" style="background-color: #005f73;">
        <div class="container p-3">
            <section class="">
                <p class="d-flex justify-content-center align-items-center">
                    <span class="me-3">Everything Auctions</span>
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
