function showDateAndTime() {
  document.getElementById("display_date_and_time").innerHTML = Date();
}
// showDate();

// setTimeout(showDate,5000);  //ESLEY CHAI EK CHOTI DEKHAUXA ANI CHNAGE HUNNA

var i = setInterval(showDateAndTime, 1000);
function clearDateMove() {
  clearInterval(i);
}
setTimeout(clearDateMove, 5);

function showClock() {
  var todayDate = new Date();
  var hour = todayDate.getHours();
  var minute = todayDate.getMinutes();
  var second = todayDate.getSeconds();
  document.getElementById("display_clock").innerHTML =
    hour + ":" + minute + ":" + second;
}
setInterval(showClock, 1000);
