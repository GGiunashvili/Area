// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
if (seconds < 10) {
    seconds = '0' + seconds;
}
if (minutes < 10) {
    minutes = '0' + minutes;
}
if (hours < 10) {
    hours = '0' + hours;
}
if (days < 10) {
  days = '0' + days;
}
    
  // Output the result in an element with id="demo"
 
           document.getElementById("demo1").innerHTML = days + " ";

         document.getElementById("demo2").innerHTML = hours + " ";

       document.getElementById("demo3").innerHTML = minutes + " ";

     document.getElementById("demo4").innerHTML = seconds + " ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
