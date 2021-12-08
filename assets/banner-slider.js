// Slider dots
var dots = document.getElementsByClassName("dot");

function setActiveDot(currentSlide) {
    // Remove active class from all dots and set on current one
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("dot-active");
    }
    if(dots.length) {
      dots[currentSlide].classList.add("dot-active");
    }
}

// Banner slideshow
var slideIndex = 0;
var timeoutId;
console.log(this.play_banner_slides);

showSlides();

function showSlides(event) {
  var i;
  var slides = document.getElementsByClassName("banner-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  var currentSlide = slideIndex - 1;
  slides[currentSlide].style.display = "block";
  setActiveDot(currentSlide);
  if(this.play_banner_slides) {
    timeoutId = setTimeout(showSlides, 5000);
  }
}

for(var i = 0; i < dots.length; ++i) {
  dots[i].addEventListener('click', function(event) {
    var idx = Number(event.target.dataset.index);
    clearTimeout(timeoutId);
    setActiveDot(idx);
    slideIndex = idx;
    showSlides();
  })
}

if(Shopify.designMode) {
  document.addEventListener("shopify:section:load", function(event) {
    slideIndex = 0;
    showSlides();
    // console.log(`play banner slides: ${this.play_banner_slides}`);
  });
}