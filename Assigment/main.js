// Set the date we're counting down to
var countDownDate = new Date("Apr 25, 2023 15:37:25").getTime();

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
var player=document.getElementById("myplayer")
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
