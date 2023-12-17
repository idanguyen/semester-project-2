export function goHomeListener(button) {
  let homeBtn = document.getElementById(button);
  if (homeBtn) {
    homeBtn.addEventListener('click', goHome);
  }
}

function goHome() {
  try {
    location.href = 'index.html';
  } catch {
    return alert('There was an issue going navigating the pages!');
  }
}
