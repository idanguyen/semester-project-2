// https://www.w3schools.com/howto/howto_js_countdown.asp

export function getRemaingAuctionTime(time, timer) {
  var auctionOverTime = new Date(time).getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    var now = new Date().getTime();
    var remainingTime = auctionOverTime - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Display the result in the element with timer parameter
    document.getElementById(timer).innerHTML =
      days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    // If the count down is finished, write some text
    if (remainingTime < 0) {
      clearInterval(x);
      document.getElementById(timer).innerHTML = 'Auciton Expired';
    }
  }, 1000);
}
