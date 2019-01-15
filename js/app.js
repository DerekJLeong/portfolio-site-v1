window.onscroll = function rotateGear () {
    document.querySelector(".gear1").style.transform = "rotate(" + (window.scrollY * 4) + "deg)";
    document.querySelector(".gear2").style.transform = "rotate(-" + (window.scrollY * 4) + "deg)";
  }