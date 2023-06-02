// Set the date we're counting down to
var countDownDate = new Date("Jun 25, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
// SlideShow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//function video player
var player = document.getElementById("myplayer");
function playPause() {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}
function stopVideo() {
  player.pause();
  if (player.currentTime) {
    player.currentTime = 0;
  }
}
function replayVideo() {
  player.currentTime = 0;
  player.play();
}
function increaseVolume() {
  if (player.volume < 1)
    player.volume = parseFloat(player.volume + 0.1).toFixed(1);
}
function decreaseVolume() {
  if (player.volume > 0)
    player.volume = parseFloat(player.volume - 0.1).toFixed(0);
}
function muteVolume() {
  if (player.muted) {
    player.muted = false;
  } else {
    player.muted = true;
  }
}
// add event listener for buttons
const btn = document.querySelectorAll(".buybtn");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener(
    "mouseenter",
    function (event) {
      event.target.style.color = "black";
    },
    false
  );
  btn[i].addEventListener(
    "mouseleave",
    function (event) {
      event.target.style.color = "";
    },
    false
  );
}
// add event Listener for  img
const img = document.querySelectorAll(".img");
for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("mouseenter",function (event) {
      event.target.style.borderColor = "red";
      img[i].lastElementChild.style.visibility = "visible";  
    }
  );
  img[i].addEventListener(
    "mouseleave",
    function (event) {
      event.target.style.borderColor = "white";
      img[i].lastElementChild.style.visibility = "hidden";  
    }
  );
}
// Validate email
function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    alert("Valid email address!");

    document.form1.text1.focus();

    return true;
  } else {
    alert("Invalid email address!");

    document.form1.text1.focus();

    return false;
  }
}
// get geolocation

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    console.log( "Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}
