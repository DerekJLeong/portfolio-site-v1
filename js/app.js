//For nav
document.getElementById("nav__open").addEventListener("click", function () {
  console.log('clicked');
  document.getElementById("nav").classList.toggle("nav__show");
  console.log('toggled');
});
document.getElementById("nav__close").addEventListener("click", function () {
  console.log('clicked');
  document.getElementById("nav").classList.toggle("nav__show");
});

let navList = document.querySelectorAll("nav a");
for (var i = 0; i < navList.length; i++) {
  navList[i].addEventListener("click", function () {
    console.log('clicked');
    document.getElementById("nav").classList.toggle("nav__show");
  });
}  

// For Gear Scroll Animation
window.onscroll = function rotateGear () {
    document.querySelector(".gear1").style.transform = "rotate(" + (window.scrollY * 1.35) + "deg)";
    document.querySelector(".gear2").style.transform = "rotate(-" + (window.scrollY * 1.35) + "deg)";
}

// For Design Section Icon Carousel
var imgArray = [
  'img/design128x128.png',
  'img/responsive128x128.png',
  'img/happiness128x128.png'],
  curIndex = 0;
  imgDuration = 5000;

function slideShow() {
  document.getElementById('des__icon').className += "fadeOut";
  setTimeout(function() {
      document.getElementById('des__icon').src = imgArray[curIndex];
      document.getElementById('des__icon').className = "";
  },1000);
  curIndex++;
  if (curIndex == imgArray.length) { curIndex = 0; }
  setTimeout(slideShow, imgDuration);
}
window.addEventListener("load", function(event) {
  slideShow();
});

//Animating Hello Icon
function mouseOverHello(id) {
  document.getElementById("helloIcon").style.animation = 'fliperino .35s';
}
function mouseOutHello(id) {
  document.getElementById("helloIcon").style.animation = 'none';
}
document.getElementById("hello").addEventListener("mouseover", mouseOverHello);
document.getElementById("hello").addEventListener("mouseout", mouseOutHello);

