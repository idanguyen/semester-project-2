/**
 * Creates a listing image for the card if it exists. If not a stock image is used.
 * source of image: https://images.pexels.com/photos/4033631/pexels-photo-4033631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
 * @function
 * @param input String of picture url
 * @returns {string} Returns a picture
 */
export function createImage(input) {
  if (input != null) {
    return input;
  } else {
    return './src/pages/common/images/standard-listing.jpeg';
  }
}
