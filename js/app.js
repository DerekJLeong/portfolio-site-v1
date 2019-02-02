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
    document.querySelector(".gear1").style.transform = "rotate(" + (window.scrollY * 4) + "deg)";
    document.querySelector(".gear2").style.transform = "rotate(-" + (window.scrollY * 4) + "deg)";
}

// For Design Section Icon Carousel
var imgArray = [
  'img/design64x64.png',
  'img/responsive64x64.png',
  'img/happiness64x64.png'],
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

// For Design and Develop content click functionality
function mouseOverDes(id) {
  document.getElementById("des__content").style.display = "block";
}
function mouseOutDes(id) {
  document.getElementById("des__content").style.display = "none";
}
function mouseOverDev(id) {
  document.getElementById("dev__content").style.display = "block";
}
function mouseOutDev(id) {
  document.getElementById("dev__content").style.display = "none";
}

document.getElementById("des__listener").addEventListener("mouseover", mouseOverDes);
document.getElementById("des__listener").addEventListener("mouseout", mouseOutDes);
document.getElementById("dev__listener").addEventListener("mouseover", mouseOverDev);
document.getElementById("dev__listener").addEventListener("mouseout", mouseOutDev);

//Animating Hello Icon
function mouseOverHello(id) {
  document.getElementById("helloIcon").style.animation = 'fliperino .35s';
}
function mouseOutHello(id) {
  document.getElementById("helloIcon").style.animation = 'none';
}
document.getElementById("hello").addEventListener("mouseover", mouseOverHello);
document.getElementById("hello").addEventListener("mouseout", mouseOutHello);

