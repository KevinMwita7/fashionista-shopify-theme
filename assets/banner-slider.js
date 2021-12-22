let swiper;

function getEffect() {
  return window.innerWidth >= 768 ? "fade" : "";
}

const options = {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  effect: getEffect(),
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  on: {
    resize: function() {
      let slideIndex = swiper.realIndex;
      // console.log(slideIndex);
      // Reinitialize slider
      swiper.destroy();
      swiper = new Swiper('#image-banner-sliders', { ...options, effect: getEffect() });
      // swiper.slideTo(slideIndex);
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
  swiper = new Swiper('#image-banner-sliders', options);

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