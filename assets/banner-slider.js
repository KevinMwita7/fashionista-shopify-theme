const options = {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  effect: window.innerWidth >= 768 ? "fade" : "",
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  on: {
    resize: function() {
      console.log(window.innerWidth)
    }
  },
  breakpoints: {
    0: {
      direction: "horizontal",
    },
    768: {
      direction: "vertical",
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  let swiper = new Swiper('#image-banner-sliders', options);

  if(Shopify.designMode) {
    document.addEventListener("shopify:section:load", function (event) {
      swiper = new Swiper('#image-banner-sliders', options);
    });

    document.addEventListener("shopify:section:unload", function (event) {
        swiper.destroy();
    });
        
    document.addEventListener("shopify:block:select", function(event) {
      swiper.slideTo(+event.target.dataset.slideIndex);
    });
  }
})