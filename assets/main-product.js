document.addEventListener('DOMContentLoaded', function() {
    let featuredMedia = document.querySelector('[data-is-featured-media="true"]');
    let initialSlide = +featuredMedia.attributes.getNamedItem("aria-label").value[0] - 1;

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
    
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        initialSlide: initialSlide,
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
