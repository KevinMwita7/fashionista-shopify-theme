// let featuredMedia = document.querySelector('[data-is-featured-media="true"]');
let featuredMedia = document.querySelector("[id^=variant-featured-media-]");

// Initialize swiper and its thumbnails
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
    direction: "horizontal",
    slidesPerView: 6,
    // centerInsufficientSlides: true,
    breakpoints: {
        768: {
            direction: "vertical"
        } 
    }
});

var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    initialSlide: featuredMedia ? +featuredMedia.id.split("-")[3] - 1 : 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    grabCursor: true,
    breakpoints: {
        768: {
            allowTouchMove: false,
            pagination: {
                // Set non existent class in order to hide pagination
                el: ".ix2pzra7iz",
                type: "progressbar"
            }
        }
    },
    thumbs: {
        swiper: swiper,
    },
    /*on: {
        slideChangeTransitionEnd: function() {
            // Hack to enable js-image-zoom library work on landscape images
            window.scrollTo(1, 1);
            console.log("Slide changed")
        }
    }*/
});

/*for(let i = 0; i < featuredMedia.attributes.length; ++i) {
    if(featuredMedia.attributes[i].name === "aria-label") {
      swiper2.slideTo(+featuredMedia.attributes[i].value[0] - 1);
      break;
    }
}*/

// Initialize zoom image
let productImages = document.querySelectorAll(".mySwiper2 .swiper-slide");

for(let i = 0; i < productImages.length; ++i) {
    new ImageZoom(productImages[i], {
        fillContainer: true,
        // offset: {vertical: 0, horizontal: 10},
        zoomPosition: "original",
    })
}