let swiper;

function getEffect() {
  return window.innerWidth >= 768 ? "fade" : "";
}

function getDirection() {
  return window.innerWidth >= 768 ? "vertical" : "horizontal";
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
  direction: getDirection()
  /*breakpoints: {
    0: {
      direction: "horizontal",
    },
    768: {
      direction: "vertical",
    }
  }*/
}

document.addEventListener('DOMContentLoaded', function() {
  swiper = new Swiper('#image-banner-sliders', options);

  window.addEventListener('resize', function() {
      // let slideIndex = swiper.realIndex;
      // Reinitialize slider
      swiper.destroy(true, true);
      swiper = new Swiper('#image-banner-sliders', { ...options, effect: getEffect(), direction: getDirection() });
  })

  if(Shopify.designMode) {
    document.addEventListener("shopify:section:load", function (event) {
      swiper = new Swiper('#image-banner-sliders', options);
    });

    document.addEventListener("shopify:section:unload", function (event) {
        swiper.destroy();
    });
        
    document.addEventListener("shopify:block:select", function(event) {
      var block = JSON.parse(event.target.dataset.shopifyEditorBlock);
      if(block.type === "slide") {
        swiper.slideTo(+event.target.dataset.slideIndex);
      }
    });
  }
})