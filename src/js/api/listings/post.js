import { apiBase } from '../api-base.js';
import { headers } from '../headers.js';
import { stringCompare } from '../../utils/strings.js';

export async function postListing() {
  let title = document.getElementById('title-cr-lst').value;
  let description = document.getElementById('description-cr-lst').value;
  let tags = [document.getElementById('tags-cr-lst').value];
  let media = [document.getElementById('media-cr-lst').value];
  let endsAt = new Date(
    document.getElementById('endsyear-cr-lst').value,
    document.getElementById('endsmonth-cr-lst').value,
    document.getElementById('endsday-cr-lst').value,
  );

  if (stringCompare(description.toString(), 'description')) {
    description = 'no description';
  }

  if (stringCompare(tags.toString(), 'tags')) {
    tags = ['none'];
  }

  if (stringCompare(media.toString(), 'media')) {
    media = [
      'https://images.pexels.com/photos/18939486/pexels-photo-18939486/free-photo-of-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    ];
  }

  const response = await fetch(`${apiBase}auction/listings`, {
    method: 'post',
    body: JSON.stringify({ title, description, tags, media, endsAt }),
    headers: headers('application/json'),
  });

  if (response.ok) {
    const lisitng = await response.json();
    return lisitng;
  }
  let error = await response.json();
  console.log(error.errors[0].message);
  document.getElementById('error-listing').innerHTML = error.errors[0].message;

  throw new Error(response.statusText);
}

//https://images.pexels.com/photos/18939486/pexels-photo-18939486/free-photo-of-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load
