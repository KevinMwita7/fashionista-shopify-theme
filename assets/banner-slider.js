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
      console.log(event.target.dataset.shopifyEditorBlock.type === "slide", event.target.dataset.shopifyEditorBlock.type === "featured_collection", event.target.dataset.shopifyEditorBlock.type);
      swiper.slideTo(+event.target.dataset.slideIndex);
    });
  }
})