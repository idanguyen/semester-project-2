export function calculateTimeLeft(time) {
  let dateTime = new Date(time);

  let years = '';
  let months = '';
  let days = '';
  let hours = '';
  let minutes = '';
  let seconds = '';

  years = dateTime.getFullYear() - new Date().getFullYear();

  if (years === 0) {
    months = dateTime.getMonth() - new Date().getMonth();
  } else if (years === 1) {
    return years + ' year left';
  } else if (years > 1) {
    return years + ' years left';
  } else {
    return 'Expired Listing';
  }

  days = calculateDaysLeft(dateTime.getDate(), dateTime.getMonth());

  if (months === 0) {
    days = dateTime.getDate() - new Date().getDate();
  } else if (months === 1) {
    return months + ' month and ' + days + ' days left';
  } else if (months > 1) {
    return months + ' months and ' + days + ' days left';
  } else {
    return 'Expired Listing';
  }

  if (days === 0) {
    hours = calculateDaysLeft(dateTime.getDate(), dateTime.getMonth());
  } else if (days === 1) {
    return days + ' day left';
  } else if (days > 1) {
    return days + ' days left';
  } else {
    return 'Expired Listing';
  }

  if (hours === 0) {
    minutes = calculateDaysLeft(dateTime.getMinutes(), dateTime.getMinutes());
  } else if (hours === 1) {
    return hours + ' hour left';
  } else if (hours > 1) {
    return hours + ' hours left';
  } else {
    return 'Expired Listing';
  }

  seconds = calculateDaysLeft(dateTime.getSeconds(), dateTime.getSeconds());
  if (minutes === 0) {
    return seconds + ' seconds left';
  } else if (minutes === 1) {
    return minutes + ' minute left';
  } else if (minutes > 1) {
    return minutes + ' minutes left';
  } else {
    return 'Expired Listing';
  }
}

function calculateDaysLeft(day, month) {
  // because getMonth starts at 0, we add 1 to make it january
  month = month + 1;
  let numberOfDays = 0;
  let leapYear = new Date().getFullYear() % 4;
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    numberOfDays = 31;
  } else if (month === 2 && leapYear === 0) {
    numberOfDays = 29;
  } else if (month === 2 && leapYear != 0) {
    numberOfDays = 28;
  } else {
    numberOfDays = 30;
  }
  return numberOfDays - day;
}
