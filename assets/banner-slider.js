// Slider dots
var dots = document.getElementsByClassName("dot");

function setActiveDot(currentSlide) {
    // Remove active class from all dots and set on current one
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("dot-active");
    }
    dots[currentSlide].classList.add("dot-active");
}

// Banner slideshow
var slideIndex = 0;
showSlides();

function showSlides(event) {
  var i;
  var slides = document.getElementsByClassName("banner-slide");
  if(slides.length > 1) {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    var currentSlide = slideIndex - 1;
    slides[currentSlide].style.display = "block";
    setActiveDot(currentSlide);
    // Change image every 5 seconds
    setTimeout(showSlides, 5000);
  }
}

if (Shopify.designMode) {
  document.addEventListener("shopify:section:load", function(event) {
    slideIndex = 0;
  });
}