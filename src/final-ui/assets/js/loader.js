window.addEventListener("load", function () {
  var animatedImage = document.getElementById('animated-image');

  setTimeout(function () {
    animatedImage.classList.add('colorful');
  }, 1700);

  setTimeout(function () {
    var loadingElement = document.getElementById('loading');
    loadingElement.style.transition = 'opacity 0.5s';
    loadingElement.style.opacity = '0';
  }, 2000);

  setTimeout(function () {
    document.getElementById('loading').remove();
  }, 3000);

});

// Because only Chrome supports offset-path, feGaussianBlur for now

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

if (!isChrome) {
  var infinityChrome = document.getElementsByClassName("infinityChrome")[0];
  var infinity = document.getElementsByClassName("infinity")[0];
  infinityChrome.style.display = "none";
  infinity.style.display = "block";
}