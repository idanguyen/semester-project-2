/**
 * Add an event listener which returns the user to the main page when pressed.
 * @function
 */
export function goHomeListener(button) {
  let homeBtn = document.getElementById(button);
  if (homeBtn) {
    homeBtn.addEventListener('click', goHome);
  }
}

/**
 * The functionality to return to the main page.
 * @function
 */
function goHome() {
  try {
    location.href = 'index.html';
  } catch {
    return alert('There was an issue going navigating the pages!');
  }
}
