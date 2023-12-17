import { getItem } from '../localstorage/index.js';

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
