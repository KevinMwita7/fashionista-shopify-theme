// Set the width attribute of image to enable browser to pick appropriate one from srcset
function setBannerImgWidth() {
    var elements = document.getElementsByClassName("banner-img");
    for(i = 0; i < elements.length; ++i) {
        elements[i].setAttribute("sizes", screen.width + "px")
    }
}

// Set the height of the banner to be the screen height
// TODO: Make it only apply to medium sized screens
function setBannerHeight(height) {
    var elements = document.getElementsByClassName("banner-slide");
    for(i = 0; i < elements.length; ++i) {
        elements[i].style.height = height || screen.height + "px";
    }
}

// Set the banner images depending on the screen resolution. Applicable for md screens and up
function setBannerImage() {
    if(screen.width >= 768) {
        var imgs = document.getElementsByClassName("bg-image");
        for(var i = 0; i < imgs.length; ++i) {
            // The image sizes increase at steps of 180.
            var index = Math.ceil(screen.width / 180) - 1;
            var src = imgs[i].dataset.bg.split(',')[index]
            var attr = src.split(' ');
            console.log(attr);
            imgs[i].style.backgroundImage = "url('" + attr[0].trim() + "')";
            setBannerHeight(attr[2].replace('h', 'px'));
        }
    }
}

window.addEventListener('load', ev => {
    setBannerImgWidth();
    // setBannerHeight();
    setBannerImage();
})

window.addEventListener('resize', ev => {
    setBannerImgWidth();
    // setBannerHeight();
    setBannerImage();
})

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

function showSlides() {
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
  // Change image every 5 seconds
  setTimeout(showSlides, 5000);
}