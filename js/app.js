window.onscroll = function rotateGear () {
    document.querySelector(".gear1").style.transform = "rotate(" + (window.scrollY * 3.5) + "deg)";
    document.querySelector(".gear2").style.transform = "rotate(-" + (window.scrollY * 3.5) + "deg)";
  }