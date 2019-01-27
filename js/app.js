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