let featuredMedia = document.querySelector('[data-is-featured-media="true"]');

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        freeMode: true,
        watchSlidesProgress: true,
        direction: "horizontal",
        slidesPerView: 6,
        centerInsufficientSlides: true,
        breakpoints: {
           768: {
               direction: "vertical"
           } 
        }
    });
    console.log(featuredMedia.attributes.getNamedItem("aria-label"))
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        initialSlide: +featuredMedia.attributes.getNamedItem("aria-label").value[0] - 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
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
});
