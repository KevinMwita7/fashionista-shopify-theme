// let featuredMedia = document.querySelector('[data-is-featured-media="true"]');
let featuredMedia = document.querySelector("[id^=variant-featured-media-]");

// Initialize swiper and its thumbnails
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    freeMode: true,
    // watchSlidesProgress: true,
    direction: "horizontal",
    slidesPerView: 6,
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
    grabCursor: false,
    breakpoints: {
        768: {
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
});

// Initialize js-image-zoom
/*let productImages = document.querySelectorAll(".mySwiper2 .swiper-slide");

for(let i = 0; i < productImages.length; ++i) {
    new ImageZoom(productImages[i], {
        fillContainer: true,
        // offset: {vertical: 0, horizontal: 10},
        zoomPosition: "original",
    })
}*/