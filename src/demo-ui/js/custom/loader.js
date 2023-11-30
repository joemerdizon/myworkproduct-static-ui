$(window).on("load", function () {
    var animatedImage = document.getElementById('animated-image');

    setTimeout(function () {
      animatedImage.classList.add('colorful');
    }, 2700);

    setTimeout(function () {
      $("#loading").fadeOut(500);
    }, 3000);

    
  });
  // Because only Chrome supports offset-path, feGaussianBlur for now

  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

  if (!isChrome) {
    document.getElementsByClassName("infinityChrome")[0].style.display = "none";
    document.getElementsByClassName("infinity")[0].style.display = "block";
  }