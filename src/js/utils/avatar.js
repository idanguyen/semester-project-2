import { getItem } from '../localstorage/index.js';

/**
 * If the user is logged in it tries to get the login picture.
 * If it does not have one or is not logged in a standard stock image is used.
 * source avatar: https://www.freepik.com/free-vector/hand-drawn-different-people-icons-pack_17893869.htm#page=3&query=avatar&position=0&from_view=keyword&track=sph&uuid=42933467-2f40-4499-a897-c0b0da3c4784
 * @function setAvatar
 * @returns {string} Returns a picture
 */
export function setAvatar() {
  let profile = getItem('profile');
  if (profile != null) {
    let avatar = profile.avatar;
    if (avatar) {
      return profile.avatar;
    }
  } else {
    return 'src/pages/common/images/free-icon-stock.jpg';
  }
}
