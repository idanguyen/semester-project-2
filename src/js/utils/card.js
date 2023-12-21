export function checkTitle(title) {
  if (title.length > 18) {
    return title.slice(0, 18) + '...';
  } else {
    return title;
  }
}
